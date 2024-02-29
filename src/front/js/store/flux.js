const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: "http://127.0.0.1:3001/api",
      publicaciones: [],
      users: []
    },
    actions: {
      addPublicacion: async (publicando) => {
        console.log(publicando);
        const store = getStore();
        console.log(store.publicaciones)
        const response = await fetch(store.api + "publicaciones", {
          method: "POST",
          body: JSON.stringify({ contenido: publicando.contenido,
          unidad_residencial_id: parseInt(publicando.unidad_residencial_id) }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          getActions().getPublicaciones()
        }
        console.log(await response.json());
      },
      getPublicaciones: async () => {
        const store = getStore();
        const response = await fetch(store.api + "publicaciones/1");
        const allPosts = await response.json();
        setStore({ publicaciones: allPosts });
        console.log(allPosts)
      },


      getAllResidentsByStatus: async (unidad_residencial_id, estado) => {
        const store=getStore();
        const response = await fetch(`${store.apiURL}/estadopendiente/${unidad_residencial_id}/${estado}`)
        const data = await response.json()
        setStore({users : data.users})
        console.log(data.users)
      
      }, 

      putUpdatedStatus: async (residente_id, selectedStatus) => {
        const store=getStore();
        const response =await fetch (`${store.apiURL}/actualizarestado/${residente_id}` , 
        {
          method: 'PUT',
          body: JSON.stringify({estado : selectedStatus}),
          headers:{
            "Content-Type": "application/json",

          }
         
        });
        if (response.ok) return true
        return false
      }
    },
   
  };
};

export default getState;
