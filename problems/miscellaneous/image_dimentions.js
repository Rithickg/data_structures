// get image dimensions 

function imgDimension(source){
    const img = new Image()
    img.src = source;

    img.onload = function(){
        console.log('width:' + this.width)
        console.log('height' + this.height)
    }
}

let source = 'url'
imgDimension(source)