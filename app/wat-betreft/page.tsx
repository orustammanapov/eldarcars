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
					<h1 className="text-4xl font-bold mb-4">Wat betreft</h1>
					<p className="mb-4">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur
						tincidunt fermentum urna. Integer quam. Nulla facilisi. Curabitur
						pulvinar, erat non consectetuer varius, arcu turpis vulputate erat,
						sit amet malesuada odio orci ac lacus. Donec sed neque. Fusce sapien
						mi, euismod id, elementum et, luctus vel, nibh. Aenean accumsan
						auctor velit. Proin quis dolor. Cras eleifend justo in magna. In
						metus turpis, placerat sit amet, molestie ac, adipiscing ut, diam.
						Sed dignissim, dui id congue venenatis, risus lectus hendrerit
						mauris, iaculis rutrum ipsum nisl eu sem. Nunc sem. In elementum
						aliquet augue. Phasellus tempor, libero id mollis scelerisque, nisl
						ipsum pellentesque tortor, gravida ornare pede dui ut sapien. Nullam
						rutrum porttitor nulla.
					</p>
					<p>
						Morbi id mauris in risus venenatis aliquet. Praesent aliquet dictum
						est. Quisque dapibus hendrerit libero. Vestibulum ante ipsum primis
						in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce
						volutpat, magna vel dignissim suscipit, pede elit volutpat nibh, id
						blandit dui sapien eu sem. Curabitur ac leo. Donec cursus pharetra
						dolor. Morbi a purus. Suspendisse rhoncus, arcu ut congue pretium,
						turpis risus vestibulum diam, nec tempus nibh augue a purus. Sed
						eget mauris et purus porttitor fringilla. Morbi bibendum. Quisque
						varius risus eget dui. Pellentesque cursus. Duis quis metus id leo
						semper tempor. Donec sit amet urna. Aliquam ac diam sed odio
						ultricies condimentum. Donec at purus sed nulla tincidunt lacinia.
						Sed sagittis sem non odio. Proin ultrices tellus nec orci. Mauris
						malesuada, nisl at dapibus volutpat, elit odio aliquam eros, sed
						convallis enim lacus sed diam.
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
							<span>8850 ARDOOIE, OOSTLAAN 23</span>
						</li>
					</ul>
				</aside>
			</div>
		</>
	);
}
