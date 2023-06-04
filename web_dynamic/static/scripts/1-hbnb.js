$( document ).ready(function() {
	var amenityIDs = [];
	$('input[type="checkbox"]').change(function() {
		if ($(this).(':checked')) {
			var amenityID = $(this).data('id');
			amenityIDs.push(amenityID);
		}
		else {
			var amenityID = $(this).data('id');
			var index = amenityIDs.indexOf(amenityID);
			if (index !== -1) {
				amenityIDs.splice(index, 1);
			}
		}
	}
	$('.Amenities h4').text(amenityIDs.join(', '));
});

