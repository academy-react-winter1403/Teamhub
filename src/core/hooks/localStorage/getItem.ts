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
