import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { Produto } from "../../App";


type carrinhoState = {
    itens: Produto[]
}

const initialState = {
    itens: [],
    favoritos: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Produto>) => {
            const produto = action.payload
            if (state.itens.find((item) => item.id === produto.id)) {
                alert('Item já adicionado')
            } else {
                state.itens = [...state.item, produto]
            }
        }
    }
})


export const {adicionar} = carrinhoSlice.actions
export default carrinhoSlice.reducer