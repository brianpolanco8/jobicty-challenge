export const removeHTMLTags = (description) => {
  const regex = /(<([^>]+)>)/gi;

  return description?.replace(regex, "");
};

// make request
export const fetch = async (callback, setter, params) => {
  try {
    let { data } = await callback(params);
    data = Array.isArray(data) ? data : data.data;
    setter(data);
  } catch (err) {
    console.log(err);
  }
};
