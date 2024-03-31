import React, {useEffect, useState} from 'react'
import Carousel from "../Components/Carousel";
import axios from "axios";
const slides = [
    '/icon/banner2.jpg',
    '/icon/banner-ruou-ngoai2IPHL.jpg',
    '/icon/banner-ruou-ngoaiMDGVL.jpg'
]
const Home = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get('http://103.77.247.254:19081/Blog/View-Blog/CHOOSEME')
            .then((res) => {
                const listConfig = res.data?.data;
                setContent(listConfig);
            })
            .catch((error) => {
                console.error(`There was an error retrieving the data: ${error}`);
            });
    }, []);
    return (
        <div>
            {/*<Carousel autoSlide={true}>*/}
            {/*    {slider.map((s) => (*/}
            {/*        <img src={`http://103.77.247.254:19081/Resources/${s.image}`} height="100%" alt={s.name} key={s.id}/>*/}
            {/*    ))}*/}
            {/*</Carousel>*/}
            <div className="bg-[#e9e9e9] py-3 md:py-10 px-2 md:px-0">
                {/*<div className="container mx-auto bg-white rounded-t-3xl px-4 pt-3 md:px-10 md:pt-8 custom-font border-b-2 text-center capitalize text-blue-400 pb-2 md:pb-4">*/}
                {/*    <h1>{content.name}</h1>*/}
                {/*</div>*/}
                <div className="container mx-auto bg-white rounded-3xl px-4 py-5 md:px-10 md:py-8 custom-font ck-content" dangerouslySetInnerHTML={{ __html: content.content }}>
                </div>
            </div>
        </div>
    )
}

export default Home