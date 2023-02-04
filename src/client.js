
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mmztgwe3',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'sk6dhsF8yHeXHOTFYKTCj7mc4yTjl1n5bGpOxZjid8Mw1gN9V5wTclY8HoqpCfCRqT8DZLBYS5NxP7OjTsbTNezz7wcK4dTffu9Bdtzl3sFvOlY5p1mGVWNS4ywMFCQt5Nc4AorcxQWh94QZWQClBao4BattacAnMwDsYoPOwZpxT9xUiYy9',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);