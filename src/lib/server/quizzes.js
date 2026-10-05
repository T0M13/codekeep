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
  },
  python: {
    title: 'Python Fundamentals Test',
    description: 'Variables, strings, lists, functions, and control flow',
    questions: [
      {
        id: 'py-type-check',
        prompt: 'How do you check the type of a variable in Python?',
        options: ['typeof(x)', 'x.type()', 'type(x)', 'checktype(x)'],
        answer: 2,
        explanation: 'type(x) returns the type of the variable. Python uses built-in functions, not methods for this.',
        reference: '/reference/python/data-types'
      },
      {
        id: 'py-list-add',
        prompt: 'Which method adds a single item to the end of a list?',
        options: ['list.add()', 'list.push()', 'list.append()', 'list.insert()'],
        answer: 2,
        explanation: 'append() adds one item to the end. insert() adds at a specific position. push() doesn\'t exist in Python.',
        reference: '/reference/python/lists'
      },
      {
        id: 'py-fstring',
        prompt: 'What is the correct way to use an f-string?',
        options: ['f"Hello {name}"', '"Hello {name}".format()', 'f("Hello", name)', 'format("Hello {name}")'],
        answer: 0,
        explanation: 'f-strings use f"..." with curly braces for expressions. They were added in Python 3.6.',
        reference: '/reference/python/f-strings'
      },
      {
        id: 'py-dict-access',
        prompt: 'What happens if you access a dictionary key that doesn\'t exist with dict["key"]?',
        options: ['Returns None', 'Returns 0', 'Raises a KeyError', 'Creates the key automatically'],
        answer: 2,
        explanation: 'Using [] raises KeyError if the key is missing. Use dict.get("key") for a safe lookup that returns None.',
        reference: '/reference/python/dictionaries'
      },
      {
        id: 'py-range',
        prompt: 'What does range(3) produce?',
        options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '3, 2, 1'],
        answer: 1,
        explanation: 'range(3) produces 0, 1, 2 — it starts at 0 and stops before the number you give it.',
        reference: '/reference/python/range'
      }
    ]
  },
  git: {
    title: 'Git & Terminal Test',
    description: 'Terminal navigation, commits, branches, and remote workflows',
    questions: [
      {
        id: 'git-cd-parent',
        prompt: 'Which command takes you up one directory level in the terminal?',
        options: ['cd up', 'cd ..', 'cd /', 'cd back'],
        answer: 1,
        explanation: '.. means "parent directory" in all operating systems. cd .. moves you one folder up.',
        reference: '/reference/git/cd'
      },
      {
        id: 'git-staging',
        prompt: 'What does git add do?',
        options: ['Creates a new file', 'Uploads files to GitHub', 'Moves files to the staging area for the next commit', 'Deletes files from the repository'],
        answer: 2,
        explanation: 'git add stages changes — it tells Git "include these in the next commit". It doesn\'t save or upload anything yet.',
        reference: '/reference/git/git-add'
      },
      {
        id: 'git-branch-purpose',
        prompt: 'What is a Git branch?',
        options: ['A copy of the entire repository', 'A separate line of development that doesn\'t affect the main code', 'A backup of your files', 'A type of Git commit'],
        answer: 1,
        explanation: 'A branch lets you work on something new without changing the main code. Think of it as a parallel timeline.',
        reference: '/reference/git/git-branch'
      },
      {
        id: 'git-push',
        prompt: 'What does git push do?',
        options: ['Downloads changes from GitHub', 'Saves your changes locally', 'Uploads your commits to a remote repository', 'Creates a new branch'],
        answer: 2,
        explanation: 'git push sends your local commits to the remote (like GitHub) so others can see them.',
        reference: '/reference/git/git-push'
      },
      {
        id: 'git-undo-unstaged',
        prompt: 'How do you undo changes to a file that hasn\'t been staged yet?',
        options: ['git undo file.txt', 'git reset file.txt', 'git restore file.txt', 'git revert file.txt'],
        answer: 2,
        explanation: 'git restore throws away your local changes and puts the file back to how it was in the last commit.',
        reference: '/reference/git/git-restore'
      }
    ]
  },
  sql: {
    title: 'SQL Essentials Test',
    description: 'Queries, filtering, joins, and aggregate functions',
    questions: [
      {
        id: 'sql-select-all',
        prompt: 'Which SQL statement gets all columns from a table called "users"?',
        options: ['GET ALL FROM users', 'SELECT * FROM users', 'FETCH users', 'READ * FROM users'],
        answer: 1,
        explanation: 'SELECT * FROM table_name is the standard way to get all columns. The * means "everything".',
        reference: '/reference/sql/select'
      },
      {
        id: 'sql-where',
        prompt: 'What does the WHERE clause do?',
        options: ['Sorts the results', 'Limits the number of rows', 'Filters rows based on a condition', 'Groups rows together'],
        answer: 2,
        explanation: 'WHERE filters which rows are included in the results. Only rows matching the condition are returned.',
        reference: '/reference/sql/where'
      },
      {
        id: 'sql-inner-join',
        prompt: 'What does an INNER JOIN return?',
        options: ['All rows from both tables', 'Only rows that have matching values in both tables', 'All rows from the left table', 'Only rows from the right table'],
        answer: 1,
        explanation: 'INNER JOIN returns only the rows where there\'s a match in both tables. No match = not included.',
        reference: '/reference/sql/inner-join'
      },
      {
        id: 'sql-count',
        prompt: 'What does SELECT COUNT(*) FROM orders return?',
        options: ['All the orders', 'The total number of rows in the orders table', 'The sum of all order amounts', 'The average order size'],
        answer: 1,
        explanation: 'COUNT(*) counts how many rows exist. It\'s the most common way to find out "how many" of something.',
        reference: '/reference/sql/count'
      },
      {
        id: 'sql-group-by',
        prompt: 'What does GROUP BY do?',
        options: ['Sorts results alphabetically', 'Combines rows with the same value into summary rows', 'Limits output to one group', 'Joins two tables together'],
        answer: 1,
        explanation: 'GROUP BY groups rows that share the same value, then you can use aggregate functions (COUNT, SUM, etc.) on each group.',
        reference: '/reference/sql/group-by'
      }
    ]
  }
};

export function getQuiz(topic) {
  return quizzes[topic] || null;
}
