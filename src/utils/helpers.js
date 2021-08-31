import R from "ramda";
export const removeHTMLTags = (description) => {
  const regex = /(<([^>]+)>)/gi;

  return description?.replace(regex, "");
};

// make request
export const fetch = async (callback, setter, params, setIsLoading) => {
  try {
    if (setIsLoading) {
      setIsLoading(true);
    }
    let { data } = await callback(params);
    data = Array.isArray(data) ? data : data;
    setter(data);
    if (setIsLoading) {
      setIsLoading(false);
    }
  } catch (err) {
    if (setIsLoading) {
      setIsLoading(false);
    }
  }
};

export const sortFavsAlphabetically = R.sortBy(R.prop("name"));
