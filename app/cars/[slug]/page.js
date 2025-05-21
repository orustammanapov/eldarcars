import Car from "../../components/Car";
import { pb } from "../../pocketbase";

const currency = new Intl.NumberFormat("nl-NL", {
	style: "currency",
	currency: "EUR",
});

const percent = new Intl.NumberFormat("nl-NL", {
	style: "percent",
});

export async function generateStaticParams() {
	const records = await pb.collection("cars").getFullList({
		fields: "slug", // Only fetch the fields you need
	});

	return records.map((car) => ({
		slug: car.slug,
	}));
}

export default async function Page({ params }) {
	const carData = await pb
		.collection("cars")
		.getFirstListItem(`slug="${params.slug}"`, {
			expand: "transmissionType,fuelType,carBodyStyle",
		});

	return <Car data={carData} />;
}
