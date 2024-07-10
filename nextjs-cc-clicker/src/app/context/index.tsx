"use client"

import { createContext, useContext, useEffect, useState } from "react"

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

export interface GameData {
    totalCupcakes: number
    prestige?: number,
    buildings?: Upgrade[],
}

export type GameDataContextType = {
    gameDataValues: GameData;
    saveGameData: (gameData: GameData) => void;
}

export const GameDataContext = createContext<GameDataContextType | null>(null);;

export function GameWrapper({ children } : {
    children: React.ReactNode;
}) {
    const [gameDataValues, setGameDataValues] = useState<GameData>({
        totalCupcakes: 0,
        prestige: 1,
        buildings: [
            {upgradeName: "cupcake", count: 1, initialCost: 5, currentCost: 5, isUnlocked:true, baseCPS: 0.5, currentCPS: 0.5,  icon:"cupcake-icon.png" },
            {upgradeName: "bakers", count: 0, initialCost: 10, currentCost: 10, isUnlocked:false, baseCPS: 1, currentCPS: 1,  icon:"bakers-hat-icon.png" },
            {upgradeName: "salesman", count: 0, initialCost: 100, currentCost: 100, isUnlocked:false, baseCPS: 2, currentCPS: 2,  icon:"bakers_hat.png" },
            {upgradeName: "store",  count: 0, initialCost: 1100, currentCost: 1100, isUnlocked:false, baseCPS: 5, currentCPS: 5,  icon:"bakers_hat.png" },
            {upgradeName: "factory", count: 0, initialCost: 12000, currentCost: 12000, isUnlocked:false, baseCPS: 10, currentCPS: 10,  icon:"bakers_hat.png" },
            {upgradeName: "corporate",   count: 0, initialCost: 130000, currentCost: 130000, isUnlocked:false, baseCPS: 15, currentCPS: 15,  icon:"bakers_hat.png" },
            {upgradeName: "research" ,    count: 0, initialCost: 1400000, currentCost: 1400000, isUnlocked:false, baseCPS: 20, currentCPS: 20,  icon:"bakers_hat.png" },
            {upgradeName: "moonbase",   count: 0, initialCost: 20000000, currentCost: 20000000, isUnlocked:false, baseCPS: 50, currentCPS: 50,  icon:"bakers_hat.png" },
            {upgradeName: "galactic",   count: 0, initialCost: 330000000, currentCost: 330000000, isUnlocked:false, baseCPS: 100, currentCPS: 100,  icon:"bakers_hat.png" },
            {upgradeName: "space",    count: 0, initialCost: 51000000000, currentCost: 51000000000, isUnlocked:false, baseCPS: 200, currentCPS: 200,  icon:"bakers_hat.png" },
            {upgradeName: "transporter",  count: 0, initialCost: 75000000000, currentCost: 75000000000, isUnlocked:false, baseCPS: 300, currentCPS: 300,  icon:"bakers_hat.png" },
            {upgradeName: "blackhole",   count: 0, initialCost: 1000000000000, currentCost: 1000000000000, isUnlocked:false, baseCPS: 500, currentCPS: 500,  icon:"bakers_hat.png" },
            {upgradeName: "timemachine", count: 0, initialCost: 14000000000000, currentCost: 14000000000000, isUnlocked:false, baseCPS: 1000, currentCPS: 1000,  icon:"bakers_hat.png" },
            ],
    });

    const saveGameData = (gameData: GameData) => {
        console.log("saveGameData " + gameData.totalCupcakes)
        const newGameData: GameData = {
          totalCupcakes: gameData.totalCupcakes,
          buildings: gameData.buildings,
        }
        setGameDataValues({...newGameData})
      }

    return (
        <GameDataContext.Provider value={{ gameDataValues, saveGameData }}>
            {children}
        </GameDataContext.Provider>
    )
}

export function useGameDataContext() {
    return useContext(GameDataContext)

}