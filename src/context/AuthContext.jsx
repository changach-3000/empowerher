import { createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router"
import  Swal from "sweetalert2"
export const AuthContext = createContext()

export function AuthProvider({children}){

  const nav = useNavigate()
  const [onChange, setonChange] = useState(false)
  const [currentuser, setCurrentUser]= useState()

  const login = (username, password) =>{
    fetch("/api/auth/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({username, password})
    })
    .then((res)=>res.json())
    .then((response)=>{
        console.log(response)
        if(response.error)
        {
            Swal.fire(
                'Error',
                response.error,
                'error'
              )
        }
        else if(response.success)
        { 
            nav("/resources")
            Swal.fire(
                'Success',
                response.success,
                'success'
              )
              setonChange(!onChange)
        }
        else{
            Swal.fire(
                'Error',
                "Something went wrong",
                'error'
              )
        }

    })
}

// signup 
const signup = (username, password) =>{
  fetch("/api/users", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({username, password})
  })
  .then((res)=>res.json())
  .then((response)=>{
      console.log(response)
      if(response.error)
      {
          Swal.fire(
              'Error',
              response.error,
              'error'
            )
      }
      else if(response.success)
      { 
          nav("/login")
          Swal.fire(
              'Success',
              response.success,
              'success'
            )
            setonChange(!onChange)
      }
      else{
          Swal.fire(
              'Error',
              "Something went wrong",
              'error'
            )
      }

  })
}

 // Logout
 const logout = () =>{
  fetch("/api/auth/logout", {
   method: "DELETE",
          })
  .then((res)=>res.json())
  .then((response)=>{
   setCurrentUser()
   setonChange(!onChange)
   nav("/about")
  })
}

  // fetch current user
  useEffect(()=>{
    fetch("/api/current_user",{
        method: "GET",
        headers: {"Content-Type": "application/json"}, 
    })
    .then(res => res.json())
    .then(data =>{
        if(data){
            setCurrentUser(data)
        } 
    })
},[onChange])


        const contextData = {
      login,
      signup,
      logout,
      currentuser,
       
    }
  return (
    <div>
        <AuthContext.Provider value = {contextData} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

