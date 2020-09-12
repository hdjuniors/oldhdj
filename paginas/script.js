(function($) {
	$(document).ready(function () {

		$('.actividad').find('.options').find('p').first().on('click', function(event) {
			$this = $(this);

			$this.parent().parent().css('display', 'none');
			$('.act').css('display', 'block');
		});

	});
})(jQuery);
