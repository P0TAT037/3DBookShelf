pdfjsLib.GlobalWorkerOptions.workerSrc ="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.worker.min.js";

var bookDivHtml = "";

function renderBook(pdfDir){
    
    var bookDiv = document.getElementById(pdfDir);  
    pdfjsLib.getDocument(pdfDir).promise.then(function (doc) {
        
        
        pc = doc.numPages;
        for(let i = 1; i <= pc; i++){
            bookDivHtml+="<div class = 'page'><canvas id='" + i + "p'></canvas></div>\n";
        }

        bookDiv.innerHTML += bookDivHtml;
        console.log('done');
        console.log(bookDivHtml);

        for(let j = 1; j <= pc; j++){
            renderPage(doc, j);
        }
                
        doc.getPage(1).then(function(page){
            var v = page.getViewport({ scale: 1, });
            
            var w = v.width*2;

            getWidth = function(){return w;};
        
        });

        doc.getPage(1).then(function(page){
            var v = page.getViewport({ scale: 1, });
            
            var h = v.height;
        
            getHeight = function(){return h};
        
        });
        


    }); 

}

var getWidth;

var getHeight;

function renderPage(pdf, pageNum)
{         

    pdf.getPage(pageNum).then(function(page){
        
        var scale = 1;
        var viewport = page.getViewport({ scale: scale, });
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
    });
}
