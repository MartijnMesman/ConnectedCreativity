'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MindWanderingEpisode {
  id: string
  date: string
  time: string
  duration: number
  intensity: number
  triggers: string[]
  description: string
  emotionalStateBefore: string
  emotionalStateAfter: string
  taskImpact: string
  actionTaken: string
}

interface SessionComponent {
  id: number
  title: string
  type: 'anchoring' | 'context' | 'main-exercise' | 'sense-making' | 'take-aways'
  duration: string
  description: string
  completed: boolean
  content?: any
}

const commonTriggers = [
  'Stress/Anxiety',
  'Boredom',
  'Fatigue',
  'Repetitive Task',
  'Noise/Distractions',
  'Emotional State',
  'Physical Discomfort',
  'Transition Between Tasks',
  'Waiting/Idle Time',
  'Creative Block'
]

const sessionComponents: SessionComponent[] = [
  {
    id: 1,
    title: 'Anchoring',
    type: 'anchoring',
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
    type: 'context',
    duration: '15 min',
    description: 'Understanding the science and purpose behind mind wandering in creative practice.',
    completed: false
  },
  {
    id: 3,
    title: 'Main Exercise',
    type: 'main-exercise',
    duration: '25 min',
    description: 'Guided mind wandering practice with audio support and structured reflection.',
    completed: false
  },
  {
    id: 4,
    title: 'Sense Making',
    type: 'sense-making',
    duration: '10 min',
    description: 'Reflect on your wandering experience and identify patterns and insights.',
    completed: false
  },
  {
    id: 5,
    title: 'Take-Aways',
    type: 'take-aways',
    duration: '5 min',
    description: 'Integrate learnings and plan your ongoing mind wandering practice.',
    completed: false
  }
]

