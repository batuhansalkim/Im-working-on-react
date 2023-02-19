import React, { Component } from 'react'
import {  Alert, Table } from 'reactstrap'
import FormComponent from './FormComponent';



class UserListComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='container'>
        <button className='btn btn-primary'>Add</button>
        <FormComponent/>
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
                                    <button className='btn btn-warning'>Edit</button>
                                    &nbsp;
                                    <button className='btn btn-danger'>Delete</button>
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