var regions = [];
var subregions = [];
$.ajax({
  url: 'https://restcountries.eu/rest/v1/all',
  success: function(data) {
    data.filter(function(d) {
      regions[regions.length] = d.region;
    }); 

    data.filter(d => {
      subregions[subregions.length] = d.subregion;
    }); 

    regions = dedupe(regions);
    subregions = dedupe(subregions);

    regions.forEach(function(region) {
      var li = document.createElement('li');
      li.textContent = region;
      var mount = document.getElementsByClassName('regions');
      mount[0].appendChild(li);
    });

    subregions.forEach(subregion => {
      var li = document.createElement('li');
      li.textContent = subregion;
      var mount = document.getElementsByClassName('subregions');
      mount[0].appendChild(li);
    });

    regionCall(regions);
  },
  error: function() {
    new Error('Url did not return data');
  }
});

function dedupe(array) {
  array = clean(array);
  return array.filter((el, i, arr) => arr.indexOf(el) === i); 
}

function clean(array) {
  return array.filter(Boolean);
}

function regionCall(array) {
	array.forEach(function(region) {
		$.ajax({
			url: 'https://restcountries.eu/rest/v1/region/' + region,
			success: function(data) {
				console.log('%s Region %o', region, data);
			},
			error: function() {
				new Error('Url is misformed');       
			}
	 });
 });
}
