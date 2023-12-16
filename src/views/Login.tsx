import React from "react";
import {Link} from "react-router-dom";
import Input from "../components/input/Input.tsx";


class Login extends React.Component<any, any> {
    render() {
        return (
            <section className={`flex justify-center`}>
                <div className={`w-[400px] bg-cyan-100 flex flex-col items-center p-[50px] m-[30px] rounded-lg`}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
                        alt="logo" className={`w-[150px]`}/>

                    <div>
                        <Input label={"Email"} name={"email"} type={"email"} placeholder={"Email"} optional={true}/>
                    </div>

                    <div className={`mt-2`}>
                        <Input label={"Password"} name={"password"} type={"password"} placeholder={"password"} optional={true}/>
                    </div>
                    <button className={`py-2 px-3 rounded text-white mt-4 bg-blue-400`}>Sign in</button>

                    <div className={`text-center mt-5`}>
                        Do not have an Account <span className={`text-blue-600`}><Link
                        to={"/signup"}> Sign up now</Link></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;
