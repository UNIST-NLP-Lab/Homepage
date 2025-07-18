"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, Github, Search, BookOpen, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// 논문 데이터
const publications = [
  {
    id: 1,
    title: "Optimizing Causality-Based Radiology Reporting with Retrieval-Augmented and Structured Reasoning Approaches for the NTCIR-18 HIDDEN-RAD Task",
    authors: "Ju-Min Cho, Ho-Jin Yi, Myung-Kyu Kim, Se-Jin Jeong and Seung-Hoon Na",
    venue: "NTCIR-18",
    year: 2025,
    category: "MoE",
    description: "새로운 MoE 라우팅 알고리즘을 통해 계산 효율성을 40% 향상시킨 연구",
    abstract:
      "대규모 언어 모델의 효율성을 높이기 위해 전문가 혼합 모델(MoE)이 주목받고 있습니다. 본 연구에서는 새로운 라우팅 알고리즘을 제안하여 기존 MoE 모델 대비 계산 효율성을 40% 향상시켰습니다. 특히, 동적 부하 균형과 희소 게이팅 메커니즘을 결합하여 학습 및 추론 과정에서의 자원 활용을 최적화했습니다.",
    links: {
      paper: "#",
      code: "#",
      demo: "#",
    },
    citations: 45,
  },
  {
    id: 2,
    title: "Parameter-Efficient Fine-tuning with Adaptive Experts",
    authors: "Choi Master, Jung Student, Kim AI",
    venue: "ICML 2024",
    year: 2024,
    category: "LLM",
    description: "적응형 전문가 네트워크를 활용한 효율적인 파인튜닝 방법론",
    abstract:
      "대규모 언어 모델의 파인튜닝은 많은 계산 자원을 필요로 합니다. 본 연구에서는 적응형 전문가 네트워크를 활용하여 전체 파라미터의 0.1%만 업데이트하면서도 기존 방법과 동등한 성능을 달성하는 파라미터 효율적 파인튜닝 방법을 제안합니다. 이 방법은 특히 다양한 도메인 적응 태스크에서 우수한 성능을 보여줍니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 32,
  },
  {
    id: 3,
    title: "Scaling Laws for Mixture of Experts Language Models",
    authors: "Lee Postdoc, Han Research, Kim AI",
    venue: "ICLR 2024",
    year: 2024,
    category: "MoE",
    description: "MoE 언어 모델의 스케일링 법칙에 대한 이론적, 실험적 분석",
    abstract:
      "본 연구는 전문가 혼합 모델(MoE)의 스케일링 법칙을 이론적, 실험적으로 분석합니다. 전문가 수, 전문가 크기, 그리고 활성화되는 전문가 비율 간의 관계를 체계적으로 조사하여, MoE 모델의 최적 설계 원칙을 도출했습니다. 이 연구 결과는 조 단위 파라미터 모델 설계에 중요한 지침을 제공합니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 28,
  },
  {
    id: 4,
    title: "Green AI: Energy-Efficient Training of Large Models",
    authors: "Song Intern, Park Research, Kim AI",
    venue: "AAAI 2024",
    year: 2024,
    category: "Systems",
    description: "대규모 모델의 친환경적 학습을 위한 새로운 최적화 기법",
    abstract:
      "AI 모델의 학습 과정에서 발생하는 에너지 소비와 탄소 배출은 중요한 환경 문제입니다. 본 연구에서는 모델 성능을 유지하면서 에너지 소비를 크게 줄일 수 있는 새로운 학습 최적화 기법을 제안합니다. 특히, 동적 정밀도 조정과 선택적 계산 방법을 통해 기존 대비 에너지 효율성을 65% 향상시켰습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 22,
  },
  {
    id: 5,
    title: "Multi-modal Learning in Sparse Expert Models",
    authors: "Kim AI, Choi Master, Park Research",
    venue: "CVPR 2023",
    year: 2023,
    category: "LLM",
    description: "이미지와 텍스트를 효율적으로 처리하는 희소 전문가 모델 연구",
    abstract:
      "본 연구는 이미지와 텍스트 데이터를 효율적으로 처리할 수 있는 다중 모달 희소 전문가 모델을 제안합니다. 모달리티별 전문가와 통합 전문가를 결합한 계층적 아키텍처를 통해, 단일 모달리티 모델 대비 성능을 향상시키면서도 계산 효율성을 유지했습니다. 이 모델은 이미지 캡셔닝, 시각적 질의응답 등 다양한 태스크에서 우수한 성능을 보여줍니다.",
    links: {
      paper: "#",
      code: "#",
      demo: "#",
    },
    citations: 78,
  },
  {
    id: 6,
    title: "Distributed Training of Trillion-Parameter MoE Models",
    authors: "Han Research, Jung Student, Kim AI",
    venue: "SC 2023",
    year: 2023,
    category: "Systems",
    description: "조 단위 파라미터 MoE 모델의 효율적인 분산 학습 시스템",
    abstract:
      "조 단위 파라미터를 가진 MoE 모델의 학습은 기존 분산 학습 시스템의 한계를 넘어서는 도전 과제입니다. 본 연구에서는 전문가별 샤딩, 동적 통신 최적화, 그리고 계층적 메모리 관리를 결합한 새로운 분산 학습 시스템을 제안합니다. 이 시스템은 수천 개의 GPU에서 효율적으로 확장 가능하며, 기존 시스템 대비 학습 속도를 3배 향상시켰습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 65,
  },
  {
    id: 7,
    title: "In-context Learning Capabilities of MoE Language Models",
    authors: "Lee Postdoc, Kim AI",
    venue: "ACL 2023",
    year: 2023,
    category: "LLM",
    description: "MoE 기반 언어 모델의 맥락 내 학습 능력 분석",
    abstract:
      "본 연구는 전문가 혼합 모델(MoE) 기반 언어 모델의 맥락 내 학습(in-context learning) 능력을 체계적으로 분석합니다. 다양한 태스크와 맥락 길이에 대한 실험을 통해, MoE 모델이 특정 조건에서 기존 밀집 모델보다 우수한 맥락 내 학습 능력을 보이는 것을 발견했습니다. 특히, 전문가 라우팅 패턴과 맥락 내 학습 성능 간의 상관관계를 밝혀냈습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 54,
  },
  {
    id: 8,
    title: "Adaptive Computation in Large Language Models",
    authors: "Park Research, Choi Master, Kim AI",
    venue: "NeurIPS 2023",
    year: 2023,
    category: "LLM",
    description: "입력 복잡성에 따라 계산량을 조절하는 적응형 언어 모델",
    abstract:
      "모든 입력에 동일한 계산량을 사용하는 기존 언어 모델과 달리, 본 연구는 입력의 복잡성에 따라 계산량을 동적으로 조절하는 적응형 계산 메커니즘을 제안합니다. 이 접근 방식은 간단한 입력에는 적은 계산을 사용하고 복잡한 입력에는 더 많은 계산을 할당함으로써, 평균 추론 시간을 45% 단축하면서도 성능을 유지했습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 48,
  },
  {
    id: 9,
    title: "Federated Learning with Heterogeneous Expert Models",
    authors: "Kim Research, Lee Postdoc, Kim AI",
    venue: "ICLR 2023",
    year: 2023,
    category: "Systems",
    description: "이기종 전문가 모델을 활용한 프라이버시 보존 연합 학습",
    abstract:
      "본 연구는 이기종 전문가 모델을 활용한 새로운 연합 학습 프레임워크를 제안합니다. 각 클라이언트가 로컬 데이터 특성에 맞는 전문가 모델을 학습하고, 서버에서 이를 효율적으로 통합하는 방법을 개발했습니다. 이 접근 방식은 데이터 프라이버시를 보존하면서도 중앙 집중식 학습에 근접한 성능을 달성했습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 42,
  },
  {
    id: 10,
    title: "Quantization-Aware Training for MoE Models",
    authors: "Jung Student, Han Research, Kim AI",
    venue: "ICML 2023",
    year: 2023,
    category: "MoE",
    description: "MoE 모델을 위한 양자화 인식 학습 방법",
    abstract:
      "본 연구는 전문가 혼합 모델(MoE)을 위한 양자화 인식 학습 방법을 제안합니다. 전문가별 양자화 정밀도 최적화와 라우팅 메커니즘의 양자화 효과를 고려한 학습 알고리즘을 통해, 8비트 및 4비트 양자화에서도 성능 저하를 최소화했습니다. 이 방법은 MoE 모델의 메모리 사용량을 크게 줄이면서도 추론 속도를 향상시켰습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 38,
  },
  {
    id: 11,
    title: "Hierarchical Mixture of Experts for Efficient Reasoning",
    authors: "Kim AI, Park Research",
    venue: "AAAI 2022",
    year: 2022,
    category: "MoE",
    description: "효율적인 추론을 위한 계층적 전문가 혼합 모델",
    abstract:
      "복잡한 추론 태스크는 다양한 수준의 추상화와 전문성을 요구합니다. 본 연구는 이러한 추론 과정을 효율적으로 모델링하기 위한 계층적 전문가 혼합 모델을 제안합니다. 다단계 추론 과정에서 각 단계별로 특화된 전문가를 활용함으로써, 기존 모델 대비 추론 정확도를 25% 향상시켰습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 95,
  },
  {
    id: 12,
    title: "Sparse Activation Functions for Efficient Neural Networks",
    authors: "Lee Postdoc, Choi Master, Kim AI",
    venue: "NeurIPS 2022",
    year: 2022,
    category: "Systems",
    description: "효율적인 신경망을 위한 희소 활성화 함수",
    abstract:
      "본 연구는 계산 효율성을 높이기 위한 새로운 희소 활성화 함수를 제안합니다. 입력에 따라 활성화 패턴이 동적으로 변화하는 이 함수는 기존 활성화 함수 대비 계산량을 60% 줄이면서도 모델 성능을 유지했습니다. 특히 대규모 언어 모델에서 추론 속도를 크게 향상시켰습니다.",
    links: {
      paper: "#",
      code: "#",
    },
    citations: 87,
  },
]

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const { t } = useLanguage()

  // 필터링된 논문 목록
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesYear = yearFilter === "all" || pub.year.toString() === yearFilter
    const matchesCategory = categoryFilter === "all" || pub.category === categoryFilter

    return matchesSearch && matchesYear && matchesCategory
  })

  // 연도 목록 (중복 제거)
  const years = [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a)

  // 카테고리 목록 (중복 제거)
  const categories = [...new Set(publications.map((pub) => pub.category))]

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <PageHeader title={t("publications.title")} description={t("publications.subtitle")} />

      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          {/* 필터 및 검색 */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    placeholder={t("publications.search")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-full sm:w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50">
                    <SelectValue placeholder={t("publications.year")} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:text-gray-50">
                    <SelectItem value="all">{t("publications.allYears")}</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50">
                    <SelectValue placeholder={t("publications.category")} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:text-gray-50">
                    <SelectItem value="all">{t("publications.allCategories")}</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t("publications.total")} {filteredPublications.length}
              {t("publications.results")}
            </div>
          </div>

          {/* 논문 목록 */}
          <div className="space-y-6">
            {filteredPublications.map((paper) => (
              <Card key={paper.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 dark:text-gray-50">{paper.title}</CardTitle>
                      <CardDescription className="text-base mb-3 dark:text-gray-400">{paper.authors}</CardDescription>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-sm dark:text-gray-50 dark:border-gray-500">
                          {paper.venue}
                        </Badge>
                        <Badge variant="secondary" className="text-sm dark:text-gray-50">
                          {paper.category}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t("publications.citations")}: {paper.citations}
                          {t("publications.times")}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {paper.links.paper && (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-gray-200 dark:hover:bg-gray-700">
                          <a href={paper.links.paper} target="_blank" rel="noopener noreferrer">
                            <BookOpen className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {paper.links.code && (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-gray-200 dark:hover:bg-gray-700">
                          <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {paper.links.demo && (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-gray-200 dark:hover:bg-gray-700">
                          <a href={paper.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="hover:bg-gray-200 dark:hover:bg-gray-700">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">{paper.description}</p>
                    <div>
                      <h4 className="font-medium mb-2 dark:text-gray-50">{t("publications.abstract")}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-400">{paper.abstract}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2 dark:text-gray-50">
                {t("publications.noResults")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{t("publications.tryOther")}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
