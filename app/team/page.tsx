"use client"

import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, Github, ExternalLink, GraduationCap, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <PageHeader title={t("team.title")} description={t("team.subtitle")} />

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <Tabs defaultValue="faculty" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="faculty">{t("team.faculty")}</TabsTrigger>
              <TabsTrigger value="students">{t("team.students")}</TabsTrigger>
            </TabsList>

            <TabsContent value="faculty" className="space-y-12">
              <div className="max-w-5xl mx-auto">
                <Card className="border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 p-6 md:p-8 flex items-center justify-center">
                      <div className="h-32 w-32 md:h-48 md:w-48 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                        <Users className="h-16 w-16 md:h-24 md:w-24 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                            {t("home.team.professor")}
                          </h2>
                          <p className="text-lg text-blue-600 mb-4">{t("home.team.professorTitle")}</p>
                        </div>
                        <div className="flex gap-2">
                          <Link href="#" className="text-gray-500 hover:text-gray-700">
                            <Mail className="h-5 w-5" />
                          </Link>
                          <Link href="#" className="text-gray-500 hover:text-gray-700">
                            <Github className="h-5 w-5" />
                          </Link>
                          <Link href="#" className="text-gray-500 hover:text-gray-700">
                            <ExternalLink className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>

                      <div className="space-y-6 mt-6">
                        <div>
                          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("team.biography")}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{t("home.team.professorDesc")}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("team.interests")}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            >
                              Large Language Models
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            >
                              Mixture of Experts
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            >
                              Knowledge Editing
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            >
                              Natural Language Processing
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            >
                              Machine Learning
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("team.education")}</h3>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>Ph.D. in Computer Science, POSTECH</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>M.S. in Computer Science, POSTECH</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>B.S. in Information and Computer Science, Ajou University</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("team.awards")}</h3>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>한국정보과학회 특별 공로상, 2024</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>한국정보과학회 최우수 논문상 2022</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="students" className="space-y-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {[
                  {
                    name: "최형준",
                    role: "Ph.D. Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "이건희",
                    role: "Ph.D. Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "Chunmei Liu",
                    role: "Ph.D. Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "민동욱",
                    role: "Ph.D. - Master Combine Student",
                    year: "4th Semester",
                    focus: "Conversational AI",
                    thesis: "Natural Language Interaction via Conversational AI",
                  },
                  {
                    name: "이승호",
                    role: "Ph.D. - Master Combine Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "바자르와니 주치",
                    role: "Ph.D. - Master Combine Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "강전휘",
                    role: "Ph.D. - Master Combine Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "이준규",
                    role: "Ph.D. - Master Combine Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "안정민",
                    role: "Master Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "이균",
                    role: "Master Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                  {
                    name: "박양렬",
                    role: "Master Student",
                    year: "1st Semester",
                    focus: "-",
                    thesis: "-",
                  },
                ].map((student, i) => (
                  <Card
                    key={i}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-gray-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{student.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <p className="text-sm text-blue-600">{student.role}</p>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              {student.year}
                            </span>
                          </div>

                          <div className="space-y-2 text-sm">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{t("team.focus")}</p>
                              <p className="text-gray-600 dark:text-gray-300">{student.focus}</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{t("team.thesis")}</p>
                              <p className="text-gray-600 dark:text-gray-300">{student.thesis}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
