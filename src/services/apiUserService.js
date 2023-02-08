class ApiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
 

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
      const data = await response.json();
      alert(data.error.message);
      return undefined
    }
  };
}

export const apiUserService = new ApiUserService();
