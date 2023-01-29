import Vector from "./Vector.png";
import Comment from "./Comment.png";
import VectorGreen from "./Vector (green).png";
import VectorBlue from "./Vector (blue).png";
import "./App.css";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import PhotoCarousel from "./components/PhotoCarousel";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isPressed, setIsPressed] = useState(false);
  //const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    fetch("https://dev.tedooo.com/feed.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage((page) => page + 1);
      console.log(page);
    }
  };

  const users = data?.data?.slice(0, page * 6).map(
    (item, index) => (
      <div className="container">
        <div className="header">
          <div className="information">
            <div>
              <img src={item.avatar} className="profile-picture" key={1} />
            </div>
            <div>
              <div>{item.username}</div>
              <div>{item.shopName}</div>
            </div>
          </div>
          <p>{item.text}</p>
        </div>
        <PhotoGallery data={item.images}></PhotoGallery>
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
              {item.didLike !== isPressed ? item.likes + 1 : item.likes} likes{" "}
            </div>
          </div>
          <div className="comment"> {item.comments} comments</div>
        </div>
        <div className="userCommantLine-container">
          <button
            className={item.didLike !== isPressed ? "clicked" : "notClicked"}
            onClick={handleClick}
          >
            <img
              src={item.didLike !== isPressed ? VectorBlue : Vector}
              alt="Vector (Stroke)"
            ></img>
            Like
          </button>
          <button>
            <img src={Comment} alt="Comment ()"></img> comment
          </button>
        </div>
      </div>
    )
    //<div key={index}>{item.username}</div>
  );

  return (
    <div>
      <div>{users}</div>
    </div>
  );
}
//<PhotoCarousel data={data}></PhotoCarousel>

export default App;
