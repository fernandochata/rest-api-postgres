import { Router } from 'express'

// import { getTask, getTasks, createTask, updateTask, deleteTask } from '../controllers/task.controller.js'
import controller from '../controllers/task.controller.js'

const router = Router()

router.get('/', controller.getTasks)
router.get('/:id', controller.getTask)
router.post('/', controller.createTask)
router.put('/:id', controller.updateTask)
router.delete('/:id', controller.deleteTask)



export default router