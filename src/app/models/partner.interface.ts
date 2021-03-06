export interface Partner{
    institution:string,
    acronym : string,
    name: string,
    type:string,
    country: string,
    city:string,
    website:string
}

export interface Country {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         Region;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number | null;
    gini:           number | null;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    null | string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           null | string;
}

 interface Currency {
    code:   null | string;
    name:   null | string;
    symbol: null | string;
}

 interface Language {
    iso639_1:   null | string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

 enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Asia = "Asia",
    Empty = "",
    Europe = "Europe",
    Oceania = "Oceania",
    Polar = "Polar",
}

 interface RegionalBloc {
    acronym:       Acronym;
    name:          Name;
    otherAcronyms: OtherAcronym[];
    otherNames:    OtherName[];
}

 enum Acronym {
    Al = "AL",
    Asean = "ASEAN",
    Au = "AU",
    Cais = "CAIS",
    Caricom = "CARICOM",
    Cefta = "CEFTA",
    Eeu = "EEU",
    Efta = "EFTA",
    Eu = "EU",
    Nafta = "NAFTA",
    Pa = "PA",
    Saarc = "SAARC",
    Usan = "USAN",
}

 enum Name {
    AfricanUnion = "African Union",
    ArabLeague = "Arab League",
    AssociationOfSoutheastAsianNations = "Association of Southeast Asian Nations",
    CaribbeanCommunity = "Caribbean Community",
    CentralAmericanIntegrationSystem = "Central American Integration System",
    CentralEuropeanFreeTradeAgreement = "Central European Free Trade Agreement",
    EurasianEconomicUnion = "Eurasian Economic Union",
    EuropeanFreeTradeAssociation = "European Free Trade Association",
    EuropeanUnion = "European Union",
    NorthAmericanFreeTradeAgreement = "North American Free Trade Agreement",
    PacificAlliance = "Pacific Alliance",
    SouthAsianAssociationForRegionalCooperation = "South Asian Association for Regional Cooperation",
    UnionOfSouthAmericanNations = "Union of South American Nations",
}

 enum OtherAcronym {
    Eaeu = "EAEU",
    Sica = "SICA",
    Unasul = "UNASUL",
    Unasur = "UNASUR",
    Uzan = "UZAN",
}

 enum OtherName {
    AccordDeLibre??changeNordAm??ricain = "Accord de Libre-??change Nord-Am??ricain",
    AlianzaDelPac??fico = "Alianza del Pac??fico",
    CaribischeGemeenschap = "Caribische Gemeenschap",
    Communaut??Carib??enne = "Communaut?? Carib??enne",
    ComunidadDelCaribe = "Comunidad del Caribe",
    J??miAtAdDuwalAlArab??yah = "J??mi??at ad-Duwal al-??Arab??yah",
    LeagueOfArabStates = "League of Arab States",
    SistemaDeLaIntegraci??nCentroamericana = "Sistema de la Integraci??n Centroamericana,",
    SouthAmericanUnion = "South American Union",
    TratadoDeLibreComercioDeAm??ricaDelNorte = "Tratado de Libre Comercio de Am??rica del Norte",
    UmojaWaAfrika = "Umoja wa Afrika",
    UnieVanZuidAmerikaanseNaties = "Unie van Zuid-Amerikaanse Naties",
    UnionAfricaine = "Union africaine",
    Uni??oAfricana = "Uni??o Africana",
    Uni??oDeNa????esSulAmericanas = "Uni??o de Na????es Sul-Americanas",
    Uni??nAfricana = "Uni??n Africana",
    Uni??nDeNacionesSuramericanas = "Uni??n de Naciones Suramericanas",
    ?????????????????????????????? = "?????????????? ????????????????",
    ?????????????????????????????????? = "?????????? ?????????? ??????????????",
}

 interface Translations {
    de: null | string;
    es: null | string;
    fr: null | string;
    ja: null | string;
    it: null | string;
    br: string;
    pt: string;
    nl: null | string;
    hr: null | string;
    fa: string;
}
