import React from "react";

function Home(props) {
  console.log("Home", props.data);

  return (
    <div>
      <h2>LAPTOP SPACE</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img
            src="https://m.media-amazon.com/images/I/71Xk9qt6IwL._SL1500_.jpg"
            alt="img"
          />
          <div className="text-wrapper">
            <h3>Acer Predator Helios 300 Gaming Laptop</h3>{" "}
            <h4> Price : $2500 </h4>
          </div>
          <div className="btn-wrapper">
            <button
              onClick={() =>
                props.addToCartHandler({
                  name: "Acer Predator Helios 300 Gaming Laptop",
                  price: 2500
                })
              }
            >
              Add to Cart{" "}
            </button>{" "}
            <button onClick={() => props.removeToCartHandler({})}>
              Remove to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
