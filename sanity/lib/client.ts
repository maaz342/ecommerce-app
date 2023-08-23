import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skK4JEY2jdm8jZCj1Nki794yIDPdZmHcEklwi5b9Zytwz1xgDuWFErIejm3RHgBD4ov6i03wR3L9FWx8tw0ZNBfjIxqTkCcWTqx3Y7JlsOJdf8zS5jqrSrixDwh45jWlnraqpaACP9DzLwgxQ3Riq3IXVWq01qjGDVKdiJV4MW4zra6ENSdh"
})
