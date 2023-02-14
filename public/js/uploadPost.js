document.querySelector('#post-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('clicked')
    let inputTitle = document.querySelector('#new-title').value
    let inputText = document.querySelector('#new-post').value
  
   fetch('/api/posts', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: inputTitle,
        text: inputText,
   
   }),
    })
    .then((response)=> response.json())
    .then((data)=>{
        console.log("Success:",data);
        location.reload();
    })
    .catch((error)=> {
        console.log('Error:', error);
    });
    })
