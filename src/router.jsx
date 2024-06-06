import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardView from "./views/DashboardView";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";

export default function  Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/home' element={<DashboardView/>} index/>
                </Route>
                <Route element={<AuthLayout/>}>
                <Route path='/' element={<LoginView/>}/>
                <Route path='/registro' element={<RegisterView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}