import { useQuery, useSubscription } from '@apollo/client';
import LoadScreen from '../components/load-screen';
import PageMenu from '../components/PageMenu';
import {
	GET_PLAYER_COUNT,
	SUB_PLAYER_DELTA
} from '../queries';

interface Props { }

export default function Home(props: Props) {
	const { } = props;
	const {
		loading: playerCountLoading,
		data: playerCountData,
		error: playerCountError
	} = useQuery(GET_PLAYER_COUNT);
	const {
		loading: playerDeltaLoading,
		data: playerDeltaData,
		error: playerDeltaError
	} = useSubscription(
		SUB_PLAYER_DELTA,
		{ shouldResubscribe: true }
	);

	return (
		<>
			<PageMenu />
			{(playerCountError || playerDeltaError)
				? <>{`${playerCountError || playerDeltaError}`}</>
				: (playerCountLoading)
					? <LoadScreen text='I am loading something' />
					: <>
						{JSON.stringify(playerCountData)}
						{ (playerDeltaLoading)
							? 'Loading subscription'
							: playerDeltaData
						}
			        </>}
		</>
	);
}
