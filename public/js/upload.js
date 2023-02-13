const cloudinary = require('cloudinary')

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'process.env.CLOUD_NAME', 
    uploadPreset: 'process.env.UPLOAD_PRESET',
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
