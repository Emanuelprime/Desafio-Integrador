if (localStorage.getItem('theme')== 'light'){
    setlightMode();
    if(document.getElementById('checkbox').checked){
        localStorage.setItem('checkbox', true)
    }
}

    function setlightMode(){
        let isDark = document.body.toggle('lightmode');

        if (isDark){
            setlightMode.checked = true;
            localStorage.setItem('theme', 'light');
            document.getElementById('checkbox').setAttribute('checkbox', 'checked');
        }else{
            setlightMode.checked = true;
            localStorage.removeItem('theme', 'light');
        }
    }



  
