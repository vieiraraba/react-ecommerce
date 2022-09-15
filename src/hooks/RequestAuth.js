import React from "react";
import { Route, Navigate } from "react-router-dom";

function RequestAuth({ isAuth, component: PrivateCatalog, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <PrivateCatalog />;
        } else {
          return (
            <Navigate to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default RequestAuth;
