export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: string[];
  price?: string;
  duration?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 1,
    slug: "registracija-privrednog-drustva",
    title: "Registracija privrednog društva ili samostalne djelatnosti",
    shortDescription: "Donijeli ste odluku da samostalno, ili udruženi sa svojim poslovnim partnerima, krenete u realizaciju poslovne ideje. Mi ćemo Vam pomoći kvalitetnim savjetovanjem koji pravni oblik odabrati i koji su to koraci koje je potrebno proći.",
    fullDescription: "Donijeli ste odluku da samostalno, ili udruženi sa svojim poslovnim partnerima, krenete u realizaciju poslovne ideje, ali je neophodno da izvršite registraciju firme pred nadležnim državnim organima...što već na samu pomisao djeluje zbunjujuće i komplikovano. DOO, SP ili...?\n\nOdakle krenuti, kome se obratiti, šta prvo treba pripremiti...?\n\nMi ćemo Vam pomoći kvalitetnim savjetovanjem koji pravni oblik odabrati i koji su to koraci koje je potrebno proći da biste stigli do cilja. Vodićemo Vas kroz postupak registracije, tako da uštedite mnogo energije za suštinu svoga biznisa, koji tek slijedi.\n\nNećemo Vam naplatiti ove usluge, ukoliko ćete postati naš klijent.",
    icon: "flaticon-analytics",
    features: [
      "Savjetovanje o izboru pravnog oblika (DOO, SP, AD)",
      "Priprema potrebne dokumentacije",
      "Registracija kod nadležnih organa",
      "Podrška tokom cijelog procesa",
      "Bez naknade za postojeće klijente"
    ],
    benefits: [
      "Ušteda vremena i energije",
      "Stručno vođenje kroz postupak",
      "Izbjegavanje grešaka u dokumentaciji",
      "Brža registracija",
      "Mogućnost fokusiranja na biznis"
    ],
    process: [
      "Konsultacije o izboru pravnog oblika",
      "Priprema dokumentacije",
      "Podnošenje zahtjeva",
      "Praćenje postupka registracije",
      "Preuzimanje rješenja"
    ],
    duration: "5-10 radnih dana",
    price: "Po dogovoru"
  },
  {
    id: 2,
    slug: "registracija-poreskog-obveznika",
    title: "Registracija poreskog obveznika",
    shortDescription: "Odnos prema poreskim upravama mora biti jako ozbiljan, pa od registracije u njihovim evidencijama, do obračuna i izmirenja nastalih finansijskih obaveza, ne smije biti propusta.",
    fullDescription: "Odnos prema poreskim upravama mora biti jako ozbiljan, pa od registracije u njihovim evidencijama, do obračuna i izmirenja nastalih finansijskih obaveza, ne smije biti propusta.\n\nUputićemo Vas šta je potrebno da uradite na početku svoga poslovanja, a koje korake mi kao knjigovodstveni biro, možemo uraditi za Vas, bilo da je Poreska uprava Republike Srpske u pitanju ili Uprava za indirektno oporezivanje.",
    icon: "flaticon-profile",
    features: [
      "Registracija u Poreskoj upravi RS",
      "Registracija u UIO BiH",
      "Savjetovanje o poreskim obavezama",
      "Priprema potrebnih obrazaca",
      "Praćenje poreskih propisa"
    ],
    benefits: [
      "Pravilna registracija od početka",
      "Izbjegavanje poreskih kazni",
      "Ažurno informisanje o propisima",
      "Stručna podrška",
      "Smanjenje rizika"
    ],
    process: [
      "Analiza vrste djelatnosti",
      "Priprema dokumentacije",
      "Registracija u PU RS",
      "Registracija u UIO BiH",
      "Dobijanje poreskog broja"
    ],
    duration: "3-7 radnih dana",
    price: "Po dogovoru"
  },
  {
    id: 3,
    slug: "radni-odnosi",
    title: "Radni odnosi",
    shortDescription: "Prijava i odjava radnika, obračuni zarada, honorara i ostali poslovi vezani za radne odnose su naša briga. Vi odaberite svoj tim saradnika, a mi ćemo se pobrinuti za ostalo.",
    fullDescription: "Prijava i odjava radnika, obračuni zarada, honorara i ostali poslovi vezani za radne odnose su naša briga.\n\nVi odaberite svoj tim saradnika, a mi ćemo Vam predložiti obrasce ugovora koje sa njima treba da zaključite, prijavićemo ih kao zaposlena lica u vašoj firmi, odjaviti ih u slučaju prekida radnog odnosa, obračunavati zarade, poreze, doprinose... refundacije bolovanja i ostale poslove vezane za radne odnose, kao i po osnovu drugih vidova ličnih primanja.",
    icon: "flaticon-marketing",
    features: [
      "Prijava i odjava radnika",
      "Obračun zarada i honorara",
      "Izraščun poreza i doprinosa",
      "Refundacije bolovanja",
      "Priprema ugovora o radu"
    ],
    benefits: [
      "Ušteđeno vrijeme za HR poslove",
      "Tačni obračuni",
      "Poštovanje zakonskih rokova",
      "Stručna podrška",
      "Smanjenje administrativnog opterećenja"
    ],
    process: [
      "Priprema ugovora o radu",
      "Prijava radnika",
      "Mjesečni obračuni",
      "Prijave bolovanja/odmora",
      "Odjava radnika"
    ],
    duration: "Kontinuirano",
    price: "Po broju zaposlenih"
  },
  {
    id: 4,
    slug: "zajednica-etaznih-vlasnika",
    title: "Organizacija i osnivanje Zajednica etažnih vlasnika",
    shortDescription: "U skladu sa Zakonom o održavanju zgrada, Zajednica etažnih vlasnika treba da bude registrovano pravno lice. Nudimo kompletne usluge za ZEV.",
    fullDescription: "U skladu sa Zakonom o održavanju zgrada (Službeni glasnik RS br. 101/11), Zajednica etažnih vlasnika treba da bude registrovano pravno lice, ali čak i ako još uvijek nije, stubište treba da je osvijetljeno, čisto, lift treba uredno da funkcioniše…\n\nZato Vam mi nudimo usluge organizacije poslova za Zajednicu etažnih vlasnika – u osnivanju, kako bi ona počela normalno funkcionisati, koordinaciju i savjetovanje u provođenju postupka osnivanja ZEV-a i registraciju ZEV-a pred nadležnim državnim organima.\n\nKnjigovodstvenu podršku obračuna naknada za održavanje zgrade, naplatu naknade, plaćanje obaveza prema isporučiocima usluga i drugim dobavljačima, ćemo zajednički efikasno organizovati od prvog dana.",
    icon: "flaticon-website",
    features: [
      "Osnivanje ZEV-a",
      "Registracija pravnog lica",
      "Obračun naknada za održavanje",
      "Naplata naknade",
      "Plaćanje dobavljača"
    ],
    benefits: [
      "Legalno funkcionisanje ZEV-a",
      "Profesionalno upravljanje",
      "Transparentno poslovanje",
      "Efikasna naplata",
      "Uredno vođenje knjiga"
    ],
    process: [
      "Organizacija skupštine",
      "Donošenje statuta",
      "Registracija ZEV-a",
      "Postavka knjigovodstva",
      "Početak redovnog poslovanja"
    ],
    duration: "15-30 radnih dana",
    price: "Po dogovoru"
  },
  {
    id: 5,
    slug: "vodjenje-poslovnih-knjiga",
    title: "Vođenje poslovnih knjiga",
    shortDescription: "Vaš posao je da ostvarite planirani poslovni rezultat, a naš je da vodimo vaše poslovne knjige ažurno, pravovremeno, stručno i u skladu sa svim propisima.",
    fullDescription: "Vaš posao je da ostvarite planirani poslovni rezultat preduzimajući aktivnosti iz odabrane djelatnosti, a naš je da vodimo vaše poslovne knjige ažurno, pravovremeno, stručno, i da Vas sa tim dijelom posla ne opterećujemo previše.\n\nNaš posao mora da bude sveobuhvatan i kvalitetno uradjen, te u skladu sa tim, znamo da ćemo uspostavom dobre organizacije našeg poslovnog odnosa od početka saradnje, i unapređenjem iste, postići da jedni drugima pomognemo u profesionalnom razvoju i zajedno ostvarimo cilj - da vaša firma stalno raste i razvija se, a mi da je uspješno pratimo i budemo joj pouzdan oslonac.\n\nPokrivamo sve vrste organizacija: privredna društva, udruženja, fondacije, samostalne preduzetnike, zdravstvene ustanove, zajednice etažnih vlasnika.",
    icon: "flaticon-analytics",
    features: [
      "Vođenje glavne knjige",
      "Pomoćne knjige",
      "Dnevnik i analitika",
      "Mesečni izvještaji",
      "Godišnji finansijski izvještaji"
    ],
    benefits: [
      "Ažurno vođenje knjiga",
      "Stručnost i pouzdanost",
      "Usklađenost sa propisima",
      "Redovni izvještaji",
      "Fokus na biznis"
    ],
    process: [
      "Analiza postojeće dokumentacije",
      "Postavljanje sistema",
      "Dnevno knjiženje",
      "Mesečni izvještaji",
      "Godišnji obračun"
    ],
    duration: "Kontinuirano",
    price: "Mjesečna pretplata"
  },
  {
    id: 6,
    slug: "obracun-poreza",
    title: "Obračun poreza i poreske prijave",
    shortDescription: "Obračun direktnih i indirektnih poreza, podnošenje prijava i kontrola poslovanja sa aspekta poreskih propisa zahtijeva ozbiljnost i profesionalizam.",
    fullDescription: "Bez obzira kako ste registrovani i nastupate u poslovnom okruženju, obračun direktnih i indirektnih poreza, podnošenje prijava i kontrola poslovanja sa aspekta poreskih propisa, zahtijeva ozbiljnost i profesionalizam.\n\nPrepustite slobodno nama ovaj dio posla, i dozvolite nam da Vam ukažemo na propuste koje možda uočimo. Mi smo dio vašeg tima, radimo za Vas, i ako nam dozvolite da budemo kontrolori vašeg poslovanja.",
    icon: "flaticon-profile",
    features: [
      "Obračun poreza na dobit",
      "PDV obračuni",
      "Personalni porez",
      "Poreske prijave",
      "Kontrola usklađenosti"
    ],
    benefits: [
      "Tačni obračuni",
      "Pravovremeno plaćanje",
      "Izbjegavanje kazni",
      "Stručna kontrola",
      "Optimizacija poreskog opterećenja"
    ],
    process: [
      "Analiza poslovnih događaja",
      "Obračun poreza",
      "Priprema prijava",
      "Podnošenje prijava",
      "Praćenje plaćanja"
    ],
    duration: "Mjesečno/kvartalno",
    price: "Po složenosti"
  },
  {
    id: 7,
    slug: "poresko-savjetovanje",
    title: "Poresko savjetovanje",
    shortDescription: "U našem timu imamo ljude sa dugogodišnjim praktičnim iskustvom iz oblasti poreza, čije vam usluge stoje na raspolaganju.",
    fullDescription: "U našem timu imamo ljude sa dugogodišnjim praktičnim iskustvom iz oblasti poreza, čije vam usluge stoje na raspolaganju.\n\nDozvolite nam da budemo dio vašeg tima i kontrolori vašeg poslovanja. Naše savjetovanje može značajno uticati na optimizaciju vašeg poreskog opterećenja i izbjegavanje skupih grešaka.",
    icon: "flaticon-marketing",
    features: [
      "Analiza poreske pozicije",
      "Optimizacija poreskog opterećenja",
      "Savjeti o poreskim propisima",
      "Planiranje poreskih obaveza",
      "Podrška pri kontrolama"
    ],
    benefits: [
      "Smanjenje poreskog opterećenja",
      "Izbjegavanje kazni",
      "Stručno mišljenje",
      "Preventivno djelovanje",
      "Dugoročno planiranje"
    ],
    process: [
      "Analiza trenutne situacije",
      "Identifikacija mogućnosti",
      "Priprema strategije",
      "Implementacija rješenja",
      "Kontinuirano praćenje"
    ],
    duration: "Po potrebi",
    price: "Po konsultaciji"
  },
  {
    id: 8,
    slug: "zavrsni-racun",
    title: "Izrada Završnog računa",
    shortDescription: "Završni račun predstavlja završetak poslovne godine i pripremu za novu. Uradićemo sve potrebne kalkulacije i izvještaje u skladu sa zakonskim propisima.",
    fullDescription: "Nadamo se da ćemo sa vama dugo godina slaviti na kraju svake poslovne godine uspješno ostvarenje poslovnih planova, iskazano kroz obračunati rezultat u skladu sa pozitivnim zakonskim propisima i standardima računovodstvene struke.\n\nZavršni račun predstavlja krunski dio naše godišnje saradnje i pripremu za uspješno poslovanje u narednoj godini.",
    icon: "flaticon-website",
    features: [
      "Bilans stanja",
      "Bilans uspjeha",
      "Izvještaj o novčanim tokovima",
      "Napomene uz finansijske izvještaje",
      "Poreska usklađenja"
    ],
    benefits: [
      "Tačan prikaz finansijske pozicije",
      "Usklađenost sa standardima",
      "Podrška za poslovne odluke",
      "Ispunjavanje zakonskih obaveza",
      "Priprema za reviziju"
    ],
    process: [
      "Inventura imovine i obaveza",
      "Zatvaranje poslovnih knjiga",
      "Izrada finansijskih izvještaja",
      "Poreska usklađenja",
      "Finalni pregled i dostava"
    ],
    duration: "Završetak godine",
    price: "Godišnja naknada"
  },
  {
    id: 9,
    slug: "izvjestaji-poslovanje",
    title: "Izvještaji o poslovanju sa analizom poslovanja",
    shortDescription: "Detaljne analize koje brojke iz bilansa pretvaraju u kvalitetne informacije za donošenje poslovnih odluka.",
    fullDescription: "Tek nakon detaljne i adekvatne analize poslovanja prethodnog obračunskog perioda, u poziciji ste da ispravno donosite nove poslovne odluke.\n\nUradićemo za vas Izvještaj o poslovanju u kome će se brojke iz bilansa pretvoriti u izrazito kvalitetne informacije. Pokazaćemo vam šta se sa vašim poslovanjem dešava kroz protok vremena, šta od čega direktno zavisi, i, što je najvažnije, kako se sve te promjene odražavaju na profit firme.",
    icon: "flaticon-analytics",
    features: [
      "Finansijska analiza",
      "Analiza profitabilnosti",
      "Analiza likvidnosti",
      "Analiza aktivnosti",
      "Benchmark analiza"
    ],
    benefits: [
      "Bolje razumijevanje poslovanja",
      "Identifikacija problema",
      "Osnova za planiranje",
      "Povećanje profitabilnosti",
      "Bolje upravljanje resursima"
    ],
    process: [
      "Prikupljanje podataka",
      "Finansijska analiza",
      "Izrada izvještaja",
      "Prezentacija rezultata",
      "Preporuke za poboljšanje"
    ],
    duration: "Mjesečno/kvartalno",
    price: "Po dogovoru"
  },
  {
    id: 10,
    slug: "poslovni-planovi",
    title: "Izrada poslovnih planova",
    shortDescription: "Pretvaramo vaše poslovne ideje u validne dokumente koji mogu biti predstavljeni investitorima, kreditorima ili drugim zainteresovanim stranama.",
    fullDescription: "Recite nam šta je moguće da ostvarite u vašem poslovanju nakon što ste dobro razmotrili razvojnu ideju koju imate, a mi ćemo kroz cifre pokazati kako bi to moglo da izgleda kada se stavi na papir.\n\nUkoliko donesete odluku da ćete ići dalje za ostvarenjem tog poslovnog plana, mi smo tu da vaš plan pretočimo u validan dokument, sa kojim se možete pojaviti pred kreditorima, investitorima ili drugim zainteresovanim eksternim subjektima.\n\nOd pomoći Vam mogu biti partneri našeg Biroa sa zvanjem investicionog menadžera, kod donošenja nekih bitnih odluka za dalji razvoj vašeg poslovanja.",
    icon: "flaticon-profile",
    features: [
      "Analiza tržišta",
      "Finansijske projekcije",
      "Analiza rizika",
      "Strategija razvoja",
      "Investicijski plan"
    ],
    benefits: [
      "Jasna vizija budućnosti",
      "Podrška za finansiranje",
      "Smanjenje rizika",
      "Bolje planiranje resursa",
      "Privlačenje investitora"
    ],
    process: [
      "Analiza poslovne ideje",
      "Istraživanje tržišta",
      "Financijske projekcije",
      "Izrada plana",
      "Prezentacija investitorima"
    ],
    duration: "2-4 sedmice",
    price: "Po složenosti"
  },
  {
    id: 11,
    slug: "komunikacija-banke",
    title: "Komunikacija sa bankama i drugim finansijskim institucijama",
    shortDescription: "Koristite naše iskustvo u komunikaciji sa finansijskim institucijama za postizanje najboljih uslova finansiranja.",
    fullDescription: "Ukoliko Vam treba pomoć prilikom komunikacije sa bankama i drugim finansijskim institucijama, biće nam drago da nas uključite u vaše poslovne sastanke... imamo značajno poslovno iskustvo iz oblasti finansija, stečeno u dužem nizu godina rada u takvim institucijama.\n\nNaše iskustvo može biti ključno za postizanje povoljnijih uslova kreditiranja i drugih finansijskih usluga.",
    icon: "flaticon-marketing",
    features: [
      "Priprema kredite dokumentacije",
      "Pregovaranje uslova",
      "Analiza finansijskih proizvoda",
      "Podrška pri komunikaciji",
      "Praćenje kredita odnosa"
    ],
    benefits: [
      "Bolji uslovi finansiranja",
      "Stručna podrška",
      "Ušteda vremena",
      "Izbjegavanje grešaka",
      "Dugoročni bankarski odnosi"
    ],
    process: [
      "Analiza finansijskih potreba",
      "Priprema dokumentacije",
      "Prezentacija banci",
      "Pregovaranje uslova",
      "Praćenje realizacije"
    ],
    duration: "Po potrebi",
    price: "Po dogovoru"
  },
  {
    id: 12,
    slug: "korespondencija-partneri",
    title: "Korespodencija sa Vašim poslovnim partnerima",
    shortDescription: "Pomoć u komunikaciji sa poslovnim partnerima, posebno kod složenih finansijskih instrumenata i ugovora.",
    fullDescription: "Možda Vaš poslovni partner (dobavljač, kupac...) predlaže neke instrumente naplate, koje ne razumijete baš najbolje (mjenice, bankarske garancije, akreditivi...).\n\nUključite nas na vrijeme, smetati nećemo, a možemo biti od koristi da postignete najkvalitetniji dogovor i da snizite svoje troškove.\n\nNaše iskustvo u različitim finansijskim instrumentima može biti ključno za vaš uspjeh.",
    icon: "flaticon-website",
    features: [
      "Analiza ugovora",
      "Savjeti o instrumentima naplate",
      "Pregovaranje uslova",
      "Pravna analiza",
      "Upravljanje rizikom"
    ],
    benefits: [
      "Bolji ugovori",
      "Smanjenje troškova",
      "Smanjenje rizika",
      "Stručno mišljenje",
      "Zaštićeni interesi"
    ],
    process: [
      "Analiza predloga",
      "Procjena rizika",
      "Preporuke izmjena",
      "Podrška u pregovorima",
      "Finalizacija ugovora"
    ],
    duration: "Po potrebi",
    price: "Po dogovoru"
  },
  {
    id: 13,
    slug: "razvoj-brenda-marketing",
    title: "Razvoj brenda i marketing",
    shortDescription: "Kroz naše poslovne partnere nudimo usluge marketinga i razvoja brenda koji mogu značajno uticati na rast vašeg poslovanja.",
    fullDescription: "Ponudićemo Vam usluge naših poslovnih partnera u oblasti marketinga, ako su dobri nama, moguće je da će biti i vama... organizovaćemo sastanak i garantujemo da će prethodna konstatacija vrlo brzo biti provjerena.\n\nNaši partneri su dokazani profesionalci u oblasti marketinga i razvoja brenda, sa kojima imamo dugogodišnju uspješnu saradnju.",
    icon: "flaticon-analytics",
    features: [
      "Razvoj brenda",
      "Digitalni marketing",
      "Društvene mreže",
      "Web dizajn",
      "Marketinška strategija"
    ],
    benefits: [
      "Povećana prepoznatljivost",
      "Veći broj klijenata",
      "Bolje pozicioniranje",
      "Digitalna prisutnost",
      "Rast prodaje"
    ],
    process: [
      "Analiza trenutne pozicije",
      "Razvoj strategije",
      "Kreiranje brenda",
      "Implementacija kampanje",
      "Praćenje rezultata"
    ],
    duration: "Kontinuirano",
    price: "Po projektu"
  }
];

export default servicesData; 