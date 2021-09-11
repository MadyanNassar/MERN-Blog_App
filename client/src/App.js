import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/BlogEdit";

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
            <Route exact path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/edit-blog/:id">
              <EditBlog />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
