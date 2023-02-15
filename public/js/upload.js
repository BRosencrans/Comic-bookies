fetch('/api/posts/pics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      picture : 'uplomatic_G03luy9hMGDIXk98NPaHf'
    })
  })
  .then(response => response.json())
  .then(data => {
    const uploaded_file_url = data.uploaded_file_url;
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
  