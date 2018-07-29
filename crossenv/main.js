document.write('<h1>Hello World</h1>');

if (process.env.NODE_ENV === 'development') {
  document.write(new Date());
}