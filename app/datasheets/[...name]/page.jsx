import React from "react";
function getClassName(classname, factionid) {
    classname = "bg-" + factionid + " " + classname;
    return classname;
}
export default async function Sheet({params}) {
    let response;
    let factionid = params.name[0];
    let factions;
    let datasheetname = params.name[1];
    let datasheets;
    let datasheet;
    try {
        response = await fetch("https://dinguswithagun15.github.io/WarhammerData/factions.json");
        factions = await response.json();
        let url = "https://dinguswithagun15.github.io/WarhammerData/"
        for (const faction of factions.factions) {
            if (faction.id == factionid) {
                url = url + faction.id + ".json";
                break;
            }
        }
        response = await fetch(url);
        datasheets = await response.json();
        datasheet = datasheets[datasheetname];
    } catch(err) {
        console.log(err)
        return (
            <main className="p-1 text-lg">
                <div>Datasheet not found.</div>
            </main>
        )
    }
    return (
        <main className="m-5">
            <div className={"bg-" + factionid + " rounded-lg p-1 h-15 flex justify-center space-x-1 text-white text-lg"}>
                <div>{datasheet.title}</div><div>({datasheet.basesize})</div>
            </div>
            <div className="flex flex-row h-10 p-1 justify-around space-x-8 text-md">
                <div><b>M:</b> {datasheet.movement}</div>
                <div><b>T:</b> {datasheet.toughness}</div>
                <div><b>SAVE:</b> {datasheet.save}</div>
                {datasheet.invuln != "" ? <div><b>INVULN SAVE:</b> {datasheet.invuln}</div> : <></>}
                <div><b>W:</b> {datasheet.wounds}</div>
                <div><b>Ld:</b> {datasheet.leadership}</div>
                <div><b>OC:</b> {datasheet.oc}</div>
            </div>
            {datasheet.rangedweapons.length > 0 ? <Weapons weapons={datasheet.rangedweapons} type={"Ranged"} factionid={factionid}/> : <></>}
            {datasheet.meleeweapons.length > 0 ? <Weapons weapons={datasheet.meleeweapons} type={"Melee"} factionid={factionid}/> : <></>}
            <div>
                <div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Wargear Options:</div>
                {datasheet.wargearoptions.length > 0 ? <div><WargearOptions options={datasheet.wargearoptions}/></div> : <div>None</div>}
            </div>
            <div>
                <div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Core Abilities:</div>
                {datasheet.coreabilities.length > 0 ? <div><CoreAbilities abilities={datasheet.coreabilities}/></div> : <div>None</div>}
            </div>
            <div>
                <div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Faction Abilities:</div>
                {datasheet.factionabilities.length > 0 ? <div><FactionAbilities abilities={datasheet.factionabilities}/></div> : <div>none</div>}
            </div>
            <div>
                <div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Abilities:</div>
                {datasheet.abilities.length > 0 ? <Abilities abilities={datasheet.abilities}/> : <div>None</div>}
            </div>
            <div>
                <div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Wargear Abilities:</div>
                {datasheet.wargearabilities.length > 0 ? <WargearAbilities abilities={datasheet.wargearabilities}/> : <div>None</div>}
            </div>
            {datasheet.choiceability.title != "" ? <ChoiceAbility choiceability={datasheet.choiceability} factionid={factionid}/> : <></>}
            <UnitComposition unitcomposition={datasheet.unitcomposition} factionid={factionid}/>
            {datasheet.damaged.threshold != "" ? <div><div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Damaged: {datasheet.damaged.threshold}</div><div className="text-md">{datasheet.damaged.description}</div></div> : <></>}
            {datasheet.other.length > 0 ? datasheet.other.map((oth) => <Other key={oth.title} other={oth} factionid={factionid}/>) : <></>}
            {datasheet.leaderbodyguard.leader == 'false' && datasheet.leaderbodyguard.bodyguard == 'false' ? <></> : <LeaderBodyguard leaderbodyguard={datasheet.leaderbodyguard} factionid={factionid}/>}
            <div>
                <div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Keywords:</div>
                <div className="flex flex-row space-x-1 text-md">
                    {datasheet.keywords.map((keyword) => <div key={keyword}><b>{keyword}</b></div>)}
                </div>
            </div>
            <div>
                <div className={"bg-" + factionid + " rounded-lg p-1 text-white text-lg"}>Faction Keywords:</div>
                <div className="flex flex-row space-x-1 text-md">
                        {datasheet.factionkeywords.map((keyword) => <div key={keyword}><b>{keyword}</b></div>)}
                </div>
            </div>
        </main>
    )
}
function Weapons(props) {
    return (
        <div>
            <div className={"bg-" + props.factionid + " rounded-lg p-1 grid grid-cols-7 text-white text-lg"}>
                <div>{props.type} Weapons</div>
                <div>Range</div>
                <div>A</div>
                {props.type == "Ranged" ? <div>BS</div> : <div>WS</div>}
                <div>S</div>
                <div>AP</div>
                <div>D</div>
            </div>
            <div className="p-1 grid grid-cols-7 text-md">
                {props.weapons.map((weapon) => <Weapon key={weapon.title} weapon={weapon}/>)}
            </div>
        </div>
    )
}
function Weapon(props) {
    return (
        <>
            {props.weapon.profiles.map((profile) => <Profile key={profile.title} weaponname={props.weapon.title} profile={profile}/>)}
        </>    
    )
}
function Profile(props) {
    if (props.profile.title != "" && props.profile.abilities.length > 0) {
        return (
            <>
                <div>{props.weaponname} - {props.profile.title} [{props.profile.abilities}]</div>
                <div>{props.profile.range}</div>
                <div>{props.profile.attacks}</div>
                <div>{props.profile.s}</div>
                <div>{props.profile.strength}</div>
                <div>{props.profile.ap}</div>
                <div>{props.profile.damage}</div>
            </>
        )
    } else if (props.profile.title != "" && props.profile.abilities.length == 0) {
        return (
            <>
                <div>{props.weaponname} - {props.profile.title}</div>
                <div>{props.profile.range}</div>
                <div>{props.profile.attacks}</div>
                <div>{props.profile.s}</div>
                <div>{props.profile.strength}</div>
                <div>{props.profile.ap}</div>
                <div>{props.profile.damage}</div>
            </>
        )
    } else if (props.profile.title == "" && props.profile.abilities.length > 0) {
        return (
            <>
                <div>{props.weaponname} [{props.profile.abilities}]</div>
                <div>{props.profile.range}</div>
                <div>{props.profile.attacks}</div>
                <div>{props.profile.s}</div>
                <div>{props.profile.strength}</div>
                <div>{props.profile.ap}</div>
                <div>{props.profile.damage}</div>
            </>
        )
    } else {
        return (
            <>
                <div>{props.weaponname}</div>
                <div>{props.profile.range}</div>
                <div>{props.profile.attacks}</div>
                <div>{props.profile.s}</div>
                <div>{props.profile.strength}</div>
                <div>{props.profile.ap}</div>
                <div>{props.profile.damage}</div>
            </>
        )
    }
}
function WargearOptions(props) {
    return (
        <>
            {props.options.map((option) => <div className="text-md" key={option}>{option}</div>)}
        </>
    )
}
function CoreAbilities(props) {
    return (
        <>
            {props.abilities.map((ability) => <div className="text-md" key={ability}>{ability}</div>)}
        </>
    )
}
function FactionAbilities(props) {
    return (
        <>
            {props.abilities.map((ability) => <div className="text-md" key={ability}>{ability}</div>)}
        </>
    )
}
function Abilities(props) {
    return (
        <>
            {props.abilities.map((ability) => <div className="text-md" key={ability.title}><b>{ability.title}:</b> {ability.description}</div>)}
        </>
    )
}
function WargearAbilities(props) {
    return (
        <>
            {props.abilities.map((ability) => <div className="text-md" key={ability.title}><b>{ability.title}:</b> {ability.description}</div>)}
        </>
    )
}
function ChoiceAbility(props) {
    return (
        <div>
            <div className={"bg-" + props.factionid + " rounded-lg p-1 text-white text-lg"}>{props.choiceability.title}</div>
            {props.choiceability.choices.map((choice) => <div className="text-md" key={choice.title}><b>{choice.title}</b>: {choice.description}</div>)}
        </div>
    )
}
function UnitComposition(props) {
    return (
        <div>
            <div className={"bg-" + props.factionid + " rounded-lg p-1 text-white text-lg"}>Unit Composition</div>
            {props.unitcomposition.models.map((group) => <div className="text-md" key={group}>{group}</div>)}
            {props.unitcomposition.equipped.map((group) => <div className="text-md" key={group.who}>{group.who} is equipped with: {group.what}</div>)}
            {props.unitcomposition.sizes.map((size) => <div className="text-md" key={size}>{size.number} model(s)  {size.cost}</div>)}
        </div>
    )
}
function Other(props) {
    return (
        <div>
            <div className={"bg-" + props.factionid + " rounded-lg p-1 text-white text-lg"}>{props.other.title}</div>
            <div className="text-md">{props.other.description}</div>
        </div>
    )
}
function LeaderBodyguard(props) {
    if (props.leaderbodyguard.leader == "true") {
        return <div><div className={"bg-" + props.factionid + " rounded-lg p-1 text-white text-lg"}>Leader</div><div className="text-md">This model can be attached to the following units:</div><UnitList units={props.leaderbodyguard.units}/></div>
    } else {
        return <div><div className={"bg-" + props.factionid + " rounded-lg p-1 text-white text-lg"}>Led By</div><div className="text-md">This unit can be led by the following units:</div><UnitList units={props.leaderbodyguard.units}/></div>
    }
}
function UnitList(props) {
    return (
        <div className="text-md">{props.units.map((unit) => <div key={unit}>{unit}</div>)}</div>
    )
}