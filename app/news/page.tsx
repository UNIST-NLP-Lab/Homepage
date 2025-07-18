"use client"

import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { FallbackImg } from "@/components/fallback-img"

const newsData = [
  {
    id: 1,
    title: "ACL 2025 Findings 논문 발표 성공",
    category: "논문",
    date: "2025.07",
    excerpt: "우리 연구실의 Knowledge Editing 연구가 ACL 2025 Findings에 채택되어 발표 예정입니다.",
    image: "/placeholder.png",
    tags: ["ACL", "Knowledge Editing", "논문발표"],
  },
  {
    id: 2,
    title: "재난안전연구원 과제 선정",
    category: "과제",
    date: "2025.05",
    excerpt: "우리 연구실이 재난안전연구원 \"생성형 AI기반 안전 제도 진단 지원 시스템 개발\" 과제에 선정되었습니다.",
    image: "/placeholder.png",
    tags: ["과제선정", "재난안전연구원", "생성형 AI"],
  },
  {
    id: 3,
    title: "첫번째 학생 합류",
    category: "인사",
    date: "2025.04",
    excerpt: "우리 연구실에 석박통합과정 민동욱 학생이 첫번째 학생으로 합류하였습니다.",
    image: "/placeholder.png",
    tags: ["AI대학원"],
  },
]

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <PageHeader title={t("news.title")} description={t("news.subtitle")} />

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          {/* 최신 뉴스 (Featured) */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{t("news.latest")}</h2>
            <Card className="border-0 shadow-xl overflow-hidden bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <FallbackImg
                    src={newsData[0].image ?? "/placeholder.png"}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="default"
                      className="bg-secondary dark:bg-secondary-foreground text-secondary-foreground dark:text-secondary"
                    >
                      {newsData[0].category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      {newsData[0].date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{newsData[0].title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">{newsData[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {newsData[0].tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* <Link
                    href={`/news/${newsData[0].id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {t("news.readMore")}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link> */}
                </div>
              </div>
            </Card>
          </div>

          {/* 뉴스 목록 */}
          <div>
            <h2 className="text-2xl font-bold mb-8">{t("news.all")}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsData.slice(1).map((news) => (
                <Card
                  key={news.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-white dark:bg-gray-800 dark:border dark:border-gray-700"
                >
                  <div className="aspect-video overflow-hidden">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <FallbackImg
                      src={news.image ?? "/placeholder.png"}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-secondary dark:bg-secondary-foreground text-secondary-foreground dark:text-secondary"
                      >
                        {news.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                        {news.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed dark:text-gray-300">{news.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {news.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {/* <Link
                      href={`/news/${news.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      {t("news.readMore")}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 더 보기 버튼
          <div className="text-center mt-12">
            <Link
              href="/news/archive"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("news.viewMore")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  )
}
