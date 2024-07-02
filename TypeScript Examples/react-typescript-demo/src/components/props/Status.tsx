import React from "react";
type StatusType = {
    status: 'loading' | 'success' | 'error';
};

const Status = (props: StatusType) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...!'
    } else if (props.status === 'success'){
        message = 'Data fetched successfully...!'
    } else if (props.status === 'error'){
        message = 'Error fetching data...!'
    }
  return (
    <div>
      <div>
        <h2>Status - {message}</h2>
      </div>
    </div>
  );
};

export default Status;
