import React from "react";

export default function CurvedText(props) {

  return (
    <svg viewBox="0 0 500 500">
      <path id="curve" fill="transparent" d="M50,250 Q250,95 450,250" />
      <text width="500" style={{ "textAnchor": "middle" }}>
        <textPath xlinkHref="#curve" startOffset="50%">
          {props.text}
        </textPath>
      </text>
    </svg>
  );
}