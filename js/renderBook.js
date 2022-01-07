var html = "";
var pdf = pdfjsLib.getDocument('./res/sample.pdf');

document.querySelectorAll('.book').forEach(function(book) {
    renderBook(book);
}); 

function renderBook(book){
    pdf.promise.then(function (doc) {
        pc = doc.numPages;
        for(let i = 1; i <= pc; i++){
            html+="<div><canvas id='" + i + "'></canvas></div>\n";
        }
        book.innerHTML=html;
        console.log('done');
        for(let j = 1; j <= pc; j++){
            renderPage(pdf, j);   
        };
        
    });
}

// $.when(renderBook).done(function(){
//     $('.book').turn({
//         autoCenter: true,
//         acceleration: true,
//     })
// })
function renderPage(pdf, pageNum)
{
    pdf.promise.then(function(pdf){
    pdf.getPage(pageNum).then(function(page){
            var scale = 1;
            var viewport = page.getViewport({ scale: scale, });
            // Support HiDPI-screens.
            var outputScale = window.devicePixelRatio || 1;

            var canvas = document.getElementById(''+pageNum);
            var context = canvas.getContext('2d');

            canvas.width = Math.floor(viewport.width * outputScale);
            canvas.height = Math.floor(viewport.height * outputScale);
            canvas.style.width = Math.floor(viewport.width) + "px";
            canvas.style.height =  Math.floor(viewport.height) + "px";

            var transform = outputScale !== 1
            ? [outputScale, 0, 0, outputScale, 0, 0]
            : null;

            var renderContext = {
            canvasContext: context,
            transform: transform,
            viewport: viewport
            };
            page.render(renderContext);
        })
    });
}
