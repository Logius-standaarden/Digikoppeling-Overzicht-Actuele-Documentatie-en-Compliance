import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "name" : "Pieter Hering",
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "name" : "Peter Haasnoot",
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Pieter Hering"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Overzicht-Actuele-Documentatie-en-Compliance",
  previousPublishDate: "2025-05-15",
  previousPublishVersion: "1.12.1",
  pubDomain: "dk",
  publishDate: "2025-11-05",
  publishVersion: "1.12.2",
  shortName: "actueel",
  specStatus: "DEF",
  specType: "ST"
});
