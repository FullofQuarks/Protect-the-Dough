# Protect the Dough

This is the Readme for the project.

## Architecture
* Frontend: [Angular](https://angular.io/)
    * If a refresher is needed, or this is your first time with Angular, it is highly recommended to take the [Tour of Heroes](https://angular.io/tutorial) tutorial. This introduces some key Angular concepts, such as Components, Services, and how some components can communicate with one another
    * TODO: Should we use Redux? This would allow for better state management, but may be too bulky for this app
* Backend: Not sure yet
    * [NodeJS](https://nodejs.org/en/)
    * [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.0)
    * [Ruby](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one) - This looks to be what is preferred.
    * Whatever the backend is, the easiest way to communicate with the frontend is through JSON, and vice versa. This will ensure a 1:1 mapping between backend DTOs and frontend models.
    * TODO: Database architecture - Which flavor of SQL? How to store user credentials in the database? How will this work with the facial recognition?
* CI/CD:
    * [Drone.io](https://drone.protectthedough.shop) - self-service, Continuous Delivery platform. Works with SSO, so sign into Gitea first.
* App differences
    * An idea was to create a facial recognition sign-in feature to the website. This would work on a computer only.
    * Another idea was to create a DApp on a test Ethereum blockchain. An example of this can be seen [here](https://medium.com/coinmonks/build-a-dapp-using-ethereum-and-angular-6-a404fbf3c08d)
