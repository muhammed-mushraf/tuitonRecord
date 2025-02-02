import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [address, setAddress] = useState("");
  const [standard, setStandard] = useState("");

  const navigate = useNavigate();

  const AddProductInfo = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("roll_no", roll_no);
    formField.append("address", address);
    formField.append("standard", standard);
    if (image !== null) {
      formField.append("image", image);
    }

    await axios({
      method: "post",
      url: "http://localhost:8000/api/",
      data: formField,
    })
      .then((response) => {
        console.log(response.data);
        navigate("/"); // Use navigate instead of history.push
      })
      .catch((error) => {
        console.error("There was an error adding the product!", error);
      });
  };

  return (
    <div className="container">
      <h1>Add Products</h1>

      <div className="form-group">
        <div className="form-group">
          <input
            type="file"
            className="form-control form-control-lg"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your roll_no"
            name="roll_no"
            value={roll_no}
            onChange={(e) => setRoll_no(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control form-control-lg"
            placeholder="Enter your address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Standerd"
            name="category"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={AddProductInfo}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
