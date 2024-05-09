import React from "react";

function Msg({ name, email, msg }) {
  return (
    <div className="col-12 col-lg-3 col-md-5">
      <div className="card">
        <div className="card-body">
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}

export default Msg;
