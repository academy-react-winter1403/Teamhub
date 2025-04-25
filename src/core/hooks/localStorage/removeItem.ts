export const removeItemLocalStorage = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("LocalStorage remove Item ERR", error);
    }
  };