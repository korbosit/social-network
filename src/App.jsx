import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
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
                </Routes>
            </div>
        </div>
    );
}

export default App;
