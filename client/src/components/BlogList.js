import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/blogList.css";

const BlogList = ({ blogs }) => {
  let savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const [favoriteList, setFavoriteList] = useState(savedBlogs);

  const saveToFavorite = (e) => {
    const currentBlog = JSON.parse(e.currentTarget.getAttribute("blog"));
    const isSaved = savedBlogs.some((item) => item._id === currentBlog._id);
    const unSave = savedBlogs.filter((item) => item._id !== currentBlog._id);

    if (!isSaved) {
      setFavoriteList([currentBlog, ...favoriteList]);
      localStorage.setItem(
        "blogs",
        JSON.stringify([currentBlog, ...favoriteList])
      );
      e.target.className = "fav-button";
      e.currentTarget.title = "Blog in your Favorite List";
    } else {
      setFavoriteList(unSave);
      localStorage.setItem("blogs", JSON.stringify(unSave));
      e.target.className = "not-fav-button";
      e.currentTarget.title = "Press to Add to your Favorite List";
    }
  };
  return (
    <div className="blogs-list-main">
      <h1 className="blog-list-title">BLOG LIST</h1>
      {blogs.length > 0 ? (
        <>
          {blogs.map((blog) => (
            <div className="blogs-preview" key={blog._id}>
              <Link to={`/blog/${blog._id}`}>
                <div className="blogs-list">
                  <div className="blogs-list-details">
                    <h1>{blog.title}</h1>
                    <div>
                      <h2>{blog.shortDescription}</h2>
                      <p>Category: {blog.category[0].name}</p>
                    </div>
                    <p>Written By: {blog.author[0].name}</p>
                  </div>
                  <img
                    className="banner-image"
                    src={blog.cardBanner[0].filePath}
                    alt="Blog Banner"
                  />
                </div>
              </Link>
              <span
                title={
                  savedBlogs.some((item) => item._id === blog._id)
                    ? " This blog is in your favorite list"
                    : "Press to add this blog to your favorite list"
                }
                blog={JSON.stringify(blog)}
                onClick={(e) => {
                  saveToFavorite(e);
                }}
                className={
                  savedBlogs.some((item) => item._id === blog._id)
                    ? "fav-button"
                    : "not-fav-button"
                }
              >
                ♥
              </span>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2 className="no-blogs">No blogs Found ... !</h2>
        </>
      )}
    </div>
  );
};

export default BlogList;
