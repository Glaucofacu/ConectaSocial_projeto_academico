/* ConectaSocial — interações demonstrativas */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll("[data-year]");
  yearElements.forEach((element) => { element.textContent = new Date().getFullYear(); });

  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".main-nav");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("is-open", !isOpen);
    });
  }

  // Máscaras de CPF, telefone e CEP. Os atributos pattern do HTML continuam ativos.
  const cpf = document.querySelector("#cpf");
  const phone = document.querySelector("#telefone");
  const cep = document.querySelector("#cep");

  cpf?.addEventListener("input", () => {
    let value = cpf.value.replace(/\D/g, "").slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpf.value = value;
  });

  phone?.addEventListener("input", () => {
    let value = phone.value.replace(/\D/g, "").slice(0, 11);
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d+)/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/^(\d+)/, "($1");
    }
    phone.value = value;
  });

  cep?.addEventListener("input", () => {
    let value = cep.value.replace(/\D/g, "").slice(0, 8);
    if (value.length > 5) value = value.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
    cep.value = value;
  });

  // Filtros acessíveis da página de projetos.
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll("[data-category]");
  const filterStatus = document.querySelector("#filter-status");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      let visibleCount = 0;
      projectCards.forEach((card) => {
        const visible = selected === "todos" || card.dataset.category === selected;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (filterStatus) {
        filterStatus.textContent = selected === "todos"
          ? `Exibindo todos os ${visibleCount} projetos.`
          : `Exibindo ${visibleCount} projeto(s) da categoria selecionada.`;
      }
    });
  });

  // A página não transmite nem salva informações: apenas demonstra a validação.
  const form = document.querySelector("#registration-form");
  const message = document.querySelector("#form-message");
  if (form && message) {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get("interesse");
    if (interest && form.elements.interesse) {
      const allowed = ["voluntariado", "apoio", "parceria", "informacoes"];
      if (allowed.includes(interest)) form.elements.interesse.value = interest;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        message.textContent = "Confira os campos destacados e tente novamente.";
        message.classList.add("is-error");
        return;
      }
      message.textContent = "Validação concluída! Este é um protótipo: nenhum dado foi enviado ou armazenado.";
      message.classList.remove("is-error");
      message.classList.add("is-success");
    });

    form.addEventListener("reset", () => {
      message.textContent = "Este formulário é uma demonstração acadêmica: os dados não são armazenados nem enviados.";
      message.classList.remove("is-error", "is-success");
    });
  }
});
