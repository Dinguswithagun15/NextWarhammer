'use client'
import React, { useEffect, useState } from "react";
import {Input} from "@nextui-org/input";
import Button from "../../public/button.jsx";
const Datasheetcreator = () => {
    const [activeSection, setActiveSection] = useState("BeforeCreation");
    const [title, setTitle] = useState("");
    const [basesize, setBasesize] = useState("");
    const [movement, setMovement] = useState("");
    const [toughness, setToughness] = useState("");
    const [save, setSave] = useState("");
    const [invuln, setInvuln] = useState("");
    const [wounds, setWounds] = useState("");
    const [leadership, setLeadership] = useState("");
    const [oc, setOc] = useState("");
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleBasesize = (e) => {
        setBasesize(e.target.value);
    };
    const handleMovement = (e) => {
        setMovement(e.target.value);
    };
    const handleToughness = (e) => {
        setToughness(e.target.value);
    };
    const handleSave = (e) => {
        setSave(e.target.value);
    };
    const handleInvuln = (e) => {
        setInvuln(e.target.value);
    };
    const handleWounds = (e) => {
        setWounds(e.target.value);
    };
    const handleLeadership = (e) => {
        setLeadership(e.target.value);
    };
    const handleOc = (e) => {
        setOc(e.target.value);
    };
    return (
        <main className="flex flex-col justify-start items-center">
            <div>Datasheet Creator</div>
            <Button key="createNew" isActive={activeSection == "BeforeCreation"} text="Create New" whenPressed={() => {setActiveSection("Creator")}}/>
            <Creator key="creator" isActive={activeSection == "Creator"}
            handleTitle={handleTitle}
            handleBasesize={handleBasesize}
            handleMovement={handleMovement}
            handleToughness={handleToughness}
            handleSave={handleSave}
            handleInvuln={handleInvuln}
            handleWounds={handleWounds}
            handleLeadership={handleLeadership}
            handleOc={handleOc}
            />
        </main>
    )
}
function Creator({isActive, handleTitle, handleBasesize, handleMovement, handleToughness, handleSave, handleInvuln, handleWounds, handleLeadership, handleOc}) {
    if (isActive) {
        return (
            <div className="flex flex-row">
                <Input key="inputTitle" type="text" aria-label="Title" className="bg-white border-1 p-1 m-3" label="Title" placeholder="" onChange={handleTitle}/>
                <Input key="inputBasesize" type="text" aria-label="Base Size" className="bg-white border-1 p-1 m-3" label="Base Size" placeholder="" onChange={handleBasesize}/>
                <Input key="inputMovement" type="text" aria-label="Movement" className="bg-white border-1 p-1 m-3" label="Movement" placeholder="" onChange={handleMovement}/>
                <Input key="inputToughness" type="text" aria-label="Toughness" className="bg-white border-1 p-1 m-3" label="Toughness" placeholder="" onChange={handleToughness}/>
                <Input key="inputSave" type="text" aria-label="Armour Save" className="bg-white border-1 p-1 m-3" label="Armour Save" placeholder="" onChange={handleSave}/>
                <Input key="inputInvuln" type="text" aria-label="Invuln Save" className="bg-white border-1 p-1 m-3" label="Invuln Save" placeholder="" onChange={handleInvuln}/>
                <Input key="inputWounds" type="text" aria-label="Wounds" className="bg-white border-1 p-1 m-3" label="Wounds" placeholder="" onChange={handleWounds}/>
                <Input key="inputLeadership" type="text" aria-label="Leadership" className="bg-white border-1 p-1 m-3" label="Leadership" placeholder="" onChange={handleLeadership}/>
                <Input key="inputOc" type="text" aria-label="OC" className="bg-white border-1 p-1 m-3" label="OC" placeholder="" onChange={handleOc}/>
            </div>
        )
    }
}
export default Datasheetcreator;