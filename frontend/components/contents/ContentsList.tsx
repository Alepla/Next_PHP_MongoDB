import React, { useState } from "react";
import styled from "@emotion/styled";
import useSWR from "swr";

import storage from "../../lib/utils/storage";
import checkLogin from "../../lib/utils/checkLogin";
import CLink from "../common/CLink";

const ContentsList = ({ data }) => {
    let [contents, setContents] = useState(data);
    React.useEffect(() => { setContents({ data }) }, [data]);
    const { data: currentUser } = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);

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

    const FlexContent = styled("div")`
        display: flex;
        align-items: flex-end;
    `;
    
    return (
        <ContentList>
            {
                contents?.data?.map((content) => (
                    isLoggedIn?
                        <ContentContainer key={content.id}>
                            <CLink href="/content/[pid]" as={"content/"+content._id} className="btn btn-content">
                                <ContentTitle>{content.titulo}</ContentTitle>
                                <FlexContent>
                                    <ContentImg src={content.image} />
                                    <ContentBody>{content.sinopsis}</ContentBody>
                                </FlexContent>
                                <p>{content.genero} - {content.duracion}</p>
                                
                            </CLink>
                        </ContentContainer>
                    :
                        <ContentContainer key={content.id}>
                                <ContentTitle>{content.titulo}</ContentTitle>
                                <FlexContent>
                                    <ContentImg src={content.image} />
                                    <ContentBody>{content.sinopsis}</ContentBody>
                                </FlexContent>
                                <p>{content.genero} - {content.duracion}</p>      
                        </ContentContainer>
                ))
            }
        </ContentList>
    );
}

export default ContentsList;