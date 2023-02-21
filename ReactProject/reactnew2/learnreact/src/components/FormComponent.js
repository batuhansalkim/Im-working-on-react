import React, { Component } from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter,Form,Label,FormGroup,Input } from 'reactstrap'
// import { v4 as uuidv4 } from 'uuid';
export default class FormComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            id:null,
            name : "",
            surname : "",
            email: ""
        }
    }
    onSubmit(){
        this.props.addUser(
            this.state.name,
            this.state.surname,
            this.state.email,
        );
        this.props.hide();
    }
    onUpdate(){
        this.props.editUser(this.state.id,this.state.name,this.state.surname,this.state.email);
        this.props.hide();
    }
    componentDidMount(){
        this.setState({
            id:this.props.user.id,
            name:this.props.user.name,
            surname: this.props.user.surname,
            email: this.props.user.email,
        })
    }
  render() {
    return (
        <Modal fade={false} isOpen={this.props.visible}>
        <ModalHeader >{this.props.title} Adlı Kişiyi Düzenle</ModalHeader>
        <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="name"> Name  </Label>
                        <Input value={this.state.name} onChange={(e)=> this
                        .setState({name : e.target.value})} id="name" name="name" type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname"> Surname </Label>
                        <Input value={this.state.surname} onChange={(e)=>this
                        .setState({surname : e.target.value})} id="surname" name="surname" type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email"> Email </Label>
                        <Input value={this.state.email} onChange={(e)=>this.setState({email : e.target.value})} id="email" name="email" type="emial" />
                    </FormGroup>
                </Form>
        </ModalBody>
        <ModalFooter>
            {
                    this.props.user.id ? <button className='btn btn-success' onClick={()=>this.onUpdate()}>Update</button> : <button className='btn btn-success' onClick={() => this.onSubmit()}>Add</button>
            }
                
            <button className='btn btn-danger' onClick={()=> this.props.hide()}>Cancel</button>
        </ModalFooter>
      </Modal >
    )
  }
}
