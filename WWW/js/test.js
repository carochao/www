

$("#cityImage").click(function(e) {
    $("#imageUpload").click();
});

function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#cityImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}


$("#imageUpload").change(function(){
    fasterPreview( this );
});






