import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    console.log(this.props.selectedBeast)
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.selectedBeast.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width:'20rem'}}>
            <Card.Img
              src={this.props.selectedBeast.image_url}
              alt={this.props.selectedBeast.title}
            />
            <Card.Body>
              {this.props.selectedBeast.description}
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast