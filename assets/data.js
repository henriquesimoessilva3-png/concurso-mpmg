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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: '**Competência** é a medida em que cada órgão jurisdicional exerce a jurisdição (que é UNA — Tópico 3). Definir competência é responder à pergunta: "qual juiz, dentre todos os investidos de jurisdição, deve julgar este caso?". A resposta vem da Constituição (regras de competência originária dos tribunais e da Justiça Federal), das leis processuais (CPC, leis especiais) e das normas de organização judiciária estaduais.' },
          { type: 'p', text: '**Critérios determinativos** (Carnelutti, adotados pela doutrina brasileira):' },
          {
            type: 'table',
            headers: ['Critério', 'Natureza', 'Exemplo', 'Disciplina'],
            rows: [
              ['Matéria (ratione materiae)', 'Absoluta', 'Vara da Família × Vara Cível Comum', 'Lei de organização judiciária'],
              ['Pessoa (ratione personae)', 'Absoluta', 'Justiça Federal (entes do art. 109 CF)', 'CF art. 109; CPC art. 45'],
              ['Função (ratione functionis)', 'Absoluta', 'Competência originária × recursal; entre fases', 'CPC arts. 64+; CF arts. 102, 105'],
              ['Valor (ratione valoris)', 'Relativa', 'JEC × Vara Comum (até 40 SM)', 'Lei 9.099/95 art. 3º'],
              ['Território (ratione loci)', 'Relativa (regra)', 'Foro do domicílio do réu (art. 46)', 'CPC arts. 46-53']
            ]
          },
          { type: 'p', text: '**Distinção fundamental** — competência **absoluta** × **relativa**:' },
          { type: 'list', items: [
            '**Absoluta** (matéria, pessoa, função) — cognoscível de OFÍCIO em qualquer fase; gera **nulidade absoluta**; não se prorroga; pode ser arguida em qualquer momento (não preclui antes do trânsito); decisões prolatadas por juízo absolutamente incompetente são nulas (mas atos NÃO decisórios podem ser aproveitados — *translatio iudicii*, art. 64 §4º)',
            '**Relativa** (valor e território, em regra) — só por arguição da parte (Súmula 33/STJ); deve ser arguida na contestação como preliminar (art. 337 II + art. 65), sob pena de **prorrogação**; gera apenas nulidade RELATIVA (anulável); pode ser objeto de cláusula de eleição de foro (art. 63)'
          ]},
          { type: 'p', text: '**Modificações da competência** — apenas a relativa pode ser modificada por: (i) **conexão** (art. 55: causas com mesmo pedido ou causa de pedir); (ii) **continência** (art. 56: mesma causa de pedir e partes, com pedido de uma contendo o da outra); (iii) **eleição de foro** (art. 63); (iv) **prorrogação** pela ausência de arguição.' },
          { type: 'p', text: '**Cooperação nacional** (arts. 67-69) — inovação do CPC/15 que permite auxílio DIRETO entre juízos, sem necessidade de carta precatória, para atos como prática de citação, intimação, audiência, produção de prova. Materializa o princípio cooperativo (art. 6º) entre os próprios órgãos do Judiciário.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Competência geral (CPC arts. 42-69)' },
          { type: 'list', items: [
            '**Arts. 42-44** — competência internacional (concorrente e exclusiva)',
            '**Art. 45** — deslocamento à JF quando ente federal intervém',
            '**Arts. 46-53** — competência territorial (foro)',
            '**Art. 47** — foros de imóveis (real / mista)',
            '**Art. 53 III** — foros de prerrogativa (consumidor, alimentos, idoso, etc.)',
            '**Arts. 54-58** — modificações: conexão, continência, eleição de foro',
            '**Art. 63** — cláusula de eleição de foro (limites: §3º — abusividade)',
            '**Arts. 64-66** — declaração da incompetência; conflitos',
            '**Arts. 67-69** — cooperação nacional'
          ]},
          { type: 'h', text: 'Constituição' },
          { type: 'list', items: [
            '**Art. 102** — competência originária e recursal do STF',
            '**Art. 105** — STJ',
            '**Art. 108** — TRFs',
            '**Art. 109** — Justiça Federal (rol da competência da JF)',
            '**Art. 109 §3º** — JE com competência federal delegada'
          ]},
          { type: 'h', text: 'Leis especiais' },
          { type: 'list', items: [
            '**CDC art. 101 I** — foro do consumidor (domicílio do consumidor)',
            '**Estatuto do Idoso art. 80** — foro do domicílio do idoso',
            '**Lei 7.347/85 art. 2º** — foro do local do dano (ACP)',
            '**Lei 9.099/95 art. 4º** — foro JEC',
            '**Lei 13.105/15 art. 337 II** — incompetência como preliminar'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Justiça Federal — competência (CF art. 109)' },
          { type: 'p', text: 'Causas em que figurem como autoras, rés, assistentes ou opoentes: **União, autarquias federais ou empresas públicas federais** (não inclui sociedades de economia mista federais — Súmula 556/STJ). Excluem-se: falência, acidentes do trabalho e justiças especializadas. Causas entre Estado estrangeiro e pessoa física no Brasil; causas fundadas em tratado da União; etc.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 489:** "Reconhecida a continência, devem ser reunidas na Justiça Federal as ações civis públicas propostas nesta e na Justiça Estadual." Aplicação concreta da força atrativa da competência federal absoluta.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 556:** "É competente a Justiça Estadual para processar e julgar as causas em que é parte sociedade de economia mista federal." A SEM federal NÃO está no rol do art. 109 I CF.' },

          { type: 'h', text: 'Foros especiais (privilégio relativo)' },
          { type: 'p', text: 'Várias leis estabelecem foros de PRIVILÉGIO da parte vulnerável — todos relativos (renunciáveis pelo titular):' },
          { type: 'list', items: [
            '**Consumidor (CDC art. 101 I):** foro do domicílio do CONSUMIDOR. Dúvida clássica: o consumidor pode ajuizar em outro foro? SIM — é privilégio dele, não vinculação. Cláusula de eleição de foro abusiva é nula (CPC art. 63 §3º + CDC art. 51 IV)',
            '**Idoso (art. 80 EI):** foro do domicílio do idoso',
            '**Pessoa com deficiência (Lei 13.146/15):** mesmas garantias',
            '**Alimentos (CPC art. 53 II):** foro do alimentando',
            '**Divórcio/separação/anulação:** foro do guardião do filho incapaz (art. 53 I), depois último domicílio do casal'
          ]},

          { type: 'h', text: 'Conexão e continência' },
          { type: 'p', text: '**Conexão** (art. 55): causas com mesmo pedido OU mesma causa de pedir → **reunião** se ainda não julgadas. Resultado: prevenção do juízo que primeiro registrou ou distribuiu (art. 59).' },
          { type: 'p', text: '**Continência** (art. 56): identidade de partes e causa de pedir + pedido de uma é mais amplo, contendo o da outra → reunião idem.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 235:** "A conexão NÃO determina a reunião dos processos, se um deles já foi julgado." Consagra a economia do julgamento já realizado.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 33:** "A incompetência RELATIVA não pode ser declarada de ofício." Único contraponto: cláusula abusiva de eleição de foro em contrato de adesão (art. 63 §3º) é o CASO ÚNICO em que o juiz pode declarar de ofício, antes da citação.' },

          { type: 'h', text: 'Translatio iudicii' },
          { type: 'p', text: '**Princípio do CPC/15** (art. 64 §4º): declarada a incompetência (absoluta ou relativa), **conservam-se os efeitos** das decisões proferidas pelo juízo incompetente até que outras sejam proferidas pelo juízo competente. Apenas os atos decisórios são suscetíveis de revogação; os atos NÃO decisórios (citação válida, juntada de documentos, atos meramente ordinatórios) são plenamente aproveitados. Inovação enorme em relação ao regime anterior, em que a incompetência absoluta nulificava tudo.' },

          { type: 'h', text: 'Cláusula de eleição de foro' },
          { type: 'p', text: 'Permitida em causas patrimoniais e sobre direitos disponíveis (art. 63). Limites: cláusula abusiva em contrato de adesão pode ser declarada NULA de OFÍCIO pelo juiz, antes da citação (art. 63 §3º) — única exceção à Súmula 33/STJ. Após a citação, só pode ser arguida pelo réu como preliminar (sob pena de prorrogação).' },

          { type: 'h', text: 'Cooperação nacional (CPC arts. 67-69) — auxílio direto entre juízos' },
          { type: 'p', text: 'Inovação do CPC/15. Substitui a tradicional carta precatória em casos de auxílio simples. **Modalidades** (art. 69):' },
          { type: 'list', items: [
            'Prática de citação, intimação, notificação',
            'Obtenção e apresentação de provas',
            'Reunião ou apensamento de processos',
            'Efetivação de tutela provisória',
            'Solicitação de informações sobre o juízo prevento',
            'Concentração de atos processuais (audiência una)'
          ]},
          { type: 'p', text: 'Pode ser solicitada DIRETAMENTE (sem hierarquia) entre juízos da mesma ou diferente jurisdições (federal, estadual). Forma livre, ágil, baseada na cooperação (art. 6º).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Critérios da competência — "MaPeFun-VaTe":** Absoluta (**Ma**téria, **Pe**ssoa, **Fun**ção); Relativa (**Va**lor, **Te**rritório).' },
          { type: 'box', kind: 'macete', text: '**Modificações da competência (art. 54+) — só RELATIVA:** "**CCEP**" — **C**onexão, **C**ontinência, **E**leição de foro, **P**rorrogação (pela inércia do réu).' },
          { type: 'box', kind: 'macete', text: '**Cooperação nacional — alternativa à carta precatória:** mais rápido, sem hierarquia, direto entre juízos (art. 69). Mnemônico: "**CARTA-PROCESSUAL** vai pra cooperação".' },
          { type: 'box', kind: 'macete', text: '**Foros de privilégio em causas com vulneráveis — todos no DOMICÍLIO da parte mais fraca:** **C**onsumidor, **I**doso, **PCD**, **A**limentando.' },
          { type: 'box', kind: 'macete', text: '**Causas que NÃO vão à JF mesmo com a União:** **F**alência, **A**cidentes do trabalho, **J**ustiças especializadas (eleitoral, trabalhista, militar).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Sociedade de economia mista federal NÃO atrai a JF** (Súmula 556/STJ). Apenas EP, autarquia, fundação e a própria União estão no art. 109 I CF.' },
          { type: 'box', kind: 'atencao', text: '**Translatio iudicii — atos não decisórios SOBREVIVEM** mesmo na incompetência absoluta. Erro frequente em prova: afirmar que "tudo se anula".' },
          { type: 'box', kind: 'atencao', text: '**Incompetência relativa — exceção à Súmula 33:** cláusula de eleição de foro ABUSIVA em contrato de adesão pode ser declarada de ofício pelo juiz, antes da citação (art. 63 §3º). Único caso.' },
          { type: 'box', kind: 'atencao', text: '**Foro do consumidor é PRIVILÉGIO, não vinculação.** Consumidor pode ajuizar em outro foro (próprio domicílio é regra; outro foro é exceção a seu favor). Cuidado com a banca que apresenta a regra como obrigatória.' },
          { type: 'box', kind: 'atencao', text: '**Cooperação nacional × carta precatória:** ambas servem ao auxílio entre juízos, mas a cooperação é mais ampla, ágil e dispensa hierarquia. NÃO substitui a carta em casos com formalidades específicas (ex.: oitiva de testemunha em outra comarca, em regra, ainda usa precatória).' },
          { type: 'box', kind: 'atencao', text: '**Conexão entre ACP federal e estadual — VAI PARA A JF** (Súmula 489/STJ). A força atrativa da JF é absoluta, prevalece sobre a competência estadual.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 3 (jurisdição):** competência é a medida em que cada juízo exerce a jurisdição una. Ler em conjunto.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 7 (juiz):** as regras de impedimento e suspeição também afetam a competência (em sentido amplo); declarado o impedimento, há remessa a outro juízo.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** incompetência absoluta = preliminar de contestação (art. 337 II); incompetência relativa também (após o CPC/15, NÃO mais em peça apartada).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 20 (ACP):** competência em ações coletivas tem regras próprias (LACP art. 2º, foro do local do dano). Súmula 489/STJ é tema cobrado.' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O juiz é o **sujeito imparcial** da relação processual — terceiro equidistante, investido de jurisdição pelo Estado. Sua atuação no CPC/15 vai muito além do "juiz boca-da-lei" do positivismo clássico: é gestor do processo, condutor da cooperação, garante da efetividade. Os poderes-deveres do art. 139 e o regime de impedimento e suspeição (arts. 144-148) materializam a garantia constitucional do **juiz natural** (CF art. 5º LIII e XXXVII).' },
          { type: 'p', text: '**Poderes-deveres do juiz no CPC (art. 139)** — rol EXEMPLIFICATIVO, com destaque para o inciso **IV — atipicidade dos meios executivos** (medidas necessárias para assegurar o cumprimento de ordem judicial, inclusive em obrigações pecuniárias). Foi o dispositivo mais polêmico do CPC/15: legitimou medidas atípicas como bloqueio de CNH, passaporte, cartão de crédito (com limites na proporcionalidade — STJ Tema 1137).' },
          {
            type: 'table',
            headers: ['Aspecto', 'Impedimento (art. 144)', 'Suspeição (art. 145)'],
            rows: [
              ['Natureza do rol', 'TAXATIVO', 'Exemplificativo (cláusula aberta de imparcialidade)'],
              ['Vício gerado', 'Nulidade ABSOLUTA', 'Nulidade RELATIVA'],
              ['Prazo para arguir', 'NÃO PRECLUI (qualquer tempo)', '15 dias do conhecimento do fato'],
              ['Cabe ação rescisória?', 'SIM (art. 966 II)', 'NÃO'],
              ['Exemplos', 'Cônjuge/parente; advogou; sócio; testemunha', 'Amigo íntimo/inimigo; credor/devedor; presentes']
            ]
          },
          { type: 'p', text: '**Auxiliares da justiça** (CPC arts. 149-175): servidores e particulares que colaboram com o exercício da jurisdição — escrivão, chefe de secretaria, oficial de justiça, perito, depositário, administrador, intérprete, tradutor, mediador, conciliador, partidor, distribuidor, contabilista, regulador de avarias.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Juiz' },
          { type: 'list', items: [
            '**CPC art. 139** — poderes-deveres (12 incisos; rol exemplificativo)',
            '**Art. 139 IV** — atipicidade dos meios executivos (medidas inominadas)',
            '**CPC arts. 140-141** — vedação ao non liquet; congruência (decisão nos limites do pedido)',
            '**CPC art. 142** — fraude ao processo (ilícito processual; juiz pode reprimir de ofício)',
            '**CPC art. 143** — responsabilidade civil do juiz (dolo, fraude, recusa, omissão)',
            '**CPC arts. 144-148** — impedimento e suspeição'
          ]},
          { type: 'h', text: 'Auxiliares da Justiça (CPC arts. 149-175)' },
          { type: 'list', items: [
            '**Arts. 152-155** — escrivão e chefe de secretaria',
            '**Arts. 156-158** — oficial de justiça',
            '**Arts. 156-158** — perito (escolha; deveres; impugnação)',
            '**Arts. 159-161** — depositário e administrador',
            '**Arts. 162-164** — intérprete e tradutor',
            '**Arts. 165-175** — conciliadores e mediadores (CEJUSCs)'
          ]},
          { type: 'h', text: 'Estatutos' },
          { type: 'list', items: [
            '**LC 35/79 (LOMAN)** — Lei Orgânica da Magistratura Nacional',
            '**Lei 13.140/15** — Lei de Mediação',
            '**Resolução CNJ 125/2010** — Política Judiciária Nacional de tratamento adequado de conflitos'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Atipicidade dos meios executivos (art. 139 IV)' },
          { type: 'p', text: 'O CPC/15 expressamente autoriza ao juiz determinar **todas as medidas indutivas, coercitivas, mandamentais ou sub-rogatórias necessárias** para assegurar o cumprimento de ordem judicial, inclusive nas ações que tenham por objeto prestação pecuniária (alteração relevante do regime anterior, restrito à obrigação de fazer/não fazer). Limites: respeito aos direitos fundamentais (dignidade, liberdade de locomoção), proporcionalidade, esgotamento de meios típicos, fundamentação concreta.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.137 (REsp 1.788.950):** as medidas atípicas do art. 139 IV são CABÍVEIS em execução de obrigação pecuniária (suspensão de CNH, passaporte, cartão de crédito), DESDE QUE: (i) esgotados os meios típicos; (ii) demonstrada a existência de patrimônio compatível; (iii) decisão fundamentada e proporcional; (iv) não viole núcleo essencial de direitos fundamentais.' },

          { type: 'h', text: 'Vedação ao non liquet (art. 140)' },
          { type: 'p', text: 'O juiz NÃO se exime de decidir alegando lacuna ou obscuridade do ordenamento. Deve decidir sempre, valendo-se de analogia, costumes, princípios gerais do direito (LINDB art. 4º) e, especialmente após o CPC/15, dos precedentes vinculantes (art. 489 §1º V e VI).' },

          { type: 'h', text: 'Princípio da congruência (art. 141)' },
          { type: 'p', text: 'O juiz decide o mérito **nos limites do que foi proposto pelas partes** — não pode julgar fora (extra petita), além (ultra petita) ou aquém (citra petita). Exceções: pedidos implícitos (juros legais, correção, honorários, custas), matérias de ordem pública (cognição ex officio), tutela coletiva (relativização da congruência em ações coletivas).' },

          { type: 'h', text: 'Responsabilidade civil do juiz (art. 143)' },
          { type: 'p', text: 'Hipóteses TAXATIVAS:' },
          { type: 'list', items: [
            '**I — dolo ou fraude** no exercício de suas funções',
            '**II — recusa, omissão ou retardamento** sem justo motivo de providência que deva ordenar de ofício ou a requerimento'
          ]},
          { type: 'p', text: 'A responsabilização é PESSOAL e DIRETA do magistrado (não do Estado, que pode regredir). Mas o cidadão pode acionar o Estado pela teoria da responsabilidade objetiva (CF art. 37 §6º) por erros judiciários e prisões além do tempo (CF art. 5º LXXV) — independentemente de dolo/fraude do juiz.' },

          { type: 'h', text: 'Impedimento — rol taxativo (art. 144)' },
          { type: 'p', text: 'Hipóteses (memorize a lógica: relação anterior FORTE com o caso ou as partes):' },
          { type: 'list', items: [
            '**I** — interveio como mandatário, perito, MP, testemunha',
            '**II** — conheceu em outro grau de jurisdição (proferiu decisão)',
            '**III** — cônjuge, companheiro ou parente até 3º grau de algum advogado/parte',
            '**IV** — cônjuge/companheiro/parente atua como advogado',
            '**V** — sócio ou membro de direção de PJ parte no processo',
            '**VI** — herdeiro presuntivo, donatário, empregador',
            '**VII** — promove ação contra a parte ou seu advogado',
            '**VIII** — ele próprio ou cônjuge/companheiro são parte ou interessados',
            '**IX** — promotor de demanda futura ou de execução fiscal'
          ]},
          { type: 'p', text: '**Consequências do impedimento NÃO declarado:** nulidade absoluta da sentença; ação RESCISÓRIA cabível (CPC art. 966 II); pode ser arguido a qualquer tempo, em qualquer grau, NÃO PRECLUI antes do trânsito em julgado.' },

          { type: 'h', text: 'Suspeição — rol exemplificativo (art. 145)' },
          { type: 'p', text: 'Hipóteses:' },
          { type: 'list', items: [
            '**I** — amigo íntimo ou inimigo de qualquer das partes ou seus advogados',
            '**II** — recebeu presentes; aconselhou parte; subministrou meios para custas',
            '**III** — credor ou devedor de parte ou cônjuge/parente',
            '**IV** — interessado no julgamento da causa em favor de qualquer das partes'
          ]},
          { type: 'p', text: '**Procedimento (arts. 146-148):** arguição em PEÇA APARTADA, no prazo de 15 dias do conhecimento do fato; suspende o processo; remetida ao tribunal; decisão pelo órgão competente. O juiz pode acolher (e remete autos a substituto) ou rejeitar (e prossegue). Recurso: agravo de instrumento (art. 1.015 III).' },

          { type: 'h', text: 'Auxiliares da justiça — pontos cobrados' },
          { type: 'p', text: '**Perito (arts. 156-158):** confiança técnica do juízo; pode ser substituído (art. 468); responde por dolo, culpa grave, omissão (CPC art. 158 c/c CC art. 186); honorários fixados pelo juiz; suas conclusões NÃO vinculam o juiz (sistema do livre convencimento motivado — art. 371).' },
          { type: 'p', text: '**Conciliadores e mediadores (arts. 165-175):** órgãos auxiliares, com cadastro nos tribunais (Resolução CNJ 125/2010), atuação em CEJUSCs. **Conciliação:** atua quando NÃO há vínculo prévio, pode propor soluções; **Mediação:** atua quando HÁ vínculo prévio, restaura comunicação, NÃO propõe solução.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.832.733:** o juiz pode rejeitar fundamentadamente o laudo pericial quando este não esgotar a controvérsia ou divergir de outras provas. Sistema do livre convencimento motivado vigente (art. 371 CPC).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Impedimento × Suspeição — comparativo memorizável:** **IM**pedimento = **IM**parcialidade quebrada por fato OBJETIVO/PROCESSUAL (parente, advogou); **SUS**peição = imparcialidade quebrada por fato SUBJETIVO/PESSOAL (amizade, ódio, presente). Impedimento é **TAXATIVO**; suspeição é **EXEMPLIFICATIVA**.' },
          { type: 'box', kind: 'macete', text: '**Hipóteses do impedimento — "PARENTE-ATUAÇÃO":** atuou no caso (mandatário, perito, MP, testemunha), juiz em outro grau, parente, sócio/herdeiro/empregador, ele mesmo é parte, promotor da execução.' },
          { type: 'box', kind: 'macete', text: '**Hipóteses da suspeição — "AICRE":** **A**migo íntimo/inimigo, **I**nteressado, **C**redor/devedor, **R**eceptor de presentes, **E**xperiência aconselhada (aconselhou parte).' },
          { type: 'box', kind: 'macete', text: '**Responsabilidade civil do juiz (art. 143) — "DRO":** **D**olo ou fraude, **R**ecusa, **O**missão ou retardamento sem justo motivo.' },
          { type: 'box', kind: 'macete', text: '**Conciliação × Mediação — "Conhecimento prévio":** **C**onciliação (sem vínculo, propõe), **M**ediação (com vínculo, restaura).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Impedimento NÃO PRECLUI** — pode ser arguido a qualquer tempo. Suspeição precluí em 15 dias. Erro frequente: confundir os prazos.' },
          { type: 'box', kind: 'atencao', text: '**Atipicidade dos meios executivos (art. 139 IV) tem LIMITES:** respeito a direitos fundamentais, proporcionalidade, esgotamento de meios típicos. Não é "carta branca". STJ Tema 1.137 fixou os critérios.' },
          { type: 'box', kind: 'atencao', text: '**Laudo pericial NÃO vincula o juiz** (art. 479; livre convencimento motivado — art. 371). Mas a fundamentação para divergir deve ser robusta.' },
          { type: 'box', kind: 'atencao', text: '**Princípio da congruência admite exceções:** pedidos implícitos (juros, correção, honorários, custas — art. 322 §1º), tutela coletiva, matérias de ordem pública.' },
          { type: 'box', kind: 'atencao', text: '**Suspeição arguida em peça apartada — não na contestação.** Pegadinha clássica. Diferente das demais matérias preliminares (art. 337), que vão na contestação.' },
          { type: 'box', kind: 'atencao', text: '**Conciliador NÃO é mediador.** Conciliador propõe solução; mediador facilita o diálogo. Aplicação típica: conciliação para causas sem vínculo (consumo); mediação para causas com vínculo (família, condomínio).' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 1 (normas fundamentais):** os poderes do juiz materializam a cooperação (art. 6º) e a vedação à decisão-surpresa (art. 10).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 2 (princípios e DH):** juiz natural é princípio constitucional (art. 5º LIII e XXXVII); impedimento e suspeição são desdobramentos.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 6 (competência):** juiz impedido equipara-se a juiz incompetente — remessa ao substituto.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 15 (execução):** o art. 139 IV é aplicado massivamente em cumprimento de sentença e execução. Estudar o STJ Tema 1.137 com profundidade.' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Os **atos processuais** são manifestações de vontade que produzem efeitos no processo. Praticam-se por todos os sujeitos: juiz, partes, MP, auxiliares, terceiros. O CPC disciplina forma, tempo, lugar, comunicações, prazos e nulidades nos arts. 188-275 — capítulo MASSIVO em conteúdo e absolutamente clássico em prova de concurso.' },
          { type: 'p', text: '**Forma — instrumentalidade (CPC arts. 188-192):** os atos podem ser praticados por qualquer meio LÍCITO (regra da liberdade de forma); só quando a lei expressamente exigir, deve haver forma especial. Vigora o princípio da **instrumentalidade das formas**: ato que atinge a finalidade, ainda que sem a forma legal, é VÁLIDO se não houver prejuízo (art. 188 § único + art. 277).' },
          { type: 'p', text: '**Tempo (CPC arts. 212-216):** atos praticam-se em dias úteis, das **6h às 20h**. Atos urgentes podem ser praticados em qualquer tempo. Citação e intimação podem ser feitas até as 21h (Lei 13.793/19). **Férias forenses (recesso)**: 20/12 a 20/01 — suspende prazos, mas não atos urgentes.' },
          { type: 'p', text: '**Lugar (CPC art. 217):** atos praticam-se na sede do juízo, salvo: (i) deferência ou interesse da justiça; (ii) obstáculo arguido pelo interessado e acolhido pelo juiz; (iii) atos itinerantes (juízo viajante).' },
          {
            type: 'table',
            headers: ['Categoria de prazo', 'Quem fixa', 'Pode ser alterado?', 'Consequência da inobservância'],
            rows: [
              ['Legal', 'A lei (CPC ou especial)', 'Não, em regra', 'Preclusão temporal'],
              ['Judicial', 'O juiz', 'Sim (art. 139 VI)', 'Preclusão temporal'],
              ['Dilatório', 'Pode ser ampliado por convenção das partes (art. 190)', 'Sim, por NJP', 'Preclusão se inerte'],
              ['Peremptório', 'NÃO pode ser reduzido por acordo, mas pode ser ampliado pelo juiz (calamidade — art. 222)', 'Limitado', 'Preclusão']
            ]
          },
          { type: 'p', text: '**Contagem dos prazos** — REGRA do CPC/15: **dias úteis** (art. 219), excluindo o dia do começo e incluindo o do vencimento (art. 224). Prazos em horas correm continuamente.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Atos processuais — geral' },
          { type: 'list', items: [
            '**CPC arts. 188-192** — forma, instrumentalidade',
            '**Art. 190** — negócios jurídicos processuais (NJP) atípicos',
            '**Art. 191** — calendário processual',
            '**Arts. 193-199** — atos por meio eletrônico',
            '**Arts. 200-203** — atos das partes; atos do juiz (despachos, decisões, sentenças, acórdãos)',
            '**Arts. 206-211** — atos do escrivão/chefe de secretaria; numeração e registro'
          ]},
          { type: 'h', text: 'Tempo e lugar (arts. 212-218)' },
          { type: 'list', items: [
            '**Art. 212** — horário (6h-20h, dias úteis)',
            '**Art. 213** — atos eletrônicos podem ser praticados a qualquer tempo (até 24h do último dia)',
            '**Art. 214** — recesso forense (20/12 a 20/01)',
            '**Arts. 215-216** — feriados, suspensão',
            '**Art. 217** — lugar (sede do juízo, salvo exceções)'
          ]},
          { type: 'h', text: 'Prazos (arts. 218-235)' },
          { type: 'list', items: [
            '**Art. 219** — contagem em dias ÚTEIS',
            '**Art. 220** — suspensão dos prazos no recesso forense',
            '**Art. 221** — suspensão por motivo de força maior',
            '**Art. 222** — ampliação por dificuldade de transporte (até 60 dias)',
            '**Art. 224** — exclusão do dia do começo, inclusão do vencimento',
            '**Art. 229** — prazo em dobro para litisconsortes com advogados de escritórios diferentes (apenas em autos físicos)',
            '**Arts. 231-233** — termo inicial de prazos (citação, intimação)'
          ]},
          { type: 'h', text: 'Comunicações (arts. 238-275)' },
          { type: 'list', items: [
            '**Arts. 238-259** — citação',
            '**Art. 246** — modalidades: postal (regra), eletrônica, por oficial, edital, hora certa',
            '**Art. 252** — citação por hora certa (suspeita de ocultação)',
            '**Arts. 256-259** — citação por edital',
            '**Arts. 269-275** — intimação',
            '**Art. 270** — intimação eletrônica como REGRA'
          ]},
          { type: 'h', text: 'Nulidades (arts. 276-283)' },
          { type: 'list', items: [
            '**Art. 277** — instrumentalidade das formas (forma atingida, ato válido)',
            '**Art. 278** — nulidade declarada de ofício',
            '**Art. 282** — princípio do prejuízo + aproveitamento',
            '**Art. 283** — citação ou intimação inválida supridas pelo comparecimento espontâneo'
          ]},
          { type: 'h', text: 'Distribuição (arts. 284-290) e Valor da causa (arts. 291-293)' },
          { type: 'list', items: [
            '**Art. 285** — distribuição livre (regra)',
            '**Art. 286** — distribuição por dependência (prevenção)',
            '**Art. 292** — critérios legais para o valor da causa',
            '**Art. 293** — impugnação ao valor (na contestação)'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Negócios jurídicos processuais (art. 190)' },
          { type: 'p', text: 'Inovação revolucionária do CPC/15. As partes plenamente capazes podem, em causas que admitam autocomposição, **convencionar sobre seus ônus, poderes, faculdades e deveres processuais**, antes ou durante o processo. Ex.: cláusula de prazo dilatório, escolha consensual de perito, dispensa de fase probatória, calendário processual (art. 191). Limites: matérias indisponíveis, ausência de consentimento, abusividade.' },

          { type: 'h', text: 'Contagem dos prazos em dias úteis (art. 219)' },
          { type: 'p', text: '**Inovação polêmica do CPC/15** que reduziu drasticamente as armadilhas processuais. Aplica-se aos prazos PROCESSUAIS (não materiais). Exclui o dia do começo e inclui o do vencimento. **Não se aplica em:** Lei do JEC (Lei 9.099/95 — Súmula CJF 99 e enunciados FONAJE — prazos contínuos), processo do trabalho (CLT art. 775 — modificada pela Lei 13.467/17, agora também em dias úteis); processo eleitoral (CE art. 16 — contínuos).' },

          { type: 'h', text: 'Prazo em dobro para litisconsortes (art. 229)' },
          { type: 'p', text: 'Advogados de escritórios diferentes em mesma causa têm prazo em DOBRO — limite art. 229 §2º: NÃO se aplica em autos eletrônicos (já há cópia digital permanente). Importante: NÃO se acumula com a dobra do MP/DP/AP (art. 229 §2º).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.813.684 (Tema 1.024):** o prazo em dobro do art. 229 NÃO se aplica quando o processo tramita eletronicamente (mesmo que o réu tenha se manifestado em meio físico). Tese vinculante.' },

          { type: 'h', text: 'Suspensão × Interrupção dos prazos' },
          { type: 'p', text: 'Distinção fundamental — sempre cobrada:' },
          {
            type: 'table',
            headers: ['Suspensão', 'Interrupção'],
            rows: [
              ['Para o curso do prazo', 'Zera o prazo já transcorrido'],
              ['Retoma do ponto onde parou', 'Recomeça do zero'],
              ['Ex.: férias forenses (art. 220)', 'Ex.: oposição de embargos de declaração (art. 1.026 CPC, na fase recursal — interrompe; mas, nas instâncias ordinárias após CPC/15, INTERROMPE para todas as partes)']
            ]
          },

          { type: 'h', text: 'Citação — modalidades (art. 246)' },
          { type: 'list', items: [
            '**Postal (correios) — REGRA GERAL** desde o CPC/15 (art. 247). Exceções: ações de estado, citando incapaz, citando pessoa jurídica de direito público, processo de execução (art. 247 II — apenas pessoal), citando residente em local não atendido pelo correio',
            '**Eletrônica (art. 246 V e §1º)** — entes públicos, empresas privadas e advogados devem se cadastrar; preferencial. Prazo: 5 dias para confirmação',
            '**Por oficial de justiça** — quando não couber a postal/eletrônica',
            '**Por edital (arts. 256-259)** — réu desconhecido, incerto, ou ignorado paradeiro (após esgotadas tentativas — Súmula 414/STJ)',
            '**Por hora certa (art. 252)** — suspeita de ocultação após 2 tentativas de oficial em horários diversos'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 414:** "A citação por edital na execução fiscal é cabível APENAS quando esgotadas as demais modalidades de citação." Aplica-se por analogia ao processo civil em geral.' },

          { type: 'h', text: 'Citação inválida — efeitos (art. 239 §1º + art. 283)' },
          { type: 'p', text: 'A citação válida, ainda que ordenada por juízo incompetente: (i) induz LITISPENDÊNCIA; (ii) torna LITIGIOSA a coisa; (iii) constitui em MORA o devedor (CC art. 397 §único); (iv) interrompe a PRESCRIÇÃO (retroagindo à data da propositura — art. 240 §1º CPC + CC art. 202 I). **A citação inválida** é suprida pelo comparecimento espontâneo (art. 239 §1º + art. 283).' },

          { type: 'h', text: 'Sistema de nulidades — 4 princípios fundamentais' },
          { type: 'list', items: [
            '**Causalidade (art. 281):** a nulidade de um ato contamina os subsequentes que dele dependam, mas não os independentes',
            '**Instrumentalidade (art. 277):** ato que atinge a finalidade, ainda que sem forma legal, é VÁLIDO',
            '**Prejuízo (art. 282 §1º):** *pas de nullité sans grief* — sem prejuízo concreto, não se decreta nulidade',
            '**Aproveitamento (art. 282):** o juiz pode determinar repetição/suprimento; só se DECLARA nulidade quando insanável'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.857.731 e jurisprudência consolidada:** a nulidade do art. 178 (falta de intimação do MP) é ABSOLUTA, mas exige demonstração de prejuízo concreto à parte tutelada (incapaz, etc.). Princípio do prejuízo aplicado mesmo às nulidades absolutas.' },

          { type: 'h', text: 'Valor da causa (art. 292)' },
          { type: 'p', text: 'Critérios LEGAIS por matéria — sempre tem valor (art. 291), mesmo nas causas sem conteúdo econômico imediato:' },
          { type: 'list', items: [
            '**I — cobrança:** valor cobrado',
            '**II — divisão/demarcação/reivindicação:** valor do imóvel',
            '**III — alimentos:** soma de 12 prestações mensais',
            '**IV — divórcio/separação/anulação:** valor dos bens',
            '**V — indenização:** valor pretendido (mesmo dano moral)',
            '**VI — casos não previstos:** estimação razoável'
          ]},
          { type: 'p', text: 'Impugnação ao valor da causa: PRELIMINAR de contestação (art. 293 + art. 337). NÃO é mais peça apartada (CPC/73 era).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**4 princípios das nulidades — "CIPA":** **C**ausalidade, **I**nstrumentalidade, **P**rejuízo, **A**proveitamento.' },
          { type: 'box', kind: 'macete', text: '**Modalidades de citação — "PEHEEO" (em ordem de preferência):** **P**ostal (regra), **E**letrônica, **H**ora certa, **E**dital (último recurso), por **E**fetivo do juízo (oficial), também menos usada por **O**utro juízo (carta precatória).' },
          { type: 'box', kind: 'macete', text: '**Suspensão × Interrupção — pneu:** **S**uspende = pausa (continua de onde parou); **I**nterrompe = "I" como zerar (recomeça do zero).' },
          { type: 'box', kind: 'macete', text: '**Prazo em dobro do art. 229 (litisconsortes) — só em PAPEL.** Eletrônico não tem dobra. Mnemônico: "papel dobra, pixel não".' },
          { type: 'box', kind: 'macete', text: '**Atos do juiz — "DDSA":** **D**espacho (mero impulso), **D**ecisão interlocutória (resolve questão sem pôr fim), **S**entença (resolve mérito ou extingue), **A**córdão (colegiado).' },
          { type: 'box', kind: 'macete', text: '**Recesso forense — 20/12 a 20/01.** Mnemônico: "vinte/doze a vinte/um — vinte e UM dias úteis ganhos".' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Prazo em dias úteis — só PROCESSUAIS.** Prazos materiais (decadência, prescrição) seguem CC. Erro frequente: contar prescrição em dias úteis.' },
          { type: 'box', kind: 'atencao', text: '**Prazo em dobro do art. 229 NÃO se aplica em autos ELETRÔNICOS.** STJ Tema 1.024 firmou. Banca cobra MUITO.' },
          { type: 'box', kind: 'atencao', text: '**Citação inválida = suprida pelo comparecimento espontâneo** (art. 239 §1º + art. 283). Mas o réu pode arguir a nulidade na primeira oportunidade — se calar, convalida.' },
          { type: 'box', kind: 'atencao', text: '**Citação em sábado/domingo/feriado:** regra geral PERMITE no processo civil; já no processo de EXECUÇÃO há regra restritiva (mas afastada na prática para citação ordinária em dia útil seguinte).' },
          { type: 'box', kind: 'atencao', text: '**Embargos de declaração INTERROMPEM o prazo recursal (CPC art. 1.026)** — para todas as partes, na sistemática do CPC/15. Não é mais simples suspensão.' },
          { type: 'box', kind: 'atencao', text: '**Princípio do prejuízo aplica-se ATÉ a nulidade absoluta** (CPC art. 282 §2º). Sem prejuízo concreto, não há nulidade. Princípio "*pas de nullité sans grief*" tem aplicação ampla.' },
          { type: 'box', kind: 'atencao', text: '**Calendário processual (art. 191) ≠ negócio jurídico processual (art. 190).** Calendário é específico (datas para atos); NJP é amplo (regras procedimentais). Ambos exigem capacidade, livre disposição, contraditório.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 1 (lei processual no tempo):** o isolamento dos atos processuais (art. 14) é base lógica para o regime de prazos sob lei nova.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP/Adv. Pública/Defensoria):** prazos em dobro nas funções essenciais — não se acumulam com o do art. 229.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** os atos processuais são a "matéria-prima" de toda a marcha procedimental — petição, citação, contestação, audiência, sentença.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** prazos recursais (15 dias regra; 5 dias embargos) seguem o regime geral (úteis). Embargos de declaração interrompem.' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: '**Tutela provisória** é o gênero adotado pelo CPC/15 (arts. 294-311) para todas as formas de tutela diferenciada concedida com base em cognição SUMÁRIA (não exauriente). Substitui a antiga separação binária (tutela cautelar × antecipatória) por uma sistemática unificada com **dois fundamentos** (urgência e evidência) e **duas naturezas** (antecipada e cautelar).' },
          {
            type: 'table',
            headers: ['Tutela provisória', 'Fundamento', 'Natureza', 'Requisitos', 'Procedimento'],
            rows: [
              ['Antecipada de urgência', 'Urgência', 'SATISFATIVA (entrega o bem)', 'Fumus + periculum (art. 300)', 'Antecedente (art. 303) ou incidental'],
              ['Cautelar de urgência', 'Urgência', 'CONSERVATIVA (assegura)', 'Fumus + periculum (art. 300)', 'Antecedente (art. 305) ou incidental'],
              ['Tutela de evidência', 'Evidência', 'Satisfativa', 'Hipóteses TAXATIVAS (art. 311)', 'Apenas incidental']
            ]
          },
          { type: 'p', text: '**Para o MP — vantagem direta:** o MP é credor cotidiano de tutelas provisórias em ACP (cautelares para indisponibilidade de bens, antecipadas para tutela ambiental, sanitária, infância). Tutela de evidência é arma poderosa em casos de tese consolidada (ex.: precatório, falha em serviço público).' },
          { type: 'p', text: '**Tutela antecipada antecedente (art. 303)** — inovação radical: a parte pode pedir APENAS a tutela urgente, com indicação sumária do pedido principal e do direito, deferindo o aprofundamento da causa de pedir e do pedido (autoria PRINCIPAL) para 15 dias após a concessão (art. 303 §1º I). Se NÃO houver aditamento, o processo é extinto (art. 303 §2º).' },
          { type: 'p', text: '**Estabilização da tutela antecipada antecedente (art. 304) — Ó GRANDE INOVAÇÃO:** se concedida e NÃO impugnada por **AGRAVO DE INSTRUMENTO** pelo réu, ela se TORNA ESTÁVEL e o processo é EXTINTO. Por dois anos (art. 304 §5º), qualquer das partes pode propor ação para revê-la, reformá-la ou invalidá-la. Após esse prazo, há decadência do direito de revisão (mas a estabilização NÃO É coisa julgada — STJ).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'CPC — Disposições gerais (arts. 294-299)' },
          { type: 'list', items: [
            '**Art. 294** — gênero tutela provisória (urgência e evidência)',
            '**Art. 295** — pedido principal e provisório',
            '**Art. 296** — provisoriedade; possibilidade de revisão',
            '**Art. 297** — efetivação (técnica executiva)',
            '**Art. 298** — fundamentação obrigatória',
            '**Art. 299** — competência (juízo da causa principal)'
          ]},
          { type: 'h', text: 'Tutela de URGÊNCIA (arts. 300-302)' },
          { type: 'list', items: [
            '**Art. 300** — requisitos: probabilidade + perigo (caput); caução pode ser exigida (§1º); concessão liminar ou após justificação (§2º); irreversibilidade impede deferimento (§3º — mas STJ relativiza em direito à saúde)',
            '**Art. 301** — modalidades cautelares típicas (arresto, sequestro, busca e apreensão, exibição) — rol exemplificativo',
            '**Art. 302** — responsabilidade objetiva pelo dano causado por tutela injusta'
          ]},
          { type: 'h', text: 'Tutela ANTECIPADA antecedente (arts. 303-304)' },
          { type: 'list', items: [
            '**Art. 303** — pedido autônomo de tutela antecipada antecedente; aditamento em 15 dias',
            '**Art. 304** — ESTABILIZAÇÃO se não houver agravo'
          ]},
          { type: 'h', text: 'Tutela CAUTELAR antecedente (arts. 305-310)' },
          { type: 'list', items: [
            '**Art. 305** — petição cautelar autônoma; 30 dias para principal',
            '**Art. 305 § único** — FUNGIBILIDADE: pedido cautelar pode ser conhecido como antecipado (e vice-versa)',
            '**Art. 308** — pedido principal nos mesmos autos'
          ]},
          { type: 'h', text: 'Tutela de EVIDÊNCIA (art. 311)' },
          { type: 'list', items: [
            '**Art. 311 I** — abuso do direito de defesa ou propósito protelatório',
            '**Art. 311 II** — alegações de fato comprovadas DOCUMENTALMENTE + tese firmada em casos repetitivos ou súmula vinculante',
            '**Art. 311 III** — pedido reipersecutório baseado em prova documental adequada (locação, depósito)',
            '**Art. 311 IV** — petição inicial instruída com prova documental SUFICIENTE dos fatos e o réu não opõe prova capaz de gerar dúvida razoável'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Requisitos da tutela de URGÊNCIA (art. 300)' },
          { type: 'p', text: 'Dois requisitos cumulativos:' },
          { type: 'list', items: [
            '**Probabilidade do direito (fumus boni iuris)** — verossimilhança apurada em cognição sumária; mais robusto que mera plausibilidade',
            '**Perigo de dano OU risco ao resultado útil do processo** — periculum in mora; deve ser CONCRETO, atual, demonstrado'
          ]},
          { type: 'p', text: '**Limite (art. 300 §3º):** a tutela antecipada NÃO será concedida quando houver perigo de IRREVERSIBILIDADE dos efeitos da decisão. Mas o STJ relativiza essa proibição em direitos fundamentais (saúde, vida) — ponderação constitucional supera o óbice formal.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.815.500 (Tema 1.090):** o juiz pode conceder tutela antecipada para fornecimento de medicamento mesmo em situação de irreversibilidade fática, desde que demonstrada a probabilidade do direito e o perigo de dano à saúde/vida. Ponderação constitucional supera o art. 300 §3º.' },

          { type: 'h', text: 'Tutela de EVIDÊNCIA — independe de URGÊNCIA' },
          { type: 'p', text: 'Inovação genial do CPC/15: dispensa o perigo de dano (não há urgência, há "evidência" do direito). Justifica-se quando o direito é tão claro que aguardar a sentença final seria pôr ônus injusto sobre quem tem razão. **Rol TAXATIVO** (art. 311 — apenas as 4 hipóteses) — não admite analogia.' },
          { type: 'p', text: 'Hipótese mais usada na prática: **inciso II** — alegações comprovadas documentalmente + tese firmada em **casos repetitivos** (recursos repetitivos do STJ, repercussão geral do STF, IRDR) ou em **súmula vinculante**. Essa é a "PORTA DE ENTRADA" para tutela de evidência em causas seriadas.' },

          { type: 'h', text: 'Tutela antecipada antecedente — passo a passo (art. 303)' },
          { type: 'list', items: [
            '**1. Petição inicial limitada:** indica-se o pedido de tutela antecipada antecedente, a indicação do pedido de tutela final, a exposição da lide, do direito e do perigo (art. 303 §5º — autor deve indicar que pretende valer-se do procedimento)',
            '**2. Concessão (ou não):** o juiz analisa em cognição sumária',
            '**3. Aditamento (art. 303 §1º I):** se concedida, o autor tem 15 dias para aditar a inicial (incluindo causa de pedir + pedido final + provas), no MESMO processo, sem novas custas',
            '**4. Não aditamento:** processo extinto sem mérito',
            '**5. Citação do réu:** após aditamento'
          ]},

          { type: 'h', text: 'ESTABILIZAÇÃO (art. 304)' },
          { type: 'p', text: 'Mecanismo PROCESSUAL único: a tutela antecipada antecedente concedida e NÃO IMPUGNADA por agravo torna-se ESTÁVEL e o processo é EXTINTO (art. 304 §1º). Conseqüências:' },
          { type: 'list', items: [
            '**Decisão estabilizada produz efeitos** — pode ser executada normalmente',
            '**Por 2 ANOS (art. 304 §5º)** — qualquer das partes pode propor ação para revê-la, reformá-la ou invalidá-la (juízo originalmente competente; autuação em apartado; cognição plena)',
            '**Após 2 anos:** decadência do direito de revisar — mas STJ defende que NÃO há coisa julgada (decisão estabilizada é definitiva no plano processual mas não material)',
            '**Tese vinculante: STJ Tema 1.099** — a estabilização ocorre AINDA QUE o réu apresente outra forma de impugnação (contestação, p. ex.) — o que conta é a ausência de AGRAVO DE INSTRUMENTO'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.099 (REsp 1.997.347):** a estabilização ocorre **somente** se o réu não interpuser AGRAVO DE INSTRUMENTO contra a decisão concessiva. Outras formas de impugnação (contestação, requerimento de revogação) NÃO impedem a estabilização. Tese consolidada.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.760.966 e jurisprudência:** a estabilização do art. 304 NÃO gera coisa julgada material, mas sim "imutabilidade processual relativa". Após os 2 anos, há decadência do direito de revisão, mas teoricamente o direito material discutido pode ser objeto de outra ação (controvertido).' },

          { type: 'h', text: 'Cautelar antecedente (art. 305) e fungibilidade' },
          { type: 'p', text: 'Petição autônoma com requisitos resumidos (lide, fundamento da medida, indicação do pedido principal). Concedida, prazo de **30 DIAS** para o autor apresentar pedido principal NOS MESMOS AUTOS (art. 308). **Fungibilidade (art. 305 § único):** se o juiz entender que o pedido cautelar deveria ter sido formulado como antecipado (ou vice-versa), determina conversão. Aplica-se também ao § único do 303.' },

          { type: 'h', text: 'Recurso cabível — agravo de instrumento (art. 1.015 I)' },
          { type: 'p', text: '**Tema essencial:** decisão sobre tutela provisória — concessão, denegação, alteração — é recorrível por **agravo de instrumento** (art. 1.015 I), com prazo de 15 dias úteis. A omissão do agravo é o pressuposto da estabilização. NÃO se admite mandado de segurança contra decisão recorrível por agravo (Súmula 267/STF analógica).' },

          { type: 'h', text: 'Responsabilidade pelo dano (art. 302)' },
          { type: 'p', text: '**Responsabilidade OBJETIVA** do beneficiário pela tutela injustamente concedida (independe de dolo/culpa). Hipóteses (art. 302):' },
          { type: 'list', items: [
            'Sentença desfavorável ao requerente',
            'Tutela cessada após o transcurso do prazo para aditamento (art. 303 §2º)',
            'Cessação da eficácia em qualquer hipótese legal',
            'Sentença que reconheceu a inexistência da obrigação'
          ]}
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Tutela provisória — esquema-mãe:** **G**ênero (provisória) → **2F**undamentos (Urgência, Evidência) → **2N**aturezas (Antecipada/Satisfativa, Cautelar/Conservativa).' },
          { type: 'box', kind: 'macete', text: '**Requisitos da urgência — "PRO-PE":** **PRO**babilidade do direito (fumus) + **PE**rigo (de dano OU resultado útil).' },
          { type: 'box', kind: 'macete', text: '**Tutela de evidência — 4 hipóteses "ABS-TES-DOC-EVI":** I — **ABS**uso de defesa; II — **TES**e firmada (repetitivos/SV); III — **DOC**umental adequada (reipersecutório); IV — **EVI**dência da inicial documental.' },
          { type: 'box', kind: 'macete', text: '**Estabilização (art. 304) — só ocorre se o réu não AGRAVAR.** Outras impugnações não impedem (Tema 1.099/STJ). Mnemônico: "**A estabilização exige inércia ABSOLUTA quanto ao agravo**".' },
          { type: 'box', kind: 'macete', text: '**Prazos críticos:** AGRAVO contra tutela = 15 dias; ADITAMENTO da antecipada antecedente = 15 dias; PEDIDO PRINCIPAL após cautelar antecedente = 30 dias; AÇÃO DE REVISÃO da estabilização = 2 anos.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Tutela de evidência NÃO TEM perigo como requisito** — a "evidência" supre. Erro frequente em prova de múltipla escolha.' },
          { type: 'box', kind: 'atencao', text: '**Estabilização NÃO é coisa julgada material** (STJ — REsp 1.760.966). Por 2 anos cabe ação revisional. A imutabilidade é processual, não material.' },
          { type: 'box', kind: 'atencao', text: '**Para estabilizar, basta NÃO HAVER AGRAVO** — Tema 1.099/STJ. Réu pode contestar, requerer revogação, etc., e ainda assim haverá estabilização. Pegadinha clássica.' },
          { type: 'box', kind: 'atencao', text: '**Irreversibilidade (art. 300 §3º) é flexibilizável** em direitos fundamentais (saúde, vida) — STJ Tema 1.090. Não é vedação absoluta.' },
          { type: 'box', kind: 'atencao', text: '**Fungibilidade entre antecipada e cautelar (art. 305 § único)** — admitida pelo CPC/15 expressamente. Não confundir com fungibilidade entre tutela provisória e ações autônomas (impossível).' },
          { type: 'box', kind: 'atencao', text: '**Responsabilidade pela tutela injusta = OBJETIVA (art. 302).** Não se exige dolo ou culpa. Banca pode tentar inserir requisito subjetivo.' },
          { type: 'box', kind: 'atencao', text: '**Tutela cautelar antecedente — pedido principal nos MESMOS AUTOS** (não em ação autônoma como no CPC/73). Inovação importante.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** o MP usa massivamente tutelas provisórias em ACP — indisponibilidade de bens (improbidade), tutela ambiental, sanitária, infância. **Vivência institucional da candidata** = vantagem grande.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** tutelas incidentais ocorrem dentro do procedimento comum. Antecipadas antecedentes têm rito próprio.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** tutela é decisão interlocutória → agravo de instrumento (art. 1.015 I).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 20 (ACP):** ACP cautelar e antecipada são ferramenta cotidiana do MP. Estudo conjunto recomendado.' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A relação jurídica processual nasce, desenvolve-se e extingue-se segundo regras próprias que delimitam três grandes momentos: **formação** (arts. 312-317), **suspensão** (arts. 313-315) e **extinção** (arts. 485-487). É um capítulo curto mas estratégico — toca em institutos transversais como litispendência, coisa julgada, perempção, prescrição e decadência.' },
          {
            type: 'table',
            headers: ['Momento', 'Marco', 'Efeitos'],
            rows: [
              ['Formação para o autor', 'Propositura (protocolo da PI ou distribuição) — art. 312', 'Interrompe prescrição retroativamente (art. 240 §1º), em relação ao autor'],
              ['Formação para o réu', 'Citação válida — arts. 238-239', 'Litispendência, coisa litigiosa, mora; interrompe prescrição (em relação ao réu)'],
              ['Suspensão', 'Hipóteses do art. 313', 'Pausa o processo; prazos param e retomam'],
              ['Extinção sem mérito', 'Hipóteses do art. 485', 'Não impede repropositura (salvo perempção)'],
              ['Extinção com mérito', 'Hipóteses do art. 487', 'Faz coisa julgada material — impede repropositura']
            ]
          },
          { type: 'p', text: '**Formação:** a propositura ocorre com o protocolo (ou distribuição, onde houver — art. 312). Do ponto de vista do autor, gera efeitos imediatos (interrupção da prescrição, prevenção do juízo). Do ponto de vista do réu, só com a citação válida há litispendência, coisa litigiosa e os demais efeitos do art. 240.' },
          { type: 'p', text: '**Suspensão (art. 313):** o processo pausa, prazos não correm. Diferentes da extinção (que põe fim ao processo). Hipóteses principais: morte/perda de capacidade de parte ou advogado; convenção das partes (até 6 meses); arguição de impedimento ou suspeição; admissão de IRDR; força maior; parto/adoção da advogada (art. 313 §6º — Lei 13.363/16 + Lei 14.752/23).' },
          { type: 'p', text: '**Extinção:** o CPC distingue claramente:' },
          { type: 'list', items: [
            '**SEM resolução de mérito (art. 485)** — 10 hipóteses; gera apenas coisa julgada FORMAL; cabe repropositura (salvo no caso de perempção, art. 486 §3º)',
            '**COM resolução de mérito (art. 487)** — 3 hipóteses; gera coisa julgada MATERIAL; impede repropositura'
          ]}
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Formação (arts. 312-317)' },
          { type: 'list', items: [
            '**Art. 312** — propositura para o autor (protocolo)',
            '**Art. 240** — efeitos da citação (litispendência, coisa litigiosa, mora, interrupção da prescrição)',
            '**Art. 240 §1º** — interrupção da prescrição RETROAGE à data da propositura',
            '**Art. 317** — antes de extinguir, juiz deve dar oportunidade de sanar vício'
          ]},
          { type: 'h', text: 'Suspensão (arts. 313-315)' },
          { type: 'list', items: [
            '**Art. 313 I** — morte ou perda de capacidade processual da parte/advogado',
            '**Art. 313 II** — convenção das partes (até 6 meses, art. 313 §4º)',
            '**Art. 313 III** — arguição de impedimento ou suspeição',
            '**Art. 313 IV** — admissão de IRDR ou IAC',
            '**Art. 313 V** — prejudicial externa (até 1 ano, art. 313 §4º)',
            '**Art. 313 VI** — força maior',
            '**Art. 313 VII** — concessão de parto/adoção (Lei 14.752/23)',
            '**Art. 314** — durante a suspensão, vedados atos processuais; salvo urgentes'
          ]},
          { type: 'h', text: 'Extinção (arts. 485-487)' },
          { type: 'list', items: [
            '**Art. 485** — extinção SEM mérito (10 incisos)',
            '**Art. 485 III** — abandono pelo autor (intimação pessoal + 5 dias para suprir)',
            '**Art. 485 IV** — falta de pressupostos processuais',
            '**Art. 485 V** — perempção, litispendência ou coisa julgada',
            '**Art. 485 VI** — falta de legitimidade ou interesse',
            '**Art. 485 VIII** — desistência da ação (precisa de anuência do réu se já contestou — §4º)',
            '**Art. 486** — impede repropositura (perempção — §3º)',
            '**Art. 487** — extinção COM mérito',
            '**Art. 487 I** — acolher/rejeitar pedido',
            '**Art. 487 II** — decadência ou prescrição',
            '**Art. 487 III** — homologação: transação, renúncia, reconhecimento'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Marcos de formação — autor × réu' },
          { type: 'p', text: 'Para o **autor**, o processo se forma com a **propositura** (protocolo da PI — art. 312). Já produz efeitos: interrupção da prescrição retroativa à propositura, prevenção do juízo, dever de boa-fé. Para o **réu**, só há processo com **citação válida** (art. 240). Antes disso, ainda não está em juízo.' },

          { type: 'h', text: 'Suspensão — duas categorias' },
          { type: 'p', text: 'Hipóteses **necessárias** (independem de juízo): morte da parte/advogado, força maior, parto/adoção da advogada. Hipóteses **dependentes de juízo** ou requerimento: convenção das partes, prejudicial externa, IRDR. **Limites temporais:** convenção das partes — até 6 meses (art. 313 §4º); prejudicial externa — até 1 ano. Findos, processo retoma.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.114 (REsp 1.957.301):** o CPC/15 estendeu a suspensão por parto da advogada também à advogada autônoma — não apenas empregada. Lei 14.752/23 consolidou a interpretação.' },

          { type: 'h', text: 'Extinção sem mérito (art. 485) — pontos críticos' },
          { type: 'p', text: '**Inciso III — abandono pelo autor:** depende de DUPLO requisito: (a) intimação PESSOAL do autor para suprir em 5 dias; (b) requerimento do RÉU (Súmula 240/STJ — não pode ser de ofício após contestação). Lógica: se o réu já contestou, tem interesse em prosseguir.' },
          { type: 'p', text: '**Inciso V — perempção, litispendência, coisa julgada:** matérias de ordem pública, declaráveis de ofício em qualquer grau (art. 485 §3º).' },
          { type: 'p', text: '**Inciso VIII — desistência:** se já contestou, precisa do consentimento do réu (art. 485 §4º). Se não contestou, basta o ato unilateral do autor.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 240:** "A extinção do processo, por abandono da causa pelo autor, depende de requerimento do réu." Princípio basilar — vedado o juiz extinguir de ofício após a contestação.' },

          { type: 'h', text: 'Perempção (art. 486 §3º)' },
          { type: 'p', text: 'Sanção processual: o autor que **3 vezes** der causa à extinção por abandono (art. 485 III) **NÃO PODERÁ** propor nova ação contra o mesmo réu, com o mesmo objeto. Exceção única à regra de que extinção sem mérito permite repropositura. Embora rara na prática, é tema clássico de prova.' },

          { type: 'h', text: 'Extinção COM mérito (art. 487)' },
          { type: 'p', text: 'Três hipóteses TAXATIVAS:' },
          { type: 'list', items: [
            '**I — Acolhe ou rejeita o pedido** (sentença de procedência ou improcedência)',
            '**II — Decadência ou prescrição** — embora extingam o direito material, o art. 487 II expressamente as classifica como sentença de mérito (geram coisa julgada material!)',
            '**III — Homologação:** transação, renúncia ao direito, reconhecimento da procedência do pedido'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — sentença que pronuncia prescrição/decadência (art. 487 II) gera coisa julgada material.** Embora a parte não chegue a discutir o mérito propriamente dito, a decisão impede a repropositura. Diferença CRUCIAL em relação à extinção sem mérito.' },

          { type: 'h', text: 'Princípio da primazia do mérito (art. 317)' },
          { type: 'p', text: 'Antes de extinguir o processo sem mérito por vício sanável, o juiz **deve oportunizar a correção** (art. 317). Concretiza a primazia do mérito (art. 4º) e a cooperação (art. 6º). Exemplos: emenda da inicial (art. 321), suprimento da capacidade processual (art. 76), regularização de representação.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Marcos da formação — "autor PROtocola, réu CIta":** **PRO**positura = autor (efeitos imediatos). **CI**tação = réu (litispendência, coisa litigiosa, mora).' },
          { type: 'box', kind: 'macete', text: '**Suspensão (art. 313) — 7 hipóteses memorizáveis "MOSAICO":** **M**orte ou incapacidade, **O**bservância de prejudicial, **S**uspensão por convenção, **A**rguição de impedimento/suspeição, **I**RDR/IAC, **C**aso fortuito/força maior, parto/adoção (**O**bstetrícia).' },
          { type: 'box', kind: 'macete', text: '**Art. 487 — extinção COM mérito (3 hipóteses) "AHP":** **A**colhe/rejeita pedido, **H**omologa transação/renúncia/reconhecimento, **P**rescrição/decadência.' },
          { type: 'box', kind: 'macete', text: '**Perempção — "3 strikes":** 3 abandonos = autor PROIBIDO de repropor. Sanção processual única.' },
          { type: 'box', kind: 'macete', text: '**Extinção sem × com mérito:** SEM = formal (repropõe); COM = material (não repropõe). Decadência/prescrição estão na 2ª categoria — armadilha clássica.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Decadência e prescrição GERAM COISA JULGADA MATERIAL** (art. 487 II) — extinguem o direito material. Banca tenta colocar como extinção sem mérito (errado).' },
          { type: 'box', kind: 'atencao', text: '**Abandono pelo autor (art. 485 III)** depende de DUAS coisas: intimação pessoal + requerimento do réu (Súmula 240). Não é automático.' },
          { type: 'box', kind: 'atencao', text: '**Desistência após contestação** precisa do consentimento do réu (art. 485 §4º). Antes da contestação, basta a vontade do autor.' },
          { type: 'box', kind: 'atencao', text: '**Convenção de suspensão — máximo 6 meses** (art. 313 §4º). Findo o prazo, processo retoma automaticamente.' },
          { type: 'box', kind: 'atencao', text: '**Antes de extinguir por vício SANÁVEL, juiz DEVE intimar para sanar** (art. 317 + primazia do mérito). Extinção direta é nulidade.' },
          { type: 'box', kind: 'atencao', text: '**Perempção (art. 486 §3º) impede REPROPOSIÇÃO contra o MESMO réu, com o MESMO objeto.** Não impede ação contra outro réu ou com objeto diverso.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 3 (jurisdição/ação):** condições da ação (legitimidade, interesse) — sua ausência leva à extinção sem mérito (art. 485 VI).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 8 (atos processuais):** durante a suspensão (art. 313), prazos param. Atos urgentes admitidos.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** o art. 487 é o desfecho típico do procedimento comum — sentença de mérito.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** sentenças de mérito (art. 487) e sem mérito (art. 485) são apeláveis. Da extinção, é típica a apelação (art. 1.009).' }
        ]
      }
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
      {
        h: 'Estratégia',
        items: [
          { type: 'box', kind: 'info', text: '**Tópico GIGANTE.** Estude por sub-temas, com questões a cada bloco. Sequência sugerida: (1) PI + improcedência liminar; (2) audiência + contestação + reconvenção + revelia; (3) saneamento + AIJ; (4) provas (geral + cada espécie); (5) sentença + remessa necessária; (6) coisa julgada + relativização; (7) processo estrutural + liquidação. Reserve o Mês 3 INTEIRO para este tópico.' },
          { type: 'p', text: 'O procedimento comum é a marcha-padrão do CPC (art. 318) — aplicável a todas as causas que não têm rito especial. Conhecer o "caminho do gato" (PI → audiência → contestação → saneamento → AIJ → sentença) é INDISPENSÁVEL para entender qualquer outro tópico.' }
        ]
      },
      {
        h: 'Petição inicial e improcedência liminar',
        items: [
          { type: 'h', text: 'Requisitos da PI (art. 319)' },
          { type: 'p', text: 'A petição inicial deve conter: (I) juízo a que é dirigida; (II) qualificação completa das partes; (III) fato e fundamentos jurídicos do pedido; (IV) pedido com suas especificações; (V) valor da causa; (VI) provas pretendidas; (VII) opção (sim/não) pela audiência de conciliação/mediação. Documentos indispensáveis devem acompanhar (art. 320).' },
          { type: 'p', text: '**Pedido (art. 322):** deve ser certo (objeto delimitado) e determinado (extensão delimitada). Pedido genérico admitido excepcionalmente (art. 324: ações universais; consequências de ato/fato a apurar; valor depende de ato a ser praticado pelo réu).' },
          { type: 'h', text: 'Emenda da inicial (art. 321)' },
          { type: 'p', text: 'Antes de indeferir a PI por defeito ou irregularidade sanável, o juiz **DEVE** determinar emenda em 15 dias. Materialização do princípio da primazia do mérito (art. 4º). Inércia → indeferimento (art. 330 IV).' },
          { type: 'h', text: 'Indeferimento (art. 330)' },
          { type: 'p', text: 'Hipóteses: (I) inépcia; (II) parte ilegítima; (III) falta de interesse; (IV) não emenda; (V) verba autoral acima do art. 292. **Inépcia (art. 330 §1º):** falta pedido ou causa de pedir; pedido indeterminado fora das hipóteses do art. 324; conclusão não decorre da narração; pedidos incompatíveis.' },
          { type: 'h', text: 'Improcedência liminar (art. 332) — mecanismo CRUCIAL' },
          { type: 'p', text: 'Permite ao juiz julgar IMPROCEDENTE o pedido SEM CITAR o réu, desde que a causa dispense fase probatória e o pedido contrarie:' },
          { type: 'list', items: [
            '**I** — enunciado de súmula do STF ou STJ',
            '**II** — acórdão proferido em julgamento de RE/REsp REPETITIVOS',
            '**III** — entendimento firmado em IRDR ou IAC',
            '**IV** — enunciado de súmula de tribunal local sobre direito local',
            '**Art. 332 §1º** — também quando pronunciar decadência ou prescrição'
          ]},
          { type: 'p', text: 'Recurso: APELAÇÃO em 15 dias. Se não houver retratação (art. 332 §3º — único caso de retratação na apelação), o réu é citado para apresentar contrarrazões.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.806.946:** a improcedência liminar do art. 332 é técnica de aceleração, não de cerceamento. O juiz só pode aplicá-la se a tese contrariada estiver bem delimitada e a causa dispensar dilação probatória. Falta de fundamentação adequada gera nulidade.' }
        ]
      },
      {
        h: 'Audiência, contestação, reconvenção e revelia',
        items: [
          { type: 'h', text: 'Audiência de conciliação/mediação (art. 334)' },
          { type: 'p', text: 'Recebida a PI e não sendo caso de improcedência liminar, o juiz designa audiência de conciliação/mediação **OBRIGATORIAMENTE**. Só dispensa se (art. 334 §4º): (I) **AMBAS** as partes manifestarem desinteresse expresso; (II) não admitir autocomposição (matérias indisponíveis sem flexibilização). Não basta a manifestação de uma parte.' },
          { type: 'p', text: '**Não comparecimento injustificado:** ato atentatório à dignidade da Justiça — multa de até **2% da vantagem econômica pretendida ou do valor da causa** (art. 334 §8º). Sanção rara mas real.' },
          { type: 'h', text: 'Contestação (art. 335)' },
          { type: 'p', text: 'Prazo: **15 DIAS ÚTEIS**. Termo inicial:' },
          { type: 'list', items: [
            '**I** — audiência conciliação infrutífera ou cancelada (do dia da última sessão)',
            '**II** — protocolo do desinteresse pelo réu (se foi quem o manifestou)',
            '**III** — citação válida, nas hipóteses em que NÃO houve audiência'
          ]},
          { type: 'p', text: '**Concentração das defesas (art. 337):** TODAS as defesas processuais (preliminares) reúnem-se na contestação. Rol do art. 337 (15 incisos) — taxativo. Ausência de arguição = preclusão (salvo matérias de ordem pública: incompetência absoluta, coisa julgada, litispendência, perempção, etc.).' },
          { type: 'p', text: '**Defesa de mérito:** ônus da impugnação ESPECÍFICA (art. 341) — fato não impugnado é PRESUMIDAMENTE verdadeiro, salvo: (i) defesa por advogado dativo, curador especial ou MP (negativa geral); (ii) fato sobre o qual não cabe confissão; (iii) fato em contradição com a defesa.' },
          { type: 'h', text: 'Reconvenção (arts. 343-346)' },
          { type: 'p', text: 'No CPC/15 a reconvenção é apresentada **NA PRÓPRIA CONTESTAÇÃO** (não mais em peça autônoma). Requisitos: (i) conexão com a ação ou com fundamento da defesa; (ii) competência absoluta do juízo. Pode ser proposta contra terceiro (art. 343 §3º) — ampliação subjetiva.' },
          { type: 'p', text: 'Desistência da ação NÃO IMPEDE prosseguimento da reconvenção (art. 343 §2º). Pagam-se honorários autônomos pelo julgamento de cada uma.' },
          { type: 'h', text: 'Revelia (arts. 344-346)' },
          { type: 'p', text: '**Conceito:** ausência de contestação. **Efeito MATERIAL:** presumem-se verdadeiros os fatos alegados pelo autor (art. 344). **Efeito PROCESSUAL:** independência de intimação dos atos posteriores (art. 346 — exceção: ato cuja eficácia depende de intimação).' },
          { type: 'p', text: '**Mitigações ao efeito material (art. 345):** (I) pluralidade de réus, com defesa de algum (mas só sobre fatos comuns); (II) direitos indisponíveis; (III) PI desacompanhada de instrumento que a lei considere indispensável; (IV) inverossimilhança ou contradição com prova nos autos.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 231:** "A incidência da revelia não dispensa o juiz de produzir as provas que considerar relevantes para o seu convencimento." Princípio da busca da verdade real continua vigente mesmo com revelia.' }
        ]
      },
      {
        h: 'Providências preliminares e saneamento',
        items: [
          { type: 'h', text: 'Providências preliminares (arts. 347-353)' },
          { type: 'p', text: 'Após a contestação, o juiz pode determinar: réplica do autor (art. 350 — em caso de defesa indireta de mérito); réplica para impugnar documentos novos (art. 351); especificação de provas (art. 348). É a fase de "saneamento prévio" — checar se está apto para julgamento.' },
          { type: 'h', text: 'Julgamento conforme o estado do processo (arts. 354-357)' },
          { type: 'p', text: 'Possibilidades:' },
          { type: 'list', items: [
            '**Art. 354** — extinção (sem ou com mérito por homologação)',
            '**Art. 355** — JULGAMENTO ANTECIPADO DE MÉRITO (causa madura, dispensa instrução): I) só direito ou fato provado documentalmente; II) revelia com efeito material e sem necessidade de outras provas',
            '**Art. 356** — JULGAMENTO ANTECIPADO PARCIAL (sentença sobre parcela incontroversa ou já madura, prosseguindo nas demais)',
            '**Art. 357** — DECISÃO DE SANEAMENTO E ORGANIZAÇÃO'
          ]},
          { type: 'p', text: '**Julgamento antecipado parcial (art. 356)** é uma das maiores inovações do CPC/15. Permite "satisfazer já o que se pode satisfazer", enquanto o restante segue. Recurso: **agravo de instrumento** (art. 1.015 II).' },
          { type: 'h', text: 'Decisão de saneamento (art. 357) — momento-chave' },
          { type: 'p', text: 'Quando NÃO for caso de extinção ou julgamento antecipado, o juiz profere decisão organizando o processo:' },
          { type: 'list', items: [
            '**I** — Resolve as questões processuais pendentes',
            '**II** — Delimita as questões de fato controvertidas, definindo o objeto da prova',
            '**III** — Define a distribuição do ÔNUS DA PROVA (regra do art. 373 ou DINÂMICA — §5º)',
            '**IV** — Delimita as questões de direito relevantes para a decisão',
            '**V** — Designa AIJ se necessária'
          ]},
          { type: 'p', text: '**Saneamento cooperativo (art. 357 §3º):** em causas complexas, o juiz pode designar audiência DE saneamento, ouvindo as partes. **Saneamento consensual (art. 357 §2º):** as partes podem apresentar saneamento conjunto, que se torna VINCULANTE — exemplo de NJP típico.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.846.109:** a distribuição dinâmica do ônus da prova exige decisão FUNDAMENTADA, oportunidade prévia de manifestação às partes (contraditório efetivo, art. 357 §1º) e demonstração da impossibilidade ou maior dificuldade de cumprir o ônus pela parte originalmente onerada. Sem isso, há nulidade.' }
        ]
      },
      {
        h: 'AIJ, teorias da verdade e provas',
        items: [
          { type: 'h', text: 'Audiência de instrução e julgamento (arts. 358-368)' },
          { type: 'p', text: 'Sequência típica: (1) tentativa de conciliação; (2) esclarecimentos do perito; (3) depoimento pessoal das partes; (4) inquirição de testemunhas; (5) debates orais (20min cada, prorrogáveis por 10) ou alegações finais por memoriais escritos (15 dias).' },
          { type: 'h', text: 'Teorias da verdade no processo' },
          { type: 'p', text: 'O CPC/15 abandona a dicotomia VERDADE FORMAL × VERDADE MATERIAL — adota visão moderna: verdade processual como construção COOPERATIVA, sempre aproximativa. Princípios:' },
          { type: 'list', items: [
            '**Verdade aproximativa** (Marinoni, Mitidiero) — verdade absoluta é inalcançável; importa a verdade JUSTIFICÁVEL no contraditório',
            '**Cooperação na produção da prova** (art. 6º) — ônus dinâmico (art. 373 §1º)',
            '**Ampla iniciativa probatória do juiz** (art. 370 — pode determinar provas de ofício, com limites do contraditório e fundamentação)'
          ]},
          { type: 'h', text: 'Provas — disposições gerais (arts. 369-380)' },
          { type: 'p', text: '**Direito à prova (art. 369):** as partes têm direito de empregar TODOS os meios legais e moralmente legítimos para provar suas alegações. **Atipicidade probatória** — admissível qualquer meio que respeite a lei e a moral.' },
          { type: 'p', text: '**Ônus da prova (art. 373):**' },
          {
            type: 'table',
            headers: ['Quem', 'O que prova', 'Base'],
            rows: [
              ['Autor', 'Fato CONSTITUTIVO de seu direito', 'Art. 373 I'],
              ['Réu', 'Fato IMPEDITIVO, MODIFICATIVO ou EXTINTIVO do direito do autor', 'Art. 373 II'],
              ['Quem o juiz fixar (DINÂMICA)', 'Conforme peculiaridades; impossibilidade ou dificuldade do ônus padrão', 'Art. 373 §1º (CPC/15)']
            ]
          },
          { type: 'p', text: '**Convenção sobre o ônus (art. 373 §3º):** admitida em direitos disponíveis, salvo se tornar excessivamente difícil a prova para uma parte (NJP probatório).' },
          { type: 'p', text: '**Privilégios e sigilos (art. 388):** ninguém é obrigado a depor sobre fatos: (I) cuja revelação cause grave dano à própria parte ou parente; (II) protegidos por sigilo profissional; (III) que importem desonra; (IV) sobre cuja guarda a lei imponha sigilo. Conexão com privacidade (CF art. 5º X) e devido processo.' },
          { type: 'h', text: 'Provas em espécie' },
          { type: 'list', items: [
            '**Ata notarial (art. 384)** — moderna; comprovação de fato pelo tabelião (capturas de tela, conteúdo de redes, etc.)',
            '**Depoimento pessoal (arts. 385-388)** — pode resultar em CONFISSÃO',
            '**Confissão (arts. 389-395)** — judicial ou extrajudicial; cinde-se quando contiver fato modificativo',
            '**Exibição de documento ou coisa (arts. 396-404)** — recusa pode gerar admissão dos fatos (art. 400)',
            '**Documental (arts. 405-441)** — escrito ou qualquer suporte; público (presunção de veracidade) × particular (fé entre as partes)',
            '**Documentos eletrônicos (arts. 439-441)** — Lei 11.419/06 + ICP-Brasil; força probante reconhecida',
            '**Testemunhal (arts. 442-463)** — máximo 10 por parte (art. 357 §6º); ROL no prazo do saneamento; intimação pela parte (art. 455)',
            '**Pericial (arts. 464-480)** — perito com confiança técnica; quesitos e assistente técnico; laudo NÃO vincula o juiz (art. 479; livre convencimento motivado — art. 371)',
            '**Inspeção judicial (arts. 481-484)** — juiz inspeciona pessoa, coisa ou lugar'
          ]}
        ]
      },
      {
        h: 'Sentença, qualidade da decisão e tutela específica',
        items: [
          { type: 'h', text: 'Requisitos da sentença (art. 489)' },
          { type: 'p', text: 'A sentença é o ato pelo qual o juiz: (i) extingue o processo sem mérito (art. 485); (ii) resolve o mérito (art. 487). Estrutura obrigatória (art. 489):' },
          { type: 'list', items: [
            '**I — Relatório** — síntese da causa',
            '**II — Fundamentos** — análise das questões de fato e de direito',
            '**III — Dispositivo** — resposta aos pedidos'
          ]},
          { type: 'h', text: 'Fundamentação substancial (art. 489 §1º) — INOVAÇÃO RADICAL' },
          { type: 'p', text: 'NÃO se considera fundamentada decisão que:' },
          { type: 'list', items: [
            '**I** — limitar-se à indicação, reprodução ou paráfrase do ato normativo',
            '**II** — empregar conceitos jurídicos indeterminados sem explicar a aplicação ao caso',
            '**III** — invocar motivos que se prestariam a justificar qualquer outra decisão',
            '**IV** — não enfrentar todos os argumentos deduzidos no processo CAPAZES de infirmar a conclusão',
            '**V** — limitar-se a invocar precedente ou súmula sem demonstrar a adequação ao caso',
            '**VI** — deixar de seguir precedente ou súmula sem demonstrar distinção (DISTINGUISHING) ou superação (OVERRULING)'
          ]},
          { type: 'p', text: 'Pioneira no mundo. Eleva o ônus de fundamentação a patamar inédito. Aplicada com firmeza pelo STJ — sentença que descumpre é NULA (art. 489 §1º + CF art. 93 IX).' },
          { type: 'h', text: 'Consequencialismo (LINDB arts. 20-21, Lei 13.655/18)' },
          { type: 'p', text: 'Em decisões nas esferas administrativa, controladora e judicial sobre direito público, o decisor **NÃO** decidirá com base em valores jurídicos abstratos sem considerar as **CONSEQUÊNCIAS PRÁTICAS** da decisão. Deve indicar a necessidade e a adequação da medida, considerando alternativas. Aplica-se ao MP em pareceres de controle de políticas públicas e em ACPs estruturais.' },
          { type: 'h', text: 'Princípio da congruência (arts. 141 e 492)' },
          { type: 'p', text: 'Decisão NOS LIMITES do pedido — vedados extra, ultra ou citra petita. Pedidos implícitos (juros legais, correção monetária, custas, honorários) integram a condenação independentemente de pedido (arts. 322 §1º e 491).' },
          { type: 'h', text: 'Tutela específica das obrigações (arts. 497-501)' },
          { type: 'p', text: 'Em obrigações de fazer/não-fazer e de entregar coisa, o juiz deve buscar o resultado prático equivalente — multa diária, busca e apreensão, remoção de pessoas/coisas, desfazimento de obras, impedimento de atividade nociva. Conversão em perdas e danos só se solicitada pelo autor ou impossível.' },
          { type: 'h', text: 'Remessa necessária (art. 496)' },
          { type: 'p', text: 'Sentença contra a Fazenda Pública só transita em julgado após confirmação pelo tribunal — duplo grau OBRIGATÓRIO. Hipóteses de NÃO submissão (art. 496 §3º):' },
          { type: 'list', items: [
            '**União** — condenação até 1.000 SM',
            '**Estados/DF/capitais** — até 500 SM',
            '**Municípios não-capitais** — até 100 SM',
            'Sentença fundada em jurisprudência STF/STJ; tese de RE/REsp repetitivo; IRDR; IAC; SV (art. 496 §4º)'
          ]}
        ]
      },
      {
        h: 'Coisa julgada, relativização e processo coletivo',
        items: [
          { type: 'h', text: 'Coisa julgada formal × material' },
          { type: 'p', text: '**Formal:** imutabilidade DENTRO do mesmo processo; gerada por TODA decisão preclusa, mesmo as sem mérito. **Material:** imutabilidade FORA do processo; impede repropositura. Gerada apenas por sentença de mérito (art. 502).' },
          { type: 'h', text: 'Limites da coisa julgada (arts. 503-505)' },
          { type: 'p', text: '**Objetivos (art. 503):** parte DISPOSITIVA da sentença. Inovação CPC/15 (§§1º-2º): alcança questão prejudicial decidida expressa e incidentalmente, **se** (a) houver contraditório prévio; (b) o juízo for competente em razão da matéria e da pessoa; (c) não houver restrições probatórias.' },
          { type: 'p', text: '**Subjetivos (art. 506):** entre as partes — não beneficia nem prejudica terceiros (regra). Exceção em ações coletivas (CDC art. 103 + LACP).' },
          { type: 'h', text: 'Relativização da coisa julgada' },
          { type: 'p', text: 'Tema controverso. Hipóteses LEGAIS de revisão: ação rescisória (art. 966), querela nullitatis (vícios transrescisórios — sentença sem citação, p. ex.), revisão criminal (CPP art. 621). Hipóteses DOUTRINÁRIAS de relativização: violação grave a princípios constitucionais; injustiça flagrante (Cândido Dinamarco); coisa julgada inconstitucional. STF é CAUTELOSO — RE 730.462 (Tema 733): coisa julgada não é inconstitucional pelo só fato de embasada em norma posteriormente declarada inconstitucional.' },
          { type: 'h', text: 'Coletivização da coisa julgada' },
          { type: 'p', text: 'No processo coletivo, a coisa julgada tem regime ESPECIAL — eficácia *erga omnes* (atinge todos) ou *ultra partes* (atinge grupo) **secundum eventum litis** (no resultado do mérito) e/ou **secundum eventum probationis** (no resultado da prova).' },
          {
            type: 'table',
            headers: ['Direito coletivo', 'Eficácia subjetiva', 'Tipo'],
            rows: [
              ['Difuso (CDC 81 I)', 'Erga omnes, salvo improcedência por insuficiência de provas', 'Secundum eventum probationis'],
              ['Coletivo stricto sensu (CDC 81 II)', 'Ultra partes, limitado ao grupo, exceto improc. por insuf. de provas', 'Secundum eventum probationis'],
              ['Individual homogêneo (CDC 81 III)', 'Erga omnes, mas só beneficia (não prejudica) a esfera individual', 'Secundum eventum litis (in utilibus)']
            ]
          },
          { type: 'p', text: '**Princípio da extensão in utilibus (CDC art. 103 §3º):** improcedência da ação coletiva NÃO impede ações individuais. Procedência beneficia individuais (transporte). Sistemática garante o autor coletivo sem onerar individuais com derrota alheia.' },

          { type: 'h', text: 'Processo estrutural' },
          { type: 'p', text: 'Categoria emergente (Edilson Vitorelli, Sérgio Cruz Arenhart): processo voltado à reorganização de uma estrutura (política pública, instituição) para sanar ilegalidade ou ineficiência. Características: complexidade fática; multipolaridade; tutela colaborativa (mandamentos progressivos); supervisão judicial contínua; flexibilização da congruência. Casos paradigmáticos: ADPF 347 (estado de coisas inconstitucional — sistema penitenciário); Brown vs. Board of Education (EUA, 1954). MP é ator central via ACP estrutural.' },
          { type: 'h', text: 'Liquidação de sentença (arts. 509-512)' },
          { type: 'p', text: 'Quando a sentença for ilíquida (sem definir o valor exato), antes do cumprimento, faz-se a liquidação. Modalidades:' },
          { type: 'list', items: [
            '**Por arbitramento (art. 509 I)** — quando depender de avaliação ou cálculo técnico',
            '**Pelo procedimento comum (art. 509 II)** — quando demandar prova de fato novo (alegação superveniente)',
            '**Por simples cálculo (art. 509 §2º)** — quando bastar operação aritmética'
          ]},
          { type: 'p', text: '**Liquidação coletiva (art. 511):** liquidação por habilitação no processo coletivo (ACP, ação popular). Cada interessado prova individualmente seu prejuízo.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CPC arts. 318-512** — Procedimento Comum (TODO o "miolo" do CPC)',
            '**Art. 319** — requisitos da PI; **Art. 320** — documentos indispensáveis',
            '**Art. 332** — improcedência liminar',
            '**Art. 334** — audiência conciliação/mediação',
            '**Arts. 335-342** — contestação',
            '**Arts. 343-346** — reconvenção e revelia',
            '**Art. 357** — saneamento e organização',
            '**Arts. 369-484** — provas',
            '**Art. 489** — requisitos da sentença',
            '**Arts. 502-508** — coisa julgada',
            '**Arts. 509-512** — liquidação',
            '**CDC art. 103** — coisa julgada coletiva',
            '**LINDB arts. 20-21** — consequencialismo',
            '**Lei 7.347/85** — LACP (estudo conjunto com Tópico 20)'
          ]}
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Marcha do procedimento comum — "PIIASIS":** **PI** → **I**mpugnação liminar (332) → **A**udiência (334) → **S**aneamento (357) → **I**nstrução (AIJ) → **S**entença.' },
          { type: 'box', kind: 'macete', text: '**Sentença (art. 489) — "RFD":** **R**elatório, **F**undamentos, **D**ispositivo.' },
          { type: 'box', kind: 'macete', text: '**6 hipóteses de fundamentação inadequada (489 §1º) — "PCMNAQ":** **P**aráfrase normativa, **C**onceito indeterminado sem aplicação, **M**otivação genérica, **N**ão enfrentamento de argumentos, **A**plicação de precedente sem demonstração, **Q**uestão da inaplicação de precedente sem distinção.' },
          { type: 'box', kind: 'macete', text: '**Coisa julgada coletiva — "DIPR":** **D**ifuso e coletivo = secundum eventum **PR**obationis. **Individual homogêneo** = secundum eventum **LI**tis (só beneficia o particular).' },
          { type: 'box', kind: 'macete', text: '**Liquidação — 3 vias "CAP":** **C**álculo (aritmético), **A**rbitramento, **P**rocedimento comum (fato novo).' },
          { type: 'box', kind: 'macete', text: '**Remessa necessária — limites de SM:** **U**nião 1.000 / **EDC** (Estados, DF, Capitais) 500 / **M**unicípios não-capitais 100. Mnemônico: "1000-500-100, escala U-EDC-M".' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Audiência do art. 334 só dispensa se AMBAS as partes manifestarem desinteresse.** Apenas uma não basta. Pegadinha clássica.' },
          { type: 'box', kind: 'atencao', text: '**Reconvenção é APRESENTADA NA contestação** (art. 343), não em peça separada — mudança em relação ao CPC/73 ainda confunde.' },
          { type: 'box', kind: 'atencao', text: '**Revelia NÃO É absoluta** — 4 mitigações do art. 345 (litisconsorte, indisponível, falta de instrumento, inverossimilhança).' },
          { type: 'box', kind: 'atencao', text: '**Distribuição dinâmica do ônus exige fundamentação E contraditório PRÉVIO** (art. 357 §1º). Fixar de surpresa é nulidade.' },
          { type: 'box', kind: 'atencao', text: '**Improcedência liminar (art. 332) — apelação ADMITE retratação** (§3º) — único caso na apelação.' },
          { type: 'box', kind: 'atencao', text: '**Coisa julgada material × formal:** material só por sentença de mérito (art. 487); decisão sem mérito gera só formal.' },
          { type: 'box', kind: 'atencao', text: '**Decadência e prescrição (art. 487 II) geram coisa julgada MATERIAL.** Erro frequente classificar como sem mérito.' },
          { type: 'box', kind: 'atencao', text: '**Coisa julgada coletiva NÃO PREJUDICA o particular (CDC 103 §1º)** — extensão é só *in utilibus* nos individuais homogêneos. O autor individual sempre pode tentar.' },
          { type: 'box', kind: 'atencao', text: '**Limites objetivos da coisa julgada — agora alcançam questão prejudicial decidida** (art. 503 §1º), MAS sob requisitos cumulativos (contraditório, competência, sem restrição probatória).' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 8 (atos processuais):** os atos do procedimento comum são as instâncias concretas do regime de prazos, comunicações e nulidades.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 12 (cumprimento de sentença):** a sentença líquida do procedimento comum é o título executivo judicial cumprido lá.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** apelação contra sentença do procedimento comum (art. 1.009); agravo de instrumento contra interlocutórias específicas (art. 1.015).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 20 (ACP):** a coisa julgada coletiva (CDC 103) e o processo estrutural são pão diário do MP. Estudo conjunto com este tópico aprofunda a vantagem.' }
        ]
      }
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
