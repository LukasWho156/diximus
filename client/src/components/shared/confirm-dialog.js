import React from "react";
import { Modal, Button } from "react-bootstrap";

class ConfirmDialog extends React.Component {

    render() {
        return (<Modal show={this.props.show} onHide={this.props.onCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{this.props.children}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onClick={this.props.onConfirm}>
                    {this.props.localization.localize('button_confirm')}
                </Button>
                <Button variant="danger" onClick={this.props.onCancel}>
                    {this.props.localization.localize('button_cancel')}
                </Button>
            </Modal.Footer>
        </Modal>);
    }

}

export default ConfirmDialog