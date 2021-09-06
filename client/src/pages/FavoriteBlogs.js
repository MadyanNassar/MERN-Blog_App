import { useState } from "react";
import { Link } from "react-router-dom";

const FavoriteBlogs = () => {
  const favBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  const [blogs, setBlogs] = useState(favBlogs);

  const removeFromFav = (e) => {
    const currentBlog = JSON.parse(e.currentTarget.getAttribute("blog"));
    const unSave = blogs.filter((item) => item._id !== currentBlog._id);
    localStorage.setItem("blogs", JSON.stringify(unSave));
    setBlogs(unSave);
  };

  return (
    <div className="home">
      <div className="blogs-list-main">
        <h1 className="blog-list-title">FAVORITE BLOG LIST</h1>
        {blogs.length > 0 ? (
          <>
            {blogs.map((blog) => (
              <div className="blogs-preview" key={blog._id}>
                <Link to={`/blogs/${blog._id}`}>
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
                  title="Press to remove from your Favorite List"
                  blog={JSON.stringify(blog)}
                  onClick={(e) => {
                    removeFromFav(e);
                  }}
                  className="fav-button"
                >
                  ♥
                </span>
              </div>
            ))}
          </>
        ) : (
          <>
            <h2 className="no-blogs">No favorite blogs Found ... !</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default FavoriteBlogs;
