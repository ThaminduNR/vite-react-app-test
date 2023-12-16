import React from "react";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Login from "./views/Login.tsx";


interface Props{

}

interface State{
  count:number;
}

class App extends React.Component<Props, State> {
  // state = {
  //   count: 0,
  // };



  up = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <Header />
        {/* <Home/> */}
        <Login/>
        <Footer />
      </div>
    );
  }
}

export default App;
