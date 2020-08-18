import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Home = React.lazy(() => import('./pages/home/Home'));
const SearchLetter = React.lazy(() => import('./pages/searchLetter/SearchLetter'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));

function App() {
    return (
      <Suspense fallback={<span>Loading</span>}>
          <Header />
        <Switch>
          <Route
                    path="/"
                    exact
                    component={Home}
          />
          <Route
                    path="/search-letter"
                    exact
                    component={SearchLetter}
          /> <Route
                    path="/contact"
                    exact
                    component={Contact}
          />
        </Switch>
          <Footer />
      </Suspense>
    );
}
export default withRouter(App);
