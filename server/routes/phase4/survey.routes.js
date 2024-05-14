import express from "express";
import {
  getAllData,
  deleteDataById,
  getFileById,
} from "../../controllers/phase4/survey.controller.js";

import {
  addSurveyData,
  addSurveyAnalysisData,
} from "../../controllers/fileupload.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post("/surveydata", upload.single("file"), addSurveyData);

router.post(
  "/surveyanalysisdata",
  upload.single("file"),
  addSurveyAnalysisData
);

router.get("/", getAllData);
router.delete("/:id", deleteDataById);
router.get("/:id", getFileById);

export default router;
