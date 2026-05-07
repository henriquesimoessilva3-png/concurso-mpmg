# HANDOFF — Projeto Concurso MPMG

> Documento para retomar o trabalho em um novo chat. Atualizado em 2026-05-06.

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

- **20 tópicos COMPLETOS** de Processo Civil com sinopse Juspodivm-like (~3000 palavras/tópico, ~62k totais)
  - Estrutura por tópico: Foco central · Lei seca anotada · Pontos críticos para prova · Macetes/mnemônicos · Pegadinhas de prova · Conexões com outros tópicos
  - Renderização suporta blocos tipados (`p`, `h`, `list`, `table`, `box` com kinds `macete`/`jurisprudencia`/`atencao`/`conexao`/`info`)
  - 968 blocos tipados no total
- **Flashcards** expandidos cobrindo armadilhas e jurisprudência consolidada de cada tópico
- **Questões simuladas** com gabarito comentado, no estilo IBGP/MPMG
- **Súmulas STF/STJ** mapeadas por tópico
- **Doutrina recomendada** + **cronograma macro** (7 fases) + **Fase 1 detalhada** (5 meses)

## Renderer tipado em `topicos.html`

A função `renderItem(item)` (em `topicos.html:62-103`) detecta:
- `string` legado → `<li>` com markdown-mini inline (`**bold**`, `*itálico*`, `` `code` ``)
- `{type: 'p', text}` → parágrafo
- `{type: 'h', text}` → sub-cabeçalho com borda lateral colorida
- `{type: 'list', items}` → `<ul>`
- `{type: 'table', headers, rows}` → `<table class="content-table">` com scroll horizontal
- `{type: 'box', kind, text}` → caixa colorida (5 kinds: macete amarelo, jurisprudencia azul, atencao vermelho, conexao verde, info azul claro)

CSS em `assets/style.css` define `.content-table`, `.content-box`, `.box-{kind}`.

## Próximas tasks possíveis

1. **Atualizar súmulas** — adicionar súmulas referenciadas nos novos boxes de jurisprudência (ex: 309, 339, 384, 393, 410, 414, 460, 481, 489, 556, 612, 637, 640)
2. **Fase 2** do cronograma macro — Direito Civil (itens 4.x do edital). O viewer e a estrutura já estão prontos
3. **Iniciar Fase 1 Mês 1 do estudo** — abrir tópico 1 no app, fazer flashcards, marcar status
4. **Ajustes de UX** — reordenar seções no viewer, adicionar TOC interno por tópico, índice alfabético de termos

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
