const { model, Schema } = require('mongoose');

const QuestionsSchema = new Schema(
    {   questionNumber:Number,
        annotation1: String,
        annotation2: String,
        annotation3: String,
        annotation4: String,
        annotation5: String,
    })
QuestionsSchema.index({ annotation1: 'text',annotation2: 'text',annotation3: 'text',annotation4: 'text',annotation5: 'text' }); 
module.exports.QuestionsModel = model('questions', QuestionsSchema);
module.exports.QuestionsSchema = QuestionsSchema;