import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: "skeToG562PEIgXD3xIqdSPyclhpGu3y2s6RqPi8NWIHnT1zORF65yY1Fr7yHH2WX3XRzGGiHuyN4PprXhmcnZi6UU9bxMhNvbRX0Mp8J81X01XXBan7rRruB3hXBgt32aXRvuUJKzcvLB8ow3XlYAP1H8wxwW9XBea8HETpHnRsb88M2d3xh",
  useCdn: false,
})
