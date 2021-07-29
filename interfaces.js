// function showTodo(todo: {title: string, text: string}){
//     console.log(todo.title+ ': '+todo.text)
// }
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.task);
}
var mytodo = {
    title: 'Build vscod ext',
    task: 'watch downloaded video on how to make vs ext.'
};
showTodo(mytodo);
