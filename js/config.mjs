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
  previousPublishVersion: "1.12.2",
  pubDomain: "dk",
  publishDate: "2026-04-21",
  publishVersion: "1.13",
  shortName: "actueel",
  specStatus: "DEF",
  specType: "ST"
});
