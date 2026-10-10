# ConectaSocial — Projeto acadêmico

Plataforma demonstrativa de uma ONG fictícia, criada com HTML5 semântico, CSS3 responsivo e JavaScript puro.

## Estrutura

```text
ConectaSocial/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── styles.css
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

## Como executar

1. Extraia a pasta.
2. Abra `index.html` no navegador, ou use a extensão **Live Server** no Visual Studio Code.
3. Navegue pelas páginas e teste os filtros e o formulário.

## O que está implementado

- Três páginas HTML5 com elementos semânticos e hierarquia de títulos.
- Layout responsivo com abordagem mobile-first e media queries.
- Navegação móvel acessível por botão.
- Formulário com campos HTML5, `required`, `minlength`, `maxlength`, `pattern`, `fieldset` e `legend`.
- Máscaras JavaScript para CPF, telefone e CEP.
- Validação nativa com `checkValidity()` e `reportValidity()`.
- Filtros de projetos e barra de progresso demonstrativa.
- Recursos básicos de acessibilidade: link para pular conteúdo, foco visível, rótulos de formulário, textos alternativos, mensagens de estado e preferência por movimento reduzido.
- Metadados básicos para SEO.
- Ilustrações locais em SVG, que são vetoriais e leves.

## Importante: limites do protótipo

- Os números, metas e projetos são fictícios e servem apenas para demonstração acadêmica.
- O formulário não envia nem armazena dados. Não inclua informações pessoais reais durante os testes.
- Não existe processamento de doações, login, banco de dados, certificados digitais ou painel administrativo conectado.
- O formulário aplica máscara de CPF, mas não valida os dígitos verificadores do CPF.
- A fonte tipográfica é carregada do Google Fonts quando há conexão com a internet; o restante do site usa recursos locais.
- O HTTPS depende do serviço de hospedagem. GitHub Pages oferece hospedagem estática com HTTPS, mas não executa backend.

## Validar HTML

Valide individualmente os arquivos `index.html`, `projetos.html` e `cadastro.html` em:
https://validator.w3.org/

A validação deve ser feita novamente após qualquer alteração. Confira também o console do navegador e teste o site em celular e desktop.

## Publicar no GitHub

1. Crie uma conta em https://github.com/ caso ainda não tenha.
2. Crie um repositório público chamado `conectasocial`.
3. Envie todos os arquivos e pastas, mantendo a estrutura.
4. Abra **Settings → Pages**.
5. Em **Build and deployment**, selecione a publicação a partir da branch `main` e da pasta `/ (root)`.
6. Salve e aguarde a publicação. O GitHub mostrará o endereço público do site nessa tela.
7. Entregue o link do repositório e, se o professor aceitar, também o link do site publicado.

## Próximas melhorias para uma versão de produção

- Backend e banco de dados com controle de acesso.
- Política de privacidade real e tratamento de dados conforme a LGPD.
- Validação de CPF no servidor e proteção contra abuso.
- Gateway de pagamento seguro para doações, sem armazenar dados de cartão.
- Painel administrativo e relatórios com dados reais.
- Otimização de fontes e CSS/JS para publicação.
- Auditoria de acessibilidade com teclado, leitor de tela e ferramentas automáticas.
