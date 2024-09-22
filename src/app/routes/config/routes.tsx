import { FaHome } from "react-icons/fa";
import { Route } from "../models/route";
import { URLS } from "./urls";
import { Welcome } from "../../views/Welcome";
import { Student, Teacher } from "../../modules";

export const routes: Route[] = [
    {
        title: 'Inicio',
        path: URLS.HOME,
        icon: <FaHome/>,
        view: <Welcome/>
    },
    {
        title: 'Estudiantes',
        path: URLS.STUDENTS,
        icon: <FaHome/>,
        view: <Student/>
    },
    {
        title: 'Docentes',
        path: URLS.TEACHERS,
        icon: <FaHome/>,
        view: <Teacher/>
    },
]