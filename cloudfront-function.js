function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '/ranchclean') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: { location: { value: '/ranchclean/' } }
    };
  }

  if (uri === '/ranchvideo') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: { location: { value: '/ranchvideo/' } }
    };
  }

  if (uri === '/ranchclean/') request.uri = '/ranchclean/index.html';
  if (uri === '/ranchvideo/') request.uri = '/ranchvideo/index.html';

  return request;
}

