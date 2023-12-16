import React from "react";
interface Props {
  title?: string;
  content?: string;
}
class Card extends React.Component<Props, any> {
  render() {
    return (
      <div className={`border-2 w-[300px] p-3 h-auto mt-5`}>
        <h1 className={`text-2xl font-bold mb-3`}>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <button className={`bg-green-600 text-white p-2 mt-3`}>
          Read more..
        </button>
      </div>
    );
  }
}


export default Card;
