import { Card } from "./Card"


export const PokemonList = ({pokemons}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {
            pokemons.map((pokemon) => (
                <Card name={pokemon.name} key={pokemon.name}/>
            ))
        }
    </div>
  )
}
