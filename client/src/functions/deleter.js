const deleteFunc = async (id, name) => {
    await fetch(`${process.env.REACT_APP_API_URL}/${name}/${id}`, {
       method: "DELETE",
     });
     
   };

   export default deleteFunc;