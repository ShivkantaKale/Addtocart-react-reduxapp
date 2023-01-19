import React from "react";

function Header(props) {
  console.log(props.data.length);
  return (
    <div className="add-to-cart">
      <span className="cart-num">{props.data.length}</span>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
        alt="img"
      />
    </div>
  );
}

export default Header;
