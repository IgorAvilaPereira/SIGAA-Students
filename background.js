function script(conteudo) {
  var linhas = document.querySelector("#form > fieldset > table").rows.length;
  var i = 1;
  var resultado = "";
  while (i < linhas) {
    resultado += document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br>================<br>";
    i++;
  }
  if (linhas > 0){
      //  baixando todos os trabalhos!
      document.querySelector("#form > fieldset > p > a").click();     
      
      newpopupWindow = window.open('', 'pagina', "");
//    newpopupWindow.document.title = document.querySelector("#form > fieldset > div:nth-child(3)").innerText;
      newpopupWindow.document.write("");
      newpopupWindow.document.write(document.querySelector("#form > fieldset > div:nth-child(3)").innerText + "<br><br>"+ resultado);    
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").addEventListener("click", function () {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script
      });
    })()
  });
});   
