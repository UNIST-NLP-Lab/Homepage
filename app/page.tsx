"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Users, BookOpen, Award, Mail, MapPin, Github, ExternalLink, Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function Component() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 mx-auto lg:mx-0"
                  >
                    {t("home.hero.badge")}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
                    {t("home.hero.title")}
                    <span className="text-blue-600 dark:text-blue-400">{t("home.hero.titleHighlight")}</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                    {t("home.hero.description")}
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                    asChild
                  >
                    <Link href="/research">
                      {t("home.hero.researchBtn")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">{t("home.hero.joinBtn")}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-8">
                  <div className="h-full w-full rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Brain className="h-24 w-24 text-blue-600 dark:text-blue-400 mx-auto" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {t("home.hero.currentFocus")}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {t("home.hero.efficientLLM")}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{t("home.hero.moeArch")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section id="research" className="w-full py-20 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                {t("home.research.title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("home.research.subtitle")}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{t("home.research.llm.title")}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {t("home.research.llm.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Parameter-Efficient Fine-tuning</li>
                    <li>• Model Compression & Quantization</li>
                    <li>• Multi-modal Language Models</li>
                    <li>• In-context Learning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{t("home.research.moe.title")}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {t("home.research.moe.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Sparse MoE Architectures</li>
                    <li>• Expert Routing Algorithms</li>
                    <li>• Load Balancing Strategies</li>
                    <li>• Distributed Training</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{t("home.research.efficient.title")}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {t("home.research.efficient.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Green AI Computing</li>
                    <li>• Edge AI Deployment</li>
                    <li>• Federated Learning</li>
                    <li>• Hardware-Software Co-design</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                asChild
              >
                <Link href="/research">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {t("home.research.viewAll")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                {t("home.team.title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("home.team.subtitle")}</p>
            </div>

            {/* Principal Investigator */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
                {t("home.team.pi")}
              </h3>
              <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center">
                      <Users className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {t("home.team.professor")}
                      </h4>
                      <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">{t("home.team.professorTitle")}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{t("home.team.professorDesc")}</p>
                      <div className="flex justify-center md:justify-start gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          Machine Learning
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          Deep Learning
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          NLP
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
                asChild
              >
                <Link href="/team">
                  <Users className="mr-2 h-4 w-4" />
                  {t("home.team.meetTeam")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Recent Publications */}
        <section id="publications" className="w-full py-20 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                {t("home.publications.title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("home.publications.subtitle")}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Efficient Mixture of Experts for Large Language Models",
                  authors: "Kim AI, Park Research, Lee Postdoc",
                  venue: "NeurIPS 2024",
                  description: "새로운 MoE 라우팅 알고리즘을 통해 계산 효율성을 40% 향상시킨 연구",
                },
                {
                  title: "Parameter-Efficient Fine-tuning with Adaptive Experts",
                  authors: "Choi Master, Jung Student, Kim AI",
                  venue: "ICML 2024",
                  description: "적응형 전문가 네트워크를 활용한 효율적인 파인튜닝 방법론",
                },
                {
                  title: "Scaling Laws for Mixture of Experts Language Models",
                  authors: "Lee Postdoc, Han Research, Kim AI",
                  venue: "ICLR 2024",
                  description: "MoE 언어 모델의 스케일링 법칙에 대한 이론적, 실험적 분석",
                },
                {
                  title: "Green AI: Energy-Efficient Training of Large Models",
                  authors: "Song Intern, Park Research, Kim AI",
                  venue: "AAAI 2024",
                  description: "대규모 모델의 친환경적 학습을 위한 새로운 최적화 기법",
                },
              ].map((paper, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 text-gray-900 dark:text-white">{paper.title}</CardTitle>
                        <CardDescription className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                          {paper.authors}
                        </CardDescription>
                        <Badge
                          variant="outline"
                          className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                        >
                          {paper.venue}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{paper.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                asChild
              >
                <Link href="/publications">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {t("home.publications.viewAll")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* News & Updates */}
        <section id="news" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                {t("home.news.title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("home.news.subtitle")}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  date: "2024.12.15",
                  title: "NeurIPS 2024 논문 발표",
                  description: "MoE 효율성 개선 연구로 spotlight 논문 선정",
                },
                {
                  date: "2024.11.20",
                  title: "새로운 연구원 합류",
                  description: "Google Research 출신 박연구 박사 합류",
                },
                {
                  date: "2024.10.30",
                  title: "연구비 수주",
                  description: "과기정통부 AI 대학원 사업 10억원 수주",
                },
                {
                  date: "2024.10.15",
                  title: "국제 워크샵 개최",
                  description: "LLM & MoE 국제 워크샵 성공적 개최",
                },
                {
                  date: "2024.09.25",
                  title: "산학협력 체결",
                  description: "네이버, 카카오와 AI 연구 협력 MOU 체결",
                },
                {
                  date: "2024.09.10",
                  title: "오픈소스 공개",
                  description: "EfficientMoE 라이브러리 GitHub 공개",
                },
              ].map((news, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{news.date}</p>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{news.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{news.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
                asChild
              >
                <Link href="/news">
                  <Calendar className="mr-2 h-4 w-4" />
                  {t("home.news.viewAll")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                {t("home.contact.title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("home.contact.subtitle")}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{t("home.contact.info")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{t("home.contact.address")}</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        서울특별시 강남구 테헤란로 123
                        <br />
                        AI대학교 공과대학 301호
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{t("home.contact.email")}</p>
                      <p className="text-gray-600 dark:text-gray-300">ailab@university.ac.kr</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Github className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-300">github.com/ai-research-lab</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{t("home.contact.admission")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{t("home.contact.admissionDesc")}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{t("home.contact.fields")}</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• 박사과정 학생 (Machine Learning, NLP)</li>
                      <li>• 석사과정 학생 (Computer Science)</li>
                      <li>• 포스닥 연구원 (AI Systems)</li>
                      <li>• 학부 인턴 (Programming, Research)</li>
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                    asChild
                  >
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      {t("home.contact.inquiry")}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
