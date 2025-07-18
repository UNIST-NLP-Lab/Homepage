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
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="faculty" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="faculty">{t("team.faculty")}</TabsTrigger>
              <TabsTrigger value="researchers">{t("team.researchers")}</TabsTrigger>
              <TabsTrigger value="students">{t("team.students")}</TabsTrigger>
            </TabsList>

            <TabsContent value="faculty" className="space-y-12">
              <div className="max-w-4xl mx-auto">
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
                              Efficient AI Systems
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
                              <span>Ph.D. in Computer Science, Stanford University</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>M.S. in Computer Science, MIT</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>B.S. in Electrical Engineering, Seoul National University</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("team.awards")}</h3>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>ACM Distinguished Scientist, 2023</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>Best Paper Award, NeurIPS 2022</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>AI Researcher of the Year, 2021</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="researchers" className="space-y-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "박연구",
                    role: "Senior Researcher",
                    focus: "LLM Architecture",
                    bio: "Google Research 출신으로 대규모 언어 모델 아키텍처 설계 전문가. 10년 이상의 AI 연구 경력 보유.",
                    education: "Ph.D. in Computer Science, UC Berkeley",
                    interests: ["Neural Architecture", "Efficient Training", "Model Compression"],
                  },
                  {
                    name: "이박사",
                    role: "Postdoc Researcher",
                    focus: "MoE Systems",
                    bio: "전문가 혼합 모델 시스템 설계 및 최적화 전문가. ICLR, NeurIPS 등 주요 학회에 다수 논문 발표.",
                    education: "Ph.D. in Machine Learning, Carnegie Mellon University",
                    interests: ["Mixture of Experts", "Distributed Systems", "Routing Algorithms"],
                  },
                  {
                    name: "정연구원",
                    role: "Research Scientist",
                    focus: "Green AI",
                    bio: "에너지 효율적인 AI 시스템 개발 전문가. 이전에 NVIDIA Research에서 근무한 경험 보유.",
                    education: "Ph.D. in Computer Engineering, ETH Zurich",
                    interests: ["Energy Efficiency", "Hardware Optimization", "Sustainable AI"],
                  },
                  {
                    name: "최연구원",
                    role: "Research Scientist",
                    focus: "Multi-modal Learning",
                    bio: "다중 모달 학습 및 비전-언어 모델 통합 전문가. Meta AI 출신 연구원.",
                    education: "Ph.D. in Computer Vision, University of Toronto",
                    interests: ["Vision-Language Models", "Multi-modal Fusion", "Representation Learning"],
                  },
                  {
                    name: "한연구원",
                    role: "Research Engineer",
                    focus: "AI Systems",
                    bio: "대규모 AI 시스템 구축 및 배포 전문가. 이전에 Amazon AWS에서 근무한 경험 보유.",
                    education: "M.S. in Computer Science, KAIST",
                    interests: ["Distributed Training", "Cloud Infrastructure", "MLOps"],
                  },
                  {
                    name: "김연구원",
                    role: "Visiting Researcher",
                    focus: "Federated Learning",
                    bio: "연합 학습 및 프라이버시 보존 AI 전문가. 현재 1년간 방문 연구원으로 활동 중.",
                    education: "Ph.D. in Privacy-Preserving ML, Oxford University",
                    interests: ["Federated Learning", "Differential Privacy", "Secure Computation"],
                  },
                ].map((researcher, i) => (
                  <Card
                    key={i}
                    className="border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  >
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-6 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                          <Users className="h-12 w-12 text-gray-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{researcher.name}</h3>
                            <p className="text-sm text-blue-600">{researcher.role}</p>
                          </div>
                          <div className="flex gap-1">
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                              <Mail className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                              <Github className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium mb-1 text-gray-900 dark:text-white">{t("team.focus")}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{researcher.focus}</p>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-1 text-gray-900 dark:text-white">{t("team.bio")}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{researcher.bio}</p>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-1 text-gray-900 dark:text-white">
                              {t("team.education")}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{researcher.education}</p>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-1 text-gray-900 dark:text-white">
                              {t("team.interests")}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {researcher.interests.map((interest, j) => (
                                <Badge
                                  key={j}
                                  variant="outline"
                                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                >
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="students" className="space-y-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "최석사",
                    role: "Ph.D. Student",
                    year: "3rd Year",
                    focus: "Model Optimization",
                    thesis: "Adaptive Sparse Training for Large Language Models",
                    advisor: "김AI 교수",
                  },
                  {
                    name: "정학생",
                    role: "Ph.D. Student",
                    year: "2nd Year",
                    focus: "Distributed Training",
                    thesis: "Scalable Training Methods for Trillion-Parameter Models",
                    advisor: "김AI 교수",
                  },
                  {
                    name: "이학생",
                    role: "Ph.D. Student",
                    year: "1st Year",
                    focus: "Efficient Inference",
                    thesis: "Hardware-Aware Inference Optimization for MoE Models",
                    advisor: "김AI 교수",
                  },
                  {
                    name: "박학생",
                    role: "M.S. Student",
                    year: "2nd Year",
                    focus: "Few-shot Learning",
                    thesis: "In-context Learning Capabilities of Sparse Expert Models",
                    advisor: "김AI 교수",
                  },
                  {
                    name: "김학생",
                    role: "M.S. Student",
                    year: "1st Year",
                    focus: "Interpretability",
                    thesis: "Understanding Expert Specialization in MoE Models",
                    advisor: "김AI 교수",
                  },
                  {
                    name: "송인턴",
                    role: "Undergraduate Intern",
                    year: "Senior",
                    focus: "Evaluation Metrics",
                    thesis: "Comprehensive Evaluation Framework for LLM Performance",
                    advisor: "박연구 연구원",
                  },
                  {
                    name: "정인턴",
                    role: "Undergraduate Intern",
                    year: "Junior",
                    focus: "Data Processing",
                    thesis: "Efficient Data Processing Pipeline for LLM Training",
                    advisor: "이박사 연구원",
                  },
                  {
                    name: "한인턴",
                    role: "Undergraduate Intern",
                    year: "Senior",
                    focus: "Visualization",
                    thesis: "Interactive Visualization Tools for MoE Behavior Analysis",
                    advisor: "최연구원 연구원",
                  },
                  {
                    name: "조인턴",
                    role: "Undergraduate Intern",
                    year: "Junior",
                    focus: "Benchmarking",
                    thesis: "Comprehensive Benchmarking Suite for Efficient AI Models",
                    advisor: "한연구원 연구원",
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
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{t("team.advisor")}</p>
                              <p className="text-gray-600 dark:text-gray-300">{student.advisor}</p>
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
