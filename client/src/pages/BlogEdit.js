import { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "../functions/useFetch";
import uploadFile from "../functions/uploader";
import "./styles/CreateBlog.css";

const EditBlog = () => {
  const userState = localStorage.getItem("admin") || false;
  const [isAdmin, setIsAdmin] = useState(userState);

  let avatarID = "";
  let bannerID = "";
  let cardID = "";
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [banner, setBanner] = useState([]);
  const [cardBanner, setCardBanner] = useState([]);
  const [name, setName] = useState("");
  const [bannerImg, setBannerImg] = useState(null);
  const [cardImg, setCardImg] = useState(null);
  const [avatarImg, setAvatarImg] = useState(null);

  const url = `${process.env.REACT_APP_API_URL}/blog/${id}`;

  const history = useHistory();

  const { data: editedBlog, isPending, error } = useFetch(url);

  const blog = {
    title,
    description,
    shortDescription,
    name,
    categoryName,
    banner,
    cardBanner,
  };

  if (!userState) {
    const handleAdmin = (e) => {
      const inputKey = window.prompt("Enter the Admin secret key");
      const adminKey = process.env.REACT_APP_ADMIN_KEY;

      if (inputKey === adminKey) {
        localStorage.setItem("admin", true);
        setIsAdmin(true);
        window.alert("Congratulations You are now Admin");
        history.go(0);
      } else {
        window.alert(`${inputKey} is not a secret key ... please try again`);
      }
    };
    return (
      <div className="no-admin">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          You are Not Admin, and you can't edit blogs
        </h2>
        <button
        className="make-admin"
          onClick={(e) => {
            handleAdmin(e);
          }}
        >
          Make me Admin
        </button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const author_id = editedBlog.blog.author[0]._id;
    const category_id = editedBlog.blog.category[0]._id;

    const newBanner = await uploadFile(bannerImg, bannerID);
    const newCard = await uploadFile(cardImg, cardID);
    const newAvatar = await uploadFile(avatarImg, avatarID);

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bannerID: newBanner.ID,
        cardID: newCard.ID,
        avatarID: newAvatar.ID,
        author_id: author_id,
        category_id: category_id,
        ...blog,
      }),
    }).then(() => {
      history.goBack();
    });
  };

  return (
    <div className="create-blog">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          placeholder="title ..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Short Description:</label>
        <input
          type="text"
          placeholder="short Description ..."
          required
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          rows="7"
          type="text"
          placeholder="description ..."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Banner Image:</label>
        <input
          type="file"
          required
          accept="image/png, image/jpg, image/jpeg"
          className="upload-btn"
          onChange={(e) => {
            setBannerImg(e.target.files[0]);
          }}
        />
        <label>Card Image:</label>
        <input
          type="file"
          required
          accept="image/png, image/jpg, image/jpeg"
          className="upload-btn"
          onChange={(e) => {
            setCardImg(e.target.files[0]);
          }}
        />
        <hr />
        <label>category:</label>
        <input
          type="text"
          placeholder="category ..."
          required
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <hr />
        <label>Author:</label>
        <input
          type="text"
          placeholder="author ..."
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          required
          className="upload-btn"
          onChange={(e) => setAvatarImg(e.target.files[0])}
        />
        <button style={{ backgroundColor: "green" }}>Submit changes</button>
      </form>
    </div>
  );
};

export default EditBlog;
