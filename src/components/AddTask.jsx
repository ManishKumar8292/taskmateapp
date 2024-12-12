export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.id) {
            const date = new Date();
            const updatedTaskList = tasklist.map((todo) => (
                todo.id === task.id ? { id: task.id, name: event.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
            ));
            setTasklist(updatedTaskList);
            setTask({});
        } else {
            // console.log(event.target.task.value);
            const date = new Date();
            // console.log(date.getDate());
            // console.log(date.toLocaleTimeString());
            // console.log(date.toLocaleDateString());
            const newTasks = {
                id: date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newTasks]);
        }
        setTask({});
        // event.target.task.value = '';
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>

                <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength={25} value={task.name || ""} onChange={(e) => setTask({ ...task, name: e.target.value })} />
                <button type="submit">{task.id ? 'Update' : 'Add'}</button>
            </form>
        </section>
    )
}
