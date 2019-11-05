var timerId = null;

function GetCanvasHues(canvasRef, byLine = false, ByRow = true) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let cw = canvas.width,
        ch = canvas.height;
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let hues = [];
    if (!byLine) {
        for (let i = 0; i < cw; i++) {
            for (let j = 0; j < ch; j++) {
                // Get RGB data
                let r = imgData.data[4 * (i * ch + j) + 0]
                let g = imgData.data[4 * (i * ch + j) + 1]
                let b = imgData.data[4 * (i * ch + j) + 2]
                // let a = imgData.data[4 * (i * ch + j) + 3]
                // console.log(r,g,b);
                // Get HSV from RGB
                let hsv = rgbToHsl([r, g, b]);
                let h = hsv.h;
                // let s = hsv.s;
                // let l = hsv.l;

                // Store hue
                hues.push(h);
            }
        }
    } else {
        if (ByRow) {

            for (let i = 0; i < ch; i++) {
                let theseHues = [];
                for (let j = 0; j < cw; j++) {
                    // Get RGB data
                    let r = imgData.data[4 * (i * cw + j) + 0]
                    let g = imgData.data[4 * (i * cw + j) + 1]
                    let b = imgData.data[4 * (i * cw + j) + 2]
                    // let a = imgData.data[4 * (i * ch + j) + 3]
                    // Get HSV from RGB
                    let hsv = rgbToHsl([r, g, b]);
                    let h = hsv.h;
                    // let s = hsv.s;
                    // let l = hsv.l;

                    // Store hue
                    theseHues.push(h);
                }
                hues.push(theseHues);
            }
            console.log(hues);
        } else {
            for (let i = 0; i < cw; i++) {
                let theseHues = [];
                for (let j = 0; j < ch; j++) {
                    // Get RGB data
                    // console.log( 4* (j * cw + i));
                    let r = imgData.data[4 * (j * cw + i) + 0];
                    let g = imgData.data[4 * (j * cw + i) + 1];
                    let b = imgData.data[4 * (j * cw + i) + 2];
                    // let a = imgData.data[4 * (i * ch + j) + 3]
                    // Get HSV from RGB
                    let hsv = rgbToHsl([r, g, b]);
                    let h = hsv.h;
                    // let s = hsv.s;
                    // let l = hsv.l;

                    // Store hue
                    theseHues.push(h);
                }
                hues.push(theseHues);
            }
        }
    }
    return hues;
}

function SortByHue(canvasRef, isSortRunningCallBack) {
    const canvas = canvasRef.current;
    let cw = canvas.width,
        ch = canvas.height;
    const ctx = canvas.getContext('2d');
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let pix = imgData.data;
    // let pixString = JSON.stringify(pix);
    let hues = [];
    let hasChanged = false;
    // Get all hues
    hues = GetCanvasHues(canvasRef, false);
    // 'Bubble sort' hues in image data
    for (let i = 1; i < hues.length; i++) {
        if (hues[i] < hues[i - 1]) {
            hasChanged = true;

            // Swap pixels in actual imgData model

            let r = pix[4 * i + 0];
            let g = pix[4 * i + 1];
            let b = pix[4 * i + 2];
            let a = pix[4 * i + 3];

            pix[4 * i + 0] = pix[4 * (i - 1) + 0];
            pix[4 * i + 1] = pix[4 * (i - 1) + 1];
            pix[4 * i + 2] = pix[4 * (i - 1) + 2];
            pix[4 * i + 3] = pix[4 * (i - 1) + 3];

            pix[4 * (i - 1) + 0] = r;
            pix[4 * (i - 1) + 1] = g;
            pix[4 * (i - 1) + 2] = b;
            pix[4 * (i - 1) + 3] = a;

        }

    }
    // Put image data back to canvas
    ctx.putImageData(imgData, 0, 0);
    if (!hasChanged) {
        clearInterval(timerId);
        console.log('done', timerId);
        isSortRunningCallBack(false);
    }
}

