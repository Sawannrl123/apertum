import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppProvider } from "./providers";
import { PrivateRoute, Header, PublicRoute, Loader } from "./components";
import { Users, Login, NotFound } from "./pages";

function App() {
  return (
    <AppProvider>
      <CssBaseline />
      <Header />
      <Loader />
      <BrowserRouter>
        <Switch>
          <PrivateRoute component={Users} path="/" exact />
          <PublicRoute component={Login} path="/login" exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
