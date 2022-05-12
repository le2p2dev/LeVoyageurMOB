import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

const urlPrefix = "http://levoyageur.mathieuv.pro:3630/api/";
var token = "";
const setToken = async () => {
  AsyncStorage.getItem("token").then(data => token = data)
}

const listAPI = {
  //Listes des voyages pour un utilisateurs
  GetTrips: () => {
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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
    setToken();
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