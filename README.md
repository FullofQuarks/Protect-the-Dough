# Protect the Dough
[![Build Status](https://drone.protectthedough.shop/api/badges/nick/protect-the-dough/status.svg)](https://drone.protectthedough.shop/nick/protect-the-dough)

This is the Readme for the project.

## Architecture
* Frontend: [Angular](https://angular.io/)
    * If a refresher is needed, or this is your first time with Angular, it is highly recommended to take the [Tour of Heroes](https://angular.io/tutorial) tutorial. This introduces some key Angular concepts, such as Components, Services, and how some components can communicate with one another
* Frontend Logic: NgRx
    * NgRx = Angular Redux: This is a state-management tool, useful for keeping track of information needed site-wide. This eliminates the need for multiple services, subjects, or guards to share data amongst all components. 
    * In-depth description located in wiki.
    * Install the Redux Devtools extension for Chrome, located [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
    * **Important!** Please read [this](https://git.protectthedough.shop/nick/protect-the-dough/wiki/NgRx%3A-Angular-Redux) wiki article!
* Backend: Not sure yet
    * [Ruby](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one) - This looks to be what is preferred.
* Database: [MongoDB](https://docs.mongodb.com/manual/introduction/)
* CI/CD:
    * [Drone.io](https://drone.protectthedough.shop) - self-service, Continuous Delivery platform. Works with SSO, so sign into Gitea first.
* App differences
    * An idea was to create a facial recognition sign-in feature to the website. This would work on a computer only.
    * Another idea was to create a DApp on a test Ethereum blockchain. An example of this can be seen [here](https://medium.com/coinmonks/build-a-dapp-using-ethereum-and-angular-6-a404fbf3c08d)
