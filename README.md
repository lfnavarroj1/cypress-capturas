# Cypress testing in web app

## Requirement

*  [Ghost installed and running](https://ghost.org/docs/install/local/)
*  [Cypress](https://www.cypress.io/)

## Steps to run the test

1. Go to the Ghost-Cypress folder.
2. For some reason, the embers are not stable so In profile.spec.cy.js replace #ember59 according with My Profile button's ember.
3. Execute the command:
    ```sh        
        cypress open
    ```
4. Click on "E2E testing".
5. Choose Chrome browser from the list.
6. Click on "Start E2E Testing in Chrome" (a chrome screen will appear).
7. Click on any spec.
8. Watch e2e test running.

## Explanation of code

1. Inside the cypress/e2e folder are the createAccount, register, login, profile, forgot and dashboard features in Gherkin language into the describes.

## Evidence

### Ghost running
![ghost](evidence/ghost.PNG) 

### Create Account
![createAccount](evidence/createAccount.PNG) 

### Forgot
![forgot](evidence/forgot.PNG) 


### Dashboard
![dashboard](evidence/dashboard.PNG) 

#### By students Jorge, Rodolfo, Luis, Steven
