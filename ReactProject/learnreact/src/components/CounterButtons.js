import React, {Component} from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
class CounterButtons extends Component{
    render(){
        const {increase,decrement} = this.props;
        return <div>
            <button onClick={() =>increase()}>Arttır</button>
            <button onClick={()=>decrement()}>Azalt</button>
        </div>
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        increase:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    };
}
export default connect(null, mapDispatchToProps) (CounterButtons);