import { Component } from "react";

class ClassEvent extends Component{
    tiklandi(){
        console.log("butona tiklandi")
    }
    render(){
        return(
            <div>
                This is a class based component
                <button onClick={this.tiklandi}>Tıklaaa</button> 
            </div>
        )
    }
}
export default ClassEvent; 














