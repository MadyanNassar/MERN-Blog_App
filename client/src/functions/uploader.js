 const uploadFile = async (img, ID) => {
    const formData = new FormData();
    formData.append("file", img);
    try {
      const response = await fetch("http://localhost:3001/api/file/", {
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