# Como contribuir — Projeto Concurso MPMG

Este app é **público e compartilhado**. Quem está estudando para o MPMG (ou qualquer concurso de Promotor com programa similar) pode forkar, preencher os tópicos da matéria que está atacando, e abrir um Pull Request. Cada contribuição beneficia todos os candidatos.

> **Resumo de 30 segundos:** edite [`assets/data.js`](assets/data.js), substitua um esqueleto pela versão com `sections: [...]` preenchidas, abra um PR. Não há build, não há servidor, não há dependência. É HTML + JS puro servido pelo GitHub Pages.

## O que está no app

- **143 tópicos** distribuídos em 11 matérias (ver [HANDOFF.md](HANDOFF.md) para o estado atual)
- **47 com conteúdo completo** (Processo Civil 1-30 e Direito Civil 1-17)
- **96 esqueletos** com sumário previsto (`outline[]`) — esperando contribuição

Matérias e suas chaves (`materia` no `data.js`):

| Chave | Matéria | Tópicos | Estado |
|------|---------|---------|--------|
| `pc` | Processo Civil | 30 | ✅ completo |
| `civil` | Direito Civil | 17 | ✅ completo |
| `const` | Constitucional | 12 | 🚧 esqueleto |
| `adm` | Administrativo | 12 | 🚧 esqueleto |
| `elei` | Eleitoral | 8 | 🚧 esqueleto |
| `trib` | Tributário/Financeiro | 10 | 🚧 esqueleto |
| `mp` | Teoria do MP | 8 | 🚧 esqueleto |
| `penal` | Penal/Criminologia | 14 | 🚧 esqueleto |
| `pp` | Processo Penal | 12 | 🚧 esqueleto |
| `colmat` | Material Coletivo | 12 | 🚧 esqueleto |
| `colproc` | Processual Coletivo | 8 | 🚧 esqueleto |

## Setup local (1 minuto)

Não há dependências. Basta abrir o repo num navegador moderno:

```bash
git clone https://github.com/henriquesimoessilva3-png/concurso-mpmg.git
cd concurso-mpmg
# Servidor estático qualquer — exemplos:
python3 -m http.server 8000      # http://localhost:8000
# ou
npx serve .                      # http://localhost:3000
```

Você não pode abrir `index.html` direto via `file://` porque os scripts dependem de carregar `assets/data.js` no mesmo origin.

## Anatomia de um tópico

Tudo vive em `assets/data.js`. A "fonte da verdade" é o array `window.APP_DATA.topics`. Cada tópico tem este formato:

```js
{
  id: 'const-01-teoria-constituicao',   // único, lowercase, com hífens
  num: 1,                                // numeração dentro da matéria (não é global)
  materia: 'const',                      // chave da matéria (ver tabela acima)
  title: 'Teoria da Constituição',
  edital: '1.1.1',                       // referência ao item do Anexo I do edital
  editalText: 'Conceito, classificações, poder constituinte...',  // texto literal
  size: 'Médio',                         // Pequeno · Médio · Grande · Gigante
  schedule: null,                        // ex.: 'Mês 1, Semana 1' — opcional
  advantage: null,                       // ex.: 'Vantagem (Analista MP).' — opcional
  outline: ['Conceito', 'Classificações', '...'],   // sumário previsto (esqueleto)
  sections: []                           // ⬅️ ENCHA AQUI para sair de esqueleto
}
```

Quando `sections` está vazia, o tópico aparece como **🚧 Em construção** e mostra apenas o `outline[]`. Quando você preenche `sections`, o conteúdo é renderizado e o tópico fica **✅ com conteúdo**.

## Padrão de uma `sections` preenchida

A convenção (seguida em todos os 47 tópicos atuais de PC e Civil) é dividir o conteúdo em 6 seções:

```js
sections: [
  { h: 'Foco central', items: [ ... ] },
  { h: 'Lei seca primária', items: [ ... ] },
  { h: 'Pontos críticos para prova', items: [ ... ] },
  { h: 'Macetes e mnemônicos', items: [ ... ] },
  { h: 'Pegadinhas de prova', items: [ ... ] },
  { h: 'Conexões com outros tópicos', items: [ ... ] }
]
```

Cada `items` é um array de **blocos tipados** ou strings. O renderer (em `topicos.html:139-173`) reconhece:

| Tipo | Exemplo | Renderiza como |
|------|---------|----------------|
| `string` | `'Texto **com bold** e *itálico*.'` | `<li>` com markdown-mini |
| `{type:'p', text}` | `{type:'p', text:'Parágrafo'}` | `<p>` |
| `{type:'h', text}` | `{type:'h', text:'Sub-cabeçalho'}` | `<h3>` com borda lateral |
| `{type:'list', items}` | `{type:'list', items:['a','b']}` | `<ul>` |
| `{type:'table', headers, rows}` | tabela com colunas/linhas | `<table>` com scroll |
| `{type:'box', kind, text}` | `{type:'box', kind:'macete', text:'…'}` | caixa colorida |

Os 5 `kind` válidos para `box`:

- `macete` — amarelo · 💡
- `jurisprudencia` — azul · 📖
- `atencao` — vermelho · ⚠️
- `conexao` — verde · 🔗
- `info` — azul claro · ℹ️

