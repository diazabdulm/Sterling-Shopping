import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import CollectionItem from "./collection-item.component";

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
