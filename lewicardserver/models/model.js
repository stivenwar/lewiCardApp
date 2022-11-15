var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var lewicardSchema = new Schema({
    word: { type: String },
    translate: { type: String },
    },
    {timestamps: true}
);
lewicardSchema.method("ToJSON",() => {
    const {__v,_id,...object} = this.toObject();
    object.id = _id;
    return object;
})

module.exports = mongoose.model("lewicardDB", lewicardSchema);
