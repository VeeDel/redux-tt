import React from "react";

export default function User(props) {
  console.warn(props.data);
  const { data } = props;
  return (
    <div>
      <h1>User Component</h1>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  );
}
