const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      lightgray: '#949c96',
      lightgraydepressed: '#777a80',
      gray: '#464545',
      spacemarines: '#2868e0',
      blacktemplars: '#4f4e46',
      bloodangels: '#db2121',
      darkangels:  '#0e5714',
      deathwatch: '#151a15',
      greyknights: '#c1d4de',
      spacewolves: '#97c5db',
      adeptasororitas: '#e0a028',
      adeptuscustodes: '#d6b222',
      adeptusmechanicus: '#d14343',
      astramilitarum: '#3b6141',
      imperialknights: '#9770fa',
      imperialagents: '#d48aab',
      titanicus: '#b39197',
      chaosspacemarines: '#1a1918',
      deathguard: '#638215',
      thousandsons: '#44a5bd',
      worldeaters: '#861d1a',
      chaosknights: '#4f1922',
      chaosdaemons: '#536063',
      aeldari: '#a5dae6',
      drukhari: '#28192b',
      tyranids: '#683f70',
      genestealercults: '#8e6396',
      leaguesofvotann: '#4ea1ad',
      necrons: '#8f8d86',
      orks: '#54a825',
      tauempire: '#688194',
    },
    extend: {
      fontFamily: {
        main: 'Arial'
      }
    },
  },
  plugins: [
    nextui()
  ]
}

