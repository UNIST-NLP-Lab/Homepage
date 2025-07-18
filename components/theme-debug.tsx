"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ThemeDebug() {
  const [debugInfo, setDebugInfo] = useState({
    htmlClasses: "",
    localStorage: "",
    systemPreference: "",
    computedStyle: "",
  })

  const updateDebugInfo = () => {
    const html = document.documentElement
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const stored = localStorage.getItem("theme") || "none"
    const computedBg = window.getComputedStyle(document.body).backgroundColor

    setDebugInfo({
      htmlClasses: html.classList.toString() || "none",
      localStorage: stored,
      systemPreference: systemDark ? "dark" : "light",
      computedStyle: computedBg,
    })
  }

  useEffect(() => {
    updateDebugInfo()

    // 클래스 변경 감지
    const observer = new MutationObserver(updateDebugInfo)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
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
    updateDebugInfo()
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>다크모드 디버그 정보</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>HTML Classes:</strong>
            <div className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">{debugInfo.htmlClasses}</div>
          </div>
          <div>
            <strong>LocalStorage:</strong>
            <div className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">{debugInfo.localStorage}</div>
          </div>
          <div>
            <strong>System Preference:</strong>
            <div className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">{debugInfo.systemPreference}</div>
          </div>
          <div>
            <strong>Body Background:</strong>
            <div className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">{debugInfo.computedStyle}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={updateDebugInfo} variant="outline" size="sm">
            정보 새로고침
          </Button>
          <Button onClick={forceToggle} variant="outline" size="sm">
            강제 토글
          </Button>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm">
            <strong>테스트 방법:</strong> 위의 "강제 토글" 버튼을 클릭하여 다크모드가 전환되는지 확인하세요. HTML
            Classes에 "dark"가 추가/제거되고 배경색이 변경되어야 합니다.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
