const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      api: "https://symmetrical-journey-r4g6gr7g7p9p3xrv9-3001.app.github.dev/api/",
      publicaciones: [],
      allResidents: []
    },
    actions: {
      addPublicacion: async (publicando) => {
        console.log(publicando);
        const store = getStore();
        const response = await fetch(store.api + "publicaciones", {
          method: "POST",
          body: JSON.stringify({ contenido: publicando }),
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
        console.log(publicaciones)
        console.log(allPosts)
      },


      getAllResidents: async () => {
        const response = await fetch(process.env.BACKEND_URL + "api/get/<int:unidad_residencial_id")
        const data = await response.json()
        setStore({allResidents : data.residente})
      
      }
    },
   
  };
};

export default getState;
