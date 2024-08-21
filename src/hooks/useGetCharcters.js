import { useEffect } from "react"
import { getData } from "../services/getData"
import { getDataDetails } from "../services/getDataDetails";

export const useGetCharacters = ({ setPokemons }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData()
                const pokemonDetail = await Promise.all(response.map(pokemon => getDataDetails(pokemon)))
                setPokemons(pokemonDetail)
            } catch (error) {
                console.error('Error en useGetCharacters:', error);
            }
        };
        fetchData();
    }, []);
};
