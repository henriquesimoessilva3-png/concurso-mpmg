# HANDOFF — Projeto Concurso MPMG

> Documento para retomar o trabalho em um novo chat. Atualizado em 2026-05-08 (após Rodada 5 — ColMat 100% + Const 2/12).

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

- **137 tópicos com CONTEÚDO COMPLETO**: 30 PC + 17 Civil + 8 ColProc + 8 MP + 12 ColMat + 12 Const + 12 Adm + 14 Penal + 12 PP + 8 Elei + 4 Trib
- **6 esqueletos prontos** restantes — apenas Tributário (trib-05 a 10).
- **Total: 143 tópicos** em 11 matérias.
- **Estrutura por tópico (preenchido):** Foco central · Lei seca anotada · Pontos críticos para prova · Macetes/mnemônicos · Pegadinhas de prova · Conexões com outros tópicos
- **Renderização suporta blocos tipados** (`p`, `h`, `list`, `table`, `box` com kinds `macete`/`jurisprudencia`/`atencao`/`conexao`/`info`)
- **607 flashcards**
- **220 questões simuladas** com gabarito comentado, estilo IBGP/MPMG
- **88 súmulas STF/STJ** mapeadas por tópico — distribuídas em 8 matérias via campo `materia`
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

| Matéria | Esqueletos restantes |
|---------|-------------------|
| ~~Constitucional~~ | ✅ 0 (100% completo) |
| ~~Administrativo~~ | ✅ 0 (100% completo) |
| ~~Eleitoral~~ | ✅ 0 (100% completo) |
| Tributário/Financeiro | 6 (de 10 — trib-01 a 04 prontos) |
| ~~Teoria do MP~~ | ✅ 0 (100% completo) |
| ~~Penal/Criminologia~~ | ✅ 0 (100% completo) |
| ~~Processo Penal~~ | ✅ 0 (100% completo) |
| ~~Material Coletivo~~ | ✅ 0 (100% completo) |
| ~~Processual Coletivo~~ | ✅ 0 (100% completo) |

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
- **PR #6** (92cf09b) — Compartilhamento: esqueletos das 9 áreas (+96 tópicos), filtro de matéria no hub, CONTRIBUTING.md, +15 súmulas, +20 cards, +10 questões, TOC interno
- **PR #7** (957c236) — Segunda passada: +25 súmulas (Const./Adm./Penal/PP/Coletivo), +25 cards, +12 questões, filtro de matéria em `referencia.html`, ACP (colproc-02) preenchida como demo
- **PR #8** (4ff7f07) — Vantagens da candidata: 6 esqueletos preenchidos (3 Teoria do MP + 3 Processual Coletivo), +27 cards e +6 questões.
- **PR #9** — Rodada 2: ColProc 100% completo (4 esqueletos restantes — MS Coletivo, MI/ADPF, coisa julgada, SIDH) + 2 ColMat (DH e ECA). +27 cards e +6 questões. Total: 60 preenchidos.
- **PR #10** — Rodada 3: **Teoria do MP 100% COMPLETA** (5 esqueletos restantes — mp-01 histórico, mp-04 CNMP, mp-05 LC 75/93 MPU, mp-06 LC 34/94 MPMG, mp-08 atuação extrajudicial). +25 cards e +6 questões. Total: 65 preenchidos.
- **PR #11** — Rodada 4: 6 esqueletos de Material Coletivo preenchidos (colmat-03 Pessoa Idosa, colmat-04 PCD/LBI, colmat-05 Educação, colmat-06 Saúde/SUS, colmat-07 Consumidor/CDC, colmat-08 Meio Ambiente). +30 cards e +6 questões. Total: 71 preenchidos.
- **PR #12** — Rodada 5: **ColMat 100% completa** (colmat-09 Urbanístico, colmat-10 Patrimônio Cultural, colmat-11 Improbidade, colmat-12 Comunidades Tradicionais) + **Const 2/12 iniciado** (const-01 Teoria, const-02 Eficácia). +30 cards e +6 questões. Total: 77 preenchidos.
- **PR #13** — Rodada 6: **Const 8/12**. +20 cards e +6 questões. Total: 83 preenchidos.
- **PR #14** — Rodada 7: **Const 100%** + Adm 2/12. Total: 89.
- **PR #15** — Rodada 8: Adm 8/12. Total: 95.
- **PR #16** — Rodada 9: Adm 100% + Penal 2/14. Total: 101.
- **PR #17** — Rodada 10: Penal 8/14. Total: 107.
- **PR #18** — Rodada 11: Penal 100%. Total: 113.
- **PR #19** — Rodada 12: PP 6/12. Total: 119.
- **PR #20** — Rodada 13: PP 100%. Total: 125.
- **PR #21** — Rodada 14: Eleitoral 6/8. Total: 131.
- **PR #22** (este) — Rodada 15: **Eleitoral 100% completo** (elei-07 Ações eleitorais, elei-08 Jurisprudência) + **Tributário 4/10 iniciado** (trib-01 STN/Princípios, trib-02 Competência, trib-03 Espécies, trib-04 Obrigação tributária). +14 cards e +6 questões. Total: **137 preenchidos** (96%).

