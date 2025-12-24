// Local storage utilities for user data persistence

export interface UserData {
  email: string;
  name?: string;
  isLoggedIn: boolean;
}

const USER_KEY = 'sao_miguel_user';

export const saveUser = (userData: UserData): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(userData));
};

export const getUser = (): UserData | null => {
  const data = localStorage.getItem(USER_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const updateUserName = (name: string): void => {
  const user = getUser();
  if (user) {
    saveUser({ ...user, name });
  }
};

export const logout = (): void => {
  const user = getUser();
  if (user) {
    saveUser({ ...user, isLoggedIn: false });
  }
};

export const isAuthenticated = (): boolean => {
  const user = getUser();
  return user?.isLoggedIn ?? false;
};
