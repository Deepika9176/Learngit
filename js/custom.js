    $(document).ready(function () {
				
		$('.gallery_btn').click(function(){
			$('.gallery_btn').removeClass('active');
			$(this).addClass('active');
		});
		 
	
		$(".accordion_head").click(function() {
			if($('.accordion_body').is(':visible')) {
				$(".accordion_body").slideUp(300);
				$(".plusminus").html('<i class="fa fa-plus"></i>');
			}
			if($(this).next(".accordion_body").is(':visible')) {
				$(this).next(".accordion_body").slideUp(300);
				$(this).find(".plusminus").html('<i class="fa fa-plus"></i>');
			}else {
			  $(this).next(".accordion_body").slideDown(300);
			  $(this).find(".plusminus").html('<i class="fa fa-minus"></i>');
			}
		}); 
		//FAQ
		$(".accordion_head_new").click(function() {
			if($('.accordion_body_new').is(':visible')) {
				$(".accordion_body_new").slideUp(300);
				$(".chevron").html('<i class="fa fa-chevron-down"></i>');
			}
			if($(this).next(".accordion_body_new").is(':visible')) {
				$(this).next(".accordion_body_new").slideUp(300);
				$(this).find(".chevron").html('<i class="fa fa-chevron-down"></i>');
			}else {
			  $(this).next(".accordion_body_new").slideDown(300);
			  $(this).find(".chevron").html('<i class="fa fa-chevron-up"></i>');
			}
		}); 
	});

	$(".offer_right a").click(function(){
	  $(".offer_web").attr('style', 'display: none !important');
	  $(".offer_mobile").attr('style', 'display: none !important');
	});
 

			
		
		
	(function ($) {
	  "use strict";
	  $.fn.aksCountDown = function (options) {
		const aks = $(this);
		var settings = $.extend(
		  {
			endTime: "",
			refresh: 1000,
			onEnd: function () {}
		  },
		  options
		);
		return this.each(function (i) {
		  function endTimeCheck(d1, d2) {
			return (
			  d1.getFullYear() === d2.getFullYear() &&
			  d1.getMonth() === d2.getMonth() &&
			  d1.getDate() === d2.getDate()
			);
		  }
		  function countTimer() {
			var endTime = new Date(settings.endTime);
			endTime = Date.parse(endTime) / 1000;

			var now = new Date();
			now = Date.parse(now) / 1000;

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400);
			var hours = Math.floor((timeLeft - days * 86400) / 3600);
			var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
			var seconds = Math.floor(
			  timeLeft - days * 86400 - hours * 3600 - minutes * 60
			);

			if (hours < "10") {
			  hours = "0" + hours;
			}
			if (minutes < "10") {
			  minutes = "0" + minutes;
			}
			if (seconds < "10") {
			  seconds = "0" + seconds;
			}

			$(aks).find("[data-days]").html(days);
			$(aks).find("[data-hours]").html(hours);
			$(aks).find("[data-minutes]").html(minutes);
			$(aks).find("[data-seconds]").html(seconds);
		  }
		  var now = new Date();
		  var endTime = new Date(settings.endTime);

		  if (endTimeCheck(now, endTime) === true) {
			settings.onEnd.call(aks);
		  } else {
			setInterval(function () {
			  countTimer();
			}, settings.refresh);
		  }
		});
	  };
	})(jQuery);

	$(".timer").aksCountDown({
	  endTime: "25 December 2021 13:30:00 GMT+01:00",
	  onEnd: function () {
		$(this).html('<div class="timer-end">Offer Closed</div>');
	  }
	});


    $(function(){	
				
		$('.domain_btn').click(function(){
			$('.domain_btn').removeClass('active');
			$(this).addClass('active');
		});
		 
	});	
			 
			 
	$(document).on('click', '.showMoreLess', function(e){
		e.preventDefault();
		var content = $(this).text();
		if(content == "Show more"){
			$(this).text("Show less"); 
			 $(this).closest('.d-flex').prev('.cs_txt').removeClass('show_card');
			 
		}else{
			$(this).text("Show more"); 
			 $(this).closest('.d-flex').prev('.cs_txt').addClass('show_card');
		}
	});
	
	$(document).on('click', '.showMoreProject', function(e){
		e.preventDefault();
		var content = $(this).text();
		if(content == "Show more"){
			$(this).text("Show less"); 
			 $(this).closest('.d-flex').prev('.proj_gall').addClass('showproject');
			 $(".ind_pro_desc").animate({scrollTop: 0}, 100);
			 
		}else{
			$(this).text("Show more"); 
			 $(this).closest('.d-flex').prev('.proj_gall').removeClass('showproject');
			 $(".ind_pro_desc").animate({scrollTop: 0}, 100);
		}
	});
	
	$(document).ready(function(){
		var input = document.querySelector("#countryCode");
		var options = $('#countryCode').html();
		$('#countryCode').html('<option value="+91" disabled selected>+91</option>');
		$('#countryCode').append(options);
		
		$('#countryCode').on('change', function () {
			 var country = $('#countryCode option:selected').attr('value');
			 $('#countryCode').html('');
			 $('#countryCode').html('<option value="'+country+'" disabled selected>'+country+'</option>');
			 $('#countryCode').append(options);
		});
	});

	$(document).ready(function(){
		var input = document.querySelector("#countryCode_more");
		var options = $('#countryCode_more').html();
		$('#countryCode_more').html('<option value="+91" disabled selected>+91</option>');
		$('#countryCode_more').append(options);
		
		  $('#countryCode_more').on('change', function () {
			 var country = $('#countryCode_more option:selected').attr('value');
			 $('#countryCode_more').html('');
			 $('#countryCode_more').html('<option value="'+country+'" disabled selected>'+country+'</option>');
			 $('#countryCode_more').append(options);
			 
		  });
	});
	$(document).ready(function(){
		var input = document.querySelector("#country_code");
		var options = $('#country_code').html();
		$('#country_code').html('<option value="+91" disabled selected>+91</option>');
		$('#country_code').append(options);
		
		  $('#country_code').on('change', function () {
			 var country = $('#country_code option:selected').attr('value');
			 $('#country_code').html('');
			 $('#country_code').html('<option value="'+country+'" disabled selected>'+country+'</option>');
			 $('#country_code').append(options);
			 
		  });
	});
	
	$(document).ready(function(){
		var input = document.querySelector("#vedio_country_code");
		var options = $('#vedio_country_code').html();
		$('#vedio_country_code').html('<option value="+91" disabled selected>+91</option>');
		$('#vedio_country_code').append(options);
		
		  $('#vedio_country_code').on('change', function () {
			 var country = $('#vedio_country_code option:selected').attr('value');
			 $('#vedio_country_code').html('');
			 $('#vedio_country_code').html('<option value="'+country+'" disabled selected>'+country+'</option>');
			 $('#vedio_country_code').append(options);
			 
		  });
	});
 
					
	function emailValidation(){
		var emailVal = $('#email_text').val();
		console.log(emailVal)
		const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if(re.test(emailVal)){
			$('.email_valid').removeClass('d-none');
			$('.email_invalid').addClass('d-none');
			
		}else{
			$('.email_invalid').removeClass('d-none');
			$('.email_valid').addClass('d-none');
		}
		
	}
		
	function numberValidation(){
	
	
		var numVal = $('#phone_num').val();
		
		const regexp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
		
		if(regexp.test(numVal)){
			$('.num_valid').removeClass('d-none');
			$('.num_invalid').addClass('d-none');
		}else{
			$('.num_invalid').removeClass('d-none');
			$('.num_valid').addClass('d-none');
		}
		
	}
		
		
	function validateForm(e){
		e.preventDefault();
		numberValidation();
		emailValidation();
		
	}
		
		
		
	
		
		// $(".review_social_small").click(function(){
  // $(".review_review").toggleClass("review_open");
// });