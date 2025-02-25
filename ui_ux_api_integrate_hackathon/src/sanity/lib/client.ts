import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: "skm1e6qzDpdh2WJAnHZcfuoao4gxXVHHyxXukRpSmwSpzdOaWLZlH0N2BAYn77upxLkL5SCsgRtkAuvAIRKmi09hsHo9cuAOIR4rKTE1IDjt9kq9KhZnw7cQfaRuxav5SU4kkPm73FpAitjlG5vKRHSNyv5jPSjC0vszt5F7XCLQX6L4H5z6",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
