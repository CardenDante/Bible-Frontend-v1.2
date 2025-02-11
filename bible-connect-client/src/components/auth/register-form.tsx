// src/components/auth/register-form.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useAuth } from '@/hooks/use-auth'

export const RegisterForm = () => {
  const router = useRouter()
  const { register } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await register(formData)
      router.push('/dashboard')
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-secondary-900">Create an account</h1>
        <p className="text-secondary-500">Enter your information to create your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e: { target: { value: any } }) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e: { target: { value: any } }) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e: { target: { value: any } }) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    </div>
  )
}