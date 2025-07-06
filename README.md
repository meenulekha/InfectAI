# Patient Records Interface

A comprehensive medical patient records management system with infection risk analysis built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Linear Patient Dashboard**: Clean table view with essential patient information
- **Patient Details**: Comprehensive patient information with bio data and contact details
- **Infection Risk Analysis**: Detailed breakdown of infection risk factors with scoring
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with shadcn/ui components for a professional medical interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd patient-records-interface
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main dashboard
│   ├── patient-details/[id]/    # Patient details pages
│   └── patient/[id]/            # Infection risk analysis pages
├── components/
│   └── ui/                      # Reusable UI components
├── lib/
│   └── utils.ts                 # Utility functions
└── Configuration files
\`\`\`

## Usage

### Navigation Flow

1. **Dashboard** (`/`) - View all patients in a linear table format
2. **Patient Details** (`/patient-details/[id]`) - View comprehensive patient information
3. **Infection Analysis** (`/patient/[id]`) - Detailed infection risk breakdown

### Key Features

- **Search & Filter**: Search patients by name or condition, filter by risk level
- **Risk Indicators**: Color-coded infection scores (red: high, yellow: medium, green: low)
- **Clickable Navigation**: Click patient rows to view details, click infection scores for analysis
- **Comprehensive Data**: Patient bio data, contact information, medical history, and vitals

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

## Customization

The application uses a modular component structure making it easy to:

- Add new patient data fields
- Customize risk scoring algorithms
- Modify the UI theme and colors
- Extend functionality with additional pages

## License

This project is licensed under the MIT License.
