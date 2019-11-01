import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import CartIcon from "./cart-icon.component";

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
