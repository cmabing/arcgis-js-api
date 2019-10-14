// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define({documentTypes:{arcgis:{caption:"ArcGIS Metadata",editorCaption:"Metatiedot",description:""}},emptyOption:"Tyhjennä",conditionals:{ISO19139A1_ROW4:"Jos metatietojen hierarkiataso on aineistoryhmä, edellytetään maantieteellistä rajauslaatikkoa tai maantieteellistä kuvausta.",ISO19139A1_ROW6:"Aineistoryhmän tunnus tai aineistoryhmän nimi on pakollinen.",ISO19139A1_ROW7:"Jos Muut rajoitukset on valittuna, Muut rajoitukset on pakollinen.",ISO19139A1_ROW9:"Jos soveltamisala ei ole aineistoryhmä tai sarja, tason kuvaus on pakollinen.",ISO19139A1_ROW10_11_12:"Jos soveltamisala on aineistoryhmä tai sarja, jokin seuraavista on pakollinen: lause, prosessin vaihe tai tietolähde.",ISO19139A1_ROW15:"Jos Tarkista pisteen käytettävyys on valittuna, tarkistuspisteen kuvaus on pakollinen.",ISO19139A1_ROW18:"Jos jakelu on kirjattu, muoto tai jakelija/muoto on pakollinen.",INSPIRE_AccessLimitation:" Vähintään yksi lakisääteinen käytön rajoituskoodi tai suojauksen luokituskoodi on pakollinen. (INSPIRE)",INSPIRE_UseLimitation:" Vähintään yksi käyttörajoitus on pakollinen. (INSPIRE)",INSPIRE_ConformanceResult:"Arvojoukkoeheysraportti edellyttää vaatimustenmukaisuuden tulosta. (INSPIRE)",INSPIRE_DomainConsistency:"Arvojoukkoeheyden raportti on pakollinen. (INSPIRE)",INSPIRE_LineageStatement:"Jos soveltamisala on aineistoryhmä tai sarja, alkuperälauseke on pakollinen. (INSPIRE)",FGDC_DescIfTemporal:"Kuvaus on pakollinen ajallisessa laajuudessa. (FGDC)",FGDC_Keywords:"Aihe, tunniste tai teema-avainsana on pakollinen. (FGDC)",FGDC_Reports:"Täydellisyyden puuttuvan tiedon raportti ja käsitteellinen eheysraportti ovat pakollisia. (FGDC)",FGDC_Temporal:"Vähintään yksi ajallinen laajuus on pakollinen. (INSPIRE)",NAP_Contact:"Osoite/Jakelupiste, puhelinnumero tai online-resurssi/URL-osoite on pakollinen. (NAP)",GEN_BoundingBox:"Järjestelmä edellyttää vähintään yhtä maantieteellistä rajauslaatikkoa.",GEN_ReportResult:"Joko vaatimustenmukaisuuden tulos tai määrällinen tulos on pakollinen.",minLessThanMax:"Vähimmäisarvon on oltava pienempi kuin enimmäisarvo."},hints:{integerGreaterThanZero:"(kirjoita kokonaisluku, joka on suurempi kuin 0)",integerGreaterThanOne:"(kirjoita kokonaisluku, joka on suurempi kuin 1)",integer0To100:"(kirjoita kokonaisluku väliltä 0–100)",maxScale:"(kirjoita nollaa suurempi kokonaisluku, esimerkiksi 50 000)",minScale:"(kirjoita nollaa suurempi kokonaisluku, esimerkiksi 150 000 000)",number0To100:"(kirjoita numero väliltä 0–100)",number0To360:"(kirjoita numero väliltä 0–360)",number90To90:"(kirjoita numero väliltä -90–90)",listOfDoubles:"(kirjoita numeroluettelo ja erota ne välilyönnein)"},htmlEditor:{button:"Muokkaa..."},sections:{overview:"Yleiskuvaus",esri:"Esri",resource:"Resurssi",reference:"Viite",content:"Sisältö",distribution:"Jakelu",quality:"Laatu",eainfo:"Kentät",representation:"Esitystapa",metadata:"Metatiedot"},metadataStyle:{caption:"ArcGIS-metatietojen tyyli",changeButton:"Muuta...",dialogTitle:"Valitse metatietojen tyyli",updating:"Päivitetään dokumenttia...","Item Description":"Kohteen kuvaus","FGDC CSDGM Metadata":"FGDC CSDGM metatiedot","ISO 19139 Metadata Implementation Specification":"ISO 19139 -metatietojen toteutusmääritys","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 -metatietojen toteutusmääritys, GML3.2","INSPIRE Metadata Directive":"INSPIRE-metatietojen direktiivi","North American Profile of ISO19115 2003":"Pohjois-Amerikan profiili standardille ISO19115 2003"},aggrInfo:{caption:"Koontitiedot",datasetHint:"Aineistoryhmän tunnus tai aineistoryhmän nimi on pakollinen.",aggrDSIdent:"Aineistoryhmän tunnus",aggrDSName:"Aineistoryhmän nimi"},appSchInfo:{caption:"Sovelluksen rakenne",asName:"Skeeman nimi",asSchLang:"Rakenteen kieli",asCstLang:"Rajauskieli",asAscii:"ASCII",asGraFile:"Grafiikkatiedosto",asGraFile_src:"Grafiikkatiedoston lähde",asSwDevFile:"Ohjelmistokehityksen tiedosto",asSwDevFile_src:"Ohjelmistokehityksen tiedostolähde",asSwDevFiFt:"Ohjelmistokehityksen tiedostomuoto"},citation:{caption:"Viitetiedot",section:{titlesAndDates:"Otsikot ja päivämäärät",links:"URL-osoitteet",identifiers:"Tunnisteet",presentation:"Muoto",other:"Muu",edition:"Versio",series:"Sarja"},conditionalDate:{caption:"Viitetietojen päivämäärä",msg:"Jokin seuraavista on pakollinen: luontipäivämäärä, julkaisupäivämäärä tai  korjauspäivämäärä.",msg_nap:"Viitetietojen päivämäärä on pakollinen."},resTitle:"Otsikko",resAltTitle:"Vaihtoehtoinen otsikko",collTitle:"Kokoelman otsikko",date:{createDate:"Luontipäivämäärä",pubDate:"Julkaisupäivämäärä",reviseDate:"Korjauspäivämäärä",notavailDate:"Päivämäärä ei käytettävissä",inforceDate:"Voimassa oleva päivämäärä",adoptDate:"Käyttöönottopäivämäärä",deprecDate:"Käytöstä poistamisen päivämäärä",supersDate:"Ohitettu päivämäärä"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Tunnus",identCode:"Koodi",identAuth:"Viranomaisen viitetiedot"},resEd:"Versio",resEdDate:"Version päivämäärä",datasetSeries:{seriesName:"Nimi",issId:"Julkaisu",artPage:"Sivu"},otherCitDet:"Muut tiedot",contactCaption:"Viitetietojen yhteyshenkilö"},cntAddress:{caption:"Osoite",delPoint:"Jakelupiste",city:"kaupunki",adminArea:"Hallinnollinen alue",postCode:"Postinumero",country:"Maa",eMailAdd:"Sähköposti",addressType:{caption:"Osoitetyyppi",postal:"Postinumero",physical:"Fyysinen",both:"Molemmat"}},cntOnlineRes:{caption:"Online-resurssi",linkage:"URL-osoite",protocol:"Protokolla",appProfile:"Sovelluksen profiili",orName:"Nimi",orDesc:"Kuvaus"},cntPhone:{caption:"Puhelin",voiceNum:"Ääni",faxNum:"Faksi",tddtty:"TDD/TTY?"},codeRef:{caption:"Tunnus",identCode:"Koodi",idCodeSpace:"Koodiavaruus",idVersion:"Versio",identAuth:"Viranomaisen viitetiedot"},constraints:{caption:"Rajoitukset",useLimit:"Käytön rajoitus",general:{caption:"Yleinen"},legal:{caption:"Laillinen",accessConsts:"Käyttörajoitukset",useConsts:"Käyttörajoitukset",othConsts:"Muut rajoitukset"},security:{caption:"Security",classSys:"Luokitusjärjestelmä",userNote:"Käyttäjän huomautus",handDesc:"Käsittelyn kuvaus"}},contInfo:{caption:"Tietosisältö",section:{CovDesc:"Kattavuuden kuvaus",ImgDesc:"Kuvan kuvaus",FetCatDesc:"Kohdeluettelo"},attDesc:"Ominaisuustiedon kuvaus",covDim:{caption:"Alueet tai kaistat",seqID:"Järjestystunnus",seqIDType:"Järjestystunnustyyppi",dimDescrp:"Kuvaaja"},RangeDim:{caption:"Alueen ulottuvuus"},Band:{caption:"Kaista",minVal:"Vähimmäisarvo",maxVal:"Enimmäisarvo",valUnit:"Arvoyksiköt",pkResp:"Huippuvaste",bitsPerVal:"Bittien määrä arvoa kohti",toneGrad:"Sävyn liukuväri",sclFac:"Mittakaavakerroin",offset:"Poikkeama"},CovDesc:{caption:"Kattavuuden kuvaus",section:{description:"Kuvaus",rangesAndBands:"Alueet ja kaistat"}},ImgDesc:{caption:"Kuvan kuvaus",section:{description:"Kuvaus",rangesAndBands:"Alueet ja kaistat"},illElevAng:"Valaistuksen nousukulma",illAziAng:"Valaistuksen suuntakulma",cloudCovPer:"Pilvipeitteen prosenttiosuus",cmpGenQuan:"Pakkauslaatu",trianInd:"Kolmiomittausosoitin?",radCalDatAv:"Radiometrisen kalibrointiaineiston käytettävyys?",camCalInAv:"Kameran kalibrointitietojen käytettävyys?",filmDistInAv:"Filmivääristymän tietojen saatavuus?",lensDistInAv:"Linssivääristymän tietojen saatavuus?",imagQuCode:"Laadun koodi",prcTypCde:"Prosessitason koodi"},FetCatDesc:{caption:"Kohdeluettelo",section:{description:"Kuvaus",featureTypes:"Kohdetyypit",citation:"Viitetiedot"},compCode:"ISO 19110 -standardin mukainen",incWithDS:"Included With Dataset?",catCitation:"Kohdeluettelon viitetiedot",catFetTyps:{caption:"Kohdetyyppi",genericName:"Nimi",codeSpace:"Koodiavaruus"}}},contact:{caption:"Yhteyshenkilö",section:{name:"Yhteyshenkilön nimi",info:"Yhteystiedot",hoursAndInstructions:"Tunnit ja ohjeet"},conditionalName:{caption:"Yhteyshenkilön nimi",msg:"Jokin seuraavista on pakollinen: henkilön nimi, organisaation nimi tai aseman nimi.",msg_fgdc:"Jokin seuraavista on pakollinen: henkilön nimi tai organisaation nimi."},rpIndName:"Henkilön nimi",rpOrgName:"Organisaation nimi",rpPosName:"Aseman nimi",rpCntInfo:"Yhteystiedot",cntHours:"Palvelutunnit",cntInstr:"Yhteydenotto-ohjeet"},distInfo:{caption:"Jakelutiedot",section:{format:"Muotoile",distributor:"Jakelija",transfer:"Siirron asetukset"},distFormat:{caption:"Jakeluformaatti",formatName:"Muotonimi",formatVer:"Muodon versio",formatAmdNum:"Muutoksen numero",formatSpec:"Määritys",fileDecmTech:"Pakkauksen purkutekniikka",formatInfo:"Tiedon sisältö"},distributor:{caption:"Jakelija"},distTranOps:{caption:"Digitaalisen siirron asetukset",section:{unitsAndSize:"Yksiköt"},unitsODist:"Jakelun yksiköt",transSize:"Siirron koko",offLineMed:{caption:"Offline-media",medDensity:"Tiheys",medDenUnits:"Tiheysyksiköt",medVol:"Tilavuudet",medNote:"Median huomautus"}},distorOrdPrc:{caption:"Tilausprosessi",resFees:"Maksut",planAvDtTm:"Päivämäärä on käytettävissä",planAvTmPd:{caption:"Käytettävissä oleva aikaväli",tmBegin:"Aloituspäivämäärä/-aika",tmEnd:"Lopetuspäivämäärä/-aika"},ordInstr:"Tilausohjeet",ordTurn:"Läpimeno"}},dqInfo:{caption:"Aineiston laatu",section:{scope:"Soveltamisala",report:"Raportti",lineage:"Alkuperä"},dqScope:{section:{level:"Taso",extent:"Laajuus"},scpLvl:"Soveltamisalan taso",scpLvlDesc:"Tason kuvaus",scpExt:"Soveltamisalan laajuus"},report:{section:{measure:"Mittaus",evaluation:"Evaluointi",result:"Tulos",conformance:"Vaatimustenmukaisuus"},measDesc:"Mittauksen kuvaus",measName:"Mittauksen nimi",measDateTm:"Mittauspäivämäärä",measId:"Mitan tunnus",evalMethDesc:"Arviointimenetelmä",evalProc:"Toimintosarjan viitetiedot",ConResult:{caption:"Vaatimustenmukaisuuden tulos",conExpl:"Selitys",conSpec:"Määritys",conPass:{caption:"Aste",_1:"Vaatimustenmukainen",_0:"Ei-vaatimustenmukainen"}},QuanResult:{caption:"Määrällinen tulos",quanVal:"Arvo",quanValType:"Arvon tyyppi",quanValUnit:"Arvoyksiköt",errStat:"Virhetilasto"}},dataLineage:{section:{statement:"Lause",dataSource:"Data Source",prcStep:"Prosessin vaihe"},statement:"Alkuperälauseke",dataSource:{caption:"Data Source",section:{description:"Kuvaus",srcRefSys:"Viitejärjestelmä",srcExt:"Laajuus",srcCitatn:"Viitetiedot"},srcDesc:"Lähteen kuvaus",srcScale:{rfDenom:"Mittakaavan nimittäjä"},srcRefSys:"Lähteen viitejärjestelmä",srcExt:"Lähteen laajuus",srcCitatn:"Lähteen viitetiedot"},prcStep:{caption:"Prosessin vaihe",section:{description:"Kuvaus",stepProc:"Käsittelijä",stepSrc:"Data Source"},stepDesc:"Prosessin kuvaus",stepRat:"Perusteet",stepDateTm:"Prosessin vaiheen päivämäärä",stepProc:"Käsittelijä",stepSrc:"Data Source"}}},eainfo:{caption:"Kokonaisuuden ja ominaisuustiedon tiedot",section:{detailed:"Yksityiskohdat",overview:"Yleiskuvaus"},detailed:{caption:"Kokonaisuuden ja ominaisuustiedon tiedot",section:{enttyp:"Kokonaisuus",attr:"Ominaisuustiedot"},enttyp:{caption:"Kokonaisuuden tyyppi",enttypl:"Label",enttypt:"Kohde",enttypc:"Lukumäärä",enttypd:"Määritys",enttypds:"Määrityksen lähde"},attr:{caption:"Ominaisuustieto",section:{description:"Kuvaus",value:"Arvo",domain:"Arvoalue"},attrlabl:"Label",attalias:"Alias",attrdef:"Määritys",attrdefs:"Määrityksen lähde",attrtype:"Tyyppi",attwidth:"Leveys",atprecis:"Tarkkuus",attscale:"Mittakaava",atindex:"Indeksoitu",attrvai:{attrva:"Arvon selitys",attrvae:"Arvon tarkkuus"},attrmfrq:"Arvon mittaustiheys",begdatea:"Arvojen alkupäivämäärä",enddatea:"Arvojen lopetuspäivämäärä",attrdomv:{caption:"Arvoalue",edom:{caption:"Lueteltu",edomv:"Arvo",edomvd:"Määritys",edomvds:"Määrityksen lähde"},rdom:{caption:"Vaihteluväli",rdommin:"Vähimmäisarvo",rdommax:"Enimmäisarvo",rdommean:"Keskiarvo",rdomstdv:"Keskihajonta",attrunit:"Yksiköt",attrmres:"Mittauksen resoluutio"},codesetd:{caption:"Koodisto",codesetn:"Nimi",codesets:"Lähde"},udom:{caption:"Ei-esitettävissä oleva"}}}},overview:{caption:"Yleiskuvaus",eaover:"Summary",eadetcit:"Viitetiedot"}},extent:{caption:"Laajuus",section:{description:"Kuvaus",geographic:"Maantieteellinen",temporal:"Aika",vertical:"Pysty"},exDesc:"Laajuuden kuvaus",geoEle:{caption:"Maantieteellinen laajuus",GeoBndBox:{caption:"Rajauslaatikko",esriExtentType:"Käytetäänkö laajuutta hakuun?",exTypeCode:"Sisältääkö laajuus resurssin?",westBL:"Länteen rajaava pituusaste",eastBL:"Itään rajaava pituusaste",southBL:"Etelään rajaava leveysaste",northBL:"Pohjoiseen rajaava leveysaste"},GeoDesc:{caption:"Maantieteellinen kuvaus",exTypeCode:"Sisältääkö kuvaus resurssin?",identCode:"Koodi"}},tempEle:{caption:"Ajallinen laajuus",TM_Period:"Ajanjakso",TM_Instant:"Aikahetki",tmPosition:"Päivämäärä",tmBegin:"Aloituspäivämäärä",tmEnd:"Lopetuspäivämäärä"},vertEle:{caption:"Pystysuunnan laajuus",vertMinVal:"Vähimmäisarvo",vertMaxVal:"Enimmäisarvo"}},graphOver:{caption:"Grafiikan selaus",bgFileName:"Grafiikan URL-osoitteen selaus",bgFileDesc:"Grafiikan kuvauksen selaus",bgFileType:"Grafiikkatiedoston tyypin selaus"},keywords:{caption:"Avainsanat",section:{topicCategory:"Aihe",searchKeys:"Tunnisteet",themeKeys:"Teema",placeKeys:"Place",tempKeys:"Aika",discKeys:"Toimiala",stratKeys:"Kerrostuma",productKeys:"Tuote",subTopicCatKeys:"Ala-aihe",otherKeys:"Muu"},delimited:"Avainsanat",searchKeys:"Tunnisteet",themeKeys:"Teema-avainsanat",placeKeys:"Paikka-avainsanat",tempKeys:"Aika-avainsanat",discKeys:"Toimialan avainsanat",stratKeys:"Kerrostuma-avainsanat",productKeys:"Tuoteavainsanat",subTopicCatKeys:"Ala-aiheen avainsanat",otherKeys:"Muut avainsanat",thesaName:"Hakusanaluettelon viitetiedot",thesaLang:"Hakusanaluettelon kieli"},locales:{caption:"Alueet",locale:"Alue",resTitle:"Otsikko",idAbs:"Summary"},maintenance:{caption:"Ylläpito",section:{frequency:"Toistoväli",scope:"Soveltamisala",note:"Huomautus"},usrDefFreq:"Mukautettu tiheys",dateNext:"Seuraava päivitys",maintScp:"Päivitä soveltamisala",upScpDesc:{caption:"Soveltamisalan kuvaus",attribSet:"Ominaisuustiedot",attribIntSet:"Ominaisuustiedon ilmentymät",featSet:"Features",featIntSet:"Kohteen esiintymät",datasetSet:"Aineistoryhmä",other:"Muut esiintymät"},maintNote:"Ylläpitohuomautus",maintCont:"Ylläpidon yhteyshenkilö"},metadata:{section:{profile:"Profiili",details:"Soveltamisala"},mdFileID:"Tiedoston tunnus",mdParentID:"Ylätason tunnus",datasetURI:"Aineistoryhmän URI-osoite",dataSetFn:"Aineistoryhmän toiminto",mdDateSt:"Metadatan päivämäärä",mdLang:"Metadatan kieli",mdChar:"Merkistö",mdHrLv:"Hierarkiataso",mdHrLvName:"Hierarkiatason nimi",mdContact:"Metadatan yhteystiedot",mdMaint:"Metadatan ylläpito",mdConst:"Metadatan rajoitukset"},porCatInfo:{caption:"Kuvauksen viitetiedot"},refSysInfo:{caption:"Koordinaatistotieto"},resource:{section:{citation:"Viitetiedot",details:"Yksityiskohdat",description:"Kuvaus",keywords:"Avainsanat",status:"Tila",resolution:"Resoluutio",representation:"Esitystapa",browse:"Grafiikan selaus",format:"Muotoile",usage:"Käyttö",aggregateInfo:"Kooste",additional:"Lisä"},idAbs:"Kuvaus (tiivistelmä)",idPurp:"Yhteenveto (tarkoitus)",suppInfo:"Lisätiedot",idCredit:"Krediitit",envirDesc:"Käsittely-ympäristö",dataLang:"Resurssin kieli",dataExt:"Resurssin laajuus",idPoC:"Yhteystaho",resMaint:"Resurssin ylläpito",resConst:"Resurssin rajoitukset",dsFormat:"Resurssin muoto",dataScale:{caption:"Aineiston mittakaava",equScale:"Mittakaavan resoluutio",scaleDist:"Etäisyyden resoluutio",scaleDist_value:"Etäisyys"},idSpecUse:{caption:"Resurssin käyttö",specUsage:"Tietty käyttö",usageDate:"Käyttöpäivämäärä",usrDetLim:"Rajoitukset",usrCntInfo:"Käytön yhteystieto"}},service:{caption:"Palvelu",svType:"Palvelutyyppi",svType_Name:"Nimi",svAccProps:"Käyttöominaisuudet",svCouplRes:{caption:"Liitetty resurssi",svOpName:"Toiminnon nimi",svResCitId:"Resurssin tunnus"},svCoupleType:"Liitäntätyyppi"},scaleRange:{caption:"Mittakaavan vaihteluväli",maxScale:"Enimmäismittakaava",minScale:"Vähimmäismittakaava"},spatRepInfo:{caption:"Paikkatiedon esitys",section:{dimension:"Mitoitus",parameters:"Parametrit"},numDims:"Ulottuvuuksien määrä",tranParaAv:"Tarkistetaanko siirtoparametrien käytettävyys?",axisDimension:{caption:"Mitoitus",dimSize:"Size",dimResol:{caption:"Resoluutio",_value:"Resoluution arvo",uom:"Resoluution yksiköt"}},VectSpatRep:{caption:"Vektori",geometObjs:"Geometriset objektit",geoObjCnt:"Objektien määrä"},GridSpatRep:{caption:"Ruudukko"},Georect:{caption:"Oikaistu",section:{centerPoint:"Keskipiste",cornerPts:"Kulmapisteet"},chkPtAv:"Tarkistetaanko pisteen käytettävyys?",chkPtDesc:"Tarkistuspisteen kuvaus",ptInPixel:"Pikselin piste",transDimDesc:"Siirron ulottuvuuden kuvaus",transDimMap:"Siirron ulottuvuuden kohdistus",cornerPts:{caption:"Kulmapiste",pos:"Sijainti",gmlDesc:"Kuvaus",gmlDescRef:"Viite",gmlIdent:"Tunnus",codeSpace:"Tunnuksen koodiavaruus"}},Georef:{caption:"Georeferoitava",ctrlPtAv:"Tarkistetaanko kontrollipisteen käytettävyys?",orieParaAv:"Tarkistetaanko suuntaparametrin käytettävyys?",orieParaDs:"Suuntaparametrin kuvaus",georefPars:"Georeferoidut parametrit",paraCit:"Parametrin viitetiedot"},Indref:{caption:"Epäsuora"}},booleanOptions:{_false:"Ei",_true:"Kyllä"},codelist:{CountryCode:"Maa",LanguageCode:"Kieli",MonetaryUnits:"Rahayksiköt",MonetaryUnits_empty:"Ei yleistä valuuttaa",PresentationForm:"FGDC-paikkatietoaineiston esityslomake",CI_PresentationFormCode:"Esitysmuoto",CI_RoleCode:"Rooli",CI_OnLineFunctionCode:"Toiminto",IMS_ContentType:"Sisältötyyppi",DQ_ElementDimension:"Mitoitus",DQ_ElementType:"Raporttityyppi",DQ_EvaluationMethodTypeCode:"Arvioinnin tyyppi",DS_AssociationTypeCode:"Yhteyden tyyppi",DS_InitiativeTypeCode:"Aloitteen tyyppi",LI_SourceType:"Lähdetyyppi",MD_CellGeometryCode:"Solun geometria",MD_CharacterSetCode:"Merkistö",MD_ClassificationCode:"Luokitus",MD_CoverageContentTypeCode:"Sisältötyyppi",MD_DimensionNameTypeCode:"Ulottuvuustyyppi",MD_GeometricObjectTypeCode:"Geometrisen objektin tyyppi",MD_ImagingConditionCode:"Kuvantamistila",MD_MaintenanceFrequenceCode:"Päivitysväli",MD_MediumFormatCode:"Muodon koodi",MD_MediumNameCode:"Median nimi",MD_PixelOrientationCode:"Pikselin suunta",MD_ProgressCode:"Tila",MD_RestrictionCode:"Rajoituskoodi",MD_ScopeCode:"Soveltamisala",MD_SpatialRepresentationTypeCode:"Paikkatiedon esitystyyppi",MD_TopicCategoryCode:"Aiheluokka",MD_TopologyLevelCode:"Topologian taso",RS_Dimension:"Mitoitus",SV_CouplingType:"Liitäntätyyppi",UCUM:"Yksiköt",UCUM_Length:"Etäisyyden yksiköt"}});