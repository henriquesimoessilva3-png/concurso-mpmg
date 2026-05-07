# HANDOFF — Projeto Concurso MPMG

> Documento para retomar o trabalho em um novo chat. Atualizado em 2026-05-07 (após Blocos 18-23).

## Como abrir o próximo chat

Cole esta frase no início:

> *Estou retomando o Projeto Concurso MPMG. Leia `/Users/henriquesimoessilva/Meu Drive/arquivos pessoais/Projeto Concurso/HANDOFF.md` para se contextualizar — não execute nada antes de eu te dizer o próximo passo.*

## Quick facts

- **Concurso:** Promotor de Justiça Substituto do MPMG (próximo edital, provavelmente LXII em 2027-2028)
- **Banca anterior:** IBGP (LXI homologado out/2025)
- **Candidata:** esposa do usuário Henrique. Já é **Analista do MP em Ouro Branco-MG**. Vantagem em Teoria do MP, Material/Processual Coletivo, ACP, tutelas.
- **Carga:** **1h/dia útil** + 4h sábado + 4h domingo = ~15h/semana
- **Horizonte:** 1-2 anos
- **Foco atual:** Fase 1 (PC 1-20), Fase 2 (PC 21-30) e Fase 3 (Direito Civil 1-17) com **CONTEÚDO COMPLETO**. Demais matérias (9 áreas) com **esqueletos** prontos para contribuição.
- **App compartilhado:** outras pessoas podem fork → preencher uma matéria → PR. Ver [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Está deployado

- **URL pública:** https://henriquesimoessilva3-png.github.io/concurso-mpmg/
- **Repo:** https://github.com/henriquesimoessilva3-png/concurso-mpmg
- **Pasta local:** `/Users/henriquesimoessilva/Meu Drive/arquivos pessoais/Projeto Concurso/`
- **Conta GitHub:** `henriquesimoessilva3-png` (gh CLI já autenticado)

## Estrutura de arquivos do app

```
Projeto Concurso/
├── index.html              # Hub principal
├── topicos.html            # Viewer parametrizado (?id=01-...) com renderer tipado
├── flashcards.html         # SM-2 nativo
├── simulado.html           # Banco de questões nativo
├── log.html                # Diário + erros + estatísticas
├── referencia.html         # Súmulas, doutrina, edital, metodologia
├── assets/
│   ├── style.css           # Estilos + classes para boxes/tabelas tipadas
│   ├── app.js              # Utilitários (localStorage, navegação)
│   └── data.js             # ⭐ FONTE DE TODO O CONTEÚDO (~3250+ linhas, ~62k palavras)
├── 00-EDITAL-E-DOCS/
├── 01-CRONOGRAMA/
├── 02-MATERIAS/
├── 99-FUTURO/
└── HANDOFF.md
```

## Conteúdo embutido em `assets/data.js`

- **47 tópicos com CONTEÚDO COMPLETO**: 30 PC (Fase 1 + 2) + 17 Civil (Fase 3) com sinopse Juspodivm-like
- **96 esqueletos prontos** distribuídos em 9 matérias (12 const, 12 adm, 8 elei, 10 trib, 8 mp, 14 penal, 12 pp, 12 colmat, 8 colproc) — cada um com `outline[]` e `editalText` preenchidos. Falta apenas escrever `sections: []`.
- **Total: 143 tópicos** em 11 matérias.
- **Estrutura por tópico (preenchido):** Foco central · Lei seca anotada · Pontos críticos para prova · Macetes/mnemônicos · Pegadinhas de prova · Conexões com outros tópicos
- **Renderização suporta blocos tipados** (`p`, `h`, `list`, `table`, `box` com kinds `macete`/`jurisprudencia`/`atencao`/`conexao`/`info`)
- **287 flashcards** (164 PC + 84 Civil + reforços PC e Civil)
- **115 questões simuladas** com gabarito comentado, estilo IBGP/MPMG
- **63 súmulas STF/STJ** mapeadas por tópico — algumas já cobrem matérias novas (Penal, Tributário, P. Penal, Adm.) via campo `materia`
- **Doutrina recomendada** + **cronograma macro** (7 fases) + **Fase 1 / 2 / 3 detalhadas** (5 / 2 / 4 meses)
- Campo `materia` em todas as 11 chaves (`pc`, `civil`, `const`, `adm`, `elei`, `trib`, `mp`, `penal`, `pp`, `colmat`, `colproc`) — ausente = `'pc'`
- Quick check inline em `topicos.html` filtra flashcards/questões por matéria E tópico
- **TOC interno (sumário lateral)** em `topicos.html` — fica fixo à direita em telas ≥ 1280px, com scroll-spy

## Renderer tipado em `topicos.html`

A função `renderItem(item)` (em `topicos.html:62-103`) detecta:
- `string` legado → `<li>` com markdown-mini inline (`**bold**`, `*itálico*`, `` `code` ``)
- `{type: 'p', text}` → parágrafo
- `{type: 'h', text}` → sub-cabeçalho com borda lateral colorida
- `{type: 'list', items}` → `<ul>`
- `{type: 'table', headers, rows}` → `<table class="content-table">` com scroll horizontal
- `{type: 'box', kind, text}` → caixa colorida (5 kinds: macete amarelo, jurisprudencia azul, atencao vermelho, conexao verde, info azul claro)

CSS em `assets/style.css` define `.content-table`, `.content-box`, `.box-{kind}`.

## Inline runners (Quick check) em `topicos.html`

- Cada tópico PC 1-20 ganha uma seção 🎯 Quick check do tópico no final
- Mini-flashcard sorteado do `APP_DATA.flashcards.filter(f => f.topic === topic.num)`
  - Botões SM-2 (De novo / Difícil / Bom / Fácil) gravam em `concurso-mpmg-flashcards-state` (mesma chave do modo completo)
- Mini-questão sorteada do `APP_DATA.questions.filter(q => q.topic === topic.num)`
  - Acertos/erros disparam feedback inline. Erros são gravados em `concurso-mpmg-log-erros` com flag `inline: true`
- Excluído do TTS (`getChunks()` ignora "🎯 Quick check do tópico" e "Sumário previsto")

## Empty-state para esqueletos

- `topicos.html` detecta `sections.length === 0` e exibe banner "🚧 Em construção" + lista do `outline[]`
- Status, Notas, Audio, Quick check e Ações rápidas ficam ocultos em stubs (não fazem sentido sem conteúdo)
- Navegação prev/next filtra por matéria — não atravessa fronteira PC ↔ Civil

## Próximas tasks possíveis (em ordem de prioridade no próximo chat)

### Alta prioridade — preencher esqueletos das 9 matérias

Cada matéria tem N tópicos com `sections: []` esperando conteúdo. A candidata pode escolher uma matéria onde tem vantagem (Material e Processual Coletivo, Teoria do MP) ou uma matéria fraca (Tributário, Eleitoral). Outras pessoas podem atacar áreas em paralelo via PR.

| Matéria | Tópicos esqueleto |
|---------|-------------------|
| Constitucional | 12 |
| Administrativo | 12 |
| Eleitoral | 8 |
| Tributário/Financeiro | 10 |
| Teoria do MP | 8 |
| Penal/Criminologia | 14 |
| Processo Penal | 12 |
| Material Coletivo | 12 |
| Processual Coletivo | 8 |

Padrão para preencher: ver `assets/data.js:11-113` (PC 1) ou `assets/data.js:5076-5200` (Civ 11). Estrutura: `Foco central · Lei seca · Pontos críticos · Macetes · Pegadinhas · Conexões`.

### Média prioridade — refinamento

1. **Reforço de densidade contínuo** — alvo: 8-12 cards e 4-6 questões por tópico preenchido. Hoje média de PC 21-30 e Civil é ~5-6 cards e 2-3 questões.
2. **+30 súmulas** para chegar a 90+ (cobrir mais áreas — Constitucional, Administrativo, Coletivo).
3. **Súmulas de informativos recentes** — STF/STJ 2024-2026.
4. **Modo dark / acessibilidade** — opção pelo menos para texto.

### Iniciar uso

5. **Iniciar Mês 1 do estudo** — abrir PC 1, marcar status, fazer flashcards, registrar primeiro estudo no log.
6. **Divulgar para outros candidatos** — compartilhar URL e CONTRIBUTING.md.

## Como subir mudanças (auto-deploy via GitHub Pages)

```bash
cd "/Users/henriquesimoessilva/Meu Drive/arquivos pessoais/Projeto Concurso"
git add .
git commit -m "Mensagem"
git push
# Pages reconstrói em 30-90s
```

## Configurações importantes do git no projeto

```
user.name = henriquesimoessilva3-png
user.email = 270710822+henriquesimoessilva3-png@users.noreply.github.com
http.postBuffer = 524288000   # importante: CPC.pdf é 5.3MB
```

## Persistência do app (localStorage)

Chaves usadas (prefixo `concurso-mpmg-`):
- `checklist-fase1` — checkboxes do hub
- `topic-status-<id>` — 5 checks por tópico
- `topic-notes-<id>` — textarea de notas
- `flashcards-state` — estado SM-2 de cada card
- `simulado-history` — histórico de simulados
- `log-erros` — erros (do simulado + manuais)
- `log-diario` — entradas do diário

## Decisões já tomadas (não rediscutir)

- ✅ Estrutura de pastas com `assets/`
- ✅ App self-contained, sem links externos
- ✅ Conteúdo embutido em `data.js` (não via fetch — file:// causaria CORS)
- ✅ GitHub Pages como deploy
- ✅ Tópico viewer parametrizado (`topicos.html?id=...`)
- ✅ Profundidade dos tópicos: sinopse Juspodivm-like (~3000 palavras/tópico)
- ✅ Estrutura tipada de items (p, h, list, table, box) com fallback para strings
- ✅ Quick check inline em cada tópico (mini-flashcard SM-2 + mini-questão), interopera com `flashcards-state` e `log-erros`
- ✅ Empty-state automático para tópicos com `sections: []` (mostra outline)
- ✅ Campo `materia` por tópico/flashcard/questão — filtragem por matéria em todos os pontos do app
- ✅ Smart-back: `?topic=N` volta ao tópico de origem
- ✅ Modo áudio (TTS) com seleção de vozes pt-BR
- ✅ App é compartilhado — múltiplos candidatos podem usar; cada um tem progresso próprio em localStorage do seu navegador
- ✅ Numeração de tópicos por matéria (PC: 1-30; Civil: 1-17; demais matérias terão numeração própria)

## PRs recentes (2026-05-07)

- **PR #1** (cd4576f) — Estrutura inicial: 20 tópicos PC + Quick check + súmulas + esqueletos PC 21-30 e Civil 1-17
- **PR #2** (ee4e99e) — Fase 2 completa: PC 21-30 com conteúdo (Blocos 8, 9, 10)
- **PR #3** (8566a40) — Fase 3 completa: Civil 1-17 com conteúdo (Blocos 11-17)
- **PR #4** (950f2c0) — Reforço PC 21-30: +20 flashcards e +4 questões
- **PR #5** (2ac267f) — Atualização HANDOFF
- **PR #6** (este) — Compartilhamento: esqueletos das 9 áreas (+96 tópicos), filtro de matéria no hub, CONTRIBUTING.md, +15 súmulas, +20 cards, +10 questões, TOC interno

## Stats atuais

- **143 tópicos** (47 com conteúdo + 96 esqueletos com outline)
- **287 flashcards** (267 PC/Civil anteriores + 20 reforço Bloco 19)
- **115 questões** com gabarito comentado
- **63 súmulas** STF/STJ mapeadas (algumas com `materia` para Penal/Trib./Adm./PP)
- ~8.100 linhas em `assets/data.js`

## Memória persistente do Claude Code

Em `/Users/henriquesimoessilva/.claude/projects/-Users-henriquesimoessilva-Meu-Drive-arquivos-pessoais-Projeto-Concurso/memory/`:

- `MEMORY.md` — índice
- `user_wife_concurso.md` — perfil da candidata
- `project_concurso_status.md` — status do concurso (LXI/LXII/banca)
- `feedback_concurso_methodology.md` — metodologia validada (1h/dia, espaçada, test-driven)

Em chats novos, o Claude lê automaticamente esses arquivos. Mas o HANDOFF.md aqui é mais detalhado e atual.
