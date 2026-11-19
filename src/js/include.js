// header
async function includeHTML(selector, file) {
  const response = await fetch(file);
  const html = await response.text();

  document.querySelector(selector).innerHTML = html;
}

includeHTML("#header", "/components/header.html");
includeHTML("#footer", "/components/footer.html");
