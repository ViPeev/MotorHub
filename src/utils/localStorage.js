function setUserData(data) {
  localStorage.setItem("authToken", data.accessToken);
  localStorage.setItem(
    "userData",
    JSON.stringify({
      email: data.email,
      _id: data._id,
      username: data.username,
      fullName: `${data.firstName} ${data.lastName}`,
    })
  );
}

function clearUserData() {
  localStorage.removeItem("userData");
  localStorage.removeItem("authToken");
}

function getUserData() {
  const userData = localStorage.getItem("userData");
  const authToken = localStorage.getItem("userData");

  return userData && authToken
    ? { userData: JSON.parse(userData), authToken }
    : null;
}

function setCredentials(username, password) {
  localStorage.setItem(
    "credentials",
    JSON.stringify({
      username,
      password,
    })
  );
}

function getCredentials() {
  const credentials = localStorage.getItem("credentials");

  return credentials ? JSON.parse(credentials) : null;
}

function clearCredentials() {
  localStorage.removeItem("credentials");
}

export {
  setUserData,
  clearUserData,
  getUserData,
  setCredentials,
  clearCredentials,
  getCredentials
};
