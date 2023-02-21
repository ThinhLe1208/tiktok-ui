import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pucblicRoutes } from "~/routes";
import { DefaultLayout } from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {pucblicRoutes.map((route, index) => {
            let Laypout = DefaultLayout;

            if (route.layout) {
              Laypout = route.layout;
            } else if (route.layout === null) {
              Laypout = Fragment;
            }

            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Laypout>
                    <Page />
                  </Laypout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
