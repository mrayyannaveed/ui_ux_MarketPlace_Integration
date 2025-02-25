import { createClient } from "next-sanity";



const client = createClient({
    projectId: "atk7f2mq",
    dataset: "production",
    apiVersion: "2023-10-10",
    useCdn: true
}) 


export async function sanityFetch({query, params = {}}: {query: string, params?: any}){
    return await client.fetch(query, params)
} 