import { gql, useQuery } from '@apollo/client';
import React from 'react';
import LoadScreen from '../components/load-screen';

interface Props { }

function Battle(props: Props) {
    const { } = props;

    const { data, error } = useQuery(gql`
    query {
        getEnemies {
            name
            health
            maxHealth
            attackPower
            defencePower
            weapon {
            name
            }
        }
    }
    `);

    if (error) {
        return <div>{error}</div>;
    }

    if (!data) {
        return <LoadScreen text="Loading battles..." />;
    }

    return (
        <div>
            {
                data.getEnemies.map((entry: any) => {
                    return (
                        <div>
                            <h1>{entry.name}</h1>
                            <div>
                                <p>{entry.health} / {entry.maxHealth}</p>
                            </div>
                            <button>
                                Battle
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Battle;
