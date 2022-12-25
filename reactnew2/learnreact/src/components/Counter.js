import { Component } from "react";


class Counter extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         counter:0,
    //     }
    //     this.arttir=this.arttir.bind(this);
    // }

    constructor(){
        super();
        this.state={
            counter :0,
        }
        this.arttir =this.arttir.bind(this);
        this.azalt = this.azalt.bind(this);
    }

    arttir(){
        this.setState({
            counter :this.state.counter+5,
        })
    }
    
    azalt(){
        this.setState({
            counter:this.state.counter-5,
        })
    }

    render(){
        return(
            <div>
                <h3>Count value is : {this.state.counter}</h3>
                <button onClick={this.arttir}>Arttır</button><br />
                <button onClick={this.azalt}>Azalt</button>
            </div>
        )
    }
    // arttir(){
    //     this.setState({
    //         counter : this.state.counter +5,
    //     })
    // }
    
    // render(){
    //     return (<div>
    //         <h3>Count value is : {this.state.counter}</h3>
    //         <button onClick={this.arttir}>Arttır Buton</button>
    //     </div>) 
        
    // }
}

export default Counter;












