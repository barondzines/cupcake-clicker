"use client"

import React, { useContext, useRef } from "react";
import { GameDataContext, GameDataContextType } from "@/app/context";
import Image from "next/image";

export default function CupcakeStore() {

    const { saveGameData, gameDataValues } = useContext(GameDataContext) as GameDataContextType;
    const cupcakeButton = useRef<HTMLButtonElement>(null)

    const createCupcake = () => {
        if (cupcakeButton.current !== null){
            var newData = {totalCupcakes: gameDataValues.totalCupcakes + 1}
            saveGameData(newData)
        }
    }

    return (
        <div className="content-start mt-48 grid grid-flow-row gap-4">
            <div className="text-2xl text-center align-middle m-auto">Total Cupcakes: {Math.round(gameDataValues.totalCupcakes * 100) / 100}</div>
            <button 
            type="button"
            ref={cupcakeButton}
            className="" 
            onClick={() => createCupcake()}
            > <Image
            src="/cupcake.png"
            width={500}
            height={500}
            alt="Cupcake to click"
        /></button>
        </div>
    );
}