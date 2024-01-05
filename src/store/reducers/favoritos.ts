import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { Produto } from "../../App";


type favoritosState = {
    itens: Produto[]
}

const initialState = {
    itens: [],
    favoritos: []
}

const favoritosSlice = createSlice({
    name: 'favoritos',
    initialState,
    reducers: {
        favoritar: (state, action: PayloadAction<Produto>) => {
            const produto = action.payload
            if (state.itens.find((f) => f.id === produto.id)) {
                state.itens = state.itens.filter((f) => f.id !== produto.id)
            } else {
                state.itens = [...favoritos, produto]
            }
            }
        }
    })

export const {favoritar} = favoritosSlice.actions
export default favoritosSlice.reducer