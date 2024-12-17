const express=require('express')
const { addTask, viewTask, deleteTask, updateTask } = require('../controllers/TaskController')
const routes=express.Router()
routes.post('/addtask',addTask);
routes.get('/getalltask',viewTask);
routes.delete('/deletetask/:id',deleteTask)
routes.put('/update/:id',updateTask)
module.exports=routes