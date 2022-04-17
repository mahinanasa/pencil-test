const { questionsService } = require('../services');

const getUsers = async(req, res, next) => {
    try {
        const params = req.query;
        const questions = await questionsService.getQuestions(params)
        return res.json({message: "success", code:200, data:questions});   
    } catch (error) {
        return next(error);
    }
};
module.exports = {getUsers};