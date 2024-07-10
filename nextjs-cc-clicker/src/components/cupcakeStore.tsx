"use client"

import React, { useContext, useRef, useState } from "react";
import { GameDataContext, GameDataContextType } from "@/app/context";
import Image from "next/image";

export default function CupcakeStore() {

    const { saveGameData, gameDataValues } = useContext(GameDataContext) as GameDataContextType;
    const [cupcakeCPS, setCupCakeCPS] = useState(0)

    const cupcakeButton = useRef<HTMLButtonElement>(null)

    const createCupcake = () => {
        console.log("click cupcake")
        if (cupcakeButton.current !== null){
            getCupcakeBuildingCps()
            console.log("current CPS ", cupcakeCPS)
            var newData = {
                totalCupcakes: gameDataValues.totalCupcakes + cupcakeCPS,
                buildings: gameDataValues.buildings
            }
            saveGameData(newData)
        }
    }

    const getCupcakeBuildingCps = () =>{
        gameDataValues.buildings?.map((upgrade) => {
            if (upgrade.upgradeName == "cupcake") 
                {
                    if(cupcakeCPS != upgrade.currentCPS)
                        {
                            console.log("currentCPS cupcake " + upgrade.currentCPS)
                            setCupCakeCPS(upgrade.currentCPS)
                        }
                }
            })
    }

    return (
        <div className="">
            <div className="content-start mt-48 grid-flow-row gap-4">
                <div className="text-2xl text-center align-middle m-auto">Total Cupcakes: {Math.round(gameDataValues.totalCupcakes * 100) / 100}</div>
                <div className="text-center align-middle m-auto">
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
        </div>
        </div>
    );
}