import { useEffect, useState } from "react";
import axios from "axios";

import Article from "../components/Article";
import Navigation from "../components/Navigation";

//rsc
const News = () => {
    const[ newData, setNewData ] = useState();
    //const [author, setAuthor ] = useState("");
    //const [content, setContent ] = useState("");

    const getData = () => {
        axios
        .get("http://localhost:3001/article")
        .then( (res) => setNewData(res.data) )
    }

    //console.log(newData);

    useEffect(() => {
        getData();
    }, [] )

    return (
        <div className="news-container">
            <Navigation />
            <form>
                <input type="text" placeholder="Nom" />
                <textarea placeholder="Message" />
                <input type="submit" value="Send" />
            </form>

            <ul>
                {newData && newData.map((article) => (
                    <Article key = {article.id} article ={article} />
                ))}
            </ul>

        </div>
    );
};

export default News;