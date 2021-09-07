const deleteFunc = async (id, name) => {
    await fetch(`/api/${name}/${id}`, {
       method: "DELETE",
     });
     
   };

   export default deleteFunc;