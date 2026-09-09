import fs from 'fs';
import path from 'path';
import { getTopics } from '$lib/content.js';

export function load() {
  const topics = getTopics().flatMap((topic) => {
    const refDir = path.join(process.cwd(), 'src', 'content', topic.slug, 'ref');
    const indexPath = path.join(refDir, '_index.json');
    if (!fs.existsSync(indexPath)) return [];

    const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    const count = index.groups.reduce((total, group) => {
      return total + group.items.filter((item) => fs.existsSync(path.join(refDir, `${item}.md`))).length;
    }, 0);

    return count > 0 ? [{ ...topic, referenceCount: count }] : [];
  });

  return { topics };
}
