import { gql, useSubscription } from '@apollo/client';
import React, { createContext, useContext, useState } from 'react';

interface Context {
    battleStep?: BattleStep;
}

export interface BattleStep {
    defenderAttack?: Step;
    challengerAttack?: Step;
    __typename: string;
}

interface Step {
    damageRoll: number;
    damageTaken: number;
    __typename: string;
}
const context = createContext<Context>({
    battleStep: undefined
});

interface Props {
    children: React.ReactNode;
}

function BattleContext(props: Props) {
    const {
        children
    } = props;

    const data = ContextData();

    return (
        <context.Provider
            value={data}
        >
            {
                children
            }
        </context.Provider>
    );
}

// let battleHistory: BattleStep[] = [];

const ContextData = () => {
    // const [battleHistory, setBattleHistory] = useState<BattleStep[]>([]);
    // const [hasUsedData, setHasUsedData] = useState(false);
    const currentBattleStep = useSubscription(
        gql`
subscription {
  my_battle {
    defenderAttack {
      damageRoll
      damageTaken
    }
    challengerAttack {
      damageRoll
      damageTaken
    }
  }
}
        `, {
        shouldResubscribe: true
    });
    console.log(currentBattleStep.loading);

    // if (!currentBattleStep.loading && currentBattleStep.data) {
    //     console.log('test');
    //     battleHistory.push(currentBattleStep.data.my_battle as BattleStep);
    //     // setHasUsedData(true);
    // }

    return {
        battleStep: currentBattleStep.data?.my_battle
    };
};

export const useBattle = () => useContext(context);

export default BattleContext;
