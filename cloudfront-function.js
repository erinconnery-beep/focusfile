// Associate this CloudFront Function with the site's Viewer Request event.
// It gives the ranch experience a clean public URL while keeping index.html
// inside the ranchexplore folder in S3.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '/ranchexplore') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: '/ranchexplore/' }
      }
    };
  }

  if (uri === '/ranchexplore/') {
    request.uri = '/ranchexplore/index.html';
  }

  return request;
}
