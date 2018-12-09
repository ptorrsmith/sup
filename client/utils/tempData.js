export let exampleLiveService = {
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

export let data = [
    {
        id: "23",
        name: "Wesley City Mission",
        address: "213 Abc Street, Thorndon, Wellington 6011",
        description: "We provide abc service, and xyz service",
        hours: "we're open 7 days from 3pm, doors close at 9:30pm",
        location: { lat: 1, long: 1 },
        phone: "04-399-9990, or a/h 021-444-4444",
        email: "abcshelter@wcm.org.nz",
        services: [
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
        ],
        images: [{ title: "front entrance", file: 'img_39218392.jpg' }, { title: "common lounge area", file: 'img_39218345.jpg' }],
        update_message: "All services operating currently, but we will be opening late (5:30pm) on Tuesday 18th due to maintenance work that day"
    }
];


export function getData() {



    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (true) {
                resolve(data);
            }
            else {
                reject("How did this even happen")
            }
        }, 10)


    })
}



export function getLiveUpdates(services) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (true) {
                resolve(exampleLiveService);
            }
            else {
                reject("How did this even happen")
            }
        }, 10)


    })
}