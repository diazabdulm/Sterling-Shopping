import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsForPreview, selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
 
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;