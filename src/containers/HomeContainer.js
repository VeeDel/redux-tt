import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../services/actions/Action";

const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  addToCartHandler: (data) => dispatch(addToCart(data));
};
export default connect(mapDispatchToProps, mapStateToProps)(Home);
