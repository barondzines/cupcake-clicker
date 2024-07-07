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
        buildings: [],
    });

    const saveGameData = (gameData: GameData) => {
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