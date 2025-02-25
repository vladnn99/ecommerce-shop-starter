import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { image, category, title, price, description } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-fit min-h-screen flex items-center">
      <div className="container mx-auto">
        {/* image&text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <p className="text-gray-600 bg-gray-200 w-fit px-2 py-1 mt-2 mb-1 rounded-md text-sm">
                {category}
              </p>
              <div className="text-xl text-red-500 font-medium mb-6">{`$ ${parseFloat(
                price
              ).toFixed(2)}`}</div>
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => {
                addToCart(product, product.id);
              }}
              className="bg-primary py-4 text-white px-8 w-40"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
