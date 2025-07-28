# Project overview

## Features

- Custom commands and seed scripts for automation

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- Yarn/Npm
- Strapi (see [Strapi documentation](https://docs.strapi.io/))

### Installation

```bash
yarn install
```

### Environment Setup

Copy the example environment file and update values as needed:

```bash
cp .env.example .env
```

### Running the Project

```bash
yarn dev
#or
yarn develop
```

## Usage

### Custom Commands

To run a custom command (requires Strapi instance):

```bash
yarn cmd <filename>
```

Add your command file inside the `commands/` directory.

### Seeding Data

To run a seed file:

```bash
yarn cmd seeds/<seed-file-name>
```

Add your seed file inside the `commands/seeds/` directory.

## Directory Structure

- `src/` - Source code (APIs, components, admin, extensions)
- `config/` - Strapi configuration files
- `database/` - Database migrations
- `commands/` - Custom scripts and seeders
- `public/` - Public assets
- `types/` - TypeScript definitions

## Documentation

- [Strapi Services](https://docs.strapi.io/dev-docs/backend-customization/services)
