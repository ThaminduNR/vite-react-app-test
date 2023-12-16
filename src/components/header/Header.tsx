import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component<any, any> {
    render() {
        return (
            <header className={`p-3 bg-amber-100`}>
                <nav className={`flex items-center justify-between`}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
                        alt="logo" className={`w-[70px]`}/>
                    <ul className={`flex gap-5`}>
                        <li><Link to={"/"}>Article</Link></li>
                        <li><Link to={"/editor"}>Your Article</Link></li>
                        <li>Write new Article</li>
                        <li><Link to={"/login"}>Sign in</Link></li>
                        <li><Link to={"/signup"}>Sign up</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;