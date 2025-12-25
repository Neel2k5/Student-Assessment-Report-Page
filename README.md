# Student Assessment Report Page

A React + TypeScript project built with Vite, designed to display student assessment reports, including overall scores, pronunciation, fluency, vocabulary, and grammar using interactive doughnut charts and progress bars.
[Submission for an internship application]

## Features

<!-- Features will be added later -->

## Prerequisites

- Node.js >= 18
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Neel2k5/Student-Assessment-Report-Page.git

cd folder
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

- Open your browser at http://localhost:5173 to view the app.
- HMR (Hot Module Replacement) is enabled for instant updates.

## Info

- **Running the Project**  
  Already covered in the Getting Started section.

- **Score Storage**  
  Scores are currently stored in \`/src/data\` as an array of objects typed with \`ReportData\`. Each score object represents a student’s assessment data. Example:

```ts
import type { ReportData } from "../types/ReportData";

export const data: ReportData[] = [
  {
    Name: "John Doe",
    Report_Date: "25/12/2025",
    pronounciation: 2.3,
    fluency: 8,
    vocabulary: 9,
    grammer: 7
  }
];
```

  The \`ReportData\` type defines the structure of each record:

```ts
export type ReportData = {
  Name: string;
  Report_Date: string;
  pronounciation: number;
  fluency: number;
  vocabulary: number;
  grammer: number;
};
```

- **Logical Parts**

  1. **Overall Score Calculation**  
     The overall score is computed as the average of all category scores normalized to a 9-point scale and rounded to one decimal place:

```ts
const Overall_Score =
  Math.round(
    90 *
      ((report_data.pronounciation / 9 +
        report_data.fluency / 9 +
        report_data.grammer / 9 +
        report_data.vocabulary / 9) / 4)
  ) / 10;
```

  2. **Color Mapping**  
     The \`getColorHex\` function returns a hex color based on the score:

```ts
export const getColorHex = (score: number): string => {
  if (score >= 8) return "22c55e";  // Green → excellent
  if (score >= 6) return "eab308";  // Yellow → average
  return "dc2626";                  // Red → poor
};
```

  3. **Feedback Logic**  
     The \`ressolveFeedback\` function generates textual feedback for each category based on the score:

```ts
const ressolveFeedback = (score: number): string => {
  if (score >= 8) {
    return "Excellent performance with strong control";
  }
  if (score >= 6) {
    return "Good performance with minor inaccuracies";
  }
  return "Needs improvement";
};
```