# FUT Countdowns

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

https://ambitious-desert-097d47200.azurestaticapps.net/

## Run the application

While in the root directory run the following commands:

Resolve app dependencies:
```
npm i
```
Start the application:
```
npm start
```

## DevOps (CI/CD)

This application is hosted as an Azure Static Web App.

When a pull request is created, a link to the staging environment will be posted by the Azure bot to smoke test any changes.

On merge/push to `main` the GitHub Action that was setup is kicked off which will build & deploy the application to the Azure Static Web App.