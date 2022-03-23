const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
    name: "photos",
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload)
        },
        removePhoto: (state, action) => {
            const removeId = action.payload
            return state.filter(photo => photo.id !== removeId)
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id)

            if (photoIndex) {
                state[photoIndex] = newPhoto
            }
        }

    },
})

const { reducer, actions } = photo;

export const { addPhoto, removePhoto, updatePhoto } = actions

export default reducer