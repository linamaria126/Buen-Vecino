import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Registration } from "./pages/Registration.jsx";
import  ModalApproval   from "./pages/ModalApproval.jsx";
import  Home  from "./pages/Home.jsx";
import { Single } from "./pages/single";
import  UserRegister  from "./pages/UserRegister.jsx";
import  Homeadmin  from "./pages/Homeadmin.jsx";
import injectContext from "./store/appContext";
import  Footer  from "./component/footer.jsx";




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                  <Routes>
                                       
                        <Route element={<Home />} path="/" />
                        <Route element={<Homeadmin />} path="/homeadmin" />
                        <Route element={<Registration />} path="/registration" />
                        <Route element={<UserRegister />} path="/userRegister" />
                        <Route element={<ModalApproval />} path="/modalApprobal" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
