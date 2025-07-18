"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Team", href: "/team" },
  { name: "Publications", href: "/publications" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export function MobileMenu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 bg-white border-b shadow-lg z-50 md:hidden transition-transform duration-200",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <nav className="container px-4 py-6">
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium py-3 px-4 rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
