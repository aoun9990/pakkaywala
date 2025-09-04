import { useState, useEffect } from 'react'

function SkillsStep({ data, updateData }) {
  const [skills, setSkills] = useState(data.skills || [])
  const [languages, setLanguages] = useState(data.languages || [])

  useEffect(() => {
    updateData('skills', skills)
    updateData('languages', languages)
  }, [skills, languages])

  const addSkill = () => {
    setSkills([...skills, {
      id: Date.now(),
      name: '',
      level: 'Beginner'
    }])
  }

  const removeSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  const updateSkill = (id, field, value) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ))
  }

  const addLanguage = () => {
    setLanguages([...languages, {
      id: Date.now(),
      name: '',
      proficiency: 'Basic'
    }])
  }

  const removeLanguage = (id) => {
    setLanguages(languages.filter(lang => lang.id !== id))
  }

  const updateLanguage = (id, field, value) => {
    setLanguages(languages.map(lang => 
      lang.id === id ? { ...lang, [field]: value } : lang
    ))
  }

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  const languageProficiency = ['Basic', 'Conversational', 'Fluent', 'Native']

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Skills & Languages</h3>
        <p className="text-gray-600 mb-6">Add your technical skills and language proficiencies</p>
      </div>

      {/* Skills Section */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-800">Technical Skills</h4>
        
        {skills.map((skill, index) => (
          <div key={skill.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., JavaScript, Python, Project Management"
              />
            </div>
            <div className="w-32">
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {skillLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => removeSkill(skill.id)}
              className="text-red-600 hover:text-red-800 text-sm px-2"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addSkill}
          className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
        >
          + Add Skill
        </button>
      </div>

      {/* Languages Section */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-800">Languages</h4>
        
        {languages.map((language, index) => (
          <div key={language.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <input
                type="text"
                value={language.name}
                onChange={(e) => updateLanguage(language.id, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., English, Spanish, Mandarin"
              />
            </div>
            <div className="w-36">
              <select
                value={language.proficiency}
                onChange={(e) => updateLanguage(language.id, 'proficiency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {languageProficiency.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => removeLanguage(language.id)}
              className="text-red-600 hover:text-red-800 text-sm px-2"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addLanguage}
          className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
        >
          + Add Language
        </button>
      </div>
    </div>
  )
}

export default SkillsStep