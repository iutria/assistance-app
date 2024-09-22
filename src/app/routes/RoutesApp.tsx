import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import { URLS } from "./config/urls";
import { routes } from "./config/routes";
import { Route as routeModel } from './models/route';
import { RouterValidator } from "./components/RouterValidator";

const RoutesApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={URLS.LOGIN} element={<Login />} />
        {
          routes.map(
            (item: routeModel, key: number) => <Route key={key} path={item.path} element={<RouterValidator {...item} />}>
              <Route path={item.path} element={ item.view } />
            </Route>
          )
        }
        <Route path='*' element={<>oh! no Recurso no encontrado</>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
