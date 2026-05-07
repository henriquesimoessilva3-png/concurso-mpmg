# HANDOFF — Projeto Concurso MPMG

> Documento para retomar o trabalho em um novo chat. Atualizado em 2026-05-07.

## Como abrir o próximo chat

Cole esta frase no início:

> *Estou retomando o Projeto Concurso MPMG. Leia `/Users/henriquesimoessilva/Meu Drive/arquivos pessoais/Projeto Concurso/HANDOFF.md` para se contextualizar — não execute nada antes de eu te dizer o próximo passo.*

## Quick facts

- **Concurso:** Promotor de Justiça Substituto do MPMG (próximo edital, provavelmente LXII em 2027-2028)
- **Banca anterior:** IBGP (LXI homologado out/2025)
- **Candidata:** esposa do usuário Henrique. Já é **Analista do MP em Ouro Branco-MG**. Vantagem em Teoria do MP, Material/Processual Coletivo, ACP, tutelas.
- **Carga:** **1h/dia útil** + 4h sábado + 4h domingo = ~15h/semana
- **Horizonte:** 1-2 anos
- **Foco atual:** Fase 1 (PC 1-20), Fase 2 (PC 21-30) e Fase 3 (Direito Civil 1-17) com **CONTEÚDO COMPLETO**
- **Decisão recente:** o app agora é compartilhado com outras pessoas — outras pessoas podem atacar OUTROS GRUPOS de estudo (Constitucional, Administrativo, Penal, etc.). Isso muda prioridades para o próximo bate.

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

- **30 tópicos COMPLETOS de Processo Civil** (PC 1-30) com sinopse Juspodivm-like — Fase 1 e Fase 2 com conteúdo aprofundado
- **17 tópicos COMPLETOS de Direito Civil** (Civ 1-17) — Fase 3 completa: LINDB, pessoas naturais/jurídicas, bens, fatos jurídicos, obrigações geral/inadimplemento, contratos parte geral/espécie, atos unilaterais, responsabilidade civil, empresa, direitos reais (posse/propriedade + garantias), família geral/específico, sucessões
- **Estrutura por tópico:** Foco central · Lei seca anotada · Pontos críticos para prova · Macetes/mnemônicos · Pegadinhas de prova · Conexões com outros tópicos
- **Renderização suporta blocos tipados** (`p`, `h`, `list`, `table`, `box` com kinds `macete`/`jurisprudencia`/`atencao`/`conexao`/`info`)
- **247 flashcards** (164 PC + 84 Civil — campo `materia: 'civil'` para Civil)
- **101 questões simuladas** com gabarito comentado, no estilo IBGP/MPMG
- **48 súmulas STF/STJ** mapeadas por tópico
- **Doutrina recomendada** + **cronograma macro** (7 fases) + **Fase 1 / 2 / 3 detalhadas** (5 / 2 / 4 meses)
- Campo `materia` (`'pc'` ou `'civil'`) — backward-compat: ausente = `'pc'`
- Quick check inline em `topicos.html` filtra flashcards/questões por matéria E tópico

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

### Alta prioridade — viabilizar uso compartilhado por outros candidatos

1. **Esqueletos das 9 áreas restantes do edital** (~85 tópicos novos). Materia keys sugeridas: `'const'` (Constitucional), `'adm'` (Administrativo), `'elei'` (Eleitoral), `'trib'` (Tributário/Financeiro), `'mp'` (Teoria do MP), `'penal'` (Penal/Criminologia), `'pp'` (Proc. Penal), `'colmat'` (Material Coletivo), `'colproc'` (Processual Coletivo). Cada esqueleto: `id`, `num`, `materia`, `title`, `edital`, `editalText`, `outline[]`, `sections: []`. Ver `00-EDITAL-E-DOCS/analise-edital.md`.
2. **Filtro de matéria no hub `index.html`** — com 47+ tópicos cadastrados, e mais 85 esqueletos por adicionar, o hub precisa de seletor/abas por matéria. Hoje só Fase 1 (PC 1-20), Fase 2 (PC 21-30 stub) e Fase 3 (Civil stub) aparecem em `<details>`.
3. **README de contribuição** — explicar como outros candidatos podem fork → editar `data.js` (preencher um esqueleto) → PR. App é estático (HTML+JS), zero build.

### Média prioridade — refinamento

4. **Reforço de densidade** — vários tópicos PC 21-30 e Civil têm 4-7 cards e 2-4 questões. Ideal: 8-12 cards e 4-6 questões. Adicionar gradualmente.
5. **+15 súmulas** para chegar a 60+ (STJ 14, 38, 41, 121, 153, 168, 380, 423, 545, 643, 711; STF SV 8, 631, 736).
6. **TOC interno por tópico** — sumário lateral linkando os `<h2>` de cada tópico (útil em tópicos grandes como Civ 11, 13; PC 11, 16, 28).

### Iniciar uso

7. **Iniciar Mês 1 do estudo** — abrir tópico 1 PC, marcar status, fazer flashcards, registrar primeiro estudo no log.
8. **Importar súmulas de informativos recentes** — se candidata quiser conteúdo atualizado, indexar STJ/STF.

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

## Stats atuais

- **47 tópicos com conteúdo** (30 PC + 17 Civil)
- **267 flashcards** (164 PC + 84 Civil + 19 reforço PC)
- **105 questões** com gabarito comentado
- **48 súmulas** STF/STJ mapeadas
- ~7.500 linhas em `assets/data.js` (~120k palavras)

## Memória persistente do Claude Code

Em `/Users/henriquesimoessilva/.claude/projects/-Users-henriquesimoessilva-Meu-Drive-arquivos-pessoais-Projeto-Concurso/memory/`:

- `MEMORY.md` — índice
- `user_wife_concurso.md` — perfil da candidata
- `project_concurso_status.md` — status do concurso (LXI/LXII/banca)
- `feedback_concurso_methodology.md` — metodologia validada (1h/dia, espaçada, test-driven)

Em chats novos, o Claude lê automaticamente esses arquivos. Mas o HANDOFF.md aqui é mais detalhado e atual.
