import API from "../API";

const mock = async (data, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time * 1000);
  });
};

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
    .then((response) => response.data)
    .catch((error) => error);
};

export const getCategories = async () => {
  const url = `categories`;
  return API.get(url)
    .then((response) => response.data.categories)
    .catch((error) => error);
};

export const getProductDetails = async (id_product) => {
  const url = `product/${id_product}"`;
  const params = {
    language: "en",
  };
  return API.get(url, {
    params: {
      ...params,
    },
  })
    .then((response) => response.data)
    .catch((error) => error);
};
