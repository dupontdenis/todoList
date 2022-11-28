const Task = require('../models/task');
const debug = require('debug')('todolist:ctrl');

debug("--- CTRL ---");
const listUpdateOne = async (req, res) => {
    debug("--- UpdateOne ---" + req.params.id);
    try {
        const taskId = req.params.id;
        const doc = await Task.findById(taskId)
        doc.completed = true;
        doc.completedDate = Date.now();
        doc.save();
        res.redirect('/');

    } catch (error) {
        debug("Houston we have a pb!", error)
    }
}

const listDeleteOne = async (req, res) => {
    debug("--- deleteOne ---" + req.params.id);
    try {
        const taskId = req.params.id;
        const doc = await  Task.findByIdAndDelete(taskId)
        debug(`Deleted task $(taskId)`)      
        res.redirect('/');  
    } catch (error) {
        debug("Houston we have a big pb!", error)
    }

}



module.exports = {
    listUpdateOne,
    listDeleteOne,
};