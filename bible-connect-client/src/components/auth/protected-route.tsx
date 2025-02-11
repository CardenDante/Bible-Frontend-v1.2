// src/components/auth/protected-route.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return <>{children}</>
}