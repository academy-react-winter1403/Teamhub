// export const getItemLocalStorage = <T>(key: string): T | null => {
//     try {
//       const serializedValue = localStorage.getItem(key);
//       if (serializedValue === null) return null;
//       return JSON.parse(serializedValue) as T;
//     } catch (error) {
//       console.error("LocalStorage getItem ERR", error);
//       return null;
//     }
//   };
// export const getItemLocalStorage = (key: string): string | null => {
//   return localStorage.getItem(key);
// };
export const getItemLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  try {
    // اگه مقدار JSON هست، parse کن
    return value ? JSON.parse(value) : null;
  } catch {
    // اگه parse نشد، خود مقدار رو برگردون
    return value;
  }
};