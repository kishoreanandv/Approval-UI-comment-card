import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentContent from "./CommentContent";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentContent
          author="varun"
          date="today"
          text="nice"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentContent
          author="vivek"
          date="yesterday"
          text="bad!!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentContent
          author="vignesh"
          date="today"
          text="Okayish!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentContent
          author="karthick"
          date="yesterday"
          text="somwat gud"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentContent
          author="santhosh"
          date="today"
          text="needs improvement dah!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
