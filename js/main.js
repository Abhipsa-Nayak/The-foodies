$(document).ready(function () {
    $('#submit-query').click(function () {
        console.log("button clicked");

        var locationInput= document.getElementById('loc').value;
        console.log(locationInput);
        call_locationAPI(locationInput);
    })


    function call_locationAPI(location){
        $.ajax({
            headers:{
                "user-key":"111a2ba9556192ad29eadcfb9156ef83",
                "Accept":"application/json"
            },
            url: "https://developers.zomato.com/api/v2.1/locations?query="+location,
            success: function(result){
                console.log(result);
                var entity_id= result.location_suggestions["0"].entity_id;
                var entity_type= result.location_suggestions["0"].entity_type;
                console.log(entity_id+ " " +entity_type);


                getLocationDetails(entity_type, entity_id);
            }
        })
    }


    function getLocationDetails(entity_type, entity_id) {
        $.ajax({
            headers:{
                "user-key":"111a2ba9556192ad29eadcfb9156ef83",
                "Accept":"application/json"
            },
            url: "https://developers.zomato.com/api/v2.1/location_details?entity_id="+entity_id+"&entity_type="+entity_type,
            success: function(result){
                console.log(result);
                var cuisines= result.top_cuisines;
                console.log(cuisines);

                }


        })

    }
})