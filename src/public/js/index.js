$('#form-add-description').hide();
$('#form-add-button').hide();
$('#form-add-note').hide();

$('#form-add-false').on('click', function(){
    $('#form-add-button').show();
    $('#form-add-description').show();
    $('#form-add-note').attr("placeholder", "Titulo");
});
$('.close-form').on('click', function(){
    $('#form-add-description').hide();
    $('#form-add-button').hide();
    $('#form-add-note').hide();
    $('#form-add-false').show();
});

/* Form to edit note */
let id = undefined;
$('.note-main').on('click', function(){
     id = this.id;
    $('#edit-note'+this.id).show();
})

$('.close-form').on('click', function()
{
    $('#edit-note'+id).hide();
})

/* close form to edit */
