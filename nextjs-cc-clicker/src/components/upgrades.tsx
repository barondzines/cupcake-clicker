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

    const { saveGameData, gameDataValues } = useContext(GameDataContext) as GameDataContextType;

    const [upgradeData, setUpgradeData] = useState<Upgrade[]>([
        {upgradeName: "bakers", count: 0, initialCost: 10, currentCost: 10, isUnlocked:true, baseCPS: 1, currentCPS: 10,  icon:"bakers_hat.png" },
        {upgradeName: "salesman", count: 0, initialCost: 100, currentCost: 100, isUnlocked:false, baseCPS: 2, currentCPS: 100,  icon:"bakers_hat.png" },
        {upgradeName: "store",  count: 0, initialCost: 1100, currentCost: 1100, isUnlocked:false, baseCPS: 5, currentCPS: 1100,  icon:"bakers_hat.png" },
        {upgradeName: "factory", count: 0, initialCost: 12000, currentCost: 12000, isUnlocked:false, baseCPS: 10, currentCPS: 12000,  icon:"bakers_hat.png" },
        {upgradeName: "corporate",   count: 0, initialCost: 130000, currentCost: 130000, isUnlocked:false, baseCPS: 15, currentCPS: 130000,  icon:"bakers_hat.png" },
        {upgradeName: "research" ,    count: 0, initialCost: 1400000, currentCost: 1400000, isUnlocked:false, baseCPS: 20, currentCPS: 1400000,  icon:"bakers_hat.png" },
        {upgradeName: "moonbase",   count: 0, initialCost: 20000000, currentCost: 20000000, isUnlocked:false, baseCPS: 50, currentCPS: 20000000,  icon:"bakers_hat.png" },
        {upgradeName: "galactic",   count: 0, initialCost: 330000000, currentCost: 330000000, isUnlocked:false, baseCPS: 100, currentCPS: 330000000,  icon:"bakers_hat.png" },
        {upgradeName: "space",    count: 0, initialCost: 51000000000, currentCost: 51000000000, isUnlocked:false, baseCPS: 200, currentCPS: 51000000000,  icon:"bakers_hat.png" },
        {upgradeName: "transporter",  count: 0, initialCost: 75000000000, currentCost: 75000000000, isUnlocked:false, baseCPS: 300, currentCPS: 75000000000,  icon:"bakers_hat.png" },
        {upgradeName: "blackhole",   count: 0, initialCost: 1000000000000, currentCost: 1000000000000, isUnlocked:false, baseCPS: 500, currentCPS: 1000000000000,  icon:"bakers_hat.png" },
        {upgradeName: "timemachine", count: 0, initialCost: 14000000000000, currentCost: 14000000000000, isUnlocked:false, baseCPS: 1000, currentCPS: 14000000000000,  icon:"bakers_hat.png" },
        ])

    const buyUpgrade = (cost: number, upgradeName: string) => {
    
        upgradeData.map((upgrade) => {
            if (upgrade.upgradeName == upgradeName && gameDataValues.totalCupcakes <= upgrade.currentCost) 
                {
                    upgrade.count += 1
                    upgrade.currentCost = upgrade.initialCost * Math.round(Math.pow(1.07, upgrade.count) * 100) / 100
                    upgrade.currentCPS = upgrade.baseCPS * upgrade.count

                    console.log(upgrade.currentCost)
                    setUpgradeData(upgradeData)
                    var newTotalCupcakes = gameDataValues.totalCupcakes - upgrade.currentCost < 0 ? 0 : gameDataValues.totalCupcakes - upgrade.currentCost
                    var newData = {
                        totalCupcakes: newTotalCupcakes,
                        buildings: upgradeData 
                    }
                    saveGameData(newData)
                }
        })
    }

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            upgradeData.map((upgrade) => {
                if (upgrade.isUnlocked == true && upgrade.count > 0)
                {
                    var newData: GameData = {
                        totalCupcakes: gameDataValues.totalCupcakes + upgrade.currentCPS,
                        buildings: upgradeData 
                    }
                    saveGameData(newData)
                }
            })
        }, 2000);

        return () => clearInterval(interval);
    }, [gameDataValues, setInterval]);

    const unlockUpgrade = () => {
        upgradeData.map((upgrade) => {
            if (upgrade.upgradeName == upgradeName && gameDataValues.totalCupcakes <= upgrade.currentCost) 
                {
                    upgrade.count += 1
                    upgrade.currentCost = upgrade.initialCost * Math.round(Math.pow(1.07, upgrade.count) * 100) / 100
                    upgrade.currentCPS = upgrade.baseCPS * upgrade.count

                    console.log(upgrade.currentCost)
                    setUpgradeData(upgradeData)
                    var newTotalCupcakes = gameDataValues.totalCupcakes - upgrade.currentCost < 0 ? 0 : gameDataValues.totalCupcakes - upgrade.currentCost
                    var newData = {
                        totalCupcakes: newTotalCupcakes,
                        buildings: upgradeData 
                    }
                    saveGameData(newData)
                }
        })
    }

    return (
        <div className="upgrade-column flex-col bg-slate-400 px-10">
            {upgradeData.map((upgrade, index) => (
                upgrade.isUnlocked == true ? 
                    <div key={index + upgrade.upgradeName} className={`
                    grid gap-4 mt-4 p-8 bg-slate-500 rounded-md  border-2
                    ${upgrade.initialCost <= gameDataValues.totalCupcakes || upgrade.currentCost <= gameDataValues.totalCupcakes ? 'border-red-400 grid-cols-4' : 'border-gray-600 grid-cols-3'}
                    `}>
                        <div>{<Image
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
                            <div className="auto">{upgrade.initialCost >= upgrade.currentCost ? upgrade.initialCost : upgrade.currentCost}</div></div>
                        </div>
                        <div className="text-2xl text-center align-middle m-auto">{upgrade.count}</div>
                        {upgrade.initialCost <= gameDataValues.totalCupcakes &&
                            <div>
                                <button onClick={() => buyUpgrade(upgrade.currentCost, upgrade.upgradeName)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow">Buy Upgrade</button>
                            </div>
                        }
                    </div> : <div>Needs to be unlocked</div>
            ))}
        </div>
    );
}