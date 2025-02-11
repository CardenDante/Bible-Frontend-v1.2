// src/components/layout/header.tsx
import Link from 'next/link'
import { Button } from '../ui/button'
import { SearchBar } from '../common/search-bar'
import { UserNav } from './user-nav'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">BibleConnect</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/reading" className="text-sm font-medium text-secondary-500 hover:text-secondary-900">
              Reading
            </Link>
            <Link href="/community" className="text-sm font-medium text-secondary-500 hover:text-secondary-900">
              Community
            </Link>
            <Link href="/achievements" className="text-sm font-medium text-secondary-500 hover:text-secondary-900">
              Achievements
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <UserNav />
        </div>
      </div>
    </header>
  )
}