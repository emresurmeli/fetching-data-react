const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (query) => {
  try {
    // &q=New York
    const queryParam = `&q=${query}`;
    const res = await fetch(BASE_URL + queryParam);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { show };
