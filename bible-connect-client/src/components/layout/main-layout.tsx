// src/components/layout/main-layout.tsx
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Footer } from './footer'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}