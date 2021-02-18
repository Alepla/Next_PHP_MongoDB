import React, {useEffect, useState} from "react";
import useSWR from "swr";

import fetcher from "../../lib/utils/fetcher";
import ContentsFilter from "./ContentsFilter";
import ContentsList from "./ContentsList";
import CLink from "../common/CLink";
import storage from "../../lib/utils/storage";
import checkLogin from "../../lib/utils/checkLogin";
import Pagination from "./Pagination";

const Contents = () => {
    let generos = [];
    let generosMatch = [];
    let { data, error } = useSWR(`http://127.0.0.1:8000/api/vod`, fetcher);
    const { data: currentUser } = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);

    let [contentsMacthed, setContentsMatched] = React.useState(generosMatch);
    let [totalContents, setTotalContents] = React.useState(0);
    React.useEffect(() => { setTotalContents(data.length) }, [data]);

    const [currentPage, setCurrentPage] = useState(1);
    const [contentsPerPage] = useState(2);
    const indexOfLastContent = currentPage * contentsPerPage;
    const indexOfFirstContent = indexOfLastContent - contentsPerPage;
    const currentContents = contentsMacthed.length > 0? contentsMacthed.slice(indexOfFirstContent, indexOfLastContent): data?.slice(indexOfFirstContent, indexOfLastContent);
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
        setCurrentPage(1);
        setTotalContents(generosMatch.length);
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
            <ContentsList data={currentContents}></ContentsList>
            <Pagination contentsPerPage={contentsPerPage} totalContents={totalContents} paginate={paginate} />
        </div>
    );
}

export default Contents;