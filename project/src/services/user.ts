const AUTH_USER_EMAIL = 'six-cities-email';
const AUTH_USER_AVATAR_URL = 'six-cities-avatar';

export type Email = string;
export type AvatarUrl = string;

export const getEmail = (): Email => {
  const email = localStorage.getItem(AUTH_USER_EMAIL);
  return email ?? '';
};

export const getAvatarUrl = (): AvatarUrl => {
  const avatarUrl = localStorage.getItem(AUTH_USER_AVATAR_URL);
  return avatarUrl ?? '';
};

export const saveEmail = (email: Email): void => {
  localStorage.setItem(AUTH_USER_EMAIL, email);
};

export const saveAvatarUrl = (avatarUrl: AvatarUrl): void => {
  localStorage.setItem(AUTH_USER_AVATAR_URL, avatarUrl);
};

export const dropEmail = (): void => {
  localStorage.removeItem(AUTH_USER_EMAIL);
};

export const dropAvatarUrl = (): void => {
  localStorage.removeItem(AUTH_USER_AVATAR_URL);
};
