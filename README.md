# sup?


# Final Group Project - Bobbi, Ruby, James, Brandon, Peter

People need help sometimes, like a soup kitchen, a shelter.  
But it's no good walking all the way to one place or another only to find they're full or finished, or there was another place in the other direction that could've helped you that night.

This allows homeless shelters, food banks and kitches to quickly update how many beds, or meal, or food parcels they have left, so people in need can receive them.

And what other services do they offer? Can I see a JP or use the laundry there?  And where are the public toilets?


This web app allows anyone to easily find and see what's available, when and where.  And whilst still online, they can see any info updates from the shelters and kitchens.

If the shelters, kitchens etc are using the easy-update feature of our app, they can quickly hit the big '+' and '-' buttons to instantly update their status on the map.

And our app aims to work offline for when you go out of public wi-fi range so you can still find your way there.



## User Stories

### MVP

As a user:
  * I want to
  * 
As a supplier
  * I want to

### Stretch
* As a <persona> I want to be able to 

  ---

## Users
  * user - standard user (anonymous)
  * supplier-user - updates service information and status
  * admin-user - creates services and manages the system

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Map and slide-panel | navigable map showing close-by shelters, kitchens, food-banks, with icons showing service type and service level (beds / meals remaining) |
  | Service details view | Full details, hours, location, phone number, etc |
  | manage current service level | beds / meals etc remaining, open/closing/shut status, status notice ("no hot water currently due to burst pipe") |
  | manage service general information | Update the service name, services offerred, address, hours, phone number, code of conduct, expected demand daily profile, etc |
  | Login | View for admin-user and supplier-user to enter their login credentials |
  | Register | View for supplier-user to sign up for the App to list their service |
  | CreateService & EditService | View for admin-user to create and manage shelters, kitchens and other services, and manage provider-user access |



## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | map | map information in view / cache (offline and online) |
  | services | current store of services in search area (online and offline), visible / not visible on map |
  | currentService | Service being highlighted and viewed, and info about that. Also whilst being edited / managed by supplier-user |
  | users | store the list of supplier-users and admin-users |
  | auth | Store information regarding user logins, auth status and auth errors |



 ## Actions and Thunks

 ### services
 
 | type | name | data | purpose |
 | --- | --- | --- | --- |
 | thunk | getServices(search) | searchObject => services | retreive services from the db dispatch them to redux, only get new/updated |
 | action | GETTING_SERVICES | | spinner / info message |
 | action | RECEIVED_SERVICES | services | retreive services from the getServices thunk and set into redux state, and local storage (or from local storage?) ?? |
 | thunk | saveService() | service | Add/Save/Update a single service to the catalogue after it is created or updated. Then call for refresh of state?  Heavy data call, not desirable ! |
 | action | ADDING_SERVICE | service | spinner / info message |
 | action | UPDATING_SERVICE | service | spinner / info message |
 | action | SERVICE_SAVED | service (simple or just service id ??) | Confirmation from API after it is successfully created or updated |
 | action | SERVICES_ERROR | message | problem getting services or saving a service |


 ### map
 | type | name | data | purpose |
 | --- | --- | --- | --- |
 | thunk | getUsers(search) | searchObj => users | retreive the supplier and admin users from the server |
 | action |RECEIVE_USERS | users | retreive the users from the server |

* plus other common actions (GETTING, SAVING, UPDATING)


 ### users
 | type | name | data | purpose |
 | --- | --- | --- | --- |
 | thunk | getUsers(search) | searchObj => users | retreive the supplier and admin users from the server |
 | action |RECEIVE_USERS | users | retreive the users from the server |

* plus other common actions (GETTING, SAVING, UPDATING)


 ### currentService
 | type | name | data | purpose |
 | --- | --- | --- | --- |
|| SHOW_SERVICE | ?? | a service has started, set initial service state |
|| END_SERVICE | null | Set service in progress flag to false |  
|| TICK_ONE_SECOND | null | Increase running total and duration by 1s worth of $ |
|| RESET_SERVICE | null | (FUTURE/STRETCH - not MVP) Revert to initial state |  



## API Client / superagent

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/services | No | Get services in search | An Array of Services |
| Get | /api/map | No | Get map related resources | map stuff ??? |
| Post | /api/services | Yes | Save a completed service | The Service that has been saved in db read format |
| 
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |

### Example data structures

#### Service
```sh
{
  id: 3,
  name: "What next?",
  address:
  etc etc:
  hours: {} // may hold busy forecast info not just standard hours / meal-times/types
}
```

#### Note on service status
|STATUS|purpose|
|---|---|
|PENDING|service has not yet been approved to show |
|ACTIVE|service is approved and in search results|
|INACTIVE|service has been de-listed for some reason|


## DB (Server Side).  NoSQL could be useful for MVP, but a bit of a stretch
  There could be several tables for MVP
  * services  // this is what shows on the map, has service qty/count
  * service_provider  // they provide the service, have phone numbers etc
  * users (supplier and admin)

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String |
  | first_name | String |
  | last_name | String |
  | hash | text |

### Services ( and service providers for now)
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | service_name | String |
  | address | integer |
  | time | Timestamp |
  | cost | Decimal |

 ---


# \/ from original STMT readme


## Setup

Run the following commands in your terminal:

```sh
yarn install
yarn knex migrate:latest
yarn knex seed:run
mv .env_example .env
```

To run in development:
```sh
yarn dev
 - or -
npm run dev

```

To run in production:
```sh
yarn start
  - or -
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app

### Add heroku remote to local git configuration

On the heroku dashboard > settings it will show you the heroku .git repository address.
On your machine, type
```sh
git remote add heroku <your-heroku-app-address.git>
```
confirm it's configured with
```sh
git remote -v
```



### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
