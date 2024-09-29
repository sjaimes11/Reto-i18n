import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Job = (props) => {
  const salary = props.offer.salary;

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {salary >= 1 ? (
          <>
            <FormattedNumber value={salary} />
            <FormattedMessage id={salary === 1 ? "MillionSingular" : "MillionPlural"} />
          </>
        ) : (
          <FormattedNumber value={salary} />
        )}
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} /> {/* Display number of views with formatting */}
      </td>
    </tr>
  );
};

export default Job;