function SortByHueSKIP(canvasRef, isSortRunningCallBack) {
    console.log('SKIP');
    const canvas = canvasRef.current;
    let cw = canvas.width,
        ch = canvas.height;
    const ctx = canvas.getContext('2d');
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let pix = imgData.data;
    // let pixString = JSON.stringify(pix);
    let hues = [];
    // Get all hues
    hues = GetCanvasHues(canvasRef, false);
    // 'Bubble sort' hues in image data
    for (let j = 0; j < hues.length; j++)
        for (let i = 1; i < hues.length; i++) {
            if (hues[i] < hues[i - 1]) {

                // Swap pixels in actual imgData model
                let temp=hues[i];
                hues[i] = hues[i - 1];
                hues[i-1]=temp;
                let r = pix[4 * i + 0];
                let g = pix[4 * i + 1];
                let b = pix[4 * i + 2];
                let a = pix[4 * i + 3];

                pix[4 * i + 0] = pix[4 * (i - 1) + 0];
                pix[4 * i + 1] = pix[4 * (i - 1) + 1];
                pix[4 * i + 2] = pix[4 * (i - 1) + 2];
                pix[4 * i + 3] = pix[4 * (i - 1) + 3];

                pix[4 * (i - 1) + 0] = r;
                pix[4 * (i - 1) + 1] = g;
                pix[4 * (i - 1) + 2] = b;
                pix[4 * (i - 1) + 3] = a;

            }

        }
    // Put image data back to canvas
    ctx.putImageData(imgData, 0, 0);
    clearInterval(timerId);
    isSortRunningCallBack(false);

}

function SortByHueByRow(canvasRef, isSortRunningCallBack) {
    const canvas = canvasRef.current;
    let cw = canvas.width,
        ch = canvas.height;
    const ctx = canvas.getContext('2d');
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let pix = imgData.data;
    let hues = [];
    let hasChanged = false;
    // Get all hues
    hues = GetCanvasHues(canvasRef, true);
    // 'Bubble sort' hues in image data
    for (let i = 0; i < hues.length; i++) {
        // console.log(i);
        for (let j = 1; j < hues[i].length; j++) {
            if (hues[i][j] < hues[i][j - 1]) {
                hasChanged = true;

                // Swap pixels in actual imgData model

                let r = pix[4 * (i * hues[0].length + j) + 0]
                let g = pix[4 * (i * hues[0].length + j) + 1]
                let b = pix[4 * (i * hues[0].length + j) + 2]
                let a = pix[4 * (i * hues[0].length + j) + 3]

                pix[4 * (i * hues[0].length + j) + 0] = pix[4 * (i * hues[0].length + j - 1) + 0];
                pix[4 * (i * hues[0].length + j) + 1] = pix[4 * (i * hues[0].length + j - 1) + 1];
                pix[4 * (i * hues[0].length + j) + 2] = pix[4 * (i * hues[0].length + j - 1) + 2];
                pix[4 * (i * hues[0].length + j) + 3] = pix[4 * (i * hues[0].length + j - 1) + 3];

                pix[4 * (i * hues[0].length + j - 1) + 0] = r;
                pix[4 * (i * hues[0].length + j - 1) + 1] = g;
                pix[4 * (i * hues[0].length + j - 1) + 2] = b;
                pix[4 * (i * hues[0].length + j - 1) + 3] = a;

            }
        }
    }
    // Put image data back to canvas
    ctx.putImageData(imgData, 0, 0);
    if (!hasChanged) {
        console.log('done', timerId, 'calling callback');
        clearInterval(timerId);
        isSortRunningCallBack(false);
    }
}

function SortByHueByCol(canvasRef, isSortRunningCallBack) {
    const canvas = canvasRef.current;
    let cw = canvas.width,
        ch = canvas.height;
    const ctx = canvas.getContext('2d');
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let pix = imgData.data;
    let hues = [];
    let hasChanged = false;
    // Get all hues
    hues = GetCanvasHues(canvasRef, true, false);
    // 'Bubble sort' hues in image data
    console.log(hues);
    for (let i = 0; i < hues.length; i++) {
        // console.log(i);
        for (let j = 1; j < hues[i].length; j++) {
            if (hues[i][j] < hues[i][j - 1]) {
                hasChanged = true;

                // Swap pixels in actual imgData model

                let r = pix[4 * (j * hues.length + i) + 0];
                let g = pix[4 * (j * hues.length + i) + 1];
                let b = pix[4 * (j * hues.length + i) + 2];
                let a = pix[4 * (j * hues.length + i) + 3];

                pix[4 * (j *hues.length+ i) + 0] = pix[4 * ((j - 1) * hues.length + i) + 0];
                pix[4 * (j *hues.length+ i) + 1] = pix[4 * ((j - 1) * hues.length + i) + 1];
                pix[4 * (j *hues.length+ i) + 2] = pix[4 * ((j - 1) * hues.length + i) + 2];
                pix[4 * (j *hues.length+ i) + 3] = pix[4 * ((j - 1) * hues.length + i) + 3];

                pix[4 * ((j - 1) * hues.length + i) + 0] = r;
                pix[4 * ((j - 1) * hues.length + i) + 1] = g;
                pix[4 * ((j - 1) * hues.length + i) + 2] = b;
                pix[4 * ((j - 1) * hues.length + i) + 3] = a;

            }
        }
    }
    // Put image data back to canvas
    ctx.putImageData(imgData, 0, 0);
    if (!hasChanged) {
        console.log('done', timerId, 'calling callback');
        clearInterval(timerId);
        isSortRunningCallBack(false);
    }
}

