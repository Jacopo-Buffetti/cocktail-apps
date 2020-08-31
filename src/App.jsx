import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Home = React.lazy(() => import('./pages/home/Home'));
const SearchLetter = React.lazy(() => import('./pages/searchLetter/SearchLetter'));
const SearchIngredient = React.lazy(() => import('./pages/searchIngredient/SearchIngredient'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const LoveMatch = React.lazy(() => import('./pages/loveMatch/LoveMatch'));

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
          />
          <Route
                    path="/contact"
                    exact
                    component={Contact}
          />
          <Route
                    path="/search-all"
                    exact
                    component={SearchIngredient}
          />
            <Route
                path="/love-match"
                exact
                component={LoveMatch}
            />
        </Switch>
          <Footer />
      </Suspense>
    );
}
export default withRouter(App);
