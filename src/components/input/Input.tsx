import React from "react";

interface Props {
    type:string,
    name:string,
    placeholder?: string,
    label:string,
    optional:boolean
}
class Input extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <label htmlFor={this.props.name} className={`block`}> {this.props.label} <span
                    className={`text-red-700`}>*</span></label>
                <input type={this.props.type} id={this.props.name}
                       className={`block border-2 outline-none focus:border-green-400 p-1 w-[300px]`}
                       placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Input;