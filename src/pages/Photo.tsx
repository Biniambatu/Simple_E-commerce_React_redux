import axios from 'axios';
import  { useEffect, useState } from 'react'
import PhotoList from '../components/PhotoList'
const Photo = () => {
    interface User{
        id: number;
        url: string;
        title: string
   } 
   const [users, setUsers] = useState<User[]>([])
   useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/photos')
     .then( response =>  setUsers(response.data) )
  },[])
  return (
    <div>
      <h1>Photo list</h1>
        {users.map(user => (<PhotoList key={user.id} user={user}/>)  )} 
    </div>
  )
}

export default Photo