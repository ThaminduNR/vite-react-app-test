import React from "react";

class Header extends React.Component<any, any> {
    render() {
        return (
            <header className={`p-3 bg-amber-100`}>
                <nav className={`flex items-center justify-between`}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
                        alt="logo" className={`w-[70px]`}/>
                    <ul className={`flex gap-5`}>
                        <li>Article</li>
                        <li>Your Article</li>
                        <li>Write new Article</li>
                        <li>Create an account</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;