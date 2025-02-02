import Slider from "../../components/Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import More from "../../components/More";

// interface Details {
//   range?: number  // 54564545
//   permit?: Date   // 2009 | 2022
// }

// range: 4_564_545,
// <span>Datum eerste toelating (bjr.):</span>
// <span>2022</span>

// car: {
//   brand: "MERCEDES-BENZ",
//   model: "E 250",
//   range: 230_000,
//   // <span>Datum eerste toelating (bjr.):</span>
//   // <span>2009</span>
// }

const currency = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
});

const percent = new Intl.NumberFormat('nl-NL', {
  style: 'percent',
});

const cars = {
  'bentley-8-litre-best': {
    brand: 'Bentley',
    model: '8 Litre',
    price: {
      amount: 5_454,
      currency: 'EUR'
    },
    vat: 0.21,
    images: [
      '/images/569x426/bentley-8-litre-best.jpg',
      'https://placehold.co/1200x800?text=Bentley+8+Litre+1',
      'https://placehold.co/1200x800?text=Bentley+8+Litre+2',
      'https://placehold.co/1200x800?text=Bentley+8+Litre+3',
      'https://placehold.co/1200x800?text=Bentley+8+Litre+4',
      'https://placehold.co/1200x800?text=Bentley+8+Litre+5',
      'https://placehold.co/1200x800?text=Bentley+8+Litre+6',
    ],
    description: `
      De Bentley met een 8-liter motor staat symbool voor ultieme luxe en ongeëvenaarde kracht. 
      Dit meesterwerk van vakmanschap combineert klassieke elegantie met indrukwekkende prestaties. 
      Het exterieur straalt een tijdloze verfijning uit met verfijnde details en een imposante 
      aanwezigheid op de weg. Binnenin zorgt het handgemaakte interieur voor een ongekende rijervaring, 
      met het fijnste leer, prachtig houtwerk en geavanceerde technologie die naadloos integreert. 
      De krachtige 8-liter motor biedt adembenemende acceleratie en uitzonderlijke snelheid, 
      terwijl het rijden soepel en responsief blijft. Geavanceerde veiligheidsfuncties en rijhulpsystemen 
      zorgen voor een geruststellend gevoel tijdens elke rit. De Bentley 8-liter is een meesterwerk dat 
      zowel liefhebbers van klassieke auto’s als moderne rijders in vervoering brengt.
    `,
    specs: [
      {name: 'Registratie', value: '02/2012'},
      {name: 'Kilometerstand', value: '160.000'},
      {name: 'Transmissie', value: 'Automatisch'},
      {name: 'Brandstof', value: 'Diesel'},
      {name: 'Vermogen', value: '100 pk'},
      {name: 'Carroserie', value: 'SUV'},  
    ],
    status: 'available', // |'reserved'|'sold',
  },
  'audi-coupe-modest': {
    brand: 'Audi',
    model: 'Coupe', // "34",
    price: {
      amount: 454_545,
      currency: 'EUR'
    },
    vat: 0.21,
    images: [
      '/images/569x426/audi-coupe-modest.jpg',
      'https://placehold.co/1200x800?text=Audi+Coupe+1',
      'https://placehold.co/1200x800?text=Audi+Coupe+2',
      'https://placehold.co/1200x800?text=Audi+Coupe+3',
    ],
    description: `
      De Audi Coupé combineert elegantie en prestaties en belichaamt de kenmerkende vakmanschap 
      en geavanceerde technologie waar het merk om bekendstaat. Strakke lijnen en een aerodynamisch 
      profiel maken het een opvallende verschijning op elke weg en benadrukken zowel stijl als snelheid. 
      Het interieur biedt premium comfort met hoogwaardige materialen, intuïtieve bedieningselementen en 
      geavanceerde infotainmentsystemen die zowel de bestuurder als passagiers ten goede komen.
      Onder de motorkap zorgt de krachtige motor voor indrukwekkende prestaties en een soepele, 
      responsieve wegligging. Veiligheidsfuncties zijn ruim aanwezig, wat gemoedsrust biedt dankzij 
      geavanceerde rijhulpsystemen. Of het nu gaat om ritten door de stad of lange ritten op de snelweg, 
      de Audi Coupé biedt een rijervaring die luxe, innovatie en ongeëvenaarde kracht in één verfijnd 
      pakket samenbrengt.
    `,
    specs: [
      {name: 'Registratie', value: '02/2012'},
      {name: 'Kilometerstand', value: '160.000'},
      {name: 'Transmissie', value: 'Automatisch'},
      {name: 'Brandstof', value: 'Diesel'},
      {name: 'Vermogen', value: '100 pk'},
      {name: 'Carroserie', value: 'SUV'},  
    ],
    status: 'reserved', // 'available'|'sold',
  },
  'mercedes-gl-350-bluetec-4matic-amg': {
    brand: 'Mercedes Benz',
    model: 'GL 350 BlueTEC 4Matic AMG',
    price: {
      amount: 545_454,
      currency: 'EUR'
    },
    vat: 0.21,
    images: [
      '/images/569x426/mercedes-gl-350-bluetec-4matic-amg.jpg',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+1',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+2',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+3',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+4',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+5',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+6',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+7',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+8',
      'https://placehold.co/1200x800?text=Mercedes+GL+350+9',
    ],
    description: `
      De Mercedes-Benz GL 350 is een luxe SUV die comfort, ruimte en krachtige prestaties in 
      één elegant pakket biedt. Met zijn dynamische ontwerp en imposante grille trekt hij de 
      aandacht op de weg, terwijl de verfijnde lijnen en aerodynamische vorm de prestaties 
      verbeteren. Het interieur van de GL 350 is een waar toevluchtsoord, met premium materialen 
      en geavanceerde technologie die een ongeëvenaarde rijervaring garanderen. Ruime zitplaatsen 
      bieden comfort voor zowel bestuurder als passagiers, terwijl de geavanceerde infotainment- 
      en navigatiesystemen het eenvoudig maken om verbonden te blijven. Onder de motorkap ligt 
      een krachtige motor die zorgt voor soepele acceleratie en uitstekende handling, ongeacht de 
      omstandigheden. Met tal van veiligheids- en rijhulpfuncties biedt de Mercedes-Benz GL 350 
      gemoedsrust en vertrouwen, waardoor elke rit een genot wordt.
    `,
    specs: [
      {name: 'Registratie', value: '02/2012'},
      {name: 'Kilometerstand', value: '160.000'},
      {name: 'Transmissie', value: 'Automatisch'},
      {name: 'Brandstof', value: 'Diesel'},
      {name: 'Vermogen', value: '100 pk'},
      {name: 'Carroserie', value: 'SUV'},  
      {name: 'Registratie', value: '02/2012'},
      {name: 'Kilometerstand', value: '160.000'},
      {name: 'Transmissie', value: 'Automatisch'},
      {name: 'Brandstof', value: 'Diesel'},
      {name: 'Vermogen', value: '100 pk'},
      {name: 'Carroserie', value: 'SUV'},  
    ],
    status: 'sold', // 'available'|'reserved',  
  },
  'mercedes-menz-e-250-cdi-coupe': {
    brand: 'Mercedes',
    model: 'Menz E 250 CDi Coupé',
    price: {
      amount: 9_500,
      currency: 'EUR'
    },
    vat: 0.21,
    images: [
      '/images/569x426/mercedes-menz-e-250-cdi-coupe.jpg',
      'https://placehold.co/1200x800?text=Mercedes+E+250+1',
      'https://placehold.co/1200x800?text=Mercedes+E+250+2',
      'https://placehold.co/1200x800?text=Mercedes+E+250+3',
      'https://placehold.co/1200x800?text=Mercedes+E+250+4',
      'https://placehold.co/1200x800?text=Mercedes+E+250+5',
    ],
    description: `
      De Mercedes-Benz E 250 is de belichaming van luxe en prestaties in een verfijnd sedan-ontwerp. 
      Met zijn gestroomlijnde lijnen en elegante uitstraling straalt deze auto een tijdloze klasse uit. 
      Het interieur verwelkomt bestuurders en passagiers met premium materialen, ergonomisch ontworpen 
      stoelen en een geavanceerd infotainmentsysteem dat zorgt voor een ongekende rijervaring. De 
      krachtige motor levert indrukwekkende prestaties en een soepele acceleratie, waardoor elke rit 
      een waar genot is. De E 250 is uitgerust met tal van geavanceerde veiligheids- en rijhulpsystemen, 
      waardoor je met vertrouwen de weg op kunt. Of je nu door de stad rijdt of lange afstanden aflegt, 
      de Mercedes-Benz E 250 biedt een perfecte combinatie van comfort, technologie en rijplezier, 
      waardoor het een ideale keuze is voor liefhebbers van luxe voertuigen.
    `,
    specs: [
      {name: 'Registratie', value: '02/2012'},
      {name: 'Kilometerstand', value: '160.000'},
      {name: 'Transmissie', value: 'Automatisch'},
      {name: 'Brandstof', value: 'Diesel'},
      {name: 'Vermogen', value: '100 pk'},
      {name: 'Carroserie', value: 'SUV'},  
    ],
    status: 'available', // |'reserved'|'sold',
  },
}

