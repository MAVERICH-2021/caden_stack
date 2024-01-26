import React, { Suspense } from "react";
// import LazyComponent from "./LazyComponent";

const FallbackComponent = () => {
  return <div>loading...</div>;
};

const LazyComponent = React.lazy(() => {
   return new Promise(resolve => {
     setTimeout(() => resolve(import('./LazyComponent')), 3000);
   });
 });

// //create a component that load content after 2seconds
// const LazyComponent = React.lazy(() => {
//   return new Promise((resolve) => {
//    setTimeout(() => resolve(import("./LazyComponent")), 2000) as Promise<{ default: React.FC }>);
//   });
// });

const SuspenseFallback = () => {
  return (
    //create fragment with React.Fragment
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Suspense fallback={<FallbackComponent />}>
         <LazyComponent/>
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default SuspenseFallback;
