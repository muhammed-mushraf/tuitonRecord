import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="products-card-info">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Card className="m-2 shadow-lg">
              <Card.Img
                variant="top"
                src={product.image}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="product-standard-info">
                  {product.standard}
                </Card.Text>
                <Link className="btn btn-primary" to={`/${product.id}/`}>
                  Details
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowProducts;
