import BlogList from "../components/BlogList";
import useFetch from "../functions/useFetch";
import loading from "../media/loading.gif";
import bannerLogo from "../media/blogs-banner.jpg";
import "./styles/Home.css";

const Home = () => {
  const url = "/api/blog";
  const { error, isPending, data: blogs } = useFetch(url);

  return (
    <div>
      <img className="banner-logo" src={bannerLogo} alt="banner" />
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && (
          <img src={loading} className="loading-img" alt="loading" />
        )}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;
