import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";


const Intro = () => {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col bg-black px-4">
            <h2
                className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Calculate the, <br /> Printing Cost.
            </h2>
            <div
                className="max-w-xl md:mb-[16rem]  mx-auto text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center">
                Get the best prices from our expert system, including printing cost and downloadable PDFs , totally free.
                {/* <div>
                    <button className="px-2 py-1 border-0 cursor-pointer hover:bg-neutral-400 bg-neutral-200 text-[19px] text-black rounded-lg my-8 font-bold">Get Started</button>
                </div> */}
            </div>

        </BackgroundLines>
    );
}

export default Intro;
