import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList";

function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [Cinema,setCinema]=useState(false)
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked(!isClicked);
   
  };
  const handleChange = () => {
    setCinema(!Cinema)
    
    
  }
  const buttonStyle = {
    backgroundColor: isClicked ? '#2f7d7c' : 'initialColor', // Change 'blue' to the desired background color when clicked
    // Add other CSS styles as needed
  };
  const buttonStyles = {
    backgroundColor: Cinema ? '#2f7d7c' : 'initialColor', // Change 'blue' to the desired background color when clicked
    // Add other CSS styles as needed
  };
  return (
    <div className="">
      <div className="content px-5 py-2">
        <h1 className="heading">Explore Root Blog</h1>
        <h6 className="small-heading">All Blogs</h6>
        <hr className="px-5 " />
      </div>
      {/* filter */}
      <div className="list-filter-nw mx-3">
        <button className="filter-btn-all mx-4 my-2">All</button>
        <button
        className="filter-btn mx-4 my-2"
        style={buttonStyle}
        onClick={handleClick}
      >
        Cinema Collectibles
      </button>
              <button 
              style={buttonStyles}
        onClick={handleChange}
              className="filter-btn mx-4 my-2">
          The Best Of Indian Cinema
        </button>
        <hr className="px-5 " />
      </div>
      <BlogList/>
    </div>
  );
}

export default Home;
