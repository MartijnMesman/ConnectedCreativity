import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Connected Creativity
              </h1>
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
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
              Connected Creativity
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
            Discover a holistic approach to design that connects mind, body,
            <br />
            and creativity through intentional practice and mindful exploration.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Study Sessions Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Study Sessions</h3>
              <p className="text-gray-400 leading-relaxed">
                Interactive learning modules designed to enhance your creative skills through structured practice and exploration.
              </p>
            </div>

            {/* Extra Content Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Extra Content</h3>
              <p className="text-gray-400 leading-relaxed">
                Supplementary resources, tutorials, and inspiration to deepen your understanding and expand your creative horizons.
              </p>
            </div>

            {/* Journaling Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Journaling</h3>
              <p className="text-gray-400 leading-relaxed">
                Reflective exercises and prompts to document your creative journey and track your personal growth.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link 
              href="/course" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
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