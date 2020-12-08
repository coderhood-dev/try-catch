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
