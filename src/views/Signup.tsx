
import Input from "../components/input/Input.tsx";


function Signup() {

        return (
            <section className={`flex justify-center`}>
                <div className={`w-[500px] bg-cyan-100 flex flex-col items-center p-[50px] m-[30px] rounded-lg shadow-md`}>
                    <div className={`flex gap-3`}>
                        <div>
                            <Input label={"First Name"} name={"fname"} type={"text"} placeholder={"First name"} optional={true}/>
                        </div>
                        <div>
                            <label htmlFor="lastname" className={`block`}>last name <span
                                className={`text-red-700`}>*</span></label>
                            <input type="text" id="firstname"
                                   className={`block border-2 outline-none focus:border-green-400 p-1`}
                                   placeholder="name"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="username" className={`block`}>username <span
                            className={`text-red-700`}>*</span></label>
                        <input type="text" id="username"
                               className={`block border-2 outline-none focus:border-green-400 p-1 w-[400px]`}
                               placeholder="name"/>
                    </div>

                    <div>
                        <label htmlFor="email" className={`block`}>Email <span
                            className={`text-red-700`}>*</span></label>
                        <input type="email" id="email"
                               className={`block border-2 outline-none focus:border-green-400 p-1 w-[400px]`}
                               placeholder="Email"/>
                    </div>

                    <div className={`mt-2`}>
                        <label htmlFor="password" className={`block`}>Password <span
                            className={`text-red-700`}>*</span></label>
                        <input type="password" id="password"
                               className={`block border-2 outline-none focus:border-green-400 p-1 w-[400px]`}
                               placeholder="password"/>
                    </div>
                    <button className={`py-2 px-3 rounded text-white mt-4 bg-blue-400`}>Sign Up</button>


                </div>
            </section>
        );

}

export default Signup;
