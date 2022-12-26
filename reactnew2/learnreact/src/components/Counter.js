import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            sayi:0,
        }
        this.arttir=this.arttir.bind(this);
        this.azalt = this.azalt.bind(this);
    }
    arttir(){
        this.setState({
            sayi:this.state.sayi+1,
        })
    }
    azalt(){
        this.setState({
            sayi:this.state.sayi-1,
        })
    }
    

    render(){
        return(
            <div>
                <h3>Sayinin Degeri : {this.state.sayi}</h3>
                <button onClick={this.arttir}>+</button><br /><br />
                <button onClick={this.azalt}>-</button>
            </div>
        )
    }
}
export default Counter;















