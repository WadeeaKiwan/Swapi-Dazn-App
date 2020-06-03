import axios from "axios";

const getPage = async (page) => {
  try {
    let url = `/people/?page=${page}`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getPage;
