import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout } from '../auth/authSlice'

// const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL||'',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    // await mutex.waitForUnlock()

    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401) {
        api.dispatch(logout())
        if(window.location.pathname !== '/login'){
            window.location.assign('/login')
        }
        // send refresh token to get new access token 
        // if (!mutex.isLocked()) {
        //     const release = await mutex.acquire()
        //     try {
        //         const token = api.getState().auth.refresh
        //         const refreshResult = await baseQuery({
        //             url: '/api/auth/refresh', 
        //             method: 'POST', 
        //             body: {token}
        //         }, api, extraOptions)
        //         if (refreshResult?.data.jwt) {
        //             // store the new token 
        //             api.dispatch(setToken({ ...refreshResult.data.jwt }))
        //             api.dispatch(setCurrentUser({user: refreshResult.user}))
        //             // retry the original query with new access token 
        //             result = await baseQuery(args, api, extraOptions)
        //         } else {
        //             api.dispatch(api.util.resetApiState())
        //             api.dispatch(logout())
        //         }
        //     }
        //     catch(e){
        //         console.error(e)
        //     }
        //     finally{
        //         release()
        //     }
        
        // } else {
        //     await mutex.waitForUnlock()
        //     result = await baseQuery(args, api, extraOptions)
        // }
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
    // tagTypes: [''],
})