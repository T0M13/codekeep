import { error } from '@sveltejs/kit';
import { getTopic } from '$lib/content.js';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

export function load({ params, locals }) {
  const topic = getTopic(params.topic);
  if (!topic) throw error(404, 'Topic not found');

  const refDir = path.join(process.cwd(), 'src', 'content', params.topic, 'ref');
  const indexPath = path.join(refDir, '_index.json');
  const itemPath = path.join(refDir, `${params.item}.md`);

  if (!fs.existsSync(itemPath)) throw error(404, 'Reference item not found');

  // Parse index for sidebar
  let groups = [];
  if (fs.existsSync(indexPath)) {
    const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    for (const group of index.groups) {
      const available = group.items.filter(item =>
        fs.existsSync(path.join(refDir, `${item}.md`))
      );
      if (available.length > 0) {
        groups.push({ label: group.label, items: available });
      }
    }
  }

  // Parse markdown content
  const raw = fs.readFileSync(itemPath, 'utf-8');
  const html = marked(raw);

  return {
    topic,
    groups,
    currentItem: params.item,
    html,
    user: locals.user
  };
}
