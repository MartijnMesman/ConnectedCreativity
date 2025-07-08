'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="nav-content">
          <div className="flex items-center space-x-3">
            <Link href="/" className="nav-brand">
              Connected Creativity
            </Link>
          </div>
          <nav className="nav-menu">
            <Link 
              href="/" 
              className={isActive('/') && pathname === '/' ? 'nav-link-active' : 'nav-link'}
            >
              Home
            </Link>
            <Link 
              href="/course" 
              className={isActive('/course') ? 'nav-link-active' : 'nav-link'}
            >
              Modules
            </Link>
            <Link 
              href="/progress" 
              className={isActive('/progress') ? 'nav-link-active' : 'nav-link'}
            >
              Progress
            </Link>
            <Link 
              href="/resources" 
              className={isActive('/resources') ? 'nav-link-active' : 'nav-link'}
            >
              Resources
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}