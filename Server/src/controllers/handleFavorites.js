let myFavorites = [];

const addFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((character) => character.id !== Number(id));

  res.status(200).json(myFavorites);
};

module.exports = { addFav, deleteFav };
