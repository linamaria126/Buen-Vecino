const API_URL=process.env.BACKEND_URL
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      publicaciones: [],
      allResidents: [],
      nameUnitCreated: null,
      users: [],
      unis:[],
    },
    actions: {
      addUnit: async (newUnitUser) => {
        try {
          console.log(newUnitUser);
          const store = getStore();
          const response = await fetch(API_URL + "/registration", {
            method: "POST",
            body: JSON.stringify(newUnitUser),
            headers: {
              "Content-Type": "application/json",
            },
          });
          let data = await response.json();
          setStore({...store, nameUnitCreated: data.nombre_unidad});
        } catch (e) {
          console.error(e);
        }
      },

      addUser: async (newUser) => {
        try {
          console.log(newUser);
          const store = getStore();
          const response = await fetch(API_URL + "/userRegister", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json",
            },
          });
          let data = await response.json();
          setStore({...store, nameUserCreated: data.nombres});
        } catch (e) {
          console.error(e);
        }
      },

      login: async (newUser) => {
        const store = getStore();
        const response = await fetch(API_URL + "/login", {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          }
        })
        const data = await response.json();
        setStore({user:data})
        localStorage.setItem("token", data.token)
      },

      addPublicacion: async (publicando) => {
        console.log(publicando);
        const store = getStore();
        console.log(store.publicaciones);
        const response = await fetch(API_URL + "/publicaciones", {
          method: "POST",
          body: JSON.stringify({
            contenido: publicando.contenido,
            unidad_residencial_id: parseInt(publicando.unidad_residencial_id),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          getActions().getPublicaciones();
        }
        console.log(await response.json());
      },
      getPublicaciones: async () => {
        const store = getStore();
        const response = await fetch(API_URL + "/publicaciones/1");
        const allPosts = await response.json();
        setStore({ publicaciones: allPosts });
        console.log(allPosts);
      },


      getAllResidentsByStatus: async (unidad_residencial_id, estado) => {
        const store=getStore();
        const response = await fetch(`${API_URL}/estadopendiente/${unidad_residencial_id}/${estado}`)
        const data = await response.json()
        setStore({users : data.users})
        console.log(data.users)
      
      }, 

      getAllUnis: async () => {
        const store=getStore();
        const response = await fetch(`${API_URL}/get/unis`)
        console.log(response)
        const data = await response.json()
        console.log(data)
        setStore({unis : data.unis})
        console.log(data.unis)
      
      }, 

      putUpdatedStatus: async (residente_id, selectedStatus) => {
        const store=getStore();
        const response =await fetch (`${API_URL}/actualizarestado/${residente_id}` , 
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
