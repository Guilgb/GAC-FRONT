import { useEffect, useState } from "react";
import { CustomButton } from "../../atoms/CustomButton/index.tsx";
import Input from "../../atoms/Input/index.tsx";
import Select from "../../atoms/Select/index.tsx";
import * as S from "./styles.ts"
import api from "../../services/api.ts";
import { ActivitiesTable } from "../../molecules/ActivitiesTable/index.tsx";

const Evaluation = () => {
    const [filteredUsers, setFilteredUsers] = useState<any>([]);
    const [users, setUsers] = useState<any>();
    const [courses, setCourses] = useState<any>();
    const [filter, setFilter] = useState({
        name: "",
        registration: "",
        course: "",
        situation: "",
    });

    const getUsers = () => {
        api.get("/user").then((response) => {
            const FilterUsers = response.data.filter((user: any) => user.activities.length > 0);
            setUsers(FilterUsers);
            setFilteredUsers(FilterUsers);
        })
    }
    useEffect(() => {
        window.addEventListener("activity", () => {
            getUsers();
        })
    }, []);

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        api.get("/user/allCourses").then((response) => {
            const filterCourses = response.data.filter((course: any) => course.id);
            setCourses(filterCourses.map((item: any) => item.courseName))
        })
    }, [])

    const filterUsers = () => {
        if (!users || !filteredUsers) return [];

        return filteredUsers?.filter((user: any) => {
            const filterByName = filter.name ? user.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
            const filterByRegistration = filter.registration ? user.registration.includes(filter.registration) : true;
            const filterByCourse = filter.course ? user.courses?.[0]?.courseName === filter.course : true;
            const filterBySituation = filter.situation ? filter.situation === "Pendente" ? user.activities.some((activity: any) => activity.approval === "pending") : user.activities.every((activity: any) => activity.approval !== "pending") : true;
            return filterByName && filterByRegistration && filterByCourse && filterBySituation;
        });
    };


    return (
        <S.Content>
            <S.PageTitle>Filtrar Atividade(s)</S.PageTitle>

            <S.FilterContainer>
                <S.InputsFilter>
                    <Input
                        label="Nome do aluno(a)"
                        type="text"
                        placeholder="Nome"
                        onChange={(event) => setFilter({ ...filter, name: event.target.value })}
                        light={true}
                    />
                    <Input
                        label="Matrícula"
                        type="text"
                        placeholder="Digite a matrícula do(a) aluno(a)"
                        onChange={(event) => setFilter({ ...filter, registration: event.target.value })}
                        light={true}
                    />
                    <Select
                        label="Curso"
                        onChange={(event) => setFilter({ ...filter, course: event.target.value })}
                        options={courses}
                        value={filter.course}
                    />
                    <Select
                        label="Situação"
                        onChange={(event) => setFilter({ ...filter, situation: event.target.value })}
                        options={["Pendente", "Finalizado"]}
                        value={filter.situation}
                    />
                </S.InputsFilter>
                <S.SearchButton>
                    <CustomButton
                        children="Buscar"
                        color="#0B5F26"
                        hasborder={false}
                        hasIcon={true}
                        iconName="search"
                        height="1.875rem"
                        onClick={() => setUsers(filterUsers)}
                    />
                </S.SearchButton>
            </S.FilterContainer>

            <ActivitiesTable type="evalueateActivity" evalueateActivities={users} />
        </S.Content>
    );
}

export default Evaluation;