import React, {useEffect, useState} from 'react'
import Carousel from "../Components/Carousel";
import axios from "axios";
const slides = [
    '/icon/banner2.jpg',
    '/icon/banner-ruou-ngoai2IPHL.jpg',
    '/icon/banner-ruou-ngoaiMDGVL.jpg'
]
const Home = () => {
    const [slider, setSlider] = useState([]);
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.post('https://api.thumuaruouhn.online/Slide/View-List-Slides', {
                pageSize: 10,
                currentPage: 1,
                searchByFields: [],
                sortByFields: [],
            },
            {
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                const listSlider = res.data?.data.data;
                setSlider(listSlider);
            })
            .catch((error) => {
                console.error(`There was an error retrieving the data: ${error}`);
            });
    }, []);

    useEffect(() => {
        axios.get('https://api.thumuaruouhn.online/Blog/View-Blog/HOME')
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
            <Carousel autoSlide={true}>
                {slider.map((s) => (
                    <img src={`https://api.thumuaruouhn.online/Uploads/${s.image}?height=700&width=1920`} height="100%" alt={s.name} key={s.id}/>
                ))}
            </Carousel>
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