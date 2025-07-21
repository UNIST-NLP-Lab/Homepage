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
                  <CardTitle className="text-gray-900 dark:text-white">{t("home.research.knowledge_editing.title")}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {t("home.research.knowledge_editing.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• External Memory Editing</li>
                    <li>• Local Parameter Editing</li>
                    <li>• Representation FineTuning</li>
                    <li>• Hypernetwork Based Editing</li>
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
                          NLP
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          Information Retrieval
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
                  title: "SeqMMR: Sequential Model Merging and LLM Routing for Enhanced Batched Sequential Knowledge Editing",
                  authors: "Shanbao Qiao, Xuebing Liu, Akshat Gupta, Seung-Hoon Na",
                  venue: "ACL 2025 Findings",
                  description: "-",
                },
                {
                  title: "Wasserstein Distance Constraint and Parameter Sparsification for Batched and Iterative Knowledge Editing",
                  authors: "Shanbao Qiao, Xuebing Liu,  Seung-Hoon Na",
                  venue: "AAAI 2025",
                  description: "-",
                },
                {
                  title: "SARCAT: Generative Span-Act Guided Response Generation using Copy-enhanced Target Augmentation",
                  authors: "Jeong-Doo Lee, Hyeongjun Choi, Beomseok Hong, Youngsub Han, Byoung-Ki Jeon,  Seung-Hoon Na",
                  venue: "EMNLP 2024 Findings",
                  description: "-",
                },
                {
                  title: "DistillMIKE: Editing Distillation of Massive In-Context Knowledge Editing in Large Language Models",
                  authors: "Shanbao Qiao, Xuebing Liu, Seung-Hoon Na",
                  venue: "ACL 2024 Findings",
                  description: "-",
                },
                {
                  title: "RADCoT: Retrieval-Augmented Distillation to Specialization Models for Generating Chain-of-Thoughts in Query Expansion",
                  authors: "Sung-Min Lee, Eunhwan Park, DongHyeon Jeon, Inho Kang, and Seung-Hoon Na",
                  venue: "COLING 2024",
                  description: "-",
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
                  date: "2025.05",
                  title: "재난안전연구원 과제 선정",
                  description: "생성형 AI 기반 안전제도 진단 지원시스템 개발",
                },
                {
                  date: "2025.04",
                  title: "새로운 학생 합류",
                  description: "석박통합과정 민동욱 학생 합류",
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
                        울산광역시 울주군 유니스트로 50
                        <br />
                        제3공학관 106동 807A호
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{t("home.contact.email")}</p>
                      <p className="text-gray-600 dark:text-gray-300">nash@unist.ac.kr</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Github className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-300">github.com/UNIST-NLP-Lab</p>
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
                      <li>• 박사과정 학생 (NLP, LLM, MoE, RAG)</li>
                      <li>• 석사과정 학생 (NLP, LLM, MoE, RAG)</li>
                      <li>• 포스닥 연구원 (NLP, LLM, MoE, RAG)</li>
                      <li>• 학부 인턴 (NLP, LLM, MoE, RAG)</li>
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
