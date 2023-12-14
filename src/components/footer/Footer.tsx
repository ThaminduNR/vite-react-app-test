import React from "react";

class Footer extends React.Component<any, any> {
    render() {
        return (
            <footer className={`bg-black text-white p-5`}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
                    alt="logo" className={`w-[90px]`}/>
                <ul>
                    <li>123, Flower Rd Colombo</li>
                    <li>+94 78 56 324</li>
                    <li>+94 78 56 324</li>
                    <li>achd@gmail.com</li>
                </ul>
                <div className={`text-center`}>Copyright © 2023 achd Labs Inc.</div>
            </footer>
        );
    }
}

export default Footer;