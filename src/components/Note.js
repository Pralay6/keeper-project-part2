import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p></p>
      {props.content}
    </div>
  );
}

export default Note;
