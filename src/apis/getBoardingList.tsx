const getBoardingList = async () => {
  const response = await fetch("https://snapevent.site/api/posts/list/1/7/recent");
  const jsonResponse = response.json();
  return jsonResponse;
};

export default getBoardingList;
