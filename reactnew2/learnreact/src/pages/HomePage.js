import React, {Component} from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../components/UserListComponent";

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[
                {
                    id:1,
                    name:"Batuhan",
                    surname:"Salkım",
                    email:"batu@gmial.com"
                },
                {
                    id: 2,
                    name: "Tunahan",
                    surname: "Salkım",
                    email: "tunahan@gmial.com"
                },
                {
                    id: 3,
                    name: "Necla",
                    surname: "Salkım",
                    email: "mustafa@gmial.com"
                },
                {
                    id: 4,
                    name: "Mustafa",
                    surname: "Salkım",
                    email: "necla@gmial.com"
                },

            ]
        }
    }
    render(){
        return(
            <div>
                <Navbar color="light" expand="md" light>
                    <div className="container">
                        <NavbarBrand href="/">react-intro</NavbarBrand>
                    </div>                  
                </Navbar>
                <UserListComponent users={this.state.users}/>
            </div>
        )
    }
}

export default HomePage;