function InsertionSortByHueByRow(canvasRef, isSortRunningCallBack) {
    const canvas = canvasRef.current;
    let cw = canvas.width,
        ch = canvas.height;
    const ctx = canvas.getContext('2d');
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let pix = imgData.data;
    let hues = [];
    let hasChanged = false;
    // Get all hues
    hues = GetCanvasHues(canvasRef, true);
    // 'Bubble sort' hues in image data
    for (let i = 0; i < hues.length; i++) {
        // console.log(i);
        let length = hues[i].length;
        for (let j = 1; j < length; j++) {
            let shouldBreak = false;
            let key = hues[i][j];
            let r = pix[4 * (i * hues[0].length + j) + 0];
            let g = pix[4 * (i * hues[0].length + j) + 1];
            let b = pix[4 * (i * hues[0].length + j) + 2];
            let a = pix[4 * (i * hues[0].length + j) + 3];

            let k = j - 1;
            while (k >= 0 && hues[i][k] > key) {
                hasChanged = true;
                shouldBreak = true;
                hues[i][k + 1] = hues[i][k];
                pix[4 * (i * hues[0].length + k + 1) + 0] = pix[4 * (i * hues[0].length + k) + 0];
                pix[4 * (i * hues[0].length + k + 1) + 1] = pix[4 * (i * hues[0].length + k) + 1];
                pix[4 * (i * hues[0].length + k + 1) + 2] = pix[4 * (i * hues[0].length + k) + 2];
                pix[4 * (i * hues[0].length + k + 1) + 3] = pix[4 * (i * hues[0].length + k) + 3];


                k = k - 1;
            }
            hues[i][k + 1] = key;

            pix[4 * (i * hues[0].length + k + 1) + 0] = r;
            pix[4 * (i * hues[0].length + k + 1) + 1] = g;
            pix[4 * (i * hues[0].length + k + 1) + 2] = b;
            pix[4 * (i * hues[0].length + k + 1) + 3] = a;
            if (shouldBreak)
                break;
        }
    }
    // Put image data back to canvas
    ctx.putImageData(imgData, 0, 0);
    if (!hasChanged) {
        console.log('done', timerId, 'calling callback');
        clearInterval(timerId);
        isSortRunningCallBack(false);
    }
}

function InsertionSortByHueByCol(canvasRef, isSortRunningCallBack) {
    const canvas = canvasRef.current;
    let cw = canvas.width,
        ch = canvas.height;
    const ctx = canvas.getContext('2d');
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let pix = imgData.data;
    let hues = [];
    let hasChanged = false;
    // Get all hues
    hues = GetCanvasHues(canvasRef, true,false);
    // 'Bubble sort' hues in image data
    for (let i = 0; i < hues.length; i++) {
        console.log(hues.length,hues[0].length+'!@#@!');
        let length = hues[0].length;
        for (let j = 1; j < length; j++) {
            let shouldBreak = false;
            let key = hues[i][j];
            let r = pix[4 * (j * hues.length + i) + 0];
            let g = pix[4 * (j * hues.length + i) + 1];
            let b = pix[4 * (j * hues.length + i) + 2];
            let a = pix[4 * (j * hues.length + i) + 3];

            let k = j - 1;
            while (k >= 0 && hues[i][k] > key) {
                hasChanged = true;
                shouldBreak = true;
                hues[i][k + 1] = hues[i][k];
                pix[4 * ((k + 1) * hues.length + i) + 0] = pix[4 * (k * hues.length + i) + 0];
                pix[4 * ((k + 1) * hues.length + i) + 1] = pix[4 * (k * hues.length + i) + 1];
                pix[4 * ((k + 1) * hues.length + i) + 2] = pix[4 * (k * hues.length + i) + 2];
                pix[4 * ((k + 1) * hues.length + i) + 3] = pix[4 * (k * hues.length + i) + 3];


                k = k - 1;
            }
            hues[i][k + 1] = key;

            pix[4 * ((k + 1) * hues.length + i) + 0] = r;
            pix[4 * ((k + 1) * hues.length + i) + 1] = g;
            pix[4 * ((k + 1) * hues.length + i) + 2] = b;
            pix[4 * ((k + 1) * hues.length + i) + 3] = a;
            if (shouldBreak)
                break;
        }
    }
    // Put image data back to canvas
    ctx.putImageData(imgData, 0, 0);
    if (!hasChanged) {
        console.log('done', timerId, 'calling callback');
        clearInterval(timerId);
        isSortRunningCallBack(false);
    }
}

