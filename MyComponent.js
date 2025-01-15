import React from "react";
import "./MyComponent.css";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    Counter = () => {
        this.setState({
            counter: ++this.state.counter,
        })}

    renderDisplay=()=>{
        return(
            <h3>{this.state.counter}</h3>
        )
    }

    renderButtons=()=>{
        return(
            <div className="btn">
                 <button onClick={this.Counter}>Click Me !</button>
                <button onClick={this.Counter}>Click Me !</button>
                <button onClick={this.Counter}>Click Me !</button>
                <button onClick={this.Counter}>Click Me !</button>
                <button onClick={this.Counter}>Click Me !</button>
                <button onClick={this.Counter}>Click Me !</button>
            </div>
        )
    }

    

    render() {
        return (
            <div>
               {this.renderDisplay()}
               {this.renderButtons()}
            </div>
        )

    }
}

export default MyComponent;