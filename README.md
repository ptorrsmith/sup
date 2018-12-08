# sup?


# Final Group Project - Bobbi, Ruby, James, Brandon, Peter

People need help sometimes, like a soup kitchen, a shelter.  
But it's no good walking all the way to one place or another only to find they're full or finished, or there was another place in the other direction that could've helped you that night.

This allows homeless shelters, food banks and kitches to quickly update how many beds, or meal, or food parcels they have left, so people in need can receive them.

And what other services do they offer? Can I see a JP or use the laundry there?  And where are the public toilets?


This web app allows anyone to easily find and see what's available, when and where.  And whilst still online, they can see any info updates from the shelters and kitchens.

If the shelters, kitchens etc are using the easy-update feature of our app, they can quickly hit the big '+' and '-' buttons to instantly update their status on the map.

And our app aims to work offline for when you go out of public wi-fi range so you can still find your way there, and it minimizes data usage when online.



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

## Users/Roles (n/a for MVP, i.e. no auth yet)
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
  | CreateService & EditService | View for admin-user to create and manage shelters, kitchens and other services, and manage provider-user access |
  | Login | View for admin-user and supplier-user to enter their login credentials (n/a for mvp, no auth) |
  | Register | View for supplier-user to sign up for the App to list their service (n/a for mvp, no auth) |


## Components for views  - TO DO >>> Bobbi / Ruby


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | providerServices | current store of providers and their services in search area (online and offline), visible / not visible on map |
  | currentView | lat long of current viewport (or centre + zoom), list of currently visible providers  
  | currentProvider | Provider being highlighted and viewed, and info about that. Also whilst being edited / managed by supplier-user |
  | currentService | Service being highlighted and viewed, and info about that. Also whilst being edited / managed by supplier-user |


### Future Reducers (not MVP)

  | name | purpose |
  | --- | --- |
  | users | store the list of supplier-users and admin-users |
  | auth | Store information regarding user logins, auth status and auth errors |



 ## Actions and Thunks

 ### services
 
 | type | name | data | purpose |
 | --- | --- | --- | --- |
 | thunk | getServices(search) | searchObject => services | retreive services from the db dispatch them to redux, only get new/updated |
 | action | GETTING_SERVICES | | spinner / info message |
 | action | RECEIVED_SERVICES | services | retreive services from the getServices thunk and set into redux state |
 | thunk | saveService() | service | Add/Save/Update a single service to the catalogue after it is created or updated. Then call for refresh of state?  Heavy data call, not desirable ! |
 | action | ADDING_SERVICE | service | spinner / info message |
 | action | UPDATING_SERVICE | service | spinner / info message |
 | action | SERVICE_SAVED | service (simple or just service id ??) | Confirmation from API after it is successfully created or updated |
 | action | SERVICES_ERROR | message | problem getting services or saving a service |


 ### currentService
 | type | name | data | purpose |
 | --- | --- | --- | --- |
| action | SHOW_SERVICE | | a service has been touched / clicked, show details |
| action | HIDE_SERVICE |  | close full service details component |  
|thunk | saveService(service) | [{serviceUpdates}] | send updated details, get confirmation |

 ### users  (n/a for MVP, i.e. no auth yet)
 | type | name | data | purpose |
 | --- | --- | --- | --- |
 | thunk | getUsers(search) | searchObj => users | retreive the supplier and admin users from the server |
 | action |RECEIVE_USERS | users | retreive the users from the server |
 | thunk | saveUser(user) | user | save new / update a supplier or admin user |

* plus other common actions (GETTING, SAVING, UPDATING)


## API Client / API (called by superagent)

API_Base/url: https://sup.org.nz/api/v1  

NOTE: API resources:  Providers, Services

| Method | Endpoint | Protected | Usage | Request-data | Response-data |
| --- | --- | --- | --- | --- | --- |
| Get | /providerservices | No | Get provider-services in search area (long, lat) (optional only for admin purposes), with option to exclude some providers as already have their info | { geoBox: {lat1, long1, lat2, long2}, exclude_providers: [23,34,46,42,23,56] } | An Array of providers with their services |
| Get | /liveupdates | No | get any new provider and service updates for these suppliers | [23,34,46,42,23,56] | [liveUpdates] |
| Post | /providers | Yes | create a new service provider | new-provider-info | new-provider-id |
| Put | /providers | Yes | update service provider (incl update-message) | updated-provider-info | confirmation |
| Post | /services | Yes | create a new service for an existing provider | provider_id, service-info | new-service-id |
| Put | /services | Yes | update a service (including qty change) | service_id, updated-service-info | confirmation | 
| Post | /auth/login | Yes | Log In a User | The Users JWT Token ||
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token ||

NOTE: only update values for properties provided (e.g. service qty / status updates)

### Example JSON data structures

#### ProviderServices
This to represent the JSON response from GET: /providers/

It MUST pass a {lat1,long1, lat2, long2} parameter to what geo-box to use to return the providers.  
NOTE: it can optionally pass a list of provider_ids to advice what info it does NOT need, otherwise it will get back all providerServices in that geo-box.  This for when zooming out, don't want existing provider info, just those we don't already have.

```sh
[
  {
  id: "23",
  name: "Wesley City Mission",
  address: "213 Abc Street, Thorndon, Wellington 6011",
  description: "We provide abc service, and xyz service",
  hours: "we're open 7 days from 3pm, doors close at 9:30pm",
  location: {lat, long},
  phone: "04-399-9990, or a/h 021-444-4444",
  email: "abcshelter@wcm.org.nz",
  services: [{service1}, {service2}, ...], // see service below
  images: [{title:"front entrance", file: 'img_39218392.jpg'}, {title:"common lounge area", file: 'img_39218345.jpg'}],
  update_message: "All services operating currently, but we will be opening late (5:30pm) on Tuesday 18th due to maintenance work that day"
  },
  { 
    another providerService
    },
  { 
    another providerService
    },
  { 
    another providerService
    }
]

// note: the update_message will be updated regularly via a call to the providerLive service... see below

```

