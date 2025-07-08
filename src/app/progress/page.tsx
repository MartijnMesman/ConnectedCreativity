'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Layout/Header'
import BackgroundElements from '@/components/Layout/BackgroundElements'

interface ProgressData {
  overallProgress: number
  completedModules: number
  totalModules: number
  currentStreak: number
  totalTimeSpent: string
  moduleProgress: Array<{
    id: number
    title: string
    week: number
    type: 'physical' | 'online'
    progress: number
    status: 'completed' | 'in-progress' | 'not-started'
    timeSpent: string
    lastAccessed: string
  }>
  achievements: Array<{
    id: number
    title: string
    description: string
    icon: string
    earned: boolean
    earnedDate?: string
  }>
  reflectionEntries: number
  downloadedResources: number
}

const progressData: ProgressData = {
  overallProgress: 18,
  completedModules: 1,
  totalModules: 11,
  currentStreak: 3,
  totalTimeSpent: "8h 45m",
  moduleProgress: [
    {
      id: 1,
      title: "Introduction + Curiosity",
      week: 1,
      type: 'physical',
      progress: 100,
      status: 'completed',
      timeSpent: "3h 15m",
      lastAccessed: "2024-01-15"
    },
    {
      id: 2,
      title: "Mind Wandering",
      week: 2,
      type: 'online',
      progress: 60,
      status: 'in-progress',
      timeSpent: "1h 30m",
      lastAccessed: "2024-01-22"
    },
    {
      id: 3,
      title: "Collaborative Creativity",
      week: 3,
      type: 'physical',
      progress: 0,
      status: 'not-started',
      timeSpent: "0m",
      lastAccessed: "Never"
    },
  ],
  achievements: [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first module",
      icon: "🎯",
      earned: true,
      earnedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Curious Explorer",
      description: "Complete all curiosity exercises",
      icon: "🔍",
      earned: true,
      earnedDate: "2024-01-15"
    },
    {
      id: 3,
      title: "Reflective Thinker",
      description: "Complete 5 reflection exercises",
      icon: "🤔",
      earned: false
    },
    {
      id: 4,
      title: "Consistent Learner",
      description: "Maintain a 7-day learning streak",
      icon: "🔥",
      earned: false
    },
    {
      id: 5,
      title: "Resource Collector",
      description: "Download 10 learning resources",
      icon: "📚",
      earned: false
    },
    {
      id: 6,
      title: "Creative Flow",
      description: "Complete the Creative Flow module",
      icon: "🌊",
      earned: false
    }
  ],
  reflectionEntries: 8,
  downloadedResources: 3
}

export default function ProgressPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'modules' | 'achievements'>('overview')

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500'
    if (progress > 50) return 'bg-blue-500'
    if (progress > 0) return 'bg-yellow-500'
    return 'bg-gray-300'
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'status-success'
      case 'in-progress':
        return 'status-info'
      case 'not-started':
        return 'bg-gray-100 text-gray-600 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />

      <div className="container-section">
        {/* Progress Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card-secondary text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{progressData.overallProgress}%</h3>
            <p className="text-gray-600">Overall Progress</p>
          </div>

          <div className="card-secondary text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{progressData.completedModules}/{progressData.totalModules}</h3>
            <p className="text-gray-600">Modules Completed</p>
          </div>

          <div className="card-secondary text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔥</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{progressData.currentStreak}</h3>
            <p className="text-gray-600">Day Streak</p>
          </div>

          <div className="card-secondary text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⏱️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{progressData.totalTimeSpent}</h3>
            <p className="text-gray-600">Time Spent</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="card-secondary mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'overview', label: 'Overview', icon: '📈' },
                { key: 'modules', label: 'Module Progress', icon: '📚' },
                { key: 'achievements', label: 'Achievements', icon: '🏆' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedTab(tab.key as any)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    selectedTab === tab.key
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'overview' && (
              <div className="space-y-8">
                {/* Overall Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">Course Completion</h3>
                    <span className="text-sm text-gray-600">{progressData.overallProgress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${progressData.overallProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <span className="text-green-600">✅</span>
                      <div>
                        <p className="font-medium text-green-800">Completed Module 1: Introduction + Curiosity</p>
                        <p className="text-sm text-green-600">January 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-600">📝</span>
                      <div>
                        <p className="font-medium text-blue-800">Started reflection exercises in Mind Wandering</p>
                        <p className="text-sm text-blue-600">January 22, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <span className="text-purple-600">📚</span>
                      <div>
                        <p className="font-medium text-purple-800">Downloaded Mind Wandering Practice Guide</p>
                        <p className="text-sm text-purple-600">January 20, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-800 mb-4">Learning Statistics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-purple-700">Reflection Entries:</span>
                        <span className="font-medium">{progressData.reflectionEntries}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">Resources Downloaded:</span>
                        <span className="font-medium">{progressData.downloadedResources}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">Current Streak:</span>
                        <span className="font-medium">{progressData.currentStreak} days</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">Next Steps</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-blue-700">Complete Mind Wandering module</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-blue-700">Attend Week 3 physical session</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-blue-700">Download journaling templates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'modules' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Module Progress</h3>
                {progressData.moduleProgress.map((module) => (
                  <div key={module.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{module.type === 'physical' ? '🏫' : '💻'}</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{module.title}</h4>
                          <p className="text-sm text-gray-600">Week {module.week} • {module.type === 'physical' ? 'In-Person' : 'Online'}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(module.status)}`}>
                        {module.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">{module.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(module.progress)}`}
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>Time spent: {module.timeSpent}</span>
                      <span>Last accessed: {module.lastAccessed}</span>
                    </div>

                    {module.status === 'in-progress' && (
                      <div className="mt-4">
                        <Link
                          href={`/course/module/${module.id}`}
                          className="btn-primary text-sm px-4 py-2"
                        >
                          Continue Learning
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'achievements' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {progressData.achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`p-6 rounded-xl border-2 transition-all ${
                        achievement.earned 
                          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                          achievement.earned ? 'bg-yellow-400' : 'bg-gray-300'
                        }`}>
                          {achievement.earned ? achievement.icon : '🔒'}
                        </div>
                        <div>
                          <h4 className={`font-semibold ${achievement.earned ? 'text-yellow-800' : 'text-gray-600'}`}>
                            {achievement.title}
                          </h4>
                          {achievement.earned && achievement.earnedDate && (
                            <p className="text-sm text-yellow-600">Earned on {achievement.earnedDate}</p>
                          )}
                        </div>
                      </div>
                      <p className={`text-sm ${achievement.earned ? 'text-yellow-700' : 'text-gray-500'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <BackgroundElements />
    </div>
  )
}