document.querySelectorAll("template[shadowroot]").forEach((template) => {
  console.log(template);
  const mode = template.getAttribute("shadowroot");
  const shadowRoot = template.parentNode.attachShadow({ mode });
  shadowRoot.appendChild(template.content);
  template.remove();
});
