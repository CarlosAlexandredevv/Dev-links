import { createClient } from '@/lib/prismic.io';
import { DevlinksDocument } from '@/model/devlinks';

export async function fetchDevlinksDocument(): Promise<DevlinksDocument> {
  try {
    const client = await createClient();
    const data = await client.getSingle('devlinks');
    return data as DevlinksDocument;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
