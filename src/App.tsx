import React from "react";


class App extends React.Component<any, any> {
    state = {
        count: 0,
        visible: true
    };

    /*  up = (): void => {
          this.setState({count: this.state.count + 1});
      }

      down = (): void => {
          this.setState({count: this.state.count - 1});
      }*/

    update = (type: string): void => {
        switch (type) {
            case  "up":
                this.setState({count: this.state.count + 1});
                break;
            default:
                this.setState({count: this.state.count - 1});
                break;

        }
    }

    render() {
        return (
            <div className="m-5">

                <button className="bg-green-600 px-5 inline" onClick={() => this.update('up')}>+</button>
                <div className="inline mx-5 font-bold">{this.state.count}</div>
                <button className="bg-red-600 px-5 inline" onClick={() => this.update('down')}>-</button>

            </div>
        );
    }
}

export default App;
