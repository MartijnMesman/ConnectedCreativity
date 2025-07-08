'use client'

import { useState } from 'react'
import Link from 'next/link'

interface SessionComponent {
  id: number
  title: string
  duration: string
  description: string
  completed: boolean
  content?: any
}

const sessionComponents: SessionComponent[] = [
  {
    id: 1,
    title: 'Anchoring',
    duration: '5 min',
    description: 'Ground yourself in the present moment. Begin each session with conscious breathing and body awareness to create a stable foundation for the creative process.',
    completed: false,
    content: {
      checklist: [
        'Find a natural setting (park, garden, beach, or even a tree-lined street)',
        'Set aside 20 uninterrupted minutes',
        'After reading the instructions and downloading the audio we recommend switching your phone to airplane mode',
        'Bring headphones',
        'Approach with curiosity, not expectations'
      ]
    }
  },
  {
    id: 2,
    title: 'Context',
    duration: '10 min',
    description: 'Explore the background and framework of the session. Understand the objectives, connect with previous lessons and set intentions for what you want to achieve.',
    completed: false,
    content: {
      title: 'The Mind-Wandering Revolution',
      text: 'For too long, we\'ve been told that wandering minds are unproductive minds. Our hustle culture demands constant focus, endless optimization, and perpetual "grinding." But here\'s the revolutionary truth: your wandering mind isn\'t broken—it\'s brilliant.'
    }
  }
]

export default function Week2Page() {
  const [components, setComponents] = useState(sessionComponents)

  const toggleComponentComplete = (id: number) => {
    setComponents(prev => 
      prev.map(comp => 
        comp.id === id ? { ...comp, completed: !comp.completed } : comp
      )
    )
  }

  const completedComponents = components.filter(c => c.completed).length

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/course" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">←</span>
              </Link>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-sm text-purple-400 font-medium">Week 2</span>
                  <span className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm font-medium">
                    📱 Online
                  </span>
                  <span className="text-slate-400 text-sm">1.5 hours</span>
                </div>
                <h1 className="text-3xl font-bold text-purple-400 mb-1">
                  Mind Wandering
                </h1>
                <p className="text-slate-300 text-sm">
                  Exploring the connection between mind wandering and creative expression through guided exercises
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Session Components */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Session Components</h2>
            <span className="text-slate-400 text-sm">{completedComponents} of {components.length} completed</span>
          </div>

          <div className="space-y-6">
            {components.map((component) => (
              <div
                key={component.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleComponentComplete(component.id)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-1 transition-all ${
                      component.completed
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'border-slate-500 hover:border-slate-400'
                    }`}
                  >
                    {component.completed && '✓'}
                  </button>

                  {/* Component Number */}
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">
                    {component.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{component.title}</h3>
                      <span className="text-purple-400 text-sm font-medium">{component.duration}</span>
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {component.description}
                    </p>

                    {/* Component-specific content */}
                    {component.id === 1 && component.content && (
                      <div className="mt-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <p className="text-sm font-medium text-green-400">Your preparation checklist:</p>
                        </div>
                        <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                          <ul className="space-y-2">
                            {component.content.checklist.map((item: string, index: number) => (
                              <li key={index} className="text-sm text-slate-300 flex items-start">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {component.id === 2 && component.content && (
                      <div className="mt-4">
                        <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                          <h4 className="text-lg font-semibold text-blue-400 mb-3">
                            {component.content.title}
                          </h4>
                          <p className="text-slate-300 leading-relaxed">
                            {component.content.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}