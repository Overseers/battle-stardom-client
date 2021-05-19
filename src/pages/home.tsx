import { gql, useQuery, useSubscription } from '@apollo/client';
import React, { useEffect } from 'react';
import LoadScreen from '../components/load-screen';
import { useLocation } from 'react-router-dom';
// import history from '../history';

interface Props { }

function Home(props: Props) {
    const { } = props;
    const queryPlayerCount = useQuery(gql`
    query {
        playerCount
    }
    `);
    const subscriptionPlayerCount = useSubscription(
        gql`
        subscription {
            deltaPlayerCount
        }
        `, {
        shouldResubscribe: true
    });

    const location = useLocation();

    const data = subscriptionPlayerCount.loading ? queryPlayerCount.data : subscriptionPlayerCount.data;
    console.log(location.pathname);

    return (
        <div>
            home
        </div>
    );
}

export default Home;
