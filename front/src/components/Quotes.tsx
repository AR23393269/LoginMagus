import Avatar from '../assets/Avatar.svg'
import { useDarkMode } from '../interfaces/DarkMode'
function Quotes() {

    const { isDarkMode } = useDarkMode()

    return (
        <>
            <div className="max-w-screen-lg mx-auto px-2">
                <h2 className={`text-3xl font-bold my-10 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Compartido por Otros Usuarios</h2>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className={`p-5 shadow-md rounded-md box-border my-8 md:my-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className='font-bold text-2xl mb-5'>"Quote"</h3>
                        <div className='flex gap-5 box-border'>
                            <div className=''>
                                <img src={Avatar} alt="User image" className='min-w-[50px]' />
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Titulo</p>
                                <p className='text-lg font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto, quidem, doloribus nihil eos excepturi</p>
                            </div>
                        </div>
                    </div>{/* Quotes */}
                    <div className={`p-5 shadow-md rounded-md box-border my-8 md:my-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className='font-bold text-2xl mb-5'>"Quote"</h3>
                        <div className='flex gap-5 box-border'>
                            <div className=''>
                                <img src={Avatar} alt="User image" className='min-w-[50px]' />
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Titulo</p>
                                <p className='text-lg font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto, quidem, doloribus nihil eos excepturi</p>
                            </div>
                        </div>
                    </div>{/* Quotes */}
                    <div className={`p-5 shadow-md rounded-md box-border my-8 md:my-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className='font-bold text-2xl mb-5'>"Quote"</h3>
                        <div className='flex gap-5 box-border'>
                            <div className=''>
                                <img src={Avatar} alt="User image" className='min-w-[50px]' />
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Titulo</p>
                                <p className='text-lg font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto, quidem, doloribus nihil eos excepturi</p>
                            </div>
                        </div>
                    </div>{/* Quotes */}
                    <div className={`p-5 shadow-md rounded-md box-border my-8 md:my-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className='font-bold text-2xl mb-5'>"Quote"</h3>
                        <div className='flex gap-5 box-border'>
                            <div className=''>
                                <img src={Avatar} alt="User image" className='min-w-[50px]' />
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Titulo</p>
                                <p className='text-lg font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto, quidem, doloribus nihil eos excepturi</p>
                            </div>
                        </div>
                    </div>{/* Quotes */}
                    <div className={`p-5 shadow-md rounded-md box-border my-8 md:my-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className='font-bold text-2xl mb-5'>"Quote"</h3>
                        <div className='flex gap-5 box-border'>
                            <div className=''>
                                <img src={Avatar} alt="User image" className='min-w-[50px]' />
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Titulo</p>
                                <p className='text-lg font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto, quidem, doloribus nihil eos excepturi</p>
                            </div>
                        </div>
                    </div>{/* Quotes */}
                    <div className={`p-5 shadow-md rounded-md box-border my-8 md:my-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className='font-bold text-2xl mb-5'>"Quote"</h3>
                        <div className='flex gap-5 box-border'>
                            <div className=''>
                                <img src={Avatar} alt="User image" className='min-w-[50px]' />
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Titulo</p>
                                <p className='text-lg font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto, quidem, doloribus nihil eos excepturi</p>
                            </div>
                        </div>
                    </div>{/* Quotes */}
                </div>

            </div>
        </>
    )
}

export default Quotes