/**
 * Registratie     02/2012
 * Kilometerstand  160.000
 * Brandstof       Diesel
 * Transmissie     Automatisch
 * Carroserie      SUV
 * BTW 21%         Nee
 */

export async function generateStaticParams() {
  /**
   *  const cars = await fetch("https://your-api.com/cars");
   */
  return Object.keys(cars).map((slug) => ({
    slug,
  }))
}

export default function Page({ params }) {
  /**
   * const car = await fetch(`https://your-api.com/cars/${params.slug}`);
   */
  const car = cars[params.slug];

  return (
    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">

      <Slider images={car.images} />

      {/* Details*/}
      <article className="basis-3/5">
        <h1 className="text-4xl font-bold mb-8 sm:-mt-2">Best Car Ever</h1>
        <div className="flex flex flex-col-reverse lg:flex-col">
          <section>
            <div className="mb-8">{/* Features */}
              <More 
                title="Specificaties"
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
                details={
                  <ul className="grid xl:grid-cols-3 grid-cols-2 gap-4 mb-4 text-gray-400">
                    {car.specs.slice(6).map((feature) => (
                      <li key={feature.name} className="flex flex-col basis-1/2">
                        <span className="font-bold">{feature.name}</span>
                        <span>{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                }
              />
            </div>
            <div className="mb-8">{/* Description */}
              <More 
                title="Beschrijving"
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