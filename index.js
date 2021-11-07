var port = Process.env.PORT || 3000;
const url = 'https://json-server' + port + '+--.local.webcontainer.io/comments';

fetch(url)
  .then((r) => r.json())
  .then(
    (json) =>
      (document.getElementById('output').innerHTML = JSON.stringify(
        json,
        null,
        2
      ))
  );
