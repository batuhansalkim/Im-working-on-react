import React , {Component} from "react";
import { connect } from "react-redux";


class CounterValue extends Component{
    render(){
        const {value}= this.props;
        return(
            <div>{value}</div>
        )
    }
}
const mapStateToProps = (state) =>{
    const {counter} = state; 
    return{
        value : counter.value,
    }
} 

export default connect(mapStateToProps) (CounterValue);