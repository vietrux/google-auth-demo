export default function User(props) {
    return (
        <div>
            <h1>User</h1>
            <h2>Welcome {props.user.email}</h2>
        </div>
    )
}