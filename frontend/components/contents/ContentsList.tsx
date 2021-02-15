import Router, { useRouter } from "next/router";
import React from "react";
import useSWR, { trigger } from "swr";
import styled from "@emotion/styled";

import { SERVER_URL } from "../../lib/utils/constants";
import { API } from "../../lib/utils/constants";
import ContentsAPI from "../../lib/api/contents";
import fetcher from "../../lib/utils/fetcher";
import checkLogin from "../../lib/utils/checkLogin";
import storage from "../../lib/utils/storage";

const ContentsList = () => {
    const { data: currentUser } = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);
    const { data, error } = useSWR(`http://127.0.0.1:8000/api/vod`, fetcher);
    console.log(data);

    const ContentList = styled("div")`
        display: grid;
        grid-gap: 1rem;
        padding: 1rem;
        max-width: 1024px;
        margin: 0 auto;
    `;
    const ContentContainer = styled("div")`
        position: relative;
        overflow: hidden;
        padding: 1rem;
        width: 100%;
        background-color: whitesmoke;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
        0 2px 2px rgba(0,0,0,0.1), 
        0 4px 4px rgba(0,0,0,0.1), 
        0 8px 8px rgba(0,0,0,0.1),
        0 16px 16px rgba(0,0,0,0.1);
    `;

    const ContentImg = styled("img")`
        max-height: 300px;
    `;

    const ContentTitle = styled("h1")`
        font-size: 1.3rem;
        font-weight: bold;
        line-height: 1.2;
    `;

    const ContentBody = styled("p")`
        font-size: 1.125rem;
        line-height: 1.35;
        padding-left: 0.5rem;
    `;

    const ContentButton = styled("button")`  
        cursor: pointer;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-size: 0.65rem;
        font-weight: bold;
        letter-spacing: 0.025rem;
        text-transform: uppercase;
        color: white;
        background-color: black;
        border: none;
    `;

    const FlexContent = styled("div")`
        display: flex;
        align-items: flex-end;
    `;

    const ButtonsContainer = styled("div")`
        display: flex;
        flex-flow: row wrap;
    `;

    const handleDelete = async (id) => {
        //if (!isLoggedIn) return;
    
        const result = window.confirm("Do you really want to delete it?");
    
        if (!result) return;
    
        await ContentsAPI.delete(id).then(() => {
            /* trigger(`${SERVER_URL}/delete/${id}`);
            Router.push(`/`);  */
        });
    };
    
    return (
        <ContentList>
            {
                data?.map((content) => (
                    <ContentContainer key={content.id}>
                        <ContentTitle>{content.titulo}</ContentTitle>
                        <FlexContent>
                            <ContentImg src={content.image} />
                            <ContentBody>{content.sinopsis}</ContentBody>
                        </FlexContent>
                        <p>{content.genero} - {content.duracion}</p>
                        <ButtonsContainer>
                            <p><ContentButton>View</ContentButton></p>
                            <p><ContentButton>Update</ContentButton></p>
                            <p><ContentButton onClick={() => handleDelete(content._id)}>Delete</ContentButton></p>
                        </ButtonsContainer>
                    </ContentContainer>
                ))
            }
        </ContentList>
    );
}

export default ContentsList;