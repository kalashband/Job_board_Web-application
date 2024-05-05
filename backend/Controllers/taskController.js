const TaskModel = require("../Model/taskmodel");

module.exports.getTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

module.exports.saveTasks = async (req, res) => {
    const { task } = req.body;
    try {
        const newTask = await TaskModel.create({ task });
        console.log("Saved successfully...");
        res.status(201).send(newTask);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, msg: "Something went wrong" });
    }
};

module.exports.updateTasks = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    try {
        await TaskModel.findByIdAndUpdate(id, { task });
        res.send("Updated successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, msg: "Something went wrong" });
    }
};

module.exports.deleteTasks = async (req, res) => {
    const { id } = req.params;
    try {
        await TaskModel.findByIdAndDelete(id);
        res.send("Deleted successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, msg: "Something went wrong" });
    }
};
