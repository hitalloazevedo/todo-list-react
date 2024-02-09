export function Button(props) {
    const content = document.querySelector('.content')
    return (
        <input type={props.type ? props.type : "button" } value={props.value} id={props.id} onClick={() => props.id === 'delete' ? props.removeTodo(props.identifier) : props.id === 'complete' ? props.completeTodo(props.identifier) : ''}
        />
    )
}