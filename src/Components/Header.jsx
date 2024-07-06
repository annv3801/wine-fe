import {useCallback, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
function CustomLink({ to, children, onClick }) {
    const location = useLocation();

    return (
        <Link to={to} onClick={onClick}  className={`hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block ${location.pathname === to ? 'active-link' : 'inactive-link'}`}>
            {children}
        </Link>
    );
}
export default function Header({configData}) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <header className='shadow-md bg-white font-[sans-serif]'>
            <Helmet>
                <title>SHOP THU MUA RƯỢU</title>
                <meta name="description" content="Chuyên thu mua rượu ngoại" />
            </Helmet>
            <section
                className='flex items-center lg:justify-center relative py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>
                <a href="/"><img src="/icon/Screenshot_3.png" alt="logo"
                                                  className='h-6 md:h-10'/>
                </a>
                <div className="absolute sm:right-10 right-4 flex items-center">
                    <a href={`tel:${configData?.phoneNumber}`} className="relative sm:mr-8 mr-6 hover:text-blue-500 flex gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-current my-auto" viewBox="0 0 512 512">
                            <path
                                d="M272 0C404.5 0 512 107.5 512 240c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-114.9-93.1-208-208-208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-80c0-8.8 7.2-16 16-16c79.5 0 144 64.5 144 144c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112c-8.8 0-16-7.2-16-16zm73 174.7c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.3 31.6-39.1 31.6l0 0c-6.1 0-12.2-.1-18.3-.4l-.1 0h0c-4.6-.2-9.1-.4-13.7-.8C183.5 494.5 0 300.7 0 64v0C0 45.1 13.2 28.8 31.6 24.9l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c26.7 46 65.1 84.4 111.1 111.1L329 286.7zM448 480c3.8 0 7-2.6 7.8-6.3l24-112c.8-3.7-1.2-7.5-4.7-9l-112-48c-3.3-1.4-7.1-.5-9.3 2.3l-33.2 40.6c-9.9 12.1-27.2 15.3-40.8 7.4c-50.9-29.5-93.3-71.9-122.7-122.7c-7.9-13.6-4.7-30.9 7.4-40.8l40.6-33.2c2.8-2.3 3.7-6.1 2.3-9.3l-48-112c-1.5-3.5-5.3-5.5-9-4.7l-112 24C34.6 57 32 60.2 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0 229.6 186.1 415.8 415.7 416l.3 0z"/>
                        </svg>
                        <div className="items-center hidden md:block">
                            {configData?.phoneNumber?.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3")}
                        </div>
                    </a>
                    <a href={`mailto:${configData?.email}`} className="relative sm:mr-8 mr-6 hover:text-blue-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-current my-auto" viewBox="0 0 512 512">
                            <path d="M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                        </svg>
                    </a>
                    <a href={`${configData?.urlFacebook}`} target="_blank" className="relative sm:mr-1 hover:text-blue-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-current my-auto" viewBox="0 0 512 512">
                            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                        </svg>
                    </a>
                </div>
            </section>
            <div className='flex flex-wrap justify-center px-10 py-3 relative'>
                <div id="toggle" onClick={toggleMenu} className='flex ml-auto lg:order-1 lg:hidden relative z-50'>
                    <button className='ml-7'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <ul className={`lg:!flex lg:space-x-10 max-lg:space-y-3 ${isMenuOpen ? 'block' : 'hidden'} max-lg:w-full max-lg:my-4`}>
                    <li className='max-lg:border-b max-lg:py-2'>
                        <CustomLink to="/" onClick={closeMenu}>Trang chủ</CustomLink>
                    </li>
                    {/*<li className='group max-lg:border-b max-lg:py-2 relative'>*/}
                    {/*    <a href=''*/}
                    {/*       className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Sản phẩm*/}
                    {/*        <svg*/}
                    {/*            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">*/}
                    {/*            <path*/}
                    {/*                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"*/}
                    {/*                data-name="16" data-original="#000000"/>*/}
                    {/*        </svg>*/}
                    {/*    </a>*/}
                    {/*    <ul*/}
                    {/*        className='absolute hidden group-hover:block shadow-lg bg-white space-y-2 px-6 pb-4 pt-6 lg:top-5 max-lg:top-8 left-0 min-w-[250px] z-50 rounded-b-xl'>*/}
                    {/*        <li className='border-b py-3'>*/}
                    {/*            <a href=''*/}
                    {/*               className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>*/}
                    {/*                <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" className="mr-4 inline-block" viewBox="0 0 512 512">*/}
                    {/*                    <path*/}
                    {/*                        d="M404.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6c-4.4 4.4-10.6 5.7-16.1 4l-86.6 86.6c-8 8-10.9 19.6-9.6 30.9c4 36.7-8.1 74.8-36.2 103L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l22.6 22.6c-12.5 12.5-12.5 32.8 0 45.3l88 88c12.5 12.5 32.8 12.5 45.3 0l24.7-24.7L66.1 312.7 41.4 337.4 18.7 314.7 180.2 153.3c28.1-28.1 66.3-40.2 103-36.2c11.3 1.2 22.9-1.6 30.9-9.6l86.6-86.6c-1.7-5.5-.4-11.7 4-16.1zM88.7 290.1L221.9 423.3l89.4-89.4L178.1 200.7 88.7 290.1zm112-112L333.9 311.3l2.2-2.2c21-21 30-49.4 27-76.9c-2-18.3 2.3-40.5 18.8-57l13.3-13.3-45.3-45.3L336.7 130c-16.5 16.5-38.7 20.8-57 18.8c-27.5-3-55.9 6-76.9 27l-2.2 2.2zm172-84l45.3 45.3 49.4-49.4L422.1 44.7 372.7 94.1z"/>*/}
                    {/*                </svg>*/}
                    {/*                Rượu ngoại*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className='border-b py-3'>*/}
                    {/*            <a href=''*/}
                    {/*               className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>*/}
                    {/*                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-4 inline-block" viewBox="0 0 512 512">*/}
                    {/*                    <path*/}
                    {/*                        d="M404.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6c-4.4 4.4-10.6 5.7-16.1 4l-86.6 86.6c-8 8-10.9 19.6-9.6 30.9c4 36.7-8.1 74.8-36.2 103L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l22.6 22.6c-12.5 12.5-12.5 32.8 0 45.3l88 88c12.5 12.5 32.8 12.5 45.3 0l24.7-24.7L66.1 312.7 41.4 337.4 18.7 314.7 180.2 153.3c28.1-28.1 66.3-40.2 103-36.2c11.3 1.2 22.9-1.6 30.9-9.6l86.6-86.6c-1.7-5.5-.4-11.7 4-16.1zM88.7 290.1L221.9 423.3l89.4-89.4L178.1 200.7 88.7 290.1zm112-112L333.9 311.3l2.2-2.2c21-21 30-49.4 27-76.9c-2-18.3 2.3-40.5 18.8-57l13.3-13.3-45.3-45.3L336.7 130c-16.5 16.5-38.7 20.8-57 18.8c-27.5-3-55.9 6-76.9 27l-2.2 2.2zm172-84l45.3 45.3 49.4-49.4L422.1 44.7 372.7 94.1z"/>*/}
                    {/*                </svg>*/}
                    {/*                Rượu vang*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className='border-b py-3'>*/}
                    {/*            <a href=''*/}
                    {/*               className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>*/}
                    {/*                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-4 inline-block" viewBox="0 0 512 512">*/}
                    {/*                    <path*/}
                    {/*                        d="M404.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6c-4.4 4.4-10.6 5.7-16.1 4l-86.6 86.6c-8 8-10.9 19.6-9.6 30.9c4 36.7-8.1 74.8-36.2 103L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l22.6 22.6c-12.5 12.5-12.5 32.8 0 45.3l88 88c12.5 12.5 32.8 12.5 45.3 0l24.7-24.7L66.1 312.7 41.4 337.4 18.7 314.7 180.2 153.3c28.1-28.1 66.3-40.2 103-36.2c11.3 1.2 22.9-1.6 30.9-9.6l86.6-86.6c-1.7-5.5-.4-11.7 4-16.1zM88.7 290.1L221.9 423.3l89.4-89.4L178.1 200.7 88.7 290.1zm112-112L333.9 311.3l2.2-2.2c21-21 30-49.4 27-76.9c-2-18.3 2.3-40.5 18.8-57l13.3-13.3-45.3-45.3L336.7 130c-16.5 16.5-38.7 20.8-57 18.8c-27.5-3-55.9 6-76.9 27l-2.2 2.2zm172-84l45.3 45.3 49.4-49.4L422.1 44.7 372.7 94.1z"/>*/}
                    {/*                </svg>*/}
                    {/*                Quốc lủi*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    <li className='max-lg:border-b max-lg:py-2'>
                        <CustomLink to="/choose-me" onClick={closeMenu}>Tại sao bạn chọn chúng tôi</CustomLink>
                    </li>
                    <li className='max-lg:border-b max-lg:py-2'>
                        <CustomLink to="/process" onClick={closeMenu}>Quy trình thu mua</CustomLink>
                    </li>
                    <li className='max-lg:border-b max-lg:py-2'>
                        <CustomLink to="/contact" onClick={closeMenu}>Liên hệ</CustomLink>
                    </li>
                </ul>
            </div>
        </header>

    )
}