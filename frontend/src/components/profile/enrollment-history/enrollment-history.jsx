import React from "react";
import { EnrollmentHistoryContainer } from "./enrollment-history-styles";

import HistoryItem from "./history-item";

function EnrollmentHistory({ data }) {
  return (
    <EnrollmentHistoryContainer>
      <div>
        {data.history.map((x) => (
          <HistoryItem item={x} key={x.id} />
        ))}
      </div>
    </EnrollmentHistoryContainer>
  );
}

export default EnrollmentHistory;
