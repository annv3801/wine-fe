import React from 'react'

const Footer = () => {
    return (
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0 custom-font">
            <a href=""><img src="/icon/Screenshot_3.png" alt="logo"
                            className='h-6 md:h-10'/>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#e9e9e9] rounded-lg px-5 pb-5">
                    <h3>Liên hệ</h3>
                    <div className="flex gap-5 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-current my-auto" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>
                        Thu mua tại Hà Nội
                    </div>
                    <div className="flex gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-current my-auto" viewBox="0 0 512 512">
                            <defs>
                                <style>{".fa-secondary { opacity: .4 }"}</style>
                            </defs>
                            <path className="fa-secondary" d="M505.7 412.3l-8.5 31.2c-71.8-8.7-138.9-32.9-197.8-69.1l20.5-25c55.4 33.4 118.4 55.4 185.8 62.9zM99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8l-25 20.5C101.4 153.7 77.2 86.6 68.4 14.8L99.7 6.3z"/>
                            <path className="fa-primary" d="M68.4 14.8l-39 10.6C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l10.6-39C273.2 416.4 95.6 238.8 68.4 14.8zM505.7 412.3l4.9-17.8c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6l-25.1 30.7c55.4 33.4 118.4 55.4 185.8 62.9zM162.6 192.1L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2L99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8z"/>
                        </svg>
                        <div className="flex gap-1">
                            <div>Hotline:</div>
                            <a href="" className="hover:text-blue-500">096.609.3801</a>
                        </div>
                    </div>
                </div>
                <div className="bg-[#e9e9e9] rounded-lg p-5">hi</div>
            </div>
        </div>
    )
}

export default Footer