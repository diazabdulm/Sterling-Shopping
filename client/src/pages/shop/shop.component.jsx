import React, { lazy, useEffect, Suspense } from "react";
import { Route } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverview = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const CollectionPage = lazy(() =>
  import("../../pages/collection/collection.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
