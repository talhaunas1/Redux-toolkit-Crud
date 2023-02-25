import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../modules/student/StudentList";


export const userSlice = createSlice({

    name: "users",
    initialState: { value: UserData },

    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        DeleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        // UpdateUser:(state,action)=>{

        // }
    }
})

export const { addUser,DeleteUser } = userSlice.actions
export default userSlice.reducer





