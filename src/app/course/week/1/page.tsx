'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ReadingMaterial {
  id: number
  title: string
  author: string
  type: 'article' | 'pdf' | 'book-chapter'
  estimatedTime: string
  description: string
  url: string
  required: boolean
}

interface LearningActivity {
  id: number
  title: string
  type: 'exercise' | 'reflection' | 'creative'
  estimatedTime: string
  instructions: string[]
  materials: string[]
  downloadUrl?: string
}

interface DiscussionQuestion {
  id: number
  question: string
  type: 'discussion' | 'reflection'
  prompt: string
}

const readingMaterials: ReadingMaterial[] = [
  {
    id: 1,
    title: "The Curious Mind: A Foundation for Creative Thinking",
    author: "Dr. Sarah Chen",
    type: 'article',
    estimatedTime: "15 minutes",
    description: "Explore the neuroscience behind curiosity and its role in enhancing creative problem-solving abilities.",
    url: "/readings/curious-mind-foundation.pdf",
    required: true
  },
  {
    id: 2,
    title: "Connected Creativity: An Introduction to Holistic Design",
    author: "Prof. Michael Rodriguez",
    type: 'pdf',
    estimatedTime: "20 minutes", 
    description: "Understanding the interconnected nature of creativity, mindfulness, and design thinking in modern practice.",
    url: "/readings/connected-creativity-intro.pdf",
    required: true
  },
  {
    id: 3,
    title: "Curiosity as a Learning Catalyst",
    author: "Dr. Emma Thompson",
    type: 'book-chapter',
    estimatedTime: "12 minutes",
    description: "How curiosity drives deeper learning and retention in creative disciplines.",
    url: "/readings/curiosity-learning-catalyst.pdf",
    required: false
  }
]

const learningActivities: LearningActivity[] = [
  {
    id: 1,
    title: "Curiosity Mapping Exercise",
    type: 'creative',
    estimatedTime: "30 minutes",
    instructions: [
      "Create a visual map of your current curiosities and interests",
      "Use colors, symbols, and connections to show relationships",
      "Identify 3 areas where curiosity could enhance your creative work",
      "Reflect on patterns and themes that emerge",
      "Share your map with a peer for discussion"
    ],
    materials: [
      "Large sheet of paper (A3 or larger)",
      "Colored pens, markers, or pencils",
      "Sticky notes (optional)",
      "Timer"
    ],
    downloadUrl: "/worksheets/curiosity-mapping-template.pdf"
  },
  {
    id: 2,
    title: "Daily Curiosity Practice",
    type: 'exercise',
    estimatedTime: "10 minutes daily",
    instructions: [
      "Set aside 10 minutes each day for the next week",
      "Choose one ordinary object in your environment",
      "Spend 5 minutes observing it with fresh eyes",
      "Ask yourself 10 questions about this object",
      "Write down any insights or creative ideas that emerge",
      "Track your observations in the provided journal template"
    ],
    materials: [
      "Notebook or digital device",
      "Timer",
      "Various everyday objects"
    ],
    downloadUrl: "/worksheets/daily-curiosity-journal.pdf"
  },
  {
    id: 3,
    title: "Introduction Portfolio Piece",
    type: 'reflection',
    estimatedTime: "45 minutes",
    instructions: [
      "Create a personal introduction that showcases your creative identity",
      "Include your background, interests, and creative goals",
      "Incorporate visual elements that represent your personality",
      "Reflect on what you hope to gain from this course",
      "Prepare to share with the class in our next session"
    ],
    materials: [
      "Digital design software or physical materials",
      "Personal photos or artwork (optional)",
      "Reflection worksheet"
    ],
    downloadUrl: "/worksheets/introduction-portfolio-template.pdf"
  }
]

const discussionQuestions: DiscussionQuestion[] = [
  {
    id: 1,
    question: "How does curiosity manifest in your creative practice?",
    type: 'discussion',
    prompt: "Share a specific example of when curiosity led to an unexpected creative breakthrough or discovery in your work. What conditions or mindset allowed this to happen?"
  },
  {
    id: 2,
    question: "What barriers limit your curiosity?",
    type: 'reflection',
    prompt: "Reflect on the internal and external factors that sometimes prevent you from being curious. How might you address these barriers to cultivate a more curious mindset in your creative practice?"
  }
]

