export const authLogoutEvent = () => {
  window.dispatchEvent(new Event("auth:logout"));
};
