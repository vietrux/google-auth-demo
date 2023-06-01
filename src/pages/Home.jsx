export default function Home(props){

    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome {props.user.email}</h2>
        </div>
    )
}