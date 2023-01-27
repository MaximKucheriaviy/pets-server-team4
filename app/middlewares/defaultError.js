const defaultError = async (req, res, next) => {
    res.status(404).json({
        message: "Invalid path"
    })
}



module.exports = defaultError;