import { createSlice } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

const initialState = null

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addMatcher(appApi.endpoints.signup.matchFulfilled,(_,{payload})=>payload)
    builder.addMatcher(appApi.endpoints.signin.matchFulfilled,(_,{payload})=>payload)

  }
})
export const {logout,addNotification,resetNotifications} = userSlice.actions

export default userSlice.reducer