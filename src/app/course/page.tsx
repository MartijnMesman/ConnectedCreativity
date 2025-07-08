'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Layout/Header'
import BackgroundElements from '@/components/Layout/BackgroundElements'

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
    <div className="min-h-screen bg-gradient-main">
      <Header />

      {/* Main Content */}
      <main className="container-main">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Hero Title */}
          <h1 className="heading-xl mb-8">
            Course Modules
          </h1>

          {/* Subtitle */}
          <p className="body-lg mb-16 max-w-3xl mx-auto">
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
              className="card-primary"
            >
              {/* Week Number */}
              <div className="badge-primary mb-2">
                Week {module.week}
              </div>

              {/* Module Title */}
              <h3 className="heading-sm mb-3">
                {module.title}
              </h3>

              {/* Description */}
              <p className="body-sm mb-4">
                {module.description}
              </p>

              {/* Module Type and Duration */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`badge-${module.type === 'physical' ? 'success' : 'secondary'}`}>
                    {module.type === 'physical' ? '🏫 Physical' : '💻 Online'}
                  </span>
                </div>
                <span className="body-sm">
                  {module.duration}
                </span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-between">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  module.status === 'completed' 
                    ? 'status-success' 
                    : module.status === 'current'
                    ? 'badge-warning'
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
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Continue
                  </Link>
                )}
                {module.status === 'completed' && (
                  <Link
                    href={`/course/week/${module.week}`}
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    Review
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Course Progress */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="card-primary text-center">
            <h3 className="heading-md mb-4">Your Progress</h3>
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-purple-400">1</div>
                <div className="body-sm">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">1</div>
                <div className="body-sm">In Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-400">9</div>
                <div className="body-sm">Remaining</div>
              </div>
            </div>
            <div className="progress-bar mb-4">
              <div className="progress-fill" style={{ width: '18%' }}></div>
            </div>
            <p className="progress-text">18% Complete</p>
          </div>
        </div>
      </main>

      <BackgroundElements />
    </div>
  )
}