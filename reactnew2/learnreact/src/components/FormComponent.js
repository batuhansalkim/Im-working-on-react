import React, { Component } from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter,Form,Label,FormGroup,Input } from 'reactstrap'
// import { v4 as uuidv4 } from 'uuid';
export default class FormComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            name : "",
            surname : "",
            email: ""
        }
    }
  render() {
    return (
        <Modal fade={false} isOpen={this.props.visible}>
        <ModalHeader >Modal title</ModalHeader>
        <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="name"> Name  </Label>
                        <Input onChange={(e)=> this
                        .setState({name : e.target.value})} id="name" name="name" type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname"> Surname </Label>
                        <Input onChange={(e)=>this
                        .setState({surname : e.target.value})} id="surname" name="surname" type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email"> Email </Label>
                        <Input onChange={(e)=>this.setState({email : e.target.value})} id="email" name="email" type="emial" />
                    </FormGroup>
                </Form>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-success'>Add</button>
            <button className='btn btn-danger' onClick={()=> this.props.hide()}>Cancel</button>
        </ModalFooter>
      </Modal >
    )
  }
}
