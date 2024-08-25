const TaskItem = ({ task }) => {
    return (
        <div className="border p-2 mb-2">
            <h2 className="text-xl">{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskItem;
