"use client";

import { Calendar, HelpCircle, Home, Inbox, ListMusic, Music, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useUser } from "@clerk/nextjs";
import AnimatedShinyText from "./ui/animated-shiny-text";

const items = [
    {
        title: "Inicio",
        url: "#",
        icon: Home,
    },
    {
        title: "Buscar",
        url: "#",
        icon: Search,
    },
    {
        title: "Notificaciones",
        url: "#",
        icon: Inbox,
    },
    {
        title: "For Artists",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Ajustes",
        url: "#",
        icon: Settings,
    },
]

export default function SidebarDashboard() {

    const { user } = useUser();

    return (
        <Sidebar variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex h-12 items-center mx-1 rounded-xl shadow-lg bg-indigo-200 text-indigo-600 bg-opacity-30 dark:bg-indigo-900 dark:text-indigo-500 dark:bg-opacity-30 justify-start p-2 gap-2">
                            <p className="flex items-center gap-2 font-bold px-1"><ListMusic size={20} /> Espacio de {user?.fullName}</p>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>General</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent >
            <SidebarFooter>
                <SidebarGroupLabel>Soporte</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <HelpCircle /> Ayuda
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    )
}
