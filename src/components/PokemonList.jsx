import { Card } from "./Card"


export const PokemonList = ({pokemons}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {
            pokemons.map((pokemon, index) => (
                <Card key={index}/>
            ))
        }
    </div>
  )
}
PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}
