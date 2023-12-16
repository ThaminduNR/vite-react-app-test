import React from "react";


class Login extends React.Component<any, any> {
    render() {
        return (
            <section className={`flex justify-center`}>
                <div className={`w-[300px] bg-cyan-100 flex flex-col items-center p-[50px] m-[30px] rounded-lg`}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
                        alt="logo" className={`w-[150px]`}/>

                    <div>
                        <label htmlFor="email" className={`block`}>Email <span
                            className={`text-red-700`}>*</span></label>
                        <input type="email" id="email" className={`block border-2 outline-none focus:border-green-400 p-1`}
                               placeholder="Email"/>
                    </div>

                    <div className={`mt-2`}>
                        <label htmlFor="password" className={`block`}>Password <span
                            className={`text-red-700`}>*</span></label>
                        <input type="password" id="password"
                               className={`block border-2 outline-none focus:border-green-400 p-1`}
                               placeholder="password"/>
                    </div>
                    <button>Sign in</button>
                </div>
            </section>
        );
    }
}

export default Login;
