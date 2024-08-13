import { useEffect } from "react"
import { getData } from "../services/getData"

export const useGetCharacters = ({ setPokemons }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData()
                setPokemons(response)
            } catch (error) {
                console.error('Error en useGetCharacters:', error);
            }
        };
        fetchData();
    }, [setPokemons]);
};
