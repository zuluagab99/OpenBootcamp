import React from 'react'
import { LEVELS } from '../../models/level.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../Pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplo', 'Descripción predeterminada', false, LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('TODO: Cambiar el estado de una tarea')
    }

    return (
    <div>
        <div>
            Your tasks:
        </div>
        {/* TODO: Aplicar un For/Map para renderizar una lista*/}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}



export default TaskListComponent
