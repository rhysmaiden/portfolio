import React from "react";
import Tag from "./Tag.js";

const Tags = ({ tags }) => {
  return (
    <div className="tags">{tags && tags.map(tag => <Tag text={tag} />)}</div>
  );
};

export default Tags;
