'use client'
import React, { useEffect, useState } from "react";
import {Select, SelectItem} from "@nextui-org/select";
import {Input} from "@nextui-org/input";
async function getPointLimits() {
    let response;
    let pointlimits;
    try {
        response = await fetch("https://dinguswithagun15.github.io/WarhammerData/pointlimits.json");
        pointlimits = await response.json();
        return pointlimits;
    } catch(err) {
        return (
            <main className="p-1 text-lg">
                <div>Couldn't load point limits.</div>
            </main>
        )
    }
}
async function getFactions() {
    let response;
    let factions;
    try {
        response = await fetch("https://dinguswithagun15.github.io/WarhammerData/factions.json");
        factions = await response.json();
        return factions;
    } catch(err) {
        return (
            <main className="p-1 text-lg">
                <div>Couldn't load factions.</div>
            </main>
        )
    }
}
async function getResponse(factionValue, factions) {
    let response;
    try {
        let url = "https://dinguswithagun15.github.io/WarhammerData/";
        for (const faction of factions) {
            if (faction.title == factionValue) {
                url = url + faction.id + ".json";
                break;
            }
        }
        response = await fetch(url);
        response = await response.json();
        return response;
    } catch(err) {
        return (
            <main className="p-1 text-lg">
                <div>Datasheet not found.</div>
            </main>
        )
    }
}
export default function Layout() {
    const [listTotal, setListTotal] = useState(0);
    const [datasheets, setDatasheets] = useState([]);
    const [createdList, setCreatedList] = useState([]);
    const [factions, setFactions] = useState([]);
    const [factionValue, setFactionValue] = useState("");
    const [pointlimits, setPointLimits] = useState([]);
    const [pointLimitValue, setPointLimitValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [detachmentList, setDetachmentList] = useState([]);
    const [detachmentValue, setDetachmentValue] = useState("");
    const [warnings, setWarnings] = useState([]);
    const [activeSection, setActiveSection] = useState("Buttons");
    useEffect(() => {
        let promise = getPointLimits();
        promise.then((result) => {setPointLimits(result.pointlimits);
            let promise2 = getFactions();
            promise2.then((result) => {setFactions(result.factions);
                let promise3 = getResponse(factionValue, factions);
                promise3.then((result) => {setDatasheets(result)})
            })
        })
    },[factionValue]);
    useEffect(() => {
        if (detachmentValue != "") {setActiveSection("Creator")}
    },[detachmentValue]);
    useEffect(() => {
        let temp = 0;
        for (const item of createdList) {
            temp += parseInt(item.cost) + parseInt(item.enhancementcost);
        }
        setListTotal(temp);
    },[createdList])
    useEffect(() => {
        if (listTotal > pointLimitValue && !warnings.includes("Warning: Total points exceeds point limit.")) {
            let temp = warnings.slice();
            temp.push("Warning: Total points exceeds point limit.");
            setWarnings(temp);
        } else {
            let index = warnings.findIndex((warning) => {return warning == "Warning: Total points exceeds point limit.";});
            if (index != -1) {
                setWarnings(warnings.slice(0, index).concat(warnings.slice(index+1)));
            }
        }
    },[listTotal, pointLimitValue])
    const handleFactionValue = (e) => {
        setFactionValue(e.target.value);
    };
    const handlePointLimitValue = (e) => {
        setPointLimitValue(e.target.value);
    };
    const handleNameValue = (e) => {
        setNameValue(e.target.value);
    };
    const handleDetachmentValue = (e) => {
        setDetachmentValue(e.target.value);
    };
    return (
        <main className="grid place-content-center text-lg">
            <div className="justify-self-center">List Builder</div>
            <div className="flex items-center space-x-4 col-span-1">
            <Button key="createNewList" isActive={activeSection == "Buttons"} text="Create New List" whenPressed={() => setActiveSection("FactionSelect")}/>
            <ListInfo key="listInfo" isActive={activeSection == "FactionSelect" || activeSection == "ConfirmNew"} factionlist={factions} pointlimits={pointlimits} factionValue={factionValue} pointLimitValue={pointLimitValue} nameValue={nameValue} handleFactionValue={handleFactionValue} handlePointLimitValue={handlePointLimitValue} handleNameValue={handleNameValue} whenCompleted={() => setActiveSection("ConfirmNew")} whenNotCompleted={() => setActiveSection("FactionSelect")}/>
            </div>
            <Button key="confirmCreate" isActive={activeSection == "ConfirmNew"} text="Create" whenPressed={() => setActiveSection("DetachmentSelect")}/>
            <DetachmentSelect key="detachmentSelect" isActive={activeSection == "Creator" || activeSection == "DetachmentSelect"} factionValue={factionValue} factionlist={factions} handleDetachmentValue={handleDetachmentValue} detachmentList={detachmentList} setDetachmentList={setDetachmentList}/>
            <ListCost isActive={activeSection == "Creator"} listTotal={listTotal}/>
            <Warnings isActive={activeSection == "Creator"} warnings={warnings}/>
            <Button key="copyToClipboard" isActive={activeSection == "Creator"} text="Copy to Clipboard" whenPressed={() => CopyToClipboard(createdList)}/>
            <ListDisplay key="listDisplay" isActive={activeSection == "Creator"} datasheets={datasheets} createdList={createdList} setCreatedList={setCreatedList} detachmentList={detachmentList} detachment={detachmentValue}/>
        </main>
    );
}
function CopyToClipboard(createdList) {
    let copytext = "";
    for (const unit of createdList) {
        if (unit.enhancement == "") {
            copytext += unit.details.title + " " + (parseInt(unit.cost) + parseInt(unit.enhancementcost)).toString() + "\n";
        } else {
            copytext += unit.details.title + " (" + unit.enhancement + ") " + (parseInt(unit.cost) + parseInt(unit.enhancementcost)).toString() + "\n";
        }
    }
    navigator.clipboard.writeText(copytext);
}
function Button({isActive, text, whenPressed}) {
    return (
        <>
            {isActive ? <button className="bg-lightgray rounded-md p-1 active:bg-lightgraydepressed" onClick={whenPressed}>{text}</button> : <></>}
        </>
    );
}
function Warnings({isActive, warnings}) {
    if (isActive) {
        return (
            <div>
            {warnings.map((warning) => <div>{warning}</div>)}
            </div>
        )
    }
}
function ListInfo({isActive, factionlist, pointlimits, factionValue, pointLimitValue, nameValue, handleFactionValue, handlePointLimitValue, handleNameValue, whenCompleted, whenNotCompleted}) {
    const isComplete = () => {
        if (factionValue != "" && pointLimitValue != "" && nameValue != "" && isActive) {
            whenCompleted();
        } else if (isActive) {
            whenNotCompleted();
        }
    }
    useEffect(() => {
        isComplete();
    },[factionValue, pointLimitValue, nameValue]);
    if (isActive) {
        return (
            <div className="grid-cols-3">
                <div>
                    <div>Faction:</div>
                    <Select key="selectFaction" items = {factionlist} aria-label="Faction" onChange={handleFactionValue} className="bg-white border-1 m-3">
                        {factionlist.map((faction) => <SelectItem className="border-x-1 border-t-1 last:border-b-1" key={faction.title}>{faction.title}</SelectItem>)}
                    </Select>
                </div>
                <div>
                    <div>Point Limit:</div>
                    <Select key="selectPointLimit" items = {pointlimits} aria-label="PointLimit" onChange={handlePointLimitValue} className="bg-white border-1 m-3">
                        {pointlimits.map((pointlimit) => <SelectItem className="border-x-1 border-t-1 last:border-b-1" key={pointlimit.points}>{pointlimit.points}</SelectItem>)}
                    </Select>
                </div>
                <div>
                    <div>Name:</div>
                    <Input key="inputListName" type="text" aria-label="Name" className="bg-white border-1 m-3" onChange={handleNameValue}/>
                </div>
            </div>
        );
    }
}
function DetachmentSelect({isActive, factionValue, factionlist, handleDetachmentValue, detachmentList, setDetachmentList}) {
    useEffect(() => {
        let divergentSpaceMarines = ["Black Templars", "Blood Angels", "Dark Angels", "Deathwatch", "Space Wolves"];
        let isDivergent = false;
        if (divergentSpaceMarines.includes(factionValue)) {isDivergent = true};
        let spaceMarines;
        factionlist.forEach((faction) => {if (faction.title == "Space Marines") {spaceMarines = faction;}});
        if (isDivergent) {
            factionlist.map((faction) => {if (factionValue == faction.title) {setDetachmentList(faction.detachments.concat(spaceMarines.detachments))}})
        } else {
            factionlist.map((faction) => {if (factionValue == faction.title) {setDetachmentList(faction.detachments)}})
        }
    },[factionValue, factionlist]);
    if (isActive) {
        return (
            <div>
                <div>Detachment:</div>
                <Select key="detachmentSelectList" items = {detachmentList} aria-label="Detachment" onChange={handleDetachmentValue} className="bg-white border-1 m-3">
                    {detachmentList.map((detachment) => <SelectItem className="border-x-1 border-t-1 last:border-b-1" key={detachment.title}>{detachment.title}</SelectItem>)}
                </Select>
            </div>
        )
    }
}
function ListCost({isActive, listTotal}) {
    if (isActive) {
        return (
            <div className="border-1">Total points: {listTotal}</div>
        )
    }
}
function ListDisplay({isActive, datasheets, createdList, setCreatedList, detachmentList, detachment}) {
    const [unitList, setUnitList] = useState([]);
    const [enhancements, setEnhancements] = useState([]);
    useEffect(() => {
        let temp = [];
        for (let key in datasheets) {
            let obj = new Object();
            obj.id = (Math.floor(Math.random() * 1000) + 1).toString();
            obj.details = datasheets[key];
            obj.cost = datasheets[key].unitcomposition.sizes[0].cost;
            obj.enhancementcost = 0;
            obj.enhancement = "";
            temp.push(obj);
        }
        setUnitList(temp);
        detachmentList.forEach((d) => {if (d.title == detachment) {setEnhancements(d.enhancements)}});
    },[createdList, detachment]);
    if (isActive) {
        return (
            <div className="grid justify-items-stretch grid-cols-2 gap-10">
                <div className="justify-self-start">
                    {createdList.map((unit) => <UnitDisplay unit={unit} createdList={createdList} setCreatedList={setCreatedList} enhancements={enhancements} buttonType={"remove"} whenUsed={() => {
                        let temp = createdList.slice(0,createdList.indexOf(unit)).concat(createdList.slice(createdList.indexOf(unit)+1));
                        setCreatedList(temp)}}/>)}
                </div>
                <div className="justify-self-end">
                    {unitList.map((unit) => <UnitDisplay unit={unit} createdList={createdList} setCreatedList={setCreatedList} enhancements={enhancements} buttonType={"add"} whenUsed={() => {
                        let temp = createdList.slice();
                        temp.push(unit);
                        setCreatedList(temp);}}/>)}
                </div>
            </div>
        )
    }
}
function UnitDisplay({unit, createdList, setCreatedList, enhancements, buttonType, whenUsed}) {
    const [enhancementsToShow, setEnhancementsToShow] = useState([]);
    const [selectedEnhancement, setSelectedEnhancement] = useState(0);
    const [selectedCost, setSelectedCost] = useState(0);
    const handleSelectedEnhancement = (e) => {
        let temp = createdList.slice();
        for (const item of temp) {
            if (unit.details.title + unit.id == item.details.title + item.id) {
                let enhancement = e.target.value.split(',');
                item.enhancement = enhancement[0];
                item.enhancementcost = enhancement[1];
            }
        }
        setSelectedEnhancement(e.target.value);
        setCreatedList(temp);
    };
    const handleSelectedCost = (e) => {
        let temp = createdList.slice();
        for (const item of temp) {
            if (unit.details.title + unit.id == item.details.title + unit.id) {
                item.cost = e.target.value;
            }
        }
        setSelectedCost(e.target.value);
        setCreatedList(temp);
    };
    useEffect(() => {
        let temp = [];
        if (unit.details.keywords.includes("Character") && !unit.details.keywords.includes("Epic Hero") && unit.details.title != "Exalted Flamer") {
            for (const enhancement of enhancements) {
                if (enhancement.keywords.length == 0) {
                    temp.push(enhancement);
                    continue;
                }
                if (enhancement.keywords.length == 1) {
                    if (enhancement.keywords[0].substring(0,1) == "!") {
                        if (!unit.details.keywords.find((keyword) => {return keyword == enhancement.keywords[0].substring(1)})) {
                            temp.push(enhancement);
                            continue;
                        }
                    } else {
                        if (unit.details.keywords.find((keyword) => {return keyword == enhancement.keywords[0].substring(0)})) {
                            temp.push(enhancement);
                            continue;
                        }
                    }
                }
                if (enhancement.keywords.length > 1) {
                    if (enhancement.keywords[0].substring(0,1) == "&") {
                        let and = true;
                        for (const keyword of enhancement.keywords) {
                            if (keyword.substring(1,2) == "!") {
                                if (unit.details.keywords.find((keywordsearch) => {return keywordsearch == keyword.substring(2)})) {
                                    and = false;
                                }
                            } else {
                                if (keyword.substring(1) == "Deep Strike") {
                                    if (!unit.details.coreabilities.includes("Deep Strike")) {
                                        and = false;
                                    }
                                } else {
                                    if (!unit.details.keywords.find((keywordsearch) => {return keywordsearch == keyword.substring(1)})) {
                                        and = false;
                                    }
                                }
                            }
                        }
                        if (and) {
                            temp.push(enhancement);
                            continue;
                        }
                    } else {
                        let or = false;
                        for (const keyword of enhancement.keywords) {
                            if (keyword.substring(1,2) == "!") {
                                if (!unit.details.keywords.find((keywordsearch) => {return keywordsearch == keyword.substring(2)})) {
                                    or = true;
                                }
                            } else {
                                if (unit.details.keywords.find((keywordsearch) => {return keywordsearch == keyword.substring(1)})) {
                                    or = true;
                                }
                            }
                        }
                        if (or) {
                            temp.push(enhancement);
                            continue;
                        }
                    }
                }
            }
        }
        setEnhancementsToShow(temp);
    },[unit, createdList, enhancements])
    let showButton = true;
    let unitInstances = 0;
    createdList.forEach((item) => {if (item.details.title == unit.details.title) {unitInstances++}});
    if (unit.details.keywords.find((keyword) => {return keyword == "Epic Hero";}) != undefined && unitInstances == 1) {showButton = false}
    else if (unit.details.keywords.find((keyword => {return keyword == "Battleline";})) != undefined && unitInstances == 6) {showButton = false}
    else if (unitInstances == 3 && unit.details.keywords.find((keyword => {return keyword == "Battleline";})) == undefined) {showButton = false}
    return (
        <div className="border-1 w-full">
        <div>{unit.details.title}</div>
        {unit.details.unitcomposition.sizes.length == 1 ? unit.details.unitcomposition.sizes.map((size) => <div>{size.cost}</div>) : <></>}
        {unit.details.unitcomposition.sizes.length > 1 && buttonType == "add" ? unit.details.unitcomposition.sizes.map((size) => <div>{size.cost}</div>) : <></>}
        {unit.details.unitcomposition.sizes.length > 1 && buttonType == "remove" ? unit.details.unitcomposition.sizes.map((size) => <div>{size.cost} <input type="radio" value={size.cost} checked={selectedCost == size.cost} name={unit.details.title + unit.id} onChange={handleSelectedCost}/></div>) : <></>}
        {buttonType == "remove" ? enhancementsToShow.map((enhancement) => <div>{enhancement.title} {enhancement.cost}<input type="radio" value={[enhancement.title, enhancement.cost]} checked={selectedEnhancement == [enhancement.title, enhancement.cost]} name={unit.details.title + "enhancement" + unit.id} onChange={handleSelectedEnhancement}/></div>) : <></>}
        {buttonType == "add" ? <Button isActive={showButton} text="+" whenPressed={whenUsed}/> : <Button isActive={true} text="-" whenPressed={whenUsed}/>}
        </div>
    )
}