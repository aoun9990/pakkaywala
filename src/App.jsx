import { useState, useCallback } from 'react'
import CVWizard from './components/wizard/CVWizard'
import CVPreview from './components/preview/CVPreview'

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    languages: []
  })

  const updateCVData = useCallback((section, data) => {
    setCvData(prev => ({
      ...prev,
      [section]: data
    }))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">CV Builder</h1>
          <p className="text-gray-600">Create your professional CV with our easy-to-use wizard</p>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wizard Panel */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <CVWizard cvData={cvData} updateCVData={updateCVData} />
          </div>
          
          {/* Preview Panel */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <CVPreview cvData={cvData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
