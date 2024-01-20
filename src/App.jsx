
import './App.css'
import { useState } from 'react'

function App() {
  const [userData,setUserData] = useState({
    name:"",
    phno:"",
    email:"",
    website:"",
    submit:false
  })
  return (
    <>
      <div className="header">
        Visiting Card Generator 
      </div>

      <div className="details">
        <input onChange={(e)=>setUserData({...userData,name:e.target.value})} type="text" placeholder='Name' /><br />
        <input onChange={(e)=>setUserData({...userData,phno:e.target.value})} type="text" placeholder='Phone Number'/><br />
        <input onChange={(e)=>setUserData({...userData,email:e.target.value})} type="text" placeholder='Email' /><br />
        <input onChange={(e)=>setUserData({...userData,website:e.target.value})} type="text" placeholder='Website'/><br />
        <input type="submit" value="Generate" onClick={()=>setUserData({...userData,submit:true})}/><br />
      </div>

      <div>
          {
            userData.name &&
            userData.phno &&
            userData.email &&
            userData.website &&
            userData.submit && (
              <>
                <div className="card">
                  <p>
                    <b>Name: &nbsp;</b> {userData.name}
                  </p>
                  <p>
                    <b>Phno: &nbsp;</b> {userData.phno}
                  </p>
                  <p>
                    <b>Email: &nbsp;</b> {userData.email}
                  </p>
                  <p>
                    <b>Website: &nbsp;</b> {userData.website}
                  </p>
                </div>
              </>
            )
          }
      </div>
    </>
  )
}

export default App
