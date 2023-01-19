import Home from "../Components/Home";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../Services/Action/Action";

const mapStateToProps = (state) => ({
  //   data: state,
  data: state.rootReducer.cartItems
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;

////////////////////////////////////////////////////////////

// Connect REDUX with REACT
// Import Component , Connect (react-redux) , Action...
// Use 2 Functions (mapStateToProps) & (mapDispatchToProps)

///////////////////////////////////////////////////////////

// 1) Import connect function from react-redux
// Connect is a function which takes ( 2 Parameters ) (Component)
//  connect(mapStateToProps,mapDispatchToProps)(Home-Component)