### Markdown-mini dentro de strings

Funciona em `text` de qualquer bloco e em strings legadas: `**bold**`, `*itálico*`, `` `código` ``. Não há suporte a links nem listas aninhadas — para isso, use o tipo correto.

### Exemplo mínimo

```js
{
  h: 'Foco central',
  items: [
    { type: 'p', text: 'Texto introdutório com **conceitos-chave**.' },
    { type: 'h', text: 'Características' },
    { type: 'list', items: ['Característica 1', 'Característica 2'] },
    { type: 'box', kind: 'macete', text: 'Mnemônico para decorar.' },
    { type: 'box', kind: 'jurisprudencia', text: '**STF — Tema 123:** ementa resumida.' }
  ]
}
```

Para um exemplo real de tópico bem preenchido, veja [`assets/data.js:11-113`](assets/data.js) (PC 1 — Lei processual e fontes) ou [`assets/data.js:5076-5200`](assets/data.js) (Civ 11 — Responsabilidade civil).

## Adicionar flashcards ou questões

Mesma ideia. Em `data.js`:

```js
// Flashcard
{ id: 268, topic: 5, materia: 'const', q: 'Pergunta?', a: 'Resposta.', tags: ['CF', 'art-5'] }

// Questão (estilo IBGP)
{
  id: 106, topic: 5, materia: 'const',
  banca: 'IBGP/MPMG (adaptada)',
  nivel: 'Médio',
  statement: 'Sobre os direitos fundamentais, é correto afirmar que…',
  alternatives: ['…', '…', '…', '…', '…'],
  correct: 'C',
  explanation: 'Comentário com fundamento legal e jurisprudencial.'
}
```

`id` precisa ser único dentro do array. `topic` é o `num` do tópico **dentro da matéria** — combinação `topic` + `materia` identifica o tópico-alvo.

## Adicionar súmulas

Em `data.js`, no array `sumulas`:

```js
{ tribunal: 'STJ', numero: 593, topic: 11, text: 'Texto literal da súmula.', tema: 'Procedimento comum' }
```

Para vincular a um tópico de matéria diferente de PC, adicione `materia: 'const'` (ou outra chave). Súmulas sem `materia` assumem `pc`.

## Como abrir um Pull Request

1. **Fork** este repo (botão no canto superior direito do GitHub)
2. Crie uma branch local: `git checkout -b minha-contribuicao-const`
3. Edite `assets/data.js` — preencha o(s) tópico(s) que quer atacar
4. Teste localmente: rode um servidor estático e confira o tópico em `http://localhost:8000/topicos.html?id=SEU-ID`
5. Confira que `node --check assets/data.js` passa (não obrigatório, mas evita PRs com vírgula faltando)
6. `git commit -m "Conteúdo Const 1 — Teoria da Constituição"` e `git push origin minha-contribuicao-const`
7. Abra o PR para `main`. No texto, descreva qual matéria/tópicos você cobriu.

### Diretrizes de qualidade

- **Lei seca atualizada.** Se citar artigo, confira a redação atual (CF, CC, CPC, CP, CPP, leis especiais). Marque súmulas superadas/canceladas como tal.
- **Jurisprudência com referência.** STF/STJ recente. Cite tema/RE/REsp quando possível. Evite generalizações sem fonte.
- **Profundidade de sinopse.** O tom é Juspodivm/sinopses para concurso — denso mas não enciclopédico. ~2-3 mil palavras por tópico Médio é a média atual.
- **Não duplique flashcards.** Confira `id` máximo antes de adicionar.
- **Nada de imagens.** O app é texto puro para garantir TTS, busca e printabilidade.

### Se você não programa

Se não consegue lidar com `git`, abra uma **Issue** descrevendo a matéria que quer cobrir e cole o conteúdo lá. Quem mantém o repo pode portar para o `data.js`.

## Estrutura do projeto

```
concurso-mpmg/
├── index.html          # Hub (com filtro de matéria)
├── topicos.html        # Viewer parametrizado (?id=...)
├── flashcards.html     # SM-2 nativo
├── simulado.html       # Banco de questões
├── log.html            # Diário, erros, estatísticas
├── referencia.html     # Súmulas, doutrina, edital
├── assets/
│   ├── data.js         # ⭐ FONTE DE TUDO — onde você vai mexer
│   ├── app.js          # Utilitários (App.MATERIAS, localStorage, navegação)
│   └── style.css       # Estilos
├── HANDOFF.md          # Estado do projeto e decisões já tomadas
└── CONTRIBUTING.md     # Este arquivo
```

## Persistência (localStorage)

O app salva **no navegador local** (não em servidor). Cada candidato tem o próprio progresso. Chaves usadas (prefixo `concurso-mpmg-`):

- `flashcards-state` — estado SM-2 dos cards
- `simulado-history` — histórico de simulados
- `log-erros` — erros do simulado e manuais
- `log-diario` — entradas do diário
- `topic-status-<id>` e `topic-notes-<id>` — checks e notas por tópico
- `index-materia-filter` — última matéria filtrada no hub

Se você fizer fork e quiser começar do zero: `localStorage.clear()` no console.

## Dúvidas

Abra uma Issue. Boas contribuições! 📚
