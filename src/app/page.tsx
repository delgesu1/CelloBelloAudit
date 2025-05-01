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
          </div>
          <p className="text-sm text-zinc-500 mt-12">Prepared by <span className="text-lg font-bold text-blue-400">RTC Logic</span></p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Summary</h2>
          <p className="text-lg text-zinc-700 mb-12 leading-relaxed">
            This comprehensive SEO audit of cellobello.org has identified several strengths and opportunities for improvement across technical SEO, content strategy, backlink profile, user experience, and competitive positioning.
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
                  <span>Improve search visibility: Fix 432 Meta Tag & 539 Content/H1 issues</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs">!</span>
                  </div>
                  <span>Enhance mobile experience: Add viewport tag & address image layout shifts</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs">!</span>
                  </div>
                  <span>Target high-potential keywords for content creation/optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 text-xs">!</span>
                  </div>
                  <span>Implement WWW redirect for site consistency</span>
                </li>
                 <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 text-xs">!</span>
                  </div>
                  <span>Improve accessibility and image SEO with alt text</span>
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
                <p className="font-semibold text-lg mb-2">Content & On-Page SEO</p>
                <p className="text-zinc-700 leading-relaxed">
                  Valuable unique content exists but faces significant hurdles: 432 meta tag issues (titles/descriptions) and 539 content issues (critical H1 tag problems, missing alt text) severely impact search visibility, click-through rates, and accessibility. Keyword targeting needs optimization.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">2</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">Technical SEO & Mobile</p>
                <p className="text-zinc-700 leading-relaxed">
                  Solid HTTPS foundation is undermined by missing WWW redirect and critical mobile optimization gaps (missing viewport tag). Technical performance issues like slow LCP (3.8s) and numerous meta tag errors further hinder search potential.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">3</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">User Experience</p>
                <p className="text-zinc-700 leading-relaxed">
                  Mobile experience suffers from missing viewport tags and layout shifts caused by unsized images (99%). Missing alt text (13% of images) impacts accessibility. Core Web Vitals show room for improvement, especially Largest Contentful Paint.
                </p>
              </div>
            </div>


            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-semibold">4</span>
              </div>
              <div>
                <p className="font-semibold text-lg mb-2">Backlink Profile</p>
                <p className="text-zinc-700 leading-relaxed">
                  With a Domain Authority of 39/100 and 638 linking root domains, cellobello.org has a respectable backlink profile with high-quality educational and music-related links, but opportunities exist to expand this network and disavow toxic links.
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

      {/* Consolidated Recommendations Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Actionable Recommendations</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto text-center mb-16">Prioritized solutions to drive more traffic to cellobello.org, based on impact and implementation effort</p>
          
          <div className="space-y-16">
            {/* High Impact Category */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold">1</span>
                </div>
                <h3 className="text-2xl font-semibold">High Impact Recommendations</h3>
                <div className="h-0.5 bg-black flex-grow rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                  <div className="h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-xl font-semibold">Meta Tag Optimization</h4>
                      <Badge className="bg-black hover:bg-zinc-800 text-white">Critical</Badge>
                    </div>
                    <p className="text-zinc-700 mb-5">
                      Resolve 432 meta tag issues (missing, duplicate, and poorly written titles & descriptions) to significantly improve search visibility and click-through rates from search results.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Traffic impact</span>
                        <span className="text-emerald-600 font-medium">Very High</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Implementation effort</span>
                        <span className="text-amber-600 font-medium">Medium</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-xl font-semibold">H1 Tag Structure</h4>
                      <Badge className="bg-black hover:bg-zinc-800 text-white">Critical</Badge>
                    </div>
                    <p className="text-zinc-700 mb-5">
                      Fix H1 tag issues (missing, multiple, duplicate, too long) across 539 content issues to dramatically improve search engine understanding of page topics and relevance.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Traffic impact</span>
                        <span className="text-emerald-600 font-medium">High</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Implementation effort</span>
                        <span className="text-amber-600 font-medium">Moderate</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Medium Impact Category */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold">2</span>
                </div>
                <h3 className="text-2xl font-semibold">Medium Impact Recommendations</h3>
                <div className="h-0.5 bg-black flex-grow rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-xl font-semibold">Mobile Optimization</h4>
                      <Badge className="bg-zinc-800 hover:bg-zinc-700 text-white">High Priority</Badge>
                    </div>
                    <p className="text-zinc-700 mb-5">
                      Implement viewport meta tag and fix image sizing issues to improve mobile rankings, prevent layout shifts, and enhance mobile user experience.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Traffic impact</span>
                        <span className="text-emerald-600 font-medium">Medium-High</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Implementation effort</span>
                        <span className="text-emerald-600 font-medium">Easy-Medium</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-xl font-semibold">Keyword Content Strategy</h4>
                      <Badge className="bg-zinc-800 hover:bg-zinc-700 text-white">High Priority</Badge>
                    </div>
                    <p className="text-zinc-700 mb-5">
                      Create and optimize content for high-opportunity keyword clusters like "cello bow hold" (920 monthly searches) and "playing cello" (910 searches) with low competition.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Traffic impact</span>
                        <span className="text-emerald-600 font-medium">High</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Implementation effort</span>
                        <span className="text-red-600 font-medium">High</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Supporting Recommendations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold">3</span>
                </div>
                <h3 className="text-2xl font-semibold">Supporting Recommendations</h3>
                <div className="h-0.5 bg-zinc-700 flex-grow rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-zinc-50">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-3">WWW Redirect Implementation</h4>
                    <p className="text-zinc-700 text-sm mb-4">
                      Set up 301 redirects for consistent domain version to consolidate SEO signals and prevent duplicate content penalties.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <Badge className="bg-zinc-200 text-zinc-800">Easy Fix</Badge>
                      <span className="text-zinc-500">Medium Impact</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-zinc-50">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Image Alt Text</h4>
                    <p className="text-zinc-700 text-sm mb-4">
                      Add descriptive alt text for images missing it to improve accessibility and boost image search potential.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <Badge className="bg-zinc-200 text-zinc-800">Easy-Medium</Badge>
                      <span className="text-zinc-500">Medium Impact</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-zinc-50">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Internal Linking Enhancement</h4>
                    <p className="text-zinc-700 text-sm mb-4">
                      Improve anchor text on 108 non-descriptive internal links to strengthen topic relevance signals.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <Badge className="bg-zinc-200 text-zinc-800">Moderate</Badge>
                      <span className="text-zinc-500">Medium Impact</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Implementation Note */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Implementation Approach</h4>
                  <p className="text-zinc-700">
                    The recommendations above are arranged in order of traffic impact. For maximum results, implement the high-impact recommendations first, focusing on technical SEO and on-page factors that directly affect search visibility before proceeding to more resource-intensive content creation efforts.
                  </p>
                </div>
              </div>
            </div>
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
                    <h5 className="font-medium mb-2">Image Optimization (Performance)</h5>
                    <p className="text-zinc-700">Add width and height attributes to all images to prevent layout shifts (CLS). Compress large images to improve page load times.</p>
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

              <p className="text-zinc-700 mb-6 leading-relaxed">
                The focus is on "easy win" keywords – typically longer, more specific phrases (long-tail keywords) – that target users with specific needs or questions related to cello playing, education, repertoire, and careers.
              </p>
              <p className="text-zinc-700 mb-8 leading-relaxed">
                While these keywords might have lower individual search volume compared to broad terms, they often attract a highly relevant audience and face less competition, potentially leading to higher engagement and conversion rates. CelloBello.org, as a rich educational resource, is well-positioned to target these specific user intents.
              </p>

              <h4 className="text-xl font-semibold mb-4">Keyword Recommendations by Category</h4>
              <p className="text-zinc-600 mb-6">
                The following keywords are organized into logical categories based on CelloBello.org's content and user search intent. Consider incorporating these phrases naturally into existing content (lesson descriptions, blog posts, page titles, headings, image alt text, meta descriptions) or creating new, targeted content.
              </p>

              <div className="space-y-6">
                {/* 1. Core Strengths */}
                <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">1. Core Strengths & High-Volume Opportunities</h4>
                  <p className="text-sm text-zinc-600 mb-4">Leverage CelloBello's existing authority and target terms with significant search interest. Validate competition levels for higher volume terms.</p>
                  <div className="space-y-4">
                    <Card className="bg-white p-4 rounded-lg border border-zinc-100">
                      <h5 className="font-medium mb-2 text-zinc-800">Cello Resources</h5>
                      <p className="text-xs text-zinc-500 mb-2">(Existing Rank #1 for "cello resources")</p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                        <li>free cello resources</li>
                        <li>cello resources for beginners</li>
                        <li>cello resources for adults</li>
                        <li>online cello resources</li>
                        <li>famous cellists masterclasses online resource</li>
                      </ul>
                    </Card>
                    <Card className="bg-white p-4 rounded-lg border border-zinc-100">
                      <h5 className="font-medium mb-2 text-zinc-800">Cello Competitions</h5>
                      <p className="text-xs text-zinc-500 mb-2">(Existing Rank #2 for "cello competitions")</p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                        <li>upcoming cello competitions</li>
                        <li>youth cello competitions</li>
                        <li>international cello competitions [Year, e.g., 2025/2026]</li>
                        <li>cello competition repertoire requirements guide</li>
                        <li>how to prepare for a cello competition</li>
                        <li>preparing for first cello competition</li>
                        <li>mock cello audition tips</li>
                      </ul>
                    </Card>
                    <Card className="bg-white p-4 rounded-lg border border-zinc-100">
                      <h5 className="font-medium mb-2 text-zinc-800">Cello Jobs & Career Opportunities</h5>
                      <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                        <li>cello jobs</li>
                        <li>cello teaching jobs</li>
                        <li>finding cello teaching positions internationally</li>
                        <li>orchestra cello positions</li>
                        <li>preparing for cello orchestra auditions excerpts</li>
                        <li>cello audition preparation</li>
                      </ul>
                    </Card>
                    <Card className="bg-white p-4 rounded-lg border border-zinc-100">
                      <h5 className="font-medium mb-2 text-zinc-800">General High-Volume / Foundational Terms</h5>
                      <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                        <li>cello bello <span className="text-xs text-zinc-500">(Important branded term)</span></li>
                        <li>cello concerto <span className="text-xs text-zinc-500">(Note: High volume, potentially high competition)</span></li>
                        <li>concerto cello</li>
                        <li>cello online</li>
                        <li>playing cello</li>
                        <li>cellist / a cellist</li>
                        <li>canon in d cello <span className="text-xs text-zinc-500">(If relevant content exists)</span></li>
                      </ul>
                    </Card>
                  </div>
                </Card>

                {/* 2. Cello Technique & Practice */}
                <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">2. Cello Technique & Practice</h4>
                  <p className="text-sm text-zinc-600 mb-4">Target users seeking specific advice on improving technique and practice habits.</p>
                  <div className="space-y-4">
                    <Card className="bg-white p-4 rounded-lg border border-zinc-100">
                      <h5 className="font-medium mb-2 text-zinc-800">Bowing Technique</h5>
                      <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                        <li>cello bowing exercises for smooth tone</li>
                        <li>cello bowing techniques</li>
                        <li>straight bowing</li>
                        <li>Paul Katz cello bowing tips <span className="text-xs text-zinc-500">(Leverage specific instructor content)</span></li>
                        <li>cello spiccato bowing technique tutorial</li>
                        <li>developing cello ricochet bowing</li>
                        <li>cello bow hold / cello bow holding</li>
                        <li>how to hold a cello bow / how do you hold a cello bow</li>
                        <li>history of the cello bow development</li>
                      </ul>
                    </Card>
                    <Card className="bg-white p-4 rounded-lg border border-zinc-100">
                      <h5 className="font-medium mb-2 text-zinc-800">Left Hand & Intonation</h5>
                      <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                        <li>left hand cello exercises for intonation</li>
                        <li>cello thumb position exercises for accuracy</li>
                        <li>cello thumb position exercises for beginners</li>
                        <li>improving cello shifting accuracy exercises</li>
                        <li>cello double stop intonation practice</li>
                        <li>solving left hand pain cello playing</li>
                        <li>cello fingering techniques</li>
                      </ul>
                    </Card>
                    <Card className="bg-white p-4 rounded-lg border border-zinc-100">
                      <h5 className="font-medium mb-2 text-zinc-800">Practice Methods & Musicianship</h5>
                      <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                        <li>how to practice cello vibrato consistently</li>
                        <li>cello vibrato technique</li>
                        <li>Feuillard cello exercises guide</li>
                        <li>cello practice routine for intermediate players</li>
                        <li>cello practice routine</li>
                        <li>cello scale practice methods</li>
                        <li>mental rehearsal techniques for cellists</li>
                        <li>positive self-talk for musicians confidence</li>
                        <li>how to use a metronome for cello practice effectively</li>
                        <li>cello self-teaching tips</li>
                        <li>cello warm-up exercises for adults</li>
                        <li>common cello technique mistakes to avoid</li>
                        <li>how to develop cello tone quality</li>
                        <li>benefits of Alexander Technique for cellists</li>
                      </ul>
                    </Card>
                  </div>
                </Card>

                {/* 3. Cello Repertoire & Interpretation */}
                <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">3. Cello Repertoire & Interpretation</h4>
                  <p className="text-sm text-zinc-600 mb-4">Focus on specific pieces, composers, and interpretive approaches.</p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                    <li>interpreting Bach cello suites historically informed</li>
                    <li>Bach cello suite interpretation</li>
                    <li>bowing techniques for Dvorak Cello Concerto</li>
                    <li>understanding Shostakovich cello sonata form</li>
                    <li>analysis of [Specific Piece featured on site, e.g., Schumann Adagio & Allegro] <span className="text-xs text-zinc-500">(Use specific pieces)</span></li>
                    <li>preparing [Specific Piece] for cello performance <span className="text-xs text-zinc-500">(Use specific pieces)</span></li>
                    <li>historical context of [Specific Composer]'s cello works <span className="text-xs text-zinc-500">(Use specific composers)</span></li>
                    <li>cello sonata technique</li>
                    <li>cello concerto fingerings</li>
                    <li>valse sentimentale <span className="text-xs text-zinc-500">(If relevant content exists)</span></li>
                  </ul>
                </Card>

                {/* 4. Ensemble & Chamber Music */}
                <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">4. Ensemble & Chamber Music</h4>
                  <p className="text-sm text-zinc-600 mb-4">Target users interested in playing with others, particularly string ensembles.</p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                    <li>string quartet rehearsal tips for intonation</li>
                    <li>chamber music communication techniques</li>
                    <li>chamber music concert</li>
                    <li>balancing dynamics in a string quartet</li>
                    <li>rehearsal strategies for amateur string quartet</li>
                    <li>how to lead a string quartet rehearsal</li>
                    <li>intonation exercises for string ensembles</li>
                    <li>tips for playing cello in a string trio</li>
                    <li>violin and viola <span className="text-xs text-zinc-500">(If content discusses interactions)</span></li>
                  </ul>
                </Card>

                {/* 5. Educational Content & General Information */}
                <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">5. Educational Content & General Information</h4>
                  <p className="text-sm text-zinc-600 mb-4">Cover broader educational topics, beginner resources, and instrument care.</p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                    <li>cello music theory basics</li>
                    <li>cello maintenance tips for students</li>
                    <li>comparing different types of cello strings</li>
                    <li>gut strings</li>
                    <li>kids cello / children's cello</li>
                    <li>quartertones <span className="text-xs text-zinc-500">(If relevant content exists)</span></li>
                    <li>david popper <span className="text-xs text-zinc-500">(If relevant content exists)</span></li>
                    <li>postcriptum <span className="text-xs text-zinc-500">(If relevant content exists)</span></li>
                  </ul>
                </Card>

                {/* 6. Expert Content & Specific Instructors */}
                <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">6. Expert Content & Specific Instructors</h4>
                  <p className="text-sm text-zinc-600 mb-4">Highlight unique masterclass content and insights from featured professionals.</p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 text-sm pl-2">
                    <li>cello masterclass videos</li>
                    <li>free cello masterclass</li>
                    <li>starker <span className="text-xs text-zinc-500">(If content relates to Janos Starker)</span></li>
                    <li>cello interpretation masterclass</li>
                    <li>online cello masterclass [Specific Cellist/Piece featured on site] <span className="text-xs text-zinc-500">(Use specific names)</span></li>
                    <li>professional cellist advice</li>
                    <li>cellist interviews</li>
                    <li>cello performance tips</li>
                    <li>[Specific Cellist featured on site] teaching philosophy <span className="text-xs text-zinc-500">(Highlight your instructors)</span></li>
                  </ul>
                </Card>

                {/* Implementation Strategy */}
                <Card className="p-6 border-0 bg-zinc-50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">Implementation Strategy & Next Steps</h4>
                  <div className="space-y-4 text-sm text-zinc-700">
                    <div>
                      <h5 className="font-medium mb-2 text-zinc-800">Prioritize & Validate:</h5>
                      <p className="mb-2">Use SEO tools (e.g., Google Keyword Planner, SEMrush, Ahrefs, Moz) to:</p>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Check estimated monthly search volume for these terms.</li>
                        <li>Assess the competition level or ranking difficulty.</li>
                        <li>Discover related keyword variations and user questions.</li>
                        <li>Prioritize keywords based on relevance, volume, and achievable difficulty.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-zinc-800">Content Audit & Optimization:</h5>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Review existing content (pages, posts, lesson descriptions) to see where these keywords can be naturally integrated.</li>
                        <li>Optimize titles (H1), headings (H2, H3), body text, image alt text, and meta descriptions.</li>
                        <li>Crucially: Replace bracketed placeholders like <code className="bg-zinc-200 px-1 py-0.5 rounded">[Specific Cellist/Piece featured on site]</code> with actual names from CelloBello's content to create highly specific long-tail keywords.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-zinc-800">Content Creation:</h5>
                      <p>Identify keyword gaps and create new, high-quality content (blog posts, guides, videos, resource pages) specifically targeting valuable keywords. Consider creating "pillar pages" for major topics (e.g., "The Ultimate Guide to Cello Bowing Techniques").</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-zinc-800">Internal Linking:</h5>
                      <p>Link related pages and posts together using keyword-rich anchor text to distribute authority and improve navigation.</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-zinc-800">Technical SEO Quick Wins:</h5>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Ensure URL structures are clean and include target keywords where appropriate.</li>
                        <li>Implement schema markup for relevant content types (e.g., Educational Events, Courses, Articles).</li>
                        <li>Optimize image file sizes and ensure all images have descriptive alt text.</li>
                        <li>Prioritize mobile-friendliness and page speed.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-zinc-800">Track Success:</h5>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Use Google Search Console to monitor rankings and impressions for target keywords.</li>
                        <li>Use Google Analytics to measure organic traffic growth to optimized pages.</li>
                        <li>Track relevant engagement metrics (e.g., time on page, bounce rate, newsletter signups).</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-zinc-700 mt-8 leading-relaxed">
                By systematically implementing these recommendations, CelloBello.org can enhance its search engine visibility, attract a more qualified and engaged audience, and solidify its position as a leading online resource for the global cello community.
              </p>
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

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg font-semibold">SEO Audit Report for cellobello.org</p>
              <p className="text-zinc-400">April 25, 2025</p>
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
