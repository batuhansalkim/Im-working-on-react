import React, { Component } from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'
export default class FormComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
  render() {
    return (
          <Modal fade={false} isOpen={this.props.visible}>
        <ModalHeader >Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, omnis.
        </ModalBody>
        <ModalFooter>
            <button> </button>
        </ModalFooter>
      </Modal >
    )
  }
}
