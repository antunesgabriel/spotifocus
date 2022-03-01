const PREFIX = "@";
const USER_TOKEN_KEY = "userToken";
const USER_TOKEN_TYPE_KEY = "userTokenType";
const USER_TOKEN_EXPIRE_KEY = "userTokenExpireIn";

export const setUserCrendentials = (
  token: string,
  tokenType: string,
  expireIn: string
) => {
  localStorage.setItem(`${PREFIX}${USER_TOKEN_KEY}`, token);
  localStorage.setItem(`${PREFIX}${USER_TOKEN_TYPE_KEY}`, tokenType);
  localStorage.setItem(`${PREFIX}${USER_TOKEN_EXPIRE_KEY}`, expireIn);
};

export const getUserFullCredentials = () => {
  const token = localStorage.getItem(`${PREFIX}${USER_TOKEN_KEY}`);
  const type = localStorage.getItem(`${PREFIX}${USER_TOKEN_TYPE_KEY}`);

  const expireIn = localStorage.getItem(`${PREFIX}${USER_TOKEN_EXPIRE_KEY}`);

  if (!expireIn) {
    console.log("Aquii");
    return null;
  }

  const expired = new Date() > new Date(expireIn);

  if (expired) {
    localStorage.removeItem(`${PREFIX}${USER_TOKEN_KEY}`);
    localStorage.removeItem(`${PREFIX}${USER_TOKEN_TYPE_KEY}`);
    localStorage.removeItem(`${PREFIX}${USER_TOKEN_EXPIRE_KEY}`);

    return null;
  }

  return token && type ? `${type} ${token}` : null;
};
