import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Connected Creativity</h1>
                <p className="text-sm text-purple-600">Holistic Design Curriculum</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-purple-600 hover:text-purple-800 font-medium">Home</Link>
              <Link href="/course" className="text-gray-600 hover:text-purple-600">Course</Link>
              <Link href="/progress" className="text-gray-600 hover:text-purple-600">Progress</Link>
              <Link href="/resources" className="text-gray-600 hover:text-purple-600">Resources</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Connected Creativity</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore creative thinking alongside self-reflection and curiosity. This online course complements your in-person sessions at the university.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">What you'll find here:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Five Self-Study Sessions</h4>
                  <p className="text-gray-600 text-sm">Recorded materials (videos and audios) to guide your learning journey</p>
                </div>
                
                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📚</span>
                  </div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Additional Resources</h4>
                  <p className="text-gray-600 text-sm">Videos and readings for deeper exploration of discussed subjects</p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✍️</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Creative Journaling</h4>
                  <p className="text-gray-600 text-sm">Downloadable sheets to add to your portfolio and track your growth</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/course" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold border-2 border-purple-200 hover:border-purple-400 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Course Overview</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-purple-800 mb-4">🎯 Learning Objectives</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strengthen creative skills through arts-based methods
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Foster deeper connection with yourself, others, and the world
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop presence, empathy, and resilience
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Enhance collaboration and creative flow
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-blue-800 mb-4">📊 Course Details</h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>11 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Format:</span>
                    <span>Hybrid (Online + In-person)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Level:</span>
                    <span>Third-year HBO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Language:</span>
                    <span>Dutch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Workload:</span>
                    <span>3-4 hours/week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Good luck on this journey!
              </p>
              <p className="text-purple-600 font-medium">
                — The Connected Creativity Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">CC</span>
                </div>
                <span className="text-xl font-bold">Connected Creativity</span>
              </div>
              <p className="text-gray-400">
                A holistic design curriculum fostering creativity, connection, and personal growth.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/course" className="hover:text-white">Course Modules</Link></li>
                <li><Link href="/progress" className="hover:text-white">Track Progress</Link></li>
                <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                <li><Link href="/support" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-gray-400 mb-2">University of Applied Sciences</p>
              <p className="text-gray-400 mb-2">Creative Design Department</p>
              <p className="text-gray-400">info@connectedcreativity.edu</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Connected Creativity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}