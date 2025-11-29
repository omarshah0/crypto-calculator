# Crypto Position Size Calculator

A modern, responsive web application for calculating optimal position sizes for cryptocurrency trading. Built with Astro and Tailwind CSS, this calculator helps traders determine the correct position size based on account balance, risk percentage, entry price, and stop-loss levels.

## ✨ Features

- **Universal Asset Support**: Works with any cryptocurrency or trading asset (BTC, ETH, etc.)
- **Real-time Calculations**: Automatically calculates position size, required margin, and risk amount as you type
- **Local Storage Persistence**: Saves your inputs and results automatically - your data persists across sessions
- **Responsive Design**: 
  - Mobile: Stacked layout with calculator on top, results below
  - Desktop/Tablet: Side-by-side layout with calculator on left, results on right
- **Precise Decimal Support**: Supports unlimited decimal places for accurate crypto price calculations
- **Leverage Support**: Optional leverage calculation for margin trading
- **Modern UI**: Clean, gradient-based design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd crpyo-calculator
```

2. Install dependencies:
```sh
pnpm install
```

3. Start the development server:
```sh
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📖 How to Use

1. **Enter Asset Symbol**: Type the cryptocurrency symbol (e.g., BTC, ETH, SOL)
2. **Set Account Balance**: Enter your total account balance in USD
3. **Define Risk Percentage**: Specify what percentage of your balance you're willing to risk (e.g., 1% = 1)
4. **Set Entry Price**: Enter the price at which you plan to enter the position
5. **Set Stop-Loss Price**: Enter your stop-loss price
6. **Optional - Leverage**: Add leverage if trading on margin (defaults to 1x)

The calculator automatically computes:
- **Position Size**: The amount of the asset you should trade
- **Required Margin**: The margin needed for leveraged positions
- **Risk Amount**: The dollar amount you're risking on this trade

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Web framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- Vanilla JavaScript - Client-side logic
- LocalStorage API - Data persistence

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro      # Main calculator page
│   └── styles/
│       └── global.css       # Global styles
├── astro.config.mjs         # Astro configuration
├── package.json
└── README.md
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📐 Calculation Formula

The calculator uses the following formulas:

- **Risk Amount** = (Risk Percentage / 100) × Account Balance
- **Stop Distance** = |Stop-Loss Price - Entry Price|
- **Position Size** = Risk Amount / Stop Distance
- **Required Margin** = (Position Size × Entry Price) / Leverage

## 🎨 Design Features

- Gradient backgrounds and text effects
- Square corners (no border radius)
- Smooth animations and transitions
- Sticky results panel on desktop
- Responsive grid layouts

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
