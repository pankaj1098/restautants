class ApiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  static getInstance() {
    return new ApiUserService();
  }

  signUp = async (credentials) => {
    console.log("3", credentials);
    const response = await fetch(
      this.BASE_URL + "signUp?key=AIzaSyB331RVX7u7LbaIbjASppO4bN6TBlPH1hQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.swapnilEmail,
          password: credentials.swapnilPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("4", data);
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Authentication-Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        alert(errorMessage);
      }
    }
  };
  login = async (credentials) => {
    console.log("3", credentials);
    const response = await fetch(
      this.BASE_URL +
        "signInWithPassword?key=AIzaSyB331RVX7u7LbaIbjASppO4bN6TBlPH1hQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("4", data);
      return data;
    } else {
      let errorMessage = "Log in failed";
      const data = await response.json();
      console.log(data);
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        alert(errorMessage);
      }
    }
  };
  resetPassword = async (credentials) => {
    console.log("3", credentials);
    const response = await fetch(
      this.BASE_URL + "sendOobCode?key=AIzaSyB331RVX7u7LbaIbjASppO4bN6TBlPH1hQ",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: credentials,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("4", data);
      return data;
    }
  };

  userData = async () => {
    console.log("3");
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL + "lookup?key=AIzaSyB331RVX7u7LbaIbjASppO4bN6TBlPH1hQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("4", data);
      return data.users[0];
    }
  };
}

export const apiUserService = ApiUserService.getInstance();
