
const List = ({users}) => {
    if(!users || !users.length) return <p>No User Found !</p>
    return (
        <ul>
            {users.map((data) => (
                <li key={data.id}>
                    {data.firstName} {data.lastName} -- {data.email} 
                </li>
            ))}
        </ul>
    )
}

export default List;