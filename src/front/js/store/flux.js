const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      api: "https://symmetrical-journey-r4g6gr7g7p9p3xrv9-3001.app.github.dev/api/",
      apiUrl: "http://127.0.0.1:3001/api",
      publicaciones: [],
      allResidents: [],
      nameUnitCreated: null,
    },
    actions: {
      addUnit: async (newUnitUser) => {
        try {
          console.log(newUnitUser);
          const store = getStore();
          const response = await fetch(store.apiUrl + "/registration", {
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
          const response = await fetch(store.apiUrl + "/userRegister", {
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
        const response = await fetch(store.apiUrl + "/login", {
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
        const response = await fetch(store.api + "publicaciones", {
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
        const response = await fetch(store.api + "publicaciones/1");
        const allPosts = await response.json();
        setStore({ publicaciones: allPosts });
        console.log(allPosts);
      },

      getAllResidents: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "api/get/<int:unidad_residencial_id"
        );
        const data = await response.json();
        setStore({ allResidents: data.residente });
      },
    },
  };
};

export default getState;
