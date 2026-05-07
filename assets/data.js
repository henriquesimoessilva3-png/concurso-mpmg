// =====================================================================
// Dados embutidos do app — Concurso MPMG · Processo Civil
// Editar este arquivo para adicionar/atualizar conteúdo, flashcards,
// questões e súmulas. Tudo é renderizado dinamicamente nas páginas.
// =====================================================================

window.APP_DATA = {

// ============ 20 TÓPICOS DE PROCESSO CIVIL ============
topics: [
  {
    id: '01-lei-processual-fontes',
    num: 1,
    title: 'Lei processual, interpretação e diálogo das fontes',
    edital: '3.2.1',
    editalText: 'Lei processual, interpretação das leis processuais e diálogo das fontes.',
    size: 'Pequeno (3 dias úteis)',
    schedule: 'Mês 1, Semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A **lei processual** disciplina a forma como o Estado exerce a jurisdição. Distingue-se da lei material por seu objeto: enquanto a norma material define direitos e obrigações (quem deve o quê), a norma processual regula como esses direitos podem ser exigidos em juízo. A distinção, embora clara em tese, exige cautela: existem **normas heterotópicas** — substanciais inseridas no CPC (ex.: regras de prescrição) e processuais inseridas no CC ou em leis extravagantes (ex.: art. 219 CC sobre interrupção da prescrição pela citação).' },
          { type: 'p', text: '**Aplicação no tempo.** O CPC adota o **princípio do isolamento dos atos processuais** (art. 14): a lei processual nova aplica-se imediatamente aos processos em curso, respeitados os atos já praticados e as situações jurídicas consolidadas. Em outras palavras, *tempus regit actum* — cada ato processual é regido pela lei vigente ao tempo em que praticado. Não há ultratividade automática da lei revogada, salvo nas regras de transição (CPC arts. 1.045-1.057).' },
          { type: 'p', text: '**Aplicação no espaço.** Vigora o princípio da territorialidade — *lex fori*: o juiz aplica a lei processual do foro onde o processo tramita (CPC art. 13), ainda que o direito material discutido seja regido por lei estrangeira. A jurisdição brasileira, por sua vez, define-se nos arts. 21-25 CPC (concorrente) e art. 23 CPC (exclusiva).' },
          { type: 'p', text: '**Interpretação.** Os métodos clássicos (gramatical, sistemático, teleológico, histórico) convivem no CPC com diretivas específicas: ordem cronológica de julgamento (art. 12, com ressalvas), primazia do julgamento de mérito (arts. 4º, 6º, 139 IX, 488), boa-fé objetiva (art. 5º) e cooperação (art. 6º). A interpretação processual é **constitucional** — o art. 1º manda que normas processuais sejam ordenadas, disciplinadas e interpretadas conforme os valores e normas fundamentais da CF/88.' },
          { type: 'p', text: '**Diálogo das fontes.** Concebido por Erik Jayme e adotado no Brasil sobretudo por Cláudia Lima Marques, o método propõe a aplicação **simultânea, coerente e coordenada** de fontes normativas distintas que regulem o mesmo conflito (CDC + CC + CPC, p. ex.), no lugar do critério clássico de antinomia (lex specialis, posterior, superior). É instrumento de coerência sistêmica — não de simples cumulação.' },
          {
            type: 'table',
            headers: ['Critério', 'Lei material', 'Lei processual'],
            rows: [
              ['Objeto', 'Define direitos e obrigações', 'Regula o exercício do direito em juízo'],
              ['Aplicação no tempo', 'Em regra irretroativa (ato jurídico perfeito)', 'Imediata aos atos a praticar (isolamento)'],
              ['Aplicação no espaço', 'Pode aplicar lei estrangeira (DIPr — LINDB)', 'Lex fori (territorialidade absoluta)'],
              ['Exemplo', 'CC art. 186 (responsabilidade civil)', 'CPC art. 319 (requisitos da inicial)']
            ]
          }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Normas fundamentais do CPC (arts. 1º-15)' },
          { type: 'list', items: [
            '**Art. 1º** — Modelo constitucional do processo (interpretação conforme a CF)',
            '**Art. 2º** — Princípio dispositivo (instauração) + impulso oficial (desenvolvimento)',
            '**Art. 3º** — Inafastabilidade da jurisdição + estímulo à autocomposição',
            '**Art. 4º** — Razoável duração + primazia do julgamento integral do mérito',
            '**Art. 5º** — Boa-fé objetiva (dever de todos os sujeitos)',
            '**Art. 6º** — Cooperação processual',
            '**Art. 7º** — Igualdade processual / paridade de armas',
            '**Arts. 8º-9º** — Atendimento aos fins sociais + contraditório efetivo',
            '**Art. 10** — Vedação à decisão-surpresa',
            '**Arts. 11-12** — Publicidade, fundamentação, ordem cronológica',
            '**Arts. 13-14** — Aplicação espacial e temporal da lei processual',
            '**Art. 15** — Aplicação supletiva e subsidiária do CPC (eleitoral, trabalhista, administrativo)'
          ]},
          { type: 'h', text: 'Outros diplomas centrais' },
          { type: 'list', items: [
            '**LINDB (Decreto-Lei 4.657/42), arts. 1º-6º** — Vigência das normas',
            '**LINDB arts. 20-30** (Lei 13.655/18) — Interpretação no direito público',
            '**CF/88 art. 5º (XXXV, LIV, LV, LXXVIII)** — Garantias processuais constitucionais'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Modelo constitucional do processo' },
          { type: 'p', text: 'O art. 1º CPC estabelece que o processo civil será **ordenado, disciplinado e interpretado** conforme os valores e normas fundamentais da CF. Trata-se de regra de interpretação que vincula a aplicação do CPC à axiologia constitucional — toda dúvida hermenêutica resolve-se em favor da máxima eficácia das garantias do art. 5º CF (devido processo, contraditório, ampla defesa, juiz natural, razoável duração).' },

          { type: 'h', text: 'Boa-fé objetiva e cooperação' },
          { type: 'p', text: 'São as duas grandes inovações principiológicas do CPC/15. A **boa-fé objetiva** (art. 5º) vincula todos os sujeitos processuais — partes, juiz, advogados, MP, terceiros — e desdobra-se em deveres anexos: lealdade, probidade, *non venire contra factum proprium*, *supressio*, *surrectio*, *tu quoque*. Sua violação gera litigância de má-fé (arts. 79-81), responsabilidade do juiz (art. 143) e do MP (art. 184).' },
          { type: 'p', text: 'A **cooperação** (art. 6º) transforma o processo de uma estrutura adversarial-monológica em **modelo cooperativo trifásico**: juiz com partes (deveres de esclarecimento, prevenção, consulta e auxílio); partes entre si (lealdade); todos com a sociedade (boa-fé). Sua manifestação mais visível é a vedação à decisão-surpresa (art. 10): o juiz não pode decidir com base em fundamento sobre o qual as partes não tenham tido oportunidade de se manifestar — ainda que matéria de ordem pública.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Vedação à decisão-surpresa:** a violação ao art. 10 CPC ocorre quando o tribunal adota fundamento jurídico não submetido ao contraditório, mesmo se for matéria cognoscível de ofício (REsp 1.676.027/PR; REsp 1.755.266/SC). Exceção: questões puramente de direito que constituam desdobramento lógico do que já foi debatido.' },

          { type: 'h', text: 'Razoável duração e primazia do julgamento de mérito' },
          { type: 'p', text: 'O art. 4º consagra duas garantias relacionadas: tempo razoável e solução integral do mérito, **incluída a fase satisfativa**. A primazia do mérito reflete-se em diversos dispositivos: art. 6º (cooperação), art. 76 (sanar irregularidade da capacidade), art. 139 IX (suprir vícios), art. 282 §2º (não pronunciar nulidade quando puder decidir o mérito em favor da parte beneficiada), art. 317 (intimar para sanar antes de extinguir), art. 488 (decidir o mérito quando favorável à parte que aproveitaria a extinção).' },

          { type: 'h', text: 'Diálogo das fontes — aplicação prática' },
          { type: 'p', text: 'Cláudia Lima Marques sistematiza três modalidades: (i) **diálogo de coerência** — uma lei serve de base conceitual para a outra (CC + CDC para conceito de consumidor); (ii) **diálogo sistemático de complementaridade ou subsidiariedade** — CDC complementa CC em relação consumerista; (iii) **diálogo de coordenação ou influência** — princípios de uma lei influenciam a interpretação de outra. Resultado: superação do critério clássico de antinomia em favor da convivência harmônica.' },
          { type: 'p', text: 'No processo civil os exemplos abundam: aplicação supletiva e subsidiária do CPC aos demais processos (art. 15 — eleitoral, trabalhista, administrativo); diálogo CDC × CPC em ações coletivas; CC × CPC nas regras de capacidade processual; LINDB (arts. 20-30) × CPC na motivação de decisões em matéria de direito público.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Aplicação supletiva ao processo do trabalho:** admitida quando há lacuna ou compatibilidade (art. 15 CPC + art. 769 CLT). Não há revogação tácita das regras especiais (REsp 1.697.575/PR). Mesma lógica vale para Juizados Especiais (art. 15 CPC + art. 1º Lei 9.099/95).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**4 deveres do juiz na cooperação (Mitidiero/Marinoni):** **E**sclarecer, **P**revenir, **C**onsultar, **A**uxiliar. Mnemônico **EPCA** — *é preciso cooperação ativa*.' },
          { type: 'box', kind: 'macete', text: '**3 modalidades do diálogo das fontes (CLM):** **C**oerência (uma lei serve de base à outra), **C**omplementaridade/subsidiariedade (uma supre a outra), **C**oordenação/influência (princípios cruzados). Mnemônico **CCC**.' },
          { type: 'box', kind: 'macete', text: '**Critérios clássicos de solução de antinomia (que o diálogo SUPERA):** **L**ex superior derrogat inferiori, **L**ex specialis derrogat generali, **L**ex posterior derrogat priori. Mnemônico **3L**.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Aplicação imediata ≠ retroatividade.** Lei processual nova é IMEDIATA, não retroativa. Atos já praticados sob a lei anterior são preservados (isolamento). *Errado:* "a lei nova retroage para alcançar o ato." *Certo:* "a lei nova aplica-se aos atos a praticar."' },
          { type: 'box', kind: 'atencao', text: '**Decisão-surpresa × matéria de ordem pública:** o art. 10 CPC vale MESMO para matérias cognoscíveis de ofício (incompetência absoluta, prescrição, nulidade etc.). A banca cobra essa pegadinha sempre — STJ é firme: ouvir as partes antes de decidir, sob pena de nulidade.' },
          { type: 'box', kind: 'atencao', text: '**Princípio dispositivo × impulso oficial:** o processo INICIA-SE por iniciativa da parte (art. 2º, primeira parte) mas SE DESENVOLVE por impulso oficial (segunda parte). Não confundir com "princípio inquisitivo" puro — o CPC adota um sistema misto.' },
          { type: 'box', kind: 'atencao', text: '**Heterotopia normativa:** uma norma processual pode estar no CC (ex.: art. 219 CC — interrupção da prescrição pela citação) e uma norma material pode estar no CPC. Para identificar a natureza, olhe o objeto, não a localização.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 2 (princípios e DH):** o art. 1º CPC remete diretamente aos princípios constitucionais — devido processo legal, contraditório, ampla defesa, juiz natural, duração razoável. Estude os dois em conjunto.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 6 (competência) e 8 (atos processuais):** as regras de aplicação no espaço (art. 13) ligam-se à competência internacional; o isolamento dos atos (art. 14) é base para o regime de prazos e nulidades.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** vedação à decisão-surpresa (art. 10) e cooperação (art. 6º) são especialmente cobradas no contexto de saneamento (art. 357) e julgamento conforme o estado do processo.' }
        ]
      }
    ]
  },
  {
    id: '02-principios-DH-processo',
    num: 2,
    title: 'Princípios informativos, DH e processo',
    edital: '3.2.2',
    editalText: 'Princípios informativos do Direito Processual Civil. Processo internacional de direitos humanos e abrangência na esfera processual civil. Direitos fundamentais e processo.',
    size: 'Médio (4-5 dias úteis)',
    schedule: 'Mês 1, Semana 1-2',
    advantage: 'Vantagem parcial — DH no MP é cotidiano',
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Os **princípios processuais** formam o alicerce normativo sobre o qual se constroem as regras do CPC e a interpretação da jurisdição. Distinguem-se em duas grandes vertentes: (i) **princípios constitucionais** — extraídos diretamente da CF/88, sobretudo do art. 5º; e (ii) **princípios infraconstitucionais** — cristalizados no CPC/15, especialmente nos arts. 1º-12 (normas fundamentais).' },
          { type: 'p', text: 'A força normativa dos princípios não é meramente retórica. Após a virada pós-positivista (Alexy, Dworkin), princípios são normas jurídicas — diferentes das regras pela **estrutura** (mandados de otimização × mandados definitivos) e pela **forma de aplicação** (ponderação × subsunção). Servem tanto como diretriz interpretativa quanto como fundamento direto de decisão.' },
          { type: 'p', text: '**Direito processual internacional dos direitos humanos** designa o conjunto de normas oriundas de tratados internacionais ratificados pelo Brasil — sobretudo a Convenção Americana de Direitos Humanos (Pacto de São José da Costa Rica, Decreto 678/92) — que impõem padrões mínimos ao processo civil brasileiro. A Comissão e a Corte Interamericana de Direitos Humanos integram o Sistema Interamericano (SIDH); decisões da Corte vinculam o Estado brasileiro.' },
          { type: 'p', text: '**Direitos fundamentais e processo** refletem a dupla dimensão dos DF: (i) dimensão **subjetiva** — titularidade do indivíduo, gerando posições jurídicas exigíveis (direitos de defesa, prestação, participação); (ii) dimensão **objetiva** — vetor interpretativo de toda a ordem jurídica, impondo deveres de proteção ao Estado (*Schutzpflicht*). O processo civil é simultaneamente instrumento de proteção e arena de exercício de DF.' },
          {
            type: 'table',
            headers: ['Princípio constitucional', 'Inciso (CF art. 5º)', 'Conteúdo essencial'],
            rows: [
              ['Devido processo legal', 'LIV', 'Procedimental (rito) + substantivo (proporcionalidade)'],
              ['Contraditório e ampla defesa', 'LV', 'Informação + manifestação + influência (arts. 9º-10 CPC)'],
              ['Inafastabilidade', 'XXXV', 'Acesso à justiça; direito de ação'],
              ['Juiz natural', 'XXXVII e LIII', 'Vedação ao tribunal de exceção; competência prévia; imparcialidade'],
              ['Vedação a provas ilícitas', 'LVI', 'Inadmissibilidade no processo'],
              ['Razoável duração', 'LXXVIII (EC 45/04)', 'Tempo + meios para celeridade'],
              ['Publicidade', 'LX', 'Regra; sigilo é exceção justificada'],
              ['Fundamentação', 'art. 93 IX', 'Substancial (CPC art. 489 §1º)']
            ]
          }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Constituição da República' },
          { type: 'list', items: [
            '**Art. 5º LIV** — devido processo legal',
            '**Art. 5º LV** — contraditório e ampla defesa',
            '**Art. 5º XXXV** — inafastabilidade da jurisdição',
            '**Art. 5º LIII e XXXVII** — juiz natural; vedação a tribunal de exceção',
            '**Art. 5º LVI** — vedação às provas ilícitas',
            '**Art. 5º LX** — publicidade dos atos processuais',
            '**Art. 5º LXXVIII** (EC 45/04) — razoável duração + meios para celeridade',
            '**Art. 93 IX** — fundamentação obrigatória das decisões',
            '**Art. 5º §2º** — direitos decorrentes do regime e dos tratados',
            '**Art. 5º §3º** — tratados de DH aprovados como EC equivalem a EC',
            '**Art. 5º §4º** — submissão à jurisdição do TPI'
          ]},
          { type: 'h', text: 'CPC — princípios infraconstitucionais' },
          { type: 'list', items: [
            '**Arts. 1º-12** — normas fundamentais (estudo conjunto com Tópico 1)',
            '**Arts. 9º-10** — contraditório efetivo + vedação à decisão-surpresa',
            '**Art. 357** — saneamento cooperativo',
            '**Art. 489 §1º (IV, V e VI)** — fundamentação substancial; precedentes'
          ]},
          { type: 'h', text: 'Tratados de DH e legislação correlata' },
          { type: 'list', items: [
            '**Convenção Americana de DH** (Pacto de São José) — Decreto 678/92',
            '**Pacto Internacional de Direitos Civis e Políticos** — Decreto 592/92',
            '**Convenção sobre os Direitos da Criança** — Decreto 99.710/90',
            '**Convenção sobre Direitos das PCD** (Decreto 6.949/09 — primeiro tratado com status de EC, art. 5º §3º)',
            '**Tratado de Marraqueche** (Decreto 9.522/18 — segundo com status de EC)',
            '**Convenção Interamericana contra o Racismo** (Decreto 10.932/22 — terceiro com status de EC)'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Devido processo legal — dupla dimensão' },
          { type: 'p', text: 'O *due process of law*, importado do direito anglo-saxão, possui no Brasil dimensão **procedimental** (procedural due process — observância do rito, contraditório, ampla defesa) e **substantiva** (substantive due process — exigência de razoabilidade e proporcionalidade do ato estatal, controle de mérito quanto ao excesso). É a cláusula-mãe da qual derivam todas as demais garantias processuais. A dimensão substantiva é o fundamento do controle de constitucionalidade material das leis processuais.' },

          { type: 'h', text: 'Contraditório efetivo — superação da concepção formal' },
          { type: 'p', text: 'O CPC/15 abandona o contraditório meramente formal (oportunidade de manifestação) e adota o **contraditório substancial ou efetivo**: direito de **influenciar** a decisão (art. 9º), com vedação à decisão-surpresa (art. 10). Não basta ouvir; é preciso considerar o argumento — daí a exigência de fundamentação substancial (art. 489 §1º IV: enfrentar todos os argumentos deduzidos no processo capazes, em tese, de infirmar a conclusão adotada pelo julgador).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — RE 631.240 (2014, repercussão geral, Tema 350):** prévio requerimento administrativo é condição da ação previdenciária — interpretação do art. 5º XXXV à luz do interesse de agir. Mesma lógica em ADI 6.421 sobre serviços públicos.' },

          { type: 'h', text: 'Inafastabilidade × condicionamentos legítimos' },
          { type: 'p', text: 'A inafastabilidade (art. 5º XXXV CF) não é absoluta. O STF admite condicionamentos razoáveis ao acesso ao Judiciário — exigência de prévio requerimento administrativo em causas previdenciárias (RE 631.240), arbitragem como opção (Lei 9.307/96), interesse de agir (CPC art. 17). O **núcleo intangível** é a possibilidade de provocar o Estado-juiz quando há lesão ou ameaça a direito.' },

          { type: 'h', text: 'Juiz natural e imparcialidade' },
          { type: 'p', text: 'Garante (i) competência preestabelecida em lei (art. 5º LIII); (ii) vedação a juízos *ad hoc* criados após o fato (art. 5º XXXVII); (iii) imparcialidade. As regras de impedimento e suspeição (CPC arts. 144-148) são desdobramento. **Atenção:** a recusa do juiz natural por força de fato superveniente (impedimento, suspeição) não viola o princípio — pelo contrário, o reafirma.' },

          { type: 'h', text: 'Status normativo dos tratados de DH no Brasil' },
          { type: 'p', text: 'O STF, no leading case **RE 466.343/SP** (Cesar Peluso, 2008 — prisão civil do depositário infiel), fixou que tratados de DH não aprovados como EC têm **status supralegal** — acima da lei ordinária, abaixo da CF. Já os aprovados pelo rito do art. 5º §3º (3/5 em dois turnos em cada Casa, como EC) têm **status de emenda constitucional**. Atualmente apenas três tratados têm esse status: Convenção sobre Direitos das PCD, Tratado de Marraqueche e Convenção Interamericana contra o Racismo.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Súmula Vinculante 25:** "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito." Resultado direto do controle de convencionalidade (art. 7.7 CADH × Decreto-Lei 911/69 e art. 5º LXVII CF).' },

          { type: 'h', text: 'Sistema Interamericano de DH (SIDH)' },
          { type: 'p', text: 'Integra a OEA. Estrutura **dual**: a **Comissão IDH** (Washington, DC) recebe denúncias, faz recomendações, demanda perante a Corte; a **Corte IDH** (San José da Costa Rica) julga e profere sentenças vinculantes para Estados que reconheceram sua jurisdição contenciosa. O Brasil reconheceu a jurisdição da Corte pelo **Decreto 4.463/02**. Sentenças da Corte são **autoexecutáveis** quanto à indenização (art. 68.2 CADH); demais medidas dependem de cumprimento interno por meio das autoridades nacionais.' },

          { type: 'h', text: 'Controle de convencionalidade' },
          { type: 'p', text: 'Dever do juiz brasileiro de aferir a compatibilidade da lei interna com tratados de DH. Se a lei contraria o tratado supralegal, deixa de ser aplicada (controle **difuso**); se contraria tratado com status de EC, controle **concentrado** ou difuso. Inspiração: Corte IDH, **Caso Almonacid Arellano vs. Chile (2006)**, depois consolidado em Cabrera García y Montiel Flores vs. México (2010). No Brasil, o STF reconheceu o instituto sobretudo no julgamento da prisão civil (RE 466.343) e tem aplicado em várias matérias.' },
          { type: 'box', kind: 'jurisprudencia', text: '**Corte IDH × Brasil — casos paradigmáticos:** *Damião Ximenes Lopes* (2006) — 1ª condenação do Brasil; saúde mental e proteção a vulneráveis. *Gomes Lund e outros (Guerrilha do Araguaia)* (2010) — incompatibilidade da Lei de Anistia (Lei 6.683/79) com a CADH. *Garibaldi vs. Brasil* (2009) — devido processo e duração razoável (impunidade no homicídio de líder rural). *Favela Nova Brasília* (2017) — investigação criminal e tortura policial. *Vladimir Herzog* (2018) — imprescritibilidade dos crimes contra a humanidade.' },

          { type: 'h', text: 'Direitos fundamentais e processo — eficácia horizontal' },
          { type: 'p', text: 'DF aplicam-se também nas relações entre particulares (eficácia horizontal — *Drittwirkung*). No processo civil, isso significa que regras processuais infraconstitucionais devem ser interpretadas em conformidade com os DF do adversário, não apenas em face do Estado. Exemplos: privacidade na produção de provas (art. 5º X-XII), dignidade no comportamento processual (CPC art. 5º), proteção do consumidor litigante (art. 5º XXXII), assistência judiciária gratuita (art. 5º LXXIV).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Princípios do art. 5º CF aplicáveis ao processo — mnemônico CADIPRER:** **C**ontraditório, **A**mpla defesa, **D**evido processo, **I**nafastabilidade, **P**rovas (vedação às ilícitas), **R**azoável duração, **E**galité (igualdade), **R**azoável publicidade.' },
          { type: 'box', kind: 'macete', text: '**Status dos tratados de DH no Brasil — "3 níveis":** (i) **EC** se aprovados pelo art. 5º §3º (3/5, dois turnos, cada Casa); (ii) **supralegal** se ratificados sem o rito (RE 466.343); (iii) **lei ordinária** apenas se NÃO forem de DH.' },
          { type: 'box', kind: 'macete', text: '**Tratados de DH com status de EC (3 únicos):** PCD (2009), Marraqueche (2018), Racismo (2022). Ordem cronológica + temas progressivos = pão da prova.' },
          { type: 'box', kind: 'macete', text: '**Casos da Corte IDH × Brasil — mnemônico DGGFH:** **D**amião Ximenes (saúde mental), **G**omes Lund (anistia), **G**aribaldi (impunidade), **F**avela Nova Brasília (tortura), **H**erzog (imprescritibilidade). Mais: Maria da Penha (Comissão IDH).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Status dos tratados de DH:** o STF NÃO acolheu a tese de que TODO tratado de DH tem status constitucional. Apenas os aprovados pelo art. 5º §3º. Os demais são **supralegais**. Cuidado com banca que afirma "status constitucional automático" — está errado.' },
          { type: 'box', kind: 'atencao', text: '**ADPF 153 vs. Caso Gomes Lund:** o STF manteve a Lei de Anistia (ADPF 153, abril/2010) — DEPOIS a Corte IDH a declarou incompatível com a CADH (Caso Gomes Lund, novembro/2010). O Brasil está em descumprimento internacional, mas internamente a Lei segue válida — paradoxo cobrado em prova.' },
          { type: 'box', kind: 'atencao', text: '**Contraditório formal × substancial:** ouvir a parte é o mínimo; o contraditório efetivo (art. 9º CPC) exige que a manifestação tenha **chance real de influenciar** a decisão, e que o juiz a considere expressamente (art. 489 §1º IV). Decisão que ignora argumento é nula por falta de fundamentação.' },
          { type: 'box', kind: 'atencao', text: '**Inafastabilidade não é absoluta:** prévio requerimento administrativo (RE 631.240), arbitragem voluntária (Lei 9.307/96), interesse de agir (CPC art. 17), depósito recursal restrito — são condicionamentos compatíveis. O que o art. 5º XXXV veda é a EXCLUSÃO da apreciação judicial, não condicionamentos razoáveis.' },
          { type: 'box', kind: 'atencao', text: '**Comissão IDH × Corte IDH:** a Comissão NÃO julga; faz recomendações e demanda perante a Corte. Apenas a Corte profere sentenças vinculantes. Banca confunde frequentemente esses papéis.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 1:** os princípios constitucionais aqui estudados são a base interpretativa do art. 1º CPC. Os arts. 1º-12 CPC os concretizam infraconstitucionalmente — estudar em conjunto.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** o MP atua como guardião dos DH e tem legitimidade para ACP em sua defesa (CF art. 129 III; LC 75/93). **Vivência institucional da candidata é vantagem direta** — explorar em prova oral.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum) e 16 (recursos):** fundamentação substancial (art. 489 §1º) e contraditório efetivo são cobrados na sentença e no acórdão; ausência gera nulidade absoluta.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 20 (ACP):** instrumento por excelência de defesa coletiva de DH — meio ambiente, consumidor, criança/adolescente, idoso, PCD, povos tradicionais. Pão com manteiga do MP.' }
        ]
      }
    ]
  },
  {
    id: '03-jurisdicao-acao-excecao-processo',
    num: 3,
    title: 'Jurisdição, ação, exceção e processo',
    edital: '3.2.3',
    editalText: 'Jurisdição, ação, exceção e processo.',
    size: 'Médio (4-5 dias úteis)',
    schedule: 'Mês 1, Semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Os quatro institutos — **jurisdição, ação, exceção e processo** — formam a "trilogia estrutural" da Teoria Geral do Processo (Carnelutti chamou de "trinômio"; a doutrina brasileira ampliou para quatro). São os pilares conceituais sobre os quais se ergue toda a disciplina processual. Domínio sólido aqui é pré-requisito para todos os demais tópicos.' },
          { type: 'p', text: '**Jurisdição** é a função estatal de pacificar conflitos por meio do processo, com escopos jurídico (atuação da vontade concreta da lei), social (pacificação) e político (afirmação do poder estatal). Caracteriza-se por **substitutividade** (Estado decide no lugar das partes), **definitividade** (aptidão para coisa julgada), **inércia** (não age de ofício — *ne procedat iudex ex officio*) e **unidade** (jurisdição é uma só, embora dividida em competências).' },
          { type: 'p', text: '**Ação** é o direito público subjetivo, autônomo e abstrato, de provocar a jurisdição. As teorias evoluíram da concepção imanentista (Savigny — ação como direito material em movimento) à abstrata (Degenkolb, Plósz) e à **eclética de Liebman**, esta adotada pelo CPC: a ação é direito à sentença de mérito (não necessariamente favorável), condicionado por requisitos próprios (condições da ação). Hoje, no CPC/15, restaram **duas condições**: legitimidade e interesse de agir (a possibilidade jurídica do pedido foi absorvida pelo interesse).' },
          { type: 'p', text: '**Exceção** é o direito de defesa do réu — em sentido amplo, qualquer resistência à pretensão; em sentido estrito, as defesas processuais (peças autônomas no sistema antigo). No CPC/15, a estrutura foi simplificada: preliminares e mérito vão todos na **contestação** (art. 337); apenas o impedimento e a suspeição seguem peça apartada (arts. 146-148).' },
          { type: 'p', text: '**Processo** é o instrumento da jurisdição — composto de relação jurídica processual (autor-juiz-réu, triangular ou angular) e procedimento (sequência de atos). Sua natureza jurídica foi objeto de longa controvérsia, hoje pacificada na **teoria da relação jurídica processual** (Bülow, 1868), com aprimoramentos da teoria do **procedimento em contraditório** de Fazzalari.' },
          {
            type: 'table',
            headers: ['Instituto', 'Conceito-chave', 'Sujeito', 'Dispositivo CPC'],
            rows: [
              ['Jurisdição', 'Função estatal pacificadora', 'Estado-juiz', 'Arts. 16-20'],
              ['Ação', 'Direito de provocar a jurisdição', 'Autor (e réu reconvinte)', 'Arts. 17, 485 VI, 337'],
              ['Exceção', 'Direito de defesa', 'Réu (e autor em reconvenção)', 'Arts. 336-342, 146-148'],
              ['Processo', 'Instrumento da jurisdição', 'Todos os sujeitos', 'Arts. 188-201, 318+']
            ]
          }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Jurisdição' },
          { type: 'list', items: [
            '**CPC arts. 16-20** — limites da jurisdição nacional; cooperação internacional',
            '**CPC arts. 21-25** — competência internacional concorrente e exclusiva',
            '**CF/88 art. 5º XXXV** — inafastabilidade',
            '**Lei 9.307/96** — Lei de Arbitragem'
          ]},
          { type: 'h', text: 'Ação' },
          { type: 'list', items: [
            '**CPC art. 17** — "Para postular em juízo é necessário ter interesse e legitimidade"',
            '**CPC art. 485 VI** — extinção sem mérito por ausência de legitimidade ou interesse',
            '**CPC art. 330 II e III** — indeferimento da inicial por ilegitimidade ou falta de interesse',
            '**CPC art. 18** — legitimação extraordinária (substituição processual)'
          ]},
          { type: 'h', text: 'Exceção (defesa)' },
          { type: 'list', items: [
            '**CPC arts. 336-342** — contestação (preliminares e mérito reunidos)',
            '**CPC art. 337** — rol de preliminares (matérias da defesa processual)',
            '**CPC arts. 146-148** — impedimento e suspeição (peça apartada)',
            '**CPC arts. 343-346** — reconvenção (dentro da contestação)'
          ]},
          { type: 'h', text: 'Processo (pressupostos e procedimento)' },
          { type: 'list', items: [
            '**CPC arts. 188-201** — atos processuais (forma)',
            '**CPC art. 318** — procedimento comum como regra; especiais por exceção',
            '**CPC arts. 485, 487** — extinção sem e com resolução do mérito'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Jurisdição — características essenciais' },
          { type: 'p', text: 'A doutrina majoritária (Cintra/Grinover/Dinamarco) lista quatro características: (i) **substitutividade** — o Estado decide no lugar das partes (excluído na jurisdição voluntária, segundo parte da doutrina); (ii) **definitividade** — aptidão para a coisa julgada material (atributo único da jurisdição, ausente em decisões administrativas); (iii) **inércia** — não age de ofício, depende de provocação (*ne procedat iudex ex officio*); (iv) **unidade** — jurisdição é uma só, distribuída em competências.' },
          { type: 'p', text: 'Classificações tradicionais: (a) quanto à matéria — civil, penal, trabalhista, eleitoral, militar; (b) quanto ao órgão — comum (estadual e federal) e especial (eleitoral, militar, trabalhista); (c) quanto ao grau — superior e inferior; (d) quanto à natureza — voluntária (administração pública de interesses privados) e contenciosa (conflito).' },

          { type: 'h', text: 'Equivalentes jurisdicionais' },
          { type: 'p', text: 'Mecanismos de solução de conflito que **não passam pela jurisdição estatal**: (i) **autotutela** — solução pela própria força (excepcional: legítima defesa, desforço imediato da posse, greve); (ii) **autocomposição** — transação, conciliação, mediação (CPC art. 3º §§2º-3º privilegia); (iii) **arbitragem** — Lei 9.307/96. A natureza jurídica da arbitragem divide a doutrina: para Cândido Dinamarco e o STJ, é **jurisdição privada** (sentença arbitral é título executivo judicial — CPC art. 515 VII); para Cintra/Grinover, equivalente jurisdicional.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 485:** "A Lei de Arbitragem aplica-se aos contratos que contenham cláusula arbitral, ainda que celebrados antes da sua edição." Reforça a natureza jurisdicional do instituto.' },

          { type: 'h', text: 'Ação — teorias e condições no CPC/15' },
          { type: 'p', text: 'Evolução das teorias: (i) **imanentista** (Savigny) — ação = direito material em movimento; (ii) **concreta** (Wach, A. Wach) — direito à sentença favorável; (iii) **abstrata** (Degenkolb, Plósz) — direito autônomo, independente do mérito; (iv) **eclética** (Liebman) — direito à sentença de mérito, condicionado por **legitimidade**, **interesse** e (originalmente) **possibilidade jurídica**. A teoria eclética foi adotada pelo CPC/73 e MANTIDA no CPC/15, com a única ressalva de que a possibilidade jurídica do pedido foi absorvida pelo interesse de agir.' },
          { type: 'p', text: 'Hoje, as **condições da ação** são: (a) **legitimidade** (art. 17) — pertinência subjetiva (legitimação ordinária = parte do conflito; extraordinária = substituto processual, art. 18); (b) **interesse de agir** — utilidade (provimento útil) + necessidade (provocação do Judiciário) + adequação (via correta). Ausência → extinção sem mérito (art. 485 VI).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — RE 631.240 (Tema 350):** prévio requerimento administrativo é condição para o interesse de agir em ações previdenciárias. Não há "negativa ficta" automática.' },

          { type: 'h', text: 'Teoria da asserção (in statu assertionis)' },
          { type: 'p', text: 'Predominante na doutrina (Bedaque, Watanabe, Greco) e no STJ: as condições da ação devem ser verificadas **à luz das alegações do autor** (em estado de asserção, antes da instrução). Se a verificação exigir exame probatório aprofundado, o juízo desce ao **mérito** — e a decisão será de improcedência (sentença de mérito), não de carência (extinção sem mérito). Importância prática: improcedência faz coisa julgada material; carência não.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.395.875/PE e jurisprudência consolidada:** adoção da teoria da asserção. Se a aferição da legitimidade exigir dilação probatória, a questão é de mérito — improcedência, não carência.' },

          { type: 'h', text: 'Exceção — estrutura no CPC/15' },
          { type: 'p', text: 'O CPC/15 simplificou drasticamente o sistema antigo (que tinha "exceções" como peças autônomas — exceção de incompetência relativa, suspeição, impedimento). Hoje:' },
          { type: 'list', items: [
            '**Contestação (art. 336)** — única peça do réu para defesa, reunindo preliminares e mérito',
            '**Art. 337** — rol exaustivo de preliminares (incompetência absoluta E relativa; inépcia; perempção; litispendência; coisa julgada; conexão; capacidade postulatória; convenção de arbitragem; ausência de legitimidade ou interesse — ROL TAXATIVO)',
            '**Impedimento e suspeição (arts. 146-148)** — únicos casos em peça apartada, no prazo de 15 dias do conhecimento do fato',
            '**Reconvenção (arts. 343-346)** — propositura na própria contestação (não mais peça apartada)'
          ]},

          { type: 'h', text: 'Processo — natureza jurídica e pressupostos' },
          { type: 'p', text: 'Teorias sobre a natureza: (a) **contratualista** (Pothier, Aubry/Rau) — superada; (b) **quase-contrato** (Savigny) — superada; (c) **relação jurídica processual** (Bülow, 1868) — DOMINANTE; (d) **situação jurídica** (Goldschmidt) — minoritária; (e) **procedimento em contraditório** (Fazzalari, 1957) — moderna, complementar à de Bülow.' },
          { type: 'p', text: 'A relação jurídica processual é **distinta da material** (Bülow), **autônoma**, **complexa** (vários direitos e deveres), **dinâmica** (evolui no tempo) e **trilateral ou triangular** (autor-juiz-réu, com vínculos recíprocos).' },
          { type: 'p', text: 'Os **pressupostos processuais** dividem-se em:' },
          {
            type: 'table',
            headers: ['Categoria', 'Subdivisão', 'Exemplos'],
            rows: [
              ['De existência', 'Subjetivos', 'Jurisdição; demanda; partes'],
              ['De existência', 'Objetivo', 'Petição inicial (sem ela, não há processo)'],
              ['De validade', 'Subjetivos (juiz)', 'Competência; imparcialidade'],
              ['De validade', 'Subjetivos (partes)', 'Capacidade de ser parte; capacidade processual; capacidade postulatória'],
              ['De validade — objetivos', 'Intrínsecos', 'Petição apta (art. 330); citação válida'],
              ['De validade — objetivos', 'Extrínsecos (negativos)', 'Ausência de litispendência, coisa julgada, perempção, convenção de arbitragem']
            ]
          }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Características da jurisdição — SIDU:** **S**ubstitutividade, **I**nércia, **D**efinitividade, **U**nidade.' },
          { type: 'box', kind: 'macete', text: '**Equivalentes jurisdicionais — "AAA":** **A**utotutela (excepcional), **A**utocomposição (transação/mediação/conciliação), **A**rbitragem.' },
          { type: 'box', kind: 'macete', text: '**Teorias da ação — ICAE (cronológica):** **I**manentista (Savigny) → **C**oncreta (Wach) → **A**bstrata (Degenkolb) → **E**clética (Liebman, adotada).' },
          { type: 'box', kind: 'macete', text: '**Condições da ação no CPC/15 — só LI:** **L**egitimidade e **I**nteresse de agir. A possibilidade jurídica do pedido foi absorvida pelo interesse.' },
          { type: 'box', kind: 'macete', text: '**Interesse de agir — UNA:** **U**tilidade + **N**ecessidade + **A**dequação.' },
          { type: 'box', kind: 'macete', text: '**Pressupostos processuais — JCP/PCC:** Existência: **J**urisdição, **C**apacidade postulatória mínima, **P**etição. Validade: **P**etição apta, **C**itação válida, **C**ompetência + ausência de óbices (litispendência, coisa julgada).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Carência da ação × improcedência:** carência (ausência de condição) → extinção SEM mérito (art. 485 VI), sem coisa julgada material. Improcedência → COM mérito (art. 487 I), com coisa julgada. A teoria da asserção é o que define a fronteira: se demandar prova, é mérito.' },
          { type: 'box', kind: 'atencao', text: '**Possibilidade jurídica do pedido NÃO é mais condição autônoma** no CPC/15 — foi absorvida pelo interesse de agir. Banca cobra essa "armadilha" da transição CPC/73 → CPC/15.' },
          { type: 'box', kind: 'atencao', text: '**Substituição processual ≠ sucessão processual:** substituição = legitimação extraordinária (parte em nome próprio defendendo direito alheio — art. 18); sucessão = troca da parte por morte ou ato inter vivos (art. 109).' },
          { type: 'box', kind: 'atencao', text: '**Jurisdição voluntária — substitutividade?** Discussão clássica: parte da doutrina nega jurisdição (seria mera administração pública de interesses privados); o CPC trata como jurisdição (arts. 719-770). Para a maioria moderna, é jurisdição em sentido próprio, com peculiaridades.' },
          { type: 'box', kind: 'atencao', text: '**Pressupostos processuais × condições da ação:** ambos são analisados antes do mérito, mas têm naturezas diversas. Pressupostos = relação processual; condições = exercício do direito de ação. A ausência de qualquer um leva a extinção sem mérito (art. 485).' },
          { type: 'box', kind: 'atencao', text: '**Reconvenção no CPC/15** — apresentada NA própria contestação (art. 343), NÃO em peça apartada. Erro frequente em prova.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 4 (partes e intervenção):** capacidade processual e legitimidade ad causam são institutos distintos, frequentemente confundidos. Este tópico fundamenta a discussão.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 6 (competência):** jurisdição é uma; competência é a medida em que cada órgão a exerce. A unidade da jurisdição é base lógica para o estudo da competência.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** as condições da ação são examinadas na petição inicial (indeferimento — art. 330) e podem reaparecer em qualquer fase (art. 485 §3º). A teoria da asserção orienta o juiz.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 14 (jurisdição voluntária):** a discussão sobre a natureza jurídica (jurisdição ou administração?) repete-se ali com nuances específicas.' }
        ]
      }
    ]
  },
  {
    id: '04-partes-procuradores-intervencao',
    num: 4,
    title: 'Partes, procuradores, intervenção, IDPJ, amicus curiae',
    edital: '3.2.4',
    editalText: 'Partes e procuradores. Capacidade, deveres, responsabilidade, substituição, litisconsórcio e intervenção de terceiros. Incidente de desconsideração da personalidade jurídica. Amicus curiae.',
    size: 'Médio-grande (5-7 dias úteis)',
    schedule: 'Mês 1, Semana 3',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: '**Partes** são os sujeitos parciais do processo — autor (quem deduz a pretensão) e réu (em face de quem se deduz). A condição de parte adquire-se com a propositura da ação e o desencadeamento do polo passivo (citação válida). Ao lado das partes principais, o processo admite **terceiros** que intervêm com posições jurídicas próprias e podem alterar a configuração subjetiva da relação processual.' },
          { type: 'p', text: '**Capacidade** desdobra-se em três planos:' },
          {
            type: 'table',
            headers: ['Capacidade', 'Significado', 'Quem tem'],
            rows: [
              ['Ser parte', 'Aptidão para titularizar relação processual (capacidade de direito)', 'Toda pessoa natural ou jurídica; entes despersonalizados (espólio, massa falida, condomínio)'],
              ['Estar em juízo', 'Aptidão para atuar pessoalmente no processo (capacidade processual)', 'Maiores capazes; menores e incapazes precisam de representação/assistência'],
              ['Postular', 'Aptidão para realizar atos técnicos (capacidade postulatória)', 'Advogados regularmente inscritos; partes em causa própria se também forem advogadas; Defensoria; MP']
            ]
          },
          { type: 'p', text: '**Litisconsórcio** é a pluralidade de partes em um mesmo polo. Classifica-se por critérios cruzados: (a) **necessário** (a lei ou a relação material exigem; sentença atinge todos uniformemente) × **facultativo**; (b) **unitário** (decisão deve ser idêntica para todos) × **simples** (pode divergir); (c) **ativo** × **passivo** × **misto**; (d) **inicial** (formado na petição) × **ulterior** (sucessivo).' },
          { type: 'p', text: '**Intervenção de terceiros** — espécies no CPC/15: assistência (simples e litisconsorcial), denunciação da lide, chamamento ao processo, **IDPJ** (incidente de desconsideração da personalidade jurídica), **amicus curiae**. O CPC/15 EXTINGUIU a oposição como modalidade de intervenção (passou a ser ação autônoma sob procedimento comum) e a nomeação à autoria (substituída pela correção do polo passivo, art. 339).' },
          { type: 'p', text: '**Substituição processual** (legitimação extraordinária, art. 18) — atua-se em nome próprio defendendo direito alheio. Diferente de representação (atua em nome alheio defendendo direito alheio) e de sucessão processual (troca da parte por morte, art. 110, ou ato inter vivos, art. 109).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Partes, capacidade e procuradores' },
          { type: 'list', items: [
            '**CPC arts. 70-76** — capacidade processual; menor, incapaz, curador especial',
            '**CPC arts. 77-81** — deveres das partes; litigância de má-fé',
            '**CPC arts. 82-97** — despesas, honorários, multas',
            '**CPC arts. 103-112** — procuradores; mandato; sucessão'
          ]},
          { type: 'h', text: 'Litisconsórcio' },
          { type: 'list', items: [
            '**CPC arts. 113-117** — espécies, formação, dinâmica',
            '**Art. 113 §1º** — litisconsórcio multitudinário (limitação pelo juiz)',
            '**Art. 114** — litisconsórcio necessário (sentença ineficaz quanto ao não citado se unitário)'
          ]},
          { type: 'h', text: 'Intervenção de terceiros' },
          { type: 'list', items: [
            '**CPC arts. 119-124** — assistência simples e litisconsorcial',
            '**CPC arts. 125-129** — denunciação da lide (rol antes obrigatório, hoje facultativo, salvo art. 125)',
            '**CPC arts. 130-132** — chamamento ao processo (devedor solidário; fiador chama afiançado)',
            '**CPC arts. 133-137** — IDPJ',
            '**CPC art. 138** — amicus curiae'
          ]},
          { type: 'h', text: 'Lei material' },
          { type: 'list', items: [
            '**CC art. 50** (com redação da Lei 13.874/19 — Liberdade Econômica) — desconsideração direta (abuso da personalidade: confusão patrimonial ou desvio de finalidade)',
            '**CDC art. 28** — desconsideração nas relações de consumo (mais ampla)',
            '**Lei 12.846/13 art. 14** — desconsideração na lei anticorrupção'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Litisconsórcio necessário × unitário' },
          { type: 'p', text: 'Não confunda: **necessário** decorre da lei ou da relação material (todos DEVEM estar no processo); **unitário** decorre da homogeneidade do bem da vida (a sentença DEVE ser idêntica para todos). Pode haver: (a) necessário + unitário (regra — ex.: ação de anulação de casamento contra ambos os cônjuges); (b) necessário + simples (raríssimo); (c) facultativo + unitário (ex.: condôminos em ação reivindicatória); (d) facultativo + simples (regra do litisconsórcio facultativo comum).' },

          { type: 'h', text: 'Litisconsórcio multitudinário — limitação pelo juiz' },
          { type: 'p', text: 'Quando o número excessivo de litisconsortes comprometer a rápida solução do litígio ou dificultar a defesa, o juiz pode **limitar o litisconsórcio** (art. 113 §1º). A decisão é por desmembramento, não exclusão. Recurso cabível: agravo de instrumento (art. 1.015 III por interpretação ampliativa, mas matéria controvertida — STJ tende a admitir).' },

          { type: 'h', text: 'Assistência simples × litisconsorcial' },
          { type: 'p', text: 'Na **simples** (art. 121), o assistente tem interesse jurídico reflexo; pode ajudar mas não vincula a prova exclusiva, suas alegações cedem à parte assistida (art. 122). Na **litisconsorcial** (art. 124), tem interesse jurídico direto na lide; equipara-se a litisconsorte unitário, com poderes plenos. Recurso de assistente vale para o assistido se este for revel (art. 122 §único).' },

          { type: 'h', text: 'Denunciação da lide' },
          { type: 'p', text: 'Hoje em geral **facultativa** (art. 125 — rol fechado: garantia da evicção; obrigado por lei ou contrato a indenizar). A não denunciação não impede ação regressiva autônoma. Procedimento: dupla relação — autor × réu (lide principal) e réu × denunciado (lide secundária); duas sentenças no mesmo julgamento (art. 129).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.738.737 e Tema 880:** denunciação da lide pelo réu ao terceiro com obrigação de indenizar decorrente de contrato é ADMITIDA — não há mais óbice da "introdução de fundamento jurídico novo" sob o CPC/15.' },

          { type: 'h', text: 'Chamamento ao processo' },
          { type: 'p', text: 'Cabível para: (i) afiançado, pelo fiador; (ii) demais devedores solidários; (iii) demais fiadores (art. 130). Cabe ao réu (não ao autor). Resultado: condenação solidária + sub-rogação interna (art. 132 — quem pagou tudo cobra dos chamados). NÃO cabe contra a Fazenda Pública para chamar outro ente federativo (já se discutiu muito; o STF e a doutrina majoritária afastam — viola a CF art. 109 I).' },

          { type: 'h', text: 'IDPJ — Incidente de Desconsideração da PJ' },
          { type: 'p', text: '**Inovação do CPC/15** (arts. 133-137). Preserva o contraditório prévio: a desconsideração depende de provocação (autor, MP nos casos em que cabível, AGU/PFN em executivo fiscal — STJ Tema 1.019); o sócio é citado e produz defesa, com prazo de 15 dias e instrução probatória. **Suspende o processo** durante o trâmite. Recurso da decisão: **agravo de instrumento** (art. 1.015 IV). Cabe em qualquer fase: cognição, cumprimento de sentença, execução.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.019 (REsp 1.804.677):** o IDPJ é cabível na execução fiscal, salvo na hipótese específica do art. 135 do CTN (responsabilidade tributária de sócios-gerentes por atos com excesso de poderes), em que basta o redirecionamento incidental.' },
          { type: 'p', text: '**Modalidades materiais da desconsideração:**' },
          {
            type: 'table',
            headers: ['Modalidade', 'Conceito', 'Base'],
            rows: [
              ['Direta', 'Atinge bens dos sócios por dívida da PJ', 'CC art. 50 + CDC art. 28'],
              ['Inversa', 'Atinge bens da PJ por dívida do sócio', 'CC art. 50 §3º (Lei 13.874/19)'],
              ['Indireta', 'Atinge PJ controlada/coligada de outra (grupos econômicos)', 'CC art. 50 §4º + jurisprudência'],
              ['Expansiva', 'Atinge PJ que sucede de fato outra (sucessão empresarial)', 'Construção jurisprudencial']
            ]
          },

          { type: 'h', text: 'Amicus curiae (CPC art. 138)' },
          { type: 'p', text: 'Sujeito que ingressa para CONTRIBUIR com subsídios técnicos, sociais ou jurídicos. Requisitos cumulativos: (i) **relevância da matéria**, (ii) **especificidade do tema** ou (iii) **repercussão social da controvérsia** + (iv) representatividade adequada do interveniente. Decisão de admissão é IRRECORRÍVEL (art. 138). Como regra, NÃO RECORRE — exceções: contra decisão de admissão e em IRDR/IAC. Pode ser pessoa natural, jurídica, órgão ou entidade especializada.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — RE 1.101.937 (Tema 1.073):** o amicus curiae não tem legitimidade para opor embargos de declaração contra acórdão que julga o mérito do recurso extraordinário com repercussão geral — apenas contra a decisão que indefere sua admissão. Tese consolidada.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Capacidades — "Quem-Posso-Como":** **Q**uem (ser parte = capacidade de direito), **P**osso (estar em juízo = capacidade processual), **C**omo (postular = capacidade postulatória).' },
          { type: 'box', kind: 'macete', text: '**Litisconsórcio — "QUEM-COMO" (4 critérios):** **Q**ual o lado (ativo/passivo/misto), **U**nitário ou simples, **E**xigido (necessário) ou voluntário (facultativo), **M**omento (inicial/ulterior).' },
          { type: 'box', kind: 'macete', text: '**Intervenções típicas no CPC/15 — 5 espécies "ADCIA":** **A**ssistência (simples e litisconsorcial), **D**enunciação da lide, **C**hamamento ao processo, **I**DPJ, **A**micus curiae. Memorize: oposição e nomeação à autoria SAÍRAM.' },
          { type: 'box', kind: 'macete', text: '**Hipóteses de denunciação obrigatória (art. 125) — apenas garantia da evicção** (e ainda assim o STJ relativiza — Tema 760: pode haver ação autônoma).' },
          { type: 'box', kind: 'macete', text: '**Modalidades de desconsideração — DIIE:** **D**ireta, **I**nversa, **I**ndireta (grupos), **E**xpansiva.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Substituição × representação × sucessão:** três institutos distintos. Substituição: nome próprio + direito alheio (legitimação extraordinária). Representação: nome alheio + direito alheio (incapaz pelo representante). Sucessão: troca da parte (morte, alienação).' },
          { type: 'box', kind: 'atencao', text: '**A oposição NÃO é mais intervenção de terceiros no CPC/15** — passou a ser AÇÃO AUTÔNOMA sob procedimento comum (arts. 682-686). Apesar disso, várias bancas ainda perguntam como se fosse — fique atento: NO CPC/15, a oposição não está no rol de intervenções (arts. 119-138).' },
          { type: 'box', kind: 'atencao', text: '**Litisconsórcio facultativo unitário existe** — ex.: condôminos em ação reivindicatória. Cuidado: muita gente confunde "facultativo" com "simples" e "necessário" com "unitário" — são duas dimensões INDEPENDENTES.' },
          { type: 'box', kind: 'atencao', text: '**IDPJ não é "automático":** sempre exige instauração formal (não basta requerer na petição inicial, salvo se já desde lá já se demanda contra o sócio também — art. 134 §2º). Suspende o processo. Decisão = agravo de instrumento.' },
          { type: 'box', kind: 'atencao', text: '**Amicus curiae não recorre como regra (art. 138 §1º).** Exceções: decisão de admissão (rejeitada) e IRDR/IAC. Banca cobra essa pegadinha sempre.' },
          { type: 'box', kind: 'atencao', text: '**Curador especial (art. 72):** réu preso revel, citado por edital ou hora certa revel, ou incapaz sem representante. Função institucional da DEFENSORIA PÚBLICA — pode contestar por negativa geral (art. 341 §único). NÃO confundir com curador da curatela civil (CC art. 1.767).' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 3 (jurisdição/ação):** capacidade processual e legitimidade ad causam discutidas aqui são pressupostos processuais — sua ausência leva à extinção sem mérito (art. 485 IV e VI).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP/Adv. Pública/Defensoria):** o curador especial é função da DP. O MP é parte ou fiscal. Estude em conjunto.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum) e 16 (recursos):** intervenções afetam estrutura recursal — quem pode recorrer? Assistente simples segue o assistido; litisconsorcial recorre por si; amicus, em regra, não.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 15 (execução):** IDPJ e fraude à execução são institutos distintos — IDPJ é incidente cognitivo; fraude à execução é vício do ato dispositivo (arts. 792-794). Súmula 375/STJ exige inscrição/registro da penhora ou má-fé do terceiro.' }
        ]
      }
    ]
  },
  {
    id: '05-MP-advocacia-publica-defensoria',
    num: 5,
    title: 'MP, Advocacia Pública e Defensoria',
    edital: '3.2.5',
    editalText: 'Ministério Público, Advocacia Pública e Defensoria Pública.',
    size: 'Pequeno-médio (3-4 dias úteis)',
    schedule: 'Mês 1, Semana 4',
    advantage: 'Vantagem GRANDE — vivência institucional',
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O CPC trata em capítulo próprio (arts. 176-188) das **funções essenciais à Justiça**: Ministério Público, Advocacia Pública e Defensoria Pública. A Constituição as eleva a status de funções autônomas, equidistantes do Judiciário (CF arts. 127-135). No processo civil, cada uma cumpre papel diferenciado e merece estudo conjunto — caem juntas em prova e tratam-se de **vantagem clara para a candidata** (vivência institucional como Analista MPMG).' },
          { type: 'p', text: '**Ministério Público — duas vestes processuais:**' },
          { type: 'list', items: [
            '**Parte (autor)** — quando ajuíza ações em defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis (CF art. 127). Ex.: ACP, ação de improbidade, ações de família com legitimação extraordinária',
            '**Fiscal da ordem jurídica (custos iuris/legis)** — quando intervém em processo movido por terceiros para velar pela correta aplicação do direito (CPC art. 178)'
          ]},
          { type: 'p', text: 'A intervenção como fiscal é **obrigatória** nas hipóteses do art. 178 e gera nulidade quando faltar — embora condicionada ao princípio do prejuízo (Súmula 523/STF analógica; STJ Tema 1.075).' },
          { type: 'p', text: '**Advocacia Pública** (CF arts. 131-132): representa judicial e extrajudicialmente a União (AGU), Estados (PGE), DF (PGDF) e Municípios (PGM). É função **DE ESTADO**, não de governo. Tem prazos em dobro (art. 183), intimação pessoal e prerrogativas próprias.' },
          { type: 'p', text: '**Defensoria Pública** (CF art. 134, com EC 80/14): instituição permanente, essencial à Justiça, expressão e instrumento do regime democrático, voltada à orientação jurídica, promoção dos direitos humanos e defesa, em todos os graus, judicial e extrajudicial, dos direitos individuais e coletivos dos NECESSITADOS. Tem autonomia funcional, administrativa e iniciativa orçamentária. Atua, ainda, como **curador especial** (CPC art. 72).' },
          {
            type: 'table',
            headers: ['Instituição', 'Posição constitucional', 'Funções típicas no processo civil', 'Prazo'],
            rows: [
              ['MP', 'Função essencial à Justiça (CF arts. 127-130)', 'Parte (ACP, improbidade, família) + fiscal (art. 178)', 'Em dobro (art. 180)'],
              ['Advocacia Pública', 'Função essencial (CF arts. 131-132)', 'Representação da Fazenda Pública', 'Em dobro (art. 183)'],
              ['Defensoria', 'Função essencial (CF art. 134)', 'Defesa do necessitado + curador especial + tutelas coletivas', 'Em dobro (art. 186)']
            ]
          }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'CPC' },
          { type: 'list', items: [
            '**Arts. 176-181** — Ministério Público',
            '**Art. 178** — hipóteses de intervenção como fiscal (rol)',
            '**Art. 180** — prazo do MP em dobro (todas as manifestações; conta da intimação pessoal)',
            '**Arts. 182-184** — Advocacia Pública',
            '**Art. 183** — prazo da Fazenda em dobro',
            '**Arts. 185-187** — Defensoria Pública',
            '**Art. 186** — prazo da DP em dobro',
            '**Art. 72** — curador especial pela Defensoria Pública'
          ]},
          { type: 'h', text: 'Constituição' },
          { type: 'list', items: [
            '**Arts. 127-130-A** — Ministério Público',
            '**Art. 129** — funções institucionais do MP (rol exemplificativo)',
            '**Arts. 131-132** — Advocacia Pública',
            '**Art. 134** — Defensoria Pública (após EC 80/14)',
            '**Art. 135** — vedação à acumulação de funções'
          ]},
          { type: 'h', text: 'Legislação institucional' },
          { type: 'list', items: [
            '**LC 75/93** — Lei Orgânica do MPU (e fonte interpretativa para os MPs estaduais)',
            '**Lei 8.625/93** — Lei Orgânica Nacional do MP (LONMP)',
            '**LC 34/94 (MG)** — Lei Orgânica do MP/MG',
            '**LC 80/94** — Lei Orgânica Nacional da Defensoria',
            '**LC 73/93** — Lei Orgânica da AGU',
            '**Lei 7.347/85** — LACP (legitimidade do MP, DP, AP, entes federativos, associações)'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Hipóteses de intervenção do MP como fiscal (CPC art. 178)' },
          { type: 'p', text: 'Rol exemplificativo (a doutrina diverge — para parte é taxativo). Hipóteses expressas:' },
          { type: 'list', items: [
            '**I — interesse público ou social** (cláusula aberta, exige fundamentação concreta — não basta o ente público estar no polo)',
            '**II — interesse de incapaz** (criança/adolescente, idoso vulnerável, PCD em situação específica)',
            '**III — litígios coletivos pela posse de terra rural ou urbana** (matéria sensível para o MP)'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 189:** "É desnecessária a intervenção do MP nas execuções fiscais." Reforça leitura RESTRITIVA de "interesse público" — não basta a Fazenda figurar como exequente.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 99:** "O MP tem legitimidade para recorrer no processo em que oficiou como fiscal da lei, ainda que não haja recurso da parte."' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 226:** "O MP tem legitimidade para a ACP em defesa de direitos individuais homogêneos, ainda que disponíveis." Marco da legitimação ampla do MP em tutelas coletivas.' },

          { type: 'h', text: 'Intimação pessoal e prazo em dobro' },
          { type: 'p', text: '**Pontos comuns às três instituições:** intimação **pessoal** (com vista dos autos, físico ou eletrônico) + prazo em **DOBRO** (não em quádruplo — banca tenta confundir). Conta-se da entrega dos autos com vista (carga ou abertura no PJe).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.075 (REsp 1.696.396):** a intimação eletrônica do MP por meio do sistema do tribunal supre a intimação pessoal exigida por lei, desde que cadastrado adequadamente. Reflexo do processo eletrônico (Lei 11.419/06).' },

          { type: 'h', text: 'Nulidade pela falta de intimação do MP' },
          { type: 'p', text: 'A ausência de intimação do MP nas hipóteses do art. 178 gera **nulidade absoluta** — mas, conforme princípio do prejuízo (*pas de nullité sans grief*), a doutrina e a jurisprudência exigem demonstração de prejuízo concreto à parte tutelada (interesse de incapaz, p. ex.). O CPC/15 expressamente acolheu essa orientação no art. 279 §2º.' },

          { type: 'h', text: 'Curador especial (CPC art. 72)' },
          { type: 'p', text: 'Função INSTITUCIONAL da DEFENSORIA PÚBLICA. Hipóteses:' },
          { type: 'list', items: [
            'Réu **preso revel** (não constituiu advogado)',
            'Réu **citado por edital** que ficar revel',
            'Réu **citado com hora certa** que ficar revel',
            '**Incapaz sem representante** ou cujos interesses colidirem com os do representante'
          ]},
          { type: 'p', text: 'O curador especial **defende exclusivamente o réu** (não o autor); pode contestar por **negativa geral** (art. 341 §único) — única exceção à regra do ônus da impugnação específica. NÃO se confunde com curador da curatela civil (CC arts. 1.767+).' },

          { type: 'h', text: 'Advocacia Pública e suas prerrogativas' },
          { type: 'p', text: 'Além do prazo em dobro e intimação pessoal, a Fazenda Pública goza de: (i) **remessa necessária** quando vencida acima dos limites do art. 496 (a sentença só transita após confirmação pelo tribunal); (ii) **dispensa de adiantar custas** em ações próprias (mas paga ao final se vencida); (iii) **execução por precatório** (CF art. 100); (iv) presunção de legitimidade dos atos administrativos.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Tema 884 (RE 631.658) e ADI 5.107:** a Defensoria Pública estadual tem legitimidade ativa para ACP, mesmo em defesa de hipossuficientes em sentido amplo (não apenas econômicos). Ampliou o conceito de "necessitado".' },

          { type: 'h', text: 'Defensoria Pública e legitimação coletiva' },
          { type: 'p', text: 'A DP tem legitimidade para tutelas coletivas (LACP art. 5º; LC 80/94 art. 4º X). Exige-se **pertinência temática** com os hipossuficientes — conceito ampliado pelo STF para abranger não só os economicamente necessitados, mas também grupos vulneráveis em sentido organizacional, jurídico ou existencial.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Hipóteses do art. 178 — "PIM":** **P**úblico/social (interesse), **I**ncapaz, **M**ovimentos coletivos pela terra (rural ou urbana).' },
          { type: 'box', kind: 'macete', text: '**Funções essenciais à Justiça (CF) — "MAD":** **M**inistério Público, **A**dvocacia (pública e privada), **D**efensoria. Não confundir com órgãos do Judiciário — equidistantes.' },
          { type: 'box', kind: 'macete', text: '**Curador especial — 4 hipóteses "PEHIN" (art. 72):** **P**reso revel, **E**dital revel, **H**ora certa revel, **IN**capaz sem representante. Função da DEFENSORIA PÚBLICA.' },
          { type: 'box', kind: 'macete', text: '**Prazos em dobro nas funções essenciais:** todas em DOBRO, nunca em QUÁDRUPLO. Conta-se da intimação pessoal. MP (art. 180), Adv. Pública (art. 183), Defensoria (art. 186).' },
          { type: 'box', kind: 'macete', text: '**Distinção das 3 funções essenciais:** MP **defende o sistema** (ordem jurídica + indisponíveis); Adv. Pública **defende o ente público**; Defensoria **defende o necessitado**.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**MP em execuções fiscais:** Súmula 189/STJ é firme — DESNECESSÁRIA a intervenção. "Interesse público" do art. 178 NÃO se identifica com a presença da Fazenda.' },
          { type: 'box', kind: 'atencao', text: '**Prazo em dobro — não cumulativo.** Erro frequente: somar dobra do MP (art. 180) com dobra do litisconsorte com advogados diferentes (art. 229). NÃO somam — prevalece o regime mais favorável (art. 229 §2º exclui o MP). Pegadinha clássica.' },
          { type: 'box', kind: 'atencao', text: '**Curador especial × curatela civil:** o curador especial é INSTITUTO PROCESSUAL (Defensoria, em casos de revelia ou incapaz sem representante). A curatela civil é instituto material (CC arts. 1.767+), com nomeação pelo juiz da família/sucessões.' },
          { type: 'box', kind: 'atencao', text: '**Defensoria Pública é função do ESTADO, não do governo.** Tem autonomia funcional, administrativa e financeira (CF art. 134 §2º). Vedação à submissão hierárquica ao Poder Executivo.' },
          { type: 'box', kind: 'atencao', text: '**MP recorre como fiscal? SIM** (Súmula 99/STJ). Mesmo se a parte não recorrer. Cuidado com a banca que tenta colocar o MP em situação de inércia.' },
          { type: 'box', kind: 'atencao', text: '**Custas e a Fazenda Pública:** dispensada de adiantar (não isenta — paga ao final se vencida). Confundir "dispensa" com "isenção" é erro clássico.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 2 (DH e processo):** o MP é o guardião natural dos direitos humanos no plano interno (CF art. 129 II e III); estuda-se DH no MP integrando direito processual internacional.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 4 (partes e intervenção):** o curador especial é função da DP, exercida nas hipóteses do art. 72; o IDPJ pode ser instaurado a pedido do MP.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 8 (atos processuais):** intimação pessoal e prazos em dobro do MP/DP/AP integram o regime de prazos.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 19 (MS) e 20 (ACP):** legitimação coletiva ampla do MP é o "pão com manteiga" da carreira. ACP e MS coletivo são instrumentos cotidianos. **Vantagem ENORME para a candidata.**' }
        ]
      }
    ]
  },
  {
    id: '06-competencia',
    num: 6,
    title: 'Competência e cooperação nacional',
    edital: '3.2.6',
    editalText: 'Competência. Modificações da competência. Incompetência. Cooperação nacional.',
    size: 'Médio-grande (5-7 dias úteis)',
    schedule: 'Mês 2, Semana 1',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Critérios determinativos: matéria, pessoa, função, valor, território (mnemônico: MP-FVT)',
        'Competência absoluta (matéria, pessoa, função): cognoscível de ofício, gera nulidade absoluta',
        'Competência relativa (valor, território): só por arguição da parte (Súmula 33/STJ), prorroga-se',
        'Conexão (CPC art. 55) e continência (art. 56) — modificam competência relativa',
        'Foros especiais: consumidor (CDC art. 101), idoso (Estatuto), ACP (Lei 7.347 art. 2º)',
        'Cooperação nacional (CPC arts. 67-69) — auxílio direto entre juízos, sem carta precatória'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 42-69 (competência)',
        'CPC art. 337 II (incompetência como preliminar de contestação)',
        'CF/88 arts. 102, 105, 108, 109'
      ]},
      { h: 'Súmulas e jurisprudência', items: [
        'Súmula 33/STJ — incompetência relativa não pode ser declarada de ofício',
        'Súmula 235/STJ — conexão não determina reunião dos processos se um já foi julgado',
        'Súmula 489/STJ — competência da JF se ente federal manifesta interesse'
      ]},
      { h: 'Pegadinhas', items: [
        'Translatio iudicii: aproveitamento dos atos do juízo incompetente',
        'Cláusula de eleição de foro abusiva — CPC art. 63 §3º',
        'Foro de contrato consumerista: domicílio do consumidor'
      ]}
    ]
  },
  {
    id: '07-juiz-impedimento-suspeicao',
    num: 7,
    title: 'Juiz, impedimento, suspeição, auxiliares',
    edital: '3.2.7',
    editalText: 'Juiz: poderes, deveres e sua responsabilidade. Impedimento e suspeição. Auxiliares da justiça.',
    size: 'Pequeno-médio (3-4 dias úteis)',
    schedule: 'Mês 2, Semana 2',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Poderes do juiz no CPC: impulso oficial, gestão da prova, conciliação, atipicidade dos meios executivos (art. 139 IV)',
        'Deveres (CPC art. 139 — rol exemplificativo)',
        'Responsabilidade civil do juiz (CPC art. 143): dolo ou fraude; recusa, omissão ou retardamento sem justo motivo',
        'Impedimento (rol taxativo, CPC art. 144): ex parente, advogou, etc. — gera nulidade absoluta sem prazo',
        'Suspeição (rol exemplificativo, CPC art. 145): amigo íntimo, inimigo, credor, recebeu presentes — arguida em 15 dias',
        'Auxiliares da justiça: escrivão, oficial de justiça, perito, depositário, intérprete, conciliador, mediador'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 139-148 (juiz); 149-175 (auxiliares)',
        'LOMAN (LC 35/79)'
      ]},
      { h: 'Pontos clássicos', items: [
        'Impedimento: nulidade absoluta, atemporal — pode ensejar ação rescisória',
        'Suspeição: prazo de 15 dias para arguir, sob pena de preclusão',
        'Independência funcional × poder de gestão processual'
      ]}
    ]
  },
  {
    id: '08-atos-processuais-prazos-nulidades',
    num: 8,
    title: 'Atos processuais, prazos, comunicações, nulidades',
    edital: '3.2.8',
    editalText: 'Atos processuais. Forma, tempo e lugar. Prazos. Comunicações dos atos processuais. Nulidades. Distribuição e registro. Valor da causa.',
    size: 'Grande (6-8 dias úteis) — clássico de prova',
    schedule: 'Mês 2, Semana 3',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Forma livre × forma especial; instrumentalidade das formas (CPC art. 188)',
        'Prazos: legais/judiciais; dilatórios/peremptórios; contagem em dias úteis (CPC art. 219); férias forenses (20/12 a 20/01)',
        'Suspensão (não corre, retoma) × interrupção (zera, recomeça) de prazos',
        'Comunicações: citação (postal regra geral, pessoal, edital, hora certa), intimação (eletrônica regra)',
        'Nulidades: princípio do prejuízo (pas de nullité sans grief), instrumentalidade, sanabilidade',
        'Distribuição: livre, dependência, prevenção (CPC art. 286)',
        'Valor da causa: critérios legais (CPC art. 292), impugnação na contestação'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 188-275 (atos processuais)',
        'Lei 11.419/06 (processo eletrônico)'
      ]},
      { h: 'Pegadinhas frequentes', items: [
        'Citação em sábado/domingo/feriado: regra geral permite; execução proíbe (CPC art. 244)',
        'Prazo MP/DP/AGU/PGM em dobro — não acumula (não é em "quádruplo")',
        '"Vista" (oferecida) × "intimação" (atual)',
        'Princípios das nulidades: causalidade (consequência), instrumentalidade (forma serve à substância), prejuízo'
      ]},
      { h: 'Súmulas relevantes', items: [
        'Súmula 414/STJ — citação por edital após esgotadas tentativas',
        'Súmula 240/STJ — extinção pela inércia depende de provocação do réu'
      ]}
    ]
  },
  {
    id: '09-tutela-provisoria',
    num: 9,
    title: 'Tutela provisória (urgência e evidência)',
    edital: '3.2.9',
    editalText: 'Tutela provisória: tutela de urgência e tutela da evidência.',
    size: 'Médio (4-5 dias úteis)',
    schedule: 'Mês 2, Semana 4',
    advantage: 'Vantagem GRANDE — vê tutelas no MP',
    sections: [
      { h: 'Foco central', items: [
        'Gênero TUTELA PROVISÓRIA → espécies: URGÊNCIA (cautelar e antecipada) e EVIDÊNCIA',
        'Tutela antecipada antecedente × incidental (CPC arts. 303-304)',
        'Estabilização da tutela antecipada antecedente (CPC art. 304): se não impugnada por agravo, torna-se estável e o processo é extinto',
        'Requisitos urgência: probabilidade do direito + perigo de dano OU risco ao resultado útil',
        'Tutela de evidência (CPC art. 311) — rol TAXATIVO, dispensa perigo: I) abuso; II) tese firmada em julgamento de casos repetitivos ou SV; III) prova documental + súmula vinculante; IV) inicial documental e fato evidente',
        'Fungibilidade entre cautelar e antecipada (CPC art. 305 §único)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 294-311'
      ]},
      { h: 'Jurisprudência crítica', items: [
        'STJ Tema 1099 — estabilização da tutela antecipada antecedente: enquanto não decair em 2 anos (art. 304 §5º), pode ser revista',
        'Recurso cabível: agravo de instrumento (CPC art. 1015 I)',
        'Diferenças cautelar atípica × típica'
      ]},
      { h: 'Pegadinhas', items: [
        'Tutela de evidência NÃO tem requisito de perigo',
        'Estabilização: discute-se se gera coisa julgada material — STJ tende a NÃO',
        'Fungibilidade tem limite: não vale entre tutela e ações autônomas'
      ]}
    ]
  },
  {
    id: '10-formacao-suspensao-extincao',
    num: 10,
    title: 'Formação, suspensão e extinção do processo',
    edital: '3.2.10',
    editalText: 'Formação, suspensão e extinção do processo.',
    size: 'Pequeno-médio (3-4 dias úteis)',
    schedule: 'Mês 3, Semana 1',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Formação: propositura pela distribuição/despacho (CPC art. 312); efeitos da litispendência só com citação válida',
        'Hipóteses de suspensão (CPC art. 313): morte/incapacidade da parte, convenção, prejudicial externa, etc.',
        'Extinção sem resolução do mérito (CPC art. 485) × com resolução (art. 487)',
        'Sentenças do art. 487: I) acolhe/rejeita pedido; II) decadência ou prescrição; III) homologação de transação/renúncia/reconhecimento',
        'Perempção, litispendência e coisa julgada — defesas processuais peremptórias (CPC art. 337)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 312-317; 313-315; 485-487'
      ]},
      { h: 'Pontos críticos', items: [
        'Extinção por abandono unilateral (485 III): só após intimação pessoal em 5 dias',
        'Súmula 240/STJ — extinção por abandono depende de pedido do réu',
        'Perda do objeto × perda superveniente do interesse'
      ]}
    ]
  },
  {
    id: '11-procedimento-comum',
    num: 11,
    title: 'Procedimento comum (peça inicial → coisa julgada)',
    edital: '3.2.11',
    editalText: 'Procedimento comum. Petição inicial. Improcedência liminar do pedido. Audiência de conciliação ou de mediação. Contestação e reconvenção. Revelia. Providências preliminares e saneamento. Julgamento conforme o estado do processo. Audiência de instrução e julgamento. Teorias da verdade e processo. Provas: disposições gerais e provas em espécie. Direito à prova, dever de prova e regras de privilégio. Sentença. Qualidade da decisão jurídica e consequencialismo. Tutela de direitos e tutela específica. Remessa necessária. Coisa julgada. Relativização. Coletivização da coisa julgada. Processo estrutural e processo civil. Liquidação de sentença (individual e coletiva).',
    size: 'GIGANTE — 14+ dias úteis (Mês 3 inteiro)',
    schedule: 'Mês 3',
    advantage: 'Coisa julgada coletiva e ACP = vivência da candidata',
    sections: [
      { h: 'Estratégia', items: [
        'Tópico massivo. Quebrar em sub-temas: petição inicial, audiência, contestação/reconvenção, revelia, saneamento, AIJ, provas, sentença, coisa julgada, processo estrutural, liquidação.',
        'Fazer questão a cada sub-tema; revisar acumulado a cada semana'
      ]},
      { h: 'Petição inicial e improcedência liminar', items: [
        'Requisitos da PI (CPC art. 319) — endereçamento, partes, fatos, fundamentos, pedido, valor, provas, opção por audiência',
        'Improcedência liminar (CPC art. 332): contraria SV, RE/REsp repetitivo, IRDR, IAC, súmula STF/STJ; ou consumação de prescrição/decadência',
        'Emenda da PI (15 dias) antes do indeferimento'
      ]},
      { h: 'Audiência de conciliação/mediação, contestação e reconvenção', items: [
        'Audiência obrigatória se ambas as partes aceitarem (CPC art. 334)',
        'Não comparecimento injustificado: ato atentatório (multa de até 2% do valor da causa)',
        'Contestação em 15 dias (CPC art. 335) — concentração das defesas (337)',
        'Reconvenção: na própria contestação (não mais peça autônoma)',
        'Revelia: presunção de veracidade dos fatos (337 §1º), com mitigações'
      ]},
      { h: 'Saneamento, AIJ e provas', items: [
        'Saneamento (CPC art. 357): fixa pontos controvertidos, distribuição do ônus da prova, agenda AIJ',
        'Distribuição dinâmica do ônus da prova (357 §5º)',
        'AIJ: alegações finais por escrito (memoriais) ou oralmente',
        'Provas em espécie: depoimento pessoal, testemunhas, documental, pericial, inspeção judicial'
      ]},
      { h: 'Sentença e consequencialismo', items: [
        'Requisitos da sentença (489) — fundamentação concreta',
        'CPC art. 489 §1º — fundamentação inadequada (5 hipóteses)',
        'Consequencialismo (LINDB arts. 20-21) — decisão em sede pública deve considerar consequências práticas'
      ]},
      { h: 'Coisa julgada', items: [
        'Coisa julgada formal (no processo) × material (fora do processo)',
        'Limites objetivos (parte dispositiva); subjetivos (partes)',
        'Coisa julgada coletiva secundum eventum litis (CDC art. 103) e secundum eventum probationis (ação popular)',
        'Relativização da coisa julgada — debate; STF cauteloso (RE 730.462)',
        'Processo estrutural: tutelas de implementação de políticas públicas'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 318-512 (Procedimento Comum + Sentença + Coisa julgada)',
        'CDC art. 103 (coisa julgada coletiva)',
        'LINDB arts. 20-21 (consequencialismo)'
      ]}
    ]
  },
  {
    id: '12-cumprimento-de-sentenca',
    num: 12,
    title: 'Cumprimento de sentença',
    edital: '3.2.12',
    editalText: 'Cumprimento de sentença: disposições gerais, procedimentos em espécie e defesas do executado.',
    size: 'Médio-grande (5-7 dias úteis)',
    schedule: 'Mês 4, Semana 1',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Cumprimento provisório × definitivo (CPC arts. 520-522)',
        'Espécies: pagar quantia (513-527), fazer/não-fazer (536-538), entregar coisa (538), alimentos (528-533)',
        'Cumprimento contra Fazenda Pública: precatórios (Constituição art. 100) e RPV',
        'Multa do art. 523 §1º: 10% se não pagar em 15 dias após intimação para pagamento; honorários de 10% também',
        'Defesas: impugnação ao cumprimento de sentença (CPC art. 525) — rol TAXATIVO',
        'Multa coercitiva (astreintes) e meios atípicos (CPC art. 139 IV — Tema 1010 STJ)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 513-538'
      ]},
      { h: 'Jurisprudência crítica', items: [
        'STJ Tema 962 — multa do art. 523: incide a partir do término do prazo, mesmo sem intimação pessoal',
        'STF — precatórios EC 113/21 — atualização e taxa SELIC',
        'STJ Tema 1010 — atipicidade dos meios executivos (CNH, passaporte, cartão de crédito) — limitada por proporcionalidade'
      ]},
      { h: 'Pegadinhas', items: [
        'Diferença entre cumprimento (título judicial) × execução autônoma (extrajudicial)',
        'Excesso de execução: arguição com memória discriminada (525 §4º) sob pena de não conhecimento',
        'Multa coercitiva pode ser modificada pelo juiz a qualquer tempo'
      ]}
    ]
  },
  {
    id: '13-procedimentos-especiais',
    num: 13,
    title: 'Procedimentos especiais de jurisdição contenciosa',
    edital: '3.2.13',
    editalText: 'Procedimentos especiais de jurisdição contenciosa: todos os procedimentos.',
    size: 'Grande (7-10 dias úteis)',
    schedule: 'Mês 4, Semanas 1-2',
    advantage: null,
    sections: [
      { h: 'Procedimentos específicos do CPC', items: [
        'Ação de consignação em pagamento (CPC arts. 539-549)',
        'Ação de exigir contas (550-553)',
        'Ações possessórias: manutenção, reintegração, interdito proibitório (554-568)',
        'Ação de divisão e demarcação (569-598)',
        'Ações de família (693-699) — peculiaridades: tentativa obrigatória de mediação',
        'Ação monitória (700-702): documento sem eficácia executiva',
        'Embargos de terceiro (674-681)',
        'Habilitação (687-692)',
        'Restauração de autos (712-718)',
        'Oposição (682-686): forma incidental no CPC'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 539-770'
      ]},
      { h: 'Pontos clássicos de prova', items: [
        'Possessória: força nova (até 1 ano e 1 dia) × velha (após esse prazo)',
        'Súmula 384/STJ — monitória: liquidez não exigida',
        'Súmula 339/STJ — cabimento de monitória contra Fazenda Pública',
        'Ações de família — mediação obrigatória, sigilo de audiências'
      ]},
      { h: 'Estratégia de estudo', items: [
        'Quadro comparativo: rito × prazo × peculiaridades × cabimento',
        'Para cada procedimento, identificar 2 perguntas que provavelmente caem'
      ]}
    ]
  },
  {
    id: '14-jurisdicao-voluntaria',
    num: 14,
    title: 'Jurisdição voluntária',
    edital: '3.2.14',
    editalText: 'Procedimentos de jurisdição voluntária: disposições gerais e todos os procedimentos em espécie.',
    size: 'Médio (4-5 dias úteis)',
    schedule: 'Mês 4, Semana 2',
    advantage: 'Fundações e curatela são áreas conhecidas',
    sections: [
      { h: 'Foco central', items: [
        'Natureza: jurisdicional (corrente moderna, STJ) × administrativa (clássica)',
        'Características: princípio inquisitorial (juiz tem amplos poderes), MP intervém em casos específicos, sentença sem coisa julgada material (em tese)',
        'Procedimentos: emancipação (725 I), interdição/curatela, organização e fiscalização das fundações, herança jacente, bens de ausentes, alienação judicial'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 719-770',
        'Resolução 35/2007 do CNJ — separação/divórcio extrajudicial',
        'Lei 13.146/2015 (Estatuto da Pessoa com Deficiência) — repercussões na curatela'
      ]},
      { h: 'Pontos clássicos', items: [
        'Coisa julgada formal × material (em jurisdição voluntária só formal — discutível)',
        'Tomada de decisão apoiada (apoio menos invasivo que curatela)',
        'Curatela limitada apenas a atos patrimoniais (após Estatuto da PCD)',
        'Fundações: MP fiscaliza estatuto, contas e atividade'
      ]}
    ]
  },
  {
    id: '15-execucao',
    num: 15,
    title: 'Processo de execução',
    edital: '3.2.15',
    editalText: 'Processo de execução: execução em geral, diversas espécies de execução, embargos à execução e outras formas de defesa, suspensão e extinção do processo de execução.',
    size: 'Grande (7-9 dias úteis)',
    schedule: 'Mês 4, Semana 3',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Execução por título extrajudicial (CPC art. 784): cheque, nota promissória, contratos garantidos por hipoteca, etc.',
        'Espécies: pagar quantia (824-909), entregar coisa (806-823), fazer/não-fazer (814-823), alimentos (911-913), contra Fazenda (910)',
        'Penhora: ordem do CPC art. 835 (dinheiro primeiro), bens impenhoráveis (833)',
        'Defesas: embargos à execução (CPC art. 914 — autônoma, com garantia) × exceção de pré-executividade (atípica, sem garantia, matéria conhecível de ofício — Súmula 393/STJ)',
        'Fraude à execução (CPC art. 792) × fraude contra credores (CC art. 158-165)',
        'Suspensão e extinção da execução (CPC arts. 921-925)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 771-925',
        'Lei 6.830/80 (execução fiscal — comparação)'
      ]},
      { h: 'Súmulas STJ críticas', items: [
        'Súmula 393 — exceção de pré-executividade cabe quando não exigir dilação probatória',
        'Súmula 394 — impenhorabilidade do salário (mitigada para alimentos e quantias acima de 50 SM)',
        'Súmula 375 — fraude à execução exige inscrição da penhora ou má-fé do terceiro',
        'Súmula 581/STJ — exclusão de fiador que não pactuou prorrogação'
      ]},
      { h: 'Pontos polêmicos', items: [
        'Penhora online (BacenJud/SISBAJUD) — automática',
        'Atipicidade dos meios (Tema 1010): CNH, passaporte, cartão — só com proporcionalidade demonstrada',
        'Suspensão da execução por ausência de bens (921 III) — prazo de 1 ano + prescrição intercorrente'
      ]}
    ]
  },
  {
    id: '16-tribunais-recursos',
    num: 16,
    title: 'Tribunais, recursos, precedentes, IRDR',
    edital: '3.2.16',
    editalText: 'Processos nos tribunais e os meios de impugnação das decisões judiciais: ordem dos processos, processos e incidentes de competência originária. Recursos: disposições gerais e recursos em espécie. Precedentes e processo argumentativo. Incidentes. Incidente de resolução de demanda repetitiva.',
    size: 'GIGANTE — 10-12 dias úteis',
    schedule: 'Mês 4, Semana 4 + transbordo',
    advantage: null,
    sections: [
      { h: 'Recursos no CPC', items: [
        'Apelação (1009-1014): prazo 15 dias, efeito suspensivo regra; juízo de retratação só em hipóteses específicas',
        'Agravo de instrumento (1015-1020): rol TAXATIVO MITIGADO (Tema 988/STJ — admite por interpretação extensiva quando há urgência)',
        'Agravo interno (1021)',
        'Embargos de declaração (1022-1026): obscuridade, contradição, omissão, erro material',
        'Recurso ordinário (1027-1028)',
        'RE (CF art. 102 III) e REsp (CF art. 105 III)',
        'Embargos de divergência (1043-1044)',
        'Agravo em RE/REsp (1042)'
      ]},
      { h: 'Sistema de precedentes', items: [
        'Categorias (CPC art. 927): I) decisões STF em controle concentrado; II) súmulas vinculantes; III) acórdãos em IAC, IRDR, REs/REsps repetitivos; IV) súmulas STF (constitucional) e STJ (federal); V) orientação do plenário/órgão especial',
        'Ratio decidendi (vinculante) × obiter dictum (não vinculante)',
        'Distinguishing e overruling (CPC art. 489 §1º V e VI)',
        'IRDR (CPC arts. 976-987): pressupostos, suspensão, eficácia',
        'Repercussão geral no RE; relevância no REsp (EC 125/2022)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 926-1044',
        'CF/88 arts. 102 (STF), 105 (STJ)'
      ]},
      { h: 'Jurisprudência crítica', items: [
        'STJ Tema 988 — taxatividade mitigada do art. 1015',
        'STF — modulação de efeitos em mudança de jurisprudência',
        'Súmula 7/STJ — incompatibilidade de REsp com reexame de prova',
        'Súmula 280/STF — incompatibilidade de RE com matéria local'
      ]},
      { h: 'Pegadinhas', items: [
        'Prazo recursal: 15 dias (regra) × 5 dias (embargos de declaração)',
        'Sucumbência recursal (CPC art. 85 §11) — majoração na ED ou apelação parcialmente provida',
        'Princípio da fungibilidade: erro razoável + tempestividade do recurso correto'
      ]}
    ]
  },
  {
    id: '17-assistencia-judiciaria',
    num: 17,
    title: 'Assistência judiciária',
    edital: '3.2.17',
    editalText: 'Assistência judiciária.',
    size: 'Pequeno (3 dias úteis)',
    schedule: 'Mês 5, Semana 1',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Distinção: gratuidade da justiça (não pagar custas) × assistência judiciária (advogado pago pelo Estado) × assistência jurídica (orientação jurídica integral pela Defensoria)',
        'Concessão (CPC art. 99): presunção de hipossuficiência da pessoa natural; PJ deve provar (Súmula 481/STJ)',
        'Revogação a qualquer tempo se demonstrada capacidade financeira (art. 100)',
        'Beneficiário pode ser condenado em sucumbência, mas exigibilidade fica suspensa por 5 anos (art. 98 §3º)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 98-102',
        'Lei 1.060/50 (no que não foi revogado pelo CPC)',
        'LC 80/94 (Defensoria Pública)'
      ]},
      { h: 'Pontos clássicos', items: [
        'Súmula 481/STJ — PJ pode ser beneficiária se demonstrar incapacidade financeira',
        'Requerimento da gratuidade pode ser feito a qualquer tempo (na inicial, contestação, recurso)',
        'Impugnação à gratuidade: incidente em apartado (CPC art. 100)'
      ]}
    ]
  },
  {
    id: '18-juizados-especiais',
    num: 18,
    title: 'Juizados Especiais Cíveis e da Fazenda',
    edital: '3.2.18',
    editalText: 'Juizados Especiais Cíveis e da Fazenda Pública.',
    size: 'Médio (4-5 dias úteis)',
    schedule: 'Mês 5, Semana 1-2',
    advantage: null,
    sections: [
      { h: 'Foco central', items: [
        'Princípios: oralidade, simplicidade, informalidade, economia processual, celeridade',
        'JEC (Lei 9.099/95): competência por valor (até 40 SM), por matéria (rol específico — art. 3º), por opção; pessoa natural autora (PJ só ME/EIRELI)',
        'JEF (Lei 10.259/01) — competência federal até 60 SM',
        'JEFP (Lei 12.153/09) — Estados/DF/Municípios; até 60 SM; quem demanda contra ente público',
        'Procedimento: demanda oral, AIJ una, sentença líquida',
        'Recursos: turma recursal, embargos de declaração, RE (com repercussão geral) — não cabe REsp (Súmula 203/STJ)',
        'Execução nos juizados (Lei 9.099 arts. 52-53)'
      ]},
      { h: 'Lei seca primária', items: [
        'Lei 9.099/95 (JEC)',
        'Lei 10.259/01 (JEF)',
        'Lei 12.153/09 (JEFP)'
      ]},
      { h: 'Súmulas críticas', items: [
        'Súmula 203/STJ — não cabe REsp em juizados',
        'Súmula 640/STJ — cabe ED no JEC contra acórdão da turma',
        'Súmula 8/TNU — cabe MS contra ato de juiz no JEC'
      ]},
      { h: 'Pegadinhas', items: [
        'Não cabe ação de consignação genérica nem ação de despejo no JEC',
        'Restrição de valor — soma com pedidos cumulados',
        'Pessoa jurídica como autora — só microempresa, EPP e MEI',
        'Defensoria pode atuar nos juizados'
      ]}
    ]
  },
  {
    id: '19-MS-MI-individual-coletivo',
    num: 19,
    title: 'Mandado de Segurança e de Injunção',
    edital: '3.2.19',
    editalText: 'Mandado de segurança (individual e coletivo). Mandado de Injunção.',
    size: 'Médio-grande (5-6 dias úteis)',
    schedule: 'Mês 5, Semana 2',
    advantage: 'MS coletivo é instrumento do MP — vantagem',
    sections: [
      { h: 'Mandado de Segurança', items: [
        'Pressupostos: direito líquido e certo + ato de autoridade + ilegalidade ou abuso de poder',
        'Direito líquido e certo = comprovado documentalmente, sem dilação probatória',
        'Prazo decadencial: 120 dias (Lei 12.016/09 art. 23) da ciência do ato',
        'MS contra ato judicial: excepcional (Súmula 267/STF) — só se houver decisão teratológica e não couber recurso com efeito suspensivo',
        'MS coletivo (CF/88 art. 5º LXX, Lei 12.016 arts. 21-22): partido com representação no CN; sindicato; entidade de classe; associação (>1 ano em atividade)',
        'Liminar: requisitos (relevância do fundamento + ineficácia da ordem se for concedida só ao final)'
      ]},
      { h: 'Mandado de Injunção', items: [
        'Lei 13.300/2016 — disciplina processual',
        'Cabimento: omissão legislativa que inviabilize o exercício de direitos e liberdades constitucionais e prerrogativas inerentes à nacionalidade, soberania e cidadania',
        'MI individual e coletivo (legitimados similares ao MS coletivo)',
        'Eficácia: efeitos concretos (regular o caso) ou abstratos (suprir a omissão até a lei) — debate STF'
      ]},
      { h: 'Lei seca primária', items: [
        'Lei 12.016/2009 (MS) — DECORAR pontos cruciais',
        'Lei 13.300/2016 (MI)',
        'CF/88 art. 5º LXIX, LXX, LXXI'
      ]},
      { h: 'Súmulas STF/STJ', items: [
        'Súmula 269/STF — MS não substitui ação de cobrança',
        'Súmula 271/STF — concessão do MS não produz efeitos patrimoniais pretéritos',
        'Súmula 460/STJ — não cabe MS para convalidar compensação tributária',
        'Casos clássicos: MI 670, 708, 712 — STF concedeu eficácia geral à ausência de regulamentação do direito de greve do servidor público'
      ]}
    ]
  },
  {
    id: '20-acao-civil-publica-acao-popular-habeas-data',
    num: 20,
    title: 'ACP, ANPC, compliance, Ação Popular, Habeas Data',
    edital: '3.2.20',
    editalText: 'Ação Civil Pública: ritos e medidas de urgência na proteção da probidade administrativa, patrimônio público e meio-ambiente. Acordo de não persecução cível. Programas de conformidade, integridade e compliance. Ação de ressarcimento ao erário. Ação Popular. Habeas Data.',
    size: 'Grande (7-9 dias úteis)',
    schedule: 'Mês 5, Semana 3',
    advantage: 'Vantagem ENORME — pão com manteiga do MP',
    sections: [
      { h: 'Ação Civil Pública (Lei 7.347/85)', items: [
        'Objeto: meio ambiente, consumidor, patrimônio público, ordem urbanística, idoso, deficiente, etc.',
        'Legitimados (art. 5º): MP, Defensoria, União/Estados/Municípios, autarquias, fundações públicas, empresas públicas, associações com >1 ano e finalidade compatível',
        'Inquérito Civil — instrumento extrajudicial do MP (CNMP Resolução 23/2007)',
        'TAC — Termo de Ajustamento de Conduta (Lei 7.347 art. 5º §6º)',
        'Coisa julgada secundum eventum litis (CDC art. 103 — aplicável por integração)',
        'Tutelas de urgência específicas, multa diária'
      ]},
      { h: 'Acordo de Não Persecução Cível (ANPC)', items: [
        'Lei 14.230/2021 — alteração da Lei de Improbidade (Lei 8.429/92)',
        'Cabimento: atos de improbidade que admitam mitigação',
        'Requisitos: integral devolução do produto, reparação integral do dano, observância dos princípios',
        'Homologação judicial obrigatória',
        'Diferença em relação ao TAC: ANPC pressupõe responsabilização; TAC é compromisso de adequação'
      ]},
      { h: 'Compliance e programas de integridade', items: [
        'Lei 12.846/2013 (Anticorrupção): pessoa jurídica pode ser responsabilizada por atos contra adm. pública',
        'Programas de integridade reduzem sanções (decreto 11.129/2022)',
        'Acordos de leniência — celebrados com CGU, AGU, MPF/MPE'
      ]},
      { h: 'Ação de Ressarcimento ao Erário', items: [
        'CF/88 art. 37 §5º — imprescritibilidade RESTRITA',
        'STF Tema 897: imprescritível apenas o ressarcimento por ato DOLOSO de improbidade'
      ]},
      { h: 'Ação Popular (Lei 4.717/65)', items: [
        'Legitimidade ativa exclusiva do CIDADÃO (com título eleitoral em dia)',
        'Objeto: ato lesivo ao patrimônio público, moralidade, meio ambiente, patrimônio histórico-cultural',
        'Coisa julgada secundum eventum probationis (improcedência por falta de provas → pode ser repropoSta)'
      ]},
      { h: 'Habeas Data (Lei 9.507/97)', items: [
        'Direito de acesso a informações pessoais em registros de caráter público',
        'Direito de retificação de dados',
        'Diferença com MS: no HD se discute o direito à informação/retificação; no MS, direito líquido e certo violado por ato de autoridade'
      ]},
      { h: 'Lei seca primária', items: [
        'Lei 7.347/85 (ACP)',
        'Lei 4.717/65 (Ação Popular)',
        'Lei 9.507/97 (Habeas Data)',
        'Lei 8.429/92 (Improbidade) com Lei 14.230/21',
        'Lei 12.846/2013 (Anticorrupção)'
      ]},
      { h: 'Jurisprudência crítica', items: [
        'STF Tema 897 — imprescritibilidade do ressarcimento (restrita ao doloso)',
        'STF — modulação de efeitos da Lei 14.230/21 (improbidade)',
        'STJ — Resolução CNMP 179/2017 (TAC)',
        'STJ — Resolução CNMP 23/2007 (inquérito civil)'
      ]}
    ]
  }
],

