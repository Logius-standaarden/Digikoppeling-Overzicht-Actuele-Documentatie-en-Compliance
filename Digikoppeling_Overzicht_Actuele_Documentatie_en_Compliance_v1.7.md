Colofon

| Logius Servicecentrum:  | Postbus 96810 2509 JE Den Haag  t. 0900 555 4555 (10 ct p/m) e. [servicecentrum@logius.nl](http://www.logius.nl)   |
|-------------------------|--------------------------------------------------------------------------------------------------------------------|
|                         |                                                                                                                    |

Documentbeheer

| Datum                            | Versie      | Auteur               | Opmerkingen                                                      |
|----------------------------------|-------------|----------------------|------------------------------------------------------------------|
| 12/10/2017 09/07/2018 21/08/2018 | 1.0 1.1 1.2 | Logius Logius Logius | 1e versie Versionering documentniveau RFC WUS Oin in wsa:to/from |
| 16/05/2019                       | 1.3         | Logius               | RFC WUS Interoperabiliteit Signing RFC ebMS SyncReply            |
| 17/12/2019                       | 1.4         | Logius               | NCSC TLS Voorschriften                                           |
| 02/09/2020                       | 1.5         | Logius               | Beveiligingsstandaarden PKIO                                     |
| 14/10/2020                       | 1.6         | Logius               | DK KVS Grote Berichten v3.3                                      |
| 11/01/2021                       | 1.7         | Logius               | RFC 2020-2, RFC 2020-3                                           |
|                                  |             |                      |                                                                  |
|                                  |             |                      |                                                                  |
|                                  |             |                      |                                                                  |
|                                  |             |                      |                                                                  |

Inhoud

[1	Inleiding	4](#_Toc496080299)

>   [1.1	Doel	4](#_Toc496080300)

>   [1.2	Doelgroep	4](#_Toc496080301)

>   [1.3	Verantwoording	4](#_Toc496080302)

[2	Wat is Digikoppeling?	5](#_Toc496080303)

[3	Welke Digikoppeling documentatie is beschikbaar?	6](#_Toc496080304)

>   [3.1	Structuur & opbouw documentatie	6](#_Toc496080305)

>   [3.2	Overzicht documentatie	7](#_Toc496080306)

[4	Wat zijn de huidige versies van documenten?	9](#_Toc496080307)

[5	Wanneer ben ik Digikoppeling compliant?	11](#_Toc496080308)

>   [5.1	Documenten per koppelvlak	11](#_Toc496080309)

>   [5.2	Toelichting compliance	11](#_Toc496080310)

# Inleiding

Digikoppeling is een standaard voor berichtuitwisseling waarmee overheden op een veilige manier gegevens met elkaar kunnen uitwisselen.

## Doel

Dit document *Digikoppeling Overzicht Actuele Documentatie & Compliance* beschrijft de opzet en huidige versies van de Digikoppeling standaard. Ook geeft dit document aan hoe compliance aan de standaard kan worden bepaald en aangetoond.

## Doelgroep

Dit document is bedoeld voor ICT-professionals in de publieke sector en voor ICT-leveranciers die Digikoppeling (willen gaan) gebruiken.

## Verantwoording

Dit document is tot stand gekomen in samenwerking met leden van het Technisch Overleg Digikoppeling.

# Wat is Digikoppeling?

De Digikoppeling standaard is een verzameling van afspraken en principes voor berichtuitwisseling. Digikoppeling richt zich niet op de inhoud van het bericht maar op de “envelop” en op de logistiek van berichtenverkeer, kortom: de communicatiepatronen, adressering, beveiliging en betrouwbaarheid van berichten. Digikoppeling definieert verschillende koppelvlakken. In de koppelvlak specificaties worden de afspraken, eisen en te gebruiken technische standaarden in detail vastgelegd. Twee systemen die beiden hetzelfde digikoppeling koppelvlak ondersteunen kunnen gekoppeld worden en berichten uitwisselen op basis van een vooraf bepaald profiel.

Er zijn 3 soorten koppelvlakken:

-   WUS (voor bevragingen met direct antwoord)

-   EBMS2 (voor zowel meldingen (transacties) als bevragingen met een uitgesteld antwoord)

-   Grote Berichten (voor uitwisselen van grote bestanden)

Daarnaast zijn er algemene afspraken die voor elk koppelvlak gelden:

-   Architectuur

-   Beveiliging

-   Identificatie en authenticatie

De onderstaande figuur geeft de verschillende onderdelen van de digikoppeling standaard weer:

![](media/5b8028fcb40317bbee3160b2fa241030.png)

Figuur 1: Onderdelen Digikoppeling specificatie

Deze onderverdeling komt ook terug in de documentatie van de Digikoppeling standaard. Het volgende hoofdstuk behandelt de beschikbare documentatie en geeft per document aan wat de inhoud is.

# Welke Digikoppeling documentatie is beschikbaar?

De Digikoppeling standaard is vastgelegd in een aantal documenten.

Dit hoofdstuk geeft aan welk onderdeel van de standaard in welk document wordt beschreven en geeft ook de samenhang weer tussen de verschillende soorten documenten.

## Structuur & opbouw documentatie

De onderstaande figuur geeft de opbouw weer van de Digikoppeling documentatie.

Figuur 2: Digikoppeling-standaard documentatie

**Legenda**

| **Kleur** | **Soort Document**           |
|-----------|------------------------------|
|           | Standaard documentatie       |
|           | Ondersteunende documentatie  |

**Beheer  
**

-   De standaarddocumenten (groen aangegeven) vallen onder het beheer zoals geformaliseerd in het document [Beheermodel en releasebeleid].

-   De ondersteunende documentatie wordt onderhouden door Logius als de beheerder van de standaard (en afgestemd met stakeholders/ gebruikers).

-   Alle goedgekeurde documenten zijn te vinden op de website van Logius, [www.logius.nl](http://www.logius.nl/digikoppeling).

## Overzicht documentatie

Algemene documentatie

-   *Wat is Digikoppeling?*  
    Inleidend document over Digikoppeling

-   *DK Overzicht Actuele Documentatie en Compliance*  
    Totaal overzicht van de documentatie en toelichting op compliance aan de standaard;

-   *DK Beheermodel en Releasebeleid*

    Governance van de Digikoppeling standaard;

Technische documentatie

>   *Technische documentatie algemeen*

-   *DK Architectuur*

    Overzicht van de standaard, samenhang en architectuur. Dit document beschrijft op hoofdlijnen welke manier de standaard moet worden toegepast;

-   *DK Identificatie en Authenticatie  
    *Uitgangspunten en principes voor identificatie- en authenticatieafspraken die gehanteerd worden tussen overheidsorganisaties bij gebruik van de Digikoppeling standaard;

-   *DK Beveiliging standaarden en voorschriften  
    *Centraal document van beveiligingsvoorschriften en -standaarden die door de Digikoppeling Standaard verplicht worden gesteld;

>   *Technische documentatie koppelvlakken*

-   *DK Koppelvlakstandaard WUS*   
    Koppelvlakspecificatie voor het gebruik van WUS voor het doen van bevragingen conform Digikoppeling;

-   *DK Koppelvlakstandaard EBMS2*  
    Koppelvlakspecificatie voor het gebruik van ebMS 2.0 voor het doen van meldingen conform Digikoppeling;

-   *DK Koppelvlakstandaard Grote Berichten*  
    Koppelvlakspecificatie voor het uitwisselen van grote berichten conform Digikoppeling. Grote berichten zijn XML berichten of bijlagen die een bepaalde bestandsgrootte overschrijden;

>   *Ondersteunende Documentatie*

-   *DK Best Practices WUS*  
    Best Practices voor WUS implementatie;

-   *DK Best Practices EBMS2*  
    Best Practices voor EBMS2 implementatie;

-   *DK Best Practices Grote Berichten*  
    Best Practices voor Grote Berichten implementatie;

-   *DK Gebruik en achtergrond certificaten*  
    Toelichting gebruik en achtergrond DK certificaten;

# Wat zijn de huidige versies van documenten?

De onderstaande tabel geeft de huidige versies van de Digikoppeling documenten weer.

| Document                                         | Versie | Normatief | Geldig vanaf | Geldig  tot |
|--------------------------------------------------|--------|-----------|--------------|-------------|
| Wat is Digikoppeling                             | 1.1.1  |           | 23-07-2018   |             |
| DK Beheermodel en releasebeleid                  | 1.5    |           | 19-10-2017   |             |
| DK Architectuur                                  | 1.5.1  | X         | 23-07-2018   |             |
| DK Koppelvlakstandaard WUS                       | 3.8    | X         | 11-01-2021   |             |
| DK Koppelvlakstandaard EBMS2                     | 3.3    | X         | 16-05-2019   |             |
| DK Koppelvlakstandaard Grote Berichten           | 3.3    | X         | 14-10-2020   |             |
| DK Identificatie en Authenticatie                | 1.4    | X         | 19-10-2017   |             |
| DK Beveiliging standaarden en voorschriften      | 1.3    | X         | 02-09-2020   |             |
| DK Overzicht  Actuele Documentatie en Compliance | 1.7    | X         | 11-01-2021   |             |
| DK Best Practices WUS                            | 1.10   |           | 19-10-2017   |             |
| DK Best Practices EBMS2                          | 3.2    |           | 16-05-2019   |             |
| DK Best Practices Grote Berichten                | 3.1    |           | 19-10-2017   |             |
| DK Gebruik en achtergrond certificaten           | 1.6    |           | 02-09-2020   |             |

Tabel 1: Digikoppeling document versies

Toelichting Normatief:  
  
In de kolom ‘Normatief’ wordt met ‘X’ aangegeven dat het document specifieke regels bevat waar men zich aan moet houden om te voldoen aan de Digikoppeling standaard (Zie ook H5 Wanneer ben ik Digikoppeling compliant).

De onderstaande tabel geeft de voorgaande versies van de Digikoppeling documenten weer.

| Document                                        | Versie | Normatief | Geldig vanaf | Geldig tot |
|-------------------------------------------------|--------|-----------|--------------|------------|
| DK Koppelvlakstandaard ebMS2                    | 3.2    | x         | 19-10-2017   | 16-05-2019 |
| DK Best Practices ebMS2                         | 3.1    |           | 19-10-2017   | 16-05-2019 |
| DK Koppelvlakstandaard WUS                      | 3.7    | X         | 16-05-2019   | 10-01-2021 |
| DK Koppelvlakstandaard WUS                      | 3.6    | X         | 21-08-2018   | 16-05-2019 |
| DK Koppelvlakstandaard WUS                      | 3.5    | X         | 19-07-2018   | 21-08-2018 |
| Wat is Digikoppeling                            | 1.1    |           | 19-10-2017   | 23-07-2018 |
| DK Architectuur                                 | 1.5    | X         | 19-10-2017   | 23-07-2018 |
| DK Koppel vlakstandaard Grote Berichten         | 3.2    | X         | 19-10-2017   | 14-10-2020 |
| DK Beveiliging standaarden en voorschriften     | 1.1    | X         | 19-10-2017   | 17-12-2019 |
| DK Beveiliging standaarden en voorschriften     | 1.2    | X         | 17-12-2019   | 02-09-2020 |
| DK Gebruik en achtergrond certificaten          | 1.5    |           | 19-10-2017   | 02-09-2020 |
| DK Overzicht Actuele Documentatie en Compliance | 1.5    | X         | 02-09-2020   | 10-01-2021 |
| DK Overzicht Actuele Documentatie en Compliance | 1.4    | X         | 17-12-2019   | 02-09-2020 |
| DK Overzicht Actuele Documentatie en Compliance | 1.3    | X         | 16-05-2019   | 17-12-2019 |
| DK Overzicht Actuele Documentatie en Compliance | 1.2    | X         | 30-07-2018   | 16-05-2019 |
| DK Overzicht Actuele Documentatie en Compliance | 1.1    | X         | 23-07-2018   | 30-07-2018 |
| DK Overzicht Actuele Documentatie en Compliance | 1.0    | X         | 19-07-2018   | 23-07-2018 |

Tabel 2: Vorige versies Digikoppeling documenten per koppelvlak

# Wanneer ben ik Digikoppeling compliant?

Voor de implementatie van een bepaald koppelvlak volgens de Digikoppeling standaard gebruikt u de algemene documenten van de standaard samen met de technische specificatie van het specifieke koppelvlak (bv WUS, EBMS2 of Grote Berichten).

## Documenten per koppelvlak

De onderstaande tabel laat zien welke documenten van toepassing zijn voor de implementatie van een bepaald koppelvlak. De kolom Koppelvlak toont per koppelvlak WUS, EBMS2, Grote Berichten de bijbehorende documentatie.

| **Digikoppeling Compliance**                      | **Koppelvlak** |           |        |                         |               |
|---------------------------------------------------|----------------|-----------|--------|-------------------------|---------------|
| **Document**                                      | **WUS**        | **EBMS2** | **GB** | **Type**                | **Normatief** |
| DK Beheermodel en Releasebeleid                   | X              | X         | X      | Standaard               |               |
| DK Overzicht Actuele Documentatie en Compliance   | X              | X         | X      | Standaard               |               |
| DK Architectuur                                   | X              | X         | X      | Standaard               | X             |
| DK Koppelvlakstandaard WUS                        | X              |           |  O1    | Standaard               | X             |
| DK Koppelvlakstandaard EBMS2                      |                | X         |  O1    | Standaard               | X             |
| DK Koppelvlakstandaard Grote Berichten            | O[^1]          | O1        | X      | Standaard               | X             |
| DK Identificatie en Authenticatie                 | X              | X         | X      | Standaard               | X             |
| DK Beveiliging standaarden en voorschriften       | X              | X         | X      | Standaard               | X             |
| DK Best Practices WUS                             | X              |           |        | Ondersteuning Standaard |               |
| DK Best Practices EBMS                            |                | X         |        | Ondersteuning Standaard |               |
| DK Best Practices Grote Berichten                 |                |           | X      | Ondersteuning Standaard |               |
| DK Gebruik en achtergrond certificaten            | X              | X         | X      | Ondersteuning Standaard |               |

[^1]: O: gebruik van WUS óf ebMS2. Binnen de Grote Berichten standaard wordt eerst een metadatabericht gestuurd om een aan te kondigen dat een bestand klaar staat om te downloaden. Voor dit metadatabericht dient hetzij WUS, hetzij ebMS2 gebruikt te worden.

Tabel 3: Digikoppeling documentatie per koppelvlak

## Toelichting compliance

De tabel in de voorgaande paragraaf geeft aan welke combinatie van documenten tezamen een complete specificatie vormt voor Digikoppeling op basis van WUS, EBMS2 of Grote berichten. Een koppelvlak implementatie voldoet aan de digikoppeling standaard als deze conform de principes, afspraken en gestelde eisen uit de normatieve documenten is uitgewerkt. Om de compliance van software in de een praktijksituatie te testen is de Digikoppeling Compliancy Voorziening ontwikkeld. Deze voorziening is onderdeel van het Digikoppeling Portaal en beschikbaar op <https://portaal.digikoppeling.nl>.

De Digikoppeling Compliancy Voorziening moet gezien worden als een hulpmiddel. Bij afwijking tussen de documentatie en de Compliance Voorziening zijn de eisen in de documentatie leidend bij het beoordelen of software de Digikoppeling standaard correct implementeert.
