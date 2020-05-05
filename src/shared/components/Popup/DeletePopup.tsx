import React from 'react';
import { Modal, Button } from 'react-bootstrap';
//import './DeletePopup.css';
import LoaderButton from '../../../shared/components/Button/LoaderButton';

interface Props {
    modalSubmit: () => void;
    modalClosed: () => void;
    isLoading:boolean;
}

const DeletePopup: React.FC<Props> = props => {
    return (
        <Modal show={true} centered onHide={props.modalClosed} dialogClassName="delete-popup">
            <Modal.Header closeButton>
				<Modal.Title>PSP</Modal.Title>
            </Modal.Header>
			<Modal.Body><p>Please confirm do you want to delete?</p></Modal.Body>
            <Modal.Footer>
                <LoaderButton onClick={props.modalSubmit} isLoading={props.isLoading} text="Confirm"/> 
                <Button variant="primary" onClick={props.modalClosed} className="btnOkSize">Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeletePopup;
