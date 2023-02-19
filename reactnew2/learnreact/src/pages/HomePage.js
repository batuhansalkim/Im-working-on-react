import React, {Component} from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../components/UserListComponent";
import { v4 as uuidv4 } from "uuid";
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[
                {
                    id:uuidv4(),
                    name:"Batuhan",
                    surname:"Salkım",
                    email:"batu@gmial.com"
                },
                {
                    id: uuidv4(),
                    name: "Tunahan",
                    surname: "Salkım",
                    email: "tunahan@gmial.com"
                },
                {
                    id: uuidv4(),
                    name: "Necla",
                    surname: "Salkım",
                    email: "mustafa@gmial.com"
                },
                {
                    id: uuidv4(),
                    name: "Mustafa",
                    surname: "Salkım",
                    email: "necla@gmial.com"
                },

            ],
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser=(name,surname,email)=>{
        if((name,surname,email)){
            const users = [...this.state.users];
            users.push({
                id:uuidv4(),
                name: name,
                surname:surname,
                email:email
            });
            this.setState({users});
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


