import React from "react";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Login from "./views/Login.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home.tsx";
import Signup from "./views/Signup.tsx";
import Editor from "./views/Editor.tsx";


class App extends React.Component<any, any> {
    // state = {
    //   count: 0,
    // };


    up = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (

            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/signup"} element={<Signup/>}/>
                        <Route path={"/editor"} element={<Editor/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>


            </div>
        );
    }
}

export default App;
