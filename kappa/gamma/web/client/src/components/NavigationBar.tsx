import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Alignment,
  AnchorButton,
  Classes,
} from "@blueprintjs/core";

import logo from "../assets/kappa-logo.png";

const NavigationBar = (props) => {
  const [highlight, setHighlight] = React.useState("");
  const location = useLocation();
  const { baseURL } = props;

  React.useEffect(() => {
    const currentLocation = location.pathname.split("/")[1];
    setHighlight(currentLocation);
  }, [location]);

  return (
    <Navbar style={{ paddingLeft: "10%", marginLeft: 0 }}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Link to="/">
            <img src={baseURL + `/${logo}`} width={150} height={40} alt={"Kappa - The Goalkeeper of ML Services"} />{" "}
          </Link>
        </NavbarHeading>
        <NavbarDivider />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Project"
          href={baseURL + "/project"}
          style={getHighlightStyle(highlight, "project")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Model"
          href={baseURL + "/model"}
          style={getHighlightStyle(highlight, "model")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Productionization"
          href={baseURL + "/productionization"}
          style={getHighlightStyle(highlight, "productionization")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Experiment"
          href={baseURL + "/experiment"}
          style={getHighlightStyle(highlight, "experiment")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Data"
          href={baseURL + "/data"}
          style={getHighlightStyle(highlight, "data")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Versioning"
          href={baseURL + "/repository"}
          style={getHighlightStyle(highlight, "repository")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Deployments"
          href={baseURL + "/deployments"}
          style={getHighlightStyle(highlight, "deployments")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Metrics"
          href={baseURL + "/metrics"}
          style={getHighlightStyle(highlight, "metrics")}
        />
        <AnchorButton
          className={Classes.MINIMAL}
          large
          text="Help"
          href={baseURL + "/help"}
          style={getHighlightStyle(highlight, "help")}
        />
      </NavbarGroup>
    </Navbar>
  );
};

const getHighlightStyle = (highlight, path) => ({
  fontWeight: highlight === path ? ("bold" as "bold") : ("normal" as "normal"),
});

export default NavigationBar;
