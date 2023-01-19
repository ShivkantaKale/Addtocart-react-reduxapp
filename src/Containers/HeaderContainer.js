import Header from "../Components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  // data: state,
  data: state.rootReducer.cartItems
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
