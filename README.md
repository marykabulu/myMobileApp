# Say It Better - AI Message Rewriter

> Deployed via GitHub Pages

A mobile and web application that helps users rewrite their messages in different tones using AI-powered text generation. Built with Ionic, Angular, and AWS Bedrock (Claude AI).

## 🌟 Features

- **AI-Powered Rewriting**: Uses AWS Bedrock with Claude AI to intelligently rewrite messages
- **Multiple Tones**: Choose from various tones including:
  - Polite
  - Professional
  - Romantic
  - Firm
  - Apology
- **Cross-Platform**: Available as both a mobile app (Android) and web application
- **Modern UI**: Built with Ionic Framework for a beautiful, responsive interface

## 🚀 Live Demo

Once deployed, your app will be available at:
`https://your-username.github.io/repository-name/`

Replace `your-username` and `repository-name` with your actual GitHub username and repository name.

## 🛠️ Tech Stack

- **Frontend**: Ionic 8, Angular 20
- **Mobile**: Capacitor 8 (Android)
- **Backend**: AWS Lambda, API Gateway
- **AI**: AWS Bedrock (Claude 3 Haiku)
- **Deployment**: GitHub Pages (Web), Google Play Store (Mobile)

## 📱 Mobile App

The app is available as an Android application built with Capacitor. To build:

```bash
cd myMobileApp
npm run android:build
```

## 🌐 Web Version

The web version is automatically deployed to GitHub Pages on every push to the main branch.

### Local Development

```bash
cd myMobileApp
npm install
npm start
```

The app will be available at `http://localhost:4200`

### Building for Production

```bash
cd myMobileApp
npm run build:prod
```

The built files will be in the `www` directory.

## 📁 Project Structure

```
.
├── myMobileApp/          # Main Ionic/Angular application
│   ├── src/             # Source code
│   │   ├── app/         # Application components
│   │   │   ├── rewrite/ # Main rewrite feature
│   │   │   └── services/# AWS service integration
│   │   └── assets/      # Static assets
│   └── android/         # Android native project
├── lambda/              # AWS Lambda backend
│   └── rewrite-message/# Lambda function for text rewriting
└── .github/            # GitHub Actions workflows
```

## 🔧 Configuration

### AWS Setup

The app requires an AWS API Gateway endpoint. Update the API URL in:
- `myMobileApp/src/app/services/aws.service.ts`

### GitHub Pages Setup

To deploy to GitHub Pages:

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **The workflow will automatically deploy**:
   - On every push to `main` or `master` branch
   - The workflow builds the Angular app and deploys it to GitHub Pages
   - Your app will be available at `https://your-username.github.io/repository-name/`

4. **Update the base href** (if needed):
   - The workflow automatically sets the base href based on your repository name
   - If you're using a custom domain or different setup, you may need to adjust the base href in `.github/workflows/deploy.yml`

## 📝 How It Works

1. User enters a message they want to rewrite
2. User selects a desired tone (polite, professional, etc.)
3. The message is sent to AWS Lambda via API Gateway
4. Lambda function uses AWS Bedrock (Claude AI) to rewrite the message
5. The rewritten message is returned and displayed to the user

## 🤝 Contributing

This is a portfolio project. Feel free to explore the code and reach out with questions!

## 📄 License

This project is for portfolio/demonstration purposes.

---

**Built with ❤️ using Ionic, Angular, and AWS**
