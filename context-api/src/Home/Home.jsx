import { useContext } from "react";
import UserContext from "../UserContext/UserContext";

function Home(){
    const {user} = useContext(UserContext);
    console.log(user)
    return <>
    <h1>{!!user ? "Hii, "+ user.userName : ''} </h1>
    </>
}

export default Home;