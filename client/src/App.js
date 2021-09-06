import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import FavoriteBlogs from "./pages/FavoriteBlogs"
import NotFound from "./pages/NotFound";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="body-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add_blog">
              <CreateBlog />
            </Route>
            <Route exact path="/favorite_blogs">
              <FavoriteBlogs />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
