
function wnw_set_google_autocomplete(){
    jQuery(gaaf_fields).each(function(){

        if (jQuery(this).attr('id') == 'where-to-send'){fillPostCode = true}
        var autocomplete= new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */(this),
            { types: ['(regions)'],
                componentRestrictions: {country: 'gb'}
            });
        // When the user selects an address from the dropdown,
        // populate the address fields in the form.

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            for (var i = 0; i < place.address_components.length; i++) {
                for (var j = 0; j < place.address_components[i].types.length; j++) {
                    if (place.address_components[i].types[j] == "postal_code") {
                        console.log(place.address_components[i].long_name);
                        if(fillPostCode && jQuery('#postcode').val().length==0) {
                            jQuery('#postcode').val(place.address_components[i].long_name)
                                .parent().parent().children('label').addClass('active');
/* We can do it for all fields */
                        }
                    }
                }
            }
        })

    });
}
jQuery(window).load(function(){
    wnw_set_google_autocomplete();
});
