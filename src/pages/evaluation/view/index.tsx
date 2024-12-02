import downloadIcon from "../../../assets/icons/downloadIcon.svg"
import openIcon from "../../../assets/icons/openActivityIcon.svg";
import { CustomButton } from "../../../atoms/CustomButton/index.tsx";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles.ts"
import * as T from "./types.ts"
import * as H from "./helpers.ts"
import { useEffect, useState } from "react";
import api from "../../../services/api.ts";
import Modal from "../../../molecules/modal/index.tsx";

const EvaluationView = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>();
    const [openModal, setOpenModal] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState<any>();
    const [selectedActivities, setSelectedActivities] = useState<any[]>([]);
    const location = useLocation();
    const { studentId } = location.state || {};

    useEffect(() => {
        api.get(`/user/${studentId}`)
            .then((response) => {
                setUser(response.data)
            })
            .catch(() => {

            })
    }, []);

    const handleSelectActivity = (activity: any, isChecked: boolean) => {
        if (isChecked) {
            setSelectedActivities((prev: any) => [...prev, activity]);
        } else {
            setSelectedActivities((prev: any[]) => prev.filter((a: any) => a.id !== activity.id));
        }
    };

    const sumWorkload = (activities: T.Activity[]): number => {
        return activities.reduce((total, activity) => {
            return total + Number(activity.workload);
        }, 0);
    }

    function formatDate(dateInput: number, type: string) {
        const date = typeof dateInput === "string" 
        ? new Date(dateInput) 
        : new Date(dateInput * 1000);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    if (type === "show") return `${day}/${month}/${year}`;
    else return `${year}-${month}-${day}`;
    }

    const handleSubmit = async (type: string) => {
        try {
            await Promise.all(selectedActivities.map(async (activity) => {
                const updatedActivity = {
                    ...activity,
                    approval: type === "approval" ? "true" : "false",
                    startDate: formatDate(activity.startDate, "update"),
                };
                await api.put(`/user/${studentId}/activities/${activity.id}`, updatedActivity);
            }));
            H.handleAlert("success", "Salvo com sucesso!")
            navigate('/evaluation')
            H.refetchItems("activity");
        } catch (error) {
            console.error('Erro ao atualizar as atividades:', error);
        }
    };

    useEffect(() => {
        window.addEventListener("closeModal", (event: any) => {
            setOpenModal(event.detail.isOpenModal);
        })
    }, []);

    return (
        <S.Content>
            {openModal && <Modal type="comments" initialActivityValues={selectedActivity} />}
            <S.PageTitle>Avaliar atividade(s) complementar</S.PageTitle>

            <S.FilterContainer>
                <p><b>Nome do aluno: </b>{user?.name}</p>
                <p><b>Matrícula: </b>{user?.registration}</p>
                <p><b>Curso: </b>{user?.courses?.[0]?.courseName || "Não informado"}</p>
            </S.FilterContainer>

            <S.HoursContainer>
                <p>Total de horas lançadas: {sumWorkload(user?.activities || [])} horas</p>
                {/* <p>Total de horas avaliadas: {sumWorkload(user?.activities || [])} horas</p> */}
            </S.HoursContainer>

            <S.ActivitiesContainer>
                {user ? user.activities?.map((activity: any) => (
                    <S.ActivityBoxContainer key={activity.id}>
                        <S.ActivityDetails>
                                <S.DetailItem>Categoria da atividade: <S.DetailLink href="#">{activity.category || "Não informado"}</S.DetailLink></S.DetailItem>
                                <S.DetailItem>Carga horária da atividade: <S.DetailLink href="#">{activity.workload} horas</S.DetailLink></S.DetailItem>
                                <S.DetailItem>Início da atividade: {formatDate(activity?.startDate, "show") || "Não informado"}</S.DetailItem>
                                <S.DetailItem>Link do comprovante: {activity.proof ? <S.DetailLink href={activity.proof} target="_blank">{activity.proof}</S.DetailLink> : <span style={{ color: '#A0A0A0' }}>não informado</span>}</S.DetailItem>
                                <S.DetailItem>Comprovante da atividade: {activity.file ? <S.DetailLink target="_blank" href={activity.file}>Comprovante <span><img src={downloadIcon} alt="downloadicon" /></span></S.DetailLink> : <span style={{ color: '#A0A0A0' }}>não informado</span>}</S.DetailItem>
                        </S.ActivityDetails>
                        <S.CheckboxContainer>
                            <S.Checkbox
                                type="checkbox"
                                disabled={activity.approval !== "pending"}
                                onChange={(e) => handleSelectActivity(activity, e.target.checked)}
                            />
                            <img onClick={() => { setOpenModal(true), setSelectedActivity(activity) }} src={openIcon} alt="openIcon" />
                        </S.CheckboxContainer>
                    </S.ActivityBoxContainer>
                )) : []}
            </S.ActivitiesContainer>

            <S.ButtonsSection>
                <CustomButton
                    color="#1D1D1D"
                    hasborder={false}
                    children="Rejeitar"
                    onClick={() => handleSubmit("failed")}
                />
                <CustomButton
                    color="#2D60FF"
                    hasborder={false}
                    children="Aprovar"
                    onClick={() => handleSubmit("approval")}
                />
            </S.ButtonsSection>

        </S.Content>
    );
}

export default EvaluationView;