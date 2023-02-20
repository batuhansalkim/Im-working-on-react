import React, { Component } from 'react'
import {  Alert, Table } from 'reactstrap'
import FormComponent from './FormComponent';



class UserListComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            visible:false,
            user:{},
        }
        
        this.hide= this.hide.bind(this);
    }
    hide(){
        this.setState({visible:false});
    }
    getElementById(value){
        this.setState({
            user:value,
            visible:true,
            title:value.name
        })
    }
  render() {
    return (
      <div className='container mt-5'>
        <button className='btn btn-primary' onClick={()=> this.setState({user:{}, visible:true, title:"New User"})} >Add</button>
        {
                this.state.visible ? (<FormComponent 
                    visible={this.state.visible} 
                    hide={this.hide} 
                    addUser={this.props.addUser} 
                    user={this.state.user} 
                    title ={this.state.title}
                    />):null
        }
            {this.props.users.length > 0  ?(
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row"> {user.id}</th>
                                <td>{user.name} </td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={()=>this.getElementById(user)}>Edit</button>
                                    &nbsp;
                                    <button className='btn btn-danger' onClick={()=>this.props.deleteUser(user)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>):<Alert color='warning'>There is no users</Alert>}
      </div>
    )
  }
}

export default UserListComponent;