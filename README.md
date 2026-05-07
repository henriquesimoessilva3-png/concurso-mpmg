# Projeto Concurso MPMG — Promotor de Justiça Substituto

App de estudos compartilhado para o concurso de **Promotor de Justiça Substituto do MPMG** (e outros concursos com programa similar). Resumos, flashcards, simulado, log de erros — tudo em uma página web estática.

🌐 **App público:** https://henriquesimoessilva3-png.github.io/concurso-mpmg/

## ✨ O que tem

- 📖 **143 tópicos** distribuídos em 11 matérias do edital (47 com conteúdo completo, 96 esqueletos abertos a contribuição)
- 🃏 **267+ flashcards** com SM-2 nativo (algoritmo de revisão espaçada)
- ✍️ **105+ questões** estilo IBGP/MPMG, com gabarito comentado
- ⚖️ **48+ súmulas** STF/STJ mapeadas por tópico
- 📝 Log diário, log de erros, estatísticas, modo áudio (TTS) — tudo no localStorage do navegador

## 🚀 Como usar

Abra https://henriquesimoessilva3-png.github.io/concurso-mpmg/ e comece pelo painel. Cada candidato tem o próprio progresso salvo no navegador (não há servidor / não há login).

## 🤝 Como contribuir

O app é compartilhado. Se você está estudando para o MPMG (ou concurso similar) e quer **preencher uma matéria** que ainda está em esqueleto, leia [CONTRIBUTING.md](CONTRIBUTING.md). Resumo: edite [`assets/data.js`](assets/data.js) e abra um Pull Request. Não há build, é HTML + JS puro.

Matérias atualmente abertas a contribuição (todas em esqueleto, com sumário previsto):

- 🏛️ Constitucional · 🏢 Administrativo · 🗳️ Eleitoral · 💰 Tributário/Financeiro
- ⚖️ Teoria do MP · 🚔 Penal · 👮 Processo Penal
- 👥 Material Coletivo · 🤝 Processual Coletivo

## 🧠 Metodologia (princípios do app)

1. **Active recall** — abra um tópico, leia, feche, reproduza. Quick check inline (mini-flashcard + mini-questão) em todo tópico já preenchido.
2. **Revisão espaçada** — SM-2 nativo. Cards aparecem no dia certo, sem que você precise pensar.
3. **Test-driven** — comece pela questão. Erros caem no log automaticamente.
4. **Material condensado** — sinopse Juspodivm-like por tópico. ~3 mil palavras + lei seca + jurisprudência + macetes + pegadinhas.
5. **Modo áudio** — escutar a sinopse no carro / fila / academia.

## 🗂️ Estrutura do repo

```
concurso-mpmg/
├── index.html          # Hub com filtro de matéria
├── topicos.html        # Viewer parametrizado (?id=...)
├── flashcards.html     # SM-2 nativo
├── simulado.html       # Banco de questões
├── log.html            # Diário, erros, estatísticas
├── referencia.html     # Súmulas, doutrina, edital
├── assets/
│   ├── data.js         # ⭐ Conteúdo (todos tópicos/cards/questões/súmulas)
│   ├── app.js          # Utilitários (App.MATERIAS, localStorage)
│   └── style.css       # Estilos
├── CONTRIBUTING.md     # Guia para contribuir
├── HANDOFF.md          # Estado do projeto e decisões
└── 00-EDITAL-E-DOCS/   # Edital LXI e análise programática
```

## 📋 Status

- **Concurso alvo:** Promotor de Justiça Substituto do MPMG, edital LXII estimado para 2027-2028
- **Edital de referência:** LXI (homologado out/2025, banca IBGP)
- **Última atualização:** ver [HANDOFF.md](HANDOFF.md)

---

*Concurso é prova de resistência, não de velocidade.* 🌟