// ============ FLASHCARDS INICIAIS ============
flashcards: [
  { id: 1, topic: 1, q: 'O que significa "tempus regit actum" no processo civil?', a: 'A nova lei processual aplica-se aos atos a praticar (princípio do isolamento dos atos), sem retroatividade aos atos já realizados.', tags: ['CPC', 'lei-processual'] },
  { id: 2, topic: 1, q: 'O que é o "diálogo das fontes" segundo Erik Jayme?', a: 'Teoria que harmoniza fontes normativas distintas, permitindo aplicação simultânea (no Brasil aplicada especialmente entre CDC e CC).', tags: ['principios'] },
  { id: 3, topic: 2, q: 'Quais os princípios fundamentais do CPC (art. 1º a 12)?', a: 'Modelo constitucional, contraditório, cooperação, boa-fé, publicidade, paridade de tratamento, vedação à decisão-surpresa, ordem cronológica.', tags: ['CPC', 'principios'] },
  { id: 4, topic: 2, q: 'Os tratados de direitos humanos no Brasil têm que status?', a: 'Status supralegal (acima da lei e abaixo da CF), salvo se aprovados pelo rito de EC (art. 5º §3º), quando são equivalentes à CF.', tags: ['DH'] },
  { id: 5, topic: 3, q: 'Quais são as condições da ação no CPC?', a: 'Legitimidade e interesse. A possibilidade jurídica do pedido deixou de ser autônoma e foi absorvida pela análise do mérito.', tags: ['CPC', 'condicoes-acao'] },
  { id: 6, topic: 3, q: 'Diferença entre teoria da asserção e in concreto das condições da ação?', a: 'Asserção (predominante): verifica condições à luz das alegações da inicial. In concreto: verificação após dilação probatória.', tags: ['teoria'] },
  { id: 7, topic: 4, q: 'Quando cabe IDPJ?', a: 'Quando se quer atingir bens de PJ ou pessoa diversa daquela do processo, com base no CC art. 50 ou outras hipóteses legais. CPC arts. 133-137.', tags: ['IDPJ'] },
  { id: 8, topic: 4, q: 'Amicus curiae pode recorrer?', a: 'Em regra NÃO. Exceções: contra decisão de admissão e em IRDR/IAC (CPC art. 138 §1º).', tags: ['amicus'] },
  { id: 9, topic: 4, q: 'Diferença entre litisconsórcio simples e unitário?', a: 'Simples: decisão pode ser distinta para cada litisconsorte. Unitário: decisão tem que ser uniforme (mesma para todos).', tags: ['litisconsorcio'] },
  { id: 10, topic: 5, q: 'Hipóteses obrigatórias de intervenção do MP no processo civil?', a: 'CPC art. 178: I) interesse público/social; II) interesse de incapaz; III) litígios coletivos sobre posse rural.', tags: ['MP', 'CPC'] },
  { id: 11, topic: 5, q: 'Prazo do MP no processo civil?', a: 'Em DOBRO (CPC art. 180), exceto quando a própria lei estabelecer prazo específico.', tags: ['MP', 'prazos'] },
  { id: 12, topic: 6, q: 'Competência absoluta x relativa: como cada uma é arguida?', a: 'Absoluta: cognoscível de ofício, a qualquer tempo. Relativa: apenas pela parte na contestação como preliminar (Súmula 33/STJ).', tags: ['competencia'] },
  { id: 13, topic: 7, q: 'Diferença entre impedimento e suspeição do juiz?', a: 'Impedimento: rol TAXATIVO (art. 144), nulidade absoluta sem prazo. Suspeição: rol exemplificativo (art. 145), arguida em 15 dias sob pena de preclusão.', tags: ['juiz'] },
  { id: 14, topic: 8, q: 'Como se contam os prazos no CPC?', a: 'Em DIAS ÚTEIS (CPC art. 219). Excluído o dia do início, incluído o do vencimento. Suspensão durante recesso forense (20/12 a 20/01).', tags: ['prazos'] },
  { id: 15, topic: 8, q: 'Princípios das nulidades processuais?', a: 'Causalidade, instrumentalidade das formas, prejuízo (pas de nullité sans grief), aproveitamento dos atos.', tags: ['nulidades'] },
  { id: 16, topic: 9, q: 'Diferença entre tutela de urgência e tutela de evidência?', a: 'Urgência: requer probabilidade do direito + perigo de dano OU risco ao resultado útil. Evidência: dispensa o perigo, com hipóteses TAXATIVAS no CPC art. 311.', tags: ['tutela'] },
  { id: 17, topic: 9, q: 'O que é estabilização da tutela antecipada antecedente?', a: 'Quando concedida em caráter antecedente e não impugnada por agravo de instrumento, torna-se estável e o processo é extinto (CPC art. 304).', tags: ['tutela'] },
  { id: 18, topic: 10, q: 'Diferença entre extinção sem e com resolução do mérito?', a: 'Sem mérito (485): por questões processuais, com coisa julgada formal. Com mérito (487): com coisa julgada material — acolhe/rejeita pedido, prescrição/decadência, homologa transação.', tags: ['CPC'] },
  { id: 19, topic: 11, q: 'O que é coisa julgada secundum eventum litis?', a: 'Coisa julgada coletiva que só se forma erga omnes/ultra partes em caso de procedência ou improcedência por mérito; se improcedência por falta de provas, qualquer legitimado pode rediscutir (CDC art. 103).', tags: ['coisa-julgada', 'coletivo'] },
  { id: 20, topic: 11, q: 'Hipóteses de improcedência liminar do pedido (CPC art. 332)?', a: 'Pedido contraria SV, RE/REsp repetitivo, IRDR, IAC, súmula STF/STJ; ou consumação de prescrição/decadência.', tags: ['procedimento-comum'] },
  { id: 21, topic: 11, q: 'O que é o consequencialismo no direito (LINDB arts. 20-21)?', a: 'Decisão em sede pública (administrativa, controle e judicial) deve considerar as consequências práticas; nas invalidações, indicar de modo expresso suas consequências jurídicas e administrativas.', tags: ['LINDB'] },
  { id: 22, topic: 12, q: 'Multa do art. 523 §1º do CPC: quanto e quando incide?', a: '10% do valor do débito + 10% de honorários, se o devedor não pagar em 15 dias após intimação. Tema 962/STJ: incide ainda que sem intimação pessoal.', tags: ['cumprimento'] },
  { id: 23, topic: 13, q: 'Possessória: força nova × velha?', a: 'Força nova: turbação/esbulho ocorrido há menos de 1 ano e 1 dia → procedimento especial com liminar. Força velha: após esse prazo → procedimento comum.', tags: ['possessorias'] },
  { id: 24, topic: 14, q: 'Coisa julgada na jurisdição voluntária?', a: 'Em regra apenas COISA JULGADA FORMAL (CPC art. 723 §único) — discutível se há material. A decisão pode ser revista por nova ação se sobrevier circunstância nova.', tags: ['voluntaria'] },
  { id: 25, topic: 15, q: 'Diferença entre embargos à execução e exceção de pré-executividade?', a: 'Embargos: ação autônoma, requer garantia, em 15 dias. EPE (Súmula 393/STJ): defesa atípica no próprio processo, sem garantia, restrita a matérias de ordem pública conhecíveis de ofício.', tags: ['execucao', 'defesas'] },
  { id: 26, topic: 15, q: 'Quais bens são impenhoráveis (rol exemplificativo)?', a: 'CPC art. 833: bens inalienáveis, materiais de imóvel, vestuário, móveis essenciais, livros profissionais, salários (Súmula 394 — mitigada para quantias acima de 50 SM e alimentos), poupança até 40 SM, etc.', tags: ['execucao'] },
  { id: 27, topic: 16, q: 'O que é a taxatividade mitigada do art. 1015 (Tema 988/STJ)?', a: 'O rol é taxativo, mas admite-se agravo de instrumento por interpretação extensiva quando houver urgência decorrente da inutilidade do julgamento da apelação.', tags: ['recursos'] },
  { id: 28, topic: 16, q: 'Categorias de precedentes vinculantes (CPC art. 927)?', a: 'I) STF em controle concentrado; II) súmulas vinculantes; III) acórdãos em IAC, IRDR, REs/REsps repetitivos; IV) súmulas STF (constitucional) e STJ (federal); V) plenário/órgão especial.', tags: ['precedentes'] },
  { id: 29, topic: 17, q: 'Pessoa jurídica pode ser beneficiária da gratuidade?', a: 'SIM, mas tem que provar incapacidade financeira (Súmula 481/STJ) — não basta alegar.', tags: ['gratuidade'] },
  { id: 30, topic: 18, q: 'Cabe REsp em juizados especiais?', a: 'NÃO cabe (Súmula 203/STJ). Cabe RE com repercussão geral (CF art. 102 III).', tags: ['juizados'] },
  { id: 31, topic: 19, q: 'Prazo decadencial do mandado de segurança?', a: '120 DIAS contados da ciência do ato impugnado (Lei 12.016/09 art. 23).', tags: ['MS'] },
  { id: 32, topic: 19, q: 'O que é "direito líquido e certo"?', a: 'Direito comprovado documentalmente, sem necessidade de dilação probatória, ainda que possa ser controvertido em direito.', tags: ['MS'] },
  { id: 33, topic: 19, q: 'Quem tem legitimidade para impetrar MS coletivo?', a: 'Partido político com representação no CN; organização sindical, entidade de classe ou associação (constituída há pelo menos 1 ano), em defesa dos interesses de seus membros.', tags: ['MS', 'coletivo'] },
  { id: 34, topic: 20, q: 'Legitimados ativos da ACP?', a: 'MP, Defensoria, União/Estados/Municípios, autarquias, fundações públicas, empresas públicas, e associações com mais de 1 ano e finalidade compatível (Lei 7.347/85 art. 5º).', tags: ['ACP'] },
  { id: 35, topic: 20, q: 'O ressarcimento ao erário por ato de improbidade prescreve?', a: 'STF Tema 897: imprescritível APENAS para atos DOLOSOS de improbidade administrativa. Atos culposos prescrevem.', tags: ['ACP', 'improbidade'] },
  { id: 36, topic: 20, q: 'Quem pode propor ação popular?', a: 'Apenas o CIDADÃO (com título eleitoral em dia). Lei 4.717/65.', tags: ['popular'] },
  { id: 37, topic: 20, q: 'Diferença entre TAC e ANPC?', a: 'TAC (Lei 7.347 §6º): compromisso de adequação à lei, dispensa responsabilização. ANPC (Lei 14.230/21): pressupõe responsabilização por improbidade, requer integral devolução + reparação + homologação judicial.', tags: ['ACP', 'improbidade'] }
],

