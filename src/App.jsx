/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
// import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import "../public/css/style.css";
import Content from "./Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./Home";
import Write from "./Write";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" />
        <Route
          path="/content"
          element={
            <div className="container">
              <Content />
            </div>
          }
        />
        <Route path="/write" element={<Write />} />
      </Routes>

      <Footer />
    </>
  );
}
const S = {
  title: "Sumer",
  author: "Mohith",
  content: [
    {
      heading: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_of_Sumer.png/1200px-Map_of_Sumer.png",
      subtext: [],
      subimg: [],
      imgcap: "Sumer\n(c. 5500 – c. 1800 BC)",
      text: "Sumer (/ˈsuːmər/) is the earliest known civilization, located in the historical region of southern Mesopotamia (now south-central Iraq), emerging during the Chalcolithic and early Bronze Ages between the sixth and fifth millennium BC. Like nearby Elam, it is one of the cradles of civilization, along with Egypt, the Indus Valley, the Erligang culture of the Yellow River valley, Caral-Supe, and Mesoamerica. Living along the valleys of the Tigris and Euphrates rivers, Sumerian farmers grew an abundance of grain and other crops, a surplus which enabled them to form urban settlements. The world's earliest known texts come from the Sumerian cities of Uruk and Jemdet Nasr, and date to between c. 3350 – c. 2500 BC, following a period of proto-writing c. 4000 – c. 2500 BC.",
    },
    {
      heading: "Origins",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Head_of_Gudea_%28Metropolitan_Museum_of_Art%29.jpg",
      imgcap:
        'Left: Sculpture of the head of Sumerian ruler Gudea, c. 2150 BC. Right: cuneiform characters for Saĝ-gíg (𒊕 𒈪), "Black Headed Ones", the native designation for the Sumerians. The first is the pictographic character for "head" (, later ), the second the character for "night", and for "black" when pronounced gíg (, later ).',
      subtext: [],
      subimg: [
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Blau_Monuments_%28front%29.jpg/1200px-Blau_Monuments_%28front%29.jpg",
          imgcap:
            "The Blau Monuments combine proto-cuneiform characters and illustrations of early Sumerians, Jemdet Nasr period, 3100–2700 BC. British Museum.",
        },
        {
          onlyimg: true,
          title: "",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Enthroned_King_of_Ur.jpg/1200px-Enthroned_King_of_Ur.jpg",
          imgcap:
            "Enthroned Sumerian king of Ur, possibly Ur-Pabilsag, with attendants. Standard of Ur, c. 2600 BC.",
        },
      ],
      text: `Most historians have suggested that Sumer was first permanently settled between c. 5500 – c. 3300 BC by a West Asian people who spoke the Sumerian language (pointing to the names of cities, rivers, basic occupations, etc., as evidence), a non-Semitic and non-Indo-European agglutinative language isolate.

Others have suggested that the Sumerians were a North African people who migrated from the Green Sahara into the Middle East and were responsible for the spread of farming in the Middle East. However, contrary evidence strongly suggests that the first farming originated in the Fertile Crescent. Although not specifically discussing Sumerians, Lazaridis et al. 2016 have suggested a partial North African origin for some pre-Semitic cultures of the Middle East, particularly Natufians, after testing the genomes of Natufian and Pre-Pottery Neolithic culture-bearers.

Alternatively, a 2013 genetic analysis of four ancient Mesopotamian skeletal DNA samples suggests an association of the Sumerians with Indus Valley Civilisation, possibly as a result of ancient Indus–Mesopotamia relations. Some scholars associate the Sumerians with the Hurrians and Urartians, and suggest the Caucasus as their homeland.

A prehistoric people who lived in the region before the Sumerians have been termed the "Proto-Euphrateans" or "Ubaidians", and are theorized to have evolved from the Samarra culture of northern Mesopotamia. The Ubaidians, though never mentioned by the Sumerians themselves, are assumed by modern-day scholars to have been the first civilizing force in Sumer. They drained the marshes for agriculture, developed trade, and established industries, including weaving, leatherwork, metalwork, masonry, and pottery.

Some scholars contest the idea of a Proto-Euphratean language or one substrate language; they think the Sumerian language may originally have been that of the hunting and fishing peoples who lived in the marshland and the Eastern Arabia littoral region and were part of the Arabian bifacial culture. Juris Zarins believes the Sumerians lived along the coast of Eastern Arabia, today's Persian Gulf region, before it was flooded at the end of the Ice Age.

Sumerian civilization took form in the Uruk period (4th millennium BC), continuing into the Jemdet Nasr and Early Dynastic periods. The Sumerian city of Eridu, on the coast of the Persian Gulf, is considered to have been one of the oldest cities, where three separate cultures may have fused: that of peasant Ubaidian farmers, living in mud-brick huts and practicing irrigation; that of mobile nomadic Semitic pastoralists living in black tents and following herds of sheep and goats; and that of fisher folk, living in reed huts in the marshlands, who may have been the ancestors of the Sumerians.

Reliable historical records begin with Enmebaragesi (Early Dynastic I). The Sumerians progressively lost control to Semitic states from the northwest. Sumer was conquered by the Semitic-speaking kings of the Akkadian Empire around 2270 BC (short chronology), but Sumerian continued as a sacred language. Native Sumerian rule re-emerged for about a century in the Third Dynasty of Ur at approximately 2100–2000 BC, but the Akkadian language also remained in use for some time.`,
    },
    {
      heading: "City-states in Mesopotamia",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/White_Temple_ziggurat_in_Uruk.jpg/1920px-White_Temple_ziggurat_in_Uruk.jpg",
      imgcap:
        'Anu ziggurat and White Temple at Uruk. The original pyramidal structure, the "Anu Ziggurat" dates to around 4000 BC, and the White Temple was built on top of it c. 3500 BC. The design of the ziggurat was probably a precursor to that of the Egyptian pyramids, the earliest of which dates to c. 2600 BC.',
      subtext: [],
      subimg: [],
      text: `City-states in Mesopotamia
In the late 4th millennium BC, Sumer was divided into many independent city-states, which were divided by canals and boundary stones. Each was centered on a temple dedicated to the particular patron god or goddess of the city and ruled over by a priestly governor (ensi) or by a king (lugal) who was intimately tied to the city's religious rites.\nThe five "first" cities, said to have exercised pre-dynastic kingship "before the flood":
\tEridu (Tell Abu Shahrain)
\tBad-tibira (probably Tell al-Madain)
\tLarak
\tSippar (Tell Abu Habbah)
\tShuruppak (Tell Fara)
Other principal cities:
\tUruk (Warka)
\tKish (Tell Uheimir and Ingharra)
\tUr (Tell al-Muqayyar)
\tNippur (Afak)
\tLagash (Tell al-Hiba)
\tGirsu (Tello or Telloh)
\tUmma (Tell Jokha)
\tHamazi
\tAdab (Tell Bismaya)
\tMari (Tell Hariri)
\tAkshak
\tAkkad
\tIsin (Ishan al-Bahriyat)
\tLarsa (Tell as-Senkereh)
Minor cities (from south to north):
\tKuara (Tell al-Lahm)
\tZabala (Tell Ibzeikh)
\tKisurra (Tell Abu Hatab)
\tMarad (Tell Wannat es-Sadum)
\tDilbat (Tell ed-Duleim)
\tBorsippa (Birs Nimrud)
\tKutha (Tell Ibrahim)
\tDer (al-Badra)
\tEshnunna (Tell Asmar)
\tNagar (Tell Brak)
Apart from Mari, which lies full 330 kilometres (205 miles) north-west of Agade, but which is credited in the king list as having "exercised kingship" in the Early Dynastic II period, and Nagar, an outpost, these cities are all in the Euphrates-Tigris alluvial plain, south of Baghdad in what are now the Bābil, Diyala, Wāsit, Dhi Qar, Basra, Al-Muthannā and Al-Qādisiyyah governorates of Iraq.`,
    },
    {
      heading: "History",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Portrait_of_a_Sumerian_prisoner_on_a_victory_stele_of_Sargon_of_Akkad.jpg/330px-Portrait_of_a_Sumerian_prisoner_on_a_victory_stele_of_Sargon_of_Akkad.jpg",
      imgcap:
        "Portrait of a Sumerian prisoner on a victory stele of Sargon of Akkad, c. 2300 BC. The hairstyle of the prisoners (curly hair on top and short hair on the sides) is characteristic of Sumerians, as also seen on the Standard of Ur. Louvre Museum.",
      text: `The Sumerian city-states rose to power during the prehistoric Ubaid and Uruk periods. Sumerian written history reaches back to the 27th century BC and before, but the historical record remains obscure until the Early Dynastic III period, c. 23rd century BC, when the language of the written records becomes easier to decipher, which has allowed archaeologists to read contemporary records and inscriptions.\nThe Akkadian Empire was the first state that successfully united larger parts of Mesopotamia in the 23rd century BC. After the Gutian period, the Ur III kingdom similarly united parts of northern and southern Mesopotamia. It ended in the face of Amorite incursions at the beginning of the second millennium BC. The Amorite "dynasty of Isin" persisted until c. 1700 BC, when Mesopotamia was united under Babylonian rule.\nNew Stone Age: c. 10000 – c. 5000 BC
        \tUbaid period: c. 6500 – c. 4100 BC
        Copper Age: c. 5000 – c. 3300 BC
        \tUruk period: c. 4100 – c. 3100 BC
        \t\tUruk XIV–V phases: c. 4100 – c. 3300 BC
        \t\tUruk IV phase: c. 3300 – c. 3100 BC
        Early Bronze Age I: c. 3300 – c. 3000 BC
        \tJemdet Nasr period (Uruk III phase): c. 3100 – c. 2900 BC
        \t\tUruk III phase: c. 3100 – c. 2900 BC
        Early Bronze Age II: c. 3000 – c. 2700 BC
        \tEarly Dynastic period c. 2900 – c. 2334 BC
        \t\tEarly Dynastic I period: c. 2900 – c. 2800 BC
        \t\t\tEridu dynasty (Alulim)
        \t\t\tBad-tibira dynasty (Dumuzid)
        \t\t\tLarak dynasty (En-sipad-zid-ana)
        \t\t\tSippar dynasty (Enmeduranki)
        \t\t\tShuruppak dynasty (Ziusudra)
        \t\t\tKish I dynasty (Enmebaragesi)
        \t\tEarly Dynastic II period: c. 2800 – c. 2600 BC
        \t\t\tUruk I dynasty (Gilgamesh)
        \t\tEarly Dynastic IIIa period: c. 2600 – c. 2500 BC
        \t\t\tUr I dynasty
        \t\t\tAwan dynasty
        \t\t\tKish II dynasty
        \t\t\tHamazi dynasty
        \t\tEarly Dynastic IIIb period: c. 2500 – c. 2334 BC
        \t\t\tUruk II dynasty
        \t\t\tUr II dynasty
        \t\t\tAdab dynasty
        \t\t\tMari dynasty
        \t\t\tKish III dynasty
        \t\t\tAkshak dynasty
        \t\t\tKish IV dynasty
        \t\t\tUruk III dynasty
        Early Bronze Age III: c. 2700 – c. 2200 BC
        \tAkkadian period: c. 2334 – c. 2154 BC
        \t\tAkkad dynasty (Sargon)
        Early Bronze Age IV: c. 2200 – c. 2100 BC
        \tGutian period: c. 2154 – c. 2119 BC
        \t\tUruk IV dynasty
        \t\tGutian dynasty
        Middle Bronze Age I: c. 2100 – c. 2000 BC
        \tUr III period: c. 2119 – c. 2004 BC
        \t\tUruk V dynasty
        \t\tUr III dynasty
        Middle Bronze Age II A: c. 2000 – c. 1750 BC
        \tIsin-Larsa period: c. 2004 – c. 1736 BC
        \t\tIsin I dynasty
        \t\tLarsa dynasty
        Middle Bronze Age II B: c. 1750 – c. 1650 BC
        \tOld Babylonian period: c. 1736 – c. 1475 BC
        \t\tSealand dynasty`,
      subtext: [
        {
          title: "Ubaid period",
          text: "The Ubaid period is marked by a distinctive style of fine quality painted pottery which spread throughout Mesopotamia and the Persian Gulf. The oldest evidence for occupation comes from Tell el-'Oueili, but, given that environmental conditions in southern Mesopotamia were favourable to human occupation well before the Ubaid period, it is likely that older sites exist but have not yet been found. It appears that this culture was derived from the Samarran culture from northern Mesopotamia. It is not known whether or not these were the actual Sumerians who are identified with the later Uruk culture. The story of the passing of the gifts of civilization (me) to Inanna, goddess of Uruk and of love and war, by Enki, god of wisdom and chief god of Eridu, may reflect the transition from Eridu to Uruk.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Frieze-group-3-example1.jpg/330px-Frieze-group-3-example1.jpg",
          imgcap: "A pottery jar from the Late Ubaid Period",
        },
        {
          title: "Uruk period",
          text: "The archaeological transition from the Ubaid period to the Uruk period is marked by a gradual shift from painted pottery domestically produced on a slow wheel to a great variety of unpainted pottery mass-produced by specialists on fast wheels. The Uruk period is a continuation and an outgrowth of Ubaid with pottery being the main visible change.\nBy the time of the Uruk period (c. 4100–2900 BC calibrated), the volume of trade goods transported along the canals and rivers of southern Mesopotamia facilitated the rise of many large, stratified, temple-centered cities (with populations of over 10,000 people) where centralized administrations employed specialized workers. It is fairly certain that it was during the Uruk period that Sumerian cities began to make use of slave labour captured from the hill country, and there is ample evidence for captured slaves as workers in the earliest texts. Artifacts, and even colonies of this Uruk civilization have been found over a wide area—from the Taurus Mountains in Turkey, to the Mediterranean Sea in the west, and as far east as western Iran.\nThe Uruk period civilization, exported by Sumerian traders and colonists (like that found at Tell Brak), had an effect on all surrounding peoples, who gradually evolved their own comparable, competing economies and cultures. The cities of Sumer could not maintain remote, long-distance colonies by military force.\nSumerian cities during the Uruk period were probably theocratic and were most likely headed by a priest-king (ensi), assisted by a council of elders, including both men and women. It is quite possible that the later Sumerian pantheon was modeled upon this political structure. There was little evidence of organized warfare or professional soldiers during the Uruk period, and towns were generally unwalled. During this period Uruk became the most urbanized city in the world, surpassing for the first time 50,000 inhabitants.\nThe ancient Sumerian king list includes the early dynasties of several prominent cities from this period. The first set of names on the list is of kings said to have reigned before a major flood occurred. These early names may be fictional, and include some legendary and mythological figures, such as Alulim and Dumizid.\nThe end of the Uruk period coincided with the Piora oscillation, a dry period from c. 3200–2900 BC that marked the end of a long wetter, warmer climate period from about 9,000 to 5,000 years ago, called the Holocene climatic optimum.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Uruk_King_priest_feeding_the_sacred_herd.jpg/357px-Uruk_King_priest_feeding_the_sacred_herd.jpg",
          imgcap:
            "Cylinder seal of the Uruk period and its impression, c. 3100 BC – Louvre Museum",
        },
        {
          title: "Early Dynastic Period",
          text: 'The dynastic period begins c. 2900 BC and was associated with a shift from the temple establishment headed by council of elders led by a priestly "En" (a male figure when it was a temple for a goddess, or a female figure when headed by a male god) towards a more secular Lugal (Lu = man, Gal = great) and includes such legendary patriarchal figures as Dumuzid, Lugalbanda and Gilgamesh—who reigned shortly before the historic record opens c. 2900 BC, when the now deciphered syllabic writing started to develop from the early pictograms. The center of Sumerian culture remained in southern Mesopotamia, even though rulers soon began expanding into neighboring areas, and neighboring Semitic groups adopted much of Sumerian culture for their own.\nThe earliest dynastic king on the Sumerian king list whose name is known from any other legendary source is Etana, 13th king of the first dynasty of Kish. The earliest king authenticated through archaeological evidence is Enmebaragesi of Kish (Early Dynastic I), whose name is also mentioned in the Epic of Gilgamesh—leading to the suggestion that Gilgamesh himself might have been a historical king of Uruk. As the Epic of Gilgamesh shows, this period was associated with increased war. Cities became walled, and increased in size as undefended villages in southern Mesopotamia disappeared. (Both Enmerkar and Gilgamesh are credited with having built the walls of Uruk.)',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Meskalamdug_helmet_British_Museum_electrotype_copy_original_is_in_the_Iraq_Museum%2C_Bagdad.jpg/330px-Meskalamdug_helmet_British_Museum_electrotype_copy_original_is_in_the_Iraq_Museum%2C_Bagdad.jpg",
          imgcap:
            "Golden helmet of Meskalamdug, possible founder of the First Dynasty of Ur, 26th century BC",
        },
        {
          title: "1st Dynasty of Lagash",
          text: "The dynasty of Lagash (c. 2500–2270 BC), though omitted from the king list, is well attested through several important monuments and many archaeological finds.\nAlthough short-lived, one of the first empires known to history was that of Eannatum of Lagash, who annexed practically all of Sumer, including Kish, Uruk, Ur, and Larsa, and reduced to tribute the city-state of Umma, arch-rival of Lagash. In addition, his realm extended to parts of Elam and along the Persian Gulf. He seems to have used terror as a matter of policy. Eannatum's Stele of the Vultures depicts vultures pecking at the severed heads and other body parts of his enemies. His empire collapsed shortly after his death.\nLater, Lugal-zage-si, the priest-king of Umma, overthrew the primacy of the Lagash dynasty in the area, then conquered Uruk, making it his capital, and claimed an empire extending from the Persian Gulf to the Mediterranean. He was the last ethnically Sumerian king before Sargon of Akkad.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Stele_of_Vultures_detail_02.jpg/330px-Stele_of_Vultures_detail_02.jpg",
          imgcap: "Fragment of Eannatum's Stele of the Vultures",
        },
        {
          title: "Akkadian Empire",
          text: 'The Akkadian Empire dates to c. 2234–2154 BC (middle chronology), founded by Sargon of Akkad. The Eastern Semitic Akkadian language is first attested in proper names of the kings of Kish c. 2800 BC, preserved in later king lists. There are texts written entirely in Old Akkadian dating from c. 2500 BC. Use of Old Akkadian was at its peak during the rule of Sargon the Great (c. 2334–2279 BC), but even then most administrative tablets continued to be written in Sumerian, the language used by the scribes. Gelb and Westenholz differentiate three stages of Old Akkadian: that of the pre-Sargonic era, that of the Akkadian empire, and that of the Ur III period that followed it.\nAkkadian and Sumerian coexisted as vernacular languages for about one thousand years, but by around 1800 BC, Sumerian was becoming more of a literary language familiar mainly only to scholars and scribes. Thorkild Jacobsen has argued that there is little break in historical continuity between the pre- and post-Sargon periods, and that too much emphasis has been placed on the perception of a "Semitic vs. Sumerian" conflict. However, it is certain that Akkadian was also briefly imposed on neighboring parts of Elam that were previously conquered, by Sargon.',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Prisoners_on_the_victory_stele_of_an_Akkadian_king_circa_2300_BCE_Louvre_Museum_Sb_3.jpg/330px-Prisoners_on_the_victory_stele_of_an_Akkadian_king_circa_2300_BCE_Louvre_Museum_Sb_3.jpg",
          imgcap:
            "Sumerian prisoners on a victory stele of the Akkadian king Sargon, c. 2300 BC. Louvre Museum.",
        },
        {
          title: "2nd Dynasty of Lagash",
          text: "Following the downfall of the Akkadian Empire at the hands of Gutians, another native Sumerian ruler, Gudea of Lagash, rose to local prominence and continued the practices of the Sargonic kings' claims to divinity.\nThe previous Lagash dynasty, Gudea and his descendants also promoted artistic development and left a large number of archaeological artifacts.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Gudea_of_Lagash_Girsu.jpg/330px-Gudea_of_Lagash_Girsu.jpg",
          imgcap:
            "Gudea of Lagash, the Sumerian ruler who was famous for his numerous portrait sculptures that have been recovered.",
        },
        {
          title: "Ur III period",
          text: 'Later, the Third Dynasty of Ur under Ur-Nammu and Shulgi (c. 2112–2004 BC, middle chronology), whose power extended as far as southern Assyria, has been erroneously called a "Sumerian renaissance" in the past. Already, however, the region was becoming more Semitic than Sumerian, with the resurgence of the Akkadian-speaking Semites in Assyria and elsewhere, and the influx of waves of Semitic Martu (Amorites), who were to found several competing local powers in the south, including Isin, Larsa, Eshnunna and later, Babylonia.\nThe last of these eventually came to briefly dominate the south of Mesopotamia as the Babylonian Empire, just as the Old Assyrian Empire had already done in the north from the late 21st century BC. The Sumerian language continued as a sacerdotal language taught in schools in Babylonia and Assyria, much as Latin was used in the Medieval period, for as long as cuneiform was used.',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drawing_of_the_Ziggurat_of_Ur%2C_Iraq%2C_by_Marjorie_V._Duffell_for_C._L._Woolley%2C_1937.jpg/330px-Drawing_of_the_Ziggurat_of_Ur%2C_Iraq%2C_by_Marjorie_V._Duffell_for_C._L._Woolley%2C_1937.jpg",
          imgcap: "Great Ziggurat of Ur, c. 2100 BC, near Nasiriyah, Iraq",
        },
        {
          title: "Fall and transmission",
          text: 'This period is generally taken to coincide with a major shift in population from southern Mesopotamia toward the north. Ecologically, the agricultural productivity of the Sumerian lands was being compromised as a result of rising salinity. Soil salinity in this region had been long recognized as a major problem. Poorly drained irrigated soils, in an arid climate with high levels of evaporation, led to the buildup of dissolved salts in the soil, eventually reducing agricultural yields severely.\nDuring the Akkadian and Ur III phases, there was a shift from the cultivation of wheat to the more salt-tolerant barley, but this was insufficient, and during the period from 2100 BC to 1700 BC, it is estimated that the population in this area declined by nearly three-fifths. This greatly upset the balance of power within the region, weakening the areas where Sumerian was spoken, and comparatively strengthening those where Akkadian was the major language. Henceforth, Sumerian remained only a literary and liturgical language, similar to the position occupied by Latin in medieval Europe.\nFollowing an Elamite invasion and sack of Ur during the rule of Ibbi-Sin (c. 2028–2004 BC), Sumer came under Amorite rule (taken to introduce the Middle Bronze Age). The independent Amorite states of the 20th to 18th centuries are summarized as the "Dynasty of Isin" in the Sumerian king list, ending with the rise of Babylonia under Hammurabi c. 1800 BC.\nLater rulers who dominated Assyria and Babylonia occasionally assumed the old Sargonic title "King of Sumer and Akkad", such as Tukulti-Ninurta I of Assyria after c. 1225 BC.',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ur-Ningirsu_ruler_of_Lagash_portrait_circa_2110_BCE.jpg/330px-Ur-Ningirsu_ruler_of_Lagash_portrait_circa_2110_BCE.jpg",
          imgcap:
            "Portrait of Ur-Ningirsu, son of Gudea, c. 2100 BC. Louvre Museum.",
        },
      ],
      subimg: [],
    },
    {
      heading: "Population",
      text: "Uruk, one of Sumer's largest cities, has been estimated to have had a population of 50,000–80,000 at its height; given the other cities in Sumer, and the large agricultural population, a rough estimate for Sumer's population might be 0.8 million to 1.5 million. The world population at this time has been estimated at 27 million.\t\nThe Sumerians spoke a language isolate, but a number of linguists have claimed to be able to detect a substrate language of unknown classification beneath Sumerian because names of some of Sumer's major cities are not Sumerian, revealing influences of earlier inhabitants. However, the archaeological record shows clear uninterrupted cultural continuity from the time of the early Ubaid period (5300–4700 BC C-14) settlements in southern Mesopotamia. The Sumerian people who settled here farmed the lands in this region that were made fertile by silt deposited by the Tigris and the Euphrates.\t\nSome archaeologists have speculated that the original speakers of ancient Sumerian may have been farmers, who moved down from the north of Mesopotamia after perfecting irrigation agriculture there. The Ubaid period pottery of southern Mesopotamia has been connected via Choga Mami transitional ware to the pottery of the Samarra period culture (c. 5700–4900 BC C-14) in the north, who were the first to practice a primitive form of irrigation agriculture along the middle Tigris River and its tributaries. The connection is most clearly seen at Tell el-'Oueili near Larsa, excavated by the French in the 1980s, where eight levels yielded pre-Ubaid pottery resembling Samarran ware. According to this theory, farming peoples spread down into southern Mesopotamia because they had developed a temple-centered social organization for mobilizing labor and technology for water control, enabling them to survive and prosper in a difficult environment.\t\nOthers have suggested a continuity of Sumerians, from the indigenous hunter-fisherfolk traditions, associated with the bifacial assemblages found on the Arabian littoral. Juris Zarins believes the Sumerians may have been the people living in the Persian Gulf region before it flooded at the end of the last Ice Age.",
      img: "",
      imgcap: "",
      subtext: [],
      subimg: [],
    },
    {
      heading: "Culture",
      text: "",
      img: "",
      imgcap: "",
      subtext: [
        {
          title: "Social and family life",
          text: 'In the early Sumerian period, the primitive pictograms suggestthat:\n\n"Pottery was very plentiful, and the forms of the vases, bowls and dishes were manifold; there were special jars for honey, butter, oil and wine, which was probably made from dates. Some of the vases had pointed feet, and stood on stands with crossed legs; others were flat-bottomed, and were set on square or rectangular frames of wood. The oil-jars, and probably others also, were sealed with clay, precisely as in early Egypt. Vases and dishes of stone were made in imitation of those of clay."\n\n"A feathered head-dress was worn. Beds, stools and chairs were used, with carved legs resembling those of an ox. There were fire-places and fire-altars."\n\n"Knives, drills, wedges and an instrument that looks like a saw were all known. While spears, bows, arrows, and daggers (but not swords) were employed in war."\n\n"Tablets were used for writing purposes. Daggers with metal blades and wooden handles were worn, and copper was hammered into plates, while necklaces or collars were made of gold."\n\n"Time was reckoned in lunar months."',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Reconstructed_sumerian_headgear_necklaces_british_museum.JPG/508px-Reconstructed_sumerian_headgear_necklaces_british_museum.JPG",
          imgcap:
            "A reconstruction in the British Museum of headgear and necklaces worn by the women at the Royal Cemetery at Ur.",
        },
      ],
      subimg: [],
    },
  ],
};

export default App;
