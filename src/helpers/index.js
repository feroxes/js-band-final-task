export const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
};

export const isClickOutside = (event, element) => {
  return !element.contains(event.target);
};
