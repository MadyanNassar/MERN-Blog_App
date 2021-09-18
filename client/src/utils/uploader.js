const uploadFile = async (img, ID) => {
  const formData = new FormData();
  formData.append("file", img);
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/file/`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Network Error ... Can't upload image");
    }
    ID = await response.json().then((data) => data.id);
  } catch (err) {
    console.log(err);
  }
  return {
    img,
    ID,
  };
};

export default uploadFile;
