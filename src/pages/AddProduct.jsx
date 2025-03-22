import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { SERVER_URL } from "../api/ServerUrl"; // Ensure correct path

const regexPatterns = {
  name: /^[A-Za-z0-9\s]+$/,
  description: /^.+$/,
};

function AddMenu() {  
  
  const [menu, setMenu] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  const validateForm = () => {
    for (const key in menu) {
      if (regexPatterns[key] && !regexPatterns[key].test(menu[key])) {
        toast.error(`Invalid value for ${key}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await axios.post(`${SERVER_URL}/menus`, menu);
      toast.success("Menu created successfully!");
      setMenu({ name: "", description: "" }); // Reset form
      console.log(response);
      
    } catch (error) {
      console.error("Error adding menu:", error);
      toast.error(error.response?.data?.message || "Failed to create menu");
    }
  };
  

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <h1 className="text-center" style={{ color: "#0796EF" }}>ADD NEW MENU</h1>
        <div className="row d-flex mt-5">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 border p-3 rounded shadow" style={{ border: "1px solid #0796EF", background: "transparent" }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="text-primary">Menu Name :</Form.Label>
                <Form.Control
                  className="border rounded p-3 text-primary"
                  type="text"
                  placeholder="Enter menu name"
                  value={menu.name}
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-primary">Description :</Form.Label>
                <Form.Control
                  className="border rounded p-3 text-primary"
                  type="text"
                  placeholder="Enter description"
                  value={menu.description}
                  name="description"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-flex justify-content-evenly">
                <button className="btn" style={{ backgroundColor: "#0796EF", color: "white" }} type="button" onClick={handleSubmit}>Create Menu</button>
                <button className="btn" style={{ backgroundColor: "#0796EF", color: "white" }} type="button" onClick={() => setMenu({ name: "", description: "" })}>Cancel</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddMenu;
