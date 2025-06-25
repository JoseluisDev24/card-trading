export const getCurrentUserId = () => localStorage.getItem("currentUserId");
export const setCurrentUserId = (id: string) =>
  localStorage.setItem("currentUserId", id);
