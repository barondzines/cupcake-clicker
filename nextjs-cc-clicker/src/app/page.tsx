"use client"
import CupcakeStore from "@/components/cupcakeStore";
import Upgrades from "@/components/upgrades";
import Image from "next/image";
import React, { createContext, useContext } from "react";


export default function Home() {


  return (
    <main className="">
      <section className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32">
        <div className="grid grid-cols-2 text-slate-700">
          <CupcakeStore />
          <Upgrades />
        </div>
      </section>
    </main>
  );
}
