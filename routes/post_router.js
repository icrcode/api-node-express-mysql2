const express = require("express")
const router = express.Router()

const postController = require("../controller/controller")

router.get("/", postController.getAll)
router.get("/:cod",postController.getByCod)
router.get("/:nome",postController.getByNome)

router.put("/:cod",postController.update)
router.delete("/:cod",postController.delete)
router.post("/",postController.create)

module.exports = router