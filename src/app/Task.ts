export interface Task{
    id?: number, //no tiene una tarea hasta que se le gurde un id por eso el signo de pregunta
    text: string,
    day: string,
    remainder: boolean,
}
// esta funcion es la que esta ligada a mock-task ya que por ahora simularemos una base de datos que deberiamos hacer con myqsl etc.