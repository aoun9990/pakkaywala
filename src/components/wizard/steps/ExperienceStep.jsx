import { useState, useEffect } from 'react'

function ExperienceStep({ data, updateData }) {
  const [experiences, setExperiences] = useState(data.experience || [])

  useEffect(() => {
    updateData('experience', experiences)
  }, [experiences])

  const addExperience = () => {
    setExperiences([...experiences, {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }])
  }

  const removeExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  }

  const updateExperience = (id, field, value) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Work Experience</h3>
        <p className="text-gray-600 mb-6">Add your professional work experience</p>
      </div>

      {experiences.map((experience, index) => (
        <div key={experience.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-900">Experience #{index + 1}</h4>
            <button
              onClick={() => removeExperience(experience.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position *
              </label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Job title/position"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="month"
                value={experience.startDate}
                onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
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
                  value={experience.endDate}
                  onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                  disabled={experience.current}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={experience.current}
                    onChange={(e) => updateExperience(experience.id, 'current', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-600">I currently work here</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              value={experience.description}
              onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
      >
        + Add Work Experience
      </button>
    </div>
  )
}

export default ExperienceStep