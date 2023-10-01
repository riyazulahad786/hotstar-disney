import React from "react";

function Home() {
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
        <button className="filter-btn mx-4 my-2">Cinema Collectibles</button>
        <button className="filter-btn mx-4 my-2">
          The Best Of Indian Cinema
        </button>
        <hr className="px-5 " />
      </div>
    </div>
  );
}

export default Home;
