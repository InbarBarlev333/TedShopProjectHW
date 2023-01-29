import VectorGreen from "../Vector (green).png";
import VectorBlue from "../Vector (blue).png";
import Vector from "../Vector.png";
import Comment from "../Comment.png";
import React, { useState, useEffect } from "react";

const Likes_Comments = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  const item = props;
  console.log(item);

  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div className="container">
      <div className="likeAndCommantLine-container">
        <div className="likesNumber">
          <div className="likes">
            <img
              className="VectorGreen"
              src={VectorGreen}
              alt="VectorGreen"
            ></img>
          </div>
          <div>
            {item.data.didLike !== isPressed
              ? item.data.likes + 1
              : item.data.likes}{" "}
            likes{" "}
          </div>
        </div>
        <div className="comment"> {item.data.comments} comments</div>
      </div>
      <div className="userCommantLine-container">
        <button
          className={item.data.didLike !== isPressed ? "clicked" : "notClicked"}
          onClick={handleClick}
        >
          <img
            src={item.data.didLike !== isPressed ? VectorBlue : Vector}
            alt="Vector (Stroke)"
          ></img>
          Like
        </button>
        <button>
          <img src={Comment} alt="Comment ()"></img> comment
        </button>
      </div>
    </div>
  );
};

export default Likes_Comments;
