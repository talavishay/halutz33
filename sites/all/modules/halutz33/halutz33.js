(function ($) {
	

  // Adjust the overlay dimensions.
  Drupal.behaviors.myModule = {
   
    attach: function (context) {

	jQuery("#simplenews-admin-settings-newsletter").append(jQuery("#simplenews-admin-settings-newsletter fieldset:first-child"));
	jQuery("body.page-admin-config-services-simplenews #page .tabs-secondary  ul li:nth-child(3),fieldset.form-wrapper#edit-language").hide();
	//~ jQuery("#newsletter-category tr th:first-child").text("שם קטגוריית הניוזלטר");
	jQuery("body.page-admin-config-services-simplenews  #overlay-titlebar #overlay-tabs li:first-child a,body.page-admin-config-services-simplenews   #overlay-title").text("ניוזלטר");
      jQuery('body.page-admin-content-simplenews #simplenews-admin-filter label[for="edit-category"]').hide();
    jQuery('body.page-node-add-simplenews #block-system-help  ul li:nth-child(2)').hide();
    jQuery("body.page-admin-content-simplenews #simplenews-admin-filter #edit-filters legend span").text("הראה רק ניוזלטר ש:");
      
      $('#overlay:not(.halutz33-adjusted)', context).each(function() {
        var test = $(this).find('form#date-node-form');
       
        if (test.length){

			jQuery(".field-type-taxonomy-term-reference.field-name-field-type.field-widget-options-select.form-wrapper", this).css("width", "184px");
			jQuery("#edit-body-und-0-format", this).hide();//addClass("hide");
			jQuery('.form-item', this).css("padding","0px").addClass('halutz33-adjusted');
			jQuery("#edit-field-date .fieldset-wrapper *", this).not("#edit-field-date-und-0-rrule-until-child,.container-inline-date").css({"margin": "0 5px", "padding": "0 5px"});
			jQuery("#edit-field-date .date-float", this).css({"left": "0", "position" : "absolute"});
			jQuery("#edit-field-date .fieldset-description", this).css({"font-size": "10px", "font-weight": "lighter", "margin": "0", "padding": "0"});
			jQuery("#day_off",this ).bind("click", function(e){
				e.preventDefault();
				var a = jQuery("#edit-field-event-price-und-0-value", that ).val();
				jQuery("#edit-field-event-price-und-0-value", that).val("(חופש)"+a);
				return false;
			});
			
			jQuery("div.form-item-body-und-0-value label .link-edit-summary",this ).attr("title", "תקציר מאפשר לראות בדיוק את תוכן התא בעיצוב לוח השנה הראשי, לעומת 'תוכן מלא' אשר מראה את תצוגת דף ארוע פנימי''");
			console.log(jQuery("div.form-item-body-und-0-value label .link-edit-summary",this ));
			 
			jQuery("#edit-body .form-item.form-type-textarea.form-item-body-und-0-value > label", this).after(jQuery("#edit-body #body-add-more-wrapper div.text-format-wrapper div.description:last-child", this).last());
			
			jQuery("label[for=edit-field-date-und-0-value2]").text("עד:");
			var that = this;
			var timer = setTimeout(function(){jQuery("#edit-field-date-und-0-show-todate",that).click().change();},1000);
			

			jQuery("form#date-node-form", this).prepend(jQuery("form#date-node-form input#edit-submit", this).clone().css({"position": "absolute","left": "0px","top": "0px"}));
			jQuery("form#date-node-form", this).prepend(jQuery("form#date-node-form input#edit-delete", this).clone().css({"position": "absolute","left": "0px","top": "-34px"}));
			
          // adjust the overlay
          $(this).css({
            'width'     : '650px',
            'min-width' : '650px'
          });

           
          //~ $('.add-or-remove-shortcuts', this).hide();  // hide "add short-cut" button
          //~ $('#branding', this).hide();  // hide branding container
        } 
      }).addClass('halutz33-adjusted');
    }
   
  };

})(jQuery);
