import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Input from "../components/input/Input.tsx";


class Editor extends React.Component<any, any> {
    state = {
        value: ""
    }

    render() {
        return (
            <div>
                <div className={`w-[1300px] flex justify-end`}>
                    <button className={`py-2 px-3 rounded text-white mt-4 bg-blue-400`}>Sign in</button>
                    <button className={`py-2 px-3 rounded text-white mt-4 bg-blue-400 ml-2`}>Sign in</button>
                </div>
                <div className={`flex justify-center`}>
                    <div className={`w-[1300px]`}>
                        <Input label={"Title"} name={"text"} type={"text"} placeholder={"Title"} optional={false}
                               style={`w-full `}/>
                        <div className={`mt-3`}>
                            <ReactQuill theme="snow" value={this.state.value} onChange={() => this.state}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;
