import React, {useEffect, useState} from 'react'
import axios from "axios";

const Footer = ({configData}) => {
    return (
        <div className=" py-6 md:py-10 px-4 md:px-0 custom-font relative">
            <div className="container mx-auto">
                <a href="/"><img src="/icon/Screenshot_3.png" alt="logo"
                                 className='h-6 md:h-10'/>
                </a>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#e9e9e9] rounded-lg px-5 pb-5">
                        <h3>Về chúng tôi</h3>
                        <div className="flex mb-3">
                            <a href="https://ruoudutysanbay.com/gioi-thieu" className="capitalize text-base my-auto">Giới thiệu</a>
                        </div>
                        <div className="flex mb-3">
                            <a href="https://ruoudutysanbay.com/bao-mat-thong-tin" className="capitalize text-base my-auto">Bảo mật thông tin</a>
                        </div>
                        <div className="flex mb-3">
                            <a href="https://ruoudutysanbay.com/giao-hang-doi-tra" className="capitalize text-base my-auto">Giao hàng & đổi trả</a>
                        </div>
                    </div>
                    <div className="bg-[#e9e9e9] rounded-lg px-5 pb-5">
                        <h3>Liên hệ</h3>
                        <div className="flex gap-5 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-current my-auto" viewBox="0 0 384 512">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                            </svg>
                            Thu mua tại Hà Nội
                        </div>
                        <div className="flex gap-5 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-current my-auto" viewBox="0 0 512 512">
                                <defs>
                                    <style>{".fa-secondary { opacity: .4 }"}</style>
                                </defs>
                                <path className="fa-secondary" d="M505.7 412.3l-8.5 31.2c-71.8-8.7-138.9-32.9-197.8-69.1l20.5-25c55.4 33.4 118.4 55.4 185.8 62.9zM99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8l-25 20.5C101.4 153.7 77.2 86.6 68.4 14.8L99.7 6.3z"/>
                                <path className="fa-primary" d="M68.4 14.8l-39 10.6C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l10.6-39C273.2 416.4 95.6 238.8 68.4 14.8zM505.7 412.3l4.9-17.8c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6l-25.1 30.7c55.4 33.4 118.4 55.4 185.8 62.9zM162.6 192.1L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2L99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8z"/>
                            </svg>
                            <div className="flex gap-1">
                                <div>Hotline - Zalo:</div>
                                <a href={`tel:${configData?.phoneNumber}`} className="hover:text-blue-500">{configData?.phoneNumber?.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3")}</a>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20px" height="20px" className="fill-current group-hover:text-white transition-colors duration-500 ease-in-out my-auto">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                            </svg>
                            <div className="flex gap-1">
                                <div>Facebook:</div>
                                <a href={`${configData?.urlFacebook}`} className="hover:text-blue-500">Rượu Duty Sân Bay Các Nước</a>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current my-auto group-hover:text-white transition-colors duration-500 ease-in-out">
                                <path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/>
                            </svg>
                            <div className="flex gap-1">
                                <div>Messenger:</div>
                                <a href={`//${configData?.messenger}`} className="hover:text-blue-500">Rượu Duty Sân Bay Các Nước</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-2 md:bottom-6 right-4 md:right-6 rounded-full flex flex-col items-center justify-center gap-2">
                <a href={`https://zalo.me/${configData?.phoneNumber}`} className="bg-blue-500 rounded-full h-14 w-14 flex items-center justify-center" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-14 md:w-14 h-14 md:h-14" viewBox="0 0 161.5 161.5"><title>Zalo logo</title>
                        <path d="M504.54,431.79h14.31c19.66,0,31.15,2.89,41.35,8.36a56.65,56.65,0,0,1,23.65,23.65c5.47,10.2,8.36,21.69,8.36,41.35V519.4c0,19.66-2.89,31.15-8.36,41.35a56.65,56.65,0,0,1-23.65,23.65c-10.2,5.47-21.69,8.36-41.35,8.36H504.6c-19.66,0-31.15-2.89-41.35-8.36a56.65,56.65,0,0,1-23.65-23.65c-5.47-10.2-8.36-21.69-8.36-41.35V505.14c0-19.66,2.89-31.15,8.36-41.35a56.65,56.65,0,0,1,23.65-23.65C473.39,434.68,484.94,431.79,504.54,431.79Z" transform="translate(-431.25 -431.25)"
                              style={{fill: '#0068ff'}}/>
                        <path d="M592.21,517v2.35c0,19.66-2.89,31.15-8.35,41.35a56.65,56.65,0,0,1-23.65,23.65c-10.2,5.47-21.69,8.36-41.35,8.36H504.6c-16.09,0-26.7-1.93-35.62-5.63L454.29,572Z" transform="translate(-431.25 -431.25)" style={{fill: '#001a33', opacity: '0.11999999731779099', isolation: 'isolate'}}/>
                        <path d="M455.92,572.51c7.53.83,16.94-1.31,23.62-4.56,29,16,74.38,15.27,101.84-2.3q1.6-2.4,3-5c5.49-10.24,8.39-21.77,8.39-41.5v-14.3c0-19.73-2.9-31.26-8.39-41.5a56.86,56.86,0,0,0-23.74-23.74c-10.24-5.49-21.77-8.39-41.5-8.39H504.76c-16.8,0-27.71,2.12-36.88,6.15q-.75.67-1.47,1.37c-26.89,25.92-28.93,82.11-6.13,112.64l.08.14c3.51,5.18.12,14.24-5.18,19.55C454.32,571.89,454.63,572.39,455.92,572.51Z" transform="translate(-431.25 -431.25)" style={{fill: '#fff'}}/>
                        <path d="M497.35,486.34H465.84v6.76h21.87l-21.56,26.72a6.06,6.06,0,0,0-1.17,4v1.72h29.73a2.73,2.73,0,0,0,2.7-2.7v-3.62h-23l20.27-25.43,1.11-1.35.12-.18a8,8,0,0,0,1.41-5Z" transform="translate(-431.25 -431.25)" style={{fill:'#0068ff'}}/>
                        <path d="M537.47,525.54H542v-39.2h-6.76v36.92A2.27,2.27,0,0,0,537.47,525.54Z" transform="translate(-431.25 -431.25)" style={{fill:'#0068ff'}}/>
                        <path d="M514.37,495.07a15.36,15.36,0,1,0,15.36,15.36A15.36,15.36,0,0,0,514.37,495.07Zm0,24.39a9,9,0,1,1,9-9A9,9,0,0,1,514.37,519.46Z" transform="translate(-431.25 -431.25)" style={{fill:'#0068ff'}}/>
                        <path d="M561.92,494.82A15.48,15.48,0,1,0,577.4,510.3,15.5,15.5,0,0,0,561.92,494.82Zm0,24.64a9.09,9.09,0,1,1,9.09-9.09A9.07,9.07,0,0,1,561.92,519.46Z" transform="translate(-431.25 -431.25)" style={{fill:'#0068ff'}}/>
                        <path d="M526.17,525.54h3.62V495.93h-6.33v27A2.72,2.72,0,0,0,526.17,525.54Z" transform="translate(-431.25 -431.25)" style={{fill:'#0068ff'}}/>
                    </svg>
                </a>
                <a href={`//${configData?.messenger}`} className="bg-blue-500 rounded-full h-14 w-14 flex items-center justify-center" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 md:w-9 h-7 md:h-9">
                        <path fill="#ffffff" d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/>

                    </svg>
                </a>
                <a href={`tel:${configData?.phoneNumber}`} className="bg-orange-500 rounded-full h-14 w-14 flex items-center justify-center" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-7 h-6 md:h-7" viewBox="0 0 512 512">
                        <path fill="#ffffff"
                              d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/>
                    </svg>
                </a>
            </div>
            {/*<div className="fixed bottom-2 md:bottom-6 right-4 md:right-6 bg-blue-500 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center">*/}
            {/*    <a href="//m.me/271051592757106" className="bg-blue-500 rounded-full" target="_blank">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 md:w-9 h-7 md:h-9 mx-auto">*/}
            {/*            <path fill="#ffffff" d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/>*/}
            {/*        </svg>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    )
}

export default Footer