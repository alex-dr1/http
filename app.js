console.log('App run ...')

$.http({ url: 'https://jsonplaceholder.typicode.com/todos' })
  .then(console.log)
  .catch(console.log)
