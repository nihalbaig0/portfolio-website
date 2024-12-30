#!/bin/bash


# Create src directory and its subdirectories
mkdir -p src/{components,data,styles,utils}

# Create component subdirectories
mkdir -p src/components/{Hero,Blog,Skills,Experience,Publications,Contact,common,layout}

# Create Hero component files
touch src/components/Hero/{HeroStats,ProfileImage,HeroSection}.jsx

# Create Blog component files
touch src/components/Blog/{BlogCard,BlogSection}.jsx

# Create Skills component files
touch src/components/Skills/{SkillCard,SkillSection}.jsx

# Create Experience component files
touch src/components/Experience/{ExperienceCard,ExperienceSection}.jsx

# Create Publications component files
touch src/components/Publications/{PublicationCard,PublicationSection}.jsx

# Create Contact component files
touch src/components/Contact/{ContactForm,ContactSection}.jsx

# Create common component files
touch src/components/common/{BackgroundEffects,SectionHeader,Card,Button}.jsx

# Create layout component files
touch src/components/layout/{Header,Footer,Layout}.jsx

# Create main files
touch src/{Portfolio.jsx,index.js}

# Create data files
touch src/data/{index.js,blog.js,skills.js,experience.js,publications.js}

# Create style files
touch src/styles/{globals.css,variables.css}

# Create utility files
touch src/utils/{helpers.js,constants.js}


echo "Portfolio project structure has been created successfully!"
ls -R