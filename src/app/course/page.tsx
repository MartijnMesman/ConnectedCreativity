'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Module {
  id: number
  week: number
  title: string
  type: 'physical' | 'online'
  status: 'completed' | 'current' | 'locked'
  description: string
  duration: string
  learningOutcomes: string[]
}

const modules: Module[] = [
  {
    id: 1,
    week: 1,
    title: "Introduction + Curiosity",
    type: 'physical',
    status: 'completed',
    description: "Introduction to connected creativity and developing curiosity as a foundation for creative exploration",
    duration: "2 hours",
    learningOutcomes: [
      "Understand the course structure and objectives",
      "Identify your creative strengths and areas for growth",
      "Practice curiosity-based exercises"
    ]
  },
  {
    id: 2,
    week: 2,
    title: "Mind Wandering",
    type: 'online',
    status: 'current',
    description: "Exploring the connection between mind wandering and creative expression through guided exercises",
    duration: "1.5 hours",
    learningOutcomes: [
      "Understand the neuroscience of mind wandering",
      "Practice guided mind wandering exercises",
      "Create a personal mind wandering practice"
    ]
  },
  {
    id: 3,
    week: 3,
    title: "Collaborative Creativity",
    type: 'physical',
    status: 'locked',
    description: "Working together in creative processes and understanding the power of collaborative creation",
    duration: "2.5 hours",
    learningOutcomes: [
      "Experience collaborative creative processes",
      "Learn facilitation techniques for creative sessions",
      "Understand group dynamics in creative work"
    ]
  },
  {
    id: 4,
    week: 4,
    title: "Intuition",
    type: 'online',
    status: 'locked',
    description: "Developing and trusting your creative intuition as a guide for artistic decisions",
    duration: "3 hours",
    learningOutcomes: [
      "Distinguish between intuition and impulse",
      "Practice intuition-building exercises",
      "Apply intuitive decision-making to creative projects"
    ]
  },
  {
    id: 5,
    week: 5,
    title: "Resilience",
    type: 'physical',
    status: 'locked',
    description: "Building creative resilience and learning to navigate challenges in the creative process",
    duration: "2 hours",
    learningOutcomes: [
      "Understand the role of resilience in creativity",
      "Develop personal resilience strategies",
      "Practice bouncing back from creative setbacks"
    ]
  },
  {
    id: 6,
    week: 6,
    title: "Inner Critic",
    type: 'online',
    status: 'locked',
    description: "Understanding and working with your inner critic to enhance rather than hinder creativity",
    duration: "2.5 hours",
    learningOutcomes: [
      "Identify your inner critic patterns",
      "Learn techniques to manage self-doubt",
      "Transform criticism into constructive feedback"
    ]
  },
  {
    id: 7,
    week: 7,
    title: "Entrepreneurship",
    type: 'online',
    status: 'locked',
    description: "Exploring the entrepreneurial mindset and turning creative ideas into viable projects",
    duration: "3.5 hours",
    learningOutcomes: [
      "Understand creative entrepreneurship",
      "Develop business thinking for creative projects",
      "Create a simple business model for a creative idea"
    ]
  },
  {
    id: 8,
    week: 8,
    title: "Creative Courage",
    type: 'physical',
    status: 'locked',
    description: "Developing the courage to take creative risks and express your authentic voice",
    duration: "2 hours",
    learningOutcomes: [
      "Understand the role of courage in creativity",
      "Practice vulnerability in creative expression",
      "Develop strategies for taking creative risks"
    ]
  },
  {
    id: 9,
    week: 9,
    title: "Creativity and Technology",
    type: 'online',
    status: 'locked',
    description: "Exploring how technology can enhance and support creative processes and expression",
    duration: "2.5 hours",
    learningOutcomes: [
      "Understand the relationship between creativity and technology",
      "Explore digital creative tools",
      "Develop a balanced approach to technology in creativity"
    ]
  },
  {
    id: 10,
    week: 10,
    title: "Creative Flow",
    type: 'online',
    status: 'locked',
    description: "Understanding and cultivating flow states for optimal creative performance",
    duration: "4 hours",
    learningOutcomes: [
      "Understand the psychology of flow states",
      "Identify your personal flow triggers",
      "Create optimal conditions for creative flow"
    ]
  },
  {
    id: 11,
    week: 11,
    title: "Your Creative Vision",
    type: 'physical',
    status: 'locked',
    description: "Synthesizing your learning journey and developing your personal creative vision for the future",
    duration: "1.5 hours",
    learningOutcomes: [
      "Reflect on your creative journey",
      "Articulate your personal creative vision",
      "Plan next steps in your creative development"
    ]
  }
]

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Connected Creativity
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/course" className="text-white font-medium">
                Modules
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
              Course Modules
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
            Discover your creative journey through our carefully curated modules,
            <br />
            each designed to develop your skills step by step.
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link href={`/course/week/${module.week}`} className="block">
              {/* Week Number */}
              <div className="text-purple-400 text-sm font-medium mb-2">
                Week {module.week}
              </div>

              {/* Module Title */}
              <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {module.description}
              </p>

              {/* Module Type and Duration */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    module.type === 'physical' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {module.type === 'physical' ? '🏫 Physical' : '💻 Online'}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  {module.duration}
                </span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-between">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  module.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : module.status === 'current'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {module.status === 'completed' && '✅ Completed'}
                  {module.status === 'current' && '🔄 Current'}
                  {module.status === 'locked' && '🔒 Locked'}
                </div>

                {/* Action Button */}
                {module.status === 'current' && (
                  <Link
                    href={`/course/module/${module.id}`}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  >
                    Continue
                  </Link>
                )}
                {module.status === 'completed' && (
                  <Link
                    href={`/course/week/${module.week}`}
                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all duration-200"
                  >
                    Review
                  </Link>
                )}
              </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Course Progress */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Your Progress</h3>
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-purple-400">1</div>
                <div className="text-gray-400 text-sm">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">1</div>
                <div className="text-gray-400 text-sm">In Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-400">9</div>
                <div className="text-gray-400 text-sm">Remaining</div>
              </div>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500" style={{ width: '18%' }}></div>
            </div>
            <p className="text-gray-400 text-sm">18% Complete</p>
          </div>
        </div>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}