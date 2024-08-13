
import { connect } from 'react-redux'
import { setPokemons } from './actions'
import { PokemonList } from './components/PokemonList'
import { Searcher } from './components/Searcher'
import { useGetCharacters } from './hooks/useGetCharcters'



function App({pokemons, setPokemons}) {
  useGetCharacters({setPokemons});
  
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
const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemons(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
