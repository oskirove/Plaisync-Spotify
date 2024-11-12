import Image from 'next/image'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import { Bot } from 'lucide-react'
import { Button } from './ui/button'

export default function ImageLanding() {
    return (
        <div className="rounded-xl border text-card-foreground w-full max-w-6xl mx-auto overflow-hidden shadow-lg mb-20 z-40">
            <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/3">
                    <AspectRatio
                        ratio={1 / 1}
                        className="flex items-center justify-center"
                    >
                        <Image
                            priority
                            src="/images/image_playsinc.png"
                            alt="Logo de la app web de organización y optimización de tareas Eslintask."
                            width={700}
                            height={700}
                            className="object-cover object-center"
                        />
                    </AspectRatio>
                </div>
                <div className="md:w-2/4 p-10 flex flex-col justify-center bg-white dark:bg-neutral-900 items-center md:items-start">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-center md:text-left">Tu playlist, nuestra IA</h2>
                    <p className="text-sm lg:text-md mb-6 text-center md:text-left">Con la inteligencia artificial de Plaisync, personalizamos tu experiencia musical de manera única. Cada mes, recibirás una lista de reproducción perfecta, adaptada a tus gustos y descubrimientos, todo sin esfuerzo. ¡Deja que la IA haga magia con tu música!</p>
                    <div>
                    <Button className="flex rounded-xl items-center bg-indigo-200 text-indigo-600 bg-opacity-30 hover:bg-indigo-300/40 dark:bg-indigo-900 dark:text-indigo-500 dark:bg-opacity-30 dark:hover:bg-indigo-900/40" variant="secondary">
                        <Bot /> Descubre nuestra IA
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
