import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import DotPattern from "./ui/dot-pattern";

const reviews = [
    {
        name: "Javier López",
        username: "@javilopez._",
        body: "Plaisync ha cambiado mi forma de escuchar música. Cada mes tengo una playlist perfecta con mis favoritos y nuevas sorpresas 🎶 ¡Me fascina!",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F57%2F1e%2F7a%2F571e7a7462acdc17e71896712e910dfe.jpg&f=1&nofb=1&ipt=5ba819c4e0e13668ab82647b581496bd04a34bdff107d02cfa28b9ba926fe899&ipo=images",
    },
    {
        name: "Diego Fernández",
        username: "@diegofdez_",
        body: "Lo mejor de Plaisync es la sencillez y la sorpresa mensual. Cada playlist parece hecha a mi medida, ¡me encanta!",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbe%2F7d%2Fc0%2Fbe7dc0810740a8e647efa33a3eae1657.jpg&f=1&nofb=1&ipt=9a16d4d2b771f5a9be4a75c5f1cdd37f3805d5af695cf2dee32951ca75ec827f&ipo=images",
    },
    {
        name: "Marta Sánchez",
        username: "@martaa.sanchezz",
        body: "Es como redescubrir mis canciones favoritas cada mes. La selección de Plaisync mezcla mis gustos con nuevas recomendaciones. ¡Un must para fans de Spotify!",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F5a%2F18%2F7e%2F5a187e40c8c087cb87281b6ad759308f.jpg&f=1&nofb=1&ipt=95e1c2a0ded40d7513cd901b10ea1417667680d3b3b5cc02b4affe18189b4071&ipo=images",
    },
    {
        name: "Andrea Martínez",
        username: "@andreamtz",
        body: "Muy práctico y fácil de usar. Plaisync me ahorra tiempo y siempre tengo una playlist fresca cada mes. ¡No puedo vivir sin ella! ❤️",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0a%2F98%2F9c%2F0a989c2ec447376dab5913db6ce0b465.png&f=1&nofb=1&ipt=c89ecb465a7bca9e9d1c9bbab5910b456d2f7c25b69fefafadb84e990d9c42b0&ipo=images",
    },
    {
        name: "Laura Gómez",
        username: "@laura.gmz",
        body: "Me encanta cómo Plaisync elige mis canciones más escuchadas y las convierte en playlists mensuales. Es genial no tener que crear listas yo misma.",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads.vibra.co%2F1%2F2022%2F08%2Ffotos-de-perfil-aesthetic-1.jpg&f=1&nofb=1&ipt=3438a48bad73d4baf9854acc5fef844455fd615865d742453acae006c6f3b17d&ipo=images",
    },
    {
        name: "Carlos Ruiz",
        username: "@carlos_ruiz",
        body: "Siempre quise una playlist que reflejara mi estilo musical, ¡y Plaisync lo logra! Perfecto para los amantes de la música.",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9d%2F6b%2F6a%2F9d6b6a0bf0c45cb3e5a85fd72e545dae.jpg&f=1&nofb=1&ipt=f2f2616e20f41422c11a8e011fbfdd9ece9eb23e2c047c4be6bd34678de8300a&ipo=images",
    },    
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Reviews() {
    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            />
        </div>

    );
}
