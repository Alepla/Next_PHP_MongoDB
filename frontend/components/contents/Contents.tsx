import React from "react";
import useSWR from "swr";

import fetcher from "../../lib/utils/fetcher";
import ContentsFilter from "./ContentsFilter";
import ContentsList from "./ContentsList";
import CLink from "../common/CLink";
import storage from "../../lib/utils/storage";
import checkLogin from "../../lib/utils/checkLogin";

const Contents = () => {
    let { data, error } = useSWR(`http://127.0.0.1:8000/api/vod`, fetcher);

    const { data: currentUser } = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);

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
            {
                isLoggedIn?
                    <CLink href="/content/create" as="content/create" className="btn btn-create-content">Create</CLink>
                :
                    null
            }
            <ContentsList data={contentsMacthed.length > 0? contentsMacthed: data}></ContentsList>
        </div>
    );
}

export default Contents;