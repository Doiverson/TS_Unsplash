import React, {useEffect, useState} from "react";
import axios from "axios";

interface Urls {
    full: string;
}

interface Items {
    urls: Urls;
}

const Main = (): JSX.Element => {

    const [ items, setItems ] = useState<Items[]>([]);

    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/?page=1&client_id=${process.env.REACT_APP_UNSPLASH}`).then(({data}) => {
            setItems(data);
        })
    }, []);

    return (
        <div>
            {items.map((x : Items) => <img src={x.urls.full} alt="" />)}
        </div>
    )
}

export default Main;