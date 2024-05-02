import allPokeball from "../Asset/allPokeBall.jpg"
import allType from "../Asset/allType.png"
import allStarter from"../Asset/allStarter.png"


function HomeComponent() {

    return(
        <main className="flex items-center justify-center h-screen mt-96">
            <div className="bg-white w-2/4 p-10 shadow-xl rounded-xl">
                <h1 className="text-3xl font-bold mb-10">What are Pokémon?</h1>
                <div className="flex p-10">
                    <p className="w-3/4 text-xl text-left mt-10">
                        Pokémon are mysterious creatures with many secrets. 
                        Some Pokémon live with humans and some live in the wild in grasslands, 
                        caves, or the sea, but much about their ecology is still unknown. 
                        One of their main features is that they can be caught using a Poké Ball, 
                        which allows them to be carried around.
                    </p>
                    <img src={allPokeball} alt="Poke ball" className="w-72 ml-40" />
                </div>
                <br />
                <hr />
                <h1 className="text-3xl font-bold mb-10 mt-14">There are many types of Pokémon</h1>
                <div className="flex flex-row-reverse p-10">
                    <p className="w-3/4 text-xl text-right mt-10">
                        Pokémon are grouped into 18 types based on their characteristics. For example, 
                        Pikachu is an Electronic type Pokémon and Magikarp is a Water type. 
                        There are some Pokémon that fall into two types, such as Jigglypuff, 
                        which is a Normal and Fairy type. Each type has a special affinity that has a big influence in combat. 
                        If your opponent's Pokémon have the right type of affinity, it can be a huge advantage in battle.
                    </p>
                    <img src={allType} alt="Pokemon attribute" className="w-72 mr-40" />
                </div>
                <br />
                <hr />
                <h1 className="text-3xl font-bold mb-10 mt-14">How many types of Pokémon are there?</h1>
                <div className="flex flex-row p-10 ">
                    <p className="w-full text-xl text-left mt-5">
                        Actually, how many types of Pokemon are there? The exact number is unknown. 
                        While there are over 1000 types of Pokémon that have been confirmed from generation one to now, 
                        and never before seen Pokémon will definitely be discovered in the future.
                    </p>
                    <img src={allStarter} alt="Poke ball" className="w-72 ml-40" />
                </div>
            </div>
        </main>
    )
}

export default HomeComponent;