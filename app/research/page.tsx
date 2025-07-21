"use client"

import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Users, Award, Cpu, Network, Database, Code, LineChart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ResearchPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title={t("research.title")} description={t("research.subtitle")} />

      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <Tabs defaultValue="llm" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-12">
              <TabsTrigger value="llm">Large Language Models</TabsTrigger>
              <TabsTrigger value="moe">Mixture of Experts</TabsTrigger>
              <TabsTrigger value="ke">Knowledge Editing</TabsTrigger>
            </TabsList>

            <TabsContent value="llm" className="space-y-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{t("research.llm.title")}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("research.llm.description")}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{t("research.llm.focus")}</p>
                </div>
                <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center">
                  <Brain className="h-32 w-32 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: <Cpu className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                    title: "Parameter-Efficient Fine-tuning",
                    description:
                      "적은 수의 파라미터만 업데이트하여 효율적으로 LLM을 특정 태스크에 적응시키는 기법 연구",
                  },
                  {
                    icon: <Network className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                    title: "Model Compression & Quantization",
                    description: "모델 크기와 연산량을 줄이면서도 성능을 유지하는 압축 및 양자화 기법 개발",
                  },
                  {
                    icon: <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                    title: "Multi-modal Language Models",
                    description: "텍스트뿐만 아니라 이미지, 오디오 등 다양한 모달리티를 통합하는 언어 모델 연구",
                  },
                  {
                    icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                    title: "In-context Learning",
                    description: "추가 학습 없이 맥락 내에서 새로운 태스크를 수행하는 능력을 향상시키는 연구",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="border-0 shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  >
                    <CardHeader>
                      <div className="mb-4">{item.icon}</div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border shadow-sm">
                <h3 className="text-2xl font-bold mb-6">{t("research.projects.title")}</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "-",
                      description: "-",
                      status: t("research.status.ongoing"),
                    },
                  ].map((project, i) => (
                    <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{project.title}</h4>
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 px-2 py-1 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="moe" className="space-y-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{t("research.moe.title")}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("research.moe.description")}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{t("research.moe.focus")}</p>
                </div>
                <div className="bg-purple-50 dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center">
                  <Users className="h-32 w-32 text-purple-600 dark:text-purple-400" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: <Network className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                    title: "Sparse MoE Architectures",
                    description: "입력에 따라 일부 전문가만 활성화되는 희소 MoE 아키텍처 설계 및 최적화",
                  },
                  {
                    icon: <LineChart className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                    title: "Expert Routing Algorithms",
                    description: "입력을 가장 적합한 전문가에게 효율적으로 라우팅하는 알고리즘 개발",
                  },
                  {
                    icon: <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                    title: "Load Balancing Strategies",
                    description: "전문가 간 계산 부하를 균등하게 분배하여 학습 및 추론 효율성을 높이는 전략 연구",
                  },
                  {
                    icon: <Cpu className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                    title: "Distributed Training",
                    description: "대규모 MoE 모델의 효율적인 분산 학습을 위한 기법 및 시스템 개발",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="border-0 shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  >
                    <CardHeader>
                      <div className="mb-4">{item.icon}</div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border shadow-sm">
                <h3 className="text-2xl font-bold mb-6">{t("research.projects.title")}</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "-",
                      description: "-",
                      status: t("research.status.ongoing"),
                    },
                  ].map((project, i) => (
                    <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{project.title}</h4>
                        <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-800 px-2 py-1 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ke" className="space-y-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{t("research.systems.title")}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("research.systems.description")}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{t("research.systems.focus")}</p>
                </div>
                <div className="bg-green-50 dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center">
                  <Award className="h-32 w-32 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: <Cpu className="h-8 w-8 text-green-600 dark:text-green-400" />,
                    title: "Efficient Knowledge Editing",
                    description: "에너지 효율을 고려한 LLM 지식 편집 기법을 통해 최소한의 연산으로 정확한 지식 수정 수행",
                  },
                  {
                    icon: <Network className="h-8 w-8 text-green-600 dark:text-green-400" />,
                    title: "On-Device Knowledge Updating",
                    description: "엣지 디바이스에서 실시간 지식 수정이 가능하도록 경량화된 LLM 지식 편집 알고리즘 개발",
                  },
                  {
                    icon: <Database className="h-8 w-8 text-green-600 dark:text-green-400" />,
                    title: "Federated Knowledge Editing",
                    description: "프라이버시를 보장하면서도 분산된 사용자 환경에서 지식을 반영할 수 있는 LLM 편집 프레임워크 연구",
                  },
                  {
                    icon: <Code className="h-8 w-8 text-green-600 dark:text-green-400" />,
                    title: "System-level Optimization for Editing",
                    description: "지식 편집 효율을 극대화하기 위한 하드웨어-소프트웨어 공동 최적화 및 아키텍처 설계",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="border-0 shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  >
                    <CardHeader>
                      <div className="mb-4">{item.icon}</div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border shadow-sm">
                <h3 className="text-2xl font-bold mb-6">{t("research.projects.title")}</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "-",
                      description: "-",
                      status: t("research.status.ongoing"),
                    },
                  ].map((project, i) => (
                    <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{project.title}</h4>
                        <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 px-2 py-1 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