export default function Week2Page() {
  const [episodes, setEpisodes] = useState<MindWanderingEpisode[]>([])
  const [currentEpisode, setCurrentEpisode] = useState<Partial<MindWanderingEpisode>>({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    triggers: [],
    intensity: 5,
    duration: 0
  })
  const [components, setComponents] = useState(sessionComponents)
  const [reflectionAnswers, setReflectionAnswers] = useState({
    whatBroughtBack: '',
    patternsNoticed: '',
    strategiesWorked: '',
    goalsNextWeek: ''
  })

  const addEpisode = () => {
    if (currentEpisode.description && currentEpisode.triggers && currentEpisode.triggers.length > 0) {
      const newEpisode: MindWanderingEpisode = {
        id: Date.now().toString(),
        date: currentEpisode.date || '',
        time: currentEpisode.time || '',
        duration: currentEpisode.duration || 0,
        intensity: currentEpisode.intensity || 5,
        triggers: currentEpisode.triggers || [],
        description: currentEpisode.description || '',
        emotionalStateBefore: currentEpisode.emotionalStateBefore || '',
        emotionalStateAfter: currentEpisode.emotionalStateAfter || '',
        taskImpact: currentEpisode.taskImpact || '',
        actionTaken: currentEpisode.actionTaken || ''
      }
      
      setEpisodes([...episodes, newEpisode])
      setCurrentEpisode({
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().slice(0, 5),
        triggers: [],
        intensity: 5,
        duration: 0
      })
    }
  }

  const toggleTrigger = (trigger: string) => {
    const currentTriggers = currentEpisode.triggers || []
    if (currentTriggers.includes(trigger)) {
      setCurrentEpisode({
        ...currentEpisode,
        triggers: currentTriggers.filter(t => t !== trigger)
      })
    } else {
      setCurrentEpisode({
        ...currentEpisode,
        triggers: [...currentTriggers, trigger]
      })
    }
  }

  const toggleComponentComplete = (id: number) => {
    setComponents(prev => 
      prev.map(comp => 
        comp.id === id ? { ...comp, completed: !comp.completed } : comp
      )
    )
  }

  const getComponentIcon = (type: string) => {
    switch (type) {
      case 'anchoring': return '⚓'
      case 'context': return '🌍'
      case 'main-exercise': return '🎯'
      case 'sense-making': return '🤔'
      case 'take-aways': return '💡'
      default: return '📋'
    }
  }

  const completedComponents = components.filter(c => c.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/course" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">←</span>
              </Link>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-600 border border-blue-500/30 rounded-full text-sm font-medium">
                    💻 Online
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">1.5 hours</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mind Wandering
                </h1>
                <p className="text-sm text-gray-600">Exploring the connection between mind wandering and creative expression through guided exercises</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Session Components</p>
              <p className="text-lg font-bold text-blue-600">{completedComponents} of {components.length} completed</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Mind Wandering Tracker - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Daily Episode Tracker */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">🧠</span>
                <h2 className="text-2xl font-bold text-gray-800">Mind Wandering Tracker</h2>
              </div>

              {/* New Episode Form */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Record New Episode</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={currentEpisode.date}
                      onChange={(e) => setCurrentEpisode({...currentEpisode, date: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      value={currentEpisode.time}
                      onChange={(e) => setCurrentEpisode({...currentEpisode, time: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                    <input
                      type="number"
                      min="0"
                      max="120"
                      value={currentEpisode.duration}
                      onChange={(e) => setCurrentEpisode({...currentEpisode, duration: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Intensity (1-10)</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={currentEpisode.intensity}
                        onChange={(e) => setCurrentEpisode({...currentEpisode, intensity: parseInt(e.target.value)})}
                        className="flex-1"
                      />
                      <span className="w-8 text-center font-bold text-blue-600">{currentEpisode.intensity}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Common Triggers</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {commonTriggers.map((trigger) => (
                      <button
                        key={trigger}
                        onClick={() => toggleTrigger(trigger)}
                        className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                          currentEpisode.triggers?.includes(trigger)
                            ? 'bg-blue-100 border-blue-300 text-blue-800'
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {trigger}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Episode Description</label>
                  <textarea
                    value={currentEpisode.description}
                    onChange={(e) => setCurrentEpisode({...currentEpisode, description: e.target.value})}
                    placeholder="Describe what happened during this mind wandering episode..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emotional State Before</label>
                    <input
                      type="text"
                      value={currentEpisode.emotionalStateBefore}
                      onChange={(e) => setCurrentEpisode({...currentEpisode, emotionalStateBefore: e.target.value})}
                      placeholder="e.g., anxious, bored, excited"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emotional State After</label>
                    <input
                      type="text"
                      value={currentEpisode.emotionalStateAfter}
                      onChange={(e) => setCurrentEpisode({...currentEpisode, emotionalStateAfter: e.target.value})}
                      placeholder="e.g., calm, inspired, confused"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Impact on Task/Activity</label>
                    <input
                      type="text"
                      value={currentEpisode.taskImpact}
                      onChange={(e) => setCurrentEpisode({...currentEpisode, taskImpact: e.target.value})}
                      placeholder="How did it affect your work?"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Action Taken to Refocus</label>
                    <input
                      type="text"
                      value={currentEpisode.actionTaken}
                      onChange={(e) => setCurrentEpisode({...currentEpisode, actionTaken: e.target.value})}
                      placeholder="What helped you return to focus?"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  onClick={addEpisode}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  📝 Record Episode
                </button>
              </div>

              {/* Episodes List */}
              {episodes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Episodes ({episodes.length})</h3>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {episodes.map((episode) => (
                      <div key={episode.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-600">{episode.date}</span>
                            <span className="text-sm text-gray-500">{episode.time}</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              {episode.duration}min
                            </span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                              Intensity: {episode.intensity}/10
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{episode.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {episode.triggers.map((trigger, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {trigger}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Before:</span> {episode.emotionalStateBefore}
                          </div>
                          <div>
                            <span className="font-medium">After:</span> {episode.emotionalStateAfter}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Weekly Reflection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">🤔</span>
                <h2 className="text-2xl font-bold text-gray-800">Weekly Reflection</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What brought you back to focus?</label>
                  <textarea
                    value={reflectionAnswers.whatBroughtBack}
                    onChange={(e) => setReflectionAnswers({...reflectionAnswers, whatBroughtBack: e.target.value})}
                    placeholder="Describe the techniques or circumstances that helped you refocus..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patterns noticed this week?</label>
                  <textarea
                    value={reflectionAnswers.patternsNoticed}
                    onChange={(e) => setReflectionAnswers({...reflectionAnswers, patternsNoticed: e.target.value})}
                    placeholder="What patterns do you notice in your mind wandering episodes?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Strategies that worked best?</label>
                  <textarea
                    value={reflectionAnswers.strategiesWorked}
                    onChange={(e) => setReflectionAnswers({...reflectionAnswers, strategiesWorked: e.target.value})}
                    placeholder="Which approaches were most effective for managing mind wandering?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Goals for next week?</label>
                  <textarea
                    value={reflectionAnswers.goalsNextWeek}
                    onChange={(e) => setReflectionAnswers({...reflectionAnswers, goalsNextWeek: e.target.value})}
                    placeholder="What would you like to focus on or improve next week?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>

                <button className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                  💾 Save Reflection
                </button>
              </div>
            </div>
          </div>

          {/* Session Components Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Session Components</h2>
              <div className="space-y-3">
                {components.map((component) => (
                  <div
                    key={component.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      component.completed
                        ? 'bg-green-50 border-green-300 text-green-800'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center text-sm ${
                          component.completed 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : component.id === 1
                            ? 'border-white text-white'
                            : 'border-gray-400'
                        }`}>
                          {component.completed ? '✓' : component.id}
                        </div>
                        <div>
                          <h3 className={`font-semibold text-base ${
                            component.id === 1 ? 'text-white' : ''
                          }`}>{component.title}</h3>
                        </div>
                      </div>
                      <span className={`text-sm font-medium ${
                        component.id === 1 ? 'text-white' : 'text-gray-600'
                      }`}>
                        {component.duration}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed mb-3 ${
                      component.id === 1 ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {component.description}
                    </p>
                    
                    {/* Special content for Anchoring component */}
                    {component.id === 1 && component.content && (
                      <div className="mt-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <p className="text-sm font-medium text-white">Your preparation checklist:</p>
                        </div>
                        <ul className="space-y-2 ml-6">
                          {component.content.checklist.map((item: string, index: number) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">{completedComponents}/{components.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(completedComponents / components.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">This Week</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{episodes.length}</div>
                    <div className="text-xs text-gray-600">Episodes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {episodes.reduce((sum, ep) => sum + ep.duration, 0)}
                    </div>
                    <div className="text-xs text-gray-600">Total Minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}