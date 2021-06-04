import { gql, useQuery, useSubscription } from '@apollo/client';
import React, { useEffect } from 'react';
import LoadScreen from '../components/load-screen';
import { useLocation } from 'react-router-dom';
// import history from '../history';

interface Props { }

let battleHistory: any[] = [];

function Home(props: Props) {
    const { } = props;
    const queryPlayerCount = useQuery(gql`
    query {
        playerCount
    }
    `);


    const location = useLocation();

    console.log(location.pathname);

    return (
        <div>
            home
        </div>
    );
}

export default Home;
