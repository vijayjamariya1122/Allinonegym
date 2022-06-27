export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5adc39ada7msh3f0f7448836f222p1caba4jsnb2ca5adac680"
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "5adc39ada7msh3f0f7448836f222p1caba4jsnb2ca5adac680",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
