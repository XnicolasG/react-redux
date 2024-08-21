import { Card } from "./Card"


export const PokemonList = ({pokemons}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {
            pokemons.map((pokemon) => (
                <Card 
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                />
            ))
        }
    </div>
  )
}
