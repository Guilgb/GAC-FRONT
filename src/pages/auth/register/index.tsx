import { CustomButton } from "../../../atoms/CustomButton";
import Input from "../../../atoms/Input";
import * as S from "./styles"
import * as H from "./helpers"
import { useNavigate } from "react-router-dom";
import userIcon from '../../../assets/icons/circle-user-icon.svg';
import { useEffect, useState } from "react";
import api from "../../../services/api";
import Select from "../../../atoms/Select";
import Loading from "../../../molecules/Loading";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<{
        name: string;
        email: string;
        registration: string;
        courses: string[];
        password: string;
        confirmPassword: string;
        isAdmin: boolean;
        permissions: string[]
    }>({
        name: "",
        email: "",
        registration: "",
        courses: [],
        password: "",
        confirmPassword: "",
        isAdmin: false,
        permissions: ["dashboard", "activities", "profile"],
    })

    useEffect(() => {
        api.get('/user/allCourses').then((response) => {
            const filterCourses = response.data.filter((course: any) => course.id)
            setCourses(filterCourses.map((course: any) => course.courseName));
        })
            .catch(() => {
            })
    }, [])

    const handleSubmit = (event: any) => {
        setLoading(true)
        event.preventDefault();
        if (form.password === form.confirmPassword) {
            api.post('/user', form).then(() => {
                H.handleAlert('success', 'Conta criada com sucesso')
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
                setLoading(false)
            })
                .catch(() => {
                    H.handleAlert('error', 'Erro ao criar conta')
                    setLoading(false)
                })
        } else {
            H.handleAlert('error', 'As senhas precisam ser iguais')
        }
    }

    useEffect(() => {
        const handleAlert = (event: any) => {
            if (event.detail.type === "success") toast.success(event.detail.message);
            else toast.error(event.detail.message);
        };
        window.addEventListener("handleAlert", handleAlert);
        return () => {
            window.removeEventListener("handleAlert", handleAlert);
        };
    }, []);

    return (
        <S.Form onSubmit={handleSubmit}>
            <Toaster
                position="top-right"
            />
            <S.Title>
                <img src={userIcon} alt="userIcon" />
                Criar conta
            </S.Title>

            <S.InputsWrapper>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                    label="Email"
                    type="email"
                    placeholder="exemple@example.com"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}

                />
                <Input
                    label="Matrícula"
                    type="text"
                    placeholder="Matrícula"
                    onChange={(e) => setForm({ ...form, registration: e.target.value })}

                />
                <Select
                    label="Curso"
                    onChange={(e) => setForm({ ...form, courses: [e.target.value as string] })}
                    options={courses ? courses : []}
                    value={form.courses[0]}
                />

                <Input
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}

                />
                <Input
                    label="Confirmar senha"
                    type="password"
                    placeholder="Confirmar senha"
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}

                />
            </S.InputsWrapper>

            {loading ? <Loading /> :
                <S.ButtonsWrapper>
                    <CustomButton
                        children="Salvar"
                        onClick={() => handleSubmit}
                        color="#2D60FF"
                        hasborder={false}
                        type="submit"
                    />
                    <CustomButton
                        children="Voltar"
                        onClick={() => navigate('/login')}
                        color="#1D1D1D"
                        hasborder={false}
                    />
                </S.ButtonsWrapper>
            }
        </S.Form>
    )
}

export default Register;