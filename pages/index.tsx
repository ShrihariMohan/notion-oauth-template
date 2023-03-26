import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {

  // write a useeffect to get user_details from localstorage
  // if user_details is not present then show the login button


  // if user_details is present then show the user details

  // Declare a state to store user_details
  const [user_details, setUserDetails] = useState<any>(null)
  useEffect(() => {
    const user_details = localStorage.getItem("user_details")
    if (user_details) {
      console.log("user_details", user_details)
      setUserDetails(user_details)
    }
  }, [])

  const handleNotionLogin = () => {
    console.log("On cluck")
    window.open("http://localhost:3000/api/notion/authorise", "_self")
  }
  return (
    <>
      {user_details ? <div>{user_details.owner.name}</div> : <div style={{ margin: '16px' }}>
        <button onClick={handleNotionLogin}> connect with notion</button>
      </div>}


      <div style={{ margin: '16px' }}>
        <button onClick={handleNotionLogin}> use this button to open notion again and again</button>
      </div>

    </>

  )
}

export default Home
