const Task = require('../models/tasks')
const asyncwrapper= require('../middleware/async')
const { createcustomerror } = require('./errors/customerrors')
const getAllTasks=asyncwrapper(async(req,res)=>{

    const tasks = await Task.find({})
    res.status(201).json({tasks})
})

const createTask=asyncwrapper(async(req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})

})
const getTask=asyncwrapper(async(req,res)=>{
    
const {id:taskid}=req.params
const task = await Task.findOne({_id:taskid});
if(!task){
    return next (createcustomerror(`no task with id :${taskid}`,404))
    
}
    res.status(200).json({task})
    
})

const updateTask=asyncwrapper(async(req,res)=>{
  const {id:taskid}=req.params;
    const task = await Task.findOneAndUpdate({_id:taskid},req.body,{
        new:true,
        runValidators:true,
    })
if(!task){
    return next (createcustomerror(`no task with id :${taskid}`,404))
}        res.status(200).json({task})


}
)

const deleteTask=asyncwrapper(async(req,res)=>{
    
        const {id:taskid}=req.params;
        const task = await Task.findOneAndDelete({_id:taskid});
        if(!task){
            return next (createcustomerror(`no task with id :${taskid}`,404))        }
        res.status(200).json({task})
     
    
}
)
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}