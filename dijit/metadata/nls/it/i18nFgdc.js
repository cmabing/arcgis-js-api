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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Nessuno",notComplete:"Non completato",other:"Altro",present:"Presente",unknown:"Sconosciuto",unpublishedMaterial:"Materiale non pubblicato"},hints:{integerGreaterThanOne:"(immettere un intero > 1)",integer0To100:"(Immettere un intero 0..100)"},citeinfo:{caption:"Informazioni citazione",origin:"Creatore",pubdate:"Data di Pubblicazione",pubtime:"Ora di pubblicazione",title:"Titolo",edition:"Edizione",geoform:{caption:"Modulo di Presentazione dei Dati Geospatial",atlas:"Atlante",audio:"Audio",diagram:"Diagramma",sDocument:"Documento",globe:"Globo",map:"Mappa",model:"Modello",multiMediaPresentation:"Presentazione multimediale",profile:"Profilo",rasterDigitalData:"Dati digitali raster",remoteSensingImage:"Immagine di telerilevamento",section:"Sezione",spreadsheet:"Foglio elettronico",tabularDigitalData:"Dati digitali tabulari",vectorDigitalData:"Dati digitali vettoriali",video:"Video",view:"Visualizzazione"},serinfo:{caption:"Informazioni serie",sername:"Nome serie",issue:"Identificazione problema"},pubinfo:{caption:"Informazioni sulla pubblicazione",pubplace:"Luogo di pubblicazione",publish:"Editore"},othercit:"Altri dettagli citazione",onlink:"Collegamenti online (URL)"},cntinfo:{caption:"Informazioni di contatto",section:{primary:"Primario",phoneAndEmail:"Telefono ed e-mail",hoursAndInstructions:"Ore ed istruzioni"},cntorgp:{caption:"Per organizzazione",cntorg:"Organizzazione",cntper:"Persona"},cntperp:{caption:"Per persona",cntper:"Persona",cntorg:"Organizzazione"},cntpos:"Posizione",cntaddr:{caption:"Indirizzo",addrtype:{caption:"Tipo indirizzo",mailing:"Posta",physical:"Fisico",mailingAndPhysical:"Posta elettronica e fisica"},address:"Indirizzo",city:"Città",state:"Stato",postal:"Codice postale",country:"Paese"},cntvoice:"Voce",cnttdd:"Telefono TDD/TTY (per persone con problemi di udito)",cntfax:"Fax",cntemail:"Indirizzo e-mail",hours:"Ore",cntinst:"Istruzioni"},dataqual:{caption:"Informazioni sulla qualità dei dati",section:{attributeAccuracy:"Precisione attributo",logicalConsistency:"Coerenza logica",completeness:"Completezza",positionalAccuracy:"Precisione di posizionamento",lineage:"Lineage",cloudCover:"Copertura nubi"},attracc:{caption:"Precisione attributo",attraccr:"Report sulla precisione degli attributi",qattracc:{caption:"Valutazione pressione attributo quantitativa",attraccv:"Valore precisione attributo",attracce:"Spiegazione della precisione degli attributi"}},logic:"Report di coerenza logica",complete:"Report sulla completezza",posacc:"Precisione di posizionamento",horizpa:{caption:"Precisione di posizionamento orizzontale",horizpar:"Report sulla precisione di posizionamento orizzontale",qhorizpa:{caption:"Valutazione precisione di posizionamento orizzontale quantitativa",horizpav:"Valore precisione di posizionamento orizzontale",horizpae:"Spiegazione della precisione di posizionamento orizzontale"}},vertacc:{caption:"Precisione di posizionamento verticale",vertaccr:"Report sulla precisione di posizionamento verticale",qvertpa:{caption:"Valutazione precisione quantitativa posizionamento verticale",vertaccv:"Valore precisione di posizionamento verticale",vertacce:"Spiegazione della precisione di posizionamento verticale"}},lineage:{caption:"Lineage"},srcinfo:{caption:"Informazioni sull'origine",srccite:"Citazione origine",srcscale:"Denominazione del dato sorgente per la scala",typesrc:{caption:"Tipo di supporto di origine",paper:"Carta",stableBaseMaterial:"Materiale di base stabile",microfiche:"Microfiche",microfilm:"Microfilm",audiocassette:"Cassetta audio",chart:"Grafico",filmstrip:"Pellicola",transparency:"Trasparenza",videocassette:"Videocassetta",videodisc:"Disco video",videotape:"Videoregistratotore",physicalModel:"Modello fisico",computerProgram:"Programma per computer",disc:"Disco",cartridgeTape:"Nastro cartuccia",magneticTape:"Nastro magnetico",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Lavagna elettronica",electronicMailSystem:"Sistema di posta elettronica"},srctime:"Periodo di tempo di origine del contenuto",srccurr:"Riferimento attualità origine",srccitea:"Abbreviazione citazione origine",srccontr:"Contributo di origine"},procstep:{caption:"Passaggio processo",procdesc:"Descrizione processo",srcused:"Abbreviazione citazione utilizzata origine",procdate:"Data processo",proctime:"Ora processo",srcprod:"Abbreviazione citazione prodotta origine",proccont:"Contatto processo"},cloud:"Copertura nubi"},distinfo:{caption:"Informazioni di distribuzione",section:{distributor:"Distributore",description:"Descrizione",orderProcess:"Processo d'ordine",prerequisites:"Prerequisiti",availability:"Disponibilità"},distrib:"Distributore",resdesc:{caption:"Descrizione risorsa",liveData:"Mappe e dati in tempo reale",downloadableData:"Dati scaricabili",offlineData:"Dati offline",staticMapImages:"Immagini mappa statica",sDocument:"Altri documenti",application:"Applicazioni",geographicService:"Servizi geografici",clearingHouse:"Fornitori di servizi di accesso a terze parti",mapFiles:"File di mappa",geographicActivies:"Attività geografiche"},distliab:"Dichiarazione di responsabilità della distribuzione",custom:"Processo d'ordine personalizzato",techpreq:"Prerequisiti tecnici",availabl:"Disponibilità"},eainfo:{caption:"Informazioni su entità e attributi",overview:"Descrizione panoramica",eaover:"Panoramica di entità e attributi",eadetcit:"Citazione dettagli attributo ed entità"},idinfo:{caption:"Informazioni sull'identificazione",section:{timeAndStatus:"Ora e stato",constraints:"Vincoli",contact:"Contatto",additional:"Aggiuntiva"},citeinfo:"Citazione",descript:{caption:"Descrizione",sAbstract:"Riassunto",purpose:"Scopo",supplinf:"Informazioni supplementari"},timeperd:{caption:"Periodo di contenimento",current:{caption:"Riferimento attualità",groundCondition:"Condizione base",publicationDate:"Data di Pubblicazione"}},status:{caption:"Stato",progress:{caption:"Avanzamento",complete:"Completato",inWork:"A lavoro",planned:"Pianificato"},update:{caption:"Frequenza manutenzione e aggiornamento",continual:"Continuo",daily:"Ogni giorno",weekly:"Ogni settimana",monthly:"Ogni mese",annually:"Annuale",unknown:"Sconosciuto",asNeeded:"In base alle necessità",irregular:"Irregolare",nonePlanned:"Nessuna pianificazione"}},spdom:{caption:"Estensione",bounding:{caption:"Coordinate confine",westbc:"Longitudine confine occidentale",eastbc:"Longitudine confine orientale",northbc:"Latitudine confine settentrionale",southbc:"Latitudine confine meridionale"}},keywords:{caption:"Parole chiave",theme:"Tema",place:"Posiziona",stratum:"Strato",temporal:"Temporale",thesaursus:"Thesaurus associato",delimited:"Parole chiave",themektIsoTopicCategory:"Argomento ISO...",themektIsoTopicDialog:"Argomento ISO",placektGnis:"Sistema di informazioni nomi geografici"},accconst:"Vincoli di accesso",useconst:"Vincoli d'uso",ptcontac:"Punto di contatto per la risorsa",browse:{caption:"Grafico di esplorazione",browsen:"URL del grafico di esplorazione",browsed:"Descrizione file grafico di esplorazione",browset:"Tipo file grafico di esplorazione"},datacred:"Riconoscimenti dataset",secinfo:{caption:"Informazioni sulla sicurezza",secsys:"Sistema di classificazione della sicurezza",secclass:{caption:"Classificazione di sicurezza",topSecret:"Top secret",secret:"Segreto",confidential:"Riservato",restricted:"Limitato",unclassified:"Senza classificazione",sensitive:"Sensibile"},sechandl:"Descrizione della gestione della sicurezza"},sNative:"Ambiente dataset nativo",crossref:"Riferimento incrociato"},metadata:{idinfo:"Identificazione",dataqual:"Qualità",spdoinfo:"Organizzazione dati spaziali",spref:"Riferimento spaziale",eainfo:"Entità e attributo",distinfo:"Distribuzione",metainfo:"Metadati"},metainfo:{caption:"Informazioni sui metadata",section:{dates:"Date dei metadati",contact:"Contatto metadati",standard:"Standard metadati",additional:"Aggiuntiva"},metd:"Data del Matadati",metrd:"Data revisione metadata",metfrd:"Data di revisione futura dei metadata",metstdn:"Nome standard dei metadati",metstdv:"Versione standard dei metadata",metac:"Vincoli di accesso ai metadata",metuc:"Vincoli di utilizzo dei metadata",metsi:{caption:"Informazioni sulla sicurezza dei metadata",metscs:"Sistema di classificazione della sicurezza dei metadata",metsc:"Classificazione di sicurezza dei metadati",metshd:"Descrizione della gestione della sicurezza dei metadati"}},spref:{caption:"Informazioni di riferimento spaziale",horizsys:{caption:"Sistema di coordinate orizzontale",geograph:{caption:"Geografico",latres:"Risoluzione latitudine",longres:"Risoluzione longitudine",geogunit:{caption:"Unità coordinate geografiche",decimalDegrees:"Gradi decimali",decimalMinutes:"Minuti decimali",decimalSeconds:"Secondi decimali",degreesAndDecimalMinutes:"Gradi e minuti decimali",degreesMinutesAndDecimalSeconds:"Gradi, minuti e secondi decimali",radians:"Radianti",grads:"Gradi"}},planar:{caption:"Planare"},local:{caption:"Locale",localdes:"Descrizione locale",localgeo:"Informazioni di riferimento geografico locali"},geodetic:{caption:"Modello geodetico",horizdn:{caption:"Nome datum orizzontale",nad83:"North American Datum del 1983",nad27:"North American Datum del 1927"},ellips:{caption:"Nome elissoide",grs80:"Sistema di riferimento geodetico 80",clarke1866:"Clarke 1866"},semiaxis:"Asse semimaggiore",denflat:"Denominatore del rapporto di livellamento"}},vertdef:{caption:"Sistema di Coordinate Verticali",altsys:{caption:"Sistema di altitudine",altdatum:{caption:"Nome datum altitudine",navd88:"North American Vertical Datum del 1988",ngvd29:"National Geodetic Vertical Datum del 1929"},altres:"Risoluzione altitudine",altunits:{caption:"Unità di distanza altitudine",meters:"Metri",feet:"Piede"},altenc:{caption:"Metodo di codifica altitudine",explicit:"Coordinata di altitudine esplicita inclusa con le coordinate orizzontali",implicit:"Coordinata implicita",attribute:"Valori di attributo"}},depthsys:{caption:"Sistema di profondità",depthdn:{caption:"Nome datum profondità",option1:"Superficie locale",option2:"Dati del grafico; dati per la riduzione del suono",option3:"Marea astronomica più bassa",option4:"Marea astronomica più alta",option5:"Acqua bassa media",option6:"Acqua alta media",option7:"Livello medio del mare",option8:"Dati topografici",option9:"Sorgenti di acqua bassa media",option10:"Sorgenti di acqua alta media",option11:"Marea di quadratura acqua bassa media",option12:"Marea di quadratura acqua alta media",option13:"Acqua bassa inferiore media",option14:"Sorgenti di acqua bassa inferiore media",option15:"Acqua alta superiore media",option16:"Acqua bassa superiore media",option17:"Acqua alta inferiore media",option18:"Marea sigiziale",option19:"Acqua bassa inferiore tropicale",option20:"Marea delle quadrature",option21:"Acqua alta",option22:"Acqua alta superiore",option23:"Acqua bassa",option24:"Dati acqua bassa",option25:"La più bassa acqua bassa",option26:"Acqua bassa inferiore",option27:"La più bassa acqua normale bassa",option28:"Livello marea medio",option29:"Acqua bassa sorgente indiana",option30:"Acqua alta completa e carica",option31:"Acqua bassa completa e carica",option32:"Dati sul fiume Columbia",option33:"Dati su acqua bassa della costa del Golfo",option34:"Acqua bassa di sorgenti equatoriali",option35:"Marea astronomica più bassa approssimata",option36:"Nessuna correzione"},depthres:"Risoluzione profondità",depthdu:{caption:"Unità di distanza della profondità",meters:"Metri",feet:"Piede"},depthem:{caption:"Metodo di codifica della profondità",explicit:"Coordinata di profondità esplicita inclusa con le coordinate orizzontali",implicit:"Coordinata implicita",attribute:"Valori di attributo"}}}},timeinfo:{caption:"Informazioni sul periodo di tempo",sngdate:"Data singola",mdattim:"Date multiple",rngdates:"Intervallo di date",caldate:"Data",time:"Ora",begdate:"Data di inizio",begtime:"Ora di inizio",enddate:"Data di fine",endtime:"Ora di fine"}});