//your JS code here. If required.
let p = document.getElementById("timer");
      setInterval(() => {
        let date = new Date();

        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
	
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
		let ampm=hour>=12?'PM':'AM';
		p.innerHTML = `${month + 1}/${ day}/${ year} ,${ hour}:${ min}:${ sec} ${ampm}`;}
      , 1000)