'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Header from '@/components/Layout/Header'
import BackgroundElements from '@/components/Layout/BackgroundElements'

interface ModuleContent {
  id: number
  title: string
  week: number
  type: 'physical' | 'online'
  sections: {
    anchoring: {
      title: string
      content: string
      media?: {
        type: 'video' | 'audio'
        url: string
        duration: string
      }
    }
    context: {
      title: string
      content: string
      readings?: Array<{
        title: string
        author: string
        url: string
        duration: string
      }>
    }
    mainExercise: {
      title: string
      content: string
      instructions: string[]
      materials: string[]
      timeRequired: string
    }
    senseMaking: {
      title: string
      content: string
      reflectionQuestions: string[]
    }
    takeAways: {
      title: string
      content: string
      downloadableResources: Array<{
        title: string
        type: string
        url: string
      }>
    }
  }
}

// Sample detailed content for Module 2 (Mind Wandering)
const moduleContent: ModuleContent = {
  id: 2,
  title: "Mind Wandering",
  week: 2,
  type: 'online',
  sections: {
    anchoring: {
      title: "Grounding in the Present",
      content: "Ground yourself in the present moment. Begin each session with conscious breathing and body awareness to create a stable foundation for the creative process.",
      media: {
        type: 'audio',
        url: '/audio/anchoring-meditation.mp3',
        duration: '8 minutes'
      },
      checklist: [
        'Find a natural setting (park, garden, beach, or even a tree-lined street)',
        'Set aside 20 uninterrupted minutes',
        'After reading the instructions and downloading the audio we recommend switching your phone to airplane mode',
        'Bring headphones',
        'Approach with curiosity, not expectations'
      ]
    },
    context: {
      title: "Context",
      duration: "10 min",
      content: `Explore the background and framework of the session. Understand the objectives, connect with previous lessons and set intentions for what you want to achieve.

## The Mind-Wandering Revolution

For too long, we've been told that wandering minds are unproductive minds. Our hustle culture demands constant focus, endless optimization, and perpetual "grinding." But here's what the science actually shows:

Mind-wandering isn't a bug—it's a feature. When your attention drifts, your brain doesn't shut down. Instead, it shifts into a different mode of operation that's essential for creative thinking.

## What Research Reveals

Psychologists now understand that boredom functions like hunger—it's your brain signaling that it needs deeper, more meaningful engagement. When we're constantly plugged in and task-focused, we starve this essential cognitive process.

During spontaneous mind-wandering, your brain activates what neuroscientists call the Default Mode Network (DMN)—a collection of brain regions that light up when you're not focused on specific tasks. This isn't downtime; it's when your brain:

• Processes complex, big-picture ideas
• Makes unexpected connections between seemingly unrelated concepts
• Integrates experiences into creative insights
• Generates novel solutions to persistent problems

A major study tracking over 1,300 participants found that people who frequently engage in spontaneous mind-wandering score significantly higher on creative thinking assessments.

## The Creative Breakthrough Pattern

Many of history's most innovative ideas emerged during moments of mental drift:

• Business innovations often strike during walks, showers, or commutes
• Artistic breakthroughs frequently come when creators step away from their work
• Scientific discoveries regularly happen during periods of "relaxed attention"

The pattern is clear: when we give our minds permission to wander, creativity follows.`
    },
    mainExercise: {
      title: "Guided Mind Wandering Journey",
      content: "In this exercise, you'll practice intentional mind wandering - a structured approach to letting your thoughts flow freely while maintaining gentle awareness.",
      audioGuide: {
        title: "Mind Wandering Audio Guide",
        url: "https://www.dropbox.com/scl/fi/4ne6puf9gr3gdqthvg7sy/mindwondering-online_compressed.mp3?rlkey=nn_",
        duration: "25 minutes"
      },
      instructions: [
        "Find a comfortable, quiet space where you won't be disturbed",
        "Set a timer for 20 minutes",
        "Begin with 3 minutes of focused breathing",
        "Allow your mind to wander freely for 15 minutes",
        "Gently notice where your thoughts go without judgment",
        "End with 2 minutes of reflection on your journey"
      ],
      materials: [
        "Timer or meditation app",
        "Notebook and pen",
        "Comfortable seating"
      ],
      timeRequired: "30 minutes"
    },
    senseMaking: {
      title: "Reflecting on Your Wandering",
      content: "Now that you've experienced intentional mind wandering, let's make sense of what happened. This reflection helps you understand your unique wandering patterns and how they might serve your creativity.",
      reflectionQuestions: [
        "Where did your mind tend to wander? Past, present, or future?",
        "What themes or topics kept recurring in your thoughts?",
        "Did you notice any creative insights or unexpected connections?",
        "How did it feel to let your mind wander without trying to control it?",
        "What surprised you about your wandering experience?"
      ]
    },
    takeAways: {
      title: "Integrating Mind Wandering",
      content: "Mind wandering is a skill that improves with practice. The key is finding the right balance between focused attention and open awareness in your daily creative practice.",
      downloadableResources: [
        {
          title: "Mind Wandering Practice Guide",
          type: "PDF",
          url: "/downloads/mind-wandering-guide.pdf"
        },
        {
    description: 'Ground yourself in the present moment. Begin each session with conscious breathing and body awareness to create a stable foundation for the creative process.',
          type: "PDF",
          url: "/downloads/journaling-template.pdf"
        },
        {
          title: "Daily Wandering Tracker",
          type: "PDF",
          url: "/downloads/wandering-tracker.pdf"
        }
      ]
    }
  }
}

