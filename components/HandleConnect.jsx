import listAPI from "./listApi";

const handleConnect = ({username, password}) => {
    listAPI.Login(username, password).then((data) => {
        if (data.token) {
          window.localStorage.setItem("isLogged", "true");
          window.localStorage.setItem("token", data.token);
          console.log("CONNECTED");
          //navigation.navigate('Homepage');
        } else {
          console.log("NOT CONNECTED");
        }
      });
};

export default handleConnect;