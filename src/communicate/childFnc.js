import React from "react";

export default function ChildFnc(props) {
  const { usernameProps, ageProps } = props;
  return (
    <div>
      <h3>ChildFnc</h3>
      <h4>
        USername: {usernameProps} - Age: {ageProps}
      </h4>
    </div>
  );
}
