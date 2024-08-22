import { useEffect } from "react"
import { getData } from "../services/getData"
import { getDataDetails } from "../services/getDataDetails";
import { setLoading } from "../actions";

export const useGetCharacters = ({ getPokemonsWithDetails, setLoading }) => {
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await getData()
                getPokemonsWithDetails(response)
                
                setLoading(false)
            } catch (error) {
                console.error('Error en useGetCharacters:', error);
            }
        };
        fetchData();
    }, []);
};
