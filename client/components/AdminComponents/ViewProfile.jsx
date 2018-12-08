// CHILD OF VIEW PREVIEW - REDIRECTS HERE FROM PROFILE LIST
import React from 'react'

// TEMPORARY DATA
import data from '../../utils/exampleData'

console.log(data)

// let components = data.map( (item) => {
//     return item
// })

// console.log(components)

const ViewProfile = () => (
    <div className="view_profile_body">

       <ul>
            {data.map( (item) => { 
                return <li>{item.provider_name} <br></br> {item.hours} <br></br> {item.address} <br></br> {item.update_message} </li>
            })}
        </ul>

        {/* SERVICE:
        id:
        name:
        description:
        service_type:
        service_icon:
        qty_default:
        qty_remaining:
        qty_remaining_last_updated:
        service_status: 
    */}

        {/* PROVIDER:
        id: 
        name:
        address:
        description:
        hours:
        location:
        phone:
        email:
        services:
        images:
        update_message: 
        */}

</div>
)

export default ViewProfile