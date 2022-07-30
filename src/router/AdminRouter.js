import React from "react";
import { AdminRoute } from "../router/ListRouter";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import InfomartionUser from "../pages/InfomartionUser/InfomartionUser";
import NotFound from "../pages/NotFound/NotFound";
function AdminRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      {AdminRoute.map((route, index) => (
          <Route
            exact
            key={index}
            path={route.path}
            render={() => route.component}
          />
        ))}
        <Route path="/" exact render={() => <InfomartionUser />} />
        <Route path="" component={() => <NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AdminRouter;
