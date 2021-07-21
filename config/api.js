import axios from "axios";

const getEndpoints = () => {
  return {
    default: {
      client: axios.create({
        baseURL: `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4`,
        responseType: "json",
      })
    }
  };
};

export default getEndpoints;
