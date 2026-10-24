# ConectaSocial — Projeto acadêmico

Plataforma demonstrativa de uma ONG fictícia, desenvolvida com HTML5 semântico, CSS3 responsivo e JavaScript puro.

## Entrega II — Design responsivo com CSS3

A segunda etapa aprimora a identidade visual e a experiência de uso sem substituir o conteúdo da primeira etapa.

### Requisitos implementados

- **Design system com CSS custom properties:** paleta com mais de oito cores, escalas tipográficas, espaçamento de 8, 16, 24, 32, 48 e 64 px, bordas e sombras.
- **Layout responsivo:** CSS Grid para estruturas e cartões; Flexbox para navegação, botões e alinhamento interno; grade utilitária de 12 colunas.
- **Breakpoints:** 1200, 1024, 900, 700, 440 e 360 px, além de preferências para movimento reduzido.
- **Navegação:** menu mobile com botão e estado ARIA; submenu de projetos que funciona com mouse e teclado.
- **Componentes:** cartões, badges/tags, botões com estados de foco/hover/ativo/desabilitado, campos de formulário com feedback de validade, alertas, toast e modal acessível.
- **Acessibilidade:** HTML semântico, link para pular conteúdo, foco visível, rótulos de formulário, textos alternativos, mensagens de estado e suporte a movimento reduzido.
- **JavaScript:** filtros de projetos, máscaras de campos, validação nativa, toast demonstrativo e modal nativo.

## Estrutura

```text
ConectaSocial/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   ├── styles.css
│   ├── variables.css
│   ├── components.css
│   ├── navigation.css
│   ├── feedback.css
│   └── responsive.css
├── js/
│   └── main.js
└── assets/
    └── img/
        ├── hero.svg
        ├── projects-hero.svg
        ├── educacao.svg
        ├── meio-ambiente.svg
        ├── comunidade.svg
        └── signup.svg
```

## Como executar e testar

1. Baixe ou clone este repositório.
2. Abra `index.html` no navegador ou execute a pasta com a extensão **Live Server** do Visual Studio Code.
3. Confira as três páginas em larguras de desktop, tablet e celular.
4. Teste a navegação por teclado, submenu, filtros, campos inválidos/válidos, toast e modal.
5. Confira o console do navegador e valide os HTMLs em https://validator.w3.org/.

## GitHub Pages

Este repositório é público. Para publicar o site estático, abra **Settings → Pages**, escolha a branch `main` e a pasta `/(root)`, e salve. A publicação pode levar alguns minutos; o GitHub mostrará a URL na mesma tela.

A branch `entrega-ii-css3` contém as alterações desta etapa para revisão antes de integrá-las à branch principal.

## Limites do protótipo acadêmico

- Os números, metas e projetos são fictícios e ilustrativos.
- O formulário não envia nem armazena dados. Não use dados pessoais reais durante os testes.
- Não há processamento real de doações, autenticação, banco de dados ou painel administrativo.
- A máscara do CPF não valida os dígitos verificadores.
- A fonte tipográfica é carregada do Google Fonts quando há conexão; as ilustrações são locais.
- GitHub Pages hospeda arquivos estáticos e não executa backend.

## Organização do CSS

- `variables.css`: tokens do design system.
- `components.css`: componentes comuns, estados e grade de 12 colunas.
- `navigation.css`: dropdown e ajustes da navegação.
- `feedback.css`: alertas, toast e modal.
- `responsive.css`: breakpoints responsivos.
- `styles.css`: estilos base e específicos das páginas, com importação dos módulos.

