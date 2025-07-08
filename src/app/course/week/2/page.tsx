'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface SessionComponent {
  id: number
  title: string
  duration: string
  description: string
  completed: boolean
  content?: any
  exercises?: any[]
  assessment?: any
}

interface UserProgress {
  completedComponents: number[]
  currentComponent: number
  timeSpent: number
  lastAccessed: Date
  exerciseResponses: { [key: string]: any }
  assessmentScores: { [key: string]: number }
}

const sessionComponents: SessionComponent[] = [
  {
    id: 1,
    title: 'Anchoring',
    duration: '5 min',
    description: 'Ground yourself in the present moment. Begin each session with conscious breathing and body awareness to create a stable foundation for the creative process.',
    completed: false,
    content: {
      introduction: 'Before we explore the fascinating world of mind wandering, we must first establish a solid foundation in the present moment. This practice of "anchoring" creates the stability needed for productive creative exploration.',
      keyPoints: [
        'Present-moment awareness enhances creative receptivity',
        'Grounding techniques reduce mental noise and distractions',
        'Conscious breathing activates the parasympathetic nervous system',
        'Body awareness creates a stable platform for mental exploration',
        'Intentional preparation maximizes learning outcomes'
      ],
      checklist: [
        'Find a natural setting (park, garden, beach, or even a tree-lined street)',
        'Set aside 20 uninterrupted minutes',
        'After reading the instructions and downloading the audio we recommend switching your phone to airplane mode',
        'Bring headphones',
        'Approach with curiosity, not expectations'
      ],
      audioGuide: {
        title: 'Anchoring Meditation',
        duration: '8 minutes',
        description: 'A guided meditation to establish present-moment awareness and prepare for mind wandering exploration.'
      }
    },
    exercises: [
      {
        id: 'anchoring-practice',
        title: 'Present Moment Anchoring',
        type: 'guided-practice',
        instructions: [
          'Sit comfortably with your feet flat on the ground',
          'Close your eyes and take three deep breaths',
          'Notice the sensation of your body in contact with the chair',
          'Feel your feet connected to the earth',
          'Observe your breath without changing it',
          'When thoughts arise, gently return attention to your breath'
        ],
        duration: '5 minutes',
        reflection: 'How did it feel to anchor yourself in the present moment? What did you notice about your mind\'s tendency to wander?'
      }
    ]
  },
  {
    id: 2,
    title: 'Context',
    duration: '10 min',
    description: 'Explore the background and framework of the session. Understand the objectives, connect with previous lessons and set intentions for what you want to achieve.',
    completed: false,
    content: {
      title: 'The Mind-Wandering Revolution',
      introduction: 'For too long, we\'ve been told that wandering minds are unproductive minds. Our hustle culture demands constant focus, endless optimization, and perpetual "grinding." But here\'s the revolutionary truth: your wandering mind isn\'t broken—it\'s brilliant.',
      keyPoints: [
        'Mind wandering occupies 30-50% of our waking thoughts',
        'Default Mode Network activation enhances creativity',
        'Unfocused attention allows for novel connections',
        'Strategic mind wandering improves problem-solving',
        'Cultural bias against daydreaming limits creative potential'
      ],
      researchFindings: [
        {
          study: 'Harvard University (2010)',
          finding: 'Mind wandering is associated with increased activity in brain regions linked to creativity and insight.',
          implication: 'Allowing the mind to wander can lead to breakthrough moments and innovative solutions.'
        },
        {
          study: 'University of California, Santa Barbara (2012)',
          finding: 'Engaging in simple tasks that allow mind wandering improved performance on creative problem-solving tests by 41%.',
          implication: 'Strategic breaks and unfocused time enhance creative output.'
        }
      ],
      practicalApplications: [
        'Use walking meetings for creative discussions',
        'Schedule "thinking time" without specific agendas',
        'Practice mindful daydreaming during routine tasks',
        'Create environments that support mental wandering',
        'Balance focused work with unfocused exploration'
      ]
    }
  },
  {
    id: 3,
    title: 'Main Exercise',
    duration: '25 min',
    description: 'Engage in guided mind wandering practice with structured observation and reflection to develop your creative awareness.',
    completed: false,
    content: {
      title: 'Guided Mind Wandering Journey',
      introduction: 'This exercise will guide you through intentional mind wandering while maintaining gentle awareness of the process.',
      phases: [
        {
          name: 'Preparation',
          duration: '3 minutes',
          instructions: 'Settle into your chosen environment and establish present-moment awareness through breathing.'
        },
        {
          name: 'Guided Wandering',
          duration: '15 minutes',
          instructions: 'Allow your mind to explore freely while maintaining gentle observation of where it travels.'
        },
        {
          name: 'Integration',
          duration: '7 minutes',
          instructions: 'Reflect on your journey and capture insights, patterns, or creative connections that emerged.'
        }
      ]
    },
    exercises: [
      {
        id: 'mind-wandering-journey',
        title: 'Guided Mind Wandering Practice',
        type: 'experiential',
        audioGuide: {
          title: 'Mind Wandering Audio Guide',
          url: 'https://www.dropbox.com/scl/fi/4ne6puf9gr3gdqthvg7sy/mindwondering-online_compressed.mp3?rlkey=nn_',
          duration: '25 minutes'
        },
        reflectionPrompts: [
          'Where did your mind tend to travel? (past, present, future)',
          'What themes or topics kept recurring?',
          'Did you notice any creative insights or unexpected connections?',
          'How did it feel to observe your wandering mind without judgment?',
          'What patterns in your thinking did you discover?'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Sense Making',
    duration: '10 min',
    description: 'Reflect on your mind wandering experience and identify patterns, insights, and creative connections that emerged.',
    completed: false,
    content: {
      title: 'Understanding Your Wandering Patterns',
      introduction: 'Now that you\'ve experienced intentional mind wandering, let\'s make sense of what happened and extract valuable insights.',
      reflectionFramework: [
        'Content Analysis: What topics did your mind explore?',
        'Temporal Patterns: Did you focus on past, present, or future?',
        'Emotional Landscape: What feelings accompanied your wandering?',
        'Creative Connections: What unexpected links did you discover?',
        'Personal Insights: What did you learn about your thinking patterns?'
      ]
    },
    exercises: [
      {
        id: 'pattern-analysis',
        title: 'Mind Wandering Pattern Analysis',
        type: 'reflection',
        questions: [
          {
            id: 'content-themes',
            question: 'What were the main themes or topics your mind explored?',
            type: 'textarea',
            placeholder: 'Describe the content and themes that emerged during your mind wandering session...'
          },
          {
            id: 'temporal-focus',
            question: 'Did your mind focus more on past experiences, present awareness, or future possibilities?',
            type: 'radio',
            options: ['Primarily past', 'Primarily present', 'Primarily future', 'Balanced across all three']
          },
          {
            id: 'creative-insights',
            question: 'What creative insights, connections, or "aha moments" did you experience?',
            type: 'textarea',
            placeholder: 'Describe any creative insights or unexpected connections...'
          },
          {
            id: 'emotional-quality',
            question: 'How would you describe the emotional quality of your wandering experience?',
            type: 'checkbox',
            options: ['Peaceful', 'Anxious', 'Curious', 'Excited', 'Restless', 'Joyful', 'Contemplative', 'Other']
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Take-Aways',
    duration: '5 min',
    description: 'Integrate your learning and create a personal practice plan for incorporating mind wandering into your creative routine.',
    completed: false,
    content: {
      title: 'Integrating Mind Wandering into Daily Practice',
      keyTakeaways: [
        'Mind wandering is a valuable cognitive process, not a distraction',
        'Strategic unfocused time enhances creative problem-solving',
        'Awareness of wandering patterns provides insights into thinking habits',
        'Balance between focused attention and open awareness optimizes creativity',
        'Regular practice develops the skill of productive mind wandering'
      ],
      practiceRecommendations: [
        'Schedule 10-15 minutes of intentional mind wandering daily',
        'Use routine activities (walking, showering) as wandering opportunities',
        'Keep a wandering journal to track insights and patterns',
        'Create environments that support mental exploration',
        'Practice the balance between observation and participation'
      ],
      nextSteps: [
        'Continue daily anchoring practice',
        'Experiment with different wandering environments',
        'Notice how mind wandering affects your creative work',
        'Prepare for Week 3: Collaborative Creativity'
      ]
    },
    assessment: {
      title: 'Week 2 Knowledge Check',
      questions: [
        {
          id: 'q1',
          question: 'What percentage of our waking thoughts involve mind wandering?',
          type: 'multiple-choice',
          options: ['10-20%', '30-50%', '60-70%', '80-90%'],
          correct: 1,
          explanation: 'Research shows that mind wandering occupies 30-50% of our waking thoughts, making it a significant part of human cognition.'
        },
        {
          id: 'q2',
          question: 'Which brain network is primarily active during mind wandering?',
          type: 'multiple-choice',
          options: ['Executive Control Network', 'Default Mode Network', 'Salience Network', 'Attention Network'],
          correct: 1,
          explanation: 'The Default Mode Network (DMN) is most active during mind wandering and is associated with creativity and self-referential thinking.'
        },
        {
          id: 'q3',
          question: 'True or False: Mind wandering always decreases productivity and should be avoided.',
          type: 'true-false',
          correct: false,
          explanation: 'False. Strategic mind wandering can enhance creativity, problem-solving, and insight generation when used appropriately.'
        }
      ]
    }
  }
]

export default function Week2Page() {
  const [components, setComponents] = useState(sessionComponents)
  const [currentComponent, setCurrentComponent] = useState(1)
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedComponents: [],
    currentComponent: 1,
    timeSpent: 0,
    lastAccessed: new Date(),
    exerciseResponses: {},
    assessmentScores: {}
  })
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false)
  const [fontSize, setFontSize] = useState('base')
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Load saved progress on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('week2-progress')
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress)
      setUserProgress({
        ...parsed,
        lastAccessed: new Date(parsed.lastAccessed)
      })
    }
  }, [])

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem('week2-progress', JSON.stringify(userProgress))
  }, [userProgress])

  // Track time spent
  useEffect(() => {
    const interval = setInterval(() => {
      setUserProgress(prev => ({
        ...prev,
        timeSpent: prev.timeSpent + 1
      }))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const toggleComponentComplete = (id: number) => {
    setComponents(prev => 
      prev.map(comp => 
        comp.id === id ? { ...comp, completed: !comp.completed } : comp
      )
    )
    
    setUserProgress(prev => ({
      ...prev,
      completedComponents: prev.completedComponents.includes(id)
        ? prev.completedComponents.filter(cId => cId !== id)
        : [...prev.completedComponents, id],
      lastAccessed: new Date()
    }))
  }

  const saveExerciseResponse = (exerciseId: string, response: any) => {
    setUserProgress(prev => ({
      ...prev,
      exerciseResponses: {
        ...prev.exerciseResponses,
        [exerciseId]: response
      },
      lastAccessed: new Date()
    }))
  }

  const completedComponents = components.filter(c => c.completed).length
  const progressPercentage = (completedComponents / components.length) * 100

  const fontSizeClasses = {
    small: 'text-sm',
    base: 'text-base',
    large: 'text-lg',
    xl: 'text-xl'
  }

  const containerClasses = `min-h-screen transition-all duration-300 ${
    highContrast 
      ? 'bg-black text-white' 
      : 'bg-slate-900 text-white'
  } ${fontSizeClasses[fontSize as keyof typeof fontSizeClasses]} ${
    reducedMotion ? 'motion-reduce' : ''
  }`

  return (
    <div className={containerClasses}>
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility Menu */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Accessibility options"
          aria-expanded={showAccessibilityMenu}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {showAccessibilityMenu && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-white text-gray-900 rounded-lg shadow-xl border p-4 space-y-4">
            <h3 className="font-semibold text-lg">Accessibility Options</h3>
            
            <div>
              <label className="block text-sm font-medium mb-2">Font Size</label>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="small">Small</option>
                <option value="base">Normal</option>
                <option value="large">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">High Contrast</label>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  highContrast ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-pressed={highContrast}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  highContrast ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Reduce Motion</label>
              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-pressed={reducedMotion}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Header */}
      <header className="border-b border-slate-700" role="banner">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/course" 
                className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Back to course overview"
              >
                <span className="text-white font-bold text-lg" aria-hidden="true">←</span>
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
            
            {/* Progress indicator */}
            <div className="text-right">
              <div className="text-sm text-slate-400 mb-1">Progress</div>
              <div className="text-2xl font-bold text-purple-400">{Math.round(progressPercentage)}%</div>
              <div className="w-24 h-2 bg-slate-700 rounded-full mt-1">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                  role="progressbar"
                  aria-valuenow={progressPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Course progress: ${Math.round(progressPercentage)}% complete`}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="container mx-auto px-6 py-8" role="main">
        {/* Session Components */}
        <section aria-labelledby="session-components-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 id="session-components-heading" className="text-2xl font-bold text-white">
              Session Components
            </h2>
            <span className="text-slate-400 text-sm" aria-live="polite">
              {completedComponents} of {components.length} completed
            </span>
          </div>

          <div className="space-y-6">
            {components.map((component) => (
              <article
                key={component.id}
                className={`bg-slate-800 border rounded-lg p-6 transition-all duration-300 ${
                  highContrast ? 'border-white' : 'border-slate-700'
                } ${component.completed ? 'ring-2 ring-green-500' : ''}`}
                aria-labelledby={`component-${component.id}-title`}
              >
                <div className="flex items-start space-x-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleComponentComplete(component.id)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-1 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      component.completed
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'border-slate-500 hover:border-slate-400'
                    }`}
                    aria-pressed={component.completed}
                    aria-label={`Mark ${component.title} as ${component.completed ? 'incomplete' : 'complete'}`}
                  >
                    {component.completed && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Component Number */}
                  <div 
                    className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5"
                    aria-hidden="true"
                  >
                    {component.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 id={`component-${component.id}-title`} className="text-xl font-bold text-white">
                        {component.title}
                      </h3>
                      <span className="text-purple-400 text-sm font-medium" aria-label={`Duration: ${component.duration}`}>
                        {component.duration}
                      </span>
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {component.description}
                    </p>

                    {/* Component-specific content */}
                    {component.content && (
                      <div className="mt-4 space-y-4">
                        {/* Anchoring Component */}
                        {component.id === 1 && (
                          <>
                            <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                                Key Concepts
                              </h4>
                              <ul className="space-y-2">
                                {component.content.keyPoints.map((point: string, index: number) => (
                                  <li key={index} className="text-slate-300 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center" aria-hidden="true">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                                <h4 className="text-sm font-medium text-green-400">Your preparation checklist:</h4>
                              </div>
                              <ul className="space-y-2" role="checklist">
                                {component.content.checklist.map((item: string, index: number) => (
                                  <li key={index} className="text-sm text-slate-300 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {component.content.audioGuide && (
                              <div className="bg-indigo-900/50 border border-indigo-700 rounded-lg p-4">
                                <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                                  🎧 {component.content.audioGuide.title}
                                </h4>
                                <p className="text-indigo-200 text-sm mb-3">
                                  {component.content.audioGuide.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <span className="text-indigo-300 text-sm">
                                    Duration: {component.content.audioGuide.duration}
                                  </span>
                                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    Play Audio
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {/* Context Component */}
                        {component.id === 2 && (
                          <>
                            <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                                {component.content.title}
                              </h4>
                              <p className="text-slate-300 leading-relaxed mb-4">
                                {component.content.introduction}
                              </p>
                              
                              <h5 className="text-md font-semibold text-blue-300 mb-2">Key Research Insights:</h5>
                              <ul className="space-y-2 mb-4">
                                {component.content.keyPoints.map((point: string, index: number) => (
                                  <li key={index} className="text-slate-300 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    {point}
                                  </li>
                                ))}
                              </ul>

                              {component.content.researchFindings && (
                                <>
                                  <h5 className="text-md font-semibold text-green-300 mb-2">Supporting Research:</h5>
                                  <div className="space-y-3">
                                    {component.content.researchFindings.map((research: any, index: number) => (
                                      <div key={index} className="bg-slate-600 rounded-lg p-3">
                                        <h6 className="font-semibold text-green-400 text-sm">{research.study}</h6>
                                        <p className="text-slate-300 text-sm mt-1">{research.finding}</p>
                                        <p className="text-slate-400 text-xs mt-2 italic">{research.implication}</p>
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </>
                        )}

                        {/* Main Exercise Component */}
                        {component.id === 3 && component.exercises && (
                          <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">
                              {component.content.title}
                            </h4>
                            <p className="text-slate-300 mb-4">{component.content.introduction}</p>
                            
                            {component.content.phases && (
                              <div className="space-y-3 mb-4">
                                <h5 className="font-semibold text-blue-300">Exercise Phases:</h5>
                                {component.content.phases.map((phase: any, index: number) => (
                                  <div key={index} className="bg-slate-600 rounded-lg p-3">
                                    <div className="flex justify-between items-center mb-2">
                                      <h6 className="font-semibold text-white">{phase.name}</h6>
                                      <span className="text-purple-400 text-sm">{phase.duration}</span>
                                    </div>
                                    <p className="text-slate-300 text-sm">{phase.instructions}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {component.exercises[0].audioGuide && (
                              <div className="bg-indigo-900/50 border border-indigo-700 rounded-lg p-4">
                                <h5 className="text-lg font-semibold text-indigo-300 mb-2">
                                  🎧 {component.exercises[0].audioGuide.title}
                                </h5>
                                <div className="flex items-center justify-between">
                                  <span className="text-indigo-300 text-sm">
                                    Duration: {component.exercises[0].audioGuide.duration}
                                  </span>
                                  <a 
                                    href={component.exercises[0].audioGuide.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  >
                                    🎧 Listen Now
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Sense Making Component */}
                        {component.id === 4 && component.exercises && (
                          <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">
                              {component.content.title}
                            </h4>
                            <p className="text-slate-300 mb-4">{component.content.introduction}</p>
                            
                            <div className="space-y-4">
                              {component.exercises[0].questions.map((question: any, index: number) => (
                                <div key={question.id} className="bg-slate-600 rounded-lg p-4">
                                  <label className="block text-white font-medium mb-2">
                                    {question.question}
                                  </label>
                                  
                                  {question.type === 'textarea' && (
                                    <textarea
                                      className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      rows={4}
                                      placeholder={question.placeholder}
                                      onChange={(e) => saveExerciseResponse(question.id, e.target.value)}
                                      value={userProgress.exerciseResponses[question.id] || ''}
                                    />
                                  )}
                                  
                                  {question.type === 'radio' && (
                                    <div className="space-y-2">
                                      {question.options.map((option: string, optIndex: number) => (
                                        <label key={optIndex} className="flex items-center space-x-2 text-slate-300">
                                          <input
                                            type="radio"
                                            name={question.id}
                                            value={option}
                                            onChange={(e) => saveExerciseResponse(question.id, e.target.value)}
                                            checked={userProgress.exerciseResponses[question.id] === option}
                                            className="text-blue-600 focus:ring-blue-500"
                                          />
                                          <span>{option}</span>
                                        </label>
                                      ))}
                                    </div>
                                  )}
                                  
                                  {question.type === 'checkbox' && (
                                    <div className="space-y-2">
                                      {question.options.map((option: string, optIndex: number) => (
                                        <label key={optIndex} className="flex items-center space-x-2 text-slate-300">
                                          <input
                                            type="checkbox"
                                            value={option}
                                            onChange={(e) => {
                                              const current = userProgress.exerciseResponses[question.id] || []
                                              const updated = e.target.checked
                                                ? [...current, option]
                                                : current.filter((item: string) => item !== option)
                                              saveExerciseResponse(question.id, updated)
                                            }}
                                            checked={(userProgress.exerciseResponses[question.id] || []).includes(option)}
                                            className="text-blue-600 focus:ring-blue-500"
                                          />
                                          <span>{option}</span>
                                        </label>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Take-Aways Component */}
                        {component.id === 5 && (
                          <>
                            <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                                {component.content.title}
                              </h4>
                              
                              <div className="space-y-4">
                                <div>
                                  <h5 className="font-semibold text-green-300 mb-2">Key Takeaways:</h5>
                                  <ul className="space-y-2">
                                    {component.content.keyTakeaways.map((takeaway: string, index: number) => (
                                      <li key={index} className="text-slate-300 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        {takeaway}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h5 className="font-semibold text-purple-300 mb-2">Practice Recommendations:</h5>
                                  <ul className="space-y-2">
                                    {component.content.practiceRecommendations.map((rec: string, index: number) => (
                                      <li key={index} className="text-slate-300 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        {rec}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h5 className="font-semibold text-blue-300 mb-2">Next Steps:</h5>
                                  <ul className="space-y-2">
                                    {component.content.nextSteps.map((step: string, index: number) => (
                                      <li key={index} className="text-slate-300 flex items-start">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        {step}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Assessment */}
                            {component.assessment && (
                              <div className="bg-yellow-900/50 border border-yellow-700 rounded-lg p-4">
                                <h4 className="text-lg font-semibold text-yellow-300 mb-4">
                                  📝 {component.assessment.title}
                                </h4>
                                
                                <div className="space-y-4">
                                  {component.assessment.questions.map((question: any, index: number) => (
                                    <div key={question.id} className="bg-yellow-800/30 rounded-lg p-4">
                                      <h5 className="text-white font-medium mb-3">
                                        {index + 1}. {question.question}
                                      </h5>
                                      
                                      {question.type === 'multiple-choice' && (
                                        <div className="space-y-2">
                                          {question.options.map((option: string, optIndex: number) => (
                                            <label key={optIndex} className="flex items-center space-x-2 text-yellow-100">
                                              <input
                                                type="radio"
                                                name={question.id}
                                                value={optIndex}
                                                onChange={(e) => saveExerciseResponse(`assessment-${question.id}`, parseInt(e.target.value))}
                                                checked={userProgress.exerciseResponses[`assessment-${question.id}`] === optIndex}
                                                className="text-yellow-600 focus:ring-yellow-500"
                                              />
                                              <span>{option}</span>
                                            </label>
                                          ))}
                                        </div>
                                      )}
                                      
                                      {question.type === 'true-false' && (
                                        <div className="space-y-2">
                                          <label className="flex items-center space-x-2 text-yellow-100">
                                            <input
                                              type="radio"
                                              name={question.id}
                                              value="true"
                                              onChange={(e) => saveExerciseResponse(`assessment-${question.id}`, e.target.value === 'true')}
                                              checked={userProgress.exerciseResponses[`assessment-${question.id}`] === true}
                                              className="text-yellow-600 focus:ring-yellow-500"
                                            />
                                            <span>True</span>
                                          </label>
                                          <label className="flex items-center space-x-2 text-yellow-100">
                                            <input
                                              type="radio"
                                              name={question.id}
                                              value="false"
                                              onChange={(e) => saveExerciseResponse(`assessment-${question.id}`, e.target.value === 'true')}
                                              checked={userProgress.exerciseResponses[`assessment-${question.id}`] === false}
                                              className="text-yellow-600 focus:ring-yellow-500"
                                            />
                                            <span>False</span>
                                          </label>
                                        </div>
                                      )}
                                      
                                      {userProgress.exerciseResponses[`assessment-${question.id}`] !== undefined && (
                                        <div className="mt-3 p-3 bg-yellow-700/50 rounded-lg">
                                          <p className="text-yellow-100 text-sm">
                                            <strong>Explanation:</strong> {question.explanation}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}

                    {/* Exercise sections for other components */}
                    {component.exercises && component.id !== 4 && component.id !== 5 && (
                      <div className="mt-4 space-y-4">
                        {component.exercises.map((exercise: any, exerciseIndex: number) => (
                          <div key={exercise.id} className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-green-300 mb-3">
                              🎯 {exercise.title}
                            </h4>
                            
                            {exercise.instructions && (
                              <div className="mb-4">
                                <h5 className="font-semibold text-green-200 mb-2">Instructions:</h5>
                                <ol className="space-y-1">
                                  {exercise.instructions.map((instruction: string, index: number) => (
                                    <li key={index} className="text-green-100 text-sm flex items-start">
                                      <span className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                                        {index + 1}
                                      </span>
                                      {instruction}
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            )}
                            
                            {exercise.duration && (
                              <p className="text-green-200 text-sm mb-3">
                                <strong>Duration:</strong> {exercise.duration}
                              </p>
                            )}
                            
                            {exercise.reflection && (
                              <div className="mt-4">
                                <h5 className="font-semibold text-green-200 mb-2">Reflection:</h5>
                                <p className="text-green-100 text-sm mb-3">{exercise.reflection}</p>
                                <textarea
                                  className="w-full p-3 bg-green-800/50 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                  rows={3}
                                  placeholder="Write your reflection here..."
                                  onChange={(e) => saveExerciseResponse(`${exercise.id}-reflection`, e.target.value)}
                                  value={userProgress.exerciseResponses[`${exercise.id}-reflection`] || ''}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Progress Summary */}
        <section className="mt-12 bg-slate-800 border border-slate-700 rounded-lg p-6" aria-labelledby="progress-summary-heading">
          <h2 id="progress-summary-heading" className="text-xl font-bold text-white mb-4">
            Your Progress Summary
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-slate-400 text-sm">Complete</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {Math.floor(userProgress.timeSpent / 60)}h {userProgress.timeSpent % 60}m
              </div>
              <div className="text-slate-400 text-sm">Time Spent</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">
                {Object.keys(userProgress.exerciseResponses).length}
              </div>
              <div className="text-slate-400 text-sm">Exercises Completed</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                const progress = {
                  ...userProgress,
                  completedComponents: components.filter(c => c.completed).map(c => c.id),
                  lastAccessed: new Date()
                }
                localStorage.setItem('week2-progress', JSON.stringify(progress))
                alert('Progress saved successfully!')
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              💾 Save Progress
            </button>
          </div>
        </section>

        {/* Navigation */}
        <nav className="mt-8 flex justify-between" aria-label="Module navigation">
          <Link
            href="/course/week/1"
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            ← Previous: Week 1
          </Link>
          
          <Link
            href="/course/week/3"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Next: Week 3 →
          </Link>
        </nav>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-12 py-8" role="contentinfo">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            Connected Creativity Course • Week 2: Mind Wandering
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Last updated: {userProgress.lastAccessed.toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  )
}