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
- **Foco atual:** Fase 1 — Direito Processual Civil, itens 1 a 20

## Está deployado

- **URL pública:** https://henriquesimoessilva3-png.github.io/concurso-mpmg/
- **Repo:** https://github.com/henriquesimoessilva3-png/concurso-mpmg
- **Pasta local:** `/Users/henriquesimoessilva/Meu Drive/arquivos pessoais/Projeto Concurso/`
- **Conta GitHub:** `henriquesimoessilva3-png` (gh CLI já autenticado)

## Estrutura de arquivos do app

```
Projeto Concurso/
├── index.html              # Hub principal
├── topicos.html            # Viewer parametrizado (?id=01-...)
├── flashcards.html         # SM-2 nativo
├── simulado.html           # Banco de questões nativo
├── log.html                # Diário + erros + estatísticas
├── referencia.html         # Súmulas, doutrina, edital, metodologia
├── assets/
│   ├── style.css           # Todos os estilos (~500 linhas)
│   ├── app.js              # Utilitários (localStorage, navegação)
│   └── data.js             # ⭐ FONTE DE TODO O CONTEÚDO
├── 00-EDITAL-E-DOCS/       # Edital LXI PDF, análise, bibliografia
├── 01-CRONOGRAMA/          # Cronogramas em markdown (legacy, mantidos)
├── 02-MATERIAS/            # Resumos antigos em markdown (legacy)
├── 99-FUTURO/              # Placeholder para outras matérias
└── HANDOFF.md              # Este arquivo
```

## Conteúdo já embutido (em `assets/data.js`)

- **20 tópicos** de Processo Civil com: texto do edital, foco central, lei seca, jurisprudência, pegadinhas (3-5 seções por tópico, profundidade RESUMIDA)
- **37 flashcards** cobrindo conceitos-chave dos 20 tópicos
- **15 questões** simuladas no estilo IBGP/MPMG, com gabarito comentado
- **~25 súmulas** STF/STJ relevantes para Processo Civil, mapeadas por tópico
- **Doutrina recomendada** (Sinopse Juspodivm, Daniel Amorim, Didier)
- **Cronograma** macro (7 fases) e Fase 1 (5 meses)

## ⚠️ Solicitação pendente do usuário (próxima task)

**O usuário pediu:** "consegue colocar os conteúdos completos aqui dentro também?"

Referência: a página `topicos.html` (e os 20 tópicos em `assets/data.js`) hoje tem **conteúdo resumido** (3-5 bullets por seção). O usuário quer o **conteúdo completo de estudo** embutido — algo como o que se encontraria em uma sinopse de concurso, com explicações desenvolvidas, exemplos, casos, comparações.

**O que fazer:**

1. Editar `assets/data.js` — cada tópico tem `sections: [{h: 'título', items: [...]}]`
2. Para cada tópico, expandir e/ou adicionar seções com conteúdo aprofundado:
   - Adicionar parágrafos explicativos (não só bullets)
   - Incluir exemplos práticos
   - Detalhar jurisprudência (não só citar o tema)
   - Quadros comparativos quando aplicável
   - Mnemônicos/macetes
3. **Cuidado com escopo:** 20 tópicos × ~3000 palavras cada = ~60k palavras. **Provavelmente vai precisar quebrar em múltiplos chats.**
4. Sugestão de ordem: começar pelos tópicos da Fase 1 Mês 1 (1, 2, 3, 4, 5) e ir avançando.
5. Considerar mudar a estrutura de `items: ['string', 'string']` para `items: [{type: 'p', text: '...'}, {type: 'list', items: [...]}, {type: 'table', ...}]` para suportar parágrafos, listas, tabelas.

**Ajuste no viewer:** o `topicos.html` (renderização) precisa ser atualizado para suportar a nova estrutura de items (parágrafos, tabelas, etc.). Hoje renderiza só `<ul><li>`.

## Como subir mudanças (auto-deploy via GitHub Pages)

```bash
cd "/Users/henriquesimoessilva/Meu Drive/arquivos pessoais/Projeto Concurso"
git add .
git commit -m "Mensagem"
git push
# Pages reconstrói em 30-90s
```

Atalho do gh CLI: tudo já está autenticado, basta `git push`.

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
- ✅ App self-contained, sem links externos (Anki, QConcursos, etc. trocados por equivalentes nativos)
- ✅ Conteúdo embutido em `data.js` (não via fetch de markdown — file:// causaria CORS)
- ✅ GitHub Pages como deploy (público, padrão dos outros projetos do usuário)
- ✅ Tópico viewer parametrizado (`topicos.html?id=...`) ao invés de 20 HTMLs separados
- ✅ Foco atual: só Processo Civil 1-20 (Fase 1)

## Decisões pendentes (perguntar ao usuário se relevante)

- Estrutura nova para `sections.items` (parágrafos vs tabelas vs listas)
- Profundidade do conteúdo expandido (Sinopse Juspodivm-like? Manual completo?)
- Se incluir mais flashcards/questões em paralelo à expansão dos tópicos

## Memória persistente do Claude Code

Em `/Users/henriquesimoessilva/.claude/projects/-Users-henriquesimoessilva-Meu-Drive-arquivos-pessoais-Projeto-Concurso/memory/`:

- `MEMORY.md` — índice
- `user_wife_concurso.md` — perfil da candidata
- `project_concurso_status.md` — status do concurso (LXI/LXII/banca)
- `feedback_concurso_methodology.md` — metodologia validada (1h/dia, espaçada, test-driven)

Em chats novos, o Claude lê automaticamente esses arquivos. Mas o HANDOFF.md aqui é mais detalhado e atual.
