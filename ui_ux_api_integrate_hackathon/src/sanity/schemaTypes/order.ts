
// export default {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//         {
//             name: 'firstName',
//             type: 'string',
//             title: 'First Name'
//         },
//         {
//             name: 'lastName',
//             type: 'string',
//             title: 'Last Name'
//         },
//         {
//             name: 'address',
//             type: 'string',
//             title: 'Address'
//         },
//         {
//             name: 'email',
//             type: 'string',
//             title: 'Email'
//         },
//         {
//             name: 'phone',
//             type: 'number',
//             title: 'Phone'
//         },
//         {
//             name: 'zipCode',
//             type: 'string',
//             title: 'Zip Code'
//         },
//         {
//             name: 'city',
//             type: 'string',
//             title: 'City'
//         },
//         {
//             name: 'discount',
//             type: 'number',
//             title: 'Discount'
//         },
//         {
//             name: 'cartItems',
//             type: 'array',
//             title: 'Cart Items',
//             of: [{type: 'reference', to: {type: 'products'}}]
//         },
//         {
//             name: 'total',
//             type: 'number',
//             title: 'Total'
//         },
//         {
//             name: 'status',
//             title: 'Order Status',
//             type: 'string',
//             options: {
//                 list: [
//                     {title: 'Pending', value: 'pending'},
//                     {title: 'Success', value: 'success'},
//                     {title: 'Dispatch', value: 'dispatch'},
//                 ],
//                 layout: 'radio'
//             },
//             initialValue: 'pending'
//         }
//     ]
// }

import { title } from "process";


export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            type: "string"
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
        {
            name: "phone",
            title: "Phone",
            type: "number"
        },
        {
            name: "city",
            title: "City",
            type: "string"
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string"
        },
        {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [{ type: "reference", to: { type: "products" } }]
        },
        {
            name: "total",
            title: "Total",
            type: "number"
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    {title: "Pending", value: "pending"},
                    {title: "Success", value: "success"},
                    {title: "Dispatch", value: "dispatch"},
                ],
                layout: "radio"
            },
            initialValue: "pending"
        },
    ]
}