import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "name" : "Pieter Hering",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "name" : "Peter Haasnoot",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Overzicht-Actuele-Documentatie-en-Compliance",
  previousPublishVersion: "1.12.2",
  pubDomain: "dk",
  publishDate: "2026-04-21",
  publishVersion: "1.13.0",
  shortName: "actueel",
  specStatus: "DEF",
  specType: "ST"
});
