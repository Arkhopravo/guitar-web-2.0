const steps = [
    {
      id: '0',
      message: 'Hey there! What can I help you with today?',
      trigger: '1',
    },
    {
      id: '1',
      options: [
        { value: 'learning', label: 'View Courses' },
        { value: 'blogs', label: 'Read Blogs' },
        { value: 'tune', label: 'Tune Guitar' },
        { value: 'store', label: 'Visit Store' },
        { value: 'chat', label: 'Chat with an Expert' },
        { value: 'help', label: 'Get Help' }
      ],
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: "Great choice! Redirecting you...",
      end: true,
      trigger: ({ value }) => {
        switch (value) {
          case 'learning':
            window.open('http://localhost:5173/learning', '_blank');
            break;
          case 'blogs':
            window.open('http://localhost:5173/blogs', '_blank');
            break;
          case 'tune':
            // Add logic for tuning
            break;
          case 'store':
            window.open('http://localhost:5173/store', '_blank');
            break;
          case 'chat':
            // Add logic for initiating chat with an expert
            break;
          case 'help':
            // Add logic for getting help
            break;
          default:
            break;
        }
      },
    },
  ];
  
  export default steps;
  