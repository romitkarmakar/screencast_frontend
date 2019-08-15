import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <a className="nav-link text-white" onClick={this.toggle}>Rules</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Rules of the Game</ModalHeader>
          <ModalBody>
            <ul className="p-3">
              <li>Dont cheat !!!!!!</li>
              <li>Dont try to hack because you will be never successfull.</li>
              <li>If you face any problem in the game then fuck offf.</li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}