import { client } from "@/sanity/lib/client";
import { LAST_STRATEGIES_QUERY } from "@/sanity/lib/queries";
import StrategyArticle from "./strategy-article";

const LastStrategies = async () => {
	const strategies = await client.fetch(LAST_STRATEGIES_QUERY)
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
			{
				strategies.map((strategy) => (
					<StrategyArticle key={strategy._id} strategy={strategy} />
				))
			}
		</div>
	);
};

export default LastStrategies;