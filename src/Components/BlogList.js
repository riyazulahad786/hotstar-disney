import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [search,setSearch] = useState("");
  // console.log(search)
  const dateObj = new Date();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://root-blog.prismic.io/api/v2/documents/search?ref=ZGS6jxEAACUAsSPz&q=%5B%5Bfulltext(my.post.title%2C+%22$india%22)%5D%5D&q=%5B%5Bat(document.type%2C+%22post%22)%5D%5D&page=${page}&pageSize=${pageSize}`
        );

        setData(response.data.results);
        console.log(response.data.results);
        setTotalPages(Math.ceil(response.data.total_results_size / pageSize));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, pageSize, searchTerm]);

  return (
    <div>
      <div className="input-grp mx-5">
        <form>
          <input
            type="text"
            className="text-field-2 w-input"
            placeholder="Search by Title"
            value={searchTerm}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src="https://uploads-ssl.webflow.com/64100316e1db9e6977ed6b0d/64cde74b8c987a0c529dd02d_search%20(1).png"
            loading="lazy"
            alt=""
            class="image-126"
          ></img>
        </form>
      </div>
      <div className="px-5 row">
        {data.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.data.featured_image.url}
                className="card-img-top"
                alt="Featured"
              />
              <div className="card-body">
                <p className="card-text">
                  {new Date(item.first_publication_date).toLocaleString()}
                </p>
                <p className="card-title">{item.data.title}</p>
                <p className="card-text">
                  {item.data.description.slice(0, 155)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous Page
            </button>
          </li>
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next Page
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogList;
