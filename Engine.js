<<<<<<< HEAD
var settings = {
    "url": "http://hpb.health.gov.lk/api/get-current-statistical",
    "method": "GET",
    "timeout": 0,
  };

var tc;
var td;
var nc;
  $.ajax(settings).done(function (response) {
    console.log(response);
    td = response['data']['local_deaths'];
    tc = response['data']['local_total_cases'];
    nc = response['data']['local_new_cases'];
    console.log(nc);
    console.log(tc);
    console.log(td);

    document.getElementById('totalcases').innerHTML = tc;
    document.getElementById('newcases').innerHTML = nc;
    document.getElementById('deaths').innerHTML = td;
  });
=======
var settings = {
    "url": "https://hpb.health.gov.lk/api/get-current-statistical",
    "method": "GET",
    "timeout": 0,
  };

var tc;
var td;
var nc;



  $.ajax(settings).done(function (response) {
    console.log(response);
    td = response['data']['local_deaths'];
    tc = response['data']['local_total_cases'];
    nc = response['data']['local_new_cases'];
    console.log(nc);
    console.log(tc);
    console.log(td);

    document.getElementById('totalcases').innerHTML = tc;
    document.getElementById('newcases').innerHTML = nc;
    document.getElementById('deaths').innerHTML = td;
  });
>>>>>>> cc9f2fd0a3713202a3ea5cc014ff1a588b105c14
