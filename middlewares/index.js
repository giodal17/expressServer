const ObjectId = require("mongoose").Types.ObjectId;

const validateDbId = (req, res, next) => {
    if (ObjectId.isValid(req.params.id) == false)
    res.status(400).json({ error: "id non valido" });
  else next()
}

const raiseRecord404Error = (req, res) => {
    res.status(400).json({ error: "id inesistente!" });
}

module.exports = {
    validateDbId,
    raiseRecord404Error
}