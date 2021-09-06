import { useState } from "react";
import { useHistory } from "react-router";
import uploadFile from "../functions/uploader";
import "./styles/CreateBlog.css";

const CreateBlog = () => {
  let avatarID = "";
  let bannerID = "";
  let cardID = "";

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

  const history = useHistory();

  const blog = {
    title,
    description,
    shortDescription,
    name,
    categoryName,
    banner,
    cardBanner,
  };

  const handleBanner = (e) => {
    setBannerImg(e.target.files[0]);
  };
  const handleCard = (e) => {
    setCardImg(e.target.files[0]);
  };
  const handleAuthorAvatar = (e) => {
    setAvatarImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBanner = await uploadFile(bannerImg, bannerID);
    const newCard = await uploadFile(cardImg, cardID);
    const newAvatar = await uploadFile(avatarImg, avatarID);

    await fetch("http://localhost:3001/api/blog/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bannerID: newBanner.ID,
        cardID: newCard.ID,
        avatarID: newAvatar.ID,
        categoryName: categoryName,
        ...blog,
      }),
    })
    // .then(() => {
    //   history.push("/");
    // });
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
          onChange={handleBanner}
        />
        <label>Card Image:</label>
        <input
          type="file"
          required
          accept="image/png, image/jpg, image/jpeg"
          className="upload-btn"
          onChange={handleCard}
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
          onChange={handleAuthorAvatar}
        />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
