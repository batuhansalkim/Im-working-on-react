import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state= {
            counter: 0,
        }
        this.arttir = this.arttir.bind(this);
    }
    arttir(){
        console.log(this);
        this.setState({
            counter: this.state.counter + 5,
        })
    }
    azalt(){
        this.setState({
            counter: this.state.counter- 5,
        })
    }
    render(){
        return (<div>
            <h3>Count value is : {this.state.counter}</h3>
            <button onClick={this.arttir}>Arttır Buton</button>
            
        </div>) 
        
    }
}

export default Counter;