// ============ QUESTÕES (SIMULADO) ============
// Iniciais — adicionar mais conforme estuda
questions: [
  {
    id: 1,
    topic: 9,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a tutela provisória no CPC, assinale a alternativa correta:',
    alternatives: [
      'A tutela de evidência exige a demonstração de probabilidade do direito e do perigo de dano.',
      'A tutela de urgência cautelar e a tutela antecipada são fungíveis entre si, conforme o CPC art. 305.',
      'A estabilização da tutela antecipada antecedente gera coisa julgada material após o trânsito.',
      'A tutela provisória admite recurso de apelação contra a decisão que a defere ou indefere.',
      'A tutela de evidência só pode ser concedida após a contestação.'
    ],
    correct: 'B',
    explanation: 'A) Errado — tutela de evidência DISPENSA perigo de dano (CPC art. 311). B) CORRETO — CPC art. 305 §único permite fungibilidade. C) Errado — STJ entende que estabilização não gera coisa julgada material (debate). D) Errado — cabe agravo de instrumento (CPC art. 1015 I). E) Errado — algumas hipóteses do art. 311 podem ser concedidas liminarmente.'
  },
  {
    id: 2,
    topic: 5,
    banca: 'Simulada',
    nivel: 'Fácil',
    statement: 'O Ministério Público intervém obrigatoriamente como fiscal da ordem jurídica nas seguintes hipóteses, EXCETO:',
    alternatives: [
      'Causas que envolvam interesse público ou social.',
      'Causas que envolvam interesse de incapaz.',
      'Litígios coletivos pela posse de terra rural.',
      'Causas em que figure pessoa jurídica de direito público como parte.',
      'Demais hipóteses previstas em lei ou na Constituição.'
    ],
    correct: 'D',
    explanation: 'CPC art. 178 prevê três hipóteses: I) interesse público/social; II) incapaz; III) posse rural. A simples presença de pessoa jurídica de direito público NÃO obriga intervenção (Súmula 234/STJ). Demais hipóteses ficam a cargo de lei especial.'
  },
  {
    id: 3,
    topic: 4,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre o IDPJ (Incidente de Desconsideração da Personalidade Jurídica), é INCORRETO afirmar:',
    alternatives: [
      'É cabível em qualquer fase do processo, inclusive na execução.',
      'Sua instauração suspende o processo, salvo se requerido na inicial.',
      'A decisão que julga o incidente é interlocutória, cabendo agravo de instrumento.',
      'Não cabe IDPJ na execução fiscal, conforme entendimento pacificado do STJ.',
      'Pode ser instaurado de ofício pelo juiz.'
    ],
    correct: 'D',
    explanation: 'A) Correto — CPC art. 134. B) Correto — art. 134 §3º. C) Correto — art. 1015 IV. D) INCORRETO — STJ Tema 1019 admite IDPJ na execução fiscal em hipóteses específicas (não há vedação absoluta). E) Discutível, mas a doutrina majoritária e o art. 133 indicam necessidade de provocação. A pegadinha está em D.'
  },
  {
    id: 4,
    topic: 11,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a coisa julgada nas ações coletivas, assinale a alternativa correta:',
    alternatives: [
      'A coisa julgada coletiva sempre opera erga omnes, independentemente do resultado do julgamento.',
      'Em caso de improcedência por insuficiência de provas, é vedada nova ação coletiva sobre o mesmo tema.',
      'A coisa julgada coletiva opera secundum eventum litis, conforme o CDC art. 103.',
      'A coisa julgada na ação popular é absoluta e impede qualquer rediscussão.',
      'Os direitos individuais homogêneos não são alcançados pela coisa julgada coletiva.'
    ],
    correct: 'C',
    explanation: 'CDC art. 103 estabelece o regime da coisa julgada coletiva: erga omnes em direitos difusos (salvo improcedência por falta de provas), ultra partes em coletivos stricto sensu, secundum eventum litis e in utilibus para individuais homogêneos. Em caso de improcedência por falta de provas, qualquer legitimado pode propor nova ação com idêntico fundamento (secundum eventum probationis).'
  },
  {
    id: 5,
    topic: 16,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre o sistema de precedentes no CPC, é INCORRETO afirmar:',
    alternatives: [
      'O rol do art. 1015 do CPC, que enumera as decisões impugnáveis por agravo de instrumento, foi entendido pelo STJ como taxativo mitigado.',
      'A ratio decidendi de um precedente é vinculante; o obiter dictum, em regra, não.',
      'O distinguishing permite afastar a aplicação de um precedente quando o caso concreto possui particularidades relevantes.',
      'Súmulas do STF em matéria infraconstitucional vinculam os demais tribunais.',
      'O IRDR pode ser instaurado quando houver efetiva repetição de processos com idêntica controvérsia jurídica.'
    ],
    correct: 'D',
    explanation: 'A) Correto — Tema 988/STJ. B) Correto — distinção fundamental no sistema de precedentes. C) Correto — art. 489 §1º V e VI. D) INCORRETO — Súmulas do STF em matéria CONSTITUCIONAL vinculam (CPC art. 927 IV); em matéria INFRACONSTITUCIONAL, são as do STJ que vinculam. E) Correto — CPC art. 976 I.'
  },
  {
    id: 6,
    topic: 19,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'O prazo decadencial para impetração do mandado de segurança é de:',
    alternatives: [
      '60 dias da ciência do ato impugnado.',
      '90 dias da ciência do ato impugnado.',
      '120 dias da ciência do ato impugnado.',
      '180 dias da ciência do ato impugnado.',
      '5 anos da ciência do ato impugnado.'
    ],
    correct: 'C',
    explanation: 'Lei 12.016/2009 art. 23: "O direito de requerer mandado de segurança extinguir-se-á decorridos 120 dias, contados da ciência, pelo interessado, do ato impugnado." Trata-se de prazo decadencial.'
  },
  {
    id: 7,
    topic: 20,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre o ressarcimento ao erário por ato de improbidade administrativa, conforme entendimento do STF, é correto afirmar:',
    alternatives: [
      'É imprescritível em qualquer hipótese, em razão do art. 37 §5º da CF.',
      'Sempre prescreve no prazo de 5 anos, conforme a Lei de Improbidade.',
      'É imprescritível apenas para atos dolosos de improbidade, conforme Tema 897/STF.',
      'É imprescritível apenas para atos culposos, em razão da gravidade do dano.',
      'Aplica-se o prazo de 10 anos do CC art. 205.'
    ],
    correct: 'C',
    explanation: 'STF Tema 897 (RE 852.475): "São imprescritíveis as ações de ressarcimento ao erário fundadas na prática de ato DOLOSO tipificado na Lei de Improbidade Administrativa." Para atos culposos, aplica-se o prazo prescricional comum.'
  },
  {
    id: 8,
    topic: 6,
    banca: 'Simulada',
    nivel: 'Fácil',
    statement: 'Em relação à incompetência relativa no CPC, assinale a alternativa correta:',
    alternatives: [
      'Pode ser declarada de ofício pelo juiz a qualquer tempo.',
      'Deve ser arguida pela parte em peça autônoma denominada exceção de incompetência.',
      'Deve ser arguida em preliminar de contestação, sob pena de prorrogação.',
      'Não admite arguição, podendo ser conhecida de ofício somente em segunda instância.',
      'Deve ser arguida em qualquer momento, antes do trânsito em julgado.'
    ],
    correct: 'C',
    explanation: 'Súmula 33/STJ: "A incompetência relativa não pode ser declarada de ofício." CPC art. 337 II: a incompetência (relativa) é arguida em preliminar de contestação. Não arguida → prorroga-se a competência (art. 65). O CPC unificou as defesas — não há mais "exceção de incompetência" autônoma.'
  },
  {
    id: 9,
    topic: 18,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre os Juizados Especiais Cíveis (Lei 9.099/95), é correto afirmar:',
    alternatives: [
      'Cabe REsp ao STJ contra decisão da turma recursal, em matéria infraconstitucional.',
      'Pessoa jurídica de qualquer natureza pode ser autora.',
      'O valor de alçada é de 60 salários-mínimos.',
      'Não cabe REsp, mas é cabível RE com repercussão geral.',
      'É vedada a atuação da Defensoria Pública nos juizados.'
    ],
    correct: 'D',
    explanation: 'A) Errado — Súmula 203/STJ veda REsp em juizados. B) Errado — só ME, EPP e MEI (art. 8º §1º Lei 9.099). C) Errado — JEC é até 40 SM; 60 SM é JEFP. D) CORRETO — Súmula 640/STJ + previsão constitucional. E) Errado — Defensoria pode atuar nos juizados.'
  },
  {
    id: 10,
    topic: 12,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o cumprimento de sentença, é correto afirmar:',
    alternatives: [
      'A multa de 10% prevista no art. 523 §1º incide automaticamente após a sentença, sem necessidade de prazo.',
      'A impugnação ao cumprimento de sentença é peça autônoma, exigindo nova distribuição.',
      'A multa de 10% incide se o devedor não pagar em 15 dias após a intimação para pagamento, conforme Tema 962/STJ.',
      'O cumprimento provisório só pode ocorrer após o trânsito em julgado.',
      'A multa do art. 523 não se aplica aos honorários de sucumbência.'
    ],
    correct: 'C',
    explanation: 'A) Errado — depende de intimação e prazo de 15 dias. B) Errado — impugnação é defesa nos próprios autos, não peça autônoma. C) CORRETO — STJ Tema 962. D) Errado — cumprimento provisório existe (CPC art. 520). E) Errado — multa também afeta honorários (10% sobre o valor + 10% honorários).'
  },
  {
    id: 11,
    topic: 8,
    banca: 'Simulada',
    nivel: 'Fácil',
    statement: 'Quanto à contagem dos prazos no CPC/2015:',
    alternatives: [
      'Os prazos contam-se em dias corridos, incluindo sábados, domingos e feriados.',
      'Os prazos contam-se em dias úteis, excluindo sábados, domingos e feriados.',
      'Os prazos contam-se em horas trabalhadas, conforme decisão do juiz.',
      'Os prazos contam-se em meses, salvo disposição em contrário.',
      'Os prazos contam-se em dias corridos, salvo nos juizados especiais.'
    ],
    correct: 'B',
    explanation: 'CPC art. 219: "Na contagem de prazo em dias, estabelecido por lei ou pelo juiz, computar-se-ão somente os dias úteis." Esta foi uma das principais mudanças do CPC/2015 em relação ao CPC/1973. Atenção: nos juizados especiais permanece em dias corridos.'
  },
  {
    id: 12,
    topic: 17,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a gratuidade da justiça (CPC):',
    alternatives: [
      'Apenas pessoas naturais podem ser beneficiárias, sendo vedada para PJ.',
      'PJ pode ser beneficiária independentemente de provar incapacidade financeira.',
      'PJ pode ser beneficiária se demonstrar incapacidade financeira (Súmula 481/STJ).',
      'A gratuidade exime o beneficiário do pagamento de honorários sucumbenciais em qualquer hipótese.',
      'A gratuidade só pode ser requerida na petição inicial.'
    ],
    correct: 'C',
    explanation: 'A) Errado. B) Errado. C) CORRETO — Súmula 481/STJ. D) Errado — beneficiário pode ser condenado em sucumbência, com exigibilidade suspensa por 5 anos (CPC art. 98 §3º). E) Errado — pode ser requerida a qualquer momento (art. 99).'
  },
  {
    id: 13,
    topic: 15,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a exceção de pré-executividade (Súmula 393/STJ):',
    alternatives: [
      'Cabe sempre que houver dúvidas quanto ao mérito da execução.',
      'Cabe quando se tratar de matéria conhecível de ofício e não exigir dilação probatória.',
      'Cabe somente após a oposição de embargos à execução.',
      'Exige a garantia do juízo, assim como os embargos à execução.',
      'Não é admitida no CPC/2015.'
    ],
    correct: 'B',
    explanation: 'Súmula 393/STJ: "A exceção de pré-executividade é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que não demandem dilação probatória." Aplicação por analogia também à execução comum. NÃO exige garantia do juízo.'
  },
  {
    id: 14,
    topic: 11,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre a sentença e seus requisitos no CPC, é INCORRETO afirmar:',
    alternatives: [
      'A sentença deve conter relatório, fundamentação e dispositivo.',
      'A fundamentação é nula se apenas reproduzir o ato normativo sem explicar a relação com o caso (CPC art. 489 §1º I).',
      'A sentença que invocar súmula ou precedente sem identificar seus fundamentos determinantes é considerada não fundamentada.',
      'O juiz pode julgar fora dos limites do pedido (extra petita) quando houver razões de ordem pública.',
      'É vedado ao juiz invocar motivos que serviriam para qualquer outra decisão.'
    ],
    correct: 'D',
    explanation: 'A) Correto — CPC art. 489. B), C), E) Corretos — CPC art. 489 §1º. D) INCORRETO — vige o princípio da congruência (CPC art. 492); o juiz NÃO pode julgar extra petita, ainda que por razões de ordem pública. Há exceções específicas em direito de família e direitos coletivos, mas não como regra ampla.'
  },
  {
    id: 15,
    topic: 7,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o impedimento e a suspeição do juiz:',
    alternatives: [
      'Tanto o impedimento quanto a suspeição podem ser arguidos a qualquer tempo, sem prazo decadencial.',
      'O impedimento decorre de rol exemplificativo; a suspeição, de rol taxativo.',
      'O impedimento gera nulidade absoluta, podendo ensejar ação rescisória; a suspeição, se não arguida em 15 dias, preclui.',
      'A suspeição depende de prova robusta; o impedimento é presumido.',
      'O juiz não pode ser declarado impedido de ofício.'
    ],
    correct: 'C',
    explanation: 'A) Errado — suspeição tem prazo de 15 dias (CPC art. 146). B) Errado — INVERSO: impedimento taxativo (art. 144), suspeição exemplificativa (art. 145). C) CORRETO — impedimento é matéria de ordem pública, sem prazo, e pode fundamentar ação rescisória (art. 966 II). D) Sem fundamento normativo na forma proposta. E) Errado — juiz pode (e deve) reconhecer impedimento de ofício.'
  }
],

