import React, {useEffect, useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import axios from "axios";

const Layout = (props) => {
    const [configData, setConfigData] = useState(null);

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
    return (
        <div >
            <Header configData={configData}></Header>
            {props.children}
            <Footer configData={configData}></Footer>
        </div>
    )
}

export default Layout