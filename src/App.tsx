import React from "react";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Card from "./components/card/Card.tsx";

const data = [
  {
    id: 1,
    title: "IJSE",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
  },
  {
    id: 2,
    title: "IJSE",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
  },
  {
    id: 3,
    title: "IJSE",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
  },
  {
    id: 4,
    title: "IJSE",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
  },
  {
    id: 5,
    title: "IJSE",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
  },
];

// @ts-ignore
class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div
            className={`grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 w-fit relative m-auto gap-5 `}
          >
            {data.map((r) => (
              <Card key={r.id} title={r.title} content={r.content} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

// @ts-ignore
export default App;