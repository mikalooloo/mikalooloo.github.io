export default function CurvedText({ text, fill="transparent" }) {

  return (
    <svg viewBox="0 0 500 500">
      <path id="curve" fill={fill} d="M50,250 Q250,95 450,250" />
      <text width="500" style={{ "textAnchor": "middle" }}>
        <textPath xlinkHref="#curve" startOffset="50%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}