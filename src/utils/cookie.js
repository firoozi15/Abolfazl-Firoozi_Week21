import Cookies from "js-cookie";

const setAuthCookie = (token, user) => {
  Cookies.set("token", token, { expires: 1, path: "/" });
  Cookies.set("user", `${JSON.stringify(user)}`, { expires: 1, path: "/" });
};

const getAuthCookie = () => {
  const token = Cookies.get("token");
  let user = Cookies.get("user");
  if (!user) {
    return {
      token,
      user: null,
    };
  }
  user = JSON.parse(user);
  return {
    token,
    user,
  };
};

const logoutUser = () => {
  Cookies.remove("token");
  Cookies.remove("user");
};

export { setAuthCookie, getAuthCookie, logoutUser };
