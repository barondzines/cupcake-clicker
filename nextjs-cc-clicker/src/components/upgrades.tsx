"use client"

import React, { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import { GameData, GameDataContext, GameDataContextType } from "@/app/context";

interface Upgrade {
    upgradeName: string,
    count: number,
    initialCost: number,
    currentCost: number,
    isUnlocked: boolean,
    baseCPS: number,
    currentCPS: number,
    icon:string,
}

export default function Upgrades() {    
    const [firstTimeLoad, setFirstTimeLoad] = useState(true)

    const { saveGameData, gameDataValues } = useContext(GameDataContext) as GameDataContextType;

    const buyUpgrade = (cost: number, upgradeName: string) => {
    
        gameDataValues.buildings?.map((upgrade) => {
            if (upgrade.upgradeName == upgradeName) 
                {
                    upgrade.count += 1
                    upgrade.currentCost = upgrade.initialCost * Math.round(Math.pow(1.07, upgrade.count) * 100) / 100
                    upgrade.currentCPS = (upgrade.baseCPS * upgrade.count) * 1.07
                    console.log("Upgrade: " + upgrade.currentCost + "Current CPS " + upgrade.currentCPS)
                    var newTotalCupcakes = gameDataValues.totalCupcakes - upgrade.currentCost < 0 ? 0 : gameDataValues.totalCupcakes - upgrade.currentCost
                    var newData = {
                        totalCupcakes: newTotalCupcakes,
                        buildings: gameDataValues.buildings
                    }
                    saveGameData(newData)
                }
        })
    }

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            var totalCPS = 0
            gameDataValues.buildings?.forEach((upgrade) => {
                if (upgrade.isUnlocked == true && upgrade.count > 0 && upgrade.upgradeName != "cupcake")
                    {
                       totalCPS = totalCPS + upgrade.currentCPS
                    }
            })

            if (totalCPS > 0)
            {
                addTotalCPS(totalCPS)
            }

        }, 2000);

        return () => clearInterval(interval);
    }, [gameDataValues, setInterval]);

    const addTotalCPS = (totalCPS: number) => {
        console.log("Total CPS " + totalCPS)
        if (totalCPS > 0) {
            var newData: GameData = {
                totalCupcakes: gameDataValues.totalCupcakes + totalCPS,
                buildings: gameDataValues.buildings
            }

            saveGameData(newData)
        }
    }

    const unlockUpgrade = (upgradeName: string) => {
        gameDataValues.buildings?.map((upgrade) => {
            if (upgrade.upgradeName == upgradeName && gameDataValues.totalCupcakes >= upgrade.currentCost) 
                {
                    console.log("upgrading")
                    upgrade.isUnlocked = true
                    upgrade.count += 1
                    upgrade.currentCPS = (upgrade.baseCPS * upgrade.count) * upgrade.baseCPS
                    var newTotalCupcakes = gameDataValues.totalCupcakes - upgrade.initialCost
                    var newData = {
                        totalCupcakes: newTotalCupcakes,
                        buildings: gameDataValues.buildings
                    }
                    saveGameData(newData)
                }
        })
    }

    return (
        <div className="upgrade-column px-10">
            {gameDataValues.buildings?.map((upgrade, index) => (
                upgrade.isUnlocked == true ? 
                    <div key={index + upgrade.upgradeName} className={`
                    grid gap-4 mt-4 p-8 bg-slate-500 rounded-md  border-2 grid-cols-4
                    ${upgrade.currentCost <= gameDataValues.totalCupcakes ? 'border-red-400' : 'border-gray-600'}
                    `}>
                        <div>
                            {<Image
                                src={`/${upgrade.icon}`}
                                width={80}
                                height={80}
                                alt={`Icon for ${upgrade.upgradeName}`}
                            />}
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="capitalize text-2xl">{upgrade.upgradeName}</div>
                            <div className="flex">
                                <div className="auto">{<Image
                                src="/cupcake.png"
                                width={30}
                                height={30}
                                alt={`Icon for ${upgrade.upgradeName}`}
                            />}</div>
                            <div className="auto">{upgrade.initialCost >= upgrade.currentCost ? upgrade.initialCost : Math.round(upgrade.currentCost)}</div></div>
                        </div>
                        <div className="text-2xl text-center align-middle m-auto">{upgrade.count}</div>
                        {upgrade.currentCost <= gameDataValues.totalCupcakes && upgrade.isUnlocked == true &&
                            <div>
                                <button onClick={() => buyUpgrade(upgrade.currentCost, upgrade.upgradeName)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow">Buy Upgrade</button>
                            </div>
                        }
                    </div> : <div key={index + upgrade.upgradeName} className={`
                    mt-4 p-8 bg-slate-500 rounded-md  border-2
                    ${upgrade.initialCost <= gameDataValues.totalCupcakes || upgrade.currentCost <= gameDataValues.totalCupcakes ? 'border-red-400' : 'border-gray-600'}
                    `}><div className="text-center align-middle m-auto">{upgrade.currentCost <= gameDataValues.totalCupcakes && upgrade.isUnlocked == false ?
                        <div>
                            <button onClick={() => unlockUpgrade(upgrade.upgradeName)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow">Buy Upgrade</button>
                        </div> : <Image
                                className="text-center align-middle m-auto"
                                src="/lock-icon.png"
                                width={30}
                                height={30}
                                alt={`Icon for ${upgrade.upgradeName}`}
                            />
                    }</div></div>
            ))}
        </div>
    );
}