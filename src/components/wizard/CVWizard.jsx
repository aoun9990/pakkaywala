import { useState } from 'react'
import PersonalInfoStep from './steps/PersonalInfoStep'
import ExperienceStep from './steps/ExperienceStep'
import EducationStep from './steps/EducationStep'
import SkillsStep from './steps/SkillsStep'

const STEPS = [
  { id: 'personal', title: 'Personal Information', component: PersonalInfoStep },
  { id: 'experience', title: 'Work Experience', component: ExperienceStep },
  { id: 'education', title: 'Education', component: EducationStep },
  { id: 'skills', title: 'Skills & Languages', component: SkillsStep }
]

function CVWizard({ cvData, updateCVData }) {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex)
  }

  const CurrentStepComponent = STEPS[currentStep].component

  return (
    <div className="space-y-6">
      {/* Step Navigation */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Build Your CV</h2>
        <nav className="flex space-x-8">
          {STEPS.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                index === currentStep
                  ? 'border-blue-500 text-blue-600'
                  : index < currentStep
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center">
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center mr-2 ${
                  index === currentStep
                    ? 'bg-blue-500 text-white'
                    : index < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index < currentStep ? '✓' : index + 1}
                </span>
                {step.title}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Current Step Content */}
      <div className="min-h-[400px]">
        <CurrentStepComponent 
          data={cvData} 
          updateData={updateCVData}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4 border-t">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded-md font-medium ${
            currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
        
        <button
          onClick={nextStep}
          disabled={currentStep === STEPS.length - 1}
          className={`px-4 py-2 rounded-md font-medium ${
            currentStep === STEPS.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {currentStep === STEPS.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default CVWizard