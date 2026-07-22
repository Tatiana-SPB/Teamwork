import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/transactions";

export function fetchTransactions({ token }) {
  const response = axios.get(API_URL, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data.transactions;
}

export function apiAddTransactions({ token, transaction }) {
  const response = axios.post(API_URL, transaction, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "text/plain",
    },
  });
  return response.data.transactions;
}

export function editTransaction({ token, id, transaction }) {
  const response = axios.patch(`${API_URL}/${id}`, transaction, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "text/plain",
    },
  });
  return response.data.transactions;
}

export function remove({ token, id }) {
  axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
