import React from "react";
import Card from "../components/card/Card.tsx";

interface Data {
  id: number;
  title: string;
  content: string;
}
const data = [
    {
        id: 1,
        title: "IJSE",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
    },
    {
        id: 2,
        title: "GDSE",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
    },
    {
        id: 3,
        title: "CMJD",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
    },
    {
        id: 4,
        title: "JavaScript",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
    },
    {
        id: 5,
        title: "TypeScripts",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
    },
];


class Home extends React.Component<any, Data> {
    render() {
        return (
            <section>
                <div
                    className={`grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 w-fit relative m-auto gap-5 `}
                >
                    {data.map((r) => (
                        <Card key={r.id} title={r.title} content={r.content} />

                    ))}

                </div>
            </section>
        );
    }
}
export default Home;
