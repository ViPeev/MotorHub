import { setUserData, clearUserData } from "../utils/localStorage";

const host = "http://localhost:3030/api";

async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if (response.ok === false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    try {
      const data = await response.json();
      return data;
    } catch (err) {
      return response;
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

function getOptions(method = "get", body) {
  const options = {
    method,
    headers: {},
  };

  const token = localStorage.getItem("authToken");
  if (token != null) {
    options.headers["X-Authorization"] = token;
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
}

export async function get(url) {
  return await request(url, getOptions());
}

export async function post(url, data) {
  return await request(url, getOptions("post", data));
}

export async function put(url, data) {
  return await request(url, getOptions("put", data));
}

export async function del(url) {
  return await request(url, getOptions("delete"));
}

export async function login(username, password) {
  const result = await post("/auth/login", { username, password });

  setUserData(result.result);
  return result;
}

export async function register(username, email, password, firstName, lastName) {
  const result = await post("/auth/register", {
    username,
    email,
    password,
    firstName,
    lastName,
  });

  setUserData(result.result);
  return result;
}

export async function logout() {
  const result = await get("/auth/logout");

  clearUserData();

  return result;
}
