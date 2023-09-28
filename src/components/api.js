const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const randomGetList = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/random?apiKey=${apiKey}&number=10`
    );
    const getList = response.json();
    return getList;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const searchRecipe = async (query) => {
  try {
    const response = await fetch(
      `${baseUrl}/complexSearch?query=${query}&apiKey=${apiKey}&number=10`
    );
    const getList = response.json();
    return getList;
  } catch (error) {
    console.error("Error searching data: ", error);
  }
};

export const getInformation = async (id) => {
  try {
    const response = await fetch(
      `${baseUrl}/informationBulk?ids=${id}&apiKey=${apiKey}`
    );
    const getInformation = response.json();
    return getInformation;
  } catch (error) {
    console.error("Error get summary data: ", error);
  }
};

