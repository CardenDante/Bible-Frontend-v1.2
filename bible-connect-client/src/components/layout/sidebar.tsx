// src/components/layout/sidebar.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  HomeIcon, 
  BookOpenIcon, 
  UsersIcon, 
  TrophyIcon, 
  ChartBarIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Reading', href: '/reading', icon: BookOpenIcon },
  { name: 'Community', href: '/community', icon: UsersIcon },
  { name: 'Achievements', href: '/achievements', icon: TrophyIcon },
  { name: 'Leaderboard', href: '/leaderboard', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
]

export const Sidebar = () => {
  const router = useRouter()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="mt-5 flex-1 space-y-1 px-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                router.pathname === item.href
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  router.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-secondary-400 group-hover:text-primary-600'
                }`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}