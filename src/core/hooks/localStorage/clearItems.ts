export const clearLocalStorage = (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("LocalStorage clearItems ERR", error);
    }
  };