const TaskList = (props) => (
    <tr className='item'>
        <td> {props.task.no} </td>
        <td> {props.task.name} </td>
        <td> {props.task.time} </td>
    </tr>
)

export default TaskList;