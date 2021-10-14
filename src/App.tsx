import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { TheBestDrinkProvider } from './context/theBestDrinkContext';
// import HomePage from './pages/homePage';
import DrikDetails from './pages/drikDetails/index';
import NotFound from './pages/notFound';
import RenderPage from './pages/renderPage/index';

function App() {
  return (
    <BrowserRouter>
      <TheBestDrinkProvider>
        <Switch>
          <Route path="/" exact component={RenderPage} />
          <Route path="/details/:id" exact component={DrikDetails} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </TheBestDrinkProvider>
    </BrowserRouter>
  );
}

export default App;
