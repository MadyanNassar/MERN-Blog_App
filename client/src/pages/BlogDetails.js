import { useHistory, useParams } from "react-router";
import useFetch from "../functions/useFetch";
import deleteFunc from "../functions/deleter";
import loading from "../media/loading.gif";
import "./styles/BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:3001/api/blog/${id}`;
  const { data: blogs, isPending, error } = useFetch(url);

  const history = useHistory();

  const handleDelete = async () => {
    // const author_id = blogs.blog.author[0]._id;
    // const author_avatar_id = blogs.blog.author[0].avatar[0]._id;
    const banner_id = blogs.blog.banner[0]._id;
    const cardBanner_id = blogs.blog.cardBanner[0]._id;

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
      {isPending && (
        <img
          src={loading}
          style={{ margin: "0 auto", display: "block", height: "50vh" }}
          alt="loading"
        />
      )}
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
          <button onClick={handleDelete}>Delete this Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;