'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronRight, Download, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { useEffect } from 'react'

export default function Home() {
  // Add smooth scrolling behavior to HTML element
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Reusable scroll function with offset
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <img src="/images/CB_Logo_11_2024_6e1ec5c4-c466-4639-a3e5-b12a2010f975.jpeg" alt="CelloBello Logo" className="h-28" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-black">SEO Audit Report</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-700 mb-8">cellobello.org</h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-12">
            A comprehensive analysis of technical SEO, content strategy, backlinks, user experience, and competitive positioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 py-6 text-base bg-black hover:bg-zinc-800 text-white" 
              onClick={() => scrollToElement('key-findings')}>
              View Key Findings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-zinc-300 text-zinc-800"
              onClick={() => scrollToElement('implementation-roadmap')}>
              Implementation Roadmap
            </Button>
          </div>
          <p className="text-sm text-zinc-500 mt-12">Prepared by RTC Logic</p>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToElement('executive-summary')}>
            <ArrowRight className="h-6 w-6 text-zinc-400 transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 px-6 bg-zinc-50" id="executive-summary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Executive Summary</h2>
          <p className="text-lg text-zinc-700 mb-12 leading-relaxed">
            This comprehensive SEO audit of cellobello.org has identified several strengths and opportunities for improvement across technical SEO, content strategy, backlink profile, user experience, and competitive positioning. The website serves as a valuable resource for the cello community but requires optimization in several key areas to improve search visibility and user engagement.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-0 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-emerald-600 text-xs">✓</span>
                  </div>
                  <span>Unique, specialized content for cellists</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-emerald-600 text-xs">✓</span>
                  </div>
                  <span>Proper HTTPS implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-emerald-600 text-xs">✓</span>
                  </div>
                  <span>Respectable backlink profile (DA 39/100)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-emerald-600 text-xs">✓</span>
                  </div>
                  <span>Clean, professional design</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Key Opportunities</h3>
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs">!</span>
                  </div>
                  <span>432 meta tag issues affecting SEO visibility</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs">!</span>
                  </div>
                  <span>539 content issues impacting crawlability and ranking</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs">!</span>
                  </div>
                  <span>Missing WWW redirect affecting site consistency</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 text-xs">!</span>
                  </div>
                  <span>99% of images missing size attributes</span>
                </li>
              </ul>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-center" id="key-findings">Key Findings</h3>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">1</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">Technical SEO</p>
                <p className="text-zinc-700 leading-relaxed">
                  The website has a solid technical foundation with proper HTTPS implementation but lacks a consistent WWW redirect, creating potential duplicate content issues. Additionally, there are numerous meta tag problems affecting search visibility.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">2</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">Content Strategy</p>
                <p className="text-zinc-700 leading-relaxed">
                  The site offers valuable, unique content but faces 432 meta tag issues (titles and descriptions) and 539 content issues including H1 tag problems (missing, multiple, duplicates, too long) and images missing alt text, significantly impacting visibility and accessibility.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">3</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">Backlink Profile</p>
                <p className="text-zinc-700 leading-relaxed">
                  With a Domain Authority of 39/100 and 638 linking root domains, cellobello.org has a respectable backlink profile with high-quality educational and music-related links, but opportunities exist to expand this network.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">4</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">User Experience</p>
                <p className="text-zinc-700 leading-relaxed">
                  The site has significant mobile optimization issues, including the absence of a viewport meta tag. Additionally, 99% of images lack size attributes causing layout shifts, and 13% of images are missing alt text for accessibility.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">5</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">Competitive Analysis</p>
                <p className="text-zinc-700 leading-relaxed">
                  In the online cello education market, cellobello.org occupies a middle ground between premium platforms like tonebase.co/cello and individual creator sites like emilywright.net, presenting opportunities for differentiation among competitors such as Violinist.com, The Strad, and StringsMagazine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Recommendations */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Priority Recommendations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-gradient-to-br from-zinc-50 to-white">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <span className="font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Implement WWW Redirect</h3>
              <p className="text-zinc-700 leading-relaxed">
                Set up proper 301 redirects to ensure consistent domain version (with or without www) to prevent duplicate content issues and consolidate SEO signals.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <p className="text-sm text-zinc-500 font-medium">Implementation difficulty</p>
                <div className="w-full bg-zinc-200 rounded-full h-2 mt-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Easy</p>
              </div>
            </Card>
            
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-gradient-to-br from-zinc-50 to-white">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <span className="font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fix Meta Tag Issues</h3>
              <p className="text-zinc-700 leading-relaxed">
                Resolve 432 meta tag issues including duplicate page titles, titles that are too long or too short, and missing or duplicate meta descriptions.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <p className="text-sm text-zinc-500 font-medium">Implementation difficulty</p>
                <div className="w-full bg-zinc-200 rounded-full h-2 mt-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Medium</p>
              </div>
            </Card>
            
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-gradient-to-br from-zinc-50 to-white">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <span className="font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fix H1 Tag Issues</h3>
              <p className="text-zinc-700 leading-relaxed">
                Address multiple H1 tags, missing H1 tags, duplicate H1s across pages, and overly long H1 tags to improve content hierarchy for search engines.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <p className="text-sm text-zinc-500 font-medium">Implementation difficulty</p>
                <div className="w-full bg-zinc-200 rounded-full h-2 mt-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Moderate</p>
              </div>
            </Card>
            
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-gradient-to-br from-zinc-50 to-white">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <span className="font-semibold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Add Missing Alt Text</h3>
              <p className="text-zinc-700 leading-relaxed">
                Create descriptive alt text for all images missing this attribute to improve accessibility for visually impaired users and help search engines understand image content.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <p className="text-sm text-zinc-500 font-medium">Implementation difficulty</p>
                <div className="w-full bg-zinc-200 rounded-full h-2 mt-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Easy-Medium</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Analysis Tabs */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Detailed Analysis</h2>
          
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="w-full flex mb-8 p-1 bg-zinc-100 rounded-full">
              <TabsTrigger value="technical" className="flex-1 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Technical SEO</TabsTrigger>
              <TabsTrigger value="content" className="flex-1 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Content</TabsTrigger>
              <TabsTrigger value="backlinks" className="flex-1 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Backlinks</TabsTrigger>
              <TabsTrigger value="keywords" className="flex-1 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Keywords</TabsTrigger>
              <TabsTrigger value="ux" className="flex-1 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">User Experience</TabsTrigger>
              <TabsTrigger value="competitors" className="flex-1 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Competitors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Technical SEO Analysis</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-medium mb-3 text-zinc-900">Strengths:</h5>
                    <ul className="space-y-2 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Proper HTTPS implementation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Functional site structure</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>No significant crawlability issues detected</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-3 text-zinc-900">Issues Identified:</h5>
                    <ul className="space-y-2 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-red-600 text-xs">!</span>
                        </div>
                        <span>Missing WWW redirect impacting site consistency</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-red-600 text-xs">!</span>
                        </div>
                        <span>432 meta tag issues (titles, descriptions)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-red-600 text-xs">!</span>
                        </div>
                        <span>Duplicate page titles affecting SERP visibility</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>Titles too long or too short on multiple pages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>Missing or duplicate meta descriptions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>Meta descriptions too long on several pages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">Technical Performance Metrics</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                      <h5 className="font-medium mb-4 text-sm text-zinc-500">Page Speed Performance</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">First Contentful Paint</span>
                            <span className="text-sm font-medium text-amber-600">2.4s</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-amber-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Largest Contentful Paint</span>
                            <span className="text-sm font-medium text-red-600">3.8s</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Cumulative Layout Shift</span>
                            <span className="text-sm font-medium text-emerald-600">0.02</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Total Blocking Time</span>
                            <span className="text-sm font-medium text-amber-600">120ms</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-amber-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                      <h5 className="font-medium mb-4 text-sm text-zinc-500">Technical SEO Elements</h5>
                      <div className="relative h-60">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full max-w-60 h-60 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="0" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#fb923c" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="127.2" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#f43f5e" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="198.7" />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-3xl font-bold text-zinc-800">62%</span>
                                <span className="text-sm text-zinc-500">Overall Score</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 w-full">
                          <div className="flex justify-between text-xs text-zinc-500 px-1">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-1"></div>
                              <span>Good (55%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                              <span>Needs Improvement (25%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                              <span>Poor (20%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Key Recommendations</h4>
                <div className="space-y-4">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Implement WWW Redirect</h5>
                    <p className="text-zinc-700">Set up proper 301 redirects to ensure all traffic is directed to a consistent domain version (either with or without www). This prevents duplicate content issues and improves SEO signal consolidation.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Critical Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Easy Fix</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Fix Page Title Issues</h5>
                    <p className="text-zinc-700">Address duplicate page titles, optimize titles that are too long or too short, and ensure each page has a unique, descriptive title that includes relevant keywords.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Critical Priority</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Optimize Meta Descriptions</h5>
                    <p className="text-zinc-700">Create unique meta descriptions for pages missing them, fix duplicate descriptions, and adjust descriptions that are too long to improve SERP click-through rates.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Critical Priority</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Mobile Optimization</h5>
                    <p className="text-zinc-700">Implement <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">{'<meta name="viewport" content="width=device-width, initial-scale=1">'}</code> in the head section of all pages and develop a fully responsive design using CSS media queries.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Easy Fix</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Image Optimization</h5>
                    <p className="text-zinc-700">Add width and height attributes to all images to prevent layout shifts. Add missing alt text to improve accessibility and SEO, and compress large images to improve page load times.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Moderate Complexity</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="content" className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Content Analysis</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-medium mb-3 text-zinc-900">Strengths:</h5>
                    <ul className="space-y-2 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Unique, specialized content for cellists</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Good content depth on cello-related topics</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Valuable resources including job listings and educational content</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Proper use of heading hierarchy (H1, H2, H3)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-3 text-zinc-900">Issues Identified:</h5>
                    <ul className="space-y-2 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-red-600 text-xs">!</span>
                        </div>
                        <span>Meta descriptions issues: missing, duplicate, or too long</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>Multiple H1 tags on numerous pages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>H1 tags missing on critical pages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>Duplicate H1 tags across different pages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>H1 tags too long on several pages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-amber-600 text-xs">!</span>
                        </div>
                        <span>Alt text missing on many important images</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">Target Keywords Analysis</h4>
                </div>
                
                <div className="bg-zinc-50 p-6 rounded-xl mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-4 text-sm text-zinc-500">Primary Keywords</h5>
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-100">
                          <div className="flex justify-between">
                            <span className="font-medium">cello</span>
                            <span className="text-emerald-600 text-sm">Primary focus</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-100">
                          <div className="flex justify-between">
                            <span className="font-medium">ensemble</span>
                            <span className="text-emerald-600 text-sm">Secondary focus</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-100">
                          <div className="flex justify-between">
                            <span className="font-medium">musical</span>
                            <span className="text-emerald-600 text-sm">Common descriptor</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-4 text-sm text-zinc-500">Specific Opportunity Keywords</h5>
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-100">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">"cello bello"</span>
                            <span className="text-blue-600 text-sm">High opportunity</span>
                          </div>
                          <div className="text-xs text-zinc-500">Branded term with high search volume</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-100">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">"cello jobs"</span>
                            <span className="text-blue-600 text-sm">Medium opportunity</span>
                          </div>
                          <div className="text-xs text-zinc-500">Estimated 44 monthly clicks</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-100">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">"straight vs bowed"</span>
                            <span className="text-blue-600 text-sm">Niche opportunity</span>
                          </div>
                          <div className="text-xs text-zinc-500">Cello technique term with potential</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Keyword</th>
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Search Volume</th>
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Difficulty</th>
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Opportunity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      <tr>
                        <td className="py-4 text-zinc-900 font-medium">"cello bello"</td>
                        <td className="py-4 text-zinc-700">High</td>
                        <td className="py-4 text-zinc-700">Low</td>
                        <td className="py-4 text-zinc-700">Branded term with high search volume</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-zinc-900 font-medium">"cello jobs"</td>
                        <td className="py-4 text-zinc-700">Medium</td>
                        <td className="py-4 text-zinc-700">Low</td>
                        <td className="py-4 text-zinc-700">44 estimated clicks</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-zinc-900 font-medium">"chamber music concert experience"</td>
                        <td className="py-4 text-zinc-700">Low</td>
                        <td className="py-4 text-zinc-700">Medium</td>
                        <td className="py-4 text-zinc-700">Low competition, high relevance</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-zinc-900 font-medium">"straight vs bowed"</td>
                        <td className="py-4 text-zinc-700">Low</td>
                        <td className="py-4 text-zinc-700">Low</td>
                        <td className="py-4 text-zinc-700">Cello technique term with potential</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-zinc-900 font-medium">"starkler"</td>
                        <td className="py-4 text-zinc-700">Low</td>
                        <td className="py-4 text-zinc-700">Low</td>
                        <td className="py-4 text-zinc-700">Cello-related term with potential</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <Button variant="outline" size="sm" className="w-full py-2 flex items-center justify-center">
                  <span>View All 24 Target Keywords</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Key Recommendations</h4>
                <div className="space-y-4">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Fix H1 Tag Issues</h5>
                    <p className="text-zinc-700">Address multiple H1 tags, missing H1 tags, duplicate H1s across pages, and overly long H1 tags to improve search engine understanding of your content hierarchy.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Critical Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">High Impact</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Add Alt Text to Images</h5>
                    <p className="text-zinc-700">Create descriptive alt text for all images missing them. This improves accessibility for visually impaired users and helps search engines understand your visual content.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Quick Win</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Meta Description Implementation</h5>
                    <p className="text-zinc-700">Create unique, descriptive meta descriptions for all pages missing them. Fix duplicate descriptions and optimize lengthy ones to improve SERP click-through rates.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Critical Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">High Impact</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Page Title Optimization</h5>
                    <p className="text-zinc-700">Fix duplicate titles, optimize titles that are too long or too short, and ensure each page has a unique, descriptive title that includes relevant keywords.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Internal Linking Enhancement</h5>
                    <p className="text-zinc-700">Add descriptive anchor text to internal links and improve non-descriptive text like "click here" or "learn more" to provide better context to users and search engines.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Medium Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Quick Win</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="backlinks" className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Backlink Analysis</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-medium mb-4">Key Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Domain Rating (Ahrefs)</span>
                      <span className="font-semibold">41/100</span>
                    </div>
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Domain Authority (Moz)</span>
                      <span className="font-semibold">39/100</span>
                    </div>
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Domain Trust</span>
                      <span className="font-semibold">28/100</span>
                    </div>
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Page Trust</span>
                      <span className="font-semibold">25/100</span>
                    </div>
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Linking Root Domains</span>
                      <span className="font-semibold">480</span>
                    </div>
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Total Backlinks</span>
                      <span className="font-semibold">3.8K</span>
                    </div>
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Toxic Backlinks</span>
                      <span className="font-semibold text-red-600">3.1K (82.4%)</span>
                    </div>
                    <div className="flex justify-between p-4 bg-zinc-50 rounded-xl">
                      <span className="text-zinc-700">Broken Backlinks</span>
                      <span className="font-semibold">13</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4">Backlink Distribution</h4>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl mb-6">
                    <h5 className="font-medium mb-4 text-sm text-zinc-500">Referring Domains Breakdown</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Links to Homepage</span>
                          <span className="text-sm font-medium">189</span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '39.4%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Links to Internal Pages</span>
                          <span className="text-sm font-medium">245</span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '51%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Other</span>
                          <span className="text-sm font-medium">46</span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '9.6%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-4 text-sm text-zinc-500">Backlinks Quality</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">High Toxicity</span>
                          <span className="text-sm font-medium text-red-600">0.4% (16)</span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: '0.4%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Medium Toxicity</span>
                          <span className="text-sm font-medium text-amber-600">45.3% (1.7K)</span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '45.3%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Low Toxicity</span>
                          <span className="text-sm font-medium text-yellow-600">36.7% (1.4K)</span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '36.7%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Non-toxic</span>
                          <span className="text-sm font-medium text-green-600">17.6% (664)</span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '17.6%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Key Recommendations</h4>
                <div className="space-y-4">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Toxic Backlink Disavowal</h5>
                    <p className="text-zinc-700">With 82.4% of backlinks being toxic (3.1K out of 3.8K), prioritize creating a comprehensive disavow file to address high and medium toxicity links that could be harming your domain reputation.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Critical Priority</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Fix Broken Backlinks</h5>
                    <p className="text-zinc-700">Recover value from 13 broken backlinks by implementing proper 301 redirects or restoring missing pages to recapture lost link equity.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Medium Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Quick Win</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Internal Page Link Building</h5>
                    <p className="text-zinc-700">While 245 domains link to internal pages, focus on increasing high-quality backlinks to key content pages rather than just the homepage to improve topic relevance signals.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Guest Posting Strategy</h5>
                    <p className="text-zinc-700">Develop a guest posting campaign targeting music education websites to increase the percentage of non-toxic backlinks (currently only 17.6%).</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Keyword Opportunities Section */}
            <TabsContent value="keywords" className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Keyword Opportunities Analysis</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Top Performing Keywords</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="py-3 text-left pl-4 text-sm font-medium text-zinc-500">Keyword</th>
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Position</th>
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Search Vol.</th>
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Difficulty</th>
                        <th className="py-3 text-left text-sm font-medium text-zinc-500">Competition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      <tr className="hover:bg-zinc-50">
                        <td className="py-4 pl-4 text-zinc-900 font-medium">cello concerto</td>
                        <td className="py-4 text-zinc-700">5</td>
                        <td className="py-4 text-zinc-700">2.4K</td>
                        <td className="py-4 text-zinc-700">52</td>
                        <td className="py-4 text-zinc-700">0.04</td>
                      </tr>
                      <tr className="hover:bg-zinc-50">
                        <td className="py-4 pl-4 text-zinc-900 font-medium">cello online</td>
                        <td className="py-4 text-zinc-700">8</td>
                        <td className="py-4 text-zinc-700">590</td>
                        <td className="py-4 text-zinc-700">9</td>
                        <td className="py-4 text-zinc-700">0.16</td>
                      </tr>
                      <tr className="hover:bg-zinc-50">
                        <td className="py-4 pl-4 text-zinc-900 font-medium">online cello</td>
                        <td className="py-4 text-zinc-700">6</td>
                        <td className="py-4 text-zinc-700">590</td>
                        <td className="py-4 text-zinc-700">8</td>
                        <td className="py-4 text-zinc-700">0.16</td>
                      </tr>
                      <tr className="hover:bg-zinc-50">
                        <td className="py-4 pl-4 text-zinc-900 font-medium">battey</td>
                        <td className="py-4 text-zinc-700">10</td>
                        <td className="py-4 text-zinc-700">720</td>
                        <td className="py-4 text-zinc-700">7</td>
                        <td className="py-4 text-zinc-700">0.22</td>
                      </tr>
                      <tr className="hover:bg-zinc-50">
                        <td className="py-4 pl-4 text-zinc-900 font-medium">concerto cello</td>
                        <td className="py-4 text-zinc-700">8</td>
                        <td className="py-4 text-zinc-700">500</td>
                        <td className="py-4 text-zinc-700">16</td>
                        <td className="py-4 text-zinc-700">0.04</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Keyword Clusters & Opportunities</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-3">Cello Bow Hold Cluster</h5>
                    <p className="text-sm text-zinc-600 mb-4">High-volume, low-difficulty keywords with strong potential for quick wins</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-zinc-200">
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Keyword</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Position</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Vol.</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Diff.</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">cello bow hold</td>
                            <td className="py-2 text-xs text-zinc-700">13</td>
                            <td className="py-2 text-xs text-zinc-700">920</td>
                            <td className="py-2 text-xs text-zinc-700">4</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">cello bow holding</td>
                            <td className="py-2 text-xs text-zinc-700">22</td>
                            <td className="py-2 text-xs text-zinc-700">920</td>
                            <td className="py-2 text-xs text-zinc-700">4</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">how to hold a cello bow</td>
                            <td className="py-2 text-xs text-zinc-700">13</td>
                            <td className="py-2 text-xs text-zinc-700">590</td>
                            <td className="py-2 text-xs text-zinc-700">4</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">how do you hold a cello bow</td>
                            <td className="py-2 text-xs text-zinc-700">14</td>
                            <td className="py-2 text-xs text-zinc-700">590</td>
                            <td className="py-2 text-xs text-zinc-700">5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-3">Playing Cello Cluster</h5>
                    <p className="text-sm text-zinc-600 mb-4">High-volume, minimal competition terms with ranking potential</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-zinc-200">
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Keyword</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Position</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Vol.</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Comp.</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">playing cello</td>
                            <td className="py-2 text-xs text-zinc-700">25</td>
                            <td className="py-2 text-xs text-zinc-700">910</td>
                            <td className="py-2 text-xs text-zinc-700">0.01</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">cellist</td>
                            <td className="py-2 text-xs text-zinc-700">14</td>
                            <td className="py-2 text-xs text-zinc-700">1.3K</td>
                            <td className="py-2 text-xs text-zinc-700">0</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">a cellist</td>
                            <td className="py-2 text-xs text-zinc-700">15</td>
                            <td className="py-2 text-xs text-zinc-700">590</td>
                            <td className="py-2 text-xs text-zinc-700">0.33</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">canon in d cello</td>
                            <td className="py-2 text-xs text-zinc-700">14</td>
                            <td className="py-2 text-xs text-zinc-700">480</td>
                            <td className="py-2 text-xs text-zinc-700">0.15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-3">Educational Content Cluster</h5>
                    <p className="text-sm text-zinc-600 mb-4">Keywords targeting beginners with good traffic potential</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-zinc-200">
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Keyword</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Position</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Vol.</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Diff.</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">kids cello</td>
                            <td className="py-2 text-xs text-zinc-700">10</td>
                            <td className="py-2 text-xs text-zinc-700">590</td>
                            <td className="py-2 text-xs text-zinc-700">4</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">children's cello</td>
                            <td className="py-2 text-xs text-zinc-700">13</td>
                            <td className="py-2 text-xs text-zinc-700">590</td>
                            <td className="py-2 text-xs text-zinc-700">4</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">valse sentimentale</td>
                            <td className="py-2 text-xs text-zinc-700">5</td>
                            <td className="py-2 text-xs text-zinc-700">590</td>
                            <td className="py-2 text-xs text-zinc-700">12</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">quartertones</td>
                            <td className="py-2 text-xs text-zinc-700">9</td>
                            <td className="py-2 text-xs text-zinc-700">590</td>
                            <td className="py-2 text-xs text-zinc-700">15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-3">String Instruments Cluster</h5>
                    <p className="text-sm text-zinc-600 mb-4">Related string instrument keywords with high value</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-zinc-200">
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Keyword</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Position</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Vol.</th>
                            <th className="text-left py-2 text-xs font-medium text-zinc-500">Comp.</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">gut strings</td>
                            <td className="py-2 text-xs text-zinc-700">92-95</td>
                            <td className="py-2 text-xs text-zinc-700">880</td>
                            <td className="py-2 text-xs text-zinc-700">0.43</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">violin and viola</td>
                            <td className="py-2 text-xs text-zinc-700">25</td>
                            <td className="py-2 text-xs text-zinc-700">880</td>
                            <td className="py-2 text-xs text-zinc-700">0.06</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">david popper</td>
                            <td className="py-2 text-xs text-zinc-700">5</td>
                            <td className="py-2 text-xs text-zinc-700">480</td>
                            <td className="py-2 text-xs text-zinc-700">0.01</td>
                          </tr>
                          <tr className="hover:bg-zinc-100">
                            <td className="py-2 text-xs text-zinc-900">postcriptum</td>
                            <td className="py-2 text-xs text-zinc-700">15</td>
                            <td className="py-2 text-xs text-zinc-700">540</td>
                            <td className="py-2 text-xs text-zinc-700">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Key Recommendations</h4>
                <div className="space-y-4">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Target Cello Bow Hold Content</h5>
                    <p className="text-zinc-700">Create a comprehensive tutorial on cello bow holding techniques to capitalize on the high-volume, low-difficulty cluster of keywords (920 monthly searches, difficulty 4). Currently ranking around positions 13-22, a small optimization effort could bring these terms to page 1.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Quick Win</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Optimize for "Cellist" Keywords</h5>
                    <p className="text-zinc-700">Enhance content targeting "cellist" and "playing cello" terms which have high volume (910-1.3K monthly searches) with virtually no competition (0.01-0) and could be moved from positions 14-25 to top positions with targeted optimization.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Create Educational Content for Children</h5>
                    <p className="text-zinc-700">Develop content specifically for children's cellos and beginner lessons targeting keywords like "kids cello" and "children's cello" (590 monthly searches) which have low difficulty (4) and high ranking potential.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Medium Priority</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Expand String Instrument Coverage</h5>
                    <p className="text-zinc-700">Consider developing related string instrument content, particularly for "gut strings" which has substantial volume (880 searches) and potential for cross-promotion to cello content.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Medium Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Long-term</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ux" className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">User Experience Analysis</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-medium mb-3 text-zinc-900">Strengths:</h5>
                    <ul className="space-y-2 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Responsive design</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Fast page load times</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-emerald-600 text-xs">✓</span>
                        </div>
                        <span>Accessibility features</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-3 text-zinc-900">Issues Identified:</h5>
                    <ul className="space-y-2 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-red-600 text-xs">!</span>
                        </div>
                        <span>Mobile optimization issues</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-red-600 text-xs">!</span>
                        </div>
                        <span>Layout shifts on mobile devices</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-red-600 text-xs">!</span>
                        </div>
                        <span>Missing alt text on images</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">User Experience Metrics</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                      <h5 className="font-medium mb-4 text-sm text-zinc-500">Mobile Performance</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">First Contentful Paint</span>
                            <span className="text-sm font-medium text-amber-600">2.4s</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-amber-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Largest Contentful Paint</span>
                            <span className="text-sm font-medium text-red-600">3.8s</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Cumulative Layout Shift</span>
                            <span className="text-sm font-medium text-emerald-600">0.02</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Total Blocking Time</span>
                            <span className="text-sm font-medium text-amber-600">120ms</span>
                          </div>
                          <div className="w-full bg-zinc-200 rounded-full h-2">
                            <div className="bg-amber-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                      <h5 className="font-medium mb-4 text-sm text-zinc-500">Accessibility Features</h5>
                      <div className="relative h-60">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full max-w-60 h-60 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="0" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#fb923c" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="127.2" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#f43f5e" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="198.7" />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-3xl font-bold text-zinc-800">62%</span>
                                <span className="text-sm text-zinc-500">Overall Score</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 w-full">
                          <div className="flex justify-between text-xs text-zinc-500 px-1">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-1"></div>
                              <span>Good (55%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                              <span>Needs Improvement (25%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                              <span>Poor (20%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Key Recommendations</h4>
                <div className="space-y-4">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Implement Responsive Design</h5>
                    <p className="text-zinc-700">Ensure the website is fully responsive across all devices. This includes using CSS media queries and flexible layouts.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Easy Fix</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Optimize Image Sizes</h5>
                    <p className="text-zinc-700">Add width and height attributes to all images to prevent layout shifts. This improves page load times and user experience.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Moderate Complexity</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Add Alt Text to Images</h5>
                    <p className="text-zinc-700">Create descriptive alt text for all images missing them. This improves accessibility for visually impaired users and helps search engines understand your visual content.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Quick Win</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Improve Mobile Navigation</h5>
                    <p className="text-zinc-700">Ensure the website is easy to navigate on mobile devices. This includes implementing a hamburger menu or a simplified navigation structure.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Medium Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Quick Win</Badge>
                    </div>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Implement Accessibility Features</h5>
                    <p className="text-zinc-700">Add alt text to images, use descriptive link text, and ensure proper color contrast for better accessibility.</p>
                    <div className="flex mt-4 gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">High Priority</Badge>
                      <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200">Moderate Complexity</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="competitors" className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Competitive Analysis</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Current Positioning</h4>
                <div className="space-y-4">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Tonebase Cello (tonebase.co/cello)</h5>
                    <p className="text-zinc-700 mb-3">Premium platform with celebrity instructors and high production value</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Premium Pricing</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Celebrity Instructors</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Mobile App</span>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Emily Wright (emilywright.net)</h5>
                    <p className="text-zinc-700 mb-3">Individual creator with personality-driven content</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Personal Brand</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Blog-Centric</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Regular Updates</span>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">The Strad (thestrad.com)</h5>
                    <p className="text-zinc-700 mb-3">Established publication with strong domain authority and extensive string instrument content</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Domain Trust: 40/100</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">4.6K Monthly Visits</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">53.3K Backlinks</span>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Strings Magazine (stringsmagazine.com)</h5>
                    <p className="text-zinc-700 mb-3">Leading publication covering orchestra, violin, viola, cello, and bass content</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Domain Trust: 33/100</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">8.1K Monthly Visits</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">13.7K Backlinks</span>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Violinist.com</h5>
                    <p className="text-zinc-700 mb-3">Community-focused platform with forums and blog content for string players</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Strong Community</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Active Forums</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Regular Updates</span>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Maestronet.com</h5>
                    <p className="text-zinc-700 mb-3">Forum-based community for string instrument discussion and marketplace</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Active Forums</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Instrument Marketplace</span>
                      <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-medium">Technical Discussions</span>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Differentiation Strategies</h4>
                <div className="space-y-4">
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Differentiated Value Proposition</h5>
                    <p className="text-zinc-700">Clearly communicate what makes cellobello.org unique and position between high-end platforms like Tonebase and established publications like The Strad and Strings Magazine while offering more structure than individual creators.</p>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Content Strategy Opportunities</h5>
                    <p className="text-zinc-700">Create more structured learning paths than individual creators but more accessible than premium platforms. Increase content frequency with regular, scheduled updates and develop unique content formats not well-served by competitors.</p>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Technical and UX Improvements</h5>
                    <p className="text-zinc-700">Improve mobile experience to compete with Tonebase's app-based approach. Enhance community engagement features and implement structured data to gain advantage in search results.</p>
                  </Card>
                  <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                    <h5 className="font-medium mb-2">Marketing Enhancements</h5>
                    <p className="text-zinc-700">More prominently feature instructors and their credentials. Increase visibility of user testimonials and success stories and improve content categorization to help users find relevant resources.</p>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-24 px-6" id="implementation-roadmap">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Implementation Roadmap</h2>
          
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-200"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <span className="font-semibold">1</span>
                </div>
                <div className="ml-20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Phase 1: Critical Technical Fixes</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-600 font-medium">April 1-15, 2025</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">2 Weeks</span>
                    </div>
                  </div>
                  <Card className="p-6 border-0 shadow-sm bg-white rounded-xl">
                    <ul className="space-y-3 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Fix robots.txt blocking of 9 internal URLs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Review and correct 8 problematic canonical tags</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Fix 7 pagination URLs not properly linked with anchor tags</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Add viewport meta tag to all pages</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-zinc-500 font-medium">Implementation Progress</span>
                        <span className="text-sm text-zinc-500 font-medium">Priority: Critical</span>
                      </div>
                      <div className="w-full bg-zinc-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <span className="font-semibold">2</span>
                </div>
                <div className="ml-20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Phase 2: Content Structure Optimization</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-600 font-medium">April 16 - May 14, 2025</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">4 Weeks</span>
                    </div>
                  </div>
                  <Card className="p-6 border-0 shadow-sm bg-white rounded-xl">
                    <ul className="space-y-3 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Fix 121 pages with multiple H1 tags</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Add H1 tags to 25 pages missing them</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Fix 112 pages with duplicate H2 tags</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Correct 7 pages with non-sequential heading structure</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-zinc-500 font-medium">Implementation Progress</span>
                        <span className="text-sm text-zinc-500 font-medium">Priority: High</span>
                      </div>
                      <div className="w-full bg-zinc-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <span className="font-semibold">3</span>
                </div>
                <div className="ml-20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Phase 3: Meta Data Enhancement</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-600 font-medium">May 15 - June 15, 2025</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">1 Month</span>
                    </div>
                  </div>
                  <Card className="p-6 border-0 shadow-sm bg-white rounded-xl">
                    <ul className="space-y-3 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Create unique meta descriptions for 212 pages (84%)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Fix 13 duplicate page titles</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Optimize 35 short page titles (under 30 characters)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Review and shorten 30 long page titles (over 561 pixels)</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-zinc-500 font-medium">Implementation Progress</span>
                        <span className="text-sm text-zinc-500 font-medium">Priority: High</span>
                      </div>
                      <div className="w-full bg-zinc-200 rounded-full h-2">
                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <span className="font-semibold">4</span>
                </div>
                <div className="ml-20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Phase 4: Image and Link Optimization</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-600 font-medium">June 16 - July 31, 2025</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">6 Weeks</span>
                    </div>
                  </div>
                  <Card className="p-6 border-0 shadow-sm bg-white rounded-xl">
                    <ul className="space-y-3 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Add width and height attributes to 120 images</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Add descriptive alt text to 16 images</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Compress and optimize 8 large images (over 100KB)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Fix 99 internal links without anchor text</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Improve 108 links with non-descriptive anchor text</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-zinc-500 font-medium">Implementation Progress</span>
                        <span className="text-sm text-zinc-500 font-medium">Priority: Medium</span>
                      </div>
                      <div className="w-full bg-zinc-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <span className="font-semibold">5</span>
                </div>
                <div className="ml-20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Phase 5: Content Quality and Security Upgrades</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-600 font-medium">August 1 - September 30, 2025</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">2 Months</span>
                    </div>
                  </div>
                  <Card className="p-6 border-0 shadow-sm bg-white rounded-xl">
                    <ul className="space-y-3 text-zinc-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Enhance 93 pages with low content (less than 200 words)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Improve readability on 96 pages with difficult content</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Implement security headers (missing on 98% of pages)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center mr-3 mt-1">
                          <span className="text-zinc-600 text-xs">→</span>
                        </div>
                        <span>Fix 81 unsafe cross-origin links with rel="noopener"</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-zinc-500 font-medium">Implementation Progress</span>
                        <span className="text-sm text-zinc-500 font-medium">Priority: Medium</span>
                      </div>
                      <div className="w-full bg-zinc-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg font-semibold">SEO Audit Report for cellobello.org</p>
              <p className="text-zinc-400">March 21, 2025</p>
            </div>
            <div className="text-right">
              <p className="text-zinc-400">Prepared by</p>
              <p className="text-lg font-semibold">RTC Logic</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
