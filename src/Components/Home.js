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
      {/* search */}
      <div className="input-grp mx-5">
        <form>
          <input
            type="text"
            class="text-field-2 w-input"
            placeholder="Search "
          />
          <img
            src="https://uploads-ssl.webflow.com/64100316e1db9e6977ed6b0d/64cde74b8c987a0c529dd02d_search%20(1).png"
            loading="lazy"
            alt=""
            class="image-126"
          ></img>
        </form>
      </div>
    </div>
  );
}

export default Home;
