import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import "./App.css";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    state={props.state.profilePage}
                                    addPost={props.addPost}
                                />
                            }
                        />
                        <Route
                            path="/dialogs/*"
                            element={
                                <Dialogs state={props.state.dialogsPage} />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
