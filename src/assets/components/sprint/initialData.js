const initialData = {
  columns: [
    {
      id: 'column-1',
      title: 'To do',
      tasks: [
        { id: 'task-1', title: 'Build login screen', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', comments: [{id: 12}, {id: 11}], assigned: [{id: 13, pic: 'https://picsum.photos/200'}, {id: 14, pic: 'https://picsum.photos/100'}], tags: ['App', "Admin Panel"], priority: 0, type: 1},
        { id: 'task-2', title: 'App optimization', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', comments: [], assigned: [{id: 13, pic: 'https://picsum.photos/120'}, {id: 14, pic: 'https://picsum.photos/170'}], tags: ['App', "Admin Panel"], priority: 1, type: 1},
        { id: 'task-3', title: 'Hide the user login details from profile page screen when the user', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', comments: [{id: 12}], assigned: [{id: 13, pic: 'https://picsum.photos/80'}], tags: ['App', "Admin Panel"], priority: 3, type: 2},
      ]
    },
    {
      id: 'column-2',
      title: 'Done',
      tasks: [
        { id: 'task-4', title: 'Show sidebar login to all dummy users on the platform', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', comments: [{id: 12}], assigned: [{id: 13, pic: 'https://picsum.photos/80'}], tags: ['App', "Admin Panel"], priority: 2, type: 2},
        { id: 'task-5', title: 'DB cleanup', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', comments: [{id: 12}], assigned: [{id: 13, pic: 'https://picsum.photos/80'}], tags: ['App', "Admin Panel"], priority: 3, type: 1},
      ]
    },
  ],
  columnOrder: ['column-1', 'column-2'],
}

export default initialData;