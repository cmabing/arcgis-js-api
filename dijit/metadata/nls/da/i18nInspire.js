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

define({documentTypes:{data:{caption:"INSPIRE (Data)",description:""},service:{caption:"INSPIRE (Service)",description:""}},dataThemeKeywords:{caption:"Inspire Data Theme"},inspireServiceType:{discovery:"Discovery Service",view:"Visningstjeneste",download:"Downloadtjeneste",transformation:"Transformation Service",invoke:"Invoke Service",other:"Andre tjenester"},keywordSections:{dataTheme:"Inspire Data Theme",serviceCategory:"ISO 19119 Service Category",gemetConcept:"GEMET Concept",otherKeywords:"Andre nøgleord"},LanguageCode:{bul:"Bulgarsk",cze:"Tjekkisk",dan:"Dansk",dut:"Hollandsk",eng:"Engelsk",est:"Estisk",fin:"Finsk",fre:"Fransk",ger:"Tysk",gre:"Græsk",hun:"Ungarsk",gle:"Gælisk (irsk)",ita:"Italiensk",lav:"Lettisk",lit:"Litauisk",mlt:"Maltesisk",pol:"Polsk",por:"Portugisisk",rum:"Rumænsk",slo:"Slovakisk",slv:"Slovensk",spa:"Spansk",swe:"Svensk",chi:"Kinesisk",kor:"Koreansk",nor:"Norsk",rus:"Russisk",tur:"Tyrkisk"},otherConstraints:{noLimitations:"Ingen begrænsninger",confidentialityOfProceedings:"Fortrolighed i forbindelse med sager, der behandles af offentlige myndigheder...",internationalRelations:"Internationale relationer, offentlig sikkerhed eller nationalt forsvar",courseOfJustice:"Retshåndhævelse, muligheden for, at enhver kan få en retfærdig domstolsbehandling...",confidentialityOfCommercial:"Fortrolighed i forbindelse med handels- eller produktionsmæssige oplysninger...",intellectualProperty:"Intellektuel ejendomsret",confidentialityOfPersonalData:"Fortrolighed i forbindelse med persondata og/eller filer...",interestsOrProtection:"Interesser eller beskyttelse af enhver person, der har leveret oplysningerne...",protectionOfEnvironment:"Beskyttelse af det miljø, som sådanne oplysninger er forbundet med...",freeText:"Fri tekst"},serviceType:{humanInteractionService:"100 Geografiske humane interaktionstjenester",humanCatalogueViewer:"101 Katalogvisning",humanGeographicViewer:"102 Geografisk visning",humanGeographicSpreadsheetViewer:"103 Geografisk regnearksvisning",humanServiceEditor:"104 Tjenesteeditor",humanChainDefinitionEditor:"105 Kædedefinitionseditor",humanWorkflowEnactmentManager:"106 Workflow enactment manager",humanGeographicFeatureEditor:"107 Geografisk objekteditor",humanGeographicSymbolEditor:"108 Geografisk symboleditor ",humanFeatureGeneralizationEditor:"109 Objektgeneraliseringseditor",humanGeographicDataStructureViewer:"110 Geografisk datastrukturviser",infoManagementService:"200 Geografisk model-/informationsstyringstjeneste",infoFeatureAccessService:"201 Objektadgangstjeneste",infoMapAccessService:"202 Kortadgangstjeneste",infoCoverageAccessService:"203 Dækningsadgangstjeneste",infoSensorDescriptionService:"204 Sensorbeskrivelsestjeneste",infoProductAccessService:"205 Produktadgangstjeneste",infoFeatureTypeService:"206 Objekttypetjeneste",infoCatalogueService:"207 Katalogtjeneste",infoRegistryService:"208 Registertjeneste",infoGazetteerService:"209 Leksikontjeneste",infoOrderHandlingService:"210 Ordrebehandlingstjeneste",infoStandingOrderService:"211 Stående ordre-tjeneste",taskManagementService:"300 Geografisk workflow-/opgavestyringstjeneste",chainDefinitionService:"301 Kædedefinitionstjeneste",workflowEnactmentService:"302 Workflow enactment-tjeneste",subscriptionService:"303 Abonnementstjeneste",spatialProcessingService:"400 Geografiske behandlingstjenester — geo-",spatialCoordinateConversionService:"401 Koordinatkonverteringstjeneste",spatialCoordinateTransformationService:"402 Koordinattransformationstjeneste",spatialCoverageVectorConversionService:"403 Dæknings-/vektorkonverteringstjeneste",spatialImageCoordinateConversionService:"404 Billedkoordinatkonverteringstjeneste",spatialRectificationService:"405 Korrektionstjeneste",spatialOrthorectificationService:"406 Ortokorrektionstjeneste",spatialSensorGeometryModelAdjustmentService:"407 Justeringstjeneste til sensorgeometrimodeller",spatialImageGeometryModelConversionService:"408 Konverteringstjeneste til billedgeometrimodeller",spatialSubsettingService:"409 Subsettingtjeneste",spatialSamplingService:"410 Samplingtjeneste",spatialTilingChangeService:"411 Tiling-ændringstjeneste",spatialDimensionMeasurementService:"412 Dimensionsmålingstjeneste",spatialFeatureManipulationService:"413 Objektmanipulationstjenester",spatialFeatureMatchingService:"414 Objektmatchingtjeneste",spatialFeatureGeneralizationService:"415 Objektgeneraliseringstjeneste",spatialRouteDeterminationService:"416 Rutevalgstjeneste",spatialPositioningService:"417 Lokaliseringstjeneste",spatialProximityAnalysisService:"418 Nærhedsanalysetjeneste",thematicProcessingService:"500 Geografiske behandlingstjenester – tematisk",thematicGoparameterCalculationService:"501 Geoparameterberegningstjeneste",thematicClassificationService:"502 Tematisk klassifikationstjeneste",thematicFeatureGeneralizationService:"503 Objektgeneraliseringstjeneste",thematicSubsettingService:"504 Subsettingtjeneste",thematicSpatialCountingService:"505 Geografisk tælletjeneste",thematicChangeDetectionService:"506 Ændringsdetekteringstjeneste",thematicGeographicInformationExtractionService:"507 Geografiske informationsudtagningstjenester",thematicImageProcessingService:"508 Billedbehandlingstjeneste",thematicReducedResolutionGenerationService:"509 Reduceret opløsningsgenerationstjeneste",thematicImageManipulationService:"510 Billedmanipulationstjenester",thematicImageUnderstandingService:"511 Billedfortolkningstjenester",thematicImageSynthesisService:"512 Billedsyntesetjenester",thematicMultibandImageManipulationService:"513 Multibåndsbilledmanipulation",thematicObjectDetectionService:"514 Objektdetekteringstjeneste",thematicGeoparsingService:"515 Geoparsing-tjeneste",thematicGeocodingService:"516 Geokodningstjeneste",temporalProcessingService:"600 Geografiske behandlingstjenester",temporalReferenceSystemTransformationService:"601 Geografiske behandlingstjenester",temporalSubsettingService:"602 Subsettingtjeneste",temporalSamplingService:"603 Samplingtjeneste",temporalProximityAnalysisService:"604 Temporal nærhedsanalysetjeneste",metadataProcessingService:"700 Geografiske behandlingstjenester –  metadata",metadataStatisticalCalculationService:"701 Statistisk beregningstjeneste",metadataGeographicAnnotationService:"702 Geografiske annotationstjenester",comService:"800 Geografiske kommunikationstjenester",comEncodingService:"801 Kodningstjeneste",comTransferService:"802 Overførselstjeneste",comGeographicCompressionService:"803 Geografisk komprimeringstjeneste",comGeographicFormatConversionService:"804 Geografisk formatkonverteringstjeneste",comMessagingService:"805 Meddelelsestjeneste",comRemoteFileAndExecutableManagement:"806 Fjernfil og eksekverbar styring"},useLimitation:{noCondition:"Ingen betingelser gælder",unknownCondition:"Ukendte betingelser",freeText:"Fri tekst"}});