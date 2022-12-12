import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider (sağlayıcı), Consumer (Tüketici)


export  class UserProvider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Batuhan Deneme1",
                salary: "11000",
                department: "Bilişim"
            },
            {
                id: 2,
                name: "Tunahan Deneme2",
                salary: "10000",
                department: "Satış"
            },
            {
                id: 3,
                name: "Necla Deneme3",
                department: "Bilişim",
                salary: "12000"
            }

        ]
    }
  render() {
    return (
        <UserContext.Provider value={this.props}>
            {this.props.children}
        </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;


