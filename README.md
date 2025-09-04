# CV Builder

A modern, interactive CV Builder application built with React and Tailwind CSS. Create professional CVs with an easy-to-use wizard interface and real-time preview.

![CV Builder Screenshot](https://github.com/user-attachments/assets/4f04fb2e-8091-41f2-880c-e7b911121648)

## Features

- **Wizard-style Interface**: Step-by-step form to guide users through CV creation
- **Real-time Preview**: See your CV update instantly as you type
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional Templates**: Clean, modern CV layout optimized for readability
- **Multiple Sections**: Support for personal info, work experience, education, skills, and languages

## Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/aoun9990/pakkaywala.git
cd pakkaywala
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── wizard/
│   │   ├── CVWizard.jsx          # Main wizard component
│   │   └── steps/
│   │       ├── PersonalInfoStep.jsx
│   │       ├── ExperienceStep.jsx
│   │       ├── EducationStep.jsx
│   │       └── SkillsStep.jsx
│   ├── preview/
│   │   └── CVPreview.jsx         # Real-time CV preview
│   └── common/                   # Shared components
├── App.jsx                       # Main application component
├── main.jsx                      # Application entry point
└── index.css                     # Global styles with Tailwind
```

## Usage

1. **Personal Information**: Enter your basic details like name, email, phone, and professional summary
2. **Work Experience**: Add your professional experience with company details, positions, and descriptions
3. **Education**: Include your educational background with institutions, degrees, and achievements
4. **Skills & Languages**: List your technical skills and language proficiencies

The CV preview updates in real-time as you fill out each section, allowing you to see exactly how your CV will look.

## Development

- The application uses React hooks for state management
- Tailwind CSS provides responsive styling
- Components are modular and reusable
- Real-time updates are achieved through React's state management

## Future Enhancements

- PDF export functionality
- Multiple CV templates
- Cloud storage integration
- Social media profile integration
- ATS optimization features

## License

This project is open source and available under the [MIT License](LICENSE).
