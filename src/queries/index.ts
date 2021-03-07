import { gql } from '@apollo/client';

export const GET_PLAYER_COUNT = gql`
	query {
		playerCount
	}
`;

export const SUB_PLAYER_DELTA = gql`
	subscription {
		deltaPlayerCount
	}
`;
