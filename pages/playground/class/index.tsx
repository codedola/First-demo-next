import React, { Component } from "react";

interface IProps {
}

interface IState {
    counter?: number;
    isShowMessage?: boolean
}
export default class PlayGround extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            counter: 0,
            isShowMessage: false
        }
        console.log("constructor: chạy 1 lần duy nhất khi component sinh ra");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }


    onIncreaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render() {
        console.log("render run")

        console.log("this.props: ", this.props);
        console.log("this.state: ", this.state);

        return (
            <div className="container">
                <h1>Play Ground - Life Cycle - React Hook</h1>
               <h2>Counter: {this.state.counter}</h2>
                {
                    this.state.counter === 5  ? <h2>Show message</h2> : null
                }
                
                <button
                    type="button"
                    style={{padding: 10, backgroundColor: "lightblue"}}
                    onClick={this.onIncreaseCounter}
                >
                    Increase Counter
                </button>
            </div>
        )
    }
}