// ============ SÚMULAS RELEVANTES ============
sumulas: [
  // STF Súmulas Vinculantes
  { tribunal: 'STF', tipo: 'SV', num: 10, topic: 16, text: 'Viola a cláusula de reserva de plenário (CF, art. 97) a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.' },
  { tribunal: 'STF', tipo: 'SV', num: 17, topic: 12, text: 'Durante o período previsto no parágrafo 1º do art. 100 da Constituição Federal, não incidem juros de mora sobre os precatórios que nele sejam pagos.' },

  // STF Súmulas
  { tribunal: 'STF', tipo: 'Súmula', num: 267, topic: 19, text: 'Não cabe mandado de segurança contra ato judicial passível de recurso ou correição.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 269, topic: 19, text: 'O mandado de segurança não é substitutivo de ação de cobrança.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 271, topic: 19, text: 'Concessão de mandado de segurança não produz efeitos patrimoniais em relação a período pretérito, os quais devem ser reclamados administrativamente ou pela via judicial própria.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 343, topic: 16, text: 'Não cabe ação rescisória por ofensa a literal disposição de lei, quando a decisão rescindenda se tiver baseado em texto legal de interpretação controvertida nos tribunais.' },

  // STJ Súmulas
  { tribunal: 'STJ', tipo: 'Súmula', num: 7, topic: 16, text: 'A pretensão de simples reexame de prova não enseja recurso especial.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 33, topic: 6, text: 'A incompetência relativa não pode ser declarada de ofício.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 99, topic: 5, text: 'O Ministério Público tem legitimidade para recorrer no processo em que oficiou como fiscal da lei, ainda que não haja recurso da parte.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 203, topic: 18, text: 'Não cabe recurso especial contra decisão proferida por órgão de segundo grau dos Juizados Especiais.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 226, topic: 5, text: 'O Ministério Público tem legitimidade para recorrer na ação de acidente do trabalho, ainda que o segurado esteja assistido por advogado.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 235, topic: 6, text: 'A conexão não determina a reunião dos processos, se um deles já foi julgado.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 240, topic: 10, text: 'A extinção do processo, por abandono da causa pelo autor, depende de requerimento do réu.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 329, topic: 20, text: 'O Ministério Público tem legitimidade para propor ação civil pública em defesa do patrimônio público.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 375, topic: 15, text: 'O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova de má-fé do terceiro adquirente.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 384, topic: 13, text: 'Cabe ação monitória para haver saldo remanescente oriundo de venda extrajudicial de bem alienado fiduciariamente em garantia.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 393, topic: 15, text: 'A exceção de pré-executividade é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que não demandem dilação probatória.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 394, topic: 15, text: 'É admissível, em embargos à execução, compensar os valores de imposto de renda retidos indevidamente na fonte com os valores restituídos apurados na declaração anual.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 410, topic: 4, text: 'A prévia intimação pessoal do devedor constitui condição necessária para a cobrança de multa pelo descumprimento de obrigação de fazer ou não fazer.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 414, topic: 8, text: 'A citação por edital na execução fiscal é cabível quando frustradas as demais modalidades.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 460, topic: 19, text: 'É incabível o mandado de segurança para convalidar a compensação tributária realizada pelo contribuinte.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 481, topic: 17, text: 'Faz jus ao benefício da justiça gratuita a pessoa jurídica com ou sem fins lucrativos que demonstrar sua impossibilidade de arcar com os encargos processuais.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 489, topic: 6, text: 'Reconhecida a continência, devem ser reunidas na Justiça Federal as ações civis públicas propostas nesta e na Justiça estadual.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 503, topic: 6, text: 'O prazo para ajuizamento de ação monitória em face do emitente de cheque sem força executiva é quinquenal, a contar do dia seguinte à data de emissão estampada na cártula.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 640, topic: 18, text: 'O benefício da justiça gratuita pode ser requerido a qualquer tempo, considerando-se a situação econômica do interessado no momento da formulação do pedido.' }
],

// ============ DOUTRINA RECOMENDADA ============
doutrina: [
  {
    materia: 'Processo Civil',
    obras: [
      { nome: 'Sinopse Juspodivm — Processo Civil', autor: 'Gajardoni / Câmara', perfil: 'Condensado, foco em concurso', recomendacao: 'Recomendado para 1h/dia' },
      { nome: 'Manual de Processo Civil', autor: 'Daniel Amorim Assumpção Neves', perfil: 'Completo, equilibrado', recomendacao: 'Aprofundar temas específicos' },
      { nome: 'Curso de Processo Civil (3 volumes)', autor: 'Fredie Didier Jr.', perfil: 'Doutrina referência', recomendacao: 'Consulta pontual' }
    ]
  }
],

// ============ CRONOGRAMA MACRO ============
cronograma: {
  fases: [
    { num: 1, duracao: '4-5 meses', periodo: 'mai → set/2026', conteudo: 'Processo Civil — itens 1 a 20', atual: true },
    { num: 2, duracao: '1-2 meses', periodo: 'out → nov/2026', conteudo: 'Processo Civil — itens 21 a 30 (mediação, arbitragem, juizados, CNJ/CNMP)' },
    { num: 3, duracao: '4 meses', periodo: 'dez/2026 → mar/2027', conteudo: 'Direito Civil' },
    { num: 4, duracao: '4 meses', periodo: 'abr → jul/2027', conteudo: 'Constitucional + Administrativo' },
    { num: 5, duracao: '4 meses', periodo: 'ago → nov/2027', conteudo: 'Penal + Processo Penal' },
    { num: 6, duracao: '3 meses', periodo: 'dez/2027 → fev/2028', conteudo: 'Eleitoral, Tributário, Material e Processual Coletivo, Teoria do MP' },
    { num: 7, duracao: 'Reta final', periodo: 'quando sair edital LXII', conteudo: 'Revisão geral + simulados + redação + peça' }
  ],
  fase1Meses: [
    { mes: 'Mês 1 (mai-jun)', topicos: '1, 2, 3, 4, 5', notas: 'Fundamentos. Item 5 (MP no processo) = vantagem dela.' },
    { mes: 'Mês 2 (jun-jul)', topicos: '6, 7, 8, 9', notas: 'Competência, juiz, atos processuais, tutela. Item 9 = vantagem.' },
    { mes: 'Mês 3 (jul-ago)', topicos: '10, 11', notas: '⚠️ Item 11 (procedimento comum) é o maior — quebrar em 4+ sub-resumos.' },
    { mes: 'Mês 4 (ago)', topicos: '12, 13, 14, 15, 16', notas: 'Cumprimento, especiais, voluntária, execução, recursos. Item 16 também grande.' },
    { mes: 'Mês 5 (set)', topicos: '17, 18, 19, 20 + revisão', notas: 'Item 20 (ACP) = vantagem. Última semana = simulado de 60 questões.' }
  ]
}

};
