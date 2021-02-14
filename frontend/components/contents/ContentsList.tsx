import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import styled from "@emotion/styled";

import { API } from "../../lib/utils/constants";
import fetcher from "../../lib/utils/fetcher";
import checkLogin from "../../lib/utils/checkLogin";
import storage from "../../lib/utils/storage";

const ContentsList = () => {
    const { data: currentUser } = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);
    const router = useRouter();
    const { data, error } = useSWR(`${API}`, fetcher);

    const ContentList = styled("div")``;
    const ContentContainer = styled("div")`
        padding: 2px 16px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    `;
    
    return (
        <ContentList>
            {
                data?.map((content) => (
                    <ContentContainer>
                        <h4><b>{content.title}</b></h4>
                        <p>{content.body}</p>
                    </ContentContainer>
                ))
            }
        </ContentList>
    );
}

export default ContentsList;