import React from "react";
const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">APPROVE</div>
            <div className="ui basic red button">DENY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
