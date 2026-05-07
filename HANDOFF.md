# HANDOFF — Projeto Concurso MPMG

> Documento para retomar o trabalho em um novo chat. Atualizado em 2026-05-07.

## Como abrir o próximo chat

Cole esta frase no início:

> *Estou retomando o Projeto Concurso MPMG. Leia o HANDOFF.md em `/Users/henriquesimoessilva/Meu Drive/arquivos pessoais/Projeto Concurso/HANDOFF.md` para se contextualizar.*

## Quick facts

- **Concurso:** Promotor de Justiça Substituto do MPMG (próximo edital, provavelmente LXII em 2027-2028)
- **Banca anterior:** IBGP (LXI homologado out/2025)
- **Candidata:** esposa do usuário Henrique. Já é **Analista do MP em Ouro Branco-MG**. Vantagem em Teoria do MP, Material/Processual Coletivo, ACP, tutelas.
- **Carga:** **1h/dia útil** + 4h sábado + 4h domingo = ~15h/semana
- **Horizonte:** 1-2 anos
- **Foco atual:** Fase 1 — Direito Processual Civil, itens 1 a 20 ✅ **CONTEÚDO COMPLETO**

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

## Próximas tasks possíveis

1. **Mais flashcards/questões** — segunda passada nos tópicos com poucos cards (PC 21-30 e Civil em geral). Hoje muitos têm 4-7 cards e 2-4 questões; o ideal seria 8-12 cards e 4-6 questões por tópico
2. **Mais súmulas** — chegar a 60+ adicionando STJ 14, 38, 41, 121, 150 (já), 153, 168; STF 282 (já), 631, 736
3. **Iniciar Mês 1 do estudo** — abrir tópico 1 PC, marcar status, fazer flashcards, registrar primeiro estudo no log
4. **TOC interno por tópico** — sumário lateral linkando para cada `<h2>` do tópico
5. **Importar conteúdo de PDF** — se candidata quiser, posso indexar súmulas direto do informativo STJ/STF mais recente

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
- ✅ Foco atual: só Processo Civil 1-20 (Fase 1)
- ✅ Profundidade dos tópicos: sinopse Juspodivm-like (~3000 palavras/tópico)
- ✅ Estrutura tipada de items (p, h, list, table, box) com fallback para strings

## Memória persistente do Claude Code

Em `/Users/henriquesimoessilva/.claude/projects/-Users-henriquesimoessilva-Meu-Drive-arquivos-pessoais-Projeto-Concurso/memory/`:

- `MEMORY.md` — índice
- `user_wife_concurso.md` — perfil da candidata
- `project_concurso_status.md` — status do concurso (LXI/LXII/banca)
- `feedback_concurso_methodology.md` — metodologia validada (1h/dia, espaçada, test-driven)

Em chats novos, o Claude lê automaticamente esses arquivos. Mas o HANDOFF.md aqui é mais detalhado e atual.
