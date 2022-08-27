const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    text: String,
    completed: Boolean,
    priority: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

todoSchema.virtual("id", {
  id: this.id,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  todoSchema,
  Todo,
};
