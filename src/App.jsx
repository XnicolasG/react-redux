
import { connect, useDispatch, useSelector } from 'react-redux'
import { setPokemons } from './actions'
import { PokemonList } from './components/PokemonList'
import { Searcher } from './components/Searcher'
import { useGetCharacters } from './hooks/useGetCharcters'



function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useGetCharacters({setPokemons: (pokemons) => dispatch(setPokemons(pokemons)) });
  
  return (
    <main className='bg-black min-h-svh'>
      <nav className='flex items-center px-4 py-2 justify-between'>
        <h1 className='text-3xl inline-block font-semibold bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent'>
          Pokedux
        </h1>
        <Searcher />
        <p></p>
      </nav>
      <section className='p-6'>
        <PokemonList pokemons={pokemons} />
      </section>
    </main>
  )
}

export default App;
