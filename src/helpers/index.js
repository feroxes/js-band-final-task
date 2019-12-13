const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
};

export default clearLocalStorage;
