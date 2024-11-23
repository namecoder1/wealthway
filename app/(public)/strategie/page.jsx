import StrategyArticle from "@/components/strategy-article"
import { client } from "@/sanity/lib/client"
import { STRATEGIES_QUERY } from "@/sanity/lib/queries"

export const metadata = {
  title: "Strategie"
}

const StrategiesPage = async () => {
	const strategies = await client.fetch(STRATEGIES_QUERY)
	return (
		<section className='mx-5 my-20 min-h-[80vh]'>
			<h1 className='text-2xl font-semibold mb-4'>Le mie strategie di investimento</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{
					strategies.map((strategy) => (
						<StrategyArticle key={strategy._id} strategy={strategy} />
					))
				}
			</div>
		</section>
	)
}

export default StrategiesPage