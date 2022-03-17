const urlPrefix = "http://54.36.191.192:3630/api/";

const listAPI = {
  //Listes des voyages pour un utilisateurs
  GetTrips: () => {
    const urlSuffix = "trip/";

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      //headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + data.token },
      //body: JSON.stringify({'search' : data.email})
    }).then((res) => res.json());
  },
  //Voyage pour un id donné
  GetTrip: (id) => {
    const urlSuffix = `trip/${id}`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      //headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + data.token },
      //body: JSON.stringify({'search' : data.email})
    }).then((res) => res.json());
  },

  CreateTrip: (data) => {
    const urlSuffix = "trip/";
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.tripName,
        description: data.description,
      }),
    }).then((res) => res.json());
  },
  //Listes des étapes d'un voyage
  GetStepsFromTrip: (data) => {
    const urlSuffix = "step/trip/?tripId=${id}";

    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.token,
      },
      body: JSON.stringify({ idTrip: data.idTrip }),
    }).then((res) => res.json());
  },
  //Listes des marker
  GetPOIs: () => {
    const urlSuffix = "poi/";

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      //headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + data.token },
      //body: JSON.stringify({"idTrip" : data.idTrip})
    }).then((res) => res.json());
  },
  //Listes des marker d'un voyage
  GetPOIsFromTrip: (id) => {
    const urlSuffix = `poi/trip/?tripId=${id}`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      //headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + data.token },
      //body: JSON.stringify({"idTrip" : data.idTrip})
    }).then((res) => res.json());
  },
  //Listes des POI d'une étape
  GetStepsFromTrip: (id) => {
    const urlSuffix = `poi/step/?stepId=${id}`;

    return fetch(urlPrefix + urlSuffix, {
      method: "GET",
      //headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + data.token },
      //body: JSON.stringify({"idTrip" : data.idTrip})
    }).then((res) => res.json());
  },

  CreatePOI: (data) => {
    console.log(data.idTrip)
    const urlSuffix = "poi";
    return fetch(urlPrefix + urlSuffix, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "top", // à changer
        //description: data.description,
        latitude: data.latitude,
        longitude: data.longitude,
        //poiType: data.poiType,
        tripId: data.idTrip,


      }),
    }).then((res) => res.json());
  },
  UpdatePOI: (data) => {
    const urlSuffix = "/poi";
    return fetch(urlPrefix + urlSuffix, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        latitude: data.latitude,
        longitude: data.longitude,
        poiType: data.poiType,
        tripId: data.idTrip,
        stepId: data.stepId

      }),
    }).then((res) => res.json());

  },
  Login: (username, password) => {
    const urlSuffix = "login";
    return fetch("http://54.36.191.192:3630/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => res.json());
  },
  Register: (username, password) => {
    const urlSuffix = "register";
    return fetch("http://54.36.191.192:3630/register", {
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