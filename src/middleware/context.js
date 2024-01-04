import { createContext } from "react";

export const UserContext = createContext();

export const initialState = {
    searchInput : null,
    isDark: false
}
                              //{type:1/2 , payload:20}
export const reducer = (state, action) => {
    switch (action.type) {
        case "set_searchInput": {
            return {
                ...state,
                searchInput: action.payload
            }
        }

        case "set_isDark": {
            return {
                ...state,
                isDark: action.payload
            }
        }


        default: {
            return
        }
    }
}
