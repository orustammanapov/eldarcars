import Link from "next/link";

const currency = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
});

// const cars = [
//   {
//     brand: 'Bentley',
//     model: '8 Litre',
//     price: currency.format(5_454),
//     image: '/images/569x426/bentley-8-litre-best.jpg',
//     slug: 'bentley-8-litre-best', // 'https://eldarcars.com/101/view_vehicle/49/stadsauto/15/454',
//   },
//   {
//     brand: 'Audi',
//     model: 'Coupe', // "34",
//     price: currency.format(454_545),
//     image: '/images/569x426/audi-coupe-modest.jpg',
//     slug: 'audi-coupe-modest', // "https://eldarcars.com/101/view_vehicle/49/stadsauto/12/34",
//   },
//   {
//     brand: 'Mercedes Benz',
//     model: 'GL 350 BlueTEC 4Matic AMG',
//     price: currency.format(545_454),
//     image: '/images/569x426/mercedes-gl-350-bluetec-4matic-amg.jpg',
//     slug: 'mercedes-gl-350-bluetec-4matic-amg', // "https://eldarcars.com/101/view_vehicle/52/sub-of-terreinwagen/10/mercedes-gl-350-bluetec-4matic-amg",
//   },
//   {
//     brand: 'Mercedes',
//     model: 'Menz E 250 CDi Coupé',
//     price: currency.format(9_500),
//     image: "/images/569x426/mercedes-menz-e-250-cdi-coupe.jpg",
//     slug: "mercedes-menz-e-250-cdi-coupe", // "https://eldarcars.com/101/view_vehicle/50/coupe/9/mercedes-menz-e-250-cdi-coup%C3%A9",
//   },
// ];

export default async function Home() {

    const res = await fetch("http://localhost:8090/api/collections/cars/records", {
    cache: "no-store", // or use "force-cache" for ISR
  });

  const data = await res.json();

  // PocketBase returns { items: [...] }
  const cars = data.items.map(car => ({
    brand: car.brand,
    model: car.model,
    price: currency.format(car.priceAmount),
    image: car.images?.[0] ? `http://localhost:8090/api/files/cars/${car.id}/${car.images[0]}` : '/placeholder.jpg',
    slug: car.slug,
  }));

  return (
    <section className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">

      {/* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */}
      {cars.map(car =>        
        <article key={car.slug} className="bg-gray-900 rounded-md overflow-hidden">
          {/* hover:text-red-500 */}
          <Link href={`/cars/${car.slug}`} className="flex flex-col font-medium text-gray-300 hover:text-gray-200">
            <figure>
              <img src={car.image} alt={`${car.brand} ${car.model}`} />
              <figcaption className="flex justify-between p-4">
                <span className="text-left">{car.price}</span>
                <span className="text-right">{car.model}</span>
              </figcaption>
            </figure>
          </Link>
        </article>        
      )}
    </section>
  );
}
