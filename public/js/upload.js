
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dt0p49utk', 
    uploadPreset: 'xqu2jyr0',
    sources: ["local"],
     multiple: false},
      (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  
 document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
