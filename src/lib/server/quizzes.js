export const quizzes = {
  html: {
    title: 'HTML Foundations Test',
    description: 'Elements, semantics, links, media, and forms',
    questions: [
      {
        id: 'semantic-main',
        prompt: 'Which element should wrap the primary content unique to a page?',
        options: ['<section>', '<main>', '<div>', '<body>'],
        answer: 1,
        explanation: '<main> identifies the page\'s dominant content. A document should normally have one visible main element.',
        reference: '/reference/html/main'
      },
      {
        id: 'image-alt',
        prompt: 'What is the purpose of the alt attribute on an image?',
        options: ['Set image size', 'Provide a text alternative', 'Load the image lazily', 'Add a tooltip'],
        answer: 1,
        explanation: 'alt provides an accessible text alternative when the image cannot be seen or loaded.',
        reference: '/reference/html/img'
      },
      {
        id: 'label-input',
        prompt: 'How should a label be connected to an input with id="email"?',
        options: ['name="email"', 'target="email"', 'for="email"', 'input="email"'],
        answer: 2,
        explanation: 'A label\'s for value must match the input\'s id.',
        reference: '/reference/html/label'
      },
      {
        id: 'ordered-list',
        prompt: 'Which element represents a list where item order matters?',
        options: ['<ul>', '<dl>', '<ol>', '<list>'],
        answer: 2,
        explanation: '<ol> creates an ordered list; <ul> is for unordered items and <dl> is for name-value groups.',
        reference: '/reference/html/ol'
      },
      {
        id: 'safe-blank-link',
        prompt: 'Which rel value is a sensible security companion for target="_blank"?',
        options: ['external', 'alternate', 'noopener', 'bookmark'],
        answer: 2,
        explanation: 'noopener prevents the opened page from controlling the opener through window.opener.',
        reference: '/reference/html/a'
      }
    ]
  },
  css: {
    title: 'CSS Layout Test',
    description: 'Cascade, box model, Flexbox, Grid, and responsive sizing',
    questions: [
      {
        id: 'border-box',
        prompt: 'With box-sizing: border-box, what does a declared width include?',
        options: ['Content only', 'Content and padding only', 'Content, padding, and border', 'Margin and border only'],
        answer: 2,
        explanation: 'border-box keeps padding and borders inside the declared width; margins remain outside.',
        reference: '/reference/css/box-sizing'
      },
      {
        id: 'flex-main-axis',
        prompt: 'Which property aligns flex items along the main axis?',
        options: ['align-items', 'justify-content', 'place-self', 'vertical-align'],
        answer: 1,
        explanation: 'justify-content distributes items on the main axis. align-items works on the cross axis.',
        reference: '/reference/css/justify-content'
      },
      {
        id: 'hide-layout',
        prompt: 'Which declaration removes an element and its layout space?',
        options: ['opacity: 0', 'visibility: hidden', 'display: none', 'overflow: hidden'],
        answer: 2,
        explanation: 'display: none removes the element from layout. opacity and visibility preserve its space.',
        reference: '/reference/css/display'
      },
      {
        id: 'grid-repeat',
        prompt: 'Which value creates three equal grid columns?',
        options: ['repeat(3, 1fr)', '3 * 1fr', 'columns(3)', '1fr 3'],
        answer: 0,
        explanation: 'repeat(3, 1fr) expands to three equal 1fr tracks.',
        reference: '/reference/css/grid-template'
      },
      {
        id: 'stacking',
        prompt: 'When can z-index affect an element?',
        options: ['Only with display: grid', 'When it participates in a stacking context, commonly when positioned', 'Only on images', 'Only with a negative value'],
        answer: 1,
        explanation: 'z-index orders stacking-context participants, including positioned elements and flex or grid items.',
        reference: '/reference/css/z-index'
      }
    ]
  },
  javascript: {
    title: 'JavaScript Core Test',
    description: 'Types, control flow, functions, collections, and async code',
    questions: [
      {
        id: 'strict-equality',
        prompt: 'What does === compare?',
        options: ['Value after coercion', 'Type only', 'Value and type without coercion', 'Object contents recursively'],
        answer: 2,
        explanation: 'Strict equality compares without converting operand types.',
        reference: '/reference/javascript/operators'
      },
      {
        id: 'const-object',
        prompt: 'What can you do with an object stored in a const variable?',
        options: ['Reassign the variable', 'Change its properties', 'Neither', 'Only freeze it'],
        answer: 1,
        explanation: 'const prevents reassignment of the binding; it does not make the object immutable.',
        reference: '/reference/javascript/variables'
      },
      {
        id: 'array-map',
        prompt: 'Which array method returns a new array by transforming every item?',
        options: ['forEach', 'find', 'map', 'some'],
        answer: 2,
        explanation: 'map applies a callback to every item and returns the transformed results in a new array.',
        reference: '/reference/javascript/map-filter-reduce'
      },
      {
        id: 'await',
        prompt: 'Where can await normally be used?',
        options: ['Any regular function', 'An async function or supported module top level', 'Only a Promise constructor', 'Only inside fetch'],
        answer: 1,
        explanation: 'await is valid in async functions and at the top level of JavaScript modules in supporting environments.',
        reference: '/reference/javascript/async-await'
      },
      {
        id: 'for-of',
        prompt: 'What does for...of iterate over for an array?',
        options: ['Property names', 'Array values', 'Indexes only', 'Prototype methods'],
        answer: 1,
        explanation: 'for...of reads iterable values. for...in reads enumerable property keys.',
        reference: '/reference/javascript/for-of'
      }
    ]
  }
};

export function getQuiz(topic) {
  return quizzes[topic] || null;
}
