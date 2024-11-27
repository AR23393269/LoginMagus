import { useDarkMode } from "../interfaces/DarkMode"

function SearchBar() {

    const { isDarkMode } = useDarkMode()
    return (
        <>
            <div className={` box-border h-[300px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}  pt-10`}>
                <h1 className="font-bold text-3xl text-center motion-preset-typewriter-[25] motion-duration-[7s] mx-auto">Busca Cualquier tema...</h1>
                <div className="relative w-full max-w-[90%] sm:max-w-[400px] mt-10 mx-auto">
                    <input
                        type="search"
                        className={`block w-full h-[40px] sm:h-[45px] rounded-lg shadow-lg outline-none pl-12 pr-4 text-sm sm:text-base ${isDarkMode ? 'bg-gray-700' : 'bg-white'} `}
                        placeholder="Buscar..."
                    />
                    <svg
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                    </svg>
                </div>
            </div>

        </>
    )
}

export default SearchBar