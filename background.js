function script(conteudo) {
  var linhas = document.querySelector("#form > fieldset > table").rows.length;
  var i = 1;
  var resultado = document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br>";
  i++;
  while (i < linhas) {
    resultado += document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br>";
    i++;
  }
  // console.log(conteudo);
  // conteudo.value = resultado;    
  // window.open("", resultado);
  newpopupWindow = window.open('', 'pagina', "width=400 height=400");
  newpopupWindow.document.write("");
  newpopupWindow.document.write(document.querySelector("#form > fieldset > div:nth-child(3)").innerText + "<br><br>"+ resultado);
  // return resultado;
  // document.querySelector("#conteudo_extension").value =  resultado;
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
