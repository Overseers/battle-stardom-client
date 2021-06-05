import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import BattleCard from '../components/battleCard';
import LoadScreen from '../components/load-screen';
// import { useBattle } from '../contexts/battle';
import { BattleStep, GearedEntity, Step, useBattle } from '../contexts/battle';

interface Props { }

export interface Enemy {
    __typename: string;
    mainHand: {
        __typename: string;
        description: string;
        attackSpeed: number;
        name: string;
        maxDamage: number;
        minDamage: number;
        image: string;
    };
    health: string;
    maxHealth: string;
    name: string;
    attackSpeed: number;
}

let test: BattleStep[] = [];
let lastIndexPushed = -1;
function Battle(props: Props) {
    const { } = props;

    const battleData = useBattle();

    // const [battleHistory, setBattleHistory] = useState<BattleStep[]>([]);
    if (battleData.battleStep && JSON.stringify(test[lastIndexPushed]) !== JSON.stringify(battleData.battleStep)) {
        lastIndexPushed = test.push(battleData.battleStep) - 1;
        // setBattleHistory([...battleHistory, battleData.battleStep]);
    }

    const getEnemies = useQuery(gql`
query {
  getEnemies {
    mainHand {
      description
      attackSpeed
      name
      maxDamage
      minDamage
      image
    }
    health
    maxHealth
    name
    attackSpeed
  }
}
    `, {
        pollInterval: 1000 * 60
    });

    console.log(getEnemies.data?.getEnemies);

    useEffect(() => {
        const scroll = document.getElementById("battle-log");
        if (scroll) {
            scroll.scrollTop = scroll.scrollHeight;
        }
    });

    if (getEnemies.error) {
        return <div>{getEnemies.error}</div>;
    }

    if (!getEnemies.data) {
        return <LoadScreen text="Loading battles..." />;
    }

    return (
        <div
            className="battle-main"
        >
            <div
                className="battle-enemies"
            >
                <ul
                    className="navbar-nav"
                >
                    {
                        getEnemies.data && getEnemies.data.getEnemies.length > 0 && getEnemies.data.getEnemies.map((enemy: Enemy) => {
                            return (
                                <li
                                    className="nav-item"
                                >
                                    <BattleCard enemy={enemy} />
                                </li>
                            );
                        }) || <li
                            className="nav-item"
                        >
                            <BattleCard />
                        </li>
                    }
                </ul>
            </div>
            <div
                id="battle-log"
                className="battle-log"
            >
                <ul
                    className="battle-log-ul"
                >
                    {
                        test.map(battleEntry => {
                            let battleLog: JSX.Element[] = [];

                            if (battleEntry.challengerAttack) {
                                battleLog.push(
                                    <li>
                                        <p
                                            style={{
                                                maxWidth: '100%',
                                                wordWrap: 'break-word'
                                            }}
                                        >
                                            {
                                                `${battleEntry.challengerInfo.name} swung with ${battleEntry.challengerInfo.mainHand.name} for ${battleEntry.challengerAttack.damageRoll.toFixed(2)} to ${battleEntry.defenderInfo.name} dealing ${battleEntry.challengerAttack.damageTaken.toFixed(2)}. ${battleEntry.defenderInfo.name} has ${battleEntry.challengerAttack.currentHealth.toFixed(2)} / ${Number(battleEntry.defenderInfo.maxHealth).toFixed(2)} health.`
                                            }
                                        </p>
                                    </li>
                                );
                            }

                            if (battleEntry.defenderAttack) {
                                battleLog.push(
                                    <li>
                                        <p
                                            style={{
                                                maxWidth: '100%',
                                                wordWrap: 'break-word'
                                            }}
                                        >
                                            {
                                                `${battleEntry.defenderInfo.name} swung with ${battleEntry.defenderInfo.mainHand.name} for ${battleEntry.defenderAttack.damageRoll.toFixed(2)} to ${battleEntry.challengerInfo.name} dealing ${battleEntry.defenderAttack.damageTaken.toFixed(2)}. ${battleEntry.challengerInfo.name} has ${battleEntry.defenderAttack.currentHealth.toFixed(2)} / ${Number(battleEntry.challengerInfo.maxHealth).toFixed(2)} health.`
                                            }
                                        </p>
                                    </li>
                                );
                            }

                            return battleLog;
                        }).flat()
                    }
                </ul>
            </div>
        </div>
    );
}

export default Battle;
