import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
  const response = await axios.post(`${API_URL}/login`, userData, {
    headers: { "Content-Type": "text/plain" },
  });

  return response.data.user;
}

export async function signUp({ name, login, password }) {
  const response = await axios.post(
    API_URL,
    { login, name, password },
    {
      headers: { "Content-Type": "text/plain" },
    },
  );

  return response.data.user;
}
