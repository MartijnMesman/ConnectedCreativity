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
    description: "Welcome to Connected Creativity! Explore the foundations of creative thinking and discover your natural curiosity.",
    duration: "3 hours",
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
    description: "Discover the power of letting your mind wander and how it contributes to creative breakthroughs.",
    duration: "2-3 hours",
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
    description: "Explore how creativity emerges through collaboration and learn techniques for creative teamwork.",
    duration: "3 hours",
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
    description: "Develop your intuitive abilities and learn to trust your creative instincts.",
    duration: "2-3 hours",
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
    description: "Build creative resilience and learn to navigate challenges in your creative journey.",
    duration: "3 hours",
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
    description: "Recognize and work with your inner critic to unlock your creative potential.",
    duration: "2-3 hours",
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
    description: "Explore the intersection of creativity and entrepreneurship.",
    duration: "2-3 hours",
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
    description: "Develop the courage to share your creative work and take creative risks.",
    duration: "3 hours",
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
    description: "Explore how technology can enhance and support your creative practice.",
    duration: "2-3 hours",
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
    description: "Learn to access and maintain states of creative flow.",
    duration: "2-3 hours",
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
    description: "Synthesize your learning and create a personal creative vision for the future.",
    duration: "3 hours",
    learningOutcomes: [
      "Reflect on your creative journey",
      "Articulate your personal creative vision",
      "Plan next steps in your creative development"
    ]
  }
]

export default function CoursePage() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(modules[1]) // Default to current module

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅'
      case 'current':
        return '🔄'
      case 'locked':
        return '🔒'
      default:
        return '⭕'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-300 text-green-800'
      case 'current':
        return 'bg-blue-100 border-blue-300 text-blue-800'
      case 'locked':
        return 'bg-gray-100 border-gray-300 text-gray-600'
      default:
        return 'bg-gray-100 border-gray-300 text-gray-600'
    }
  }

  const getTypeIcon = (type: string) => {
    return type === 'physical' ? '🏫' : '💻'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Course Modules</h1>
                <p className="text-sm text-purple-600">11-Week Journey</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-purple-600">Home</Link>
              <Link href="/course" className="text-purple-600 hover:text-purple-800 font-medium">Course</Link>
              <Link href="/progress" className="text-gray-600 hover:text-purple-600">Progress</Link>
              <Link href="/resources" className="text-gray-600 hover:text-purple-600">Resources</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Module List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Course Timeline</h2>
              <div className="space-y-3">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    onClick={() => setSelectedModule(module)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedModule?.id === module.id
                        ? 'border-purple-400 bg-purple-50'
                        : getStatusColor(module.status)
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getStatusIcon(module.status)}</span>
                        <span className="text-lg">{getTypeIcon(module.type)}</span>
                      </div>
                      <span className="text-xs font-medium bg-white px-2 py-1 rounded-full">
                        Week {module.week}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{module.title}</h3>
                    <p className="text-xs opacity-75 capitalize">{module.type} Session</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Module Details */}
          <div className="lg:col-span-2">
            {selectedModule ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getStatusIcon(selectedModule.status)}</span>
                    <span className="text-2xl">{getTypeIcon(selectedModule.type)}</span>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800">{selectedModule.title}</h1>
                      <p className="text-purple-600 font-medium">Week {selectedModule.week} • {selectedModule.type === 'physical' ? 'In-Person' : 'Online Self-Study'}</p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedModule.status)}`}>
                    {selectedModule.status === 'completed' ? 'Completed' : 
                     selectedModule.status === 'current' ? 'Current' : 'Locked'}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{selectedModule.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Duration</h3>
                    <p className="text-gray-600">{selectedModule.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Learning Outcomes</h3>
                    <ul className="space-y-2">
                      {selectedModule.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {selectedModule.status === 'current' && (
                    <Link
                      href={`/course/module/${selectedModule.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Start Module
                    </Link>
                  )}
                  {selectedModule.status === 'completed' && (
                    <Link
                      href={`/course/module/${selectedModule.id}`}
                      className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-200"
                    >
                      Review Module
                    </Link>
                  )}
                  {selectedModule.status === 'locked' && (
                    <button
                      disabled
                      className="px-6 py-3 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
                    >
                      Module Locked
                    </button>
                  )}
                  <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold border-2 border-purple-200 hover:border-purple-400 transition-all duration-200">
                    Download Resources
                  </button>
                </div>

                {/* Module Structure Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Module Structure</h3>
                  <p className="text-purple-700 mb-4">Each session follows our proven 5-component structure:</p>
                  <div className="grid grid-cols-5 gap-4 text-center">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl mb-2">⚓</div>
                      <div className="text-xs font-medium text-purple-800">Anchoring</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl mb-2">🌍</div>
                      <div className="text-xs font-medium text-purple-800">Context</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="text-xs font-medium text-purple-800">Main Exercise</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl mb-2">🤔</div>
                      <div className="text-xs font-medium text-purple-800">Sense Making</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl mb-2">💡</div>
                      <div className="text-xs font-medium text-purple-800">Take-Aways</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">📚</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Select a Module</h2>
                <p className="text-gray-600">Choose a module from the timeline to view its details and content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}