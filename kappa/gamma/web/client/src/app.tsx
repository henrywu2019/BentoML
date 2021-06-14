import * as React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DeploymentsList from "./pages/DeploymentsList";
import DeploymentDetails from "./pages/DeploymentDetails";
import Repository from "./pages/Repository";
import Project from "./pages/Project";
import MyModelsList from "./pages/MyModelList";
import MyModelDetail from "./pages/MyModelDetail";
import Layout from "./ui/Layout";
import Breadcrumbs from "./components/Breadcrumbs";
import NavigationBar from "./components/NavigationBar";
import { setBaseUrl } from "./utils/HttpRequestContainer";
import { useCookies } from "react-cookie";

export const App = () => {
  const [cookies] = useCookies();
  const baseURL =
    cookies["baseURLCookie"] === undefined
      ? "/"
      : "/" + cookies["baseURLCookie"];
  setBaseUrl(baseURL);
  return (
    <BrowserRouter basename={baseURL}>
      <NavigationBar baseURL={baseURL} />
      <Layout>
        <Breadcrumbs baseURL={baseURL} />
        <div>
          <Switch>
            <Route
              path="/deployments/:namespace/:name"
              component={DeploymentDetails}
            />
            <Route path="/deployments/:namespace" component={DeploymentsList} />
            <Route path="/deployments" component={DeploymentsList} />

            <Route
              path="/repository/:name/:version"
              component={MyModelDetail}
            />
            <Route path="/repository/:name" component={MyModelsList} />
            <Route path="/repository" component={Repository} />
            <Route path="/project" component={Project} />

            <Route path="/about" component={HomePage} />
            <Route path="/config" component={HomePage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
};
