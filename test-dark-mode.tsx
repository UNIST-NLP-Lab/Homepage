"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestDarkMode() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // 현재 다크모드 상태 확인
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      setIsDark(false)
      localStorage.setItem("theme", "light")
    } else {
      html.classList.add("dark")
      setIsDark(true)
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">다크모드 테스트</h1>
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-transparent"
          >
            {isDark ? (
              <>
                <Sun className="h-4 w-4" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                Dark Mode
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">카드 1</h2>
            <p className="text-gray-600 dark:text-gray-300">
              이 카드는 다크모드에서 배경이 어두워지고 텍스트가 밝아져야 합니다.
            </p>
          </div>

          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">카드 2</h2>
            <p className="text-blue-700 dark:text-blue-300">
              이 카드는 파란색 테마로 다크모드에서도 적절히 변경되어야 합니다.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">카드 3</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              현재 테마 상태: <span className="font-bold">{isDark ? "다크모드" : "라이트모드"}</span>
            </p>
            <Button onClick={toggleDarkMode} className="bg-blue-600 hover:bg-blue-700 text-white">
              테마 전환
            </Button>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-100">그라디언트 카드</h2>
            <p className="text-purple-700 dark:text-purple-300">그라디언트 배경도 다크모드에서 적절히 조정됩니다.</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">테스트 결과</h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            위의 버튼을 클릭했을 때 모든 요소들의 색상이 변경되면 다크모드가 정상 작동하는 것입니다.
          </p>
        </div>
      </div>
    </div>
  )
}
