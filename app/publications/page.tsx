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
    authors: "Ju-Min Cho, Ho-Jin Yi, Myung-Kyu Kim, Se-Jin Jeong, Seung-Hoon Na",
    venue: "NTCIR-18",
    year: 2025,
    category: "Medical NLP",
    description: "Retrieval-Enhanced Prompting를 활용하여 보고서에 숨겨진 인과관계를 식별",
    abstract:
      "방사선과 보고서에서 인과성 기반의 진단 추론을 생성하는 데 중점을 두었습니다. 이 과제의 핵심 목표는 기존의 자동 보고서 생성 모델이 부족했던 명시적인 인과적 추론을 재구성하여, AI 기반 진단 시스템의 투명성과 해석 가능성을 향상시키는 것입니다.",
    links: {
      paper: "https://research.nii.ac.jp/ntcir/workshop/OnlineProceedings18/pdf/ntcir/04-NTCIR18-HIDDEN-RAD-ChoJ.pdf",
      // code: "#",
    },
    citations: 0,
  },
  {
    id: 2,
    title: "ROSAQ: Rotation-based Saliency-Aware Weight Quantization for Efficiently Compressing Large Language Models",
    authors: "Junho Yoon, Geom Lee, Donghyeon Jeon, Inho Kang, Seung-Hoon Na",
    venue: "arXiv:2506.13472",
    year: 2025,
    category: "LLM",
    description: "대규모 언어 모델의 효율적인 압축을 위한 방법 제안",
    abstract:
      "대규모 언어 모델의 효율적인 압축을 위해 제안된 ROSAQ는 트랜스포머의 회전 불변성을 활용하여, 원본 피처 공간이 아닌 PCA 투영 피처 공간에서 주요 차원(principal dimensions)을 중요한(salient) 채널로 식별합니다.",
    links: {
      paper: "https://arxiv.org/pdf/2506.13472",
    },
    citations: 0,
  },
  {
    id: 3,
    title: "SeqMMR: Sequential Model Merging and LLM Routing for Enhanced Batched Sequential Knowledge Editing",
    authors: "Shanbao Qiao, Xuebing Liu, Akshat Gupta, Seung-Hoon Na",
    venue: "ACL 2025 Findings",
    year: 2025,
    category: "Knowledge Editing",
    description: "-",
    abstract:
      "-",
    links: {
      paper: "#",
    },
    citations: 0,
  },
  {
    id: 4,
    title: "CacheFocus: Dynamic Cache Re-Positioning for Efficient Retrieval-Augmented Generation",
    authors: "Kun-Hui Lee, Eunhwan Park, Donghoon Han, Seung-Hoon Na",
    venue: "arXiv:2502.11101",
    year: 2025,
    category: "Systems",
    description: "추가적인 학습 없이 긴 컨텍스트 처리 효율성 향상",
    abstract:
      "CacheFocus는 추가 학습 없이 쿼리 독립적 오프라인 캐싱, Cache Re-Positioning, Layer-Adaptive Cache Pruning, Adaptive Positional Allocation Strategy를 활용하여 긴 컨텍스트 처리 효율성을 높입니다.",
    links: {
      paper: "https://arxiv.org/pdf/2502.11101",
    },
    citations: 0,
  },
  {
    id: 5,
    title: "Wasserstein Distance Constraint and Parameter Sparsification for Batched and Iterative Knowledge Editing",
    authors: "Shanbao Qiao, Xuebing Liu, Seung-Hoon Na",
    venue: "AAAI 2025",
    year: 2025,
    category: "Knowledge Editing",
    description: "Knowledge Editing 안정성 향상 위해 Wasserstein 제약·희소화 도입",
    abstract:
      "본 연구는 반복적인 지식 수정 시 발생하는 모델 불안정을 완화하기 위해, 파라미터 분포 이동을 제어하는 Wasserstein 제약과 업데이트 희소화를 도입하여 안정성과 성능을 향상시킨 지식 편집 기법을 제안합니다.",
    links: {
      paper: "https://ojs.aaai.org/index.php/AAAI/article/view/34686",
    },
    citations: 0,
  },
  {
    id: 6,
    title: "SARCAT: Generative Span-Act Guided Response Generation using Copy-enhanced Target Augmentation",
    authors: "Jeong-Doo Lee, Hyeongjun Choi, Beomseok Hong, Youngsub Han, Byoung-Ki Jeon, Seung-Hoon Na",
    venue: "EMNLP 2024 Findings",
    year: 2024,
    category: "Response Generation",
    description: "문서 기반 응답 생성 개선",
    abstract:
      "본 논문은 문서 기반 응답 생성(document-grounded response generation) 개선을 위해 Copy-enhanced Target Augmentation (CAT)과 Span-Act Guided Response Generation (SAR)으로 구성된 SARCAT 프레임워크를 제안합니다.",
    links: {
      paper: "https://aclanthology.org/2024.findings-emnlp.867.pdf",
    },
    citations: 0,
  },
  {
    id: 7,
    title: "DistillMIKE: Editing Distillation of Massive In-Context Knowledge Editing in Large Language Models",
    authors: "Shanbao Qiao, Xuebing Liu, Seung-Hoon Na",
    venue: "ACL 2024 Findings",
    year: 2024,
    category: "Knowledge Editing",
    description: "새로운 Knowledge Editing 방법인 MIKE 제안",
    abstract:
      "대규모 언어 모델(LLM)의 방대한 지식 편집 문제를 해결하기 위해, 본 논문은 Massive In-context Knowledge Editing (MIKE)이라는 새로운 지식 편집 방법을 제안했습니다.",
    links: {
      paper: "https://aclanthology.org/2024.findings-acl.455.pdf",
    },
    citations: 0,
  },
  {
    id: 8,
    title: "COMEM: In-Context Retrieval-Augmented Mass-Editing Memory in Large Language Models",
    authors: "Shanbao Qiao, Xuebing Liu, Seung-Hoon Na",
    venue: "NAACL 2024 Finding",
    year: 2024,
    category: "Knowledge Editing",
    description: "새로운 Knowledge Editing 방법인 COMEM 제안",
    abstract:
      "이 논문은 대규모 언어 모델(LLM)의 방대한 지식 편집 문제를 해결하기 위해, 파라미터 업데이트와 In-Context Knowledge Editing (IKE)을 통합한 COMEM(in-COntext retrieval-augmented Mass-Editing Memory) 방법을 제안합니다.",
    links: {
      paper: "https://aclanthology.org/2024.findings-naacl.151.pdf",
    },
    citations: 0,
  },
  {
    id: 9,
    title: "RADCoT: Retrieval-Augmented Distillation to Specialization Models for Generating Chain-of-Thoughts in Query Expansion",
    authors: "Sung-Min Lee, Eunhwan Park, DongHyeon Jeon, Inho Kang, Seung-Hoon Na",
    venue: "COLING 2024",
    year: 2024,
    category: "CoT",
    description: "검색 증강 증류 모델 RADCoT 제안",
    abstract:
      "본 논문은 LLM의 Chain-of-Thoughts (CoT) 생성 능력을 쿼리 확장(query expansion)을 위해 SLM으로 증류하는 검색 증강 증류(Retrieval-Augmented Distillation) 모델인 RADCoT를 제안합니다.",
    links: {
      paper: "https://aclanthology.org/2024.lrec-main.1182.pdf",
    },
    citations: 0,
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
                      {/* {paper.links.code && (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-gray-200 dark:hover:bg-gray-700">
                          <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )} */}
                      {/* {paper.links.demo && (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-gray-200 dark:hover:bg-gray-700">
                          <a href={paper.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )} */}
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
