import * as React from "react";
import * as moment from "moment";

import HttpRequestContainer from "../utils/HttpRequestContainer";
import EnvTable from "../components/MyModelDetail/EnvTable";
import ApisTable from "../components/MyModelDetail/ApisTable";
import ArtifactsTable from "../components/MyModelDetail/ArtifactsTable";
import { Section } from "../ui/Layout";
import LabelDetailSection from "../components/LabelDetailSection";

const MyModelDetail = (props) => {
  const params = props.match.params;

  return (
    <HttpRequestContainer
      url="/api/GetBento"
      params={{ bento_name: params.name, bento_version: params.version }}
    >
      {({ data }) => {
        let displayMyModelDetail;

        if (data && data.bento) {
          const bento = data.bento;

          displayMyModelDetail = (
            <div>
              <p>
                <b>Created at: </b>
                {moment
                  .unix(Number(bento.bento_service_metadata.created_at.seconds))
                  .toDate()
                  .toLocaleString()}
              </p>
              <p>
                <b>Storage: </b> {bento.uri.uri}
              </p>
              <LabelDetailSection
                labels={bento.bento_service_metadata.labels}
              />
              <ApisTable apis={bento.bento_service_metadata.apis} />
              <ArtifactsTable
                artifacts={bento.bento_service_metadata.artifacts}
              />
              <EnvTable env={bento.bento_service_metadata.env} />
            </div>
          );
        } else {
          displayMyModelDetail = <div>{JSON.stringify(data)}</div>;
        }

        return (
          <Section>
            <h2>
              {params.name}:{params.version}
            </h2>
            {displayMyModelDetail}
          </Section>
        );
      }}
    </HttpRequestContainer>
  );
};

export default MyModelDetail;
