<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="src/images/screencast.png" width="50" />
  </a>
</p>
<h1 align="center">
  ScreenCast Quiz
</h1>

This is a quiz competition developed by GLUG for testing the students skills in Linux Terminal Commands and common computer science related questions.

## Installation
- Clone this repository
- Install all the dependencies by running this command
```
npm install
```
- Run the development Server
```
gatsby develop -p 5500
```
- Compile the production build
```
gatsby build
```
- Compile and deploy the production build to AWS S3
```
npm run deploy
```
## Infrastructure
- Static files hosted on AWS S3(Simple Storage Service)
- CDN runned on AWS Cloudfront.