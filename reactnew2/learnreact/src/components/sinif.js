import React, {Component} from "react";

class sinif extends Component{
    render(){
        return <div > Bugün hava <span style={this.props.style}>{this.props.durum}</span>  </div>
    }
}
sinif.defaultProps={
    durum:"geçersiz bilgi",
    style : {color:"orange", backgroundColor:"purple"}
}

export default sinif;


