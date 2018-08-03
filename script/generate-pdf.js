$("#download").on('click', function() {
   var date = new Date();
   var namestr = "cvData-"+date+".pdf";
  html2pdf($("#page").get(0), {
        margin: 0,
        filename: namestr,
        image: {type: 'jpeg', quality: 3.0},
        html2canvas: {dpi: 300, letterRendering: true},
        jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'}
    });
});