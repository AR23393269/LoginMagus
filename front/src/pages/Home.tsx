import Footer from "../components/Footer"
import Header from "../components/Header"
import Quotes from "../components/Quotes"
import SearchBar from "../components/SearchBar"

function Home() {

    return (
        <>
            <Header />
            
            
                <div className="max-w-screen-lg mx-auto px-2 h-[530px] flex flex-col justify-center items-center gap-8 box-border">
                    <h1 className="text-7xl font-bold text-center motion-preset-flomoji-🚀 ">Magus Notes</h1>
                    <p className="text-2xl font-light text-center">"Toma notas, crea ideas, y nunca dejes de aprender."</p>
                    <a href="/notas" className="px-3 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600 transition-colors motion-preset-shake">Crear Notas</a>

                </div>

                <SearchBar/>
                <Quotes/>
                <Footer/>
        </>
    )
}

export default Home