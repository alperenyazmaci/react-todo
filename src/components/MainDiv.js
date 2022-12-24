import {Component} from "react";

class MainDiv extends Component{
    constructor() {
        super();
        this.state = {
            toDoList: [],
            counter: 0
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleAdd(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    handleRemoveAll(){
        this.setState({
            counter: 0
        });
    }

    render() {
        return(
            (<div className="container">
                <div className="div1">
                    <input className="input" type = "text"></input>
                    <button className="button1" onClick={this.handleAdd}>ADD</button>
                    <button className="button2" onClick={this.handleRemoveAll}>REMOVE ALL</button>
                </div>
                <div className="div2">
                    <h1>Item Count: {this.state.counter}</h1>
                </div>
                <div className="div3">
                    <ul>
                        
                    </ul>
                </div>
            </div>)
        )
    }
}

export default MainDiv;