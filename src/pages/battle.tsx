import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import LoadScreen from '../components/load-screen';
// import { useBattle } from '../contexts/battle';
import { BattleStep, useBattle } from '../contexts/battle';

interface Props { }

let test: BattleStep[] = [];
function Battle(props: Props) {
    const { } = props;

    const battleData = useBattle();
    // const [battleHistory, setBattleHistory] = useState<BattleStep[]>([]);
    if (battleData.battleStep) {
        test.push(battleData.battleStep);
        // setBattleHistory([...battleHistory, battleData.battleStep]);
    }

    // const { data, error } = useQuery(gql`
    // query {
    //     getEnemies {
    //         name
    //         health
    //         maxHealth
    //         attackPower
    //         defencePower
    //         weapon {
    //         name
    //         }
    //     }
    // }
    // `);

    // if (error) {
    //     return <div>{error}</div>;
    // }

    // if (!data) {
    //     return <LoadScreen text="Loading battles..." />;
    // }

    return (
        <div>
            {
                JSON.stringify(test)
                // data.getEnemies.map((entry: any) => {
                //     return (
                //         <div>
                //             <h1>{entry.name}</h1>
                //             <div>
                //                 <p>{entry.health} / {entry.maxHealth}</p>
                //             </div>
                //             <button>
                //                 Battle
                //             </button>
                //         </div>
                //     );
                // })
            }
        </div>
    );
}

export default Battle;
