import express from "express";
import {
  createNewChampion,
  deleteChampion,
  getChampions,
  getChampionById,
  updateChampion,
  getChampsByOrigin,
} from "../controllers/champion.controller.js";

const router = express.Router();

router.get("/origin", getChampsByOrigin);
router.get("/", getChampions);
router.get("/:id", getChampionById);
router.post("/", createNewChampion);
router.put("/:id", updateChampion);
router.delete("/:id", deleteChampion);

export default router;
