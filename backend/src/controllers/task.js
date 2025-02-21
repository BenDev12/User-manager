import Task from "../models/Task";

export const addTask = async (req, res, next) => {
  try {
    const { title, Description } = req.body;
    const newTask = new Task({
      title,
      Description,
    });
    await newTask.save();

    return res.status(200).json({
      newTask,
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const fetchTasks = async (req, res, next) => {
  try {
    await Task.find();
    if (!Task)
      return res.status(404).json({
        message: "Task not found",
      });
    return res.status(200).json({
      Task,
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const fetchTask = async (req, res, next) => {
  try {
    const TaskId = req.params.Id;
    await Task.findById(TaskId);
    if (!Task)
      return res.status(404).json({
        message: "Tasks not found",
      });
    return res.status(200).json({
      Task,
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
export const updateTask = async (req, res, next) => {
  try {
    const TaskId = req.params.Id;
    await Task.findAndUpdate(TaskId);
    if (error)
      return res.status(404).json({
        message: "Faile to save please try again",
      });
    return res.status(200).json({
      message: "Task Upadeted sucessfully sucessfuly",
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const TaskId = req.params.Id;
    await Task.findByIdAndDelete(TaskId);
    if (!Task)
      return res.status(404).json({
        message: "Task not found",
      });
    return res.status(200).json({
      message: "Task was deleted sucessfully",
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
