const RandomGifContainer = ({ randomGif }) => {
  return (
    <>
      <img src={randomGif?.images?.original?.url} alt="" />
    </>
  );
};

export default RandomGifContainer;
