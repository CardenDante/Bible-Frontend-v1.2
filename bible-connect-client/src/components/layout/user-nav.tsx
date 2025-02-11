// src/components/layout/user-nav.tsx
import Link from 'next/link'
import { Button } from '../ui/button'
import { useAuth } from '@/hooks/use-auth'

export const UserNav = () => {
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button variant="ghost">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Sign up</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" onClick={logout}>
        Logout
      </Button>
    </div>
  )
}