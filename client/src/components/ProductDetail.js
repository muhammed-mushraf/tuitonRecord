import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/${id}`);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/${id}/`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>
            <strong>Roll No:</strong> {product.roll_no}
          </p>
          <p>
            <strong>Address:</strong> {product.address}
          </p>
          <p>
            <strong>Standard:</strong> {product.standard}
          </p>
          <div className="button-group">
            <Link className="btn btn-primary" to={`/${product.id}/update`}>
              Update
            </Link>
            <button className="btn btn-danger" onClick={deleteProduct}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
