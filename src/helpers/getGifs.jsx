// NO FUNCIONA CON JEST
// const apiKey = import.meta.env.VITE_GIPHY_API_KEY; 

const api_key = 'uN01Zk4XYf2sYu37E329RWhUqfYz0HQD';

export const getGifs = async (search) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map( img =>
    ({
      id: img.id,
      title: img.title,
      path: img.images.downsized_medium.url
    })
  );

  return gifs;
}