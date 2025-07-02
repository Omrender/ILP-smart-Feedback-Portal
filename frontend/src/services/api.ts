const API = "http://localhost:5000/api";

export async function register(username: string, password: string) {
  return fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, passwordHash: password }),
  });
}

export async function login(username: string, password: string) {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, passwordHash: password }),
  }).then(res => res.json());
}

export async function submitFeedback(feedback: any) {
  return fetch(`${API}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feedback),
  });
}

export async function getFeedbacks(userId: number) {
  return fetch(`${API}/feedback/user/${userId}`).then(res => res.json());
}

export async function getAllFeedbacks() {
  return fetch(`${API}/feedback/all`).then(res => res.json());
}
