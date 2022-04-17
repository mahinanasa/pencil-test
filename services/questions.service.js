const {QuestionsModel,QuestionsSchema} = require('../models')
const BaseCruds = require('./base/Cruds');

class QuestionsService extends BaseCruds{
    async getQuestions(params) {
    return await this.findIndexed(params);
  }
}

module.exports = new QuestionsService(QuestionsModel, QuestionsSchema);