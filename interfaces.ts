// function showTodo(todo: {title: string, text: string}){
//     console.log(todo.title+ ': '+todo.text)
// }

// let mytodo = {
//     title: 'Build vscod ext',
//     text: 'watch downloaded video on how to make vs ext.'
// }

interface Todo{
    title: string,
    task: string
}

function showTodo(todo: Todo){
    console.log(todo.title+': '+todo.task)
}

let mytodo = {
    title: 'Build vscod ext',
    task: 'watch downloaded video on how to make vs ext.'
}
showTodo(mytodo)