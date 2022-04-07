import React from "react";

const CommentContent = (props) => {
  return (
    <div className="comment">
      <a className="avatar " href="/">
        <img src={props.avatar} alt="Just pic" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default CommentContent;
