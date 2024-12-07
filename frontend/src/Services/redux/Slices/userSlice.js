import { createSlice } from '@reduxjs/toolkit'
if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify({ id: null }))
}
const authInitialState = JSON.parse(localStorage.getItem("user"))
const userSlice = createSlice({
    name: 'user',
    initialState: authInitialState,
    reducers: {
        signIn: (state, action) => {
            action.payload;
            // state.role = action.payload.role
            state.id = action.payload._id
            // LocalStorage
            localStorage.setItem("user", JSON.stringify({ id: action.payload._id }))
        },
        signOut: (state, action) => {
            state.id = null;
            // state.role = '';
            localStorage.setItem('user', JSON.stringify({ id: null }))

        }
    },
})

export const { signIn, signOut } = userSlice.actions
export default userSlice.reducer