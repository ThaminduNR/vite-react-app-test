import React from "react";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Card from "./components/card/Card.tsx";


class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <Header/>
                <section>
                    <div
                        className={`grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 w-fit relative m-auto gap-5 `}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>

                    </div>

                </section>
                <Footer/>
            </div>
        );
    }
}

export default App;
