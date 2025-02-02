import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [address, setAddress] = useState("");
  const [standard, setStandard] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
      setImage(data.image);
      setName(data.name);
      setRoll_no(data.roll_no);
      setStandard(data.standard);
      setAddress(data.address);
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const UpdateProductInfo = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("roll_no", roll_no);
    formField.append("address", address);
    formField.append("standard", standard);

    // Only append the image if it’s a new file
    if (image instanceof File) {
      formField.append("image", image);
    }

    try {
      await axios({
        method: "PUT",
        url: `http://localhost:8000/api/${id}/`,
        data: formField,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error.response || error);
    }
  };

  return (
    <div>
      <h1>Update product</h1>
      <div className="form-group">
        <div className="form-group">
          {image && !(image instanceof File) && (
            <img src={image} alt="Product" height="300" width="150" />
          )}
          <label>Select image to upload</label>
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
            placeholder="Enter your Standard"
            name="standard"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={UpdateProductInfo}>
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
