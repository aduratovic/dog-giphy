import { useState, useEffect } from "react";
import axios from "axios";
import RandomGifContainer from "./components/RandomGifContainer";

const App = () => {
  const [randomGif, setRandomGif] = useState(null);

  const getRandomGif = async () => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=f08Y8cr0HS7zNCcFNGxoE0wvyIshrcCA&tag=dog&rating=g"
      )
      .then((res) => {
        setRandomGif(res.data.data);
      });
  };

  useEffect(() => {
    getRandomGif();
  }, []);

  return (
    <>
      <RandomGifContainer randomGif={randomGif} />
      <button onClick={getRandomGif}>Random Gif</button>
    </>
  );
};

export default App;
