
const getState = ({ getStore, getActions, setStore }) => {  
  return {
    store: {
      api: "https://literate-parakeet-jj5754r5r9r935pw6-3001.app.github.dev/api/",
      apiUrl: process.env.REACT_APP_BACKEND_URL,
      publicaciones: [],
      allResidents: [],
      nameUnitCreated: null,      
      user: JSON.parse( localStorage.getItem("user") )|| null,
      users: [],
      unis:[],
      reservaciones:[],
      token: localStorage.getItem("token") || ""
    },
    actions: {
      addUnit: async (newUnitUser) => {
        try {
          if(!newUnitUser.email || !newUnitUser.password || !newUnitUser.nombre_unidad || !newUnitUser.nit 
            || !newUnitUser.direccion || !newUnitUser.telefono || !newUnitUser.nombres_admin || !newUnitUser.apellidos 
            || !newUnitUser.celular || !newUnitUser.cedula){
            alert("Porfavor, Completa todos los campos") 
            return(false);
          }

          if( newUnitUser.password != newUnitUser.rePassword ){
            alert("El password no conincide con la comprobación")
            return(false)
          }

          const store = getStore();
          const response = await fetch(store.apiUrl + "/registration", {
            method: "POST",
            body: JSON.stringify(newUnitUser),
            headers: {
              "Content-Type": "application/json",
            },
          });
          let data = await response.json();
          if( response.status != 200){
            alert( data.error )
            return false;
          }

          await fetch(store.apiUrl + "/notificacion", {
            method: "POST",
            body: JSON.stringify({
              "para" : newUnitUser.email,
              "asunto": "¡Bienvenido al equipo de Buen Vecino!",
              "url" : process.env.REACT_APP_FRONTEND_URL+"userRegister/"+data.id
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          

          setStore({...store, nameUnitCreated: data.nombre_unidad, idUnitCreated: data.id  });
          return(true);
        } catch (e) {
          console.error(e);
        }
      },

      addUser: async (newUser) => {
        try {
          if(!newUser.torre || !newUser.num_apto || !newUser.tipo || !newUser.nombres || !newUser.apellidos || !newUser.celular
            || !newUser.cedula || !newUser.email || !newUser.password){
              alert("Porfavor, Completa todos los campos") 
            return(false);
            }
          if(!newUser.privacy_policy){
              alert("Para registrarse debe aceptar las políticas de privacidad") 
            return(false);
            }
          const store = getStore();
          const response = await fetch(store.apiUrl + "/userRegister", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json",
            },
          });      

          let data = await response.json();
          
          if(response.status != 200 ){
            alert( data.error )
            return(false);
          }
          
          setStore({...store, nameUserCreated: data.nombres});
          return(true);

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
          },
        });
        const data = await response.json();
        if (response.ok) 
        {
          setStore({user:data.user, token:data.token})
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          return true;
        }
        else{
          return false;
        }
        
      },

      addPublicacion: async (publicando) => {
        console.log(publicando);
        const store = getStore();
        console.log(store.publicaciones);
        const response = await fetch(store.apiUrl + "/publicaciones", {
          method: "POST",
          body: JSON.stringify({
            contenido: publicando.contenido,
            unidad_residencial_id: store.user.unidad_residencial_id,
            residente_id: store.user.id            
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
        const response = await fetch(store.apiUrl + "/publicaciones/"+store.user.unidad_residencial_id);
        const allPosts = await response.json();
        setStore({ publicaciones: allPosts });
        console.log(allPosts);
      },

      addReservacion: async (reservacion) => {
        const store = getStore();
        const response = await fetch(store.api + "reservas", {
          method: "POST",
          body: JSON.stringify({
            descripcion: reservacion.descripcion,
            personas: parseInt(reservacion.personas),
            inicio: reservacion.fecha,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      },

      getAllResidentsByStatus: async (unidad_residencial_id, estado) => {
        // const store=getStore();
        const store= getStore();
        const response = await fetch(`${store.apiUrl}/estadopendiente/${unidad_residencial_id}/${estado}`)
        //const response = await fetch (`http://localhost:3001/api/estadopendiente/${unidad_residencial_id}/${estado}`)
        const data = await response.json()
        setStore({users : data.users})
        console.log(data.users)
      
      }, 

      getAllUnis: async () => {
        const store=getStore();
        const response = await fetch(`${store.apiUrl}/get/unis`)
        console.log(response)
        const data = await response.json()
        console.log(data)
        setStore({unis : data.unis})
        console.log(data.unis)
      
      }, 

      putUpdatedStatus: async (residente_id, selectedStatus) => {
        const store=getStore();
        ///const response =await fetch (`http://localhost:3001/api/actualizarestado/${residente_id}`,
        const response =await fetch (`${store.apiUrl}/actualizarestado/${residente_id}` , 
        {
          method: 'PUT',
          body: JSON.stringify({estado : selectedStatus}),
          headers:{
            "Content-Type": "application/json",
            "authorization" : `Bearer ${store.token}`

          }
      });
        if (response.ok) return true;
        return false;
      },
    },
  };
};

export default getState;
