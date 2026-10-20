/* Teste mínimo de Custom Element para o Wix Studio. Tag: tg-ping
   Mostra «TECHNOGREEN — TESTE OK» e onde está a correr (iframe, origem, sandbox), para distinguir
   «o script não chegou a carregar» de «carregou mas o Wix mostra-o noutro contexto». */
(() => {
  if (!window.customElements || customElements.get("tg-ping")) return;
  class TgPing extends HTMLElement {
    connectedCallback() {
      let framed = "?";
      try { framed = window.self !== window.top ? "sim" : "não"; } catch (e) { framed = "sim (origem diferente)"; }
      const info = [
        "origem: " + window.origin,
        "em iframe: " + framed,
        "sandbox (origem opaca): " + (window.origin === "null" ? "sim" : "não"),
        "contexto seguro: " + window.isSecureContext,
      ].join(" · ");
      this.innerHTML = '<div style="font:700 20px/1.4 system-ui,sans-serif;color:#033a1f;background:#c6dc3c;padding:16px 20px">'
        + "TECHNOGREEN — TESTE OK"
        + '<div style="font:400 13px/1.4 system-ui,sans-serif;margin-top:6px">' + info + "</div></div>";
      console.log("[tg-ping] carregado:", info);
    }
  }
  customElements.define("tg-ping", TgPing);
})();
