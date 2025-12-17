# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account
1. Go to https://cloud.mongodb.com
2. Sign up for free account
3. Create a new project

## Step 2: Create Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0 Sandbox)
3. Select cloud provider and region
4. Click "Create Cluster"

## Step 3: Create Database User
1. Go to "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Enter username and password (remember these!)
5. Set role to "Atlas Admin" or "Read and write to any database"
6. Click "Add User"

## Step 4: Configure Network Access
1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

## Step 5: Get Connection String
1. Go to "Database" in left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace <password> with your actual password

## Step 6: Update .env File
Replace the MONGODB_URI in your .env file:
```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/college_management?retryWrites=true&w=majority
```

Example:
```
MONGODB_URI=mongodb+srv://john:mypassword123@cluster0.abc123.mongodb.net/college_management?retryWrites=true&w=majority
```