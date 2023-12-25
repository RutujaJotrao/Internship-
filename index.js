document.getElementById("addButton").addEventListener("click", () => {
    let text = document.getElementById("shop").value;
    let text1 = document.getElementById("gsttype").value;
    let text2 = document.getElementById("category").value;
    let text3 = document.getElementById("product").value;
    let text4 = document.getElementById("price").value;
    let text5 = document.getElementById("availstock").value;
    let text6 = document.getElementById("quantity").value;
  
    let data = "shop : " + text + "gsttype : " + text1+"category : " + text2 + "product : " + text3+"price : " + text4 + "availstock : " + text5+"quantity :"+text6;
   JsBarcode("#barcode", data ,{

    text: "Special",
    font: "cursive",
    fontOptions: "bold",
    fontSize: 40,
    width:2,
    
   });
  
  });


  document.getElementById("download").addEventListener("click", () => {
    // Get the SVG element
    const svgElement = document.getElementById("barcode");
  
    // Create a Data URL from the SVG content
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
  
    // Create a link element and trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "barcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });

  document.getElementById("Next").addEventListener("click", () => {

    window.location.href = 'next.html';

  });


  