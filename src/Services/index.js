import API from "../API";

export const fetchSearch = (keyWord) => {
  const url = "search";
  const params = {
    query: keyWord,
    from: "0",
    limit: "20",
    country: "CO",
  };
  return API.get(url, {
    params: {
      ...params,
    },
  })
    .then((response) => response.data)
    .catch((error) => error.message);
};

export const getProductByCategory = async (id_category) => {
  const url = `productsByCategory/${id_category}`;
  const params = {
    country: "CO",
    from: "0",
  };
  return API.get(url, {
    params: {
      ...params,
    },
  })
    .then((response) => response.data.data.items)
    .catch((error) => error);
};
