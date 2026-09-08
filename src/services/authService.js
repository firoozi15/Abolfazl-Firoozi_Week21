import api from "./api";

const registerUser = (username, password) => {
  return api.post("/auth/register", { username, password });
};

export { registerUser };
