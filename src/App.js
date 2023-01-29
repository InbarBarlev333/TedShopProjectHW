import "./App.css";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import PhotoCarousel from "./components/PhotoCarousel";
import PhotoGallery from "./components/PhotoGallery";
import Header from "./components/Header";
import Likes_Comments from "./components/Likes_Comments";

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
      <div className="container" key={index}>
        <Header data={item}></Header>
        <PhotoGallery data={item.images}></PhotoGallery>
        <Likes_Comments data={item}></Likes_Comments>
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
