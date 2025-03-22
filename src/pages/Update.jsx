import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = ({ menu, onUpdate = () => {} }) => {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState({ name: '', description: '' });

  useEffect(() => {
    if (menu) {
      setUpdate({ name: menu.name || '', description: menu.description || '' });
    }
  }, [menu]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!update.name.trim() || !update.description.trim()) {
      toast.error("Both fields are required");
      return;
    }
    console.log("Updated Menu Data:", update);
    toast.success("Menu updated successfully");
    setShow(false);
    onUpdate(update);
  };

  return (
    <>
      <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className="text-info mx-3" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Edit Menu Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Menu Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={update.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={update.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>Cancel</Button>
          <Button variant="success" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
};

export default Update;
