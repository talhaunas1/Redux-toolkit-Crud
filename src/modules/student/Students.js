import React, { useState } from 'react'
import './student.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser,DeleteUser } from '../../store/RootReducers'

const Students = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value)
    // console.log(userList)
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    // console.log(username)
    return (
        <div className='appp'>

            <div className='addUser'>
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <input type="text"  placeholder='Enter usesr name'  onChange={(e)=> setUserName(e.target.value)}/>
                {/* <input type="text" /> */}
                <button onClick={() => { dispatch(addUser({id:userList[userList.length-1].id+1 , name,username:userName})) }}>ADD USER</button>
            </div>

            <div className='displayUsers'>
                {
                    userList.map((user) => {
                        return (
                            <div className='styleUser'>
                                <h1> {user.id} </h1>
                                <h1> {user.name} </h1>
                                <h1> {user.username} </h1>
                               <div className='updated_Sction'>
                               <input type="text" placeholder='uodated user'  />
                                <button>Update Username</button>
                                <button onClick={() => { dispatch(DeleteUser({id:user.id})) }}>Delete user</button>
                               </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Students