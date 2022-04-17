
const { model, Schema } = require('mongoose');

const TopicsSchema = new Schema(
    {   
        topicLevel1: String,
        topicLevel2: String,
        topicLevel3: String,
    })
TopicsSchema.index({ topicLevel1: 'text',topicLevel2:'text',topicLevel3: 'text' });
module.exports.TopicsModel = model('topics', TopicsSchema);
module.exports.TopicsSchema = TopicsSchema;