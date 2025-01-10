import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Countries = () => {

    const [data , setData] = useState([]);
    useEffect( () => {
        console.log(axios.get(
            "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
        )
        .then((res) => setData(res.data))
    );
    }, [])


    return (
        <div>


            <Card />
        </div>
    );
};

export default Countries;