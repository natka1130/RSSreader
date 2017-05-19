function init() {
	document.addEventListener("deviceready", onDeviceReady, false);

}

function deviceInfo() {
		navigator.notification.alert('kufsdfsdfurwa');
}
	
function onDeviceReady() {
		navigator.notification.alert('kufsdfsdfurwa');
}

// 		 	kraj  swiat  sport  biznes  rozrywka
// wp
// interia
// tvn
// rmf
// polsat		

//TABLICA Z KANALAMI	
var channels = [
	["http://wiadomosci.wp.pl/kat,1342,ver,rss,rss.xml","http://wiadomosci.wp.pl/kat,1342,ver,rss,rss.xml","http://media.wp.pl/kat,1022955,ver,rss,rss.xml","http://media.wp.pl/kat,1022947,ver,rss,rss.xml","http://wp.tv/ver,rss,chn,4052,rss.xml"],
	["http://wp.tv/ver,rss,chn,4052,rss.xml","http://fakty.interia.pl/swiat/feed","http://sport.interia.pl/feed","http://kanaly.rss.interia.pl/biznes.xml","http://fakty.interia.pl/kultura/feed"],
	["http://fakty.interia.pl/kultura/feed","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml"],
	["http://www.rmf24.pl/fakty/polska/feed","http://www.rmf24.pl/fakty/swiat/feed","http://www.rmf24.pl/sport/feed","http://www.rmf24.pl/ekonomia/feed","http://www.rmf24.pl/ekonomia/feed"],
	["http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/rozrywka.xml"]
]

// szablon(template) do dodania jednego newsu na stronie
const Item = ({ title, link, description }) => `
    <div class="item">
      <h3>${title}</h3>
      <span class="item-description">${description} <a href="${link}" class="item-link">więcej..</a></span>
    </div>
`;

// var userChannels = [
	
// ]
// for (var i=0; i < 5; i++) {
// 	for (var j = 0; j < 5; j++) {
// 			console.log(channels[i][j]);
// 	}
// }

var loadChannels = function() {

}
//pobieranie i wycinanie z xmla z kanalu wiadomosci
$.get(channels[0][4], function (data) {
  // var a = $(data).find("channel");  
  // $('#channelTitle').append(a.find('title').first().text());

  $(data).find("item").each(function () {
    var el = $(this);
    
  	$('#rozrywka').append([
	  { link: el.find("link").text(), title: el.find("title").text(), description: el.find("description").text() }
	].map(Item).join(''));

    // $( "#biznes" ).append( el.find("title").text() );

  });
});
$.get(channels[0][0], function (data) {
  // var a = $(data).find("channel");  
  // $('#channelTitle').append(a.find('title').first().text());

  $(data).find("item").each(function () {
    var el = $(this);
    
  	$('#zkraju').append([
	  { link: el.find("link").text(), title: el.find("title").text(), description: el.find("description").text() }
	].map(Item).join(''));

    // $( "#biznes" ).append( el.find("title").text() );

  });
});
$.get(channels[2][1], function (data) {
  // var a = $(data).find("channel");  
  // $('#channelTitle').append(a.find('title').first().text());

  $(data).find("item").each(function () {
    var el = $(this);
    
  	$('#zeswiata').append([
	  { link: el.find("link").text(), title: el.find("title").text(), description: el.find("description").text() }
	].map(Item).join(''));

    // $( "#biznes" ).append( el.find("title").text() );

  });
});
$.get(channels[2][2], function (data) {
  // var a = $(data).find("channel");  
  // $('#channelTitle').append(a.find('title').first().text());

  $(data).find("item").each(function () {
    var el = $(this);
    
  	$('#biznes').append([
	  { link: el.find("link").text(), title: el.find("title").text(), description: el.find("description").text() }
	].map(Item).join(''));

    // $( "#biznes" ).append( el.find("title").text() );

  });
});
$.get(channels[2][3], function (data) {
  // var a = $(data).find("channel");  
  // $('#channelTitle').append(a.find('title').first().text());

  $(data).find("item").each(function () {
    var el = $(this);
    
  	$('#sport').append([
	  { link: el.find("link").text(), title: el.find("title").text(), description: el.find("description").text() }
	].map(Item).join(''));

    // $( "#biznes" ).append( el.find("title").text() );

  });
});
//ss*** pobieranie  */


 $(document).on( "pagebeforeshow", function() {
	 
// 	 $(document).on('click','#zkraju-listbox > li.ui-last-child', function(e) {
// 	 	var myselect = $('select#zkraju');	 
// 	 	myselect.selectedIndex = myselect.val('brak'); 
// 	 	myselect.selectmenu("refresh");  
// 	 });
// 	 $(document).on('click','#zeswiata-listbox > li.ui-last-child', function(e) {
// 	 	var myselect = $("select#zeswiata");	 
// 	 	myselect.selectedIndex = myselect.val('brak'); 
// 	 	myselect.selectmenu("refresh");  
// 	 });
	 
	 $.get(channels[0][4], function (data) {
  // var a = $(data).find("channel");  
  // $('#channelTitle').append(a.find('title').first().text());

  $(data).find("item").each(function () {
    var el = $(this);
    
  	$('#rozrywka').append([
	  { link: el.find("link").text(), title: el.find("title").text(), description: el.find("description").text() }
	].map(Item).join(''));

    // $( "#biznes" ).append( el.find("title").text() );

  });
});
	 
 });
