'use client'
import React from "react";
import {useRouter} from 'next/navigation'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
const Datasheets = () => {
  const router = useRouter()
  const itemClasses = {
    title: "text-white pr-10 pl-2",
    size: "text-lg"
  }
  return (
    <main className="m-5">
        <Accordion>
            <AccordionItem classNames={itemClasses} className="bg-spacemarines rounded-lg p-1 text-white w-full" key="spacemarines" aria-label="Space Marines" title="Space Marines">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-blacktemplars rounded-lg p-1 text-white w-full" key="blacktemplars" aria-label="Black Templars" title="Black Templars">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-bloodangels rounded-lg p-1 text-white w-full" key="bloodangels" aria-label="Blood Angels" title="Blood Angels">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-darkangels rounded-lg p-1 text-white w-full" key="darkangels" aria-label="Dark Angels" title="Dark Angels">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-deathwatch rounded-lg p-1 text-white w-full" key="deathwatch" aria-label="Deathwatch" title="Deathwatch">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-greyknights rounded-lg p-1 text-white w-full" key="greyknights" aria-label="Grey Knights" title="Grey Knights">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-spacewolves rounded-lg p-1 text-white w-full" key="spacewolves" aria-label="Space Wolves" title="Space Wolves">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-adeptasororitas rounded-lg p-1 text-white w-full" key="adeptasororitas" aria-label="Adepta Sororitas" title="Adepta Sororitas">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-adeptuscustodes rounded-lg p-1 text-white w-full" key="adeptuscustodes" aria-label="Adeptus Custodes" title="Adeptus Custodes">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-adeptusmechanicus rounded-lg p-1 text-white w-full" key="adeptusmechanicus" aria-label="Adeptus Mechanicus" title="Adeptus Mechanicus">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-astramilitarum rounded-lg p-1 text-white w-full" key="astramilitarum" aria-label="Astra Militarum" title="Astra Militarum">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-imperialknights rounded-lg p-1 text-white w-full" key="imperialknights" aria-label="Imperial Knights" title="Imperial Knights">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-chaosspacemarines rounded-lg p-1 text-white w-full" key="chaosspacemarines" aria-label="Chaos Space Marines" title="Chaos Space Marines">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-deathguard rounded-lg p-1 text-white w-full" key="deathguard" aria-label="Death Guard" title="Death Guard">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-thousandsons rounded-lg p-1 text-white w-full" key="thousandsons" aria-label="Thousand Sons" title="Thousand Sons">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-worldeaters rounded-lg p-1 text-white w-full" key="worldeaters" aria-label="World Eaters" title="World Eaters">
                <div className="grid grid-cols-4 text-md">
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/angron')}>
                      Angron
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/kharnthebetrayer')}>
                      Kharn the Betrayer
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/lordinvocatus')}>
                      Lord Invocatus
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersdaemonprince')}>
                      World Eaters Daemon Prince
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersdaemonprincewithwings')}>
                      World Eaters Daemon Prince With Wings
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeaterslordonjuggernaut')}>
                      World Eaters Lord on Juggernaut
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersmasterofexecutions')}>
                      World Eaters Master of Executions
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/jakhals')}>
                      Jakhals
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/khorneberzerkers')}>
                      Khorne Berzerkers
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersrhino')}>
                      World Eaters Rhino
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/eightbound')}>
                      Eightbound
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/exaltedeightbound')}>
                      Exalted Eightbound
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/khornelordofskulls')}>
                      Khorne Lord of Skulls
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeaterschaosspawn')}>
                      World Eaters Chaos Spawn
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersdefiler')}>
                      World Eaters Defiler
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersforgefiend')}>
                      World Eaters Forgefiend
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatershelbrute')}>
                      World Eaters Helbrute
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersheldrake')}>
                      World Eaters Heldrake
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeaterslandraider')}>
                      World Eaters Land Raider
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersmaulerfiend')}>
                      World Eaters Maulerfiend
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeaterspredatorannihilator')}>
                      World Eaters Predator Annihilator
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeaterspredatordestructor')}>
                      World Eaters Predator Destructor
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push('/datasheets/worldeaters/worldeatersterminatorsquad')}>
                      World Eaters Terminator Squad
                    </button>
                </div>
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-chaosknights rounded-lg p-1 text-white w-full" key="chaosknights" aria-label="Chaos Knights" title="Chaos Knights">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-chaosdaemons rounded-lg p-1 text-white w-full" key="chaosdaemons" aria-label="Chaos Daemons" title="Chaos Daemons">
                <div className="grid grid-cols-4 text-md">
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/be'lakor")}>
                      Be'lakor
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/bloodmaster")}>
                      Bloodmaster
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/bloodthirster")}>
                      Bloodthirster
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/changecaster")}>
                      Changecaster
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/contortedepitome")}>
                      Contorted Epitome
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/daemonprinceofchaos")}>
                      Daemon Prince of Chaos
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/daemonprinceofchaoswithwings")}>
                      Daemon Prince of Chaos With Wings
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/epidemius")}>
                      Epidemius
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/exaltedflamer")}>
                      Exalted Flamer
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/fateskimmer")}>
                      Fateskimmer
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/fluxmaster")}>
                      Fluxmaster
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/greatuncleanone")}>
                      Great Unclean One
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/horticulousslimux")}>
                      Horticulous Slimux
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/infernalenrapturess")}>
                      Infernal Enrapturess
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/kairosfateweaver")}>
                      Kairos Fateweaver
                    </button>
                    <button type="button" className="p-8" onClick={() => router.push("/datasheets/chaosdaemons/karanak")}>
                      Karanak
                    </button>
                </div>
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-aeldari rounded-lg p-1 text-white w-full" key="aeldari" aria-label="Aeldari" title="Aeldari">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-drukhari rounded-lg p-1 text-white w-full" key="drukhari" aria-label="Drukhari" title="Drukhari">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-tyranids rounded-lg p-1 text-white w-full" key="tyranids" aria-label="Tyranids" title="Tyranids">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-genestealercults rounded-lg p-1 text-white w-full" key="genestealercults" aria-label="Genestealer Cults" title="Genestealer Cults">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-leaguesofvotann rounded-lg p-1 text-white w-full" key="leaguesofvotann" aria-label="Leagues of Votann" title="Leagues of Votann">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-necrons rounded-lg p-1 text-white w-full" key="necrons" aria-label="Necrons" title="Necrons">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-orks rounded-lg p-1 text-white w-full" key="orks" aria-label="Orks" title="Orks">
                
            </AccordionItem>
            <AccordionItem classNames={itemClasses} className="bg-tauempire rounded-lg p-1 text-white w-full" key="tauempire" aria-label="T'au Empire" title="T'au Empire">
                
            </AccordionItem>
        </Accordion>
    </main>
  )
}
export default Datasheets;