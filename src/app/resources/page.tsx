'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Layout/Header'
import BackgroundElements from '@/components/Layout/BackgroundElements'

interface Resource {
  id: number
  title: string
  type: 'video' | 'audio' | 'pdf' | 'template' | 'article'
  category: 'general' | 'mindfulness' | 'creativity' | 'collaboration' | 'reflection'
  description: string
  duration?: string
  size?: string
  downloadUrl: string
  previewUrl?: string
  tags: string[]
  featured: boolean
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Mind Wandering Practice Guide",
    type: 'pdf',
    category: 'mindfulness',
    description: "A comprehensive guide to developing your mind wandering practice with exercises and techniques.",
    size: "2.3 MB",
    downloadUrl: "/downloads/mind-wandering-guide.pdf",
    tags: ["mind wandering", "meditation", "creativity"],
    featured: true
  },
  {
    id: 2,
    title: "Creative Journaling Template",
    type: 'template',
    category: 'reflection',
    description: "Structured templates for creative reflection and self-discovery exercises.",
    size: "1.1 MB",
    downloadUrl: "/downloads/journaling-template.pdf",
    tags: ["journaling", "reflection", "self-discovery"],
    featured: true
  },
  {
    id: 3,
    title: "Introduction to Creative Flow",
    type: 'video',
    category: 'creativity',
    description: "Understanding the psychology and neuroscience behind creative flow states.",
    duration: "15 minutes",
    downloadUrl: "/videos/creative-flow-intro.mp4",
    previewUrl: "/videos/creative-flow-preview.jpg",
    tags: ["flow", "psychology", "creativity"],
    featured: false
  },
  {
    id: 4,
    title: "Guided Anchoring Meditation",
    type: 'audio',
    category: 'mindfulness',
    description: "A 10-minute guided meditation to help you anchor in the present moment.",
    duration: "10 minutes",
    size: "9.2 MB",
    downloadUrl: "/audio/anchoring-meditation.mp3",
    tags: ["meditation", "mindfulness", "anchoring"],
    featured: true
  },
  {
    id: 5,
    title: "Collaborative Creativity Techniques",
    type: 'article',
    category: 'collaboration',
    description: "Research-based techniques for enhancing creative collaboration in teams.",
    downloadUrl: "/articles/collaborative-creativity.html",
    tags: ["collaboration", "teamwork", "creativity"],
    featured: false
  },
  {
    id: 6,
    title: "Daily Wandering Tracker",
    type: 'template',
    category: 'reflection',
    description: "Track your daily mind wandering experiences and insights.",
    size: "0.8 MB",
    downloadUrl: "/downloads/wandering-tracker.pdf",
    tags: ["tracking", "mind wandering", "daily practice"],
    featured: false
  },
  {
    id: 7,
    title: "The Science of Curiosity",
    type: 'pdf',
    category: 'general',
    description: "Academic paper on the neuroscience and psychology of curiosity in learning.",
    size: "3.1 MB",
    downloadUrl: "/downloads/science-of-curiosity.pdf",
    tags: ["curiosity", "neuroscience", "learning"],
    featured: false
  },
  {
    id: 8,
    title: "Creative Courage Exercises",
    type: 'template',
    category: 'creativity',
    description: "Practical exercises to build creative confidence and overcome creative blocks.",
    size: "1.5 MB",
    downloadUrl: "/downloads/creative-courage-exercises.pdf",
    tags: ["courage", "confidence", "creative blocks"],
    featured: true
  }
]

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { key: 'all', label: 'All Categories', icon: '📚' },
    { key: 'general', label: 'General', icon: '🌟' },
    { key: 'mindfulness', label: 'Mindfulness', icon: '🧘' },
    { key: 'creativity', label: 'Creativity', icon: '🎨' },
    { key: 'collaboration', label: 'Collaboration', icon: '🤝' },
    { key: 'reflection', label: 'Reflection', icon: '🤔' }
  ]

  const types = [
    { key: 'all', label: 'All Types', icon: '📋' },
    { key: 'video', label: 'Videos', icon: '🎥' },
    { key: 'audio', label: 'Audio', icon: '🎵' },
    { key: 'pdf', label: 'PDFs', icon: '📄' },
    { key: 'template', label: 'Templates', icon: '📝' },
    { key: 'article', label: 'Articles', icon: '📰' }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesType = selectedType === 'all' || resource.type === selectedType
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesType && matchesSearch
  })

  const featuredResources = resources.filter(resource => resource.featured)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥'
      case 'audio': return '🎵'
      case 'pdf': return '📄'
      case 'template': return '📝'
      case 'article': return '📰'
      default: return '📋'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800 border-red-200'
      case 'audio': return 'bg-green-100 text-green-800 border-green-200'
      case 'pdf': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'template': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'article': return 'bg-orange-100 text-orange-800 border-orange-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />

      <div className="container-section">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="heading-xl mb-8">
            Learning Resources
          </h1>
          <p className="body-lg mb-8 max-w-3xl mx-auto">
            Expand your creative toolkit with our curated collection of guides, templates, and multimedia resources.
          </p>
        </div>

        {/* Featured Resources */}
        <section className="mb-12">
          <h2 className="heading-md text-white mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="card-primary">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{getTypeIcon(resource.type)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(resource.type)}`}>
                    {resource.type.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {resource.duration && <span>{resource.duration}</span>}
                    {resource.size && <span>{resource.size}</span>}
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <section className="card-secondary mb-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Resources</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, description, or tags..."
                className="form-input"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select"
              >
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.icon} {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="form-select"
              >
                {types.map((type) => (
                  <option key={type.key} value={type.key}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="heading-md text-white">All Resources</h2>
            <span className="text-gray-300">{filteredResources.length} resources found</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="card-primary">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{getTypeIcon(resource.type)}</span>
                  <div className="flex items-center space-x-2">
                    {resource.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(resource.type)}`}>
                      {resource.type.toUpperCase()}
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{resource.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                  {resource.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      +{resource.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {resource.duration && <span className="block">{resource.duration}</span>}
                    {resource.size && <span className="block">{resource.size}</span>}
                  </div>
                  <div className="flex space-x-2">
                    {resource.previewUrl && (
                      <button className="btn-secondary text-sm px-3 py-2">
                        Preview
                      </button>
                    )}
                    <button className="btn-primary text-sm px-4 py-2">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="heading-sm text-white mb-2">No resources found</h3>
              <p className="text-gray-300">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </section>
      </div>

      <BackgroundElements />
    </div>
  )
}