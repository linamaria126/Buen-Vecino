
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      api: "https://literate-parakeet-jj5754r5r9r935pw6-3001.app.github.dev/api/",
      publicaciones: [],
      allResidents: [],
      reservaciones:[]
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

      addReservacion: async () => {
        const store = getStore()
        const response = await fetch(store.api + 'reservaciones', {
          method: "POST",
          body: JSON.stringify({descripcion: reservacion.descripcion,
          personas: parseInt(reservacion.personas),
          inicio: reservacion.fecha}),
          headers: {
            "Content-Type": "application/json",
          }
        })
        if(response.ok){
          console.log(await 'todo correcto')
        }
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
