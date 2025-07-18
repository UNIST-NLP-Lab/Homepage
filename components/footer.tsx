"use client"

import Link from "next/link"
import { Brain } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full py-12 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="font-bold">AI Research Lab</h3>
                <p className="text-sm text-gray-400">LLM & MoE Laboratory</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>ailab@university.ac.kr</li>
              <li>+82-2-1234-5678</li>
              <li>서울특별시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
