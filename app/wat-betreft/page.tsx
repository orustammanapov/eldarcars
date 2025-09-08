import {
	faEnvelope,
	faMapMarkerAlt,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
	return (
		<>
			<img
				className="rounded-md"
				data-src="/images/about-photo.jpg"
				alt="Wat betreft"
				src="/images/about-photo.jpg"
			/>

			<div className="flex flex-col-reverse md:flex-row-reverse md:items-start mb-12 mt-8">
				<section className="w-full md:basis-1/2 lg:basis-2/3">
					<h1 className="text-4xl font-bold mb-4">Over ons</h1>
					<p className="mb-4">
						Bij ELDARCARS vinden we dat het kiezen van de juiste wagen een eenvoudige en geruststellende ervaring moet zijn. Vanuit 8792 Waregem, Gentseweg 136 in België zetten wij zorg en toewijding in bij alles wat we doen - of het nu gaat om het klaarmaken van voertuigen of het ondersteunen van onze klanten na hun aankoop.
					</p>
					<p className="mb-4">
						Elke wagen die we aanbieden wordt zorgvuldig gecontroleerd, omdat kwaliteit en betrouwbaarheid voor ons centraal staan. We nemen de tijd om ervoor te zorgen dat de details juist zitten en dat onze klanten vertrouwen hebben in hun keuze.
					</p>
					<p className="mb-4">
						We hechten veel belang aan duidelijke en eerlijke communicatie, en we staan altijd klaar om contact op te nemen om uw noden te bespreken, uw vragen te beantwoorden of te helpen waar we kunnen - zolang het met wagens te maken heeft.
					</p>
					<p className="mb-4">
						Bij ELDARCARS focussen we op duurzame kwaliteit en betrouwbare service - fundamenten die al ons werk sturen. We geloven ook in het opbouwen van langdurige relaties en weten dat klanttevredenheid de beste weg is om dat te bereiken.
					</p>
				</section>
				<aside className="w-full md:basis-1/2 lg:basis-1/3 bg-gray-900 rounded-md p-8 mb-8 mr-8">
					<h3 className="text-2xl font-bold border-b-2 mb-4 pb-4 border-red-500">
						Contacten
					</h3>
					<ul>
						<li className="flex space-x-4 items-center">
							<FontAwesomeIcon icon={faPhone} className="w-4" aria-hidden />
							<a href="tel:+320492/403404">+32 (0) 492/403 404</a>
						</li>
						<li className="flex space-x-4 items-center">
							<FontAwesomeIcon icon={faEnvelope} className="w-4" aria-hidden />
							<a href="mailto:eldarcars@gmail.com">eldarcars@gmail.com</a>
						</li>
						<li className="flex space-x-4 items-center">
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								className="w-4"
								aria-hidden
							/>
							<span>8792 Waregem, Gentseweg 136</span>
						</li>
					</ul>
				</aside>
			</div>
		</>
	);
}
