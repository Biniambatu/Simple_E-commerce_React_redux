import axios from 'axios';
import  { useEffect, useState } from 'react'
import PhotoList from '../components/PhotoList'

const Photo = () => {
    interface User{
        albumId: number;
        id: number;
        url: string;
        title: string
   } 
   const [users, setUsers] = useState<User[]>([])
   useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        const filteredUsers = response.data.filter(user => user.id >= 1 && user.id <= 30);
        setUsers(filteredUsers);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <div>
        <section className="products">
        {users.map(user => (<PhotoList key={user.id} user={user}/>)  )} 
        </section>
    </div>
  )
}

export default Photo