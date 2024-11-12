'use client';

import DarkModeToggle from '@/components/DarkModeToggle';
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'


export default function HeaderDashboard() {

  const { user } = useUser();

  return (
    <header className="flex sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center w-full justify-start mx-7">
      </div>
      <nav className="flex w-full justify-end items-center p-2 px-1 mx-2 gap-3">
        <DarkModeToggle />
        <div className="flex rounded-xl bg-indigo-200 text-indigo-600 bg-opacity-30 dark:bg-indigo-900 dark:text-indigo-500 dark:bg-opacity-30 p-2 items-center gap-2">
          <UserButton />
          <p>{user?.firstName}</p>
        </div>
      </nav>
    </header>
  )
}
