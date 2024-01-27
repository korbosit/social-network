import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

// function App(props) {
//     return (
//         <div className="app-wrapper">
//             <HeaderContainer />
//             <Navbar />
//             <div className="app-wrapper-content">
//                 <Routes>
//                     <Route
//                         path="/profile/:userId?"
//                         element={<ProfileContainer />}
//                     />
//                     <Route path="/dialogs/*" element={<DialogsContainer />} />
//                     <Route path="/users/" element={<UsersContainer />} />
//                     <Route path="/login/" element={<LoginPage />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// }

function App({ initializeApp, initialized }) {
    const navigate = useNavigate();

    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    if (!initialized) {
        return <Preloader />;
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route
                        path="/profile/:userId?"
                        element={<ProfileContainer />}
                    />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/users/" element={<UsersContainer />} />
                    <Route path="/login/" element={<LoginPage />} />
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
