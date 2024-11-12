"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Iphone15Pro from "./ui/iphone-15-pro";
import Particles from "./ui/particles";
import WordRotate from "@/components/ui/word-rotate";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BlurFade from "./ui/blur-fade";
import { SignUpButton } from "@clerk/nextjs";

export function HeroSection() {

  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#4338ca" : "#4f46e5");
  }, [theme]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
          <div className="flex flex-col items-start w-full md:w-1/2 space-y-6">
            <BlurFade delay={0.25} inView>
              <div className="text-4xl max-w-[600px] w-auto h-auto lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-tight">
                <h1>Plaisync crea <WordRotate duration={4000} className="bg-gradient-to-r from-orange-400 via-indigo-600 to-indigo-900 text-transparent bg-clip-text" words={["Listas Mensuales", "Mixes Exclusivos", "Sesiones increibles"]} /> con lo mejor de tus canciones.</h1>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>

              <div className="max-w-[490px]">
                <p className="md:text-lg lg:text-xl max-w-md text-lg text-neutral-600 dark:text-neutral-400 font-normal"> Tu música, tus gustos, en una playlist personalizada. Déjanos sorprenderte con nuevas listas frescas cada mes. </p>
              </div>
            </BlurFade>
            <div className="w-auto">
              <BlurFade delay={0.25 * 2} inView>
                <SignUpButton>
                  <Button className="rounded-xl bg-indigo-200 text-indigo-600 bg-opacity-30 hover:bg-indigo-300/40 dark:bg-indigo-900 dark:text-indigo-500 dark:bg-opacity-30 dark:hover:bg-indigo-900/40" variant="secondary">
                    🎶 ¡Únete hoy mismo!
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </Button>
                </SignUpButton>
              </BlurFade>
            </div>
          </div>
          <div className="w-[400px] hidden p-2 md:w-1/2 md:flex lg:flex justify-center items-center animate-fade-up [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_20%,transparent)]">
            <BlurFade delay={0.25} inView>
              <Iphone15Pro
                className="size-[500px] md:size-[500px] lg:size-[700px] 2xl:size-[800px]"
                src="/images/playlist.PNG"
              />
            </BlurFade>

            <Particles
              className="absolute inset-0"
              quantity={160}
              ease={80}
              size={2.3}
              color={color}
              refresh
            />
          </div>
        </div>
      </div>
    </div>
  );
}