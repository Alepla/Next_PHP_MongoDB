import React from "react";
import useSWR from "swr";

import fetcher from "../../lib/utils/fetcher";
import ContentsFilter from "./ContentsFilter";
import ContentsList from "./ContentsList";



const Contents = () => {
    const { data, error } = useSWR(`http://127.0.0.1:8000/api/vod`, fetcher);
    
    let generos = [];
    let generosMatch = [];

    let [contentsMacthed, setContentsMatched] = React.useState(generosMatch);

    const getContentFiltered = (res) => {
        data?.map((content) => {
            generos = content.genero.split("/");
            generos.map(el => {
                el.toUpperCase().trim() === res?
                    generosMatch = generosMatch.concat(content)
                :
                    null
            })
        })
        setContentsMatched(generosMatch);
    }

    return (
        <div>
            <ContentsFilter data={data} getContentFiltered={getContentFiltered}></ContentsFilter>
            <ContentsList data={contentsMacthed.length > 0? contentsMacthed: data}></ContentsList>
        </div>
    );
}

export default Contents;