export default function ModulePage() {
  const params = useParams()
  const [currentSection, setCurrentSection] = useState<string>('anchoring')
  const [completedSections, setCompletedSections] = useState<string[]>(['anchoring'])

  const sections = [
    { key: 'anchoring', title: 'Anchoring', icon: '⚓' },
    { key: 'context', title: 'Context', icon: '🌍' },
    { key: 'mainExercise', title: 'Main Exercise', icon: '🎯' },
    { key: 'senseMaking', title: 'Sense Making', icon: '🤔' },
    { key: 'takeAways', title: 'Take-Aways', icon: '💡' }
  ]

  const markSectionComplete = (sectionKey: string) => {
    if (!completedSections.includes(sectionKey)) {
      setCompletedSections([...completedSections, sectionKey])
    }
  }

  const getSectionStatus = (sectionKey: string) => {
    if (completedSections.includes(sectionKey)) return 'completed'
    if (sectionKey === currentSection) return 'current'
    return 'upcoming'
  }

  const renderSectionContent = () => {
    const section = moduleContent.sections[currentSection as keyof typeof moduleContent.sections]
    
    switch (currentSection) {
      case 'anchoring':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
            
            {/* Preparation Checklist */}
            {section.checklist && (
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <h4 className="font-semibold text-green-800">Your preparation checklist:</h4>
                </div>
                <ul className="space-y-3">
                  {section.checklist.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-green-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        )
      
      case 'context':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
            {section.readings && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Required Readings</h4>
                {section.readings.map((reading, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-blue-800">{reading.title}</h5>
                      <p className="text-sm text-blue-600">by {reading.author} • {reading.duration}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Read
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      
      case 'mainExercise':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
            
            {/* Audio Guide */}
            {section.audioGuide && (
              <div className="bg-indigo-50 rounded-xl p-6">
                <h4 className="font-semibold text-indigo-800 mb-3">🎧 Audio Guide</h4>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white">🎵</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-indigo-800">{section.audioGuide.title}</h5>
                      <p className="text-sm text-indigo-600">{section.audioGuide.duration}</p>
                    </div>
                  </div>
                  <a 
                    href={section.audioGuide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  >
                    🎧 Listen Now
                  </a>
                </div>
                <p className="text-sm text-indigo-700 mt-3">
                  💡 <strong>Tip:</strong> Listen to this guided audio while doing the mind wandering exercise for the best experience.
                </p>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-3">Instructions</h4>
                <ol className="space-y-2">
                  {section.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-green-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="font-semibold text-orange-800 mb-3">Materials Needed</h4>
                <ul className="space-y-2">
                  {section.materials.map((material, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      <span className="text-orange-700">{material}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-orange-200">
                  <p className="text-orange-800 font-medium">Time Required: {section.timeRequired}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => markSectionComplete('mainExercise')}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-200"
              >
                Mark Exercise Complete
              </button>
            </div>
          </div>
        )
      
      case 'senseMaking':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
            
            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold text-indigo-800 mb-4">Reflection Questions</h4>
              <div className="space-y-4">
                {section.reflectionQuestions.map((question, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <p className="font-medium text-indigo-800 mb-2">{question}</p>
                    <textarea 
                      className="w-full p-3 border border-indigo-200 rounded-lg resize-none"
                      rows={3}
                      placeholder="Write your reflection here..."
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200">
                  Save Reflections
                </button>
              </div>
            </div>
          </div>
        )
      
      case 'takeAways':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
            
            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-800 mb-4">Downloadable Resources</h4>
              <div className="grid gap-4">
                {section.downloadableResources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">📄</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-yellow-800">{resource.title}</h5>
                        <p className="text-sm text-yellow-600">{resource.type}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => markSectionComplete('takeAways')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Complete Module
              </button>
            </div>
          </div>
        )
      
      default:
        return <div>Section not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="badge-secondary">
              💻 Online Self-Study
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">Week {moduleContent.week}</span>
          </div>
          
          <h1 className="heading-xl mb-8">
            {moduleContent.title}
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-gray-300">Progress:</span>
            <span className="text-2xl font-bold text-purple-400">{completedSections.length}/5</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Section Navigation */}
          <div className="lg:col-span-1">
            <div className="card-primary sticky top-8">
              <h2 className="heading-sm text-white mb-6">Module Sections</h2>
              <div className="space-y-3">
                {sections.map((section) => {
                  const status = getSectionStatus(section.key)
                  return (
                    <button
                      key={section.key}
                      onClick={() => setCurrentSection(section.key)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                        status === 'completed' 
                          ? 'bg-green-900/30 border-green-500 text-green-300'
                          : status === 'current'
                          ? 'bg-slate-700 border-slate-600 text-white'
                          : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{section.icon}</span>
                        <div>
                          <h3 className="font-semibold text-sm text-white">{section.title}</h3>
                          <p className="text-xs opacity-75">
                            {status === 'completed' ? 'Completed' : 
                             status === 'current' ? 'Current' : 'Upcoming'}
                          </p>
                        </div>
                        {status === 'completed' && (
                          <span className="ml-auto text-green-600">✓</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="lg:col-span-3">
            <div className="card-secondary p-8">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">
                  {sections.find(s => s.key === currentSection)?.icon}
                </span>
                <h1 className="text-3xl font-bold text-gray-800">
                  {sections.find(s => s.key === currentSection)?.title}
                </h1>
              </div>

              {renderSectionContent()}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.key === currentSection)
                    if (currentIndex > 0) {
                      setCurrentSection(sections[currentIndex - 1].key)
                    }
                  }}
                  disabled={sections.findIndex(s => s.key === currentSection) === 0}
                  className="btn-secondary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                
                <button
                  onClick={() => {
                    markSectionComplete(currentSection)
                    const currentIndex = sections.findIndex(s => s.key === currentSection)
                    if (currentIndex < sections.length - 1) {
                      setCurrentSection(sections[currentIndex + 1].key)
                    }
                  }}
                  className="btn-primary btn-lg"
                >
                  {sections.findIndex(s => s.key === currentSection) === sections.length - 1 ? 'Complete Module' : 'Next →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackgroundElements />
    </div>
  )
}