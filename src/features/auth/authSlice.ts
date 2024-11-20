import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export const authSlice = createSlice({
  name: 'auth',
  initialState: ()=>{
    let init = {
      token: localStorage.getItem('token'),
      refresh: localStorage.getItem('refresh'),
      loading: false
    }
    return init
  },
  reducers: {
    setToken: (state, action) =>{
      const { token, refreshToken } = action.payload
      state.token = token
      state.refresh = refreshToken
      localStorage.setItem('token', token)
      localStorage.setItem('refresh', refreshToken)
    },
    logout: (state) =>{
        state.token = null
        state.refresh = null
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')
    }
  }
})

export const { setToken, logout } = authSlice.actions

export const getToken = (state: RootState) => state.auth.token

export default authSlice.reducer 
