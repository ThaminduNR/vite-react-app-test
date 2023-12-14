import React from "react";

class Card extends React.Component<any, any> {
    render() {
        return (
            <div className={`border-2 w-[300px] p-3 h-auto mt-5`}>
                <h1 className={`text-2xl font-bold mb-3`}>Learn React Using Typescript</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odio sit tempore?
                    Esse
                    natus nemo quia quibusdam recusandae sit, voluptatibus.</p>
                <button className={`bg-green-600 text-white p-2 mt-3`}>Read more..</button>
            </div>
        );
    }
}

export default Card;