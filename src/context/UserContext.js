import React, {useContext, useState} from 'react'

const UserContext = React.createContext()

export const useUser = () => {
  return useContext(UserContext)
}
 
export const UserProvider = ({children}) => {
  const [data, setData] = useState(null)

  const getData = (login, avatar_url) => {
    //  console.log(avatar_url, login)

    setData({login, avatar_url})
  }
  
  return (
    <UserContext.Provider value={{
      data,
      getData
    }}>
      {children}
    </UserContext.Provider>
  )
}


