jQuery(document).ready(function(){
		var patt=/\(חופש\)/;
		var price = jQuery("body.page-node.node-type-date .field-name-field-event-price .field-item").text();
		var textt = price.replace(patt, "");
		jQuery("body.page-node.node-type-date .field-name-field-event-price .field-item").text(textt);

//~ SIDEBAR DATE BACKGROUND
var  monthNamesArray = ["0","ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר" ];
var currentTime = jQuery('.view-calendar .date-heading h3').text().split(" ");

if( currentTime.length != 1){
	var yearCss =  {   "font-family": "exoblack", "font-size": "48px", "letter-spacing": "0px", "left": "0", "position": "absolute", "top": "117px"	};
	var monthNameCss =  { "letter-spacing": "-1px", "position": "absolute", "right": "3px", "top": "88px"};
    if(jQuery("body.ie7").length){
		monthNameCss.top = "68px";
	}
	var monthCss = { 	"font-family": "exoblack", "font-size": "124px", "left": "9px",	"letter-spacing": "1px", "position": "relative"};
	var sidebarDateCss = {"color": "white","font-weight": "bold","position": "relative","margin-top": "30px", "display" : "block"};
	if(jQuery('body.chrome').length == 1){
		yearCss["letter-spacing"] = "4px";
		monthCss["letter-spacing"] = "10px"; 
	}

	var monthNumber = jQuery.inArray(currentTime[0], monthNamesArray); 
	var more = {};	
	//~ if(monthNumber !== 12){
		var more = {		"top": "158px","color": "white"		};
	//~ }
	var year = jQuery('<div class="year" id="year'+currentTime[1]+'">'+ currentTime[1] +'</div>').css(yearCss);
	var monthName = jQuery('<div class="monthName" id="monthName'+monthNumber+'">'+ currentTime[0]  +'</div>').css(monthNameCss).css(more);
	var month = jQuery('<div class="month" id="monthNumber'+monthNumber+'" >'+monthNumber+'</div>').addClass("monthCss");
	var sidebarDate = jQuery('<div id="dateBg"><div>').css(sidebarDateCss).append(month,monthName,year);
	jQuery('#sidebar-first').append(sidebarDate);
}
    



	var table = jQuery('.view-calendar table');
	//~ jQuery('td.date-box:not(.done)', table).each(function(i, val){
		//~ var children = jQuery(val).children();
		//~ jQuery(val).append(children );
	//~ }).addClass('done');

	jQuery('td.date-box', table).not('[headers="שבת"]').not('[headers="ראשון"]').not('.no-entry').each(function(i, val){
		var curDate = jQuery(val).attr("data-date");
		var dataDayOfMonth = jQuery(val).attr("data-day-of-month");
		var children = jQuery('td.single-day[data-date='+curDate+'] .inner .contents', table).children().not('.views-field-body, .views-field-field-media');
		jQuery('.inner', val).append(children).wrap('<div class="box" />');
		//~ var eventType = jQuery('.inner', val).children().filter(".views-field-term-node-tid").children().filter('span').text();
		var eventType = jQuery('.views-field-term-node-tid span', val).text();
		
		var txt="";
		switch(eventType){
			case "7":
				txt = "concert";
				 break;
			case "3":
				txt = "party";
				 break;
			case "6":
				txt = "workshope";
				 break;
			case "8":
				txt = "pub";
				 break;
			case "5":
				txt = "atiqa";
				 break;
			case "4":
				txt = "tarbut";
				 break;
		}
		jQuery(val).addClass(txt);
		jQuery('td.single-day[data-date='+curDate+']', table).addClass(txt);
        jQuery("span.date-display-single", val).attr("id",'date-display-single'+curDate);
		jQuery(".monthday", val).prepend('<span id="dot">.</span>').append('<span id="slash">/</span>');
		var tw = jQuery(".inner", val).width();
		var mw = jQuery(".monthday", val).width();
		var mh = jQuery(".monthday", val).height();
		//~ 
		//~ var txtParts = jQuery(".views-field-title > .field-content > a", val).text().split(" ");
		//~ var newText = "";
		//~ jQuery(txtParts).each(function(i,word){
			//~ newText = newText + '<span id="word_num-'+(i+1)+'_'+curDate+'" >' + word + '</span>';
		//~ });
		//~ 
		//~ jQuery(".views-field-title > .field-content > a", val).html(newText);
		//~ 
		//~ if (dataDayOfMonth.length == 1){
			//~ jQuery(".views-field-title", val).css("width",96);	
		//~ } else {
			//~ jQuery(".views-field-title", val).css("width",80);	
		//~ }
		//~ if (dataDayOfMonth > 21  | dataDayOfMonth == 20 ) {
			//~ jQuery(".views-field-title", val).css("width",73);	
		//~ }
		//~ 
		var len = jQuery('.date-display-single', val).text().length;
		//~ var hour = jQuery('.date-display-single', val).text().substr(-5,len);
		var hour = jQuery('.views-field-field-date .date-display-single', val);
		if(hour.length == 1){
			if(typeof hour === "object"){
			//~ jQuery(hour).text());
			hour = jQuery(hour).attr("content").replace(/(.*)T(.*:.*):.*\+(.*)/i,"$2");
			}
		}
		var day = jQuery(val).attr("headers");
		
		var price = jQuery('.views-field-field-event-price', val).text();
		var patt=/\(חופש\)/;
		var result = patt.test(price);

		jQuery('.views-field-field-event-price', val).remove();

		if(!result){
			var text = day + " / " + hour + " / " + price ;	
		} else {
			var text = price.replace( patt, "") ;	
			jQuery("[data-date="+curDate+"]", table).addClass("freeday");
			
		}
	
		jQuery('.date-display-single', val).text(text);
		var link = jQuery(".views-field-title a", val).attr("href");
                
		jQuery("[data-date="+curDate+"]", table).bind("click.url", function(e){
			if(typeof e.target.attributes["href"] === "undefined"){
				e.preventDefault();
				window.location = link;
				return false;
			} else {
				return true;	
			}
		}).addClass("showme");
}).addClass("showme");
//~ 
//~ // hide empty cells & rows ...
if(jQuery("tr.date-box:nth-child(1) td:visible.empty", table).length == "5"){
	jQuery("tr.date-box:nth-child(1), tr.single-day:nth-child(2)", table).css("display","none");
	jQuery("tr.date-box:nth-child(1), tr.single-day:nth-child(2)", table).css("display","none");
}
var lastDateBox = jQuery("tr.date-box", table).last();
lastDateBox.children().filter("td.empty").hide();
if(lastDateBox.children().filter("td:visible").length == 0){
	lastDateBox.hide();
}

var lastSingleDay = jQuery("tr.single-day", table).last();
lastSingleDay.children().filter("td.empty").hide();
//~ var lastSingleDaysAmount = lastSingleDay.children().filter(".no-entry").filter("[headers=שני]").filter("[headers=שני]").filter("[headers=שלישי]").filter("[headers=רביעי]").filter("[headers=חמישי]").not("[headers=ראשון]").not("[headers=שבת]").length;
	var daysON = jQuery("[headers=שישי],[headers=שני],[headers=שלישי],[headers=רביעי],[headers=חמישי]", lastSingleDay).filter(function(index){
		if(jQuery(this).hasClass("no-entry") || jQuery(this).hasClass("empty")){
			console.log("true");
			return true;	
		}else {
			console.log(jQuery(this));
			console.log("false");
			return false;	
		} 
		}).length;
	
	//~ }".no-entry").filter("[headers=שני]").filter("[headers=שני]").filter("[headers=שלישי]").filter("[headers=רביעי]").filter("[headers=חמישי]").not("[headers=ראשון]").not("[headers=שבת]").length;

if(daysON == 5 ){
	lastSingleDay.children().filter(".no-entry").each(function(i,val){
		var date = jQuery(val).attr('data-date');
		jQuery('[data-date='+date+']', table).hide();
		jQuery('[data-date='+date+']', table).addClass("empty").removeClass("showme");
	});
	lastSingleDay.children().filter(".no-entry").each(function(i,val){
		var date = jQuery(val).attr('id').replace(/calendar-(.*)-(.*)-(.*)-(.*)/, "calendar-$1-$2-$3-date-box");
		jQuery('#'+date, table).addClass("empty").removeClass("showme");
	});
}
//~ 
jQuery("td.single-day.freeday .inner").html('<img src="/sites/default/files/styles/large/public/freeday.jpeg" style=" width: 100%;"/>');

//jQuery(".freeday, .freeday *, .freeday * *, .freeday * * *, .freeday * * * *, .freeday * * * * *, .freeday img").die("click.url").live("click.live", function(e){ 
//    console.log("XXX"); 
//    e.preventDefault(); 
//    var parents = jQuery(e.currentTarget).parents(".box");
//    console.log(parents);
//    console.log(jQuery(".views-field-title a", parents).attr("href"));
//    return false; 
//});

//~ OVERLAY  ###########################################3
//~ 
	//~ jQuery('body:not(.ie)').append('<div id="overlay"></div><div id="overlay_controls_wrap"><div id="overlay_control" class="overlay_controls_box"></div><div id="overlay_control_dark" class="overlay_controls_box"></div><div id="overlay_control_light" class="overlay_controls_box"></div><div id="overlay_control_opacity" class="overlay_controls_box"></div></div>'+
	//~ '<div id="ruler" style="position:fixed;top:0px;left:20px;background:red;width:1px;height:100%"></div>');
	//~ jQuery('#overlay_control').bind("click", function(e){
		//~ jQuery('#overlay').toggle();
	//~ });
	//~ jQuery('#overlay_control_light').bind("click", function(e){
		//~ jQuery('#overlay').css("opacity", function(index,val) {
			//~ var overlay_control_opacity = val * 1.1;
			//~ jQuery('#overlay_control_opacity').html(overlay_control_opacity);
			//~ return overlay_control_opacity;
		//~ });
	//~ });
	//~ jQuery('#overlay_control_dark').bind("click", function(e){
		//~ jQuery('#overlay').css("opacity", function(index,val) {
			//~ var overlay_control_opacity =  val - (val * .1);
			//~ jQuery('#overlay_control_opacity').html(overlay_control_opacity);
			//~ return overlay_control_opacity;
		//~ });
	//~ });
//~ jQuery(table).addClass("ready");
});
