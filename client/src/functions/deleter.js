const deleteFunc = async (id, name) => {
    await fetch(`http://localhost:3001/api/${name}/${id}`, {
       method: "DELETE",
     });
     
   };

   export default deleteFunc;