## Stats atuais

- **143 tópicos** (**137 com conteúdo** + 6 esqueletos com outline) — **96% concluído!**
- **607 flashcards**
- **220 questões** com gabarito comentado
- **88 súmulas** STF/STJ
- ~37.500 linhas em `assets/data.js`

### Tópicos preenchidos (137)

- **Processo Civil 1-30** (30)
- **Direito Civil 1-17** (17)
- **Processual Coletivo 1-8** (8) — **100%**
- **Teoria do MP 1-8** (8) — **100%**
- **Material Coletivo 1-12** (12) — **100%**
- **Constitucional 1-12** (12) — **100%**
- **Administrativo 1-12** (12) — **100%**
- **Penal 1-14** (14) — **100%**
- **Processo Penal 1-12** (12) — **100%**
- **Eleitoral 1-8** (8) — **100% COMPLETO**
- **Tributário 1-4** (4 de 10): STN/Princípios, Competência, Espécies, Obrigação. Faltam: trib-05 a 10

### Próxima rodada sugerida (Rodada 6)

Continuar Constitucional — 6 tópicos (const-03 a 08): Hermenêutica, Princípios fundamentais, Direitos e garantias fundamentais (CF art. 5º), Direitos sociais/Nacionalidade/Políticos, Organização do Estado, Organização dos Poderes.

Roadmap restante:
1. Rodada 6 — Const-03 a 08 (6 tópicos)
2. Rodada 7 — Const-09 a 12 (4) + iniciar Adm (2) = 6
3. Rodada 8 — Adm-03 a 08 (6)
4. Rodada 9 — Adm-09 a 12 (4) + iniciar Penal (2) = 6
5. Rodadas 10-12 — Penal (12 restantes)
6. Rodadas 13-14 — Processo Penal (12)
7. Rodada 15 — Eleitoral (8)
8. Rodada 16-17 — Tributário (10)

Em ~11-12 chats deste tamanho, os 66 esqueletos restantes ficam preenchidos.

## Memória persistente do Claude Code

Em `/Users/henriquesimoessilva/.claude/projects/-Users-henriquesimoessilva-Meu-Drive-arquivos-pessoais-Projeto-Concurso/memory/`:

- `MEMORY.md` — índice
- `user_wife_concurso.md` — perfil da candidata
- `project_concurso_status.md` — status do concurso (LXI/LXII/banca)
- `feedback_concurso_methodology.md` — metodologia validada (1h/dia, espaçada, test-driven)

Em chats novos, o Claude lê automaticamente esses arquivos. Mas o HANDOFF.md aqui é mais detalhado e atual.
