import * as React from "react";
import { Link } from "react-router-dom";

import { getQueryObject } from "../utils";
import HttpRequestContainer from "../utils/HttpRequestContainer";
import MyModelTable from "../components/MyModelTable";
import { Section } from "../ui/Layout";

const DEFAULT_BENTO_SERVICE_LIMIT_PER_PAGE = 30;

const Repository = (props) => {
  const query = getQueryObject(props.location.search);
  const offset = Number(query.offset) || 0;
  return (
    <HttpRequestContainer
      url="/api/ListProject"
      method="get"
      params={{ limit: DEFAULT_BENTO_SERVICE_LIMIT_PER_PAGE, offset }}
    >
      {({ data }) => {
        let bentoDisplay = <Section>Hello</Section>;
        return (
          <Section>
            {bentoDisplay}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div>
                {offset > 0 && (
                  <Link to={`/project?offset=${offset - 10}`}>Previous</Link>
                )}
              </div>
              <div>
                {(
                  <Link to={`/project?offset=${offset + 10}`}>Next</Link>
                )}
              </div>
            </div>
          </Section>
        );
      }}
    </HttpRequestContainer>
  );
};

export default Repository;
