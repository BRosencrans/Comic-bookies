document.querySelector('#logoutBtn').addEventListener('click',()=>{
    fetch('api/user/logout',{
        method: 'POST'
    }).then(res=>{
        if(res.ok){
            location.reload()
        } else{
            alert('logged out')
        }
    })
})