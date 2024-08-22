import { getDataDetails } from "../services/getDataDetails";
import { SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) =>{
    const pokemonDetail = await Promise.all(
        pokemons.map(pokemon => getDataDetails(pokemon)));

        dispatch(setPokemons(pokemonDetail))
}