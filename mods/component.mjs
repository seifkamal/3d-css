export function init() {
  customElements.define(
    "comp-loader",
    class extends HTMLElement {
      async connectedCallback() {
        if (!this.name) {
          throw new Error("component name unspecified");
        }
        const temp = await loadTemplate(this.name);
        this.attachShadow({ mode: "open" }).appendChild(
          temp.content.cloneNode(true)
        );
      }

      get name() {
        return this.getAttribute("name");
      }
    }
  );
}

/**
 * @param {string} name
 * @returns {Promise<HTMLTemplateElement>}
 */
async function loadTemplate(name) {
  const tempName = `${name}-comp`;
  const existingTemp = document.getElementById(tempName);
  if (existingTemp instanceof HTMLTemplateElement) {
    return existingTemp;
  }

  const res = await fetch(`/components/${name}.html`);
  const html = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const template = doc.head.firstElementChild;
  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error(`no template found for component '${name}'`);
  }
  if (!template.id) {
    template.id = tempName;
  }
  document.head.appendChild(template);

  return template;
}
