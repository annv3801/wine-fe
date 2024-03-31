import React, {useEffect, useState} from 'react'
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from "react-router-dom";

const Contact = () => {
    const [configData, setConfigData] = useState(null);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        content: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.thumuaruouhn.online/Config/View-Config', {
                    headers: {
                        'Accept': 'text/plain',
                    },
                });

                setConfigData(response.data.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const createContact = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.thumuaruouhn.online/Contact/Create-Contact', formState, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            toast.success("Cảm ơn bạn đã gửi thông tin", {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                autoClose: 5000,
            });
        } catch (error) {
            toast.error("Failed to save data.", {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                autoClose: 5000,
            });
            console.error('Error sending data: ', error);
        }
    };

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <ToastContainer />
            <div className="bg-[#e9e9e9] py-6 md:py-10 px-4 md:px-0">
                <div className="container mx-auto bg-white rounded-3xl px-10 py-8 custom-font">
                    <h1 className="text-center text-blue-400 border-b-2 pb-5 mb-5">Liên hệ với chúng tôi</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-4">
                        <div>
                            <h2>Thu mua rượu tại Hà Nội</h2>
                            <div className="flex gap-1">
                                <div>Địa chỉ:</div>
                                <div>Thu mua tại Hà Nội</div>
                            </div>
                            <div className="flex gap-1">
                                <div>Hotline-Zalo:</div>
                                <NavLink to={`tel:${configData?.phoneNumber}`}>{configData?.phoneNumber?.replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3")}</NavLink>
                            </div>
                            <div className="flex gap-1">
                                <div>Email:</div>
                                <NavLink to={`mailto:${configData?.email}`}>{configData?.email}</NavLink>
                            </div>
                            <div className="flex gap-1">
                                <div>Facebook:</div>
                                <NavLink to={`${configData?.urlFacebook}`}>{configData?.urlFacebook}</NavLink>
                            </div>
                        </div>
                        <div>
                            <form action="" onSubmit={createContact}>
                                <label className="block mb-4">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Tên của bạn
                                </span>
                                    <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Nguyen Van An" onChange={handleInputChange}/>
                                </label>
                                <label className="block mb-4">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Số điện thoại của bạn
                                </span>
                                    <input type="text" name="phoneNumber" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="0966666666" onChange={handleInputChange}/>
                                </label>
                                <label className="block mb-4">
                                <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Email của bạn
                                </span>
                                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" onChange={handleInputChange}/>
                                </label>
                                <label className="block mb-4">
                                <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Nội dung
                                </span>
                                    <textarea name="content" rows="5" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Nội dung" onChange={handleInputChange}/>
                                </label>
                                <button className="rounded-xl bg-blue-400 text-white px-4 py-3">Gửi yêu cầu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact