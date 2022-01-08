
var bookDivHtml = "";

// var w = div.children[0].children[0].clientWidth*2;
// var h = div.children[0].children[0].clientHeight;

// document.querySelectorAll('.book').forEach(function() {
//     renderBook(pdfDir);   
// }); 



function renderBook(pdfDir, callback){
    var bookDiv = document.getElementById(pdfDir);
    pdfjsLib.getDocument(pdfDir).promise.then(function (doc) {
        pc = doc.numPages;
        for(let i = 1; i <= pc; i++){
            bookDivHtml+="<div class = 'page'><canvas id='" + i + "p'></canvas></div>\n";
        }

        bookDiv.innerHTML=bookDivHtml;
        console.log('done');
        console.log(bookDivHtml);
        
        for(let j = 1; j <= pc; j++){
            renderPage(pdfDir, j);
            console.log("somethins is done");
        };
     
        doc.getPage(1).then(function(page){
            var viewport = page.getViewport({ scale: 1, });
            
            var w = viewport.width*2;
            var h = viewport.height;
            callback(pdfDir, w, h);
        })
     
    }); 
}

function renderPage(pdfDir, pageNum)
{
    pdfjsLib.getDocument(pdfDir).promise.then(function(pdf){
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
