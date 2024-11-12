import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import { NavMenu } from './NavMenu'
import { Button } from './ui/button'
import { PlayCircle } from 'lucide-react'
import Logo from './Logo'
import { SignInButton } from '@clerk/nextjs'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm">
            <nav className="flex flex-col sm:flex-row items-center p-5 max-w-7xl mx-auto">
                <div className="flex items-center justify-start">
                    <Logo />
                </div>
                <div className="flex-1 flex items-center justify-end gap-2">
                    <NavMenu />
                    <DarkModeToggle />
                    <SignInButton>
                    <Button className="flex rounded-xl items-center bg-indigo-200 text-indigo-600 bg-opacity-30 hover:bg-indigo-300/40 dark:bg-indigo-900 dark:text-indigo-500 dark:bg-opacity-30 dark:hover:bg-indigo-900/40" variant="secondary">
                        <PlayCircle /> Iniciar sesion
                    </Button>
                    </SignInButton>
                </div>
            </nav>
        </header>
    )
}
