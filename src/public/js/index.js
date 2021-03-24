$('#form-add-description').hide();
$('#form-add-button').hide();
$('#form-add-note').hide();
$('.categorySelector').hide(); 

$('#form-add-false').on('click', function(){
    $('#form-add-button').show();
    $('#form-add-description').show();
    $('#form-add-note').attr("placeholder", "Titulo");
    $('.categorySelector').show();
});
$('.close-form').on('click', function(){
    $('#form-add-description').hide();
    $('#form-add-button').hide();
    $('#form-add-note').hide();
    $('#form-add-false').show();
    $('.categorySelector').hide();
});

/* Form to edit note */
let id = undefined;
$('.note-main').on('click', function(){
     id = this.id;
    $('#edit-note'+this.id).show();
    $('.categorySelector').show();

})

$('.close-form-edit').on('click', function()
{
    $('#edit-note'+id).hide();
    $('.categorySelector').hide();
})

/* Selector category */
$('.categorySelectorCircle').on('click', function(){
    $('#category').val(this.id);
});
$('.categorySelectorCircleEdit').on('click', function(){
    $('.inputHideEdit').val(this.id);
});
/* $('.categorySelectorCircleEdit').on('click', function(){
    $('#category-edit').val(this.id);
}); */