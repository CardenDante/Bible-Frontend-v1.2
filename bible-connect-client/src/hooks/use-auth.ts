// src/hooks/use-auth.ts
import { useCallback } from 'react'
import { useAuthStore } from '@/store/auth-store'
import { api } from '@/lib/api/client'

export const useAuth = () => {
  const { user, token, setUser, setToken } = useAuthStore()

  const login = useCallback(async (credentials: { email: string; password: string }) => {
    const response = await api.post('/auth/login', credentials)
    setUser(response.data.user)
    setToken(response.data.token)
  }, [setUser, setToken])

  const register = useCallback(async (userData: { name: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', userData)
    setUser(response.data.user)
    setToken(response.data.token)
  }, [setUser, setToken])

  const logout = useCallback(() => {
    setUser(null)
    setToken(null)
  }, [setUser, setToken])

  return {
    user,
    token,
    login,
    register,
    logout,
  }
}