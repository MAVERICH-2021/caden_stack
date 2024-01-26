import React, { Suspense } from "react";

const FallbackComponent = () => {
  return <div>loading...</div>;
};

const SuspenseFallback = () => {
  return (
    //create fragment with React.Fragment
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Suspense fallback={<FallbackComponent />}>
          <LazyComponentResolver />
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default SuspenseFallback;

const LazyComponentResolver = React.lazy(() => {
  /*   return new Promise(resolve=> {
    setTimeout(() => resolve(import('./LazyComponent')), 3000);
}) */
  //用了lazy，就不用再用Promise了
  return import("./LazyComponent");
});