function InsertionSortByHue(canvasRef, isSortRunningCallBack) {
    const canvas = canvasRef.current;
    let cw = canvas.width,
        ch = canvas.height;
    const ctx = canvas.getContext('2d');
    let imgData = ctx.getImageData(0, 0, cw, ch);
    let pix = imgData.data;
    let hues = [];
    let hasChanged = false;
    // Get all hues
    hues = GetCanvasHues(canvasRef, false);
    // 'Bubble sort' hues in image data
    for (let i = 1; i < hues.length; i++) {
        let shouldBreak = false;
        let key = hues[i];
        let r = pix[4 * (i) + 0];
        let g = pix[4 * (i) + 1];
        let b = pix[4 * (i) + 2];
        let a = pix[4 * (i) + 3];

        let k = i - 1;
        while (k >= 0 && hues[k] > key) {
            hasChanged = true;
            shouldBreak = true;
            hues[k + 1] = hues[k];
            pix[4 * ((k + 1)) + 0] = pix[4 * (k) + 0];
            pix[4 * ((k + 1)) + 1] = pix[4 * (k) + 1];
            pix[4 * ((k + 1)) + 2] = pix[4 * (k) + 2];
            pix[4 * ((k + 1)) + 3] = pix[4 * (k) + 3];


            k = k - 1;
        }
        hues[k + 1] = key;

        pix[4 * ((k + 1)) + 0] = r;
        pix[4 * ((k + 1)) + 1] = g;
        pix[4 * ((k + 1)) + 2] = b;
        pix[4 * ((k + 1)) + 3] = a;
        if (shouldBreak)
            break;
    }
    // Put image data back to canvas
    ctx.putImageData(imgData, 0, 0);
    if (!hasChanged) {
        console.log('done', timerId, 'calling callback');
        clearInterval(timerId);
        isSortRunningCallBack(false);
    }
}
// gets an array of rgb colors  => ([r,g,b])
function rgbToHsl(c) {
    var r = c[0] / 255,
        g = c[1] / 255,
        b = c[2] / 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
        // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    };
}

function RandomizeCanvas(canvasRef) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let height = canvas.height, i = 0; i < height; i++) {
        for (let width = canvas.width, j = 0; j < width; j++) {
            ctx.fillStyle = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
            // ctx.fillStyle =`hsla(${Math.random() * 360}, ${Math.random()*100}%, ${Math.random()*100}%, ${Math.random()})`
            ctx.fillRect(j, i, 1, 1);
        }
    }
    console.log(canvas.width,canvas.height);
}

function Sort(sortfunc, interval, canvasRef, setSortRunning) {
    // console.log('rest is:');
    // console.log(...rest);
    timerId = setInterval(sortfunc, interval, canvasRef, setSortRunning);
    setSortRunning(true);
    console.log(timerId);
}

function CancelSort(setSortRunning) {
    if (timerId) {
        setSortRunning(false);
        clearInterval(timerId);
    }
}
export {
    SortByHueSKIP,
    SortByHue,
    SortByHueByRow,
    SortByHueByCol,
    InsertionSortByHueByRow,
    InsertionSortByHue,
    InsertionSortByHueByCol,
    Sort,
    RandomizeCanvas,
    CancelSort
};