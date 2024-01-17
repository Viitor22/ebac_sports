import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { Produto } from "../../App";


type favoritosState = {
    itens: Produto[]
}

const initialState: favoritosState = {
    itens: []
}

const favoritosSlice = createSlice({
    name: 'favoritos',
    initialState,
    reducers: {
        favoritar: (state, action: PayloadAction<Produto>) => {
            const favoritos = action.payload
            if (state.itens.find((f) => f.id === favoritos.id)) {
                state.itens = state.itens.filter((f) => f.id !== favoritos.id)
            } else {
                state.itens = [...state.itens, favoritos]
            }
            }
        }
    })

export const {favoritar} = favoritosSlice.actions
export default favoritosSlice.reducer