import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Carousel} from "antd";
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
            <Carousel autoplay>
                {slider.map((s) => {
                    const isMobile = window.innerWidth <= 768; // or whatever breakpoint you want to use for mobile devices
                    const height = isMobile ? 500 : 700;
                    const width = isMobile ? 850 : 1920;
                    return (
                        <img src={`https://api.thumuaruouhn.online/Uploads/${s.image}?height=${height}&width=${width}`} className="lg:h-full object-cover" alt={s.name} key={s.id}/>
                    );
                })}
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