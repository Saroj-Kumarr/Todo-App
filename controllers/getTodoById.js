const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Data is not fetched ❌",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Find successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal error",
      message: error.message,
    });
  }
};
