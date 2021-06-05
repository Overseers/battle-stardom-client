import React from 'react';
import { Enemy } from '../pages/battle';

interface Props {
    enemy?: Enemy;
}

function BattleCard(props: Props) {
    if (!props.enemy) {
        return (
            <div
                className='battle-card-container'
            >
                <h1>No enemies available</h1>
            </div>
        );
    }

    return (
        <div
            className='battle-card-container'
        >
            <div>
                <h1>{props.enemy.name}</h1>
                <h2>{props.enemy.maxHealth} Health</h2>
            </div>
            <div>
                <h1>Weapon: {props.enemy.mainHand.name}</h1>
                <h2>Damage: {props.enemy.mainHand.minDamage} - {props.enemy.mainHand.maxDamage}</h2>
                <h2>Attack Speed: {props.enemy.mainHand.attackSpeed}</h2>
            </div>

            <button>Fight</button>
        </div>
    );
}

export default BattleCard;
