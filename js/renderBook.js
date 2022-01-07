var pdf = pdfjsLib.getDocument('../res/SWE.pdf');
var w, h;
var bookDivHtml = "";

document.querySelectorAll('.book').forEach(function(book) {
    renderBook(book);   
}); 


function renderBook(book){
    pdf.promise.then(function (doc) {
        pc = doc.numPages;
        
        for(let i = 1; i <= pc; i++){
            bookDivHtml+="<div class = 'page'><canvas id='" + i + "p'></canvas></div>\n";
        }

        book.innerHTML=bookDivHtml;
        console.log('done');
        console.log(bookDivHtml);
        
        for(let j = 1; j <= pc; j++){
            renderPage(pdf, j);
        };
    });
    
}

function renderPage(pdf, pageNum)
{
    pdf.promise.then(function(pdf){
    pdf.getPage(pageNum).then(function(page){
            var scale = 1;
            var viewport = page.getViewport({ scale: scale, });
            // Support HiDPI-screens.
            var outputScale = window.devicePixelRatio || 1;

            var canvas = document.getElementById(pageNum+'p');
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
            console.log("rendered");
        })
    });
}
