import * as React from "react";

import HttpRequestContainer from "../utils/HttpRequestContainer";
import MyModelTable from "../components/MyModelTable";

const MyModelsList = (props) => {
  const params = props.match.params;
  return (
    <div>
      <HttpRequestContainer
        url="/api/ListBento"
        method="get"
        params={{ bento_name: params.name }}
      >
        {({ data }) => {
          if (data && data.bentos) {
            return (
              <div>
                <h2>{params.name}</h2>
                <MyModelTable bentos={data.bentos} />
              </div>
            );
          } else {
            return <div>{JSON.stringify(data)}</div>;
          }
        }}
      </HttpRequestContainer>
    </div>
  );
};

export default MyModelsList;
