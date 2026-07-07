# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Deployment Guide: Launching Your Site with a Custom Domain

Deploying your Next.js application and connecting it to your custom domain is a straightforward process. Here’s a step-by-step guide to help you get your site live.

### Step 1: Push Your Code to a Git Repository

Before you can deploy your site, your code needs to be stored in a cloud-based Git repository. Platforms like **GitHub**, **GitLab**, or **Bitbucket** are perfect for this.

1.  **Create a new repository** on your preferred platform (e.g., GitHub).
2.  Follow the instructions provided to **push your local project code** to the new repository. This will serve as the source for your live website.

### Step 2: Choose and Configure Your Hosting Provider

Next.js applications run best on modern hosting platforms that support its features. Since you are using **Hostinger**, you can follow their specific workflow for Next.js.

*   **Hostinger**: Provides features for deploying modern JavaScript applications, including connecting directly to your Git repository.
*   **Other Recommended Options**: Vercel (by the makers of Next.js) and Netlify are also excellent, streamlined choices.

### Step 3: Connect Your Repository and Deploy on Hostinger

Hostinger allows you to deploy directly from your Git repository.

1.  **Log in to your Hostinger hPanel**.
2.  Navigate to the **"Advanced"** section in the sidebar and click on **"Git"**.
3.  **Connect your Git repository**:
    *   Paste the HTTPS URL of your GitHub (or other) repository.
    *   Choose the branch you want to deploy (usually `main` or `master`).
    *   Leave the directory field empty if your project is in the root of the repository.
4.  **Configure Build Settings**: Hostinger will likely detect it's a Node.js project. Ensure the build commands are set up:
    *   **Install Command**: `npm install`
    *   **Build Command**: `npm run build`
    *   **Start Command**: `npm start`
5.  Follow Hostinger's official guide for the most up-to-date steps: [How to Deploy a Next.js Application at Hostinger](https://www.hostinger.com/tutorials/deploy-nextjs-app).

### Step 4: Add Your Environment Variables

Your application relies on secret keys (like for PayPal and Firebase) that are stored in your local `.env` file. These keys are not pushed to your Git repository for security reasons. You must add them to your hosting provider's settings.

1.  In your Hostinger hPanel, find the **"Environment Variables"** section for your project (often under "Advanced" or in your site's dashboard).
2.  Copy each key-value pair from your `.env` file and add them one by one. For example:
    *   `NEXT_PUBLIC_FIREBASE_API_KEY` = `your_value_here`
    *   `PAYPAL_CLIENT_ID` = `your_value_here`
    *   And so on for all the other variables.

This is a **critical step**. Without these variables, your application will not be able to connect to Firebase or process payments.

### Step 5: Deploy Your Site

After configuring the repository and environment variables, **trigger a deployment**. Hostinger's Git integration allows for automatic deployments. Any future push to your main branch in GitHub will also trigger a new deployment automatically, keeping your site up-to-date.

Once the deployment is complete, your site will be live on a temporary URL provided by Hostinger.

### Step 6: Connect Your Custom Domain

The final step is to point your custom domain (e.g., `www.yourdomain.com`) to your newly deployed site.

1.  Go to the **"Domains"** section in your Hostinger hPanel.
2.  **Add your custom domain**.
3.  Hostinger will provide instructions to update your **DNS records**. If your domain is also registered with Hostinger, this process is often automated. If it's with another registrar (like GoDaddy, Namecheap, etc.), you will need to log in there and update the records as instructed.

DNS changes can take anywhere from a few minutes to a few hours to propagate across the internet. Once they do, your website will be live at your custom domain! Hostinger will also typically provision a free SSL certificate for you, so your site will be secure with `https://`.
