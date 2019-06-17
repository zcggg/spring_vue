import axios from "@/util/MyAxios";

export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    let user = response.user;
    if (token != null) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("user", user);
      window.location.href = "./index.html";
    }
  });
}
