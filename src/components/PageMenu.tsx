import { pages } from '../config.json';
import PageMenuItem from './common/PageMenuItem';

export default function PageMenu() {
	return (
		<>
			{pages.map(({ id, displayName }) =>
				<PageMenuItem
					id={id}
					displayName={displayName}
				/>
			)}
		</>
	);
}
