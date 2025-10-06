function script3(conteudo) {
  const colunasTop = document.querySelectorAll('table.participantes td[valign="top"], table.participantes th[valign="top"]');
  var output = "";
  colunasTop.forEach(td => {
    output += td.innerText.trim().replace("\n", ";").replace("Formação:",";").replace("Matrícula:", ";").replace("Departamento:","").replace("Curso:", "").replace("E-Mail:",";").replace("E-mail:", ";") +"<br>";
  });
  newpopupWindow = window.open('', 'pagina', "");
  newpopupWindow.document.write("");
  newpopupWindow.document.write("<h3>"+document.getElementById("linkNomeTurma").innerText + "</h3><br>" + output + "<hr> <h3>Lista de E-mail dos discentes da turma:</h3><br> "+document.getElementById("divEmails").innerHTML);
}

function script2(conteudo) {
  var tabela = document.querySelector(".listing");
  var linhas = tabela.rows;
  var primeiraColuna = [];
  var segundaColuna = [];
  for (let i = 1; i < linhas.length; i++) {
    var celula = linhas[i].cells[0];
    if (celula && celula.style.fontWeight == "bold") {
      primeiraColuna.push(celula.innerText.trim());
    }
  }
  var linhas = document.querySelectorAll('[style="width:150px;text-align:center;"]');
  for (let i = 0; i < linhas.length; i++) {
    segundaColuna.push(linhas[i].innerText);
  }
  if (primeiraColuna.length > 0) {
    newpopupWindow = window.open('', 'pagina', "");
    newpopupWindow.document.write("");
    var output = document.getElementById("linkNomeTurma").innerText + " <br> <br>";
    for (let index = 0; index < primeiraColuna.length; index++) {
      var element1 = primeiraColuna[index];
      var element2 = segundaColuna[index];
      output += "* " + element1 + " - " + element2 + "<br>";
    }
    newpopupWindow.document.write(output);
  } else {
    newpopupWindow = window.open('', 'pagina', "");
    newpopupWindow.document.write("");
    newpopupWindow.document.write(document.getElementById("linkNomeTurma").innerText + " <br> <br>");
  }
}

function script1(conteudo) {
  try {
    var linhas = document.querySelector("#form > fieldset > table").rows.length;
    var i = 1;
    var resultado = "<br><br>================<br><br>";
    while (i < linhas) {
      resultado += document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br><br>================<br><br>";
      i++;
    }
    if (linhas > 0) {
      //  baixando todos os trabalhos!
      document.querySelector("#form > fieldset > p > a").click();

      newpopupWindow = window.open('', 'pagina', "");
      newpopupWindow.document.write("");
      newpopupWindow.document.write(document.getElementById("linkNomeTurma").innerText + "<br> <br>" + document.querySelector("#form > fieldset > div:nth-child(3)").innerText + resultado);
    }
  } catch (error) {
    newpopupWindow = window.open('', 'pagina', "");
    newpopupWindow.document.write("");
    newpopupWindow.document.write(document.getElementById("linkNomeTurma").innerText + "<br> <br>");
  }

}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").addEventListener("click", function () {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script1
      });
    })()
  });

  document.querySelector("#btn2").addEventListener("click", function () {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script2
      });
    })()
  });

  document.querySelector("#btn3").addEventListener("click", function () {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script3
      });
    })()
  });
});   
