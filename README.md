# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Deployment Guide: Launching Your Site with Firebase App Hosting

Deploying your Next.js application with Firebase App Hosting and connecting it to a custom domain is a straightforward process. Here’s a step-by-step guide to get your site live.

### Step 1: Push Your Code to a Git Repository

Before you can deploy, your code needs to be stored in a cloud-based Git repository. Platforms like **GitHub**, **GitLab**, or **Bitbucket** are perfect for this.

1.  **Create a new repository** on your preferred platform (e.g., GitHub).
2.  Follow the instructions provided to **push your local project code** to the new repository. This will serve as the source for your live website.

### Step 2: Navigate to Firebase App Hosting

Your project is already configured to use **Firebase App Hosting**, a fully-managed service for modern web apps.

1.  **Open your project** in the [Firebase Console](https://console.firebase.google.com/).
2.  In the left-hand menu, navigate to the **Build** section and click on **App Hosting**.

### Step 3: Connect Your Repository and Create a Backend

1.  **Follow the on-screen prompts** to connect your GitHub account and select the repository you created in Step 1.
2.  App Hosting will automatically detect your Next.js framework and configure the build and run settings. You typically don't need to change anything here.
3.  Proceed to create the backend. Firebase will start the initial deployment.

### Step 4: Add Your Environment Variables

Your application relies on secret keys (like for Firebase itself) that are stored in your local `.env` file. These keys are not pushed to your Git repository for security reasons. You must add them to App Hosting's configuration.

1.  In your App Hosting dashboard, find the settings for your backend.
2.  Go to the **Environment Variables** section.
3.  Copy each key-value pair from your `.env` file and add them one by one. For example:
    *   `NEXT_PUBLIC_FIREBASE_API_KEY` = `your_value_here`
    *   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` = `your_value_here`
    *   And so on for all other variables.

This is a **critical step**. Without these variables, your application will not be able to connect to Firebase services.

### Step 5: Automatic Deployments

Once configured, App Hosting will automatically build and deploy your site every time you push new code to your main branch. You can monitor the status of your deployments in the App Hosting dashboard.

After the first deployment is complete, your site will be live on a default URL (e.g., `your-project--app.web.app`).

### Step 6: Connect Your Custom Domain

The final step is to point your custom domain (e.g., `thesilent.studioboom.online`) to your newly deployed site.

1.  In the App Hosting dashboard, click **"Add custom domain"**.
2.  Enter your custom domain.
3.  Firebase will provide you with DNS records (usually `A` or `TXT` records). You will need to log in to your domain registrar (where you purchased `studioboom.online`) and add these records.
4.  After you've added the DNS records, it may take some time for the changes to propagate. Once verified, Firebase will automatically provision an SSL certificate, and your site will be live and secure at your custom domain.
