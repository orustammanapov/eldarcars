"use client";

import Slider from "./Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import More from "./More";
import { useTranslation } from "react-i18next";

const currency = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
});

const percent = new Intl.NumberFormat('nl-NL', {
  style: 'percent',
});

export default async function Car({ data: carData }) {

  const { t } = useTranslation("translation", {
		lng: "nl",
	});

  const car = {
    brand: carData.brand,
    model: carData.model,
    price: {
      amount: Number(carData.priceAmount),
      currency: carData.priceCurrency,
    },
    vat: 0.21, // hardcoded or fetch from elsewhere
    images: carData.images?.map((fileName) =>
      `http://localhost:8090/api/files/cars/${carData.id}/${fileName}`
    ),
    description: carData.description,
    specs: [
      { name: t("labels.registration"), value: new Date(carData.registrationDate).toLocaleDateString('nl-NL') },
      { name: t("labels.mileage"), value: `${carData.mileageValue} ${carData.mileageMetric}` },
      { name: t("labels.transmission"), value: t(`transmissionTypes.${carData.expand?.transmissionType.value}`) },
      { name: t("labels.fuel"), value: t(`fuelTypes.${carData.expand?.fuelType.value}`) },
      { name: t("labels.power"), value: `${carData.powerValue} ${carData.powerUnit}` },
      { name: t("labels.body"), value: t(`carBodyStyles.${carData.expand?.carBodyStyle.value}`) },
    ],
    status: carData.status,
  };

  return (
    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">

      <Slider images={car.images} />

      {/* Details*/}
      <article className="basis-3/5">
        <h1 className="text-4xl font-bold mb-8 sm:-mt-2">Best Car Ever</h1>
        <div className="flex flex flex-col-reverse lg:flex-col">
          <section>
            <div className="mb-8">{/* Features */}
              <ul className="grid xl:grid-cols-3 grid-cols-2 gap-4 mb-4 text-gray-400">
                {car.specs.slice(0, 6).map((feature) => (
                  <li key={feature.name} className="flex flex-col basis-1/2">
                    <span className="font-bold">{feature.name}</span>
                    <span>{feature.value}</span>
                  </li>
                ))}
              </ul>
              {/* <More 
                title={t("sections.technical_specifications")}
                open={t("buttons.more")}
                close={t("buttons.less")}
                excerpt={
                  <ul className="grid xl:grid-cols-3 grid-cols-2 gap-4 mb-4 text-gray-400">
                    {car.specs.slice(0, 6).map((feature) => (
                      <li key={feature.name} className="flex flex-col basis-1/2">
                        <span className="font-bold">{feature.name}</span>
                        <span>{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                }
                details={car.specs.length > 6 ? (
                  <ul className="grid xl:grid-cols-3 grid-cols-2 gap-4 mb-4 text-gray-400">
                    {car.specs.slice(6).map((feature) => (
                      <li key={feature.name} className="flex flex-col basis-1/2">
                        <span className="font-bold">{feature.name}</span>
                        <span>{feature.value}</span>
                      </li>
                    ))}
                  </ul>)
                  : null
                }
              /> */}
            </div>
            <div className="mb-8">{/* Description */}
              <More 
                title={t("labels.description")}
                open={t("buttons.more")}
                close={t("buttons.less")}
                excerpt={ car.description.slice(0, 120) }
                details={ car.description.slice(120) }
              />
            </div>
          </section>
          {/* Call to action */}
          <div className="mb-8 flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-xl font-bold">{currency.format(car.price.amount)}</div>
              <small>BTW {percent.format(car.vat)} (incl.)</small>
            </div>
            <Link href="mailto:eldarcars@gmail.com" className={`text-xl p-3 rounded-md bg-red-900 hover:bg-red-800`}>
              <FontAwesomeIcon icon={faPaperPlane} className="w-4 mr-2" aria-hidden /> Geïnteresseerd
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}