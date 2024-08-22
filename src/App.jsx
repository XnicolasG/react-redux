
import { connect, useDispatch, useSelector } from 'react-redux'
import { getPokemonsWithDetails, setLoading } from './actions'
import { PokemonList } from './components/PokemonList'
import { Searcher } from './components/Searcher'
import { useGetCharacters } from './hooks/useGetCharcters'
import { GridLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <section className='w-full h-full flex items-center justify-center'>
      <GridLoader
        className=''
        color={'#3fbebe'}
        //  loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  )
}

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  useGetCharacters({ 
    getPokemonsWithDetails: (pokemons) => dispatch(getPokemonsWithDetails(pokemons)),
    setLoading: (loading) => dispatch(setLoading(loading))
  });

  return (
    <main className='bg-black min-h-svh'>
      <nav className='flex items-center px-4 py-2 justify-between'>
        <h1 className='text-3xl inline-block font-semibold bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent'>
          Pokedux
        </h1>
        <Searcher />
        <p></p>
      </nav>
      {loading 
      &&  <Loader/>
    }
    
      <section className='p-6'>
        <PokemonList pokemons={pokemons} />
      </section>
    </main>
  )
}

export default App;
