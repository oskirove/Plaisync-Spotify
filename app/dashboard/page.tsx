import BlurFade from "@/components/ui/blur-fade";
import { UserButton } from "@clerk/nextjs";
import HeaderDashboard from "./components/HeaderDashboard";

export default function Dashboard() {
  return (
    <main>
      <div className="m-3 px-2">
        <HeaderDashboard />
        <BlurFade delay={0.25} inView>
          <div className="flex flex-col w-full md:flex-row items-center justify-start gap-6">

          </div>
        </BlurFade>
      </div>
    </main>
  )
}
