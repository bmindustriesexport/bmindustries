import ProductData from "@/components/products/productData";
import Head from "next/head";
import { useEffect, useState } from "react";

const Products = () => {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [openAccordionsAnimation, setOpenAccordionsAnimation] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  const productsData = [
    {
      id: 1,
      title: "Acetone",
      Synonyms:
        "Ethanoic Acid, Methanecarboxylic Acid, Ethylic Acid, Glacial Acetic Acid",
      Formula: "CH,COOH",
      CAS_NO: "64-19-7",
      Packaging: "MS Drums(210 liter), ISO Tank and Bulk",
      Application:
        "Acetone is a widely used solvent in various industries, including pharmaceuticals, polymers, and cosmetics. It's also used for cleaning lab equipment, electronic components, and metal surfaces. Additionally, it's a common ingredient in nail polish remover and has been studied for potential use as a fuel additive in the energy industry.",
      pdf_title: "Acetone COA",
      pdf_link: "/productsPdf/acetone.pdf",
    },
    {
      id: 2,
      title: "Chloroform",
      Synonyms:
        "Trichloromethane, Methane trichloride, Methyl Trichloride, methenyl trichloride, Methenyl chloride, TCM",
      Formula: "CHCl<sub>3</sub>",
      CAS_NO: "67-66-3",
      Packaging: "MS Drums, ISO Tank and Bulk",
      Application:
        "Chloroform is a colorless, heavy,  liquid that has a wide range of applications.It is used to dissolve fats, oils, and resins in the production of pharmaceuticals, pesticides, and other chemicals. It is also used as a starting material in the manufacture of refrigerants,  as a fumigant for stored grains to control pests ,  and in the production of dyes, perfumes, and explosives.",
      pdf_title: "chloroform COA",
      pdf_link: "/productsPdf/chloroform.pdf",
    },
    {
      id: 3,
      title: "Ethyl Acetate",
      Synonyms:
        "Ethyl acetic ester, Ethyl ester, Ethyl Ethanoate, Bio based Ethyl Acetate",
      Formula: "C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>",
      CAS_NO: "141-78-6",
      Packaging: "MS Drums/Plastic drum(210 liter), ISO Tank and Bulk",
      Application:
        "Ethyl acetate is a colorless liquid that is commonly used as a solvent in many industries. It is widely used in the production of adhesives, coatings, inks, varnishes, paints, and household products such as nail polish remover. Ethyl acetate is also used as an extraction solvent in the pharmaceutical industry and in the preparation of analytical samples due to its ability to evaporate quickly and leave no residue.",
      pdf_title: "Ethyl Acetate",
      pdf_link: "/productsPdf/ethylAcetate.pdf",
    },
    {
      id: 4,
      title: "Hydrogen Peroxide",
      Synonyms: "Hydroperoxide, Hydrogen Dioxide",
      Formula: "H<sub>2</sub>O<sub>2</sub>",
      CAS_NO: "7722-84-1",
      Packaging: "Jerry Cans and IBC",
      Application:
        "Hydrogen peroxide (H2O2) is a pale blue liquid with strong oxidizing properties.One of its main uses is as a bleaching agent for textiles and paper. It is also used as a disinfectant and antiseptic in the healthcare industry, as well as in the production of personal care products such as toothpaste and mouthwash.Additionally, it is used to improve oil recovery in the petroleum industry and  is also used in the extraction and finishing of metals.",
      pdf_title: "Hydrogen Peroxide 50% COA",
      pdf_link: "/productsPdf/hydrogenPeroxide.pdf",
    },
    {
      id: 5,
      title: "Isopropyl Alcohol",
      Synonyms:
        "1-methylethanol, 1-methylethyl alcohol 2-, hydroxypropane, dimethyl carbinol, ethyl carbinol, hydroxypropane , IPA, i-propanol, iso ethyl carbinol, propan-2-ol, sec-propanol",
      Formula: "C<sub>3</sub>H<sub>8</sub>O",
      CAS_NO: "67-63-0",
      Packaging: "MS Drums, ISO Tank and Bulk",
      Application:
        "Isopropyl alcohol (IPA) is a colorless, flammable liquid commonly used as a cleaning agent, disinfectant, and solvent in various industries such as pharmaceuticals, healthcare, electronics, automotive, and manufacturing. Its ability to dissolve a wide range of substances makes it useful in the production of cosmetics, fragrances, and personal care products, as well as in the manufacture of pharmaceuticals and chemicals.",
      pdf_title: "Iso PropylAlcohol (IPA) COA",
      pdf_link: "/productsPdf/isoPropylAlcohol(IPA).pdf",
    },
    {
      id: 6,
      title: "Mixed Xylene",
      Synonyms: "Dimethyl Benzene, Xylol, Methyl Toluene.",
      Formula: "C<sub>8</sub>H<sub>10</sub>",
      CAS_NO: "1330-20-7",
      Packaging: "MS Drums, ISO Tank and Bulk",
      Application:
        "One of its primary uses is as a solvent in the production of paints, varnishes, and coatings. It is also commonly used as a solvent in the production of pesticides. Mixed xylene is also an important raw material for the production of various chemicals, such as orthoxylene (phthalic anhydride), metaxylene (isophthalic acid), paraxylene (terephthalic acid), and ethylbenzene (styrene monomer). These chemicals are used in the production of plastics, resins, synthetic fibers, and other materials.",
      pdf_title: "Mixed Xylene CAO",
      pdf_link: "/productsPdf/mixedXylene.pdf",
    },
    {
      id: 7,
      title: "Thinners",
      data: "We can formulate Thinners as per your required proportions of solvents. Examples of thinners are NC Thinner, PU Thinner, Ink Thinner. Please share with us your proportions or share COA & MSDS for us to get back to you with the same. If you would like to discuss further please contact us.",
    },
    {
      id: 8,
      title: "Toluene",
      Synonyms: "Methacide, Methylbenzene, Phenylmethane, Methylbenzol",
      Formula: "C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>",
      CAS_NO: "108-88-3",
      Packaging: "MS Drums, ISO Tank and Bulk",
      Application:
        "Toluene is a solvent widely used in the production of adhesives, rubber, fingernail polish ,and pharmaceuticals. It is also a feedstock in the production of benzene and other chemicals. Toluene is found in consumer products such as gasoline, paints, lacquers, and varnishes. ",
      pdf_title: "Toluene CAO",
      pdf_link: "/productsPdf/toluene.pdf",
    },
    {
      id: 9,
      title: "Solvent C-9",
      Synonyms:
        "Aromatic solvent, Solvent 64742-95-6, Naphthenic aromatic solvent",
      Formula: "C<sub>9</sub>H<sub>12</sub>",
      CAS_NO: "64742-95-6",
      Packaging: "MS Drums(210 liter), ISO Tank and Bulk",
      Application:
        "C9  is widely used as a solvent in various industries such as coatings, adhesives, printing inks, rubber, and chemicals. It is also used as a diluent for resins and as a thinner for paints, varnishes, and coatings.  It has good compatibility with SBR, SIS, SEBS and SEPS and can be used as a pressure sensitive adhesive, hot-melt adhesive and synthetic rubber.",
      pdf_title: "Solvent C-9 CAO",
      pdf_link: "/productsPdf/solventC-9.pdf",
    },
    {
      id: 10,
      title: "Normal Butanol",
      Synonyms: "n-Butanol, n-Butyl alcohol, Butan-1-ol, and 1-Butanol",
      Formula: "C<sub>4</sub>H<sub>10</sub>O",
      CAS_NO: "71-36-3",
      Packaging: "MS Drums(210 liter), ISO Tank and Bulk",
      Application:
        "Normal Butanol is widely used in the chemical industry as an intermediate for the production of various chemicals such as ethers, butyl ether acetates, pharmaceuticals, polymers, and plastics. It is also used as a solvent in coatings, paints, and adhesives, and as a fuel and extraction solvent.",
      pdf_title: "Normal Butanol COA",
      pdf_link: "/productsPdf/normalButanol.pdf",
    },
    {
      id: 11,
      title: "ISO Butanol",
      Synonyms: "2-Methyl-1-propanol, and 2-Methylpropyl alcohol",
      Formula: "C<sub>4</sub>H<sub>10</sub>O",
      CAS_NO: "78-83-1",
      Packaging: "MS Drums(210 liter), ISO Tank and Bulk",
      Application:
        "Isobutanol is a versatile chemical compound used as a solvent, chemical intermediate, fuel additive, pharmaceutical intermediate, flavoring agent, and ingredient in personal care products and cosmetics. It is used as a flotation agent, as well as an intermediate in the production of agricultural chemicals. Additionally, it is utilized as an anti-corrosion inhibitor in engine oils.",
      pdf_title: "ISO Butanol COA",
      pdf_link: "/productsPdf/isoButanol.pdf",
    },
    {
      id: 12,
      title: "2-Ethyl Hexanol (2EH)",
      Synonyms: "2-Methyl-1-propanol, and 2-Methylpropyl alcohol",
      Formula: "C<sub>8</sub>H<sub>18</sub>O",
      CAS_NO: "104-76-7",
      Packaging: "MS Drums/Plastic drum(210 Liter), ISO Tank and Bulk",
      Application:
        "2-Ethylhexanol is used mainly as a feedstock for manufacturing low volatility esters such as Di-Octyl Phthalate. It is also used as a solvent, additive in dispersing agents, and feedstock for manufacturing derivatives like Di-Octyl Adipate and Di-Octyl Maleate. Additionally, it is used in the production of 2-Ethyl hexyl esters as thermal stabilizers and antioxidants in plastics, and as an anti-foaming agent for aqueous systems.",
      pdf_title: "2-Ethyl Hexanol (2EH) COA",
      pdf_link: "/productsPdf/2-EthylHexanol(2EH).pdf",
    },
    {
      id: 13,
      title: "Hand Sanitizer",
      Synonyms: "Hand antiseptic , Hand Rub",
      CAS_NO: "67-63-0",
      Packaging: "200 Liter , 50 Liter , 20 Liter  , 5 Liter , 1 Liter ,500 ml",
      Application:
        "Hand sanitizer is a disinfectant gel or liquid used to clean hands without water or towels. It kills germs, viruses, and bacteria and is used in situations where hand washing is not possible or practical.",
      pdf_title: "Hand Sanitizer CAO",
      pdf_link: "/productsPdf/handSanitizer.pdf",
    },
    {
      id: 14,
      title: "Caustic Soda Flakes",
      Synonyms:
        "Sodium hydroxide , White caustic flakes , Caustic alkali flakes",
      Formula: " NaOH",
      CAS_NO: "1310-73-2",
      Packaging: "20/50 Kg HDPE Bags with inner HM-HDPE Line",
      Application:
        "Caustic soda flakes are widely used in small-scale industries. They are used to make soap, cleaning agents, and remove impurities in textiles and crude oil refining. Their strong alkaline nature makes them effective for removing dirt and grease.They are also used in the production of synthetic fibers. In the petroleum industry, caustic soda flakes are used to refine crude oil and remove impurities.",
      pdf_title: "Caustic Soda Flakes CAO",
      pdf_link: "/productsPdf/causticSodaFlakes.pdf",
    },
    {
      id: 15,
      title: "Caustic Soda Lye",
      Synonyms: "White caustic solution , Sodium hydrate solution",
      Formula: "NaOH",
      CAS_NO: "1310-73-2",
      Packaging: "In Tanker load",
      Application:
        "Caustic soda lye is used in various industries, including soap and cleaning agents, pulp and paper, textiles, and water treatment. It is also used in food processing and the production of chemicals like detergents, bleach, and pharmaceuticals.",
      pdf_title: "Caustic Soda Lye CAO",
      pdf_link: "/productsPdf/causticSodaLye.pdf",
    },
    {
      id: 16,
      title: "Ortho Dichloro Benzene (ODCB)",
      Synonyms: "Ortho - Dichlorobenzol , 1,2 - dichlorobenzene",
      Formula: "C<sub>6</sub>H<sub>4</sub>Cl<sub>2</sub>",
      CAS_NO: "95-50-1",
      Packaging: "ISO Container, 250 Kgs GI Drums / Road Tanker",
      Application:
        " Ortho-dichlorobenzene (ODCB) is used as a pesticide, fumigant, solvent, and ingredient in various products such as adhesives, cleaners, and air fresheners. It is also used in the production of dyes, pharmaceuticals, and synthetic resins due to its high stability and low volatility.",
      pdf_title: "Ortho Dichloro Benzene (ODCB) CAO",
      pdf_link: "/productsPdf/orthoDichloroBenzene(ODCB).pdf",
    },
    {
      id: 17,
      title: "Mineral Turpentine Oil (MTO)",
      Synonyms: "White Spirit , Petroleum Spirits",
      CAS_NO: "8006-64-2",
      Packaging: "MS Drums(210 liter), ISO Tank and Bulk",
      Application:
        "Mineral turpentine oil is a versatile solvent used for thinning paints and varnishes, cleaning machinery and tools, producing chemicals, and manufacturing rubber and textiles. It can also be used as a fuel.",
      pdf_title: "Mineral Turpentine Oil (MTO) CAO",
      pdf_link: "/productsPdf/mineralTurpentineOil(MTO).pdf",
    },
    {
      id: 18,
      title: "Di Ethyl Glycol (DEG)",
      Synonyms: "Diethyl Carbinol , 2,2'-Oxydiethanol",
      Formula: "C<sub>4</sub>H<sub>10</sub>O<sub>3</sub>",
      CAS_NO: "111-46-6",
      Packaging: "MS Drums/plastic drums(210 liter), ISO Tank and Bulk",
      Application:
        "Di Ethyl Glycol (DEG) is a versatile chemical used as a solvent for resins, dyes, and oils, as a coupling agent in water-based coatings and inks, and as a component in antifreeze and heat transfer fluids. It is also used in the production of  lubricants, surfactants, and polyester resins, and among other applications.",
      pdf_title: "Di Ethyl Glycol (DEG) CAO",
      pdf_link: "/productsPdf/diEthylGlycol(DEG).pdf",
    },
    {
      id: 19,
      title: "Mono Ethyl Glycol (MEG)",
      Synonyms: "1,2-ethanediol or 1,2-Dihydroxyethane",
      Formula: "C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>",
      CAS_NO: "107-21-1",
      Packaging: "MS Drums/plastic drums(210 liter), ISO Tank and Bulk",
      Application:
        "Mono Ethyl Glycol (MEG) is a versatile chemical used as a raw material in the production of polyester fibers and resins, as a solvent for paints and coatings, and in the production of antifreeze and coolants for automobiles. It is also used in the production of detergents, cosmetics, and pharmaceuticals.",
      pdf_title: "Mono Ethyl Glycol (MEG) CAO",
      pdf_link: "/productsPdf/monoEthylGlycol(MEG).pdf",
    },
    {
      id: 20,
      title: "Mixed Aromatic Chemical",
      data: "We can formulate Mixed Aromatic Chemical as per your required proportions of solvents. Examples of Mixed Aromatic Chemical are Slow Drying Mixed Aromatic Chemical , Fast Drying Mixed Aromatic Chemical . Please share with us your proportions or share COA & MSDS for us to get back to you with the same. If you would like to discuss further please contact us.",
    },
    {
      id: 21,
      title: "Methylene Chloride",
      Synonyms: "Methylene dichloride, Refrigerant-30, Freon-30, R-30, DCM",
      Formula: "CH<sub>2</sub>Cl<sub>2",
      CAS_NO: "75-09-2",
      Packaging: "MS Drums, ISO Tank and Bulk",
      Application:
        "-Methylene chloride is a colorless,  versatile solvent used in adhesives, paint, chemical processing, pharmaceuticals, metal cleaning, and as a propellant in aerosols and a blowing agent in the production of polyurethane foams.",
      pdf_title: "Methylene Chloride CAO",
      pdf_link: "/productsPdf/methyleneChloride.pdf",
    },
    {
      id: 22,
      title: "Hydrochloric Acid (HCl)",
      Synonyms: "Methylene dichloride, Refrigerant-30, Freon-30, R-30, DCM",
      Formula: "HCl",
      CAS_NO: "75-09-2",
      Packaging: "MS Drums, ISO Tank and Bulk",
      Application:
        "-Methylene chloride is a colorless,  versatile solvent used in adhesives, paint, chemical processing, pharmaceuticals, metal cleaning, and as a propellant in aerosols and a blowing agent in the production of polyurethane foams.",
      pdf_title: "Hydrochloric Acid (HCl) CAO",
      pdf_link: "/productsPdf/hydrochloricAcid(HCL).pdf",
    },
  ];

  const toggleAccordionAnimationHandler = (index) => {
    if (openAccordionsAnimation.includes(index)) {
      setOpenAccordionsAnimation((prev) =>
        prev.filter(
          (singleOpenAccordionIndex) => singleOpenAccordionIndex !== index
        )
      );
    } else {
      setOpenAccordionsAnimation([...openAccordionsAnimation, index]);
      setOpenAccordions([...openAccordions, index]);
    }
  };

  const toggleAccordionHandler = (index) => {
    if (openAccordions.includes(index)) {
      setOpenAccordions((prev) =>
        prev.filter(
          (singleOpenAccordionIndex) => singleOpenAccordionIndex !== index
        )
      );
    }
  };
  return (
    <>
      <Head>
        <title>Products</title>
        <style>
          {`
            .animate-h1 {
              opacity: ${loaded ? "5" : "0"};
              transform: translateY(${loaded ? "0" : "50px"});
              transition: opacity 1s ease-out, transform 1s linear;
            }
          `}
        </style>
      </Head>
      <div>
        <h1 className="text-sky-600 font-bold text-3xl text-center p-4 mt-1 animate-h1">
          Products
        </h1>

        {productsData.map((product, index) => {
          return (
            <div key={product.id} className="mb-4">
              <ProductData
                product={product}
                mapIndex={index}
                toggleAccordionAnimationHandler={
                  toggleAccordionAnimationHandler
                }
                openAccordions={openAccordions}
                openAccordionsAnimation={openAccordionsAnimation}
                toggleAccordionHandler={toggleAccordionHandler}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
