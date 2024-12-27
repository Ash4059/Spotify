const URL = "http://localhost:8080/";

const fetchUserData = async (url, method, body) => {
  try {
    const response = await fetch(URL + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const token = response.headers.get("Authorization");
    const userData = await response.json();

    const data = { userData, token };

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const login = async (data) => {
  return await fetchUserData("users/login", "POST", { data });
};

const signup = async (userData) => {
  return await fetchUserData("users/register", "POST", userData);
};

export { login, signup };
