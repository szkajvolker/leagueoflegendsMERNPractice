import express from "express";
import {
  createNewChampion,
  deleteChampion,
  getChampions,
  getChampionById,
  updateChampion,
} from "../controllers/champion.controller.js";

const router = express.Router();

router.get("/", getChampions);
router.get("/:id", getChampionById);
router.post("/", createNewChampion);
router.put("/:id", updateChampion);
router.delete("/:id", deleteChampion);

export default router;
