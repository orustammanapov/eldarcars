import Car from "../../components/Car";
import { pb } from "../../pocketbase";

export async function generateStaticParams() {
	return await pb.collection("cars").getFullList({
		fields: "slug", // Only fetch the fields you need
	});
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const data = await pb.collection("cars").getFirstListItem(`slug="${slug}"`, {
		expand: "transmissionType,fuelType,carBodyStyle",
	});

	return <Car data={data} />;
}
