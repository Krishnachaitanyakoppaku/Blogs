"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Calendar, TrendingUp, Users, Code, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import "@/styles/animations.css"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"

// Mock data for featured posts
const featuredPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and learn how to build performant, scalable web applications with the new App Router.",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Full Stack Developer",
    },
    category: "Web Development",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Machine Learning in JavaScript: TensorFlow.js Deep Dive",
    excerpt:
      "Discover how to implement machine learning models directly in the browser using TensorFlow.js and create intelligent web applications.",
    author: {
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "AI/ML Engineer",
    },
    category: "Machine Learning",
    date: "2024-01-12",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Modern Applications",
    excerpt:
      "Learn essential security practices to protect your applications from common vulnerabilities and cyber threats.",
    author: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Security Specialist",
    },
    category: "Cybersecurity",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const stats = [
  { icon: Users, label: "Active Members", value: "150+" },
  { icon: Code, label: "Projects Completed", value: "50+" },
  { icon: TrendingUp, label: "Blog Posts", value: "200+" },
  { icon: Zap, label: "Tech Events", value: "25+" },
]



export default function HomePage() {
  const { isSignedIn } = useUser()

  return (
    <ScrollReveal>
      <div className="min-h-screen hero-background relative">

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 section-animate">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit glass-morphism text-white">
                    Developers Blog
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
                    Innovate. Learn. <span className="text-shimmer">Create.</span>
                  </h1>
                  <p className="text-xl text-white/80 max-w-lg">
                    Join our community of passionate developers, designers, and tech enthusiasts. Share knowledge, build
                    projects, and shape the future of technology.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 button-epic">
                    <Link href="/blog">
                      Explore Blog Posts <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  {isSignedIn && (
                    <Button asChild size="lg" className="text-lg px-8 button-epic">
                      <Link href="/write-for-us">
                        Write for Us
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className="relative float-element">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Tech innovation illustration"
                  width={600}
                  height={500}
                  className="relative rounded-2xl shadow-2xl glass-morphism"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="interactive-card glass-morphism p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="mx-auto w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white text-shimmer">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Club Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 glass-morphism p-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">About the Club</h2>
              <p className="text-xl text-white/80">
                The Developers Club is a vibrant community of students and professionals passionate about technology, coding, and innovation. We organize workshops, hackathons, and collaborative projects to foster learning and growth. Whether you are a beginner or an expert, you will find a welcoming space to connect, share, and create together.
              </p>
            </div>
          </div>
        </section>

        {/* About the Website Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8 glass-morphism p-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">About the Website</h2>
              <p className="text-xl text-white/80">
                This website is the digital home of the Developers Club. Here, you can explore insightful blog posts, stay updated on upcoming events, and connect with fellow tech enthusiasts. Built with Next.js and modern web technologies, our platform is designed to be fast, accessible, and community-driven.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section (from incoming branch) */}
        {/*<section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Share Your Tech Journey?</h2>
              <p className="text-xl opacity-90">
                Join our community of writers and share your knowledge with fellow tech enthusiasts. Whether you're a
                beginner or expert, your voice matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link href="/login">Write for Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link href="/about">Join Our Club</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>*/}

        {/* CTA Section (final) */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8 glass-morphism p-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Share Your Tech Journey?</h2>
              <p className="text-xl text-white/80">
                Join our community of writers and share your knowledge with fellow tech enthusiasts. Whether you're a
                beginner or expert, your voice matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 button-epic">
                  <Link href="/write-for-us">Submit Your Article</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 button-epic"
                >
                  <Link href="https://developersclubiiitdm.vercel.app/home" target="_blank" rel="noopener noreferrer">
                    Join Our Club
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Write Blog CTA Section - Only show when not signed in */}
        {!isSignedIn && (
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto space-y-8 glass-morphism p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Got Amazing Tech Insights to Share?</h2>
                <p className="text-xl text-white/80">
                  Your knowledge could inspire countless developers! Share your experiences, tutorials, and tech discoveries. 
                  Sign in now to become a valued contributor to our growing tech community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 button-epic">
                    <Link href="/api/auth/signin" className="flex items-center gap-2">
                      Sign In to Contribute
                      <svg 
                        className="w-5 h-5" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8 button-epic"
                  >
                    <Link href="/blog" className="flex items-center gap-2">
                      Explore Articles
                      <svg 
                        className="w-5 h-5" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </ScrollReveal>
  )
}
