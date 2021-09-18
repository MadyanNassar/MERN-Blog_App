import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import deleteFunc from "../utils/deleter";
import loading from "../media/loading.gif";
import "./styles/BlogDetails.css";

const BlogDetails = () => {
  const userState = localStorage.getItem("admin") || false;

  const { id } = useParams();
  const url = `${process.env.REACT_APP_API_URL}/blog/${id}`;
  const { data: blogs, isPending, error } = useFetch(url);

  const history = useHistory();

  const handleDelete = async (e) => {
    // const author_id = blogs.blog.author[0]._id;
    // const author_avatar_id = blogs.blog.author[0].avatar[0]._id;
    const banner_id = blogs.blog.banner[0]._id;
    const cardBanner_id = blogs.blog.cardBanner[0]._id;

    const favBlogList = JSON.parse(localStorage.getItem("blogs")) || [];
    const unSave = favBlogList.filter((item) => item._id !== blogs.blog._id);
    localStorage.setItem("blogs", JSON.stringify(unSave));

    // await deleteFunc(author_id, "author");
    // await deleteFunc(author_avatar_id, "file");
    await deleteFunc(banner_id, "file");
    await deleteFunc(cardBanner_id, "file");
    await deleteFunc(id, "blog").then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <img src={loading} className="loading-img" alt="loading" />}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h1>{blogs.blog.title}</h1>
          <h2>- {blogs.blog.shortDescription}</h2>
          <img
            className="banner-image"
            src={blogs.blog.banner[0].filePath}
            alt="Blog Banner"
          />
          <h3>{blogs.blog.description}</h3>
          <p> Category : {blogs.blog.category[0].name}</p>
          <div className="author">
            <p className="author-name">
              Written By : {blogs.blog.author[0].name}
            </p>
            <img
              className="author-image"
              src={blogs.blog.author[0].avatar[0].filePath}
              alt="Blog Banner"
            />
          </div>
          {userState ? (
            <>
              <button onClick={(e) => handleDelete(e)}>Delete this Blog</button>
              <Link to={`/edit-blog/${blogs.blog._id}`}>
                <button className="edit-btn">Edit this Blog</button>
              </Link>
            </>
          ) : (
            <p
              className="no-admin"
              onClick={() => {
                window.alert(
                  "You are not admin and you can't delete or edit blogs, if you want to become admin please tab on Make me Admin and enter the secret key "
                );
              }}
            >
              Hint
            </p>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
