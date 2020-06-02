import axios from "axios";

const getPage = async (page) => {
  try {
    let url = `http://swapi.dev/api/people/?page=${page}`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getPage;
