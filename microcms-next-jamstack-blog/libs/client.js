import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'yurutech',
  apiKey: process.env.API_KEY,
  // apiKey: '1b692038c6554ffb89c3afbce06a0e278ea9',
});
