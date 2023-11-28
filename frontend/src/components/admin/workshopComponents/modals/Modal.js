import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function WorkshopModal (props) {
      return (
            <div className="modal" tabIndex="-1">
                  <Modal show={props.isOpen}>
                        <Modal.Header>
                              <Modal.Title>
                                    {props.headerState}
                              </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              {props.bodyState}
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="primary" onClick={props.toggle}>X</Button>
                        </Modal.Footer>
                  </Modal>
            </div>
      )
};