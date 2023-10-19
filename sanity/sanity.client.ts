import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "lo9nd4yz",
  dataset: "production",
  apiVersion: "2023-10-19",
  useCdn: false,
};

const client = createClient(config);

export default client;