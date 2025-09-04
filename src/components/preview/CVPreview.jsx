function CVPreview({ cvData }) {
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const { personalInfo, experience, education, skills, languages } = cvData

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">CV Preview</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Download PDF
        </button>
      </div>

      {/* CV Content */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm min-h-[800px]" style={{ fontFamily: 'serif' }}>
        {/* Header */}
        <div className="text-center border-b-2 border-gray-300 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {personalInfo?.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            {personalInfo?.email && (
              <span>{personalInfo.email}</span>
            )}
            {personalInfo?.phone && (
              <span>•</span>
            )}
            {personalInfo?.phone && (
              <span>{personalInfo.phone}</span>
            )}
            {personalInfo?.address && (
              <span>•</span>
            )}
            {personalInfo?.address && (
              <span>{personalInfo.address}</span>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {personalInfo?.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={exp.id || index} className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {exp.position || 'Position'} - {exp.company || 'Company'}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={edu.id || index}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-gray-700">{edu.institution || 'Institution'}</p>
                      {edu.gpa && (
                        <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <span className="text-sm text-gray-600">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 text-sm">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              SKILLS
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={skill.id || index} className="flex justify-between">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              LANGUAGES
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang, index) => (
                <div key={lang.id || index} className="flex justify-between">
                  <span className="text-gray-700">{lang.name}</span>
                  <span className="text-sm text-gray-600">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!personalInfo?.name && !experience?.length && !education?.length && !skills?.length && (
          <div className="text-center text-gray-500 py-16">
            <p className="text-lg">Your CV preview will appear here</p>
            <p className="text-sm">Start filling out the form on the left to see your CV</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CVPreview