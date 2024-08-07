

export const Card = () => {
    return (
        <div className="group min-w-52 flex flex-col items-center rounded-xl bg-zinc-800 ">
            <div className="h-32 w-full overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:-translate-y-3 transition-all duration-150"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
                    alt="poke" />
            </div>
            <h2 className=" py-2 font-semibold text-lg text-white">Pokemon Name</h2>
        </div>
    )
}
