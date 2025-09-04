import { useState, useEffect } from 'react'

function EducationStep({ data, updateData }) {
  const [education, setEducation] = useState(data.education || [])

  useEffect(() => {
    updateData('education', education)
  }, [education])

  const addEducation = () => {
    setEducation([...education, {
      id: Date.now(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: '',
      description: ''
    }])
  }

  const removeEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id))
  }

  const updateEducationItem = (id, field, value) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Education</h3>
        <p className="text-gray-600 mb-6">Add your educational background</p>
      </div>

      {education.map((edu, index) => (
        <div key={edu.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-900">Education #{index + 1}</h4>
            <button
              onClick={() => removeEducation(edu.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution *
              </label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducationItem(edu.id, 'institution', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="University/School name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree *
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducationItem(edu.id, 'degree', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Bachelor's, Master's, PhD, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Study
              </label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducationItem(edu.id, 'field', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Computer Science, Business, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPA (Optional)
              </label>
              <input
                type="text"
                value={edu.gpa}
                onChange={(e) => updateEducationItem(edu.id, 'gpa', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="3.8/4.0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducationItem(edu.id, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <div className="space-y-2">
                <input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => updateEducationItem(edu.id, 'endDate', e.target.value)}
                  disabled={edu.current}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={edu.current}
                    onChange={(e) => updateEducationItem(edu.id, 'current', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-600">Currently studying</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              value={edu.description}
              onChange={(e) => updateEducationItem(edu.id, 'description', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Awards, honors, relevant coursework, etc..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={addEducation}
        className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
      >
        + Add Education
      </button>
    </div>
  )
}

export default EducationStep