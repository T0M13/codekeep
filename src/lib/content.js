const topicMeta = {
  html: {
    title: 'HTML',
    description: 'The backbone of every web page',
    icon: '< >',
    color: 'orange',
    order: 1
  },
  css: {
    title: 'CSS',
    description: 'Make things beautiful',
    icon: '{ }',
    color: 'blue',
    order: 2
  },
  javascript: {
    title: 'JavaScript',
    description: 'Bring pages to life',
    icon: 'JS',
    color: 'yellow',
    order: 3
  },
  python: {
    title: 'Python',
    description: 'The versatile language',
    icon: 'Py',
    color: 'green',
    order: 4
  },
  sql: {
    title: 'SQL',
    description: 'Talk to databases',
    icon: 'DB',
    color: 'purple',
    order: 5
  },
  git: {
    title: 'Git',
    description: 'Version control mastery',
    icon: '>>',
    color: 'red',
    order: 6
  }
};

const topicColors = {
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', icon: 'bg-orange-500' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'bg-blue-500' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', icon: 'bg-yellow-500' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', icon: 'bg-green-500' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'bg-purple-500' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', icon: 'bg-red-500' }
};

export function getTopics() {
  return Object.entries(topicMeta)
    .map(([slug, meta]) => ({ slug, ...meta, colors: topicColors[meta.color] }))
    .sort((a, b) => a.order - b.order);
}

export function getTopic(slug) {
  const meta = topicMeta[slug];
  if (!meta) return null;
  return { slug, ...meta, colors: topicColors[meta.color] };
}
