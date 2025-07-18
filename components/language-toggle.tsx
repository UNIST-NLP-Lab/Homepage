"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Loading language</span>
      </Button>
    )
  }

  const handleLanguageChange = (newLanguage: "ko" | "en") => {
    if (newLanguage !== language) {
      setLanguage(newLanguage)
    }
  }

  // 현재 언어에 따라 토글할 언어 결정
  const toggleLanguage = () => {
    const nextLanguage = language === "ko" ? "en" : "ko"
    handleLanguageChange(nextLanguage)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button onClick={toggleLanguage} variant="ghost" size="sm" className="h-9 w-9 px-0">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        <DropdownMenuItem
          onClick={() => handleLanguageChange("ko")}
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          🇰🇷 한국어
          {language === "ko" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          🇺🇸 English
          {language === "en" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
