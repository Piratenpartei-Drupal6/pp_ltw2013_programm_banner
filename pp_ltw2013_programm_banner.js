var pp_ltw2013_programm_banner_current = 0;

var pp_ltw2013_programm_banner_links = new Array();
    pp_ltw2013_programm_banner_links[0] = "https://www.piratenpartei-hessen.de/unsere-ziele";
    pp_ltw2013_programm_banner_links[1] = "https://www.piratenpartei.de/wp-content/uploads/2013/06/PP-Bund-BTW13v1.pdf";

$(document).ready(function() {
    $('#programme_2013').cycle({
		fx: 'fade',
        timeout: 5000,
        after: onProgrammBannerCycleAfter 
     });

	 $('#programme_2013').click(function() {
        window.open(pp_ltw2013_programm_banner_links[pp_ltw2013_programm_banner_current], '_blank');
    });
});

function onProgrammBannerCycleAfter() { 
    console.log($(this).attr('ref'));
	pp_ltw2013_programm_banner_current = $(this).attr('ref');
	console.log(pp_ltw2013_programm_banner_current);
}