"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ko" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 다국어 텍스트 데이터
const translations = {
  ko: {
    // Header
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.team": "Team",
    "nav.publications": "Publications",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.theme": "테마",
    "nav.language": "언어",
    "nav.forceToggle": "강제 토글",

    // Home Page
    "home.hero.badge": "Advancing AI Research",
    "home.hero.title": "Large Language Models &",
    "home.hero.titleHighlight": " Mixture of Experts",
    "home.hero.description":
      "우리 연구실은 대규모 언어 모델과 전문가 혼합 모델을 통해 차세대 AI 시스템을 개발하고 있습니다. 효율적이고 확장 가능한 AI 아키텍처 연구에 집중합니다.",
    "home.hero.researchBtn": "Research Overview",
    "home.hero.joinBtn": "Join Our Team",
    "home.hero.currentFocus": "Current Focus",
    "home.hero.efficientLLM": "Efficient LLM Training",
    "home.hero.moeArch": "MoE Architecture",

    // Research Areas
    "home.research.title": "Research Areas",
    "home.research.subtitle": "우리의 주요 연구 분야와 혁신적인 접근 방식을 소개합니다",
    "home.research.llm.title": "Large Language Models",
    "home.research.llm.desc": "대규모 언어 모델의 효율적인 학습과 추론 방법론 연구",
    "home.research.moe.title": "Mixture of Experts",
    "home.research.moe.desc": "전문가 혼합 모델을 통한 확장 가능한 AI 아키텍처 개발",
    "home.research.knowledge_editing.title": "LLM Knowledge Editing",
    "home.research.knowledge_editing.desc": "LLM의 내재 지식을 동적으로 수정하고 최신화하는 기술을 연구합니다",
    "home.research.viewAll": "View All Research",

    // Team Section
    "home.team.title": "Our Team",
    "home.team.subtitle": "세계적 수준의 연구진과 함께 AI의 미래를 만들어갑니다",
    "home.team.pi": "Principal Investigator",
    "home.team.professor": "나승훈 교수",
    "home.team.professorTitle": "Professor of Artificial Intelligence Graduate School, Dept. of Computer Science & Engineering",
    "home.team.professorDesc":
      "ACL, NAACL, EMNLP, AAAI 등 최고 권위의 자연어처리 학회의 논문 보유",
    "home.team.meetTeam": "Meet Our Team",

    // Publications
    "home.publications.title": "Recent Publications",
    "home.publications.subtitle": "최신 연구 성과와 논문을 확인하세요",
    "home.publications.viewAll": "View All Publications",

    // News
    "home.news.title": "News & Updates",
    "home.news.subtitle": "연구실의 최신 소식과 업데이트를 확인하세요",
    "home.news.viewAll": "View All News",

    // Contact
    "home.contact.title": "Contact Us",
    "home.contact.subtitle": "연구 협력이나 입학 문의는 언제든 연락주세요",
    "home.contact.info": "연구실 정보",
    "home.contact.address": "주소",
    "home.contact.email": "이메일",
    "home.contact.admission": "입학 및 연구 참여",
    "home.contact.admissionDesc":
      "우리 연구실에서는 열정적인 연구자를 찾고 있습니다. LLM, MoE, 또는 AI 시스템에 관심이 있으시면 언제든 연락주세요.",
    "home.contact.fields": "모집 분야:",
    "home.contact.inquiry": "문의하기",

    // Footer
    "footer.description": "차세대 AI 기술을 통해 인류의 미래를 만들어갑니다.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.copyright": "© 2025 UNIST NLP Lab. All rights reserved.",

    // Research Page
    "research.title": "Research Areas",
    "research.subtitle":
      "우리 연구실은 대규모 언어 모델과 전문가 혼합 모델을 통해 차세대 AI 시스템을 개발하고 있습니다",
    "research.llm.title": "Large Language Models",
    "research.llm.description":
      "대규모 언어 모델(LLM)은 자연어 처리의 혁명을 가져왔습니다. 우리 연구실은 LLM의 효율성, 정확성, 그리고 응용 가능성을 높이기 위한 다양한 연구를 진행하고 있습니다.",
    "research.llm.focus":
      "특히 모델 압축, 효율적인 파인튜닝, 다중 모달 통합, 그리고 맥락 학습 능력 향상에 초점을 맞추고 있습니다.",
    "research.moe.title": "Mixture of Experts",
    "research.moe.description":
      "전문가 혼합 모델(MoE)은 대규모 AI 모델의 효율성과 확장성을 크게 향상시킬 수 있는 혁신적인 아키텍처입니다. 우리 연구실은 MoE 모델의 설계, 학습, 그리고 배포에 관한 최첨단 연구를 수행하고 있습니다.",
    "research.moe.focus":
      "특히 희소 MoE 아키텍처, 전문가 라우팅 알고리즘, 부하 균형 전략, 그리고 분산 학습에 초점을 맞추고 있습니다.",
    "research.knowledge_editing.title": "Knowledge Editing",
    "research.knowledge_editing.description": "LLM 내부의 지식을 동적으로 수정하고 최신화하는 기술은, 모델의 정확성과 안정성을 유지하면서도 실시간 업데이트를 가능하게 합니다. 우리 연구실은 이러한 **Knowledge Editing** 메커니즘의 효율성과 신뢰성을 높이는 데 주력하고 있습니다.",
    "research.knowledge_editing.focus": "대표적으로 외부 메모리 기반 편집, 국소적 파라미터 수정, 표현 수준 파인튜닝, 하이퍼네트워크 기반 지식 편집 등 다양한 기법을 탐구합니다",
    "research.projects.title": "Current Projects",
    "research.status.ongoing": "진행 중",
    "research.status.planned": "계획 중",

    // Team Page
    "team.title": "Our Team",
    "team.subtitle": "세계적 수준의 연구진과 함께 AI의 미래를 만들어갑니다",
    "team.faculty": "Faculty",
    "team.researchers": "Researchers",
    "team.students": "Students",
    "team.biography": "Biography",
    "team.interests": "Research Interests",
    "team.education": "Education",
    "team.awards": "Awards & Honors",
    "team.focus": "Focus Area",
    "team.bio": "Bio",
    "team.thesis": "Thesis Topic",
    "team.advisor": "Advisor",
    "team.alumni": "Alumni",
    "team.affilation": "affilation",
    "team.mindongwook": "민동욱",

    // Publications Page
    "publications.title": "Publications",
    "publications.subtitle": "우리 연구실의 최신 연구 성과와 논문을 확인하세요",
    "publications.search": "논문 제목, 저자, 키워드로 검색...",
    "publications.year": "연도",
    "publications.allYears": "모든 연도",
    "publications.category": "분야",
    "publications.allCategories": "모든 분야",
    "publications.results": "개의 논문이 검색되었습니다.",
    "publications.total": "총",
    "publications.citations": "인용",
    "publications.times": "회",
    "publications.abstract": "Abstract",
    "publications.noResults": "검색 결과가 없습니다",
    "publications.tryOther": "다른 검색어나 필터를 시도해보세요.",

    // News Page
    "news.title": "News & Updates",
    "news.subtitle": "연구실의 최신 소식과 업데이트를 확인하세요",
    "news.latest": "최신 소식",
    "news.all": "모든 소식",
    "news.readMore": "자세히 보기",
    "news.viewMore": "더 많은 소식 보기",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "연구 협력이나 입학 문의는 언제든 연락주세요",
    "contact.labInfo": "연구실 정보",
    "contact.address": "주소",
    "contact.email": "이메일",
    "contact.phone": "전화번호",
    "contact.hours": "운영 시간",
    "contact.directions": "찾아오는 길",
    "contact.subway": "지하철",
    "contact.bus": "버스",
    "contact.parking": "자가용",
    "contact.inquiry": "문의하기",
    "contact.inquiryDesc": "연구 협력, 입학 문의, 기타 궁금한 사항이 있으시면 아래 양식을 작성해 주세요.",
    "contact.name": "이름",
    "contact.subject": "제목",
    "contact.category": "문의 유형",
    "contact.selectCategory": "문의 유형을 선택해주세요",
    "contact.admission": "입학 문의",
    "contact.research": "연구 협력",
    "contact.internship": "인턴십",
    "contact.visit": "연구실 방문",
    "contact.other": "기타",
    "contact.message": "메시지",
    "contact.send": "문의 보내기",
    "contact.admissionGuide": "입학 및 연구 참여 안내",
    "contact.admissionDesc":
      "우리 연구실에서는 열정적인 연구자를 찾고 있습니다. LLM, MoE, 또는 AI 시스템에 관심이 있으시면 언제든 연락주세요.",
    "contact.recruitmentAreas": "모집 분야",
    "contact.qualifications": "지원 자격",
    "contact.documents": "제출 서류",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.team": "Team",
    "nav.publications": "Publications",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.theme": "Theme",
    "nav.language": "Language",
    "nav.forceToggle": "Force Toggle",

    // Home Page
    "home.hero.badge": "Advancing AI Research",
    "home.hero.title": "Large Language Models &",
    "home.hero.titleHighlight": " Mixture of Experts",
    "home.hero.description":
      "Our research lab develops next-generation AI systems through large language models and mixture of experts models. We focus on efficient and scalable AI architecture research.",
    "home.hero.researchBtn": "Research Overview",
    "home.hero.joinBtn": "Join Our Team",
    "home.hero.currentFocus": "Current Focus",
    "home.hero.efficientLLM": "Efficient LLM Training",
    "home.hero.moeArch": "MoE Architecture",

    // Research Areas
    "home.research.title": "Research Areas",
    "home.research.subtitle": "Introducing our key research areas and innovative approaches",
    "home.research.llm.title": "Large Language Models",
    "home.research.llm.desc": "Research on efficient training and inference methodologies for large language models",
    "home.research.moe.title": "Mixture of Experts",
    "home.research.moe.desc": "Development of scalable AI architectures through mixture of experts models",
    "home.research.systems.description": "Techniques for dynamically editing and updating the internal knowledge of LLMs are essential for maintaining accuracy and reliability in real time. Our lab focuses on advancing the efficiency, robustness, and safety of these **Knowledge Editing** mechanisms.",
    "home.research.systems.focus": "We explore key methods including external-memory editing, local parameter editing, representation-level fine-tuning, and hypernetwork-based editing.",

    "home.research.viewAll": "View All Research",

    // Team Section
    "home.team.title": "Our Team",
    "home.team.subtitle": "Creating the future of AI with world-class researchers",
    "home.team.pi": "Principal Investigator",
    "home.team.professor": "Prof. Seung-Hoon Na",
    "home.team.professorTitle": "Professor of Computer Science",
    "home.team.professorDesc":
      "Possesses papers published in top-tier NLP conferences such as ACL, NAACL, EMNLP, and AAAI.",
    "home.team.meetTeam": "Meet Our Team",

    // Publications
    "home.publications.title": "Recent Publications",
    "home.publications.subtitle": "Check out our latest research achievements and papers",
    "home.publications.viewAll": "View All Publications",

    // News
    "home.news.title": "News & Updates",
    "home.news.subtitle": "Stay updated with our latest news and announcements",
    "home.news.viewAll": "View All News",

    // Contact
    "home.contact.title": "Contact Us",
    "home.contact.subtitle": "Feel free to contact us for research collaboration or admission inquiries",
    "home.contact.info": "Lab Information",
    "home.contact.address": "Address",
    "home.contact.email": "Email",
    "home.contact.admission": "Admission & Research Participation",
    "home.contact.admissionDesc":
      "We are looking for passionate researchers. If you are interested in LLM, MoE, or AI systems, please feel free to contact us.",
    "home.contact.fields": "Recruitment Areas:",
    "home.contact.inquiry": "Contact Us",

    // Footer
    "footer.description": "Creating the future of humanity through next-generation AI technology.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.copyright": "© 2024 AI Research Lab. All rights reserved.",

    // Research Page
    "research.title": "Research Areas",
    "research.subtitle":
      "Our research lab develops next-generation AI systems through large language models and mixture of experts models",
    "research.llm.title": "Large Language Models",
    "research.llm.description":
      "Large Language Models (LLMs) have revolutionized natural language processing. Our lab conducts various research to improve the efficiency, accuracy, and applicability of LLMs.",
    "research.llm.focus":
      "We particularly focus on model compression, efficient fine-tuning, multi-modal integration, and improving in-context learning capabilities.",
    "research.moe.title": "Mixture of Experts",
    "research.moe.description":
      "Mixture of Experts (MoE) is an innovative architecture that can significantly improve the efficiency and scalability of large AI models. Our lab conducts cutting-edge research on the design, training, and deployment of MoE models.",
    "research.moe.focus":
      "We particularly focus on sparse MoE architectures, expert routing algorithms, load balancing strategies, and distributed training.",
    "research.knowledge_editing.title": "Efficient AI Systems",
    "research.knowledge_editing.description":
      "Energy efficiency and sustainability of AI systems are important challenges in modern AI research. Our lab focuses on developing environmentally friendly and resource-efficient AI systems.",
    "research.knowledge_editing.focus":
      "We particularly focus on green AI computing, edge AI deployment, federated learning, and hardware-software co-design.",
    "research.projects.title": "Current Projects",
    "research.status.ongoing": "Ongoing",
    "research.status.planned": "Planned",

    // Team Page
    "team.title": "Our Team",
    "team.subtitle": "Creating the future of AI with world-class researchers",
    "team.faculty": "Faculty",
    "team.researchers": "Researchers",
    "team.students": "Students",
    "team.biography": "Biography",
    "team.interests": "Research Interests",
    "team.education": "Education",
    "team.awards": "Awards & Honors",
    "team.focus": "Focus Area",
    "team.bio": "Bio",
    "team.thesis": "Thesis Topic",
    "team.advisor": "Advisor",
    "team.alumni": "Alumni",
    "team.affilation": "affilation",
    "team.mindongwook": "Dongwook Min",

    // Publications Page
    "publications.title": "Publications",
    "publications.subtitle": "Check out our latest research achievements and papers",
    "publications.search": "Search by paper title, author, keywords...",
    "publications.year": "Year",
    "publications.allYears": "All Years",
    "publications.category": "Category",
    "publications.allCategories": "All Categories",
    "publications.results": "papers found.",
    "publications.total": "Total",
    "publications.citations": "Citations",
    "publications.times": "times",
    "publications.abstract": "Abstract",
    "publications.noResults": "No search results found",
    "publications.tryOther": "Try different keywords or filters.",

    // News Page
    "news.title": "News & Updates",
    "news.subtitle": "Stay updated with our latest news and announcements",
    "news.latest": "Latest News",
    "news.all": "All News",
    "news.readMore": "Read More",
    "news.viewMore": "View More News",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Feel free to contact us for research collaboration or admission inquiries",
    "contact.labInfo": "Lab Information",
    "contact.address": "Address",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.hours": "Office Hours",
    "contact.directions": "Directions",
    "contact.subway": "Subway",
    "contact.bus": "Bus",
    "contact.parking": "Parking",
    "contact.inquiry": "Contact Form",
    "contact.inquiryDesc":
      "Please fill out the form below for research collaboration, admission inquiries, or other questions.",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.category": "Inquiry Type",
    "contact.selectCategory": "Please select inquiry type",
    "contact.admission": "Admission Inquiry",
    "contact.research": "Research Collaboration",
    "contact.internship": "Internship",
    "contact.visit": "Lab Visit",
    "contact.other": "Other",
    "contact.message": "Message",
    "contact.send": "Send Inquiry",
    "contact.admissionGuide": "Admission & Research Participation Guide",
    "contact.admissionDesc":
      "We are looking for passionate researchers. If you are interested in LLM, MoE, or AI systems, please feel free to contact us.",
    "contact.recruitmentAreas": "Recruitment Areas",
    "contact.qualifications": "Qualifications",
    "contact.documents": "Required Documents",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // 클라이언트 사이드에서만 localStorage 접근
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ko" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
    setIsInitialized(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    console.log("Setting language to:", lang)
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    // language object might still be undefined on first render
    const langObj = translations[language as keyof typeof translations]

    // if we don’t have this language yet, or the key is missing, just return the key
    if (!langObj || !langObj[key as keyof typeof langObj]) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[i18n] missing translation: "${key}" for lang "${language}"`)
      }
      return key
    }

    return langObj[key as keyof typeof langObj] as string
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
