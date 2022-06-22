import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

const urlPrefix = "http://levoyageur.mathieuv.pro:3630/api/";


const _storeData = async (token) => {
  try {
    await AsyncStorage.setItem(
      'token',
      token
    );
  } catch (error) {
    // Error saving data
  }
};



const listAPI = {
  //Listes des voyages pour un utilisateurs
  GetTrips: () => {

   
return AsyncStorage.getItem("token").then(token => 
   


     fetch(urlPrefix +  `user/${
      jwtDecode(token).id
    }/trip`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      //body: JSON.stringify({'search' : data.email})
    })).then((res) => res.json())
  },

  GetTrip: (id) => {


    return AsyncStorage.getItem("token").then(token => 
     fetch(urlPrefix + `user/${
        jwtDecode(token).id
      }/trip/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })).then((res) => res.json());
  },




  //Listes des marker d'un voyage
  GetPOIsFromTrip: (id) => {


    return AsyncStorage.getItem("token").then(token => 
       fetch(urlPrefix + `user/${
        jwtDecode(token).id
      }/trip/${id}/poi`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      //body: JSON.stringify({"idTrip" : data.idTrip})
    })).then((res) => res.json());
  },

  GetPOIsFromDay: (data) => {


    return AsyncStorage.getItem("token").then(token => 
     fetch(urlPrefix + `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/step/${data.idStep}/day/${data.idDay}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      //body: JSON.stringify({"idTrip" : data.idTrip})
    })).then((res) => res.json());
  },


  GetStepsFromTrip: (id) => {
    return AsyncStorage.getItem("token").then(token =>
      fetch(urlPrefix + `user/${
        jwtDecode(token).id
      }/trip/${id}/step`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }, //body: JSON.stringify({"idTrip" : data.idTrip})
    })).then((res) => res.json());
  },

  GetDaysfromStep: (data) => {


    return AsyncStorage.getItem("token").then(token =>
      fetch(urlPrefix + `user/${
        jwtDecode(token).id
      }/trip/${data.tripId}/step/${data.idStep}/day`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }, //body: JSON.stringify({"idTrip" : data.idTrip})
    })).then((res) => res.json());
  },
  GetRidesFromTrip: (tripId) => {
		 
		return AsyncStorage.getItem("token").then(token => fetch(urlPrefix + `user/${
      jwtDecode(token).id
      }/trip/${tripId}/ride`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		}, 
		})).then((res) => res.json());
	},
  GetJournal: (id) => {

    return AsyncStorage.getItem("token").then(token => fetch(urlPrefix + `user/${
      jwtDecode(token).id}/trip/${id.id}/journal`
    ,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    })).then((res) => res.json());
  },

  postMessage: (data) => {
   
    return AsyncStorage.getItem("token").then(token => fetch(urlPrefix +
      `user/${
        jwtDecode(token).id
      }/trip/${data.id.id}/journal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },

      body: JSON.stringify({
        title: data.title,
        content: data.content,
        image: data.image
      }),
    })).then((res) => res.json());
  },

  Login: (data) => {
    const urlSuffix = "login";
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }).then((res) => res.json())
    .then(res=> _storeData(res.token))
    
  },
  Register: (username, password) => {
    const urlSuffix = "signup";
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => res.json());
  },
};

export default listAPI;