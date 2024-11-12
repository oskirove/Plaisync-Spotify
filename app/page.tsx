import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import TextReveal from "@/components/ui/text-reveal";
import { Headphones, Settings2, User } from "lucide-react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Reviews } from "@/components/Reviews";
import NumberTicker from "@/components/ui/number-ticker";
import ImageLanding from "@/components/ImageLanding";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="container mt-5 mx-auto px-4">
        <section>
          <HeroSection />
        </section>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
        <div className="relative container mx-auto px-4 py-24 max-w-7xl">
          <div className="text-start sm:text-center md:text-center space-y-4 pb-6 mx-auto">
            <p className="text-md text-indigo-500 font-mono font-medium tracking-wider uppercase">¿Cómo funciona?</p>
            <h2 className="mx-auto mt-4 max-w-sm text-3xl font-extrabold sm:max-w-4xl sm:text-4xl md:text-5xl">Es muy simple, tan solo debes seguir estos sencillos pasos</h2>
          </div>
          <NeonGradientCard>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="opacity: 1; filter: blur(0px); will-change: auto; transform: translateY(-6px);">
                <div className="rounded-lg border text-card-foreground bg-background border-none shadow-none">
                  <div className="p-6 space-y-4">
                    <div className="flex w-full items-center justify-start sm:justify-center md:justify-center">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-indigo-700 rounded-full flex items-center justify-center">
                        <User />
                      </div>
                    </div>
                    <h3 className="text-start sm:text-center md:text-center text-xl font-extrabold">
                      Inicia sesión en Spotify
                    </h3>
                    <p className="text-start sm:text-center md:text-center text-muted-foreground">
                      Accede a tu cuenta de Spotify para comenzar a disfrutar de todas las funcionalidades que ofrece Plaisync.
                    </p>
                  </div>
                </div>
              </div>
              <div className="opacity: 1; filter: blur(0px); will-change: auto; transform: translateY(-6px);">
                <div className="rounded-lg border text-card-foreground bg-background border-none shadow-none">
                  <div className="p-6 space-y-4">
                    <div className="flex w-full items-center justify-start sm:justify-center md:justify-center">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-indigo-700 rounded-full flex items-center justify-center">
                        <Settings2 />
                      </div>
                    </div>
                    <h3 className="text-start sm:text-center md:text-center text-xl font-extrabold">
                      Personaliza tu plantilla
                    </h3>
                    <p className="text-start sm:text-center md:text-center text-muted-foreground">
                      Personaliza tu plantilla de la playlist para que se ajuste a tus gustos y preferencias. Puedes cambiar el nombre, la descripción y la imagen de la playlist.
                    </p>
                  </div>
                </div>
              </div>
              <div className="opacity: 1; filter: blur(0px); will-change: auto; transform: translateY(-6px);">
                <div className="rounded-lg border text-card-foreground bg-background border-none shadow-none">
                  <div className="p-6 space-y-4">
                    <div className="flex w-full items-center justify-start sm:justify-center md:justify-center">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-indigo-700 rounded-full flex items-center justify-center">
                        <Headphones />
                      </div>
                    </div>
                    <h3 className="text-start sm:text-center md:text-center text-xl font-extrabold">
                      Disfruta de tus playlist
                    </h3>
                    <p className="text-start sm:text-center md:text-center text-muted-foreground">
                      Escucha y disfruta de tus playlists personalizadas cada mes en cualquier momento y lugar. ¡La música nunca se detiene!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </div>
        <div className="z-10 flex min-h-64 items-center justify-center">
          <TextReveal text="Llevar tus playlists al siguiente nivel nunca había sido tan sencillo." />
        </div>
        <ImageLanding />
        <div className="relative container mx-auto px-4 py-24 max-w-7xl">
          <div className="text-start sm:text-center md:text-center space-y-4 pb-6 mx-auto">
            <p className="text-md text-indigo-500 font-mono font-medium tracking-wider uppercase">Valoraciones</p>
            <h2 className=" mx-auto mt-4 pb-8 max-w-sm text-3xl font-extrabold sm:max-w-4xl sm:text-4xl md:text-5xl">
              Ya son más de <NumberTicker value={10000} /> usuarios que confían en nosotros
            </h2>
          </div>
          <Reviews />
        </div>
      </div>
    </main>
  );
}
