import React, { useEffect, useState } from "react";
import useSWR from "swr";

import UserAPI from "../../lib/api/user";
import storage from "../../lib/utils/storage";
import checkLogin from "../../lib/utils/checkLogin";

const Profile = () => {
    const { data: currentUser } = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);

    const [userInfo, setUserInfo] = useState({ data: {}});

    useEffect(()  => { 
        loadData();
    }, [currentUser]);

    const loadData = async () => {
        const data = await UserAPI.userInfo(currentUser);
        setUserInfo(data.data);
    }

    console.log(userInfo?.favs);
/*     if(userInfo?.favs) {
        UserAPI.getFavContents(userInfo.favs, currentUser.token);
    } */

    return (
        <>
            <div>
                <h1>Favorite contents</h1>
                {
                    userInfo?.user
                }
            </div>
        </>
    );
}

export default Profile;