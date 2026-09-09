import { error, redirect } from '@sveltejs/kit';
import { getTopic } from '$lib/content.js';
import fs from 'fs';
import path from 'path';

export function load({ params }) {
  const topic = getTopic(params.topic);
  if (!topic) throw error(404, 'Topic not found');

  const refDir = path.join(process.cwd(), 'src', 'content', params.topic, 'ref');
  const indexPath = path.join(refDir, '_index.json');

  if (!fs.existsSync(indexPath)) {
    throw error(404, 'Reference not available for this topic');
  }

  const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

  // Collect all available items (only ones that have a .md file)
  const allItems = [];
  for (const group of index.groups) {
    const available = group.items.filter(item =>
      fs.existsSync(path.join(refDir, `${item}.md`))
    );
    if (available.length > 0) {
      allItems.push({ label: group.label, items: available });
    }
  }

  const firstItem = allItems[0]?.items[0];
  if (!firstItem) throw error(404, 'Reference not available for this topic');
  throw redirect(307, `/reference/${topic.slug}/${firstItem}`);
}
