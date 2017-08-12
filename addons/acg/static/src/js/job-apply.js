$(document).ready(function () {
    var APPLY_MODAL = $( '#job-apply' );
    var APPLY_FORM = $( APPLY_MODAL ).find('form');
    $(APPLY_FORM).submit( function( e ) {
        $.ajax( {
            url: $(APPLY_FORM).attr('action'),
            type: 'POST',
            data: new FormData( this ),
            processData: false,
            contentType: false
        } ).done(function(response) {
            if (response) {
                $(APPLY_MODAL).find('.alert-success').removeClass('hide');
                $(APPLY_MODAL).find('.alert-danger').addClass('hide');
                $(APPLY_FORM).trigger('reset');
            } else {
                $(APPLY_MODAL).find('.alert-success').addClass('hide');
                $(APPLY_MODAL).find('.alert-danger').removeClass('hide');
            }
            $(APPLY_MODAL).on('hidden.bs.modal', function () {
                location.reload();
            });
        });
        e.preventDefault();
    } );
});