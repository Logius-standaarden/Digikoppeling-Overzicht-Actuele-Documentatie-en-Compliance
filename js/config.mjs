import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "name" : "Pieter Hering",
        "url" : "https://logius.nl/standaarden"
      } ],
  editors: [ 
      { 
        "name" : "Peter Haasnoot",
        "url" : "https://logius.nl/standaarden"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://logius.nl/standaarden",
        "mailto" : "api@digikoppeling.nl",
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
