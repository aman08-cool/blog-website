// import { createClient } from "next-sanity";
// import createImageUrlBuilder from "@sanity/image-url";
// import { projectId, apiVersion } from "./sanity/env";

// const projectId = process.env.NEXT_PUBLIC_SANTITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANTITY_DATASET;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// export const config = {
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true,
// };

// export const sanityClient = createClient(config);
// export const urlFor = (source) => createImageUrlBuilder(config).image(source);

import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { projectId, apiVersion } from "./sanity/env";

const dataset = process.env.NEXT_PUBLIC_SANTITY_DATASET;
export const config = {
  projectId,
  // dataset: "production",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion,
  useCdn: true,
};

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
