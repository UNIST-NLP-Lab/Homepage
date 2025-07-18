"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<string>("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // 저장된 테마 불러오기
    const savedTheme = localStorage.getItem("theme") || "system"
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

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

  const applyTheme = (theme: string) => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else if (theme === "light") {
      root.classList.remove("dark")
    } else {
      // system theme
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (systemDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  }

  const setTheme = (theme: string) => {
    setCurrentTheme(theme)
    localStorage.setItem("theme", theme)
    applyTheme(theme)

    // 디버깅을 위한 콘솔 로그
    console.log("Theme changed to:", theme)
    console.log("HTML class list:", document.documentElement.classList.toString())
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-9 w-9 px-0"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Loading theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          onClick={forceToggle}
          variant="ghost"
          size="sm"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-9 w-9 px-0"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          <Sun className="h-4 w-4" />
          Light
          {currentTheme === "light" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          <Moon className="h-4 w-4" />
          Dark
          {currentTheme === "dark" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          <Monitor className="h-4 w-4" />
          System
          {currentTheme === "system" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
