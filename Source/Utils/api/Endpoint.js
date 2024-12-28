const URL = "http://localhost:8080/";

const transformResponse = async (response) => {
  try {
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
  const queryString = new URLSearchParams(data).toString(); 
  const fullUrl = `${URL + 'users/login'}?${queryString}`;
  const response = await fetch(fullUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await transformResponse(response);
};

const signup = async (userData) => {
  const response = await fetch(URL + 'users/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await transformResponse(response);
};

export { login, signup };
