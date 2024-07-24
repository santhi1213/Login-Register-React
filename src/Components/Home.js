import { useLocation } from "react-router-dom"

function Home(){
    const location = useLocation();
    return(
        <div>
            <h1>Hello {location.state.id} </h1>
            <h3>welcome to the home page</h3>
        </div>
    )
}

export default Home;