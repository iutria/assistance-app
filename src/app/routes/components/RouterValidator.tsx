import { ReactElement, useState } from "react";
import { Route } from "../models/route";
import { Home } from "../../views";
import { Outlet } from "react-router-dom";

export const RouterValidator = ({title, icon}: Route) => {

    const [page, setPage] = useState<ReactElement>();

    return (
        <Home children={<Outlet/>} icon={icon} title={title}/>
    )
}
