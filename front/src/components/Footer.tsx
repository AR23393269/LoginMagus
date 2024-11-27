import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import Exclude from "../assets/exclude.svg"
import { useDarkMode } from "../interfaces/DarkMode"

function Footer() {
    const { isDarkMode } = useDarkMode();

    return (
        <>
            <footer className={`${isDarkMode ? 'bg-gray-900 border-t-2 border-t-gray-800' : 'bg-gray-50 border-t-gray-100 border-t-2'} py-10 mt-16 box-border px-2`}>
                <div className="mx-auto max-w-screen-lg flex flex-col md:flex-row md:justify-between items-center">

                    <div className="flex flex-col items-center md:items-start md:flex-row gap-3 mb-6">
                        <a href="/"><img src={Exclude} alt="Exclude logo" className="w-10 md:w-8 pt-1" /></a>
                        <div className="flex flex-col gap-5 md:gap-1">
                            <p className={`${isDarkMode ? 'text-gray-100' : 'text-gray-700'} text-3xl font-bold`}>
                                <a href="/" >
                                    <p className="text-center md:text-start">Magus Notes</p>
                                </a>
                            </p>
                            <p className="text-center">Todos los derechos reservados 2024 ©</p>
                        </div>
                    </div>

                    <div className="md:flex md:flex-col md:gap-3">
                        <div className="flex flex-col items-center md:flex-row gap-3">
                            <a href="/" className="hover:text-cyan-500 transition-colors">Home</a>
                            <a href="/perfil" className="hover:text-cyan-500 transition-colors">Perfil</a>
                            <a href="/" className="hover:text-cyan-500 transition-colors">About Us</a>
                        </div>
                        <div className="flex gap-3 mt-6 md:mt-0 justify-center">
                            <a href="https://instagram.com">
                                <InstagramLogo size={26} className="hover:text-cyan-500"/>
                            </a>
                            <a href="https://facebook.com">
                                <FacebookLogo size={26} className="hover:text-cyan-500"/>
                            </a>
                            <a href="https://instagram.com">
                                <LinkedinLogo size={26} className="hover:text-cyan-500" />
                            </a>
                            <a href="https://facebook.com">
                                <XLogo size={26} className="hover:text-cyan-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer