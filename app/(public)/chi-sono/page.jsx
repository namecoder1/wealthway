import Link from "next/link"

export const metadata = {
  title: "About"
}

const AboutPage = () => {
	return (
		<section className="my-20 mx-5 min-h-[80vh]">
			<hgroup className="flex items-start justify-center flex-col mb-8">
				<h1 className="text-2xl font-semibold mb-1">Ciao!</h1>
				<h2 className="text-lg italic">Mi chiamo Tobia Bartolomei, sono uno sviluppatore web appassionato di finanza e imprenditoria.</h2>
			</hgroup>
			<div>
				<h2 className="font-semibold text-xl mb-2">- Introduzione</h2>
				<p>
					Sono nato nel 2004 a Pesaro, in Italia; fin da piccolo ho sviluppato una <span className="underline underline-offset-1">passione sfrenata per il mondo
					dei computer e della tecnologia</span>, finchè ho deciso di approfondire le mia conoscenza e mi sono approciato alla programmazione.
				</p>
				<p>
					Ho avuto la fortuna di avere uno zio molto esperto nel campo, che ha saputo infondermi la curiosità di imparare e la voglia di trovare le risposte alle mie domande pratiche.
					
				</p>
			</div>
			<div className="my-8">
				<h2 className="font-semibold text-xl mb-2">- La rivelazione</h2>
				<p className="mt-1">
					È strano da pensare ma non ho mai avuto un bel rapporto con la matematica a scuola (pensado in relazione ai miei attuali interessi). 
					Dopo un bel deep dive nel mondo della programmazione, degli algoritmi e del ragionamento logico ho completamente rivalutato l'argomento in toto.
					<br />
					Devo sicuramente ringraziare il corso universitario di Harvard, CS50, per aver fatto scattare quella scintilla che da tempo pensavo di non possedere. 
				</p>
			</div>
			<div>
				<h2 className="font-semibold text-xl mb-2">- I miei link</h2>
				<p>
					Ho un sito personale, raggiungibile all'indirizzo <Link className="hover:underline underline-offset-2" href='https://tob.codes' target="_blank">tob.codes</Link>{' '}
					in cui condivido le mie idee sul mondo della programmazione e spiego come realizzo i miei progetti.
				</p>
				<p>
					Ho inoltre ho profilo Github, puoi trovarmi online come <Link className="hover:underline underline-offset-2" href='https://github.com/namecoder1' target="_blank">@namecoder1</Link>, e un profilo Threads, 
					in cui pubblico le mie idee (sempre correlate al mondo tech), il mio username è <Link className="hover:underline underline-offset-2" href='https://www.threads.net/@tobia.bartolomei' target="_blank">@tobia.bartolomei</Link>.
				</p>
			</div>
		</section>
	)
}

export default AboutPage