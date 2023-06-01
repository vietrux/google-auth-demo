
export default function Login(props) {
    

    return (
        <div>
            <h1>Login</h1>
            <button onClick={props.login}>Login</button>
            {
                props.user.email ? <p>{props.user.email}</p> : <p>Not logged in</p>
            }
        </div>
    )
}