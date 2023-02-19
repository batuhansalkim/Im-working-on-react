import React, {Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props);
        this.state ={
            count: 0,
        }
        
    }
    increase(){
        this.setState({
            count : this.state.count+ 1 ,
        })
    }
    decrease(){
        this.setState({
            count: this.state.count-1  ,
        })
    }

    render(){
        return(
            <>
            <p>Sayı : {this.state.count}</p>
            <button onClick={()=> this.increase()}>Arttır</button><br />
            <button onClick={ this.decrease()}>Azalt</button>
            </>
        )
    }
}


export default Counter;