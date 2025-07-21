"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Brain, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const navigation = [
  { name: "nav.home", href: "/" },
  { name: "nav.research", href: "/research" },
  { name: "nav.team", href: "/team" },
  { name: "nav.publications", href: "/publications" },
  { name: "nav.news", href: "/news" },
  { name: "nav.contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language } = useLanguage()

  // 페이지 변경 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  // 강제 토글 기능
  const forceToggle = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    console.log("Force toggle executed, HTML classes:", html.classList.toString())
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center px-4 md:px-6 gap-2">
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0 min-w-0">
          <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white truncate">UNIST NLP Lab</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 truncate hidden sm:block">LLM Laboratory</p>
          </div>
        </Link>

        {/* Spacer to push right section to the end */}
        <div className="flex-1"></div>

        {/* Right section with navigation and controls */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300",
                )}
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(!isMenuOpen)
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b dark:border-gray-800 shadow-lg md:hidden">
            <nav className="container px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-medium py-2 px-3 rounded-md transition-colors",
                      pathname === item.href
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                ))}

                {/* Mobile Controls */}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <div className="flex items-center justify-between py-2 px-3">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">{t("nav.language")}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {language === "ko" ? "🇰🇷 한국어" : "🇺🇸 English"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">{t("nav.theme")}</span>
                    <ThemeToggle />
                  </div>
                  <Button onClick={forceToggle} variant="outline" size="sm" className="w-full bg-transparent">
                    {t("nav.forceToggle")}
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}