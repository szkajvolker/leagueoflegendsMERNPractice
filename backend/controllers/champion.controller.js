import Champion from "../models/champion.model.js";

//create //POST
export const createNewChampion = async (req, res) => {
  try {
    if (!req.body.name || !req.body.img || !req.body.origin) {
      return res.status(400).json({ message: "please send all required fields" });
    }
    const newChamp = req.body;
    console.log(newChamp);
    const champ = await Champion.create(newChamp);
    res.status(201).json({ message: "Succesfully created", champ });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
//update //PUT
export const updateChampion = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.name || !req.body.img || !req.body.origin) {
      return res.status(400).json({ message: "please send all required fields" });
    }
    const updatedChamp = await Champion.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedChamp) {
      return res.status(404).json({ message: "Cannot find champ" });
    }
    res.status(200).json({ message: "Champ updated succesfully", updatedChamp });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
//get
export const getChampions = async (req, res) => {
  try {
    const champions = await Champion.find({});
    console.log(champions);
    if (champions.length === 0) {
      return res.status(404).json({ message: "can not find champs in DB" });
    }
    res.status(200).json({ message: "champs found", champions });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//delete
export const deleteChampion = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedChamp = await Champion.findByIdAndDelete(id);
    if (!deletedChamp) {
      return res.status(404).json({ message: "not found champ" });
    }
    res.status(200).json({ message: "champ succesfully deleted" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//get champion by ID
export const getChampionById = async (req, res) => {
  try {
    const { id } = req.params;
    const champion = await Champion.findById(id);
    if (!champion) {
      return res.status(404).json({ message: "Champion not found" });
    }
    res.status(200).json(champion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
