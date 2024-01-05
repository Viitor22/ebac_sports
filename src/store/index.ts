import { configureStore } from "@reduxjs/toolkit";

import carrinhoReducer from "./reducers/carrinho";
import favoritoReducer from "./reducers/favoritos";

import api from "../services/api";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
    reducer: {
        carrinho: carrinhoReducer,
        favorito: favoritoReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>