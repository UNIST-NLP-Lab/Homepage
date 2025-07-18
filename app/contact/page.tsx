"use client"

import type React from "react"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock, Send, User, MessageSquare, GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직
    console.log("Form submitted:", formData)
    // 실제로는 서버로 데이터를 전송
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title={t("contact.title")} description={t("contact.subtitle")} />

      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 연락처 정보 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("contact.labInfo")}</h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg dark:bg-neutral-950 dark:text-neutral-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{t("contact.address")}</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            서울특별시 강남구 테헤란로 123
                            <br />
                            AI대학교 공과대학 301호
                            <br />
                            우편번호: 06234
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg dark:bg-neutral-950 dark:text-neutral-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{t("contact.email")}</h3>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <p>일반 문의: ailab@university.ac.kr</p>
                            <p>입학 문의: admission@ailab.ac.kr</p>
                            <p>연구 협력: research@ailab.ac.kr</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg dark:bg-neutral-950 dark:text-neutral-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{t("contact.phone")}</h3>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <p>연구실: +82-2-1234-5678</p>
                            <p>교수실: +82-2-1234-5679</p>
                            <p>팩스: +82-2-1234-5680</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg dark:bg-neutral-950 dark:text-neutral-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{t("contact.hours")}</h3>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <p>평일: 09:00 - 18:00</p>
                            <p>점심시간: 12:00 - 13:00</p>
                            <p>주말 및 공휴일: 휴무</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 찾아오는 길 */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("contact.directions")}</h2>
                <Card className="border-0 shadow-lg dark:bg-neutral-950 dark:text-neutral-50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">{t("contact.subway")}</h3>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• 2호선 강남역 3번 출구에서 도보 5분</li>
                          <li>• 9호선 신논현역 1번 출구에서 도보 7분</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{t("contact.bus")}</h3>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• 간선버스: 146, 360, 740</li>
                          <li>• 지선버스: 3412, 4319</li>
                          <li>• 광역버스: 9407, 1100</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{t("contact.parking")}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          건물 지하 1-3층 주차장 이용 가능 (유료)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 문의 폼 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t("contact.inquiry")}</h2>
              <Card className="border-0 shadow-lg dark:bg-neutral-950 dark:text-neutral-50">
                <CardHeader>
                  <CardTitle>{t("contact.inquiry")}</CardTitle>
                  <CardDescription>{t("contact.inquiryDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {t("contact.name")} *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="홍길동"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="pl-10 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder:text-neutral-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t("contact.email")} *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="pl-10 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder:text-neutral-500"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium mb-2">
                        {t("contact.category")} *
                      </label>
                      <div className="flex gap-2 flex-col sm:flex-row">
                        <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                          <SelectTrigger className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder:text-neutral-500">
                            <SelectValue placeholder={t("contact.selectCategory")} />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50">
                            <SelectItem value="admission">{t("contact.admission")}</SelectItem>
                            <SelectItem value="research">{t("contact.research")}</SelectItem>
                            <SelectItem value="internship">{t("contact.internship")}</SelectItem>
                            <SelectItem value="visit">{t("contact.visit")}</SelectItem>
                            <SelectItem value="other">{t("contact.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {t("contact.subject")} *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="문의 제목을 입력해주세요"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder:text-neutral-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t("contact.message")} *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="message"
                          placeholder="문의 내용을 자세히 작성해주세요..."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className="pl-10 min-h-32 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder:text-neutral-500"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-4 w-4" />
                      {t("contact.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* 입학 안내 */}
              <Card className="border-0 shadow-lg mt-8 dark:bg-neutral-950 dark:text-neutral-50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    <CardTitle>{t("contact.admissionGuide")}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">{t("contact.admissionDesc")}</p>

                    <div>
                      <h4 className="font-semibold mb-2">{t("contact.recruitmentAreas")}</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• 박사과정 학생 (Machine Learning, NLP)</li>
                        <li>• 석사과정 학생 (Computer Science)</li>
                        <li>• 포스닥 연구원 (AI Systems)</li>
                        <li>• 학부 인턴 (Programming, Research)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">{t("contact.qualifications")}</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• 컴퓨터 과학, 수학, 통계학 등 관련 전공</li>
                        <li>• Python, PyTorch 등 프로그래밍 경험</li>
                        <li>• 머신러닝, 딥러닝에 대한 기본 지식</li>
                        <li>• 영어 논문 읽기 및 작성 능력</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">{t("contact.documents")}</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• 이력서 (CV)</li>
                        <li>• 자기소개서</li>
                        <li>• 성적증명서</li>
                        <li>• 추천서 (해당자에 한함)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
