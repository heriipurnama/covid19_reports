/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';
import Footer from 'components/Footer';

// import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/core.css';
import '../../assets/css/icons.css';
import '../../assets/css/components.css';
import '../../assets/css/pages.css';
import '../../assets/css/menu.css';
import '../../assets/css/responsive.css';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="covid19Reports" defaultTitle="covid19Reports">
        <meta name="description" content="covid19Reports" />
      </Helmet>
      <Header />
      <LeftSideBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} /> */}
      </Switch>
      <Footer />
      <NotFoundPage />
    </AppWrapper>
  );
}
