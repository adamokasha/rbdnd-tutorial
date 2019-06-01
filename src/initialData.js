const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Blah blah blah' },
    'task-2': { id: 'task-2', content: 'Cool stuff' },
    'task-3': { id: 'task-3', content: 'Things' },
    'task-4': { id: 'task-4', content: 'Tutorials and stuff.' },
    'task-5': { id: 'task-5', content: 'Okie dok.' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: [
        'task-1',
        'task-2',
        'task-3',
        'task-4',
        'task-5',
      ]
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: []
    },
  },
  columnOrder: [
    'column-1',
    'column-2',
  ]
};

export default initialData;

