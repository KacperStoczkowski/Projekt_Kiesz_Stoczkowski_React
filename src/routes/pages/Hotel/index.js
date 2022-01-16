import React from "react";
import ContentLeft from "../../../components/ContentLeft";
import ContentRight from "../../../components/ContentRight";
import MainPage from "../../../components/MainPage";
import './Hotel.css';

import user1 from '../../../assets/img/user-1.jpg';
import user2 from '../../../assets/img/user-2.jpg';
import Rating from "../../../components/Rating";

const Hotel = () => {

    const data = [
        {
            message: 'Lorem ipsum dolor sit amet',
            name: 'Jon Doe',
            date: '22.09.1988',
            rate: '5.8',
            logo: user1
        },
        {
            message: 'Lorem ipsum',
            name: 'Jane Doe',
            date: '22.12.2004',
            rate: '7.9',
            logo: user2
        }
    ];

    return (
        <MainPage contentClassName="content-hotel" titleProps={{
            headerTitle: 'HOTEL LAS PALMAS',
            children: <Rating />
        }}>
            <ContentLeft />
            <ContentRight
                opinions={data}
            />
        </MainPage>
    );
}

export default Hotel;