# Tailwind styles mapper

Style mapper for more flexibility when using Tailwind CSS to build reusable components

## Installation

Use the package manager npm to install.

```bash
npm install -D tw-map
```

## Config

In your Tailwind config file:

```bash

const tailwindColors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // ...
    "./node_modules/tw-map/**/*.js",
  ],
  // ...
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      none: '0px',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      xs: defaultTheme.boxShadow.sm,
      sm: defaultTheme.boxShadow.DEFAULT,
    },
    colors: {
      ...tailwindColors,
      primary: '...',    // Customize as needed
      secondary: '...',
      success: '...',
      warning: '...',
      error: '...',
      info: '...',
    },
    screens: {
      xs: '430px',
      ...defaultTheme.screens,
    },
  },
  // ...
};

```

## Usage

```bash

import { StylesMapper } from 'tw-map';

const styles = StylesMapper.create().width('full').write()

console.log(styles); // w-full

```
