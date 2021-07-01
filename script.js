function updataMap() {

    fetch("https://www.trackcorona.live/api/countries")
    .then(response => response.json())
    .then(element => {
        // console.log(element)
        
        for (let i = 0; i < element.data.length; i++){
            let latitude = element.data[i].latitude
            let  longitude = element.data[i].longitude
    
            let cases = element.data[i].confirmed;
           
            // let color;
            if(cases > 1000000){
                color = "rgb(255,0,0)"
            }
            else if(cases > 100000 && cases < 1000000){
                color = `rgb(0,0,0)`
            }else if(cases > 50000 && cases < 100000){
                color = `rgb(0,0,255)`
            }
            else{
                color = `rgb(0,255,0)`
            }
          
    
             new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        }

    })

}



updataMap();