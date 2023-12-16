import React from "react";

interface Props {
    type:string,
    name:string,
    placeholder?: string,
    label:string,
    optional:boolean
    style?: string
}
class Input extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <label htmlFor={this.props.name} className={`block`}> {this.props.label} {this.props.optional ? <span
                    className={`text-red-700`}>*</span> : ""} </label>
                <input type={this.props.type} id={this.props.name}
                       className={`block border-2 outline-none focus:border-green-400 p-1 ${this.props.style}`}
                       placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Input;