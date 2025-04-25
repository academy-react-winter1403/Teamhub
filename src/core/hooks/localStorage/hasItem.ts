export const hasItemLocalStorage = (key: string): boolean => {
    try {
      return localStorage.getItem(key) !== null;
    } catch (error) {
      console.error("LocalStorage hasItem ERR", error);
      return false;
    }
  };