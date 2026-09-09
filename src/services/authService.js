import api from "./api";

const registerUser = (username, password) => {
  return api.post("/auth/register", { username, password });
};

const loginUser = (username, password) => {
  return api.post("/auth/login", { username, password });
};

export { registerUser, loginUser };