#### Service  
This represent the JSON nested within the providerServices "services" array for each provider (see above).  It is not a route response payload in itself.  Just broken out here for clarity.
```sh

{
  id: "34",
  name: "Sunday lunch roast",
  description: "A shared roast lunch each sunday after the 11am service",
  service_type: "Meals",  // from the service_type table
  service_icon: "meals-kitchen", // represents the icon css class to be applied. from the service_type table
  qty_default: "140", // number of meals in this case 
  qty_remaining: "80",  // will be udpated by poll for provider updates 
  qty_remaining_last_updated: "2018-12-13 18:07:43", // or whatever date format works
  service_status: "Open",
  visible_on_map: "true" // depends on search/filtering for current view, i.e. only show shelter-services, not food-kitchen services
}

// note, no provider_id here, as the service objects are nested in the providerServices "services" array.  The provider id however does exist in the database.

// also, suggest we show qty_remaining always, however if same as qty_default, show as "total qty" (ie. may not be live-updated, so please phone to check), but if different (means provider is live-updating) then show as "live - qty remaining"
```


#### LiveUpdates 
##### Provider making live updates:
standard service for provider and service updates for updating all/any info,
however special "liveUpdate" services for the live updates:
* Provider > Update message >  /providers/:id/updatemessage (expects body to have property {"updateMessage": "the new message contents"}
* Service > Update availability > /services/:id/updateAvailability (expects body to have property {"qty_remaining": 34}
* Service > Update status > /services/:id/updateStatus (expects body to have property ```sh{"status": "closed"}```

##### Provider making live updates:
Our react app can poll for updates on a regular basis.  It MUST send a list of provider_ids for which it wants any updates (i.e. in geobox), and it will get back an array of providerServices updates (only things that have changed).
The client is going to have to then apply those changes to it's providerServices array in redux state.

Ideally, we pass through a list of providerIds we want updates from, AND a timestamp of when we last got updates.
BUT for first cut, we'll just return all required values for all providers.

We will have a single special route for getting the providerService updates:
* Get updates > /provicerServices/liveupdates

This represents the JSON response back from GET: api/v1/providerServices/liveupdates

```sh
{
  updates: [
    {
      provider_id: "24",
      update_message: "All services operating currently, but we will be opening a tad later (4pm) on Tuesday 18th due to minor maintenance work that day",
      service_updates: [
        {
          service_id: "34",
          qty_remaining: "75"
        },
        {
          service_id: "38",
          qty_remaining: "0",
          service_status: "Closed"
        }
      ]
    },
    {
      provider_id: "35",
      service_updates: [
        {
          service_id: "63",
          qty_remaining: "47"
        }
      ]
    },
    {
      provider_id: "67",
      update_message: "All services operating currently, but we will be opening a tad later (4pm) on Tuesday 18th due to minor maintenance work that day"
    },
  ],
  update_timestamp: "2018-12-13 18:23:00" // the datetime of when these updates were polled. Will be used to update the qty_remaining_last_updated value for the service
}
```



#### Note on service status  (n/a for MVP)
|STATUS|purpose|
|---|---|
|PENDING|service has not yet been approved to show |
|ACTIVE|service is approved and in search results|
|INACTIVE|service has been de-listed for some reason|


## DB (Server Side).  NoSQL could be useful for MVP, but a bit of a stretch
  There could be at least four tables for MVP (actually three if we exclude users for MVP, i.e. no Auth yet)
  * services  // this is what shows on the map, has service qty/count
  * service_type // for service classification, icon type (className)
  * providers  // they provide the service, have phone numbers etc
  * users (supplier and admin)

### Users

| Column Name | Data Type |
| --- | --- |
| id | Integer |
| user_name | String |
| email | String |
| hash | text |
| created_at | Timestamp |
| updated_at | Timestamp |

### Providers 
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | name | String |
  | description | text |
  | address | integer |
  | updated_message | text |
  | lat | decimal |
  | long | decimal |
  | email | string |
  | phone | string |
  | hours | string |
  | website_url | string |
  | created_at | Timestamp |
  | updated_at | Timestamp |
  
### Services 
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | name | String |
  | qty_default | Integer |
  | qty_remaining | Integer |
  | status | string |
  | provider_id | integer |
  | service_type_id | integer |
  | created_at | Timestamp |
  | updated_at | Timestamp |

### service-type 
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | service_code | string|
  | name | String |
  | icon | String |
  | created_at | Timestamp |
  | updated_at | Timestamp |


#### NOTE: Service Types:

| Service Type name | code | icon (className) |
| --- | --- | --- |
| Shelters | SHELTER | shelter |
| Food Banks | FOODBANK | foodbank |
| Soup Kitchens | KITCHEN | kitchen |
| Advice | ADVICE (was support) | advice |
| Drop-in | DROPIN (was support) | dropin |
| Medical | MEDICAL (was support) | medical |
| Other (e.g. furniture) | OTHER | other |



Note: icon represents the css-class 
 ---



![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_124802.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_142538.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_145705.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_173003.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_173008.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_173013.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_173017.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_173020.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/IMG_20181205_173025.jpg "title")
![alt text](https://github.com/ptorrsmith/sup/blob/master/readme_files/images/20181206_114314.jpg "title")












# \/ from original $MTM readme


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
