import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

const urlPrefix = "http://levoyageur.mathieuv.pro:3630/api/";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiQyYSQxMCQ4WXR2NmRFZGlmQnViSWl6eTAwV1JlTVhDaXRwaE4udVBET0hJcm5CRHFra2ZTczA5clZQZSIsImlkIjo0LCJpYXQiOjE2NTIzNjY2MDEsImV4cCI6MTY1MjQ1MzAwMX0.sHQCdZg6aSEd-CoygBMIPE6boBHfX4z8WCbNBPAuMIE";

const listAPI = {
  //Listes des voyages pour un utilisateurs
  GetTrips: () => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      //body: JSON.stringify({'search' : data.email})
    }).then((res) => res.json());
  },

  GetTrip: (id) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${id}`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      //body: JSON.stringify({'search' : data.email})
    }).then((res) => res.json());
  },

  CreateTrip: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip`;
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },

      body: JSON.stringify({
        title: data.tripName,
        description: data.description,
      }),
    }).then((res) => res.json());
  },

  //Listes des marker d'un voyage
  GetPOIsFromTrip: (id) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${id}/poi`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      //body: JSON.stringify({"idTrip" : data.idTrip})
    }).then((res) => res.json());
  },

  GetPOIsFromDay: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/step/${data.idStep}/day/${data.idDay}`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      //body: JSON.stringify({"idTrip" : data.idTrip})
    }).then((res) => res.json());
  },

  CreatePOI: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/poi`;
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        latitude: data.latitude,
        longitude: data.longitude,
      }),
    }).then((res) => res.json());
  },

  UpdatePOI: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/poi/${data.id}`;
    return fetch(urlPrefix + urlSuffix, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        latitude: data.latitude,
        longitude: data.longitude,
        poiType: data.poiType,
        tripId: data.tripId,
        stepId: data.stepId,
        dayId: data.dayId,
      }),
    }).then((res) => res.json());
  },
  DeletePOI: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/poi/${data.id}`;
    return fetch(urlPrefix + urlSuffix, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => res.json());
  },
  UpdateStep: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/step/${data.id}`;
    return fetch(urlPrefix + urlSuffix, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        latitude: data.latitude,
        longitude: data.longitude,
        duration: data.duration,
      }),
    }).then((res) => res.json());
  },
  DeleteStep: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/step/${data.id}`;
    return fetch(urlPrefix + urlSuffix, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => res.json());
  },
  CreateStep: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/step`;
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        latitude: data.latitude,
        longitude: data.longitude,
      }),
    }).then((res) => res.json());
  },

  //list des steps d'un voyage
  GetStepsFromTrip: (id) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${id}/step`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }, //body: JSON.stringify({"idTrip" : data.idTrip})
    }).then((res) => res.json());
  },

  GetDaysfromStep: (data) => {
    
    const urlSuffix = `user/${
      jwtDecode(token).id
    }/trip/${data.tripId}/step/${data.idStep}/day`;

    console.log(urlPrefix + urlSuffix);

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }, //body: JSON.stringify({"idTrip" : data.idTrip})
    }).then((res) => res.json());
  },

  Login: (username, password) => {
    const urlSuffix = "login";
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => res.json())
    .then(data=> data.token ? AsyncStorage.setItem("token", data.token) : null)
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