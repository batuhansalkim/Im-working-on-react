import React, { Component } from 'react'
import { Table } from 'reactstrap'
export default class UserListComponent extends Component {
  render() {
    return (
      <div className='container'>
        <button className='btn btn-primary'>Add</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> 1</th>
                        <td>Mark </td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button className='btn btn-warning'>Edit</button>
                            &nbsp;
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <button className='btn btn-warning'>Edit</button>
                            &nbsp;
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"> 3</th>
                        <td> Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <button className='btn btn-warning'>Edit</button>
                            &nbsp;
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
      </div>
    )
  }
}
