import { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";

function Home() {
  const { setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userPass: ''
  })
  // console.log(user, 'user_print')
  // console.log(user)  
  function handleSubmit(e){
    e.preventDefault();
    console.log(userInfo)
    setUser({
      userName : userInfo.userName,
      password : userInfo.password
    })
  }
  return <>
    <form>
      <input placeholder="userName" value={userInfo.userName} onChange={(e) => {
        setUserInfo({ ...userInfo, userName: e.target.value })
      }} />
      <input placeholder="userName" value={userInfo.userPass} onChange={(e) => {
        setUserInfo({ ...userInfo, userPass: e.target.value })
      }} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  </>;
}

export default Home;
