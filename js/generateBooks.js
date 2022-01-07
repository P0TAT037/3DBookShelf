var pdf = pdfjsLib.getDocument('../res/SWE.pdf');
renderFirstPage(pdf, "titleb1");
document.getElementById("titleb1").addEventListener('click', turn());

function renderFirstPage(pdf, canvId)
{
    pdf.promise.then(function(pdf){
    pdf.getPage(1).then(function(page){
            var scale = 1;
            var viewport = page.getViewport({ scale: scale, });
            // Support HiDPI-screens.
            var outputScale = window.devicePixelRatio || 1;

            var canvas = document.getElementById(canvId);
            var context = canvas.getContext('2d');

            canvas.width = Math.floor(viewport.width * outputScale);
            canvas.height = Math.floor(viewport.height * outputScale);
            canvas.style.width = 130 + "px";
            canvas.style.height =  180 + "px";
            
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

