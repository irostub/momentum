const module = {
  saveLocalData: (key, value) => {
    localStorage.setItem(key, value);
  },
  loadLocalData: (key) => {
    return localStorage.getItem(key);
  },
};
export default module;