export default function Week1Page() {
  const [completedReadings, setCompletedReadings] = useState<number[]>([])
  const [completedActivities, setCompletedActivities] = useState<number[]>([])
  const [discussionResponses, setDiscussionResponses] = useState<{[key: number]: string}>({})

  const toggleReadingComplete = (id: number) => {
    setCompletedReadings(prev => 
      prev.includes(id) 
        ? prev.filter(readingId => readingId !== id)
        : [...prev, id]
    )
  }

  const toggleActivityComplete = (id: number) => {
    setCompletedActivities(prev => 
      prev.includes(id) 
        ? prev.filter(activityId => activityId !== id)
        : [...prev, activityId]
    )
  }

  const updateDiscussionResponse = (id: number, response: string) => {
    setDiscussionResponses(prev => ({
      ...prev,
      [id]: response
    }))
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📰'
      case 'pdf': return '📄'
      case 'book-chapter': return '📚'
      case 'exercise': return '🎯'
      case 'reflection': return '🤔'
      case 'creative': return '🎨'
      default: return '📋'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'pdf': return 'bg-red-100 text-red-800 border-red-200'
      case 'book-chapter': return 'bg-green-100 text-green-800 border-green-200'
      case 'exercise': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'reflection': return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      case 'creative': return 'bg-pink-100 text-pink-800 border-pink-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/course" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">←</span>
              </Link>
              <div className="flex items-center space-x-3">
                <h1 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Connected Creativity
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/course" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Modules
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
              🏫 Physical Session
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">2 hours</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
              Week 1: Introduction + Curiosity
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Welcome to Connected Creativity! This week we'll explore the foundations of creative thinking and develop curiosity as your compass for creative exploration.
          </p>

          {/* Learning Objectives */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-left">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">🎯 Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm mt-1">1</span>
                  <p className="text-gray-300">Understand the course structure, objectives, and holistic approach to creativity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm mt-1">2</span>
                  <p className="text-gray-300">Identify your personal creative strengths and areas for growth</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm mt-1">3</span>
                  <p className="text-gray-300">Practice curiosity-based exercises and develop a daily curiosity practice</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm mt-1">4</span>
                  <p className="text-gray-300">Build connections with peers and establish a supportive learning community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* A. Required Reading Materials */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-4xl">📚</span>
              <h2 className="text-3xl font-bold text-white">Required Reading Materials</h2>
            </div>
            
            <div className="grid gap-6">
              {readingMaterials.map((reading) => (
                <div
                  key={reading.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <span className="text-3xl">{getTypeIcon(reading.type)}</span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{reading.title}</h3>
                          {reading.required && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-medium">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 mb-2">by {reading.author}</p>
                        <p className="text-gray-300 mb-4">{reading.description}</p>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(reading.type)}`}>
                            {reading.type.replace('-', ' ').toUpperCase()}
                          </span>
                          <span className="text-gray-400 text-sm">📖 {reading.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleReadingComplete(reading.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          completedReadings.includes(reading.id)
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-400 hover:border-green-400'
                        }`}
                      >
                        {completedReadings.includes(reading.id) && '✓'}
                      </button>
                      <a
                        href={reading.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Read Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* B. Learning Activities */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-4xl">🎯</span>
              <h2 className="text-3xl font-bold text-white">Learning Activities</h2>
            </div>
            
            <div className="grid gap-8">
              {learningActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4 flex-1">
                      <span className="text-4xl">{getTypeIcon(activity.type)}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-2">{activity.title}</h3>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(activity.type)}`}>
                            {activity.type.toUpperCase()}
                          </span>
                          <span className="text-gray-400 text-sm">⏱️ {activity.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleActivityComplete(activity.id)}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        completedActivities.includes(activity.id)
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-400 hover:border-green-400'
                      }`}
                    >
                      {completedActivities.includes(activity.id) && '✓'}
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Instructions */}
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="font-semibold text-white mb-4 flex items-center">
                        <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm mr-3">📋</span>
                        Step-by-Step Instructions
                      </h4>
                      <ol className="space-y-3">
                        {activity.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-gray-300">{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Materials */}
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="font-semibold text-white mb-4 flex items-center">
                        <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm mr-3">🛠️</span>
                        Materials Needed
                      </h4>
                      <ul className="space-y-2">
                        {activity.materials.map((material, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                            <span className="text-gray-300">{material}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {activity.downloadUrl && (
                        <div className="mt-4 pt-4 border-t border-slate-600">
                          <a
                            href={activity.downloadUrl}
                            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            📄 Download Worksheet
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* C. Discussion & Reflection */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-4xl">💭</span>
              <h2 className="text-3xl font-bold text-white">Discussion & Reflection</h2>
            </div>
            
            <div className="space-y-8">
              {discussionQuestions.map((question) => (
                <div
                  key={question.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <span className="text-3xl">{question.type === 'discussion' ? '🗣️' : '🤔'}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-semibold text-white">{question.question}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          question.type === 'discussion' 
                            ? 'bg-blue-100 text-blue-800 border-blue-200' 
                            : 'bg-purple-100 text-purple-800 border-purple-200'
                        }`}>
                          {question.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-6">{question.prompt}</p>
                      
                      <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-400">
                          Your Response:
                        </label>
                        <textarea
                          value={discussionResponses[question.id] || ''}
                          onChange={(e) => updateDiscussionResponse(question.id, e.target.value)}
                          className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          rows={4}
                          placeholder={question.type === 'discussion' 
                            ? "Share your thoughts and experiences..." 
                            : "Reflect on your personal experience..."
                          }
                        />
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {discussionResponses[question.id]?.length || 0} characters
                          </span>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            {question.type === 'discussion' ? 'Share Response' : 'Save Reflection'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Personal Learning Goals */}
              <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <span className="text-3xl">🎯</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Personal Learning Goals</h3>
                    <p className="text-gray-300 mb-6">
                      Take a moment to reflect on what you hope to achieve in this course. What specific skills, insights, or creative breakthroughs are you seeking?
                    </p>
                    
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-400">
                        My learning goals for this course:
                      </label>
                      <textarea
                        className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={5}
                        placeholder="What do you hope to learn, discover, or develop through this course? Be specific about your creative aspirations..."
                      />
                      <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                        Save My Goals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Section */}
        <footer className="mt-20 max-w-6xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Next Steps */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mr-3">👉</span>
                  Next Steps
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <p className="text-gray-300 text-sm">Complete all reading materials before Week 2</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <p className="text-gray-300 text-sm">Start your daily curiosity practice</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <p className="text-gray-300 text-sm">Prepare your introduction portfolio piece</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/course/module/2"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Preview Week 2: Mind Wandering
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Assignment Reminders */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center text-white text-sm mr-3">📅</span>
                  Assignment Reminders
                </h3>
                <div className="space-y-3">
                  <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-3">
                    <p className="text-yellow-300 font-medium text-sm">Due: End of Week 1</p>
                    <p className="text-gray-300 text-sm">Complete curiosity mapping exercise</p>
                  </div>
                  <div className="bg-orange-900/30 border border-orange-700/50 rounded-lg p-3">
                    <p className="text-orange-300 font-medium text-sm">Ongoing</p>
                    <p className="text-gray-300 text-sm">Daily curiosity practice (7 days)</p>
                  </div>
                  <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-3">
                    <p className="text-purple-300 font-medium text-sm">Due: Before Week 3</p>
                    <p className="text-gray-300 text-sm">Introduction portfolio piece</p>
                  </div>
                </div>
              </div>

              {/* Support & Contact */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm mr-3">💬</span>
                  Support & Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Course Instructor:</p>
                    <p className="text-white font-medium">Dr. Sarah Chen</p>
                    <p className="text-gray-300 text-sm">s.chen@university.edu</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Teaching Assistant:</p>
                    <p className="text-white font-medium">Alex Rodriguez</p>
                    <p className="text-gray-300 text-sm">a.rodriguez@university.edu</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Office Hours:</p>
                    <p className="text-gray-300 text-sm">Tuesdays 2-4 PM</p>
                    <p className="text-gray-300 text-sm">Thursdays 10-12 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Your Progress</h4>
                <span className="text-gray-400 text-sm">
                  {completedReadings.length + completedActivities.length} / {readingMaterials.length + learningActivities.length} completed
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${((completedReadings.length + completedActivities.length) / (readingMaterials.length + learningActivities.length)) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </footer>
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