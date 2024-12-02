import openIcon from "../../assets/icons/openActivityIcon.svg";
import { CustomButton } from "../../atoms/CustomButton";
import { useNavigate } from 'react-router-dom';
import trashIcon from "../../assets/icons/trash-icon.png";

import * as S from './styles';
import * as T from './types';
import * as H from './helpers';

import { useEffect, useState } from "react";
import api from "../../services/api";
import Modal from "../modal";
import Loading from "../Loading";

interface ActivitiesProps {
    type: string,
    evalueateActivities?: any
}

export const ActivitiesTable = ({ type, evalueateActivities }: ActivitiesProps) => {
    const userId = sessionStorage.getItem("userId");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);
    const [pendingActivities, setPendingActivities] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState("confirmation");
    const [activityValues, setActivityValues] = useState<T.ActivityTableItem>();
    const [modalActivity, setModalActivity] = useState<T.ActivityTableItem>();

    const getActivities = () => {
        setLoading(true);
        if (type === "pendingActivity") {
            api.get(`/user/${userId}`).then((response) => {
                setPendingActivities(response.data.activities);
            })
        } else {
            const activitiesInSession = sessionStorage.getItem("activities");
            if (activitiesInSession) setActivities(JSON.parse(activitiesInSession));
        }
        setLoading(false);
    }
    const handleDeleteActivity = (id: string) => {
        setLoading(true);
        setOpenModal(false);
        api.delete(`/user/${userId}/activities/${id}`).then(() => {
            dispatchEvent(
                new CustomEvent("handleAlert", {
                    detail: { type: "success", message: "Deletado com sucesso!" },
                })
            )
            let activitiesInSession = JSON.parse(sessionStorage.getItem("activities") || "[]");
            activitiesInSession = activitiesInSession.filter((activity: T.ActivityTableItem) => activity.id !== id);
            sessionStorage.setItem("activities", JSON.stringify(activitiesInSession));
            getActivities();
        }).catch(() => {
            dispatchEvent(
                new CustomEvent("handleAlert", {
                    detail: { type: "error", message: "Erro ao deletar!" },
                })
            )
        })
        setLoading(false);
    }

    const handleSend = () => {
        if (activities.length > 0) {
            H.handleAlert("success", "Enviado com sucesso!");
            sessionStorage.setItem("activities", JSON.stringify([]));
        }
    }

    useEffect(() => {
        window.addEventListener("closeModal", (event: any) => {
            setOpenModal(event.detail.isOpenModal);
        })
    }, []);

    useEffect(() => {
        window.addEventListener("refetchItems", () => {
            getActivities();
        })
    }, []);

    useEffect(() => {
        getActivities();
    }, [type])

    switch (type) {
        case "addActivity":
            return (
                <>
                    {openModal &&
                        <Modal type={modalType}
                            handleDelete={modalActivity ? () => handleDeleteActivity(modalActivity.id) : undefined}
                            addActivityInitialState={modalActivity}
                            initialActivityValues={activityValues}
                        />
                    }
                    {loading ? <Loading /> :
                        <S.TableWrapper>
                            <S.Table maxHeight={false}>
                                {activities.length > 0 &&
                                    <S.TableHeader>
                                        <tr>
                                            <th>Categoria</th>
                                            <th>Carga horária</th>
                                            <th>Abrir</th>
                                            <th>Remover</th>
                                        </tr>
                                    </S.TableHeader>}
                                {activities && activities.map((activity: T.ActivityTableItem, index) =>
                                    <S.TableRow key={index}>
                                        <td>{activity?.category || "Não informada"}</td>
                                        <td>{activity.workload} horas</td>
                                        <td><img
                                            onClick={() => {
                                                setOpenModal(true);
                                                setModalType("addActivity");
                                                setActivityValues(activity);
                                            }}
                                            src={openIcon}
                                            alt="OpenIcon"
                                        /></td>
                                        <td><img
                                            onClick={() => {
                                                setOpenModal(true);
                                                setModalActivity(activity);
                                                setModalType("confirmation");
                                            }}
                                            src={trashIcon}
                                            alt="trashIcon"
                                        /></td>
                                    </S.TableRow>)}
                                {activities.length === 0 && <p>Nenhuma atividade cadastrada.</p>}
                            </S.Table>

                            <S.SendButton>
                                <CustomButton
                                    children="Enviar"
                                    color="#2D60FF"
                                    hasborder={false}
                                    onClick={handleSend}
                                    hasIcon={true}
                                    iconName="upload"
                                />
                            </S.SendButton>
                        </S.TableWrapper>}
                </>
            )
        case "pendingActivity":
            return (
                <>
                    {openModal && <Modal type="comments" initialActivityValues={modalActivity} />}
                    {loading ? <Loading /> :
                        <S.TableWrapper>
                            <S.Table maxHeight={false}>
                                {pendingActivities.length != 0 &&
                                    <S.TableHeader>
                                        <tr>
                                            <th>Categoria</th>
                                            <th>Carga horária total</th>
                                            <th>Abrir</th>
                                            <th>Status</th>
                                        </tr>
                                    </S.TableHeader>}
                                {pendingActivities && pendingActivities.map((activity: any, index) =>
                                    <tbody>
                                        <S.TableRow key={index}>
                                            <>
                                                <td>{activity.category || "Não informada"}</td>
                                                <td>{activity.workload} horas</td>
                                                <td><img onClick={() => { setOpenModal(true), setModalActivity(activity) }} src={openIcon} alt="openIcon" /></td>
                                                <S.Status
                                                    status={activity.approval == "pending" ? "pending"
                                                        : activity.approval == "true" ? "true" : "false"}
                                                >{activity.approval == "pending" ? "Pendente" : activity.approval == "true" ? "Aprovado" : "Rejeitado"}</S.Status>
                                            </>
                                        </S.TableRow>
                                    </tbody>
                                )}
                                {activities.length === 0 && <p>Nenhuma atividade cadastrada.</p>}
                            </S.Table>
                        </S.TableWrapper>}
                </>
            )
        case "evalueateActivity":
            return (
                <>
                    {loading ? <Loading /> :
                        <S.Table maxHeight={false}>
                            <S.TableHeader>
                                <tr>
                                    <th>Nome do aluno(a)</th>
                                    <th>Matrícula</th>
                                    <th>Curso</th>
                                    <th>Situação</th>
                                    <th>Abrir</th>
                                </tr>
                            </S.TableHeader>
                            {evalueateActivities ? evalueateActivities.map((user: any) => (
                                <S.TableRow key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.registration}</td>
                                    <td>{user?.courses?.[0]?.courseName || "Não informado"}</td>
                                    <S.Status status={user.activities.some((activity: any) => activity.approval === 'pending') ? 'pending' : 'finished'}>{user.activities.some((activity: any) => activity.approval === 'pending') ? 'Pendente' : 'Finalizado'}
                                    </S.Status>
                                    <td><img onClick={() => { navigate("/evaluation/view", { state: { studentId: user.id } }) }} src={openIcon} alt="openIcon" /></td>
                                </S.TableRow>
                            )) : []}
                        </S.Table>}
                </>
            )
    }
}