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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O **cumprimento de sentença** (CPC arts. 513-538) é a fase de satisfação dos títulos executivos JUDICIAIS — sentenças, decisões interlocutórias com componente executivo, sentenças penais condenatórias, sentenças arbitrais, etc. Distingue-se da **execução por título extrajudicial** (Tópico 15), que tem rito autônomo e disciplina própria. Após o CPC/15, o sincretismo processual se consolidou: cumprimento é FASE do mesmo processo de conhecimento.' },
          {
            type: 'table',
            headers: ['Espécie', 'Artigos', 'Características'],
            rows: [
              ['Pagar quantia', '513-527', 'Multa de 10% + honorários de 10% se não pagar em 15 dias (art. 523 §1º)'],
              ['Fazer/não-fazer', '536-537', 'Multa diária (astreintes); medidas atípicas (art. 139 IV)'],
              ['Entregar coisa', '538', 'Mandado de busca e apreensão; multa diária'],
              ['Alimentos', '528-533', 'Coação patrimonial OU prisão civil (1-3 meses, regime fechado)'],
              ['Contra Fazenda Pública', '534-535', 'Precatório ou RPV; arts. 910 (extrajudicial) e 100 CF']
            ]
          },
          { type: 'p', text: '**Cumprimento provisório × definitivo:** PROVISÓRIO (art. 520) — sentença pendente de recurso sem efeito suspensivo (apelação, em regra, tem; agravo NÃO). DEFINITIVO — após o trânsito em julgado. Provisório exige caução para levantamento de quantias e atos irreversíveis (art. 520 IV) — exceções no art. 521.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CPC arts. 513-519** — disposições gerais',
            '**Art. 520** — cumprimento PROVISÓRIO',
            '**Art. 521** — dispensa de caução (alimentos, valor até 60 SM, urgência)',
            '**Arts. 523-527** — cumprimento de quantia certa',
            '**Art. 523** — prazo de 15 dias para pagamento + multa 10% + honorários 10%',
            '**Art. 524 §4º** — execução parcial pelo valor incontroverso',
            '**Art. 525** — IMPUGNAÇÃO do executado (rol taxativo: §1º, 9 hipóteses)',
            '**Art. 528** — cumprimento de alimentos com possibilidade de PRISÃO CIVIL',
            '**Arts. 534-535** — cumprimento contra a Fazenda Pública',
            '**Art. 535 §3º** — RPV (60 SM, federal) ou precatório',
            '**Arts. 536-537** — fazer/não-fazer; multa diária e medidas atípicas',
            '**Art. 538** — entregar coisa; busca e apreensão'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Multa do art. 523 §1º (10% + honorários 10%)' },
          { type: 'p', text: 'Após o trânsito em julgado, o devedor é **INTIMADO** (na pessoa do advogado, em regra) para pagar em **15 DIAS ÚTEIS**. Não pagando, incide:' },
          { type: 'list', items: [
            '**Multa de 10%** sobre o valor não pago',
            '**Honorários advocatícios** sucumbenciais de 10% (art. 523 §1º — somam-se aos da fase de conhecimento)',
            '**Penhora** dos bens (geralmente online, via SISBAJUD)',
            'Início do prazo de 15 dias para impugnar (art. 525)'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 962 (REsp 1.620.919):** a multa do art. 523 incide AUTOMATICAMENTE a partir do término do prazo de 15 dias, INDEPENDENTEMENTE de intimação pessoal do devedor. A intimação do advogado (via DJe) é suficiente. Tema vinculante.' },

          { type: 'h', text: 'Impugnação ao cumprimento (art. 525) — rol TAXATIVO' },
          { type: 'p', text: 'Hipóteses (§1º):' },
          { type: 'list', items: [
            '**I** — falta ou nulidade da citação (querela nullitatis se já citado em apelação)',
            '**II** — ilegitimidade da parte',
            '**III** — inexequibilidade do título ou inexigibilidade da obrigação',
            '**IV** — penhora incorreta ou avaliação errônea',
            '**V** — excesso de execução ou cumulação indevida',
            '**VI** — incompetência do juízo',
            '**VII** — qualquer causa modificativa ou extintiva da obrigação posterior à sentença',
            '**§4º** — excesso de execução exige memória DISCRIMINADA, sob pena de não conhecimento (Súmula 612/STJ)'
          ]},
          { type: 'p', text: 'Não há **EFEITO SUSPENSIVO automático** (art. 525 §6º) — só com requerimento + garantia integral + prova de risco grave de dano de difícil reparação.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 612:** "O direito de impugnar o título executivo extrajudicial admite distinguishing." Reforça a importância da memória DISCRIMINADA quando se alega excesso (art. 525 §4º).' },

          { type: 'h', text: 'Atipicidade dos meios executivos (art. 139 IV) na quantia certa' },
          { type: 'p', text: 'Inovação CPC/15 — antes restrito a obrigações de fazer/não-fazer, hoje aplicável a obrigações de PAGAR. STJ no Tema 1.137 (REsp 1.788.950) consolidou: medidas atípicas (suspensão de CNH, passaporte, cartão de crédito, bloqueio de aplicativos de transporte) são CABÍVEIS, mas exigem:' },
          { type: 'list', items: [
            'Esgotamento dos meios típicos (penhora, BacenJud)',
            'Demonstração de patrimônio compatível ocultado',
            'Decisão fundamentada e PROPORCIONAL',
            'Não violar núcleo essencial de direitos fundamentais'
          ]},

          { type: 'h', text: 'Cumprimento contra a Fazenda Pública' },
          { type: 'p', text: 'Pagamento por **PRECATÓRIO** (CF art. 100) ou **RPV** (Requisição de Pequeno Valor — federal: 60 SM, estadual: 40 SM, municipal: 30 SM, salvo legislação local diferente). Procedimento (arts. 534-535):' },
          { type: 'list', items: [
            'Fazenda intimada em 30 dias para impugnar (rol do art. 535)',
            'Não impugnando, expede-se precatório (federal: até 1º julho; pagamento até 31/12 do ano seguinte) ou RPV (60 dias, sem ordem cronológica)',
            'EC 113/21: SELIC como índice de correção e juros, simplificando a complexa sistemática anterior'
          ]},

          { type: 'h', text: 'Cumprimento de alimentos (arts. 528-533)' },
          { type: 'p', text: 'Sistemática DUPLA:' },
          { type: 'list', items: [
            '**Coação patrimonial (art. 528 §8º)** — penhora de bens, BacenJud, atipicidade do art. 139 IV. Aplica-se preferencialmente em débitos antigos',
            '**Prisão civil (art. 528 §3º)** — 1 a 3 meses em REGIME FECHADO; cabível para débito das 3 ÚLTIMAS prestações + parcelas vincendas até a data do pagamento (Súmula 309/STJ); única hipótese de prisão civil constitucional (CF art. 5º LXVII + Súmula Vinculante 25 — depositário infiel não)'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 309:** "O débito alimentar que autoriza a prisão civil do alimentante é o que compreende as 3 prestações anteriores ao ajuizamento da execução e as que vencerem no curso do processo." Tema vinculante na prática forense.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Multa do art. 523 — 10/10/15:** **10**% multa + **10**% honorários, se não pagar em **15** dias úteis após intimação.' },
          { type: 'box', kind: 'macete', text: '**RPV — 60/40/30 SM:** **União 60**, **Estado 40**, **Município 30** (regra; Estados e Municípios podem fixar diferente).' },
          { type: 'box', kind: 'macete', text: '**Alimentos — prisão civil das 3 últimas + vincendas** (Súmula 309/STJ). Régime FECHADO; 1-3 meses.' },
          { type: 'box', kind: 'macete', text: '**Impugnação (525) — rol TAXATIVO em 9 hipóteses.** Memorize: nulidade da citação, ilegitimidade, inexigibilidade, penhora errada, excesso, incompetência, modificativa/extintiva.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Multa do art. 523 incide AUTOMATICAMENTE** após 15 dias — Tema 962/STJ. Intimação pessoal do devedor NÃO é necessária (basta a do advogado).' },
          { type: 'box', kind: 'atencao', text: '**Excesso de execução SEM memória discriminada = NÃO CONHECIMENTO** (art. 525 §4º). Mero "discordo do valor" não basta.' },
          { type: 'box', kind: 'atencao', text: '**Impugnação NÃO TEM EFEITO SUSPENSIVO automático** (art. 525 §6º) — exige garantia + risco grave.' },
          { type: 'box', kind: 'atencao', text: '**Cumprimento × execução autônoma:** cumprimento (513+) é fase do mesmo processo de conhecimento; execução (771+) é processo autônomo, para títulos EXTRAJUDICIAIS. Banca tenta confundir.' },
          { type: 'box', kind: 'atencao', text: '**Atipicidade do art. 139 IV em quantia certa exige MEIOS TÍPICOS ESGOTADOS** — Tema 1.137. Não é primeira opção.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 7 (juiz):** atipicidade do art. 139 IV é manifestação dos poderes-deveres do juiz; aplicada massivamente aqui.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** cumprimento é FASE do mesmo processo (sincretismo). Sentença líquida → cumprimento direto.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 15 (execução):** muitas regras se aplicam por remissão (art. 513 §1º — aplicação subsidiária do procedimento de execução).' }
        ]
      }
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
      {
        h: 'Visão geral',
        items: [
          { type: 'p', text: 'Os **procedimentos especiais** (CPC arts. 539-770) são ritos diferenciados do procedimento comum, criados para tutelar situações específicas com peculiaridades que justificam tratamento próprio. Aplica-se subsidiariamente o procedimento comum (art. 318 §único).' },
          { type: 'p', text: 'A estratégia de estudo é por **PROCEDIMENTO**, identificando para cada: (a) cabimento; (b) legitimidade; (c) rito específico; (d) súmulas críticas. NÃO é necessário decorar cada artigo — domine a LÓGICA de cada um.' }
        ]
      },
      {
        h: 'Procedimentos contenciosos do CPC',
        items: [
          { type: 'h', text: 'Consignação em pagamento (arts. 539-549)' },
          { type: 'p', text: 'Cabível quando o credor: recusa-se sem justa causa a receber; é incapaz; reside em local desconhecido; pluralidade de credores. Pode ser **judicial** ou **extrajudicial** (art. 539 §1º — depósito em estabelecimento bancário). Procedimento sumário; após depósito, citação do réu; impugnação no prazo da contestação.' },
          { type: 'h', text: 'Ação de exigir contas (arts. 550-553)' },
          { type: 'p', text: 'Bifásica: 1ª fase (cabimento) → sentença que reconhece o dever de prestar contas; 2ª fase (apuração) → contas no prazo de 15 dias. Súmula 259/STJ: "A ação de prestação de contas pode ser proposta pelo titular de conta corrente bancária" (admite contra banco).' },
          { type: 'h', text: 'Ações possessórias (arts. 554-568)' },
          { type: 'p', text: 'Tutela da posse — não da propriedade. Espécies:' },
          { type: 'list', items: [
            '**Reintegração** — esbulho (perda total)',
            '**Manutenção** — turbação (perturbação parcial)',
            '**Interdito proibitório** — ameaça'
          ]},
          { type: 'p', text: '**FUNGIBILIDADE expressa (art. 554):** o juiz concede a tutela adequada, mesmo se pedido outro nome. **Distinção crucial:**' },
          {
            type: 'table',
            headers: ['Tipo', 'Tempo', 'Procedimento', 'Liminar'],
            rows: [
              ['Força nova', 'até 1 ano e 1 dia da turbação/esbulho', 'Especial', 'Cabe (art. 562 — sem oitiva)'],
              ['Força velha', 'após 1 ano e 1 dia', 'Comum', 'Apenas tutela provisória ordinária']
            ]
          },
          { type: 'p', text: '**Possessórias coletivas (arts. 565-566):** litígio com mais de 1 ano, com presença de muitas pessoas → audiência de mediação obrigatória, intervenção do MP e Defensoria. **Marco em invasões/ocupações de movimentos sociais.**' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 637:** "O ente público tem legitimidade e interesse para intervir como amicus curiae em ação possessória entre particulares quando relevantes interesses transindividuais." Reforço da função protetiva do Estado.' },
          { type: 'h', text: 'Divisão e demarcação (arts. 569-598)' },
          { type: 'p', text: 'Ações imobiliárias dúplices. Demarcação: fixar limites entre imóveis. Divisão: dividir imóvel comum entre condôminos. Procedimento técnico, com perito.' },
          { type: 'h', text: 'Inventário e partilha (arts. 610-673)' },
          { type: 'p', text: 'Procedimento de jurisdição contenciosa (sucessões). Modalidades:' },
          { type: 'list', items: [
            '**Tradicional (judicial)** — quando há menores, incapazes, testamento ou desacordo',
            '**Por arrolamento sumário** (até R$ 1.000 ou bens de pequena monta)',
            '**Por arrolamento comum** (consenso entre maiores capazes)',
            '**Extrajudicial (Lei 11.441/07 + CPC art. 610 §1º)** — em cartório, se todos maiores e capazes, em consenso, sem testamento'
          ]},
          { type: 'h', text: 'Embargos de terceiro (arts. 674-681)' },
          { type: 'p', text: 'Defesa do TERCEIRO (não-parte) cuja posse ou propriedade é ameaçada por ato judicial (penhora, arresto, etc.). Procedimento ágil; juízo da execução é competente. Súmula 84/STJ: "É admissível a oposição de embargos de terceiro fundados em alegação de posse advinda de compromisso de compra e venda, ainda que sem registro."' },
          { type: 'h', text: 'Oposição (arts. 682-686)' },
          { type: 'p', text: '**No CPC/15 a oposição é AÇÃO AUTÔNOMA** (não mais intervenção de terceiros). Terceiro pretende, no todo ou em parte, o objeto da disputa entre autor e réu. Procedimento comum. Se ajuizada antes da AIJ, julgada em conjunto.' },
          { type: 'h', text: 'Habilitação (arts. 687-692)' },
          { type: 'p', text: 'Sucessão processual em caso de morte da parte (art. 110): habilitação dos sucessores no processo. Procedimento incidental.' },
          { type: 'h', text: 'Ações de família (arts. 693-699)' },
          { type: 'p', text: 'Aplicáveis a divórcio, separação, guarda, alimentos, união estável, adoção, etc. Peculiaridades:' },
          { type: 'list', items: [
            'Tentativa obrigatória de mediação (art. 694)',
            'Citação do réu apenas para audiência (sem prévia entrega da PI — art. 695 §1º) — sigilo da postura',
            'Audiências são SIGILOSAS (art. 189 II)',
            'Intervenção do MP em casos com incapazes (art. 698 + Súmula 99/STJ)'
          ]},
          { type: 'h', text: 'Monitória (arts. 700-702)' },
          { type: 'p', text: 'Cobrança fundada em prova ESCRITA SEM EFICÁCIA EXECUTIVA (cheque prescrito, contrato sem executividade plena, e-mails). Concedida liminarmente, o réu tem 15 dias para: (i) pagar (com isenção de honorários); (ii) opor embargos; (iii) cumprir a obrigação de fazer/coisa. Sem reação → mandado vira título executivo judicial.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 339:** "É cabível ação monitória contra a Fazenda Pública." E Súmula 384: "Cabe ação monitória para haver saldo de devedor decorrente de cumprimento de cheque prescrito."' },
          { type: 'h', text: 'Restauração de autos (arts. 712-718)' },
          { type: 'p', text: 'Quando autos físicos se perdem ou destroem. Procedimento incidental para reconstituir.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CPC arts. 539-770** — Procedimentos Especiais (TUDO contencioso e voluntário)',
            '**Arts. 539-549** — Consignação',
            '**Arts. 550-553** — Exigir contas',
            '**Arts. 554-568** — Possessórias',
            '**Arts. 610-673** — Inventário/partilha',
            '**Arts. 674-681** — Embargos de terceiro',
            '**Arts. 693-699** — Ações de família',
            '**Arts. 700-702** — Monitória',
            '**Lei 11.441/07** — Inventário, partilha, divórcio extrajudicial'
          ]}
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Possessórias — "MIRA":** **M**anutenção (turbação), **I**nterdito proibitório (ameaça), **R**eintegração (esbulho), **A**FIN dúplice/fungíveis.' },
          { type: 'box', kind: 'macete', text: '**Força nova × velha — "1A1D":** até **1A**no e **1D**ia = nova (rito especial + liminar); depois = velha (procedimento comum).' },
          { type: 'box', kind: 'macete', text: '**Monitória — "PRO-EX-IS":** **PRO**va escrita **EX**istente sem eficácia executiva = monitória **IS**tituível.' },
          { type: 'box', kind: 'macete', text: '**Ações de família — peculiaridades "MeSiMP":** **Me**diação obrigatória, **Si**gilo, **MP** intervém com incapaz.' },
          { type: 'box', kind: 'macete', text: '**Inventário extrajudicial — "MaCo Sem-Test":** **Ma**iores **Co**ncordantes, **Sem T**estamento e **sem incapazes**. Em cartório.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Possessórias — fungibilidade EXPRESSA (art. 554)** — pedida uma, juiz dá outra. NÃO confundir com fungibilidade entre tutela cautelar e antecipada (art. 305).' },
          { type: 'box', kind: 'atencao', text: '**Oposição é AÇÃO AUTÔNOMA no CPC/15** — não está no rol de intervenções (Tópico 4). Banca cobra essa mudança.' },
          { type: 'box', kind: 'atencao', text: '**Inventário em cartório (Lei 11.441/07) NÃO admite testamento, incapazes ou desacordo** — restrito a casos de plena consensualidade.' },
          { type: 'box', kind: 'atencao', text: '**Citação em ações de família é só para audiência (art. 695 §1º)** — réu nem recebe a PI inicialmente. Estratégia de propiciar conciliação sem polarização.' },
          { type: 'box', kind: 'atencao', text: '**Monitória cabe contra Fazenda Pública** (Súmula 339/STJ). Erro frequente: afirmar incompatibilidade.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 4 (intervenções):** oposição saiu do rol e virou ação autônoma — leitura cruzada essencial.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** intervenção em ações de família com incapaz (art. 698 + Súmula 99/STJ).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 12 (cumprimento):** monitória, ao virar título executivo, sujeita-se ao cumprimento de sentença (arts. 513+).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 14 (jurisdição voluntária):** muitos procedimentos têm contraparte em procedimento voluntário (notificações, alvarás).' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A **jurisdição voluntária** (CPC arts. 719-770) é a função estatal de **administrar interesses privados** quando a lei exige a intervenção judicial — sem litígio, em regra. Discute-se sua natureza:' },
          { type: 'list', items: [
            '**Tese clássica (administrativa):** não há lide, não há partes (apenas interessados), não há coisa julgada material — é simples administração pública de interesses privados',
            '**Tese moderna (jurisdicional):** o CPC trata como jurisdição (Capítulo XV); STJ e doutrina majoritária consideram jurisdição em sentido próprio, com peculiaridades. Há contraditório (arts. 721-722), recurso (apelação), forma de processo'
          ]},
          { type: 'p', text: '**Características marcantes (arts. 720-725):**' },
          { type: 'list', items: [
            'Início: por requerimento do interessado, MP ou Defensoria (art. 720)',
            'Autuação como processo (art. 720 §único)',
            'Citação dos interessados (art. 721); intimação do MP nas hipóteses do art. 178',
            '**Princípio inquisitivo amplo:** juiz tem AMPLOS poderes de investigação (art. 723) — pode determinar provas de ofício',
            '**Decisão por equidade (art. 723 §único):** o juiz NÃO É OBRIGADO a observar critério de legalidade estrita, podendo adotar SOLUÇÃO QUE REPUTAR MAIS CONVENIENTE OU OPORTUNA. Inovação CPC/15.',
            'Recurso: APELAÇÃO (art. 724)'
          ]},
          { type: 'p', text: '**Vantagem para a candidata:** fundações e curatela são áreas familiares ao MP. Curatela hoje é matéria sensível com a Lei 13.146/15 (Estatuto da PCD).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CPC arts. 719-725** — disposições gerais',
            '**Art. 721** — citação dos interessados',
            '**Art. 723** — poderes do juiz; decisão por EQUIDADE',
            '**Art. 725 (rol exemplificativo)** — emancipação, alienação/arrendamento de bens, alienação/locação de coisa comum, alienação de quinhão, divisão amigável, separações/divórcios consensuais, casamento nuncupativo, sub-rogação, etc.',
            '**Arts. 726-770** — procedimentos específicos (notificações, herança jacente, bens ausentes, etc.)',
            '**Arts. 731-734** — separação e divórcio CONSENSUAIS',
            '**Arts. 737-739** — testamentos',
            '**Arts. 744-745** — herança jacente',
            '**Arts. 747-755** — interdição',
            '**Arts. 759-763** — bens dos ausentes',
            '**Arts. 764-770** — fundações',
            '**Lei 11.441/07 + Resolução 35/2007 CNJ** — separação/divórcio/inventário extrajudiciais',
            '**Lei 13.146/15 (Estatuto da PCD) + Lei 13.703/15** — repercussão na curatela'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Decisão por equidade (art. 723 §único) — INOVAÇÃO do CPC/15' },
          { type: 'p', text: 'Em jurisdição voluntária, o juiz **não fica restrito à legalidade estrita** — pode buscar a solução mais conveniente e oportuna. Isso o aproxima do administrador, mas com garantias processuais. Exemplo: na alienação judicial de bem de incapaz, o juiz pode adotar critério de melhor preço considerando contexto, mesmo se o procedimento padrão seria leilão.' },

          { type: 'h', text: 'Curatela e tomada de decisão apoiada (Lei 13.146/15)' },
          { type: 'p', text: 'O **Estatuto da PCD** modificou profundamente o instituto:' },
          { type: 'list', items: [
            '**Curatela é EXCEPCIONAL e limitada a atos patrimoniais** (CC art. 1.772, redação Lei 13.146)',
            'Pessoas com deficiência são CIVILMENTE CAPAZES — só sujeitas a curatela em circunstâncias específicas',
            '**Tomada de decisão apoiada (CC art. 1.783-A)** — instituto MENOS invasivo: PCD escolhe pelo menos 2 apoiadores; mantém a capacidade civil; juiz homologa; recurso cabível',
            'Procedimento da curatela: arts. 747-758 CPC; oitiva direta do interditando (art. 751); perícia psiquiátrica obrigatória; sentença com limites'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.952.918:** a curatela após o Estatuto da PCD é instituto EXCEPCIONAL, limitado a atos patrimoniais e negociais. Atos existenciais (casar, votar, ter filhos, escolher tratamento) são em regra preservados.' },

          { type: 'h', text: 'Fundações (CPC arts. 764-770 + CC arts. 62-69)' },
          { type: 'p', text: 'Patrimônio destacado, com fim social específico (assistencial, educacional, cultural, religioso etc.). MP é o **fiscalizador OBRIGATÓRIO** das fundações (CC art. 66; CPC art. 770). Funções:' },
          { type: 'list', items: [
            'Aprovar o estatuto (CC art. 65)',
            'Aprovar a alteração do estatuto (CC art. 67)',
            'Apurar contas (CC art. 69)',
            'Promover a extinção (CC art. 69 §único)'
          ]},
          { type: 'p', text: '**Fortíssima conexão com a vivência institucional da candidata** — Promotores de Fundações tem atribuição específica em MGs (Promotorias Especializadas).' },

          { type: 'h', text: 'Separação e divórcio extrajudiciais (Lei 11.441/07)' },
          { type: 'p', text: 'Em cartório, por escritura pública. Requisitos: (i) consenso entre cônjuges; (ii) ausência de filhos menores ou incapazes (com ressalva: se houver, mas as questões deles já foram resolvidas em ação autônoma anterior); (iii) assistência por advogado. CPC art. 733 mantém a sistemática. Mais ágil e barato que o judicial.' },

          { type: 'h', text: 'Coisa julgada na jurisdição voluntária' },
          { type: 'p', text: '**Tema controverso.** Tese clássica: gera apenas coisa julgada FORMAL (porque não há "lide" para julgar). Tese moderna (CPC/15): pode haver coisa julgada material em algumas decisões de mérito (interdição decretada, herança jacente declarada vacante, etc.). STJ tem entendimentos divergentes — fique atento à banca.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Características da jur. voluntária — "INequidade":** **IN**quisitivo, **EQUI**dade (art. 723 §único), **DA**dosidade processual (forma de processo, mas sem lide).' },
          { type: 'box', kind: 'macete', text: '**MP fiscaliza fundações — sempre.** CC art. 66 + CPC art. 770. Mnemônico: "Fundação = MP de plantão".' },
          { type: 'box', kind: 'macete', text: '**Curatela hoje (PCD) — só PATRIMONIAL.** Atos existenciais ficam de fora. Mnemônico: "**P**atrimônio sim, **P**essoa não".' },
          { type: 'box', kind: 'macete', text: '**Tomada de decisão apoiada — pelo menos 2 apoiadores.** Menos invasiva que curatela.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Decisão por equidade (art. 723 §único) NÃO É arbitrariedade** — ainda exige fundamentação adequada (art. 489 §1º). É flexibilização da legalidade estrita, não dispensa.' },
          { type: 'box', kind: 'atencao', text: '**Curatela após PCD é EXCEPCIONAL e LIMITADA a atos patrimoniais.** Banca tenta colocar como instituto amplo (regime CPC/73 antigo).' },
          { type: 'box', kind: 'atencao', text: '**Divórcio/inventário extrajudiciais NÃO ADMITEM filhos menores nem incapazes** (em regra). Erro clássico.' },
          { type: 'box', kind: 'atencao', text: '**Coisa julgada material em jurisdição voluntária — controvertido.** Tese clássica nega; moderna admite parcialmente. Estude as duas posições.' },
          { type: 'box', kind: 'atencao', text: '**Tomada de decisão apoiada ≠ curatela.** Diferenças: TDA é a pedido do PCD; curatela é judicialmente imposta. TDA preserva capacidade; curatela limita.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 3 (jurisdição):** debate sobre natureza administrativa × jurisdicional reaparece aqui com nuances específicas.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** atribuição obrigatória do MP em fundações (CC art. 66; CPC art. 770) — vivência institucional cotidiana.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 4 (capacidade):** curatela impacta capacidade processual (art. 71) — leitura conjunta.' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O **processo de execução** (CPC arts. 771-925) busca a satisfação de obrigações fundadas em **TÍTULO EXECUTIVO EXTRAJUDICIAL** (TEEx) — distinguindo-se do CUMPRIMENTO de sentença (Tópico 12), que é fase do mesmo processo de conhecimento e tem por base TÍTULO JUDICIAL.' },
          {
            type: 'table',
            headers: ['Critério', 'Cumprimento de sentença (Tópico 12)', 'Execução autônoma (Tópico 15)'],
            rows: [
              ['Título', 'Judicial (sentença, decisão)', 'Extrajudicial (cheque, contrato, etc.)'],
              ['Estrutura', 'FASE do processo de conhecimento (sincretismo)', 'PROCESSO autônomo'],
              ['Defesa', 'Impugnação ao cumprimento (art. 525)', 'Embargos à execução (art. 914)'],
              ['Garantia para defender', 'Não exige', 'Exige (em regra) — exceto pré-executividade'],
              ['Multa do art. 523 (10%)', 'SIM, se não pagar em 15 dias', 'NÃO — execução tem rito próprio']
            ]
          },
          { type: 'p', text: '**Títulos executivos extrajudiciais (art. 784):** cheque, letra de câmbio, nota promissória, duplicata, debênture; contrato garantido por hipoteca, penhor, anticrese, fiança; contrato de seguro de vida em caso de morte; foro e laudêmio; aluguel; honorários advocatícios contratuais; certidão de dívida ativa; e mais. Rol exaustivo.' },
          { type: 'p', text: '**Princípios gerais da execução:**' },
          { type: 'list', items: [
            '**Patrimonialidade** — atinge BENS, não a pessoa (art. 789); única exceção atual: prisão civil do alimentante (CF 5º LXVII)',
            '**Menor onerosidade** (art. 805) — entre dois meios eficazes, opta-se pelo menos gravoso para o devedor',
            '**Disponibilidade do credor** (art. 775) — pode desistir total ou parcialmente da execução',
            '**Especificidade** (art. 776) — execução pelo valor exato + acessórios',
            '**Lealdade processual** (arts. 5º, 77, 774) — atos atentatórios à dignidade gerar multa de até 20%'
          ]}
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CPC arts. 771-805** — disposições gerais',
            '**Art. 784** — TÍTULOS EXECUTIVOS EXTRAJUDICIAIS (rol)',
            '**Arts. 789-790** — responsabilidade patrimonial; bens sujeitos',
            '**Art. 805** — menor onerosidade',
            '**Arts. 824-909** — execução por quantia certa',
            '**Art. 833** — bens IMPENHORÁVEIS',
            '**Art. 835** — ORDEM da penhora (dinheiro 1º)',
            '**Art. 854** — penhora online (SISBAJUD)',
            '**Arts. 910-913** — execução contra Fazenda Pública e alimentos',
            '**Arts. 914-920** — EMBARGOS à execução',
            '**Arts. 921-925** — SUSPENSÃO e EXTINÇÃO',
            '**Art. 921 III + §§** — suspensão por inexistência de bens; PRESCRIÇÃO INTERCORRENTE',
            '**Art. 792** — fraude à execução',
            '**Lei 6.830/80** — execução fiscal (estudo comparativo)'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Bens impenhoráveis (art. 833) — rol' },
          { type: 'p', text: 'Hipóteses (10 incisos):' },
          { type: 'list', items: [
            '**I** — bens inalienáveis e os declarados, por ato voluntário, não sujeitos a execução',
            '**II** — móveis, pertences e utilidades domésticas (que não ultrapassem médio padrão)',
            '**III** — vestuário, salvo de elevado valor',
            '**IV** — VENCIMENTOS, SOLDOS, SALÁRIOS, REMUNERAÇÕES, PROVENTOS DE APOSENTADORIA, pensões, etc., **salvo para alimentos** ou quantias acima de **50 SALÁRIOS-MÍNIMOS** mensais (Súmula 394/STJ + art. 833 §2º)',
            '**V** — livros, máquinas, ferramentas, utensílios necessários ao exercício profissional',
            '**VI** — seguro de vida',
            '**VII** — materiais necessários a obras em andamento',
            '**VIII** — pequena propriedade rural (até 4 módulos fiscais), de proveito pessoal',
            '**IX** — recursos públicos do FPM/FPE (recebidos por entes federados)',
            '**X** — quantia depositada em caderneta de poupança até **40 SM**',
            '**XI** — recursos do Fundo Garantidor por Tempo de Serviço (FGTS — não são impenhoráveis para alimentos)'
          ]},
          { type: 'p', text: '**Bem de família (Lei 8.009/90)** — impenhorabilidade adicional, fora do art. 833. Exceções: dívida do próprio imóvel (IPTU, condomínio), fiança em locação (até 2018; após: STF derrubou em alguns casos — RE 605.709, repercussão geral pendente).' },

          { type: 'h', text: 'Ordem da penhora (art. 835)' },
          { type: 'p', text: 'Sequência preferencial: **DINHEIRO** → títulos da dívida pública → títulos e valores mobiliários → veículos → bens imóveis → bens móveis em geral → semoventes → navios e aeronaves → ações de S/A; quotas de sociedade simples → percentual do faturamento da empresa → pedras preciosas → outros direitos.' },
          { type: 'p', text: '**Penhora online (SISBAJUD — sucessor do BacenJud, CNJ Resolução 524):** ordem AUTOMATIZADA de bloqueio de valores em conta. Notificação prévia do devedor é DISPENSADA — surpresa é da essência. Apenas notificação posterior para impugnar irregularidade do bloqueio (art. 854 §3º).' },

          { type: 'h', text: 'Embargos à execução (arts. 914-920)' },
          { type: 'p', text: '**Características:**' },
          { type: 'list', items: [
            'Ação INCIDENTAL e AUTÔNOMA (mesmos autos não, autos apartados)',
            'Prazo: **15 DIAS ÚTEIS** (art. 915), conta-se da JUNTADA do mandado de citação (não do CUMPRIMENTO)',
            'NÃO EXIGE garantia da execução (CPC/15 — diferente do CPC/73). Mas SUSPENSÃO da execução exige garantia (art. 919 §1º)',
            'Matérias: TODAS — impugnação ao título, da execução em si, ao mérito do crédito, prescrição, etc. (art. 917)',
            'Recurso da decisão dos embargos: APELAÇÃO'
          ]},
          { type: 'h', text: 'Exceção de pré-executividade — defesa atípica' },
          { type: 'p', text: 'Construção doutrinária e jurisprudencial (Pontes de Miranda) — defesa nos próprios autos da execução, sem garantia, para matérias **conhecíveis de ofício** que **não exijam dilação probatória**. Súmula 393/STJ: "A exceção de pré-executividade é admissível na execução fiscal RELATIVAMENTE a matérias conhecíveis de ofício que NÃO DEMANDEM dilação probatória."' },
          { type: 'p', text: '**Hipóteses típicas:** prescrição, ilegitimidade evidente, inexigibilidade do título por documento incontroverso, pagamento documentalmente provado, excesso aritmético óbvio.' },

          { type: 'h', text: 'Fraude à execução × fraude contra credores' },
          { type: 'p', text: 'Distinção CRUCIAL:' },
          {
            type: 'table',
            headers: ['Aspecto', 'Fraude à execução (CPC 792)', 'Fraude contra credores (CC 158-165)'],
            rows: [
              ['Natureza', 'Vício processual', 'Vício de DIREITO MATERIAL'],
              ['Procedimento', 'Reconhecida nos autos da execução (incidente)', 'Exige AÇÃO PAULIANA autônoma'],
              ['Requisito subjetivo', 'Indiferente em regra — basta a ação real ou execução em curso', 'Exige consilium fraudis (má-fé)'],
              ['Quando ocorre', 'Após início da ação real ou execução', 'Antes ou independente'],
              ['Consequência', 'INEFICÁCIA do ato em relação ao credor', 'ANULABILIDADE do ato (CC 165)']
            ]
          },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 375:** "O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova da má-fé do terceiro adquirente." Tese vinculante na prática.' },

          { type: 'h', text: 'Suspensão por ausência de bens e prescrição intercorrente (art. 921)' },
          { type: 'p', text: 'Quando não há bens penhoráveis (inciso III), a execução é SUSPENSA por **1 ANO** (art. 921 §1º). Após esse prazo, sem nova manifestação do credor, INICIA-SE A PRESCRIÇÃO INTERCORRENTE (art. 921 §4º) — pelo prazo da pretensão (geralmente 5 anos para tributárias, conforme título material).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.030 (REsp 1.604.412):** o prazo da prescrição intercorrente conta-se a partir do **fim do prazo de suspensão de 1 ano**, mesmo sem decisão expressa do juiz. CPC/15 internalizou a Súmula 314/STJ.' },

          { type: 'h', text: 'Atipicidade dos meios executivos (art. 139 IV) na execução' },
          { type: 'p', text: 'STJ Tema 1.137: cabíveis (CNH, passaporte, cartão), mas com critérios de proporcionalidade (esgotamento de meios típicos, demonstração de patrimônio compatível, decisão fundamentada). Aplica-se à execução autônoma e ao cumprimento.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Cumprimento × Execução — "JUDicial × EXTrajudicial":** **JUD**icial = cumprimento (Tópico 12); **EXT**rajudicial = execução (Tópico 15).' },
          { type: 'box', kind: 'macete', text: '**Ordem da penhora — "DiTiTiViMo":** **Di**nheiro, **Ti**tulos da dívida, **Ti**tulos privados, **Vi**culos, **Mo**veis e imóveis...' },
          { type: 'box', kind: 'macete', text: '**Salário impenhorável — exceção dupla:** **A**limentos e quantias acima de **50 SM** (art. 833 §2º + Súmula 394).' },
          { type: 'box', kind: 'macete', text: '**Embargos à execução — "15 dias da JUNTADA":** prazo conta da juntada do mandado de citação (não da efetiva citação).' },
          { type: 'box', kind: 'macete', text: '**Pré-executividade — "Conhecível + Sem dilação"** = Súmula 393/STJ. Sem essas duas, exige embargos.' },
          { type: 'box', kind: 'macete', text: '**Prescrição intercorrente — 1 ano de suspensão + prazo prescricional do título.**' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Embargos à execução NÃO EXIGEM GARANTIA no CPC/15** (mudança do CPC/73). Mas a SUSPENSÃO da execução exige (art. 919 §1º).' },
          { type: 'box', kind: 'atencao', text: '**Pré-executividade NÃO É RECURSO** — é defesa atípica nos próprios autos. Não tem prazo (cabível enquanto não preclusas as matérias).' },
          { type: 'box', kind: 'atencao', text: '**Salário acima de 50 SM é PENHORÁVEL** no excedente (art. 833 §2º). Erro frequente: dizer impenhorável em qualquer hipótese.' },
          { type: 'box', kind: 'atencao', text: '**Bem de família — fiança em locação:** o STF (RE 605.709) tem afastado a penhorabilidade do fiador em alguns casos. Tema controverso, acompanhar jurisprudência.' },
          { type: 'box', kind: 'atencao', text: '**Fraude à execução × contra credores:** a primeira é vício processual reconhecido na execução; a segunda exige ação pauliana. Pegadinha clássica.' },
          { type: 'box', kind: 'atencao', text: '**Penhora online (SISBAJUD) NÃO exige notificação prévia** (art. 854 caput). Surpresa é da essência. Apenas a posterior, para impugnar.' },
          { type: 'box', kind: 'atencao', text: '**Caderneta de poupança impenhorável até 40 SM** (art. 833 X) — tema novo no CPC/15. Limite POR caderneta, não somatório.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 4 (intervenções):** IDPJ pode ser instaurado na execução para alcançar bens dos sócios (Tema 1.019/STJ).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 7 (juiz):** atipicidade do art. 139 IV é manifestação dos poderes do juiz; central na execução moderna.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 12 (cumprimento):** muitas regras são compartilhadas (impenhorabilidade, ordem da penhora) — leitura conjunta.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** decisão dos embargos = apelação. Pré-executividade rejeitada = agravo de instrumento (art. 1.015 § único).' }
        ]
      }
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
      {
        h: 'Estratégia',
        items: [
          { type: 'box', kind: 'info', text: '**Tópico GIGANTE.** Estude por blocos: (1) processos nos tribunais (ordem, originárias); (2) teoria geral dos recursos; (3) recursos em espécie; (4) RE/REsp/agravos; (5) sistema de precedentes; (6) IRDR/IAC. Reserve 10-12 dias.' }
        ]
      },
      {
        h: 'Princípios e teoria geral dos recursos',
        items: [
          { type: 'p', text: '**Recurso** é remédio voluntário, idôneo a impugnar, no mesmo processo, ato decisório. Princípios:' },
          { type: 'list', items: [
            '**Voluntariedade** — depende da provocação da parte legitimada',
            '**Taxatividade** — apenas os recursos previstos em lei (rol exaustivo no art. 994)',
            '**Singularidade** — para cada decisão, um recurso (regra; salvo RE + REsp simultâneos)',
            '**Fungibilidade** — admitida em caso de dúvida razoável (não erro grosseiro) + tempestividade do recurso correto',
            '**Dialeticidade** — necessidade de razões; impugnação específica',
            '**Devolutividade** — devolve a matéria ao tribunal nos limites pedidos (tantum devolutum quantum appellatum) + efeito translativo (matérias de ordem pública sobem mesmo sem recorrida)',
            '**Suspensividade** — alguns têm efeito suspensivo automático (apelação, regra), outros não (agravo)',
            '**Vedação à reforma para pior (non reformatio in pejus)** — salvo recurso adesivo do adversário ou matérias de ordem pública',
            '**Complementaridade** — possibilidade de aditar razões em embargos de declaração',
            '**Proibição da reformatio in pejus** — referência expressa do CPC/15'
          ]},
          { type: 'p', text: '**Pressupostos recursais (admissibilidade):**' },
          {
            type: 'table',
            headers: ['Pressuposto', 'Categoria', 'Significado'],
            rows: [
              ['Cabimento', 'Objetivo', 'Recurso adequado e existente para a decisão'],
              ['Tempestividade', 'Objetivo', 'Dentro do prazo (15 dias regra; 5 ED; 30 RO)'],
              ['Preparo', 'Objetivo', 'Pagamento das custas; isentos: gratuidade, MP, DP, Fazenda (art. 1.007 §1º)'],
              ['Regularidade formal', 'Objetivo', 'Razões, contrarrazões, peças essenciais (no AI)'],
              ['Inexistência de fato impeditivo', 'Objetivo', 'Não desistência, renúncia, aceitação tácita'],
              ['Legitimidade', 'Subjetivo', 'Parte vencida, terceiro prejudicado, MP (art. 996)'],
              ['Interesse', 'Subjetivo', 'Sucumbência (necessidade + utilidade)']
            ]
          },
          { type: 'p', text: '**Prazos uniformizados (CPC/15 — art. 1.003):** **15 DIAS ÚTEIS** para a maioria; **5 dias** para embargos de declaração (art. 1.023); **30 dias** para recurso ordinário em causas internacionais (art. 1.027 §3º). Conta-se da intimação do advogado (DJe) — não da publicação no DOU.' }
        ]
      },
      {
        h: 'Recursos em espécie (art. 994)',
        items: [
          { type: 'h', text: 'Apelação (arts. 1.009-1.014)' },
          { type: 'p', text: '**Cabe** contra SENTENÇA. Prazo 15 dias úteis. **Efeito suspensivo é REGRA** (art. 1.012) — exceções no §1º (homologação de divórcio, condenação alimentar, decreto de interdição etc.). **Efeito devolutivo + translativo** — devolve toda a matéria do mérito impugnada + matérias cognoscíveis de ofício.' },
          { type: 'p', text: '**Inovação CPC/15 (art. 1.013 §3º):** TEORIA DA CAUSA MADURA — se a sentença é apenas terminativa (sem mérito), o tribunal pode JULGAR DIRETO O MÉRITO se a causa estiver pronta para julgamento (art. 1.013 §3º). Inversão da lógica do CPC/73 (que devolvia para a 1ª instância).' },
          { type: 'h', text: 'Agravo de instrumento (arts. 1.015-1.020)' },
          { type: 'p', text: '**Cabe** contra DECISÕES INTERLOCUTÓRIAS — mas APENAS as taxativamente previstas no art. 1.015 (rol):' },
          { type: 'list', items: [
            'I — tutelas provisórias',
            'II — mérito do processo (julgamento parcial)',
            'III — rejeição da alegação de convenção de arbitragem',
            'IV — incidente de desconsideração da personalidade jurídica',
            'V — rejeição do pedido de gratuidade ou acolhimento do pedido de revogação',
            'VI — exibição ou posse de documento ou coisa',
            'VII — exclusão de litisconsorte',
            'VIII — rejeição de limitação do litisconsórcio',
            'IX — admissão ou inadmissão de intervenção de terceiros',
            'X — concessão, modificação ou revogação do efeito suspensivo aos embargos à execução',
            'XI — redistribuição do ônus da prova nos termos do art. 373 §1º',
            'XIII — outros casos expressamente referidos em lei',
            'Parágrafo único — também em liquidação, cumprimento, execução e inventário'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 988 (REsp 1.704.520):** o rol do art. 1.015 é de TAXATIVIDADE MITIGADA — admite-se interpretação EXTENSIVA para hipóteses análogas, em casos de URGÊNCIA decorrente da inutilidade do julgamento da apelação. **Tese revolucionária**, marca a jurisprudência do CPC/15.' },
          { type: 'p', text: 'Decisões interlocutórias NÃO recorríveis por agravo: **PRECLUSÃO TARDIA** — discutidas em PRELIMINAR DE APELAÇÃO ou em CONTRARRAZÕES (art. 1.009 §1º). Engenhoso mecanismo do CPC/15.' },
          { type: 'h', text: 'Agravo interno (art. 1.021)' },
          { type: 'p', text: 'Recurso contra DECISÃO MONOCRÁTICA do relator. Prazo 15 dias. Levado ao colegiado (turma, câmara). Pode ter sucumbência recursal (art. 85 §11).' },
          { type: 'h', text: 'Embargos de declaração (arts. 1.022-1.026)' },
          { type: 'p', text: 'Cabíveis contra QUALQUER decisão (sentença, acórdão, interlocutória). Prazo: **5 DIAS**. Hipóteses (art. 1.022):' },
          { type: 'list', items: [
            'I — esclarecer obscuridade ou eliminar contradição',
            'II — suprir omissão (incluindo omissão sobre matéria que o juiz devia decidir de ofício)',
            'III — corrigir erro material',
            'Parágrafo único — também: omissão decorrente do art. 489 §1º (fundamentação inadequada)'
          ]},
          { type: 'p', text: '**Efeito INTERRUPTIVO** (art. 1.026 caput) do prazo dos demais recursos para TODAS AS PARTES. Mudança em relação ao CPC/73 (que era apenas suspensivo). Importante.' },
          { type: 'p', text: '**Multa por embargos protelatórios (art. 1.026 §§2º-3º):** até 2% do valor atualizado da causa (1ª oposição); até 10% (segunda oposição). Reiteração condicionada a depósito.' },
          { type: 'h', text: 'Recurso ordinário (arts. 1.027-1.028)' },
          { type: 'p', text: 'Cabe ao STJ contra: (i) MS, HC, MI, HD denegados pelos TJs e TRFs; (ii) causas em que figurem como partes Estado estrangeiro × residente no Brasil. Cabe ao STF contra: MS, HC, MI, HD denegados em única instância pelos tribunais superiores.' },
          { type: 'h', text: 'Recurso Extraordinário e Recurso Especial' },
          { type: 'p', text: '**RE (CF art. 102 III):** cabe ao STF contra decisão de única ou última instância que: (a) contrariar dispositivo da CF; (b) declarar a inconstitucionalidade de tratado ou lei federal; (c) julgar válida lei ou ato local contestado em face da CF; (d) julgar válida lei local contestada em face de lei federal.' },
          { type: 'p', text: '**REsp (CF art. 105 III):** cabe ao STJ contra decisão de única ou última instância de TJ ou TRF que: (a) contrariar tratado ou lei federal, ou negar-lhes vigência; (b) julgar válido ato de governo local contestado em face de lei federal; (c) der à lei federal interpretação divergente da que lhe haja atribuído outro tribunal.' },
          { type: 'p', text: '**Pressupostos comuns: prequestionamento** (a matéria deve ter sido enfrentada na decisão recorrida); decisão de última instância; recurso intempestivo, etc. **Súmulas críticas:** 7/STJ (incompatibilidade com reexame de prova), 280/STF (matéria local), 282 e 356 do STF (prequestionamento).' },
          { type: 'p', text: '**Repercussão geral no RE (CF 102 §3º + CPC arts. 1.035-1.041):** existência de questões relevantes do ponto de vista econômico, político, social ou jurídico que ultrapassem os interesses subjetivos da causa. **Relevância no REsp (EC 125/2022 + Lei 14.344):** introduzido em 2022 — análogo à repercussão geral, em fase de implementação.' },
          { type: 'h', text: 'Embargos de divergência (arts. 1.043-1.044)' },
          { type: 'p', text: 'Cabíveis no STF e STJ contra acórdão de turma que divirja de outra turma, da seção ou do órgão especial sobre direito federal. Função uniformizadora interna.' },
          { type: 'h', text: 'Agravo em RE/REsp (art. 1.042)' },
          { type: 'p', text: 'Cabe contra decisão do tribunal de origem que NÃO ADMITE RE/REsp. Sobe direto para STF/STJ. Prazo 15 dias.' }
        ]
      },
      {
        h: 'Sistema de precedentes (arts. 926-928)',
        items: [
          { type: 'h', text: 'Marco constitucional do CPC/15' },
          { type: 'p', text: 'O CPC/15 institucionaliza um SISTEMA DE PRECEDENTES VINCULANTES — busca dar efetividade à isonomia, segurança jurídica e celeridade. Arts. 926-928 são "constitucionais do código".' },
          { type: 'p', text: '**Dever dos tribunais (art. 926):** uniformizar jurisprudência, mantê-la **estável**, **íntegra** e **coerente**.' },
          { type: 'h', text: 'Precedentes VINCULANTES (art. 927)' },
          { type: 'p', text: 'O juiz e o tribunal **OBSERVARÃO**:' },
          { type: 'list', items: [
            '**I** — decisões do STF em CONTROLE CONCENTRADO de constitucionalidade (ADI, ADC, ADPF)',
            '**II** — enunciados de SÚMULA VINCULANTE',
            '**III** — acórdãos em IAC, IRDR e em julgamento de RECURSOS REPETITIVOS (STF e STJ)',
            '**IV** — enunciados de SÚMULA do STF em matéria CONSTITUCIONAL e do STJ em matéria FEDERAL',
            '**V** — orientação do plenário ou órgão especial dos tribunais aos quais estiverem vinculados'
          ]},
          { type: 'p', text: '**Categorias com mais força:** I, II e III são vinculantes em sentido FORTE; IV e V em sentido mais brando (devem ser observados com motivação para distinguir).' },
          { type: 'h', text: 'Conceitos centrais — ratio decidendi, distinguishing, overruling' },
          { type: 'list', items: [
            '**Ratio decidendi** — fundamento JURÍDICO determinante da decisão; é o que vincula',
            '**Obiter dictum** — observações laterais, sem força vinculante',
            '**Distinguishing** — distinção: o caso atual difere do precedente em aspecto relevante; afasta a aplicação (não desafia o precedente)',
            '**Overruling** — superação: o precedente é alterado ou abandonado pelo próprio tribunal (mudança expressa da jurisprudência); pode haver MODULAÇÃO de efeitos (CPC art. 927 §3º)'
          ]},
          { type: 'p', text: '**Fundamentação que descumpre o precedente sem distinguir/superar é NULA** (art. 489 §1º V e VI). Ligação umbilical com a fundamentação substancial estudada no Tópico 11.' },
          { type: 'h', text: 'IRDR — Incidente de Resolução de Demandas Repetitivas (arts. 976-987)' },
          { type: 'p', text: 'Instaurado quando há (cumulativamente — art. 976):' },
          { type: 'list', items: [
            'EFETIVA REPETIÇÃO de processos com idêntica questão UNICAMENTE DE DIREITO',
            'RISCO DE OFENSA À ISONOMIA e à segurança jurídica'
          ]},
          { type: 'p', text: '**Legitimidade:** juiz/relator de ofício; partes; MP; Defensoria Pública (art. 977). **Competência:** TJ ou TRF. **Suspensão:** todos os processos pendentes sobre a matéria, no Estado ou na região, ficam suspensos por 1 ano (art. 982). **Tese fixada:** vincula todos os processos, presentes e futuros, no âmbito do tribunal — pode subir ao STF/STJ por RE/REsp para extensão nacional (art. 987).' },
          { type: 'h', text: 'IAC — Incidente de Assunção de Competência (art. 947)' },
          { type: 'p', text: 'Quando o relator propõe, há relevante questão de direito com grande repercussão social, sem repetição em múltiplos processos. Levado ao órgão indicado pelo regimento. Tese vincula todos os juízes e órgãos fracionários (art. 947 §3º).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CPC arts. 926-928** — sistema de precedentes',
            '**Arts. 932-947** — processos nos tribunais; relator; IAC',
            '**Arts. 976-987** — IRDR',
            '**Arts. 988-1.044** — recursos',
            '**Art. 1.003** — prazos recursais',
            '**Art. 1.007** — preparo',
            '**Art. 1.009** — apelação',
            '**Art. 1.013 §3º** — teoria da causa madura',
            '**Art. 1.015** — agravo de instrumento (rol)',
            '**Art. 1.022** — embargos de declaração',
            '**Arts. 1.027-1.028** — recurso ordinário',
            '**Arts. 1.029-1.041** — RE e REsp; repetitivos',
            '**Art. 1.035** — repercussão geral no RE',
            '**Arts. 1.043-1.044** — embargos de divergência',
            '**CF/88 arts. 102 (STF), 103-A (SV), 105 (STJ)**'
          ]}
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Prazos recursais — "15-5-30":** **15** dias regra (apelação, AI, AInt, RE, REsp); **5** dias embargos de declaração; **30** dias RO em causa internacional.' },
          { type: 'box', kind: 'macete', text: '**Pressupostos recursais — "CTP-RIL":** **C**abimento, **T**empestividade, **P**reparo, **R**egularidade, **I**nteresse, **L**egitimidade.' },
          { type: 'box', kind: 'macete', text: '**Precedentes do art. 927 (5 categorias) — "CCISO":** **C**ontrole concentrado, **C**oncreto vinculante (SV), **I**ncidentes (IAC/IRDR/repetitivos), **S**úmulas STF/STJ, **O**rientação do plenário/OE.' },
          { type: 'box', kind: 'macete', text: '**Distinguishing × Overruling — "DistOvR":** **Dist**inguishing = caso DIFERENTE; **Ov**erR**uling** = precedente SUPERADO.' },
          { type: 'box', kind: 'macete', text: '**Causa madura (1.013 §3º) — "STM-J":** **S**entença **T**erminativa (sem mérito) + causa **J**ulgável → tribunal decide direto.' },
          { type: 'box', kind: 'macete', text: '**ED interrompe (não suspende) o prazo dos demais recursos para todas as partes — art. 1.026.** Inovação CPC/15.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Rol do art. 1.015 é TAXATIVO MITIGADO** (Tema 988/STJ) — admite extensão por interpretação em URGÊNCIA. NÃO é exclusivo nem totalmente livre.' },
          { type: 'box', kind: 'atencao', text: '**Decisões interlocutórias não agraváveis = preclusão TARDIA** (art. 1.009 §1º) — discutidas na apelação ou contrarrazões. Erro frequente: dizer que precluem definitivamente.' },
          { type: 'box', kind: 'atencao', text: '**Apelação tem efeito suspensivo de REGRA** (art. 1.012) — mas exceções importantes (alimentos, divórcio, interdição). Erro: assumir efeito sempre suspensivo.' },
          { type: 'box', kind: 'atencao', text: '**Causa madura (1.013 §3º) só se aplica a sentenças TERMINATIVAS** — tribunal pode julgar direto se causa estiver pronta. Não se aplica a sentenças de mérito improcedentes (já decididas).' },
          { type: 'box', kind: 'atencao', text: '**ED INTERROMPEM (não suspendem) o prazo recursal — para TODAS as partes** (art. 1.026). Mudança crítica do CPC/15.' },
          { type: 'box', kind: 'atencao', text: '**Súmula 7/STJ × Súmula 279/STF:** ambas vedam reexame de prova em RE/REsp — pegadinha clássica de cabimento.' },
          { type: 'box', kind: 'atencao', text: '**MP RECORRE como fiscal** (Súmula 99/STJ — Tópico 5) — mesmo se a parte não recorrer.' },
          { type: 'box', kind: 'atencao', text: '**IRDR exige questão UNICAMENTE DE DIREITO + REPETIÇÃO efetiva** — questão de fato não cabe; mera potencialidade não basta.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** fundamentação substancial (art. 489 §1º) e dever de seguir/distinguir precedentes — base do sistema de art. 927.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 9 (tutela provisória):** decisão sobre tutela = agravo de instrumento (art. 1.015 I).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 19 (MS):** RO contra MS denegado por TJ/TRF (art. 1.027 II) ou pelos tribunais superiores (RO ao STF).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 20 (ACP):** IRDR pode ser usado para padronizar decisões em ações coletivas seriadas.' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O direito constitucional à assistência jurídica integral e gratuita (CF art. 5º LXXIV) materializa-se em três institutos distintos, frequentemente confundidos:' },
          {
            type: 'table',
            headers: ['Instituto', 'Conteúdo', 'Quem provê'],
            rows: [
              ['Gratuidade da justiça', 'Isenção de despesas processuais (custas, perícia, etc.)', 'Estado (judiciário; é benefício processual)'],
              ['Assistência judiciária', 'Patrocínio gratuito por advogado pago pelo Estado', 'Defensoria ou advogado dativo'],
              ['Assistência jurídica integral', 'Orientação + extrajudicial + judicial', 'Defensoria Pública (CF 134; LC 80/94)']
            ]
          },
          { type: 'p', text: 'O CPC/15 disciplina sobretudo a **gratuidade da justiça** (arts. 98-102), substituindo a antiga Lei 1.060/50 nos pontos essenciais.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CPC arts. 98-102** — gratuidade da justiça',
            '**Art. 98** — quem tem direito (pessoa natural ou jurídica BR ou estrangeira); rol de despesas isentas (§1º — custas, honorários, depósitos, perícia, etc.)',
            '**Art. 98 §3º** — vencido em sucumbência: dívida fica suspensa por 5 anos; só exigível se demonstrada cessação da hipossuficiência',
            '**Art. 99** — requerimento (na PI, contestação, petição simples, recurso)',
            '**Art. 99 §2º** — presunção de veracidade da declaração da pessoa natural',
            '**Art. 99 §3º** — concedida a gratuidade, é revogável quando descabida',
            '**Art. 100** — IMPUGNAÇÃO à gratuidade (preliminar de contestação ou peça apartada)',
            '**Art. 101** — recurso da decisão que indefere ou revoga: AGRAVO DE INSTRUMENTO se em decisão interlocutória; APELAÇÃO se em sentença',
            '**Art. 102** — cessada a impossibilidade, o beneficiário deve PAGAR as despesas das quais ficou isento',
            '**CF art. 5º LXXIV** — assistência jurídica integral e gratuita aos comprovadamente necessitados',
            '**Lei 1.060/50** — no que não revogado pelo CPC',
            '**LC 80/94** — Defensoria Pública'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Beneficiários da gratuidade' },
          { type: 'p', text: '**Pessoa natural (art. 99 §3º):** PRESUNÇÃO RELATIVA de veracidade da declaração de hipossuficiência. O juiz pode determinar comprovação se houver elementos no processo que contrariem a presunção (art. 99 §2º).' },
          { type: 'p', text: '**Pessoa jurídica:** SEM presunção. Deve **PROVAR** a hipossuficiência financeira (Súmula 481/STJ).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 481:** "Faz jus ao benefício da justiça gratuita a PESSOA JURÍDICA que comprovar sua impossibilidade de arcar com os encargos processuais." Aplica-se mesmo a sociedades empresárias, com fins lucrativos, em situação econômica adversa.' },

          { type: 'h', text: 'Concessão parcial e em prestações' },
          { type: 'p', text: 'Inovação CPC/15 (art. 98 §§5º-6º): a gratuidade pode ser CONCEDIDA EM RELAÇÃO A APENAS ALGUM ATO ou reduzir o percentual de despesas. Pode também ser PARCELADO o pagamento das custas. Atende ao princípio da menor onerosidade e da proteção parcial do necessitado.' },

          { type: 'h', text: 'Sucumbência do beneficiário (art. 98 §3º) — regra de ouro' },
          { type: 'p', text: 'O beneficiário da gratuidade que perde a causa É CONDENADO em sucumbência (honorários, custas, multas), mas a exigibilidade fica **SUSPENSA POR 5 ANOS**. Cessada a hipossuficiência nesse prazo, exige-se. Esgotado o prazo sem mudança, há prescrição da pretensão (art. 98 §3º final).' },
          { type: 'p', text: 'Mecanismo PROTEGE o necessitado sem fomentar a litigância irresponsável — o ônus existe, só não é cobrado de imediato.' },

          { type: 'h', text: 'Impugnação à gratuidade (art. 100)' },
          { type: 'p', text: 'O adversário pode impugnar a gratuidade concedida — em **PRELIMINAR DE CONTESTAÇÃO** ou em **PETIÇÃO SIMPLES** (autuada em apartado para não atrapalhar o processo principal). O ônus da prova da capacidade financeira é DO IMPUGNANTE (art. 100 §único). Decisão = AI ou apelação conforme o momento.' },

          { type: 'h', text: 'Defensoria Pública e assistência jurídica integral' },
          { type: 'p', text: 'A DP (CF art. 134) tem o monopólio constitucional da assistência jurídica integral aos necessitados. Atribuições (LC 80/94 art. 4º):' },
          { type: 'list', items: [
            'Orientação jurídica',
            'Patrocínio nos diferentes graus de jurisdição',
            'Promoção da DEFESA, em todos os graus, judicial e extrajudicial',
            'Promoção da TUTELA COLETIVA (DP tem legitimidade para ACP — art. 4º X; ampliada pelo STF — Tema 884)',
            'Curador especial (CPC art. 72 — Tópico 4)'
          ]},
          { type: 'p', text: 'Em comarcas onde NÃO HÁ DP suficiente, o juiz nomeia ADVOGADO DATIVO, pago pelo Estado. Sistema híbrido.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**3 institutos da assistência — "GAJ":** **G**ratuidade (não pagar custas), **A**ssistência judiciária (advogado), **J**urídica integral (DP — orienta + judicial + extrajudicial).' },
          { type: 'box', kind: 'macete', text: '**PF presume hipossuficiência; PJ PROVA** (Súmula 481/STJ).' },
          { type: 'box', kind: 'macete', text: '**Sucumbência do beneficiário — suspende por 5 anos** (art. 98 §3º). Cessada a pobreza no prazo, exige-se. Após, prescreve.' },
          { type: 'box', kind: 'macete', text: '**Impugnação à gratuidade — em apartado, sem suspender o processo principal** (art. 100). Ônus do impugnante.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**PJ pode ser beneficiária**, sim — mas DEVE PROVAR (Súmula 481/STJ). Erro frequente: dizer que apenas PF tem direito.' },
          { type: 'box', kind: 'atencao', text: '**Beneficiário NÃO É ISENTO de sucumbência** — a obrigação existe, fica SUSPENSA por 5 anos (art. 98 §3º).' },
          { type: 'box', kind: 'atencao', text: '**Gratuidade pode ser PARCIAL ou em PRESTAÇÕES** (art. 98 §§5º-6º) — não é all-or-nothing.' },
          { type: 'box', kind: 'atencao', text: '**Gratuidade × assistência judiciária** — gratuidade isenta de custas; assistência judiciária garante advogado. Não confundir.' },
          { type: 'box', kind: 'atencao', text: '**A presunção do art. 99 §3º é RELATIVA** — juiz pode exigir prova se houver indícios em sentido contrário.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (Defensoria):** assistência jurídica integral é função institucional da DP. Curador especial é CPC art. 72.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** gratuidade pode ser pedida na PI, contestação ou em qualquer momento (art. 99).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** preparo é dispensado para o beneficiário (art. 1.007 §1º).' }
        ]
      }
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
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Os Juizados Especiais (CF art. 98 I + leis específicas) materializam o **acesso popular à Justiça** com rito simplificado, oralidade, informalidade e celeridade. São três modalidades:' },
          {
            type: 'table',
            headers: ['Tipo', 'Lei', 'Limite valor', 'Ramo'],
            rows: [
              ['JEC', 'Lei 9.099/95', '40 SM', 'Justiça Estadual'],
              ['JEF', 'Lei 10.259/01', '60 SM', 'Justiça Federal'],
              ['JEFP', 'Lei 12.153/09', '60 SM', 'Estadual contra Estados/DF/Municípios e suas autarquias e fundações']
            ]
          },
          { type: 'p', text: '**Princípios (Lei 9.099 art. 2º):** ORALIDADE, SIMPLICIDADE, INFORMALIDADE, ECONOMIA PROCESSUAL, CELERIDADE. Buscar sempre que possível a CONCILIAÇÃO ou TRANSAÇÃO. Procedimento concentrado: demanda → audiência de conciliação → sessão de instrução e julgamento (AIJ una se possível).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**Lei 9.099/95** — JEC (Juizados Especiais Cíveis estaduais)',
            '**Art. 3º** — competência (rol fechado: causas até 40 SM, despejo para uso próprio, possessórias até 40 SM, e ações enumeradas)',
            '**Art. 8º** — partes (PF capaz; PJ apenas ME, EPP, MEI, OSCIP, sociedades de crédito ao microempreendedor)',
            '**Art. 9º** — capacidade postulatória (advogado dispensado até 20 SM)',
            '**Art. 18** — citação (com prevalência do meio simplificado)',
            '**Arts. 41-50** — recursos (turma recursal)',
            '**Arts. 52-53** — execução',
            '**Lei 10.259/01** — JEF (Justiça Federal)',
            '**Art. 3º** — competência (até 60 SM; rol específico)',
            '**Lei 12.153/09** — JEFP (Estados/DF/Municípios)',
            '**Resolução 159/CNJ** — uniformização',
            '**CF art. 98 I** — base constitucional'
          ]}
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Competência do JEC (Lei 9.099 art. 3º) — rol fechado' },
          { type: 'list', items: [
            'I — causas cujo valor não exceda 40 SM',
            'II — enumeradas no art. 275 II do CPC/73 (cobrança de seguro etc. — interpretação atualizada)',
            'III — ação de despejo para uso próprio',
            'IV — ações possessórias sobre imóveis até 40 SM'
          ]},
          { type: 'p', text: '**EXCLUÍDAS (art. 3º §2º):** causas de natureza alimentar, falimentar, fiscal, de interesse da Fazenda Pública, acidentes de trabalho, resíduos e estado e capacidade. **Vedação ao consignatório como ação principal.**' },
          { type: 'h', text: 'Quem pode ser parte (art. 8º)' },
          { type: 'list', items: [
            '**Pessoa NATURAL CAPAZ** (autor)',
            'PJ apenas: **ME, EPP, MEI**, OSCIPs, sociedades de crédito ao microempreendedor',
            '**Vedado** ao incapaz, preso, PJ de direito público, massa falida, insolvente civil'
          ]},
          { type: 'h', text: 'Capacidade postulatória (art. 9º)' },
          { type: 'p', text: 'ADVOGADO **dispensado até 20 SM**. Acima desse valor é OBRIGATÓRIO. Defensoria atua sem limites. Característica que distingue radicalmente o procedimento — democratização do acesso.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — ADI 1.539:** a obrigatoriedade do advogado em causas acima de 20 SM nos JEC é constitucional, inclusive nos JEFs (Lei 10.259/01) e JEFPs.' },
          { type: 'h', text: 'Recursos nos juizados' },
          { type: 'p', text: 'Sistemática DIFERENCIADA:' },
          { type: 'list', items: [
            '**Recurso inominado** (Lei 9.099 art. 41) — contra a sentença, prazo 10 dias, ao colegiado da TURMA RECURSAL (juízes de 1º grau)',
            '**Embargos de declaração** (art. 48) — 5 dias',
            '**RE (CF 102 III)** — cabível, com REPERCUSSÃO GERAL',
            '**REsp NÃO CABE** — Súmula 203/STJ'
          ]},
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 203:** "Não cabe recurso especial contra decisão proferida por órgão de segundo grau dos JUIZADOS ESPECIAIS." Tese consolidada — defensa diferenciada de competência.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 640:** "Cabe embargos de declaração no JEC contra acórdão proferido pela Turma Recursal." Reforça o ED como recurso comum em todos os graus.' },
          { type: 'box', kind: 'jurisprudencia', text: '**TNU — Súmula 8:** "É cabível mandado de segurança contra ato judicial nos juizados especiais para fins de impugnação de decisão da turma recursal." Solução para falta de outro recurso adequado.' },
          { type: 'h', text: 'JEFP (Lei 12.153/09) — peculiaridades' },
          { type: 'list', items: [
            'Quem demanda CONTRA o ente público (não o contrário)',
            'Limite 60 SM',
            'Cabe contra Estados, DF, Municípios e suas autarquias e fundações',
            'NÃO cabe execução fiscal',
            'NÃO cabe ação possessória contra ente público',
            'Conciliação obrigatória — pode-se transacionar conforme decreto regulamentador'
          ]}
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Princípios JEC — "OSICE":** **O**ralidade, **S**implicidade, **I**nformalidade, **C**eleridade, **E**conomia processual.' },
          { type: 'box', kind: 'macete', text: '**Limites — "40-60-60":** **40** SM no JEC; **60** SM no JEF e JEFP.' },
          { type: 'box', kind: 'macete', text: '**Advogado dispensado — "até 20 no JEC".** Acima, obrigatório. Outros juizados sempre.' },
          { type: 'box', kind: 'macete', text: '**Recursos no juizado — "RIDM":** **R**ecurso inominado, **I**nominados, **D**eclaração (ED), **M**andado de segurança (TNU 8).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**REsp NÃO CABE** em juizados (Súmula 203/STJ). RE cabe (com repercussão geral).' },
          { type: 'box', kind: 'atencao', text: '**PJ que pode ser autora — APENAS ME, EPP, MEI, OSCIP**, etc. PJ comum NÃO ENTRA. Pegadinha clássica.' },
          { type: 'box', kind: 'atencao', text: '**Advogado dispensado SÓ ATÉ 20 SM no JEC** (não em todo valor). Acima, obrigatório.' },
          { type: 'box', kind: 'atencao', text: '**Não cabe ação de DESPEJO no JEC, salvo para uso próprio** (art. 3º III). Cuidado com a banca generalizando.' },
          { type: 'box', kind: 'atencao', text: '**JEFP — quem demanda CONTRA o ente público** (não o ente público autor). Cuidado.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (Defensoria):** atua sem limites nos juizados; importante para acesso à justiça.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 8 (atos):** prazos no JEC seguem regime PRÓPRIO (Súmula CJF 99 e enunciados FONAJE — não em dias úteis necessariamente).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** RE cabe nos juizados (com repercussão geral); REsp não.' }
        ]
      }
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
      {
        h: 'Mandado de Segurança — visão geral',
        items: [
          { type: 'p', text: 'O **Mandado de Segurança** (CF art. 5º LXIX, LXX; Lei 12.016/2009) é a ação constitucional adequada para proteger DIREITO LÍQUIDO E CERTO contra ato ilegal ou abusivo de autoridade pública. Espécies: INDIVIDUAL (LXIX) e COLETIVO (LXX).' },
          { type: 'p', text: '**Pressupostos:**' },
          { type: 'list', items: [
            '**Direito LÍQUIDO E CERTO** — comprovado por PROVA PRÉ-CONSTITUÍDA (geralmente documental); sem necessidade de dilação probatória. Conceito processual, NÃO material',
            '**ATO DE AUTORIDADE** — comissivo (atue) ou omissivo (não atue), praticado por autoridade pública ou agente privado no exercício de função pública (art. 1º §1º)',
            '**ILEGALIDADE OU ABUSO DE PODER** — desconformidade com a lei ou desvio de finalidade'
          ]},
          { type: 'p', text: '**Prazo decadencial:** **120 DIAS** da ciência do ato (Lei 12.016 art. 23). É decadência (não prescrição) — o juiz extingue de ofício, sem mérito.' },
          { type: 'p', text: '**Liminar (art. 7º III):** requisitos = (i) **relevância do fundamento (fumus boni iuris)** + (ii) **ineficácia da ordem se concedida apenas ao final (periculum in mora)**. Pode ser exigida CAUÇÃO. Cessa com a sentença, salvo deferimento expresso.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Súmula 269:** "O MS não é substitutivo de ação de cobrança." Conjugada com a **Súmula 271/STF:** "Concessão de MS não produz efeitos patrimoniais em relação ao período pretérito, os quais devem ser reclamados administrativamente ou pela via judicial própria." Tema essencial para PROVA.' }
        ]
      },
      {
        h: 'MS individual (Lei 12.016)',
        items: [
          { type: 'h', text: 'Sujeitos' },
          { type: 'list', items: [
            '**IMPETRANTE** — pessoa natural ou jurídica titular do direito',
            '**IMPETRADO/AUTORIDADE COATORA** — quem praticou o ato (não o ente público; art. 6º §3º, com cuidado)',
            '**LITISCONSORTE PASSIVO** — pessoa jurídica de direito público (art. 6º §1º): notificada para integrar o polo passivo'
          ]},
          { type: 'h', text: 'Procedimento (rito SUMARÍSSIMO)' },
          { type: 'list', items: [
            'PI com prova pré-constituída (art. 6º)',
            'Notificação da autoridade coatora para prestar informações em 10 dias (art. 7º I)',
            'Vista ao MP em 10 dias (art. 12) — intervenção OBRIGATÓRIA como fiscal',
            'Sentença em 30 dias',
            'Recurso: APELAÇÃO em 15 dias',
            'RO em alguns casos (Tópico 16)'
          ]},
          { type: 'h', text: 'MS contra ato judicial — Súmula 267/STF' },
          { type: 'p', text: '**Súmula 267/STF:** "Não cabe MS contra ato judicial passível de recurso ou correição." MS contra ato jurisdicional é EXCEPCIONALÍSSIMO — só cabe quando: (i) o ato é teratológico (manifestamente ilegal); (ii) NÃO cabe recurso com efeito suspensivo; (iii) há perigo de dano irreparável. Aplicação restritiva.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Súmula 268:** "Não cabe MS contra decisão judicial com TRÂNSITO EM JULGADO."' },

          { type: 'h', text: 'Hipóteses NÃO admitidas (art. 5º Lei 12.016)' },
          { type: 'list', items: [
            'I — ato do qual caiba RECURSO ADMINISTRATIVO com efeito suspensivo (independe de caução)',
            'II — decisão judicial da qual CAIBA RECURSO com efeito suspensivo',
            'III — decisão judicial TRANSITADA EM JULGADO'
          ]}
        ]
      },
      {
        h: 'MS Coletivo (CF art. 5º LXX + Lei 12.016 arts. 21-22)',
        items: [
          { type: 'p', text: 'Importante mecanismo de tutela coletiva, especialmente em direito do trabalho, servidores públicos, consumidor. **Vantagem direta para a candidata:** o MP estuda essa interface frequentemente.' },
          { type: 'h', text: 'Legitimados (CF art. 5º LXX)' },
          { type: 'list', items: [
            '**a)** PARTIDO POLÍTICO com representação no CN — defesa de interesses dos seus filiados ou da finalidade partidária',
            '**b)** ORGANIZAÇÃO SINDICAL, ENTIDADE DE CLASSE OU ASSOCIAÇÃO legalmente constituída e em funcionamento há pelo menos 1 ANO — defesa dos interesses de seus membros ou associados'
          ]},
          { type: 'h', text: 'Direitos tuteláveis (Lei 12.016 art. 21 §único)' },
          { type: 'list', items: [
            '**Coletivos** (transindividuais indivisíveis com grupo determinado)',
            '**Individuais homogêneos** (origem comum)',
            'NÃO se aplica a difusos puros — para esses, ACP é a via'
          ]},
          { type: 'h', text: 'Coisa julgada no MS coletivo (art. 22)' },
          { type: 'p', text: 'Ultra partes ou erga omnes (a depender do interesse), MAS limitada aos membros do grupo, categoria ou classe substituídos. NÃO PREJUDICA AS AÇÕES INDIVIDUAIS — autores individuais podem desistir (art. 22 §1º) para se aproveitar da decisão coletiva.' }
        ]
      },
      {
        h: 'Mandado de Injunção (CF art. 5º LXXI + Lei 13.300/2016)',
        items: [
          { type: 'p', text: 'Ação constitucional para proteger contra OMISSÃO LEGISLATIVA OU ADMINISTRATIVA que inviabilize o exercício de DIREITOS E LIBERDADES CONSTITUCIONAIS e PRERROGATIVAS inerentes à NACIONALIDADE, SOBERANIA E CIDADANIA.' },
          { type: 'p', text: '**Cabimento (Lei 13.300 art. 2º):** omissão TOTAL ou PARCIAL de norma reguladora. Pressuposto: prazo razoável já decorrido sem que o omisso atue.' },
          { type: 'h', text: 'MI individual × coletivo' },
          { type: 'list', items: [
            'INDIVIDUAL — quem tem o direito tolhido pela omissão',
            'COLETIVO (art. 12) — MP, partido com rep. no CN, sindicatos, entidades de classe, associação >1 ano, **DEFENSORIA PÚBLICA**'
          ]},
          { type: 'h', text: 'Eficácia da decisão (art. 8º) — debate' },
          { type: 'p', text: 'Duas correntes históricas:' },
          { type: 'list', items: [
            '**Não-concretista** — antiga, predominante até 2007: STF apenas comunica a omissão ao órgão competente',
            '**Concretista** — moderna: STF supre a omissão, regulando o caso (concretista individual) ou a matéria (concretista geral)'
          ]},
          { type: 'p', text: 'A Lei 13.300/16 acolhe a tese **CONCRETISTA INTERMEDIÁRIA**: STF fixa prazo para o omisso atuar; se não cumprir, o STF supre a omissão para o impetrante (art. 8º). Em casos especiais, eficácia ULTRA PARTES (concretista geral).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — MI 670, 708 e 712 (greve dos servidores públicos):** caso paradigma. STF deu eficácia GERAL ao MI, suprindo a omissão do legislador (Lei 7.783/89 sobre direito de greve dos privados aplicada subsidiariamente). Marco da virada concretista.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**CF art. 5º LXIX** — MS individual',
            '**CF art. 5º LXX** — MS coletivo',
            '**CF art. 5º LXXI** — Mandado de Injunção',
            '**Lei 12.016/09** — disciplina processual do MS (DECORE arts. 1º, 5º, 6º, 7º, 12, 21, 22, 23)',
            '**Lei 13.300/16** — Mandado de Injunção'
          ]}
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**MS — 3 pressupostos "DLA-AAI":** **D**ireito **L**íquido e certo — **A**to de autoridade — **A**busividade ou **I**legalidade.' },
          { type: 'box', kind: 'macete', text: '**Prazo decadencial — 120 dias** (Lei 12.016 art. 23). Decadência, não prescrição.' },
          { type: 'box', kind: 'macete', text: '**MS coletivo — legitimados "PASE":** **P**artido (com rep. CN), **A**ssociação >1 ano, **S**indicato, **E**ntidade de classe.' },
          { type: 'box', kind: 'macete', text: '**MI — concretista intermediária da Lei 13.300:** STF fixa PRAZO; se não cumprido, SUPRE a omissão para o impetrante.' },
          { type: 'box', kind: 'macete', text: '**Súmula 269/271 STF — MS não cobra; não tem efeito patrimonial pretérito.** Para isso, ação de cobrança.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**MS é DECADENCIAL — 120 dias** (não prescrição). Juiz extingue de ofício se estourar.' },
          { type: 'box', kind: 'atencao', text: '**MS NÃO substitui ação de cobrança nem produz efeito pretérito** (Súmulas 269/271 STF). Erro frequente.' },
          { type: 'box', kind: 'atencao', text: '**MS contra ato judicial é EXCEPCIONALÍSSIMO** (Súmula 267/STF) — só com teratologia + ausência de recurso + risco de dano.' },
          { type: 'box', kind: 'atencao', text: '**MS coletivo NÃO tutela DIREITOS DIFUSOS** — apenas coletivos e individuais homogêneos. Para difuso = ACP.' },
          { type: 'box', kind: 'atencao', text: '**Defensoria NÃO está na CF art. 5º LXX** (legitimados do MS coletivo) — mas tem legitimidade para ACP. Ponto polêmico que pode ser discutido.' },
          { type: 'box', kind: 'atencao', text: '**MI individual é distinto do coletivo** — Lei 13.300 art. 12 traz rol expresso (incluindo Defensoria). Banca confunde.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** intervenção OBRIGATÓRIA do MP no MS (Lei 12.016 art. 12) como fiscal. MS coletivo é arma do MP em casos específicos.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** RO no MS denegado (CF art. 102 II, 105 II); apelação no MS julgado em 1ª instância.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 20 (ACP):** MS coletivo e ACP têm interface — escolha do remédio depende da natureza do direito (difuso, coletivo, homogêneo).' }
        ]
      }
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
      {
        h: 'Visão geral — microssistema processual coletivo',
        items: [
          { type: 'p', text: 'Este tópico reúne os principais **instrumentos de tutela coletiva e de proteção do patrimônio público**, formando o que a doutrina chama de **microssistema processual coletivo**: ACP + Ação Popular + Improbidade + Anticorrupção + LACP + CDC + Estatutos especiais (ECA, EI, EPCD, etc.). Para o MP, é o **PÃO COM MANTEIGA** — instrumental cotidiano da carreira, especialmente em comarcas como Ouro Branco/MG (vivência da candidata).' },
          {
            type: 'table',
            headers: ['Instrumento', 'Lei', 'Legitimado principal', 'Tutela'],
            rows: [
              ['ACP', 'Lei 7.347/85', 'MP, DP, entes federativos, associações', 'Direitos transindividuais (difusos, coletivos, individuais homogêneos)'],
              ['Ação Popular', 'Lei 4.717/65', 'CIDADÃO (exclusivo)', 'Patrimônio público, moralidade, meio ambiente, histórico-cultural'],
              ['Improbidade', 'Lei 8.429/92 (com Lei 14.230/21)', 'MP', 'Reparação patrimônio público + sanções pessoais'],
              ['Anticorrupção PJ', 'Lei 12.846/13', 'MP, AGU, CGU', 'Responsabilização objetiva da PJ'],
              ['Habeas Data', 'Lei 9.507/97', 'Titular dos dados', 'Acesso e retificação de dados pessoais'],
              ['Ação Ressarcimento', 'CF 37 §5º', 'Ente lesado / MP', 'Recomposição do erário (imprescritível se doloso)']
            ]
          }
        ]
      },
      {
        h: 'Ação Civil Pública (Lei 7.347/85)',
        items: [
          { type: 'h', text: 'Objeto (art. 1º) — bens e interesses tutelados' },
          { type: 'list', items: [
            'Meio AMBIENTE',
            'CONSUMIDOR',
            'Bens e direitos de valor artístico, estético, histórico, turístico, paisagístico (PATRIMÔNIO CULTURAL)',
            'Qualquer outro INTERESSE DIFUSO OU COLETIVO',
            'Infrações da ORDEM ECONÔMICA',
            'ORDEM URBANÍSTICA',
            'HONRA E DIGNIDADE de grupos raciais, étnicos ou religiosos',
            'PATRIMÔNIO PÚBLICO E SOCIAL'
          ]},
          { type: 'p', text: '**Vedação (art. 1º §único):** ACP NÃO pode tratar de tributos, contribuições previdenciárias, FGTS ou outros direitos cuja titularidade individualizável seja predominante (interpretado restritivamente).' },
          { type: 'h', text: 'Legitimidade ativa (art. 5º) — concorrente e disjuntiva' },
          { type: 'list', items: [
            'I — MP',
            'II — DEFENSORIA PÚBLICA (após Lei 11.448/07; STF — Tema 884 amplia para qualquer hipossuficiência)',
            'III — União, Estados, DF, Municípios',
            'IV — Autarquias, empresas públicas, fundações, sociedades de economia mista',
            'V — ASSOCIAÇÃO constituída há pelo menos 1 ANO + finalidade compatível (pertinência temática)'
          ]},
          { type: 'p', text: '**MP é o ATOR NATURAL** dessa tutela (CF art. 129 III). Mesmo se não ajuizar, atua sempre como fiscal (Lei 7.347 art. 5º §1º).' },
          { type: 'h', text: 'Inquérito Civil (CF art. 129 III + Resolução 23/2007 CNMP)' },
          { type: 'p', text: '**INSTRUMENTO EXTRAJUDICIAL EXCLUSIVO DO MP** para apurar fatos que possam ensejar ACP. Características: inquisitivo, sigiloso por padrão, sem contraditório obrigatório, pode resultar em ajuizamento de ACP, arquivamento (com revisão por órgão superior do MP) ou TAC. Não vincula o juiz; produz prova INDICIÁRIA, sujeita ao contraditório judicial posterior.' },
          { type: 'h', text: 'TAC — Termo de Ajustamento de Conduta (art. 5º §6º)' },
          { type: 'p', text: '**Compromisso EXTRAJUDICIAL** firmado entre o legitimado público (MP, DP, ente público) e o causador do dano. Tem **EFICÁCIA DE TÍTULO EXECUTIVO EXTRAJUDICIAL**. Cumprido, evita a ACP. Descumprido, executa-se diretamente. Disciplinado pela **Resolução 179/2017 do CNMP**.' },
          { type: 'h', text: 'Coisa julgada (Lei 7.347 art. 16 + CDC art. 103)' },
          { type: 'p', text: 'Sistemática especial: difusos = erga omnes, salvo improcedência por insuficiência de provas (secundum eventum probationis); coletivos = ultra partes, limitada ao grupo, com a mesma ressalva; individuais homogêneos = erga omnes mas só beneficia (in utilibus).' },
          { type: 'p', text: '**Limitação territorial do art. 16 (versão restritiva pela Lei 9.494/97):** sentença produzia efeitos apenas nos limites da competência territorial. **STF declarou INCONSTITUCIONAL essa restrição** (Tema 1.075). Hoje a coisa julgada na ACP é AMPLA, respeitando apenas o âmbito do interesse tutelado.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Tema 1.075 (RE 1.101.937, abr/2021):** "É inconstitucional o art. 16 da Lei 7.347/85, alterada pela Lei 9.494/97. Em se tratando de ACP de efeitos nacionais ou regionais, a competência deve observar o art. 93, II, da Lei 8.078/90 (CDC). Ajuizadas múltiplas ACPs com o mesmo objeto, observa-se a PREVENÇÃO." Marco da tutela coletiva ampla.' }
        ]
      },
      {
        h: 'Improbidade administrativa (Lei 8.429/92 + Lei 14.230/21)',
        items: [
          { type: 'p', text: 'A **Lei 14.230/21** REVOLUCIONOU o regime da improbidade. Pontos essenciais:' },
          { type: 'list', items: [
            '**MP é o ÚNICO LEGITIMADO** para a ação de improbidade (art. 17 caput) — antes, ente público também tinha legitimidade ATÍPICA',
            'Modalidades: ENRIQUECIMENTO ILÍCITO (art. 9º), DANO AO ERÁRIO (art. 10), ATENTADO AOS PRINCÍPIOS (art. 11)',
            'Após Lei 14.230, **TODAS as modalidades exigem DOLO** (art. 1º §1º) — culpa foi REVOGADA',
            'Sanções: perda de bens, suspensão de direitos políticos (até 14 anos no enriquecimento ilícito), multa, proibição de contratar, perda de função',
            'Prescrição (art. 23): 8 anos; inclusive intercorrente'
          ]},
          { type: 'h', text: 'ANPC — Acordo de Não Persecução Cível (art. 17-B, Lei 14.230)' },
          { type: 'p', text: 'O MP pode firmar acordo com o demandado (improbidade), com integral devolução do produto + reparação integral do dano + aplicação parcial de sanções. Homologação judicial OBRIGATÓRIA. Cabível em qualquer fase da ação ou inquérito.' },
          { type: 'p', text: '**Diferença do TAC:** ANPC pressupõe RECONHECIMENTO da improbidade e responsabilização (com sanção atenuada); TAC é compromisso de adequação prospectivo (sem reconhecimento de ato ímprobo).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — ADIs 7.236, 7.235, 7.226 (modulação Lei 14.230/21, ago/2022):** a Lei 14.230 NÃO se aplica retroativamente a atos culposos já reconhecidos com trânsito em julgado. Para os processos em curso ou em execução, a NOVA LEI ELIMINOU A CULPA — atos puramente culposos não sustentam mais condenação.' }
        ]
      },
      {
        h: 'Anticorrupção, Ação Popular, Habeas Data, Ressarcimento',
        items: [
          { type: 'h', text: 'Lei Anticorrupção (Lei 12.846/2013)' },
          { type: 'p', text: '**Responsabilização OBJETIVA** da PJ por atos contra a administração pública. Sanções: multa (até 20% do faturamento bruto), publicação extraordinária, restrições para contratação. **Programas de Integridade (Decreto 11.129/2022):** mecanismos internos de prevenção; podem REDUZIR multas. **Acordo de Leniência (arts. 16-17):** PJ confessa, identifica corresponsáveis, devolve valores, em troca de redução de sanções.' },
          { type: 'h', text: 'Ação Popular (Lei 4.717/65)' },
          { type: 'p', text: 'Tutela do **patrimônio público em sentido amplo**.' },
          {
            type: 'table',
            headers: ['Aspecto', 'Ação Popular', 'ACP'],
            rows: [
              ['Legitimado ativo', 'CIDADÃO (com título eleitoral em dia)', 'MP, DP, entes federativos, associações'],
              ['Objeto principal', 'Anular ato lesivo + reparar', 'Tutela ampla de direitos transindividuais'],
              ['MP', 'FISCAL OBRIGATÓRIO', 'Pode ser parte ou fiscal'],
              ['Custas', 'Isento (CF art. 5º LXXIII), salvo má-fé', 'Sem isenção automática'],
              ['Coisa julgada na improcedência', 'Secundum eventum probationis', 'Idem (CDC 103)']
            ]
          },
          { type: 'p', text: '**Coisa julgada SECUNDUM EVENTUM PROBATIONIS:** improcedência por insuficiência de provas NÃO faz coisa julgada material — pode ser RE-AJUIZADA com prova nova (Lei 4.717 art. 18). Outros fundamentos de improcedência fazem coisa julgada normal.' },
          { type: 'h', text: 'Ressarcimento ao erário (CF art. 37 §5º)' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Tema 897 (RE 852.475, ago/2018):** "São imprescritíveis as ações de ressarcimento ao erário fundadas na prática de ato de IMPROBIDADE ADMINISTRATIVA DOLOSO tipificado na Lei 8.429/92." Imprescritibilidade RESTRITA — atos culposos (após Lei 14.230, não mais ímprobos) seguem prazo prescricional civil.' },
          { type: 'h', text: 'Habeas Data (CF art. 5º LXXII + Lei 9.507/97)' },
          { type: 'p', text: 'Garantia para ACESSO a informações pessoais em registros de caráter público e RETIFICAÇÃO desses dados quando incorretos. **Pressuposto:** prévio requerimento administrativo recusado (Súmula 2/STJ). Diferença com MS: HD discute o direito ao dado; MS protege direito líquido e certo violado por autoridade.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 2:** "Não cabe HABEAS DATA se não houve recusa de informações por parte da autoridade administrativa." Pressuposto da prévia tentativa.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'list', items: [
            '**Lei 7.347/85** — LACP (DECORE artigos centrais: 1º, 5º, 6º, 11, 12, 16, 17)',
            '**Lei 8.429/92 + Lei 14.230/21** — Improbidade Administrativa (NOVA disciplina)',
            '**Lei 12.846/2013** — Anticorrupção (PJ)',
            '**Lei 4.717/65** — Ação Popular',
            '**Lei 9.507/97** — Habeas Data',
            '**CDC arts. 81-104** — sistema integrado (aplicável à ACP por integração)',
            '**Resolução 23/2007 CNMP** — Inquérito Civil',
            '**Resolução 179/2017 CNMP** — TAC',
            '**Decreto 11.129/2022** — Programas de Integridade',
            '**CF art. 5º LXXII (HD), LXXIII (AP), LXXIV (assistência)**',
            '**CF art. 37 §5º** — imprescritibilidade restrita',
            '**CF art. 129** — funções do MP'
          ]}
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Legitimados ACP — "MP-DEAUFA":** **MP**, **D**efensoria, **E**ntes federativos, **A**utarquias/EP/SEM/Fundações, **A**ssociação >1 ano.' },
          { type: 'box', kind: 'macete', text: '**Coisa julgada coletiva — "DIPR" (Tópico 11):** **DI**fuso e coletivo = secundum eventum **PR**obationis; **I**ndividual homogêneo = só beneficia (in utilibus).' },
          { type: 'box', kind: 'macete', text: '**Improbidade após Lei 14.230 — "SÓ DOLO".** Culpa foi REVOGADA. MP é único legitimado.' },
          { type: 'box', kind: 'macete', text: '**ANPC × TAC:** **ANPC** = improbidade reconhecida com sanção atenuada. **TAC** = compromisso de adequação sem reconhecimento de improbidade.' },
          { type: 'box', kind: 'macete', text: '**Ressarcimento — Tema 897 STF:** imprescritível APENAS em improbidade DOLOSA. Outros atos = prescrição comum.' },
          { type: 'box', kind: 'macete', text: '**Ação Popular — só CIDADÃO.** PJ não pode (Súmula 365/STF). Custas isentas, salvo má-fé.' },
          { type: 'box', kind: 'macete', text: '**HD — exige PRÉVIA RECUSA administrativa** (Súmula 2/STJ).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Após STF Tema 1.075 (RE 1.101.937), o art. 16 da LACP é INCONSTITUCIONAL** — coisa julgada na ACP é AMPLA, não limitada à competência territorial. Bancas atualizadas cobram.' },
          { type: 'box', kind: 'atencao', text: '**Improbidade após Lei 14.230/21 — APENAS DOLOSA.** Culpa foi revogada para todas as modalidades.' },
          { type: 'box', kind: 'atencao', text: '**MP é ÚNICO legitimado para improbidade** após Lei 14.230 (art. 17 caput). Anteriormente era concorrente com o ente público lesado.' },
          { type: 'box', kind: 'atencao', text: '**ACP NÃO trata de tributos, FGTS, contribuições previdenciárias** (art. 1º §único). Para essas, ações próprias.' },
          { type: 'box', kind: 'atencao', text: '**Ação Popular — apenas CIDADÃO** (com título eleitoral). PJ não pode (Súmula 365/STF).' },
          { type: 'box', kind: 'atencao', text: '**Coisa julgada na Ação Popular — secundum eventum probationis:** improcedência por insuficiência de prova permite RE-AJUIZAMENTO. Erro frequente confundir com ACP.' },
          { type: 'box', kind: 'atencao', text: '**HD exige PRÉVIA RECUSA administrativa** (Súmula 2/STJ).' },
          { type: 'box', kind: 'atencao', text: '**Imprescritibilidade do ressarcimento — RESTRITA a improbidade DOLOSA** (Tema 897). Erro: tomar como geral.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** ACP, improbidade, anticorrupção e inquérito civil são instrumentos COTIDIANOS do MP. Vivência institucional da candidata = vantagem MAXIMIZADA aqui.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** coisa julgada coletiva (DIPR), processo estrutural (ADPF 347), liquidação coletiva — leitura conjunta.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 9 (tutela provisória):** ACP usa massivamente tutelas provisórias — indisponibilidade de bens em improbidade, tutela ambiental urgente, sanitária.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 19 (MS):** MS coletivo é alternativa em casos específicos. Para difusos puros, ACP é a via.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 6 (competência):** Súmula 489/STJ — conexão entre ACPs federal e estadual = vai para a JF. STF Tema 1.075 cuidou da competência em ACPs nacionais/regionais.' }
        ]
      }
    ]
  },

  // ============================================================
  // ESQUELETOS — Fase 2 (Processo Civil itens 21 a 30)
  // sections: [] dispara empty-state no viewer; outline mostra o que entra.
  // ============================================================
  {
    id: '21-mediacao-conciliacao',
    num: 21, materia: 'pc',
    title: 'Mediação, conciliação e autocomposição',
    edital: '3.2.21',
    editalText: 'Mediação, conciliação e autocomposição. Lei 13.140/15. Audiências do CPC art. 334. CEJUSC.',
    size: 'Médio',
    schedule: 'Mês 1 da Fase 2 (out/2026) — semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A política de **autocomposição** ganhou centralidade no CPC/15 e foi consolidada na **Lei 13.140/15** (Lei de Mediação). O art. 3º §§ 2º e 3º do CPC estabelece o dever do juiz, advogados, defensores e MP de **estimular** a solução consensual. A audiência do art. 334 transformou a tentativa de autocomposição em **fase obrigatória** do procedimento comum — ato de abertura, salvo recusa bilateral expressa ou matéria que não admita autocomposição.' },
          { type: 'p', text: '**Mediação × conciliação:** o critério legal (CPC art. 165 §§ 2º-3º) é o **vínculo prévio entre as partes**. Mediação para quem TINHA relação anterior (família, vizinhança, sócios) — o mediador apenas FACILITA o diálogo. Conciliação para quem NÃO tinha vínculo (acidente de trânsito, consumo) — o conciliador pode **propor** soluções. Ambas regem-se pelos mesmos princípios.' },
          { type: 'p', text: 'A mediação opera em duas frentes: (a) **judicial** (anexo ao processo, dentro do CEJUSC) e (b) **extrajudicial** (Lei 13.140 capítulos III e IV — antes ou fora do processo, inclusive na Administração Pública). O resultado, quando exitoso, é homologado e vira **título executivo judicial** (CPC art. 515 III).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'CPC arts. 165 a 175 — conciliadores e mediadores judiciais' },
          { type: 'list', items: [
            '**Art. 165** — criação dos centros judiciários (CEJUSCs) pelo tribunal',
            '**§ 2º** — conciliador atua preferencialmente sem vínculo prévio; pode SUGERIR soluções, vedada coação ou intimidação',
            '**§ 3º** — mediador atua preferencialmente com vínculo prévio; AUXILIA a entender questões e interesses, sem propor solução',
            '**Art. 166** — princípios da conciliação/mediação: independência, imparcialidade, autonomia da vontade, confidencialidade, oralidade, informalidade, decisão informada',
            '**Art. 167** — cadastro nacional e dos tribunais; capacitação obrigatória',
            '**Art. 168 §1º** — partes podem escolher de comum acordo o conciliador/mediador',
            '**Art. 173** — exclusão do cadastro: violação de princípios, inabilitação por 180 dias',
            '**Art. 175** — ressalva às câmaras privadas'
          ] },
          { type: 'h', text: 'CPC art. 334 — audiência de conciliação/mediação' },
          { type: 'list', items: [
            '**Caput** — designada pelo juiz **se a petição inicial preencher os requisitos e não for caso de improcedência liminar**',
            '**§ 4º I** — não realizada se AMBAS as partes manifestarem expressamente desinteresse (de comum acordo)',
            '**§ 4º II** — não realizada se a causa não admitir autocomposição',
            '**§ 5º** — desinteresse do autor: na PI; do réu: por petição, com 10 dias de antecedência',
            '**§ 6º** — havendo litisconsórcio, o desinteresse só vale se TODOS manifestarem',
            '**§ 8º** — ausência injustificada é **ato atentatório à dignidade da justiça**, multa de até **2%** sobre valor da causa ou vantagem econômica pretendida',
            '**§ 9º** — partes devem estar acompanhadas de advogados/defensores',
            '**§ 10º** — pode haver representação por preposto com procuração específica',
            '**§ 11** — autocomposição obtida → reduzida a termo + homologação por sentença'
          ] },
          { type: 'h', text: 'Lei 13.140/15 — Lei de Mediação' },
          { type: 'list', items: [
            '**Art. 1º par. único** — mediação é **atividade técnica** exercida por terceiro imparcial sem poder decisório que auxilia partes a identificarem ou desenvolverem soluções consensuais',
            '**Art. 2º** — princípios: imparcialidade do mediador, isonomia entre as partes, oralidade, informalidade, autonomia da vontade, busca do consenso, confidencialidade, boa-fé',
            '**Art. 3º** — pode versar sobre direitos disponíveis ou indisponíveis que admitam transação. Direitos indisponíveis transigíveis exigem **homologação judicial** com participação do MP',
            '**Art. 4º** — mediador conduzirá com pleno conhecimento das partes; não pode atuar como árbitro nem como testemunha em processos judiciais ou arbitrais relativos ao conflito por 1 ano após',
            '**Arts. 11-13** — mediador judicial: graduação superior há pelo menos 2 anos + capacitação',
            '**Arts. 22-23** — mediação extrajudicial: convite formal; ausência por 1 vez não importa em má-fé; nas partes signatárias de cláusula de mediação, ausência implica multa proporcional ao prejuízo',
            '**Cap. II (arts. 32-40)** — câmaras de prevenção e resolução administrativa de conflitos no âmbito da Administração Pública',
            '**Art. 30** — confidencialidade: estende-se a todas as informações, inclusive auxiliares e partes; EXCEÇÃO: informações relativas a CRIME DE AÇÃO PÚBLICA'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Quando a audiência do art. 334 é obrigatória?' },
          { type: 'p', text: 'Regra: **toda PI que não receba improcedência liminar deve ter audiência**. Exceções (§ 4º): (i) desinteresse BILATERAL e expresso; (ii) causa que não admite autocomposição (tutela de urgência indeferida não é exceção; o que importa é a **disponibilidade material** do direito).' },
          { type: 'box', kind: 'atencao', text: 'Se UMA das partes quer a audiência e a outra não, a audiência ACONTECE. Erro frequente: tomar como exceção a vontade unilateral.' },
          { type: 'box', kind: 'atencao', text: 'Litisconsórcio (§ 6º) — só dispensa se TODOS os litisconsortes manifestarem desinteresse. Um único quer = audiência designada.' },
          { type: 'h', text: 'Multa por ausência (§ 8º)' },
          { type: 'p', text: 'A ausência injustificada é **ato atentatório à dignidade da justiça** (categoria do art. 77 §2º). Multa de **até 2%** sobre o valor da causa OU sobre a vantagem econômica pretendida, revertida em favor da União ou do Estado. A multa atinge a parte (ou seu preposto), NÃO o advogado.' },
          { type: 'box', kind: 'macete', text: '**334 §8º — ausência = ato atentatório · até 2% · pra União/Estado**. Não é honorários nem custas, é punição processual.' },
          { type: 'h', text: 'Mediação × conciliação — diferença prática' },
          { type: 'table', headers: ['Critério', 'Mediação', 'Conciliação'],
            rows: [
              ['Vínculo prévio', 'Costuma haver (família, vizinhança)', 'Tipicamente ausente (acidente, consumo)'],
              ['Postura do terceiro', 'FACILITA — não sugere solução', 'Pode SUGERIR a solução'],
              ['Foco', 'Restaurar a relação + resolver conflito', 'Resolver o conflito pontual'],
              ['Duração típica', 'Múltiplas sessões', 'Uma ou duas sessões'],
              ['CPC', 'Art. 165 § 3º', 'Art. 165 § 2º']
            ] },
          { type: 'h', text: 'Confidencialidade (Lei 13.140 art. 30)' },
          { type: 'p', text: 'Tudo que for produzido em mediação é **confidencial** — partes, mediador, auxiliares e terceiros que tenham contato. Não pode ser usado em juízo posterior. **EXCEÇÃO única importante: informação relativa a CRIME DE AÇÃO PÚBLICA** — o mediador deve denunciar.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.733.685:** descumprimento da confidencialidade pelo mediador gera responsabilidade civil. Refletida no rigor da exclusão do cadastro do art. 173 do CPC.' },
          { type: 'h', text: 'Direitos indisponíveis transigíveis (art. 3º § 2º)' },
          { type: 'p', text: '**Direito indisponível NEM SEMPRE é intransigível.** Alimentos, por exemplo, são indisponíveis quanto à existência (não se renuncia o direito) mas o **valor pode ser transigido**. Mediação cabe — exige homologação judicial e oitiva do MP.' },
          { type: 'box', kind: 'atencao', text: 'Estado da técnica: a Lei 13.140 admite mediação em direitos indisponíveis transigíveis, com participação do MP. Erro: dizer que indisponíveis nunca cabem em mediação.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Mediação x Conciliação — VInculo + Sugestão:** Mediação tem **VÍ**nculo, **NÃO** sugere. Conciliação **SE**m vínculo, **PO**de sugerir.' },
          { type: 'box', kind: 'macete', text: '**Princípios da Lei 13.140 (art. 2º) — IMÔNICO:** **I**mparcialidade · **I**sonomia · **O**ralidade · **I**nformalidade · **A**utonomia da vontade · **B**usca do consenso · **C**onfidencialidade · **B**oa-fé.' },
          { type: 'box', kind: 'macete', text: '**Audiência 334 — recusa exige 4 condições simultâneas:** (1) **bilateral** + (2) **expressa** + (3) autor na PI + (4) réu até 10 dias antes.' },
          { type: 'box', kind: 'macete', text: '**Confidencialidade quebra UMA vez:** crime de AÇÃO PÚBLICA. Não quebra para crime de ação privada.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Litisconsórcio — todos devem recusar.** Se 1 quer audiência, ela acontece. Banca pode dizer "se a maioria recusar, não há audiência" — FALSO.' },
          { type: 'box', kind: 'atencao', text: '**Mediador é vedado a atuar como árbitro/testemunha pelo prazo de 1 ano após o término** (Lei 13.140 art. 7º). Esquecer esse prazo é erro frequente.' },
          { type: 'box', kind: 'atencao', text: '**Direitos indisponíveis transigíveis CABEM** (art. 3º §§ 1º-2º) — alimentos, guarda em parte. Banca pode armar: "mediação só para direitos disponíveis" — errado.' },
          { type: 'box', kind: 'atencao', text: '**Resultado da mediação NÃO precisa ser homologado quando extrajudicial e versa sobre direito disponível** (Lei 13.140 art. 20 par. único — vira título executivo extrajudicial). Em direitos indisponíveis transigíveis, exige homologação + MP.' },
          { type: 'box', kind: 'atencao', text: '**Multa do § 8º vai para União/Estado**, NÃO para a outra parte. Erro frequente: confundir com indenização.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** a audiência do art. 334 é a **PRIMEIRA fase ordinária** do procedimento comum. Sem ela, nulidade relativa por cerceamento.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 22 (arbitragem):** arbitragem e mediação fazem parte do mesmo microssistema de ADR. Diferença essencial: árbitro DECIDE; mediador/conciliador NÃO decidem.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** mediação em direitos indisponíveis transigíveis exige participação do MP (Lei 13.140 art. 3º §2º).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 29 (CNJ/CNMP):** Resolução CNJ 125/2010 instituiu a Política Judiciária Nacional de Tratamento de Conflitos — base normativa dos CEJUSCs.' }
        ]
      }
    ]
  },
  {
    id: '22-arbitragem',
    num: 22, materia: 'pc',
    title: 'Arbitragem (Lei 9.307/96)',
    edital: '3.2.22',
    editalText: 'Arbitragem. Lei 9.307/96 (com alterações da Lei 13.129/15). Cláusula compromissória, sentença arbitral, ação anulatória.',
    size: 'Médio',
    schedule: 'Mês 1 da Fase 2 (out/2026) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Arbitragem é **método heterocompositivo privado** de solução de conflitos relativos a direitos patrimoniais disponíveis (Lei 9.307/96 art. 1º). O **STF** (ADI 7.123 e SE 5.206) afastou alegação de inconstitucionalidade e reconheceu sua natureza **jurisdicional** — a sentença arbitral tem força de título executivo judicial e não passa por homologação, salvo a estrangeira (que vai ao STJ).' },
          { type: 'p', text: 'Diferentemente da mediação (consensual, terceiro não decide), na arbitragem o **árbitro DECIDE** o caso por sentença. As partes elegem voluntariamente esse caminho via **convenção de arbitragem** — gênero que abrange a **cláusula compromissória** (pacto prévio inserido em contrato) e o **compromisso arbitral** (pacto firmado depois do conflito).' },
          { type: 'p', text: 'Lei 13.129/15 introduziu reformas relevantes: (a) ampliação para Administração Pública (art. 1º §§ 1º-2º), (b) tutela cautelar pré-arbitral pelo Judiciário (art. 22-A), (c) carta arbitral (art. 22-C) e (d) sentença arbitral parcial (art. 23 §1º).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Lei 9.307/96 — disposições estruturais' },
          { type: 'list', items: [
            '**Art. 1º caput** — pessoas capazes podem valer-se de arbitragem para dirimir litígios sobre **direitos patrimoniais disponíveis**',
            '**Art. 1º § 1º** — Administração Pública direta e indireta poderá utilizar arbitragem (Lei 13.129/15)',
            '**Art. 1º § 2º** — autoridade competente celebra convenção (mesma da que celebra acordos ou transações)',
            '**Art. 2º** — arbitragem pode ser de **direito** (regra) ou de **equidade**, à escolha das partes; § 3º prevê **publicidade** quando envolver Administração Pública',
            '**Art. 3º** — convenção de arbitragem = cláusula compromissória + compromisso arbitral',
            '**Art. 4º** — cláusula compromissória: estipulação para submeter à arbitragem litígios futuros',
            '**Art. 4º § 1º** — exigência de forma escrita (no contrato ou em documento apartado)',
            '**Art. 4º § 2º** — em contrato de adesão: cláusula só vale se aderente tomar iniciativa OU concordar expressamente em destaque, com visto separado',
            '**Art. 7º** — cláusula vazia → ação para suprir lacunas (especial; segue rito do art. 6º)',
            '**Art. 8º par. único** — **Kompetenz-Kompetenz**: cabe ao árbitro decidir sobre sua própria competência e sobre validade da convenção'
          ] },
          { type: 'h', text: 'Procedimento arbitral e sentença' },
          { type: 'list', items: [
            '**Art. 13** — qualquer pessoa capaz e da confiança das partes pode ser árbitro; quando colegiado, número ímpar',
            '**Art. 14** — impedimentos análogos aos do CPC (juiz)',
            '**Art. 17** — árbitros equiparam-se a funcionários públicos para efeitos penais',
            '**Art. 21 § 2º** — princípios obrigatórios: contraditório, igualdade das partes, imparcialidade do árbitro, livre convencimento',
            '**Art. 22-A** — antes da instauração da arbitragem, partes podem pedir **medida cautelar** ao Judiciário; após instaurada, ao árbitro',
            '**Art. 22-B** — instituída a arbitragem, cabe aos árbitros manter, modificar ou revogar a cautelar concedida pelo Judiciário',
            '**Art. 22-C** — **carta arbitral** = árbitro requisita do Judiciário ato coercitivo (penhora, condução de testemunha)',
            '**Art. 23 § 1º** — admite **sentença arbitral parcial**',
            '**Art. 26** — requisitos formais da sentença arbitral (relatório, fundamentos, dispositivo, data, lugar)',
            '**Art. 31** — sentença arbitral produz, entre as partes e seus sucessores, os mesmos efeitos da sentença judicial; é **título executivo judicial** (também CPC art. 515 VII)'
          ] },
          { type: 'h', text: 'Anulação da sentença arbitral' },
          { type: 'list', items: [
            '**Art. 32** — hipóteses TAXATIVAS de nulidade: (I) compromisso nulo, (II) sentença emanada por quem não podia ser árbitro, (III) ausência dos requisitos do art. 26, (IV) prolatada fora dos limites da convenção, (V) — REVOGADA pela Lei 13.129/15, (VI) comprovação de prevaricação/concussão/corrupção passiva, (VII) prolatada fora do prazo, (VIII) violados os princípios do art. 21 § 2º',
            '**Art. 33** — ação anulatória na Justiça Comum, prazo **decadencial de 90 dias** após recebimento da sentença ou da decisão dos embargos',
            '**Art. 33 § 3º** — sentença arbitral também pode ser desconstituída por **impugnação ao cumprimento de sentença** (art. 525 CPC) com fundamento no art. 32 da Lei 9.307'
          ] },
          { type: 'h', text: 'Sentença arbitral estrangeira' },
          { type: 'list', items: [
            '**Arts. 34-40** — homologação no STJ (CPC art. 105 I i CF); reconhece base na Convenção de Nova York',
            '**Art. 39** — recusa só por: incapacidade das partes, convenção inválida, ofensa à ordem pública, falta de notificação, decisão fora dos limites da convenção, falta de obrigatoriedade no país de origem'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Cláusula cheia × vazia' },
          { type: 'p', text: '**Cláusula cheia** = define todos os elementos essenciais para instaurar a arbitragem (regra de eleição do árbitro, instituição arbitral, regulamento). **Cláusula vazia** = remete à arbitragem mas não define como instaurá-la. Solução: art. 7º — qualquer parte ajuíza ação para o juiz suprir a lacuna e dar início ao procedimento.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 485:** "A Lei de Arbitragem aplica-se aos contratos que contenham cláusula arbitral, ainda que celebrados antes da sua edição." Reforça a natureza jurisdicional do instituto e a aplicação imediata.' },
          { type: 'h', text: 'Cláusula em contrato de adesão (art. 4º § 2º)' },
          { type: 'p', text: 'Para vincular o aderente, a cláusula compromissória em contrato de adesão exige **DUPLA proteção**: (i) iniciativa do aderente OU (ii) concordância expressa **em destaque + visto/assinatura específica**. Falta isso = cláusula INEFICAZ. Em CDC: STJ tem jurisprudência ampla flexibilizando para consumidor (REsp 1.169.841 e seguintes — em geral, NÃO obriga consumidor sem manifestação positiva).' },
          { type: 'h', text: 'Kompetenz-Kompetenz (art. 8º par. único)' },
          { type: 'p', text: 'Princípio originário do direito alemão. Significa que o **próprio árbitro** decide se tem competência para julgar, inclusive sobre a validade da cláusula arbitral. Consequência: parte que insiste em ajuizar perante o Judiciário, quando há cláusula arbitral válida, encontra extinção sem mérito do art. 485 VII do CPC (existência de convenção de arbitragem).' },
          { type: 'box', kind: 'atencao', text: 'Convenção de arbitragem é **matéria que o juiz NÃO conhece de ofício** — só por arguição da parte (CPC art. 337 X + § 5º). Se o réu não alega na contestação, ocorre RENÚNCIA TÁCITA à arbitragem, e o processo prossegue na Justiça Comum.' },
          { type: 'h', text: 'Sentença arbitral × homologação' },
          { type: 'p', text: 'Sentença arbitral **NÃO precisa de homologação judicial** — é título executivo judicial direto (CPC art. 515 VII + Lei 9.307 art. 31). EXCEÇÃO: sentença arbitral **estrangeira** = homologação no **STJ** (CF art. 105 I i).' },
          { type: 'box', kind: 'atencao', text: '**Recurso da sentença arbitral é IMPOSSÍVEL** internamente — só ação anulatória (90 dias) por hipóteses taxativas do art. 32. Banca tenta induzir cabimento de apelação ou agravo — falso.' },
          { type: 'h', text: 'Arbitragem na Administração Pública' },
          { type: 'p', text: 'Lei 13.129/15 (alterando o art. 1º §§ 1º-2º): **só para direitos patrimoniais disponíveis**. Princípios: legalidade, publicidade (art. 2º § 3º — sigilo é vedado), motivação. Não pode ter cláusula de equidade (art. 2º § 3º). Servidor responsável pela transação responde pessoalmente em caso de fraude/conluio.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Convenção = Cláusula + Compromisso.** Cláusula é PRÉVIA (no contrato). Compromisso é POSTERIOR (depois do conflito).' },
          { type: 'box', kind: 'macete', text: '**Sentença arbitral é TEJ direto:** título executivo judicial sem homologação (CPC 515 VII). Exceção: estrangeira → STJ.' },
          { type: 'box', kind: 'macete', text: '**Anulatória — 90 dias decadenciais.** Não é prescrição. Não admite suspensão.' },
          { type: 'box', kind: 'macete', text: '**Carta arbitral = árbitro pede ao juiz** ato coercitivo (penhora etc). Carta de ordem é entre tribunais; carta precatória entre juízos; carta rogatória internacional. Carta arbitral é a 4ª.' },
          { type: 'box', kind: 'macete', text: '**Adm Pública: equidade NÃO; publicidade SIM** (art. 2º § 3º). Erro: assumir sigilo automático.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Convenção de arbitragem NÃO é cognoscível de ofício** (CPC art. 337 § 5º). Erro frequente: dizer que juiz pode declarar de ofício e remeter o processo à arbitragem.' },
          { type: 'box', kind: 'atencao', text: '**Cláusula arbitral em contrato de adesão exige destaque + visto.** Sem isso = ineficaz. Banca arma: "cláusula arbitral em contrato de adesão é sempre nula" (errado, depende dos requisitos do § 2º).' },
          { type: 'box', kind: 'atencao', text: '**Sentença arbitral interna NÃO se homologa.** Banca tenta confundir com a estrangeira. Memorize: interna = TEJ direto; estrangeira = STJ.' },
          { type: 'box', kind: 'atencao', text: '**Cautelar PRÉ-arbitral é com o Judiciário** (art. 22-A); pós-instalação é com o árbitro. Se o juiz concedeu antes da instauração, o árbitro pode mantê-la, modificá-la ou revogá-la (art. 22-B).' },
          { type: 'box', kind: 'atencao', text: '**Equidade exige autorização EXPRESSA das partes** (art. 2º § 1º). Em arbitragem com Adm Pública, equidade é **vedada** (art. 2º § 3º).' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 21 (mediação):** ambos métodos do microssistema de ADR. Diferença essencial: árbitro DECIDE; mediador FACILITA.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 6 (competência):** convenção de arbitragem é exceção PROCESSUAL — réu deve alegá-la na contestação (CPC art. 337 X), sob pena de renúncia tácita.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 12 (cumprimento):** sentença arbitral é título executivo judicial (CPC art. 515 VII) — segue o procedimento de cumprimento de sentença, não execução de título extrajudicial.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** contra sentença arbitral interna NÃO cabe recurso — só ação anulatória (Lei 9.307 art. 33).' }
        ]
      }
    ]
  },
  {
    id: '23-juizados-especiais-civeis',
    num: 23, materia: 'pc',
    title: 'Juizados Especiais Cíveis (Lei 9.099/95)',
    edital: '3.2.23',
    editalText: 'Juizados Especiais Cíveis. Lei 9.099/95. Princípios. Competência. Recursos. Súmulas STJ aplicáveis.',
    size: 'Grande',
    schedule: 'Mês 1 da Fase 2 (out/2026) — semana 3',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O **JEC** (Lei 9.099/95) é microssistema processual com **lógica própria**: criado para causas de menor complexidade, regido por princípios que pressionam a velocidade e a simplicidade. Não é apenas "rito mais rápido do CPC" — é REGIME paralelo, com critérios próprios de competência (absoluta), de capacidade postulatória, de contagem de prazos, de recursos e até de execução.' },
          { type: 'p', text: 'Três pegadinhas estruturais que a banca cobra repetidamente: (a) **prazos NÃO são em dias úteis** (Súmula CJF 99 + FONAJE 165) — diferente do CPC 219; (b) **NÃO cabe REsp** (Súmula 203/STJ) — só RE com repercussão geral; (c) **NÃO cabe ação rescisória** (FONAJE 44).' },
          { type: 'p', text: 'A "porta" do JEC é o **art. 3º** — define o que cabe lá, alternativamente: (i) por VALOR (causas até 40 SM — algumas até 20 SM sem advogado), (ii) por MATÉRIA (rol específico do § 1º), (iii) por execução de título extrajudicial até 40 SM.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Princípios e estrutura geral' },
          { type: 'list', items: [
            '**Art. 2º** — princípios: oralidade, simplicidade, informalidade, economia processual, celeridade; **conciliação ou transação** como objetivo permanente',
            '**Art. 3º I** — causas de até **40 salários-mínimos** (cíveis em geral)',
            '**Art. 3º II** — matérias do art. 275 II do CPC/73 (rito sumário): seguro, capitalização, rescisão de contrato de transporte, etc.',
            '**Art. 3º III** — ação de despejo para uso próprio',
            '**Art. 3º IV** — ações possessórias sobre imóveis até 40 SM',
            '**Art. 3º § 1º** — execução de seus julgados + execução de títulos extrajudiciais até 40 SM',
            '**Art. 3º § 2º** — EXCLUÍDAS: causas de natureza alimentar, falimentar, fiscal, contra Fazenda Pública (vai para Lei 12.153/09), ações sobre acidentes do trabalho, residuais e estado das pessoas',
            '**Art. 8º** — partes admitidas: pessoa física (capaz), microempreendedor individual, ME, EPP, OSCIP, sociedade de crédito ao microempreendedor',
            '**Art. 8º § 1º** — incapaz **NÃO** pode ser parte; PJ de grande porte tampouco; espólio também NÃO',
            '**Art. 9º** — capacidade postulatória dispensável até 20 SM (jus postulandi); acima disso, advogado obrigatório'
          ] },
          { type: 'h', text: 'Procedimento' },
          { type: 'list', items: [
            '**Art. 14** — pedido pode ser ESCRITO ou ORAL (reduzido a termo)',
            '**Art. 16** — comparecimento pessoal das partes; preposto da PJ com carta de preposição',
            '**Art. 18** — citação por correspondência (regra), inclusive PJ; pode ser por mandado',
            '**Art. 18 § 2º** — não admitida citação por edital',
            '**Art. 27** — audiência **una** de conciliação, instrução e julgamento (princípio da concentração)',
            '**Art. 31** — não há intervenção de terceiros nem assistência (admite-se litisconsórcio)',
            '**Art. 38 par. único** — **NÃO admite sentença ilíquida** (mesmo se condenatória); deve ser sempre LÍQUIDA',
            '**Art. 51** — extinção do processo: pelos motivos do art. 485 CPC + (II) inadmissibilidade do procedimento + (III) reconhecimento de incompetência territorial'
          ] },
          { type: 'h', text: 'Recursos no JEC' },
          { type: 'list', items: [
            '**Art. 41** — **recurso inominado** contra sentença, exceto a homologatória de transação ou laudo arbitral. Prazo: **10 dias**, contínuos (não se aplica art. 219 CPC). Necessita advogado (mesmo se causa < 20 SM)',
            '**Art. 41 § 2º** — efeito apenas DEVOLUTIVO (regra); efeito suspensivo a critério do juiz, para evitar dano irreparável',
            '**Art. 42** — preparo: **dobro do valor** das custas iniciais',
            '**Arts. 48-50** — **embargos de declaração** (5 dias, suspendem prazo — Súmula 640/STJ)',
            '**Art. 46** — julgamento pela **Turma Recursal** (juízes de 1º grau)',
            '**RE no STF** — cabe com **repercussão geral**; STF entende possível em decisão das Turmas Recursais',
            '**REsp** — **NÃO CABE** (Súmula 203/STJ)',
            '**MS contra ato judicial** — TNU Súmula 8: cabe quando inviável outro recurso (decisão interlocutória teratológica, p. ex.)',
            '**Ação rescisória — NÃO CABE** (FONAJE 44)'
          ] },
          { type: 'h', text: 'Execução' },
          { type: 'list', items: [
            '**Art. 52** — execução das sentenças do JEC processa-se ali mesmo',
            '**Art. 53** — execução de título extrajudicial até 40 SM',
            '**Art. 55** — sentença normalmente sem honorários sucumbenciais; SÓ devidos quando litigância de má-fé OU em sede de recurso (vencido)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Competência absoluta — opção do autor?' },
          { type: 'p', text: 'A regra majoritária (FONAJE 1) e doutrinária é que a competência do JEC é **OPÇÃO do autor** quando a causa é por valor. Mas há divergência: parte da jurisprudência sustenta competência absoluta, mesmo concorrente. Em concurso: a banca tende a seguir o STJ — opção do autor para causas por valor (≤ 40 SM); para causas por matéria (rol do art. 3º), competência absoluta.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 203:** "Não cabe recurso especial contra decisão proferida por órgão de segundo grau dos Juizados Especiais." Tese clássica e cobrada em quase toda prova.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 640:** "O benefício da justiça gratuita pode ser requerido a qualquer tempo, considerando-se a situação econômica do interessado no momento da formulação do pedido." Aplica-se a todos os ritos, inclusive JEC.' },
          { type: 'h', text: 'Pessoa jurídica como autora' },
          { type: 'p', text: 'Apenas **microempresa, EPP, OSCIP, MEI e sociedade de crédito ao microempreendedor** (art. 8º § 1º + Lei 9.841/99 + LC 123/06). PJ comum (S.A., Ltda. de grande porte) **NÃO** pode ser autora — só ré. Espólio e incapaz NÃO podem ser parte (FONAJE 72).' },
          { type: 'box', kind: 'atencao', text: '**Espólio NÃO pode ser parte no JEC** (FONAJE 72). Erro frequente: assumir que como o espólio sucede o falecido, poderia litigar onde ele litigaria.' },
          { type: 'h', text: 'Prazos: dias contínuos × dias úteis' },
          { type: 'p', text: 'Súmula CJF 99 + FONAJE 165: a contagem do CPC art. 219 (em dias úteis) **NÃO se aplica** ao JEC. Prazos no JEC são **CORRIDOS/CONTÍNUOS**. Erro grave de quem replica regra geral CPC.' },
          { type: 'box', kind: 'atencao', text: '**Prazos no JEC são CONTÍNUOS, não em dias úteis.** Erro recorrente de candidato — banca adora cobrar.' },
          { type: 'h', text: 'Recursos: o que cabe e o que não cabe' },
          { type: 'table', headers: ['Recurso', 'Cabe?', 'Observação'],
            rows: [
              ['Recurso inominado (art. 41)', 'SIM', 'Contra sentença final; 10 dias contínuos'],
              ['Embargos de declaração (arts. 48-50)', 'SIM', 'Prazo 5 dias; suspende (Súmula 640 indireta)'],
              ['Recurso extraordinário', 'SIM', 'Contra acórdão da Turma Recursal, com repercussão geral'],
              ['Recurso especial (REsp)', 'NÃO', 'Súmula 203/STJ'],
              ['Agravo de instrumento', 'NÃO (regra)', 'Decisões interlocutórias só impugnáveis com a sentença'],
              ['Apelação', 'NÃO', 'Não existe na 9.099 — equivalente é o inominado'],
              ['Ação rescisória', 'NÃO', 'FONAJE 44'],
              ['Mandado de segurança', 'EXCEPCIONAL', 'TNU Súmula 8 — só quando inviável outro recurso']
            ] },
          { type: 'h', text: 'Sentença ilíquida × líquida (art. 38 par. único)' },
          { type: 'p', text: '**JEC NÃO admite sentença ilíquida.** Mesmo nas condenatórias, o juiz deve fixar o valor. Se não puder, o caso pode ser **inadmitido** (extinção art. 51 II). Diferença marcante para o procedimento comum, onde sentença ilíquida é regra.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.111 (recursos repetitivos):** A capacidade postulatória pelo próprio cidadão (art. 9º) NÃO se estende ao recurso inominado — há advogado obrigatório (FONAJE 36).' },
          { type: 'h', text: 'Honorários sucumbenciais (art. 55)' },
          { type: 'p', text: 'Em primeira instância no JEC: **NÃO há honorários sucumbenciais** (regra). Exceção: litigância de má-fé. **No recurso inominado**: o vencido paga honorários (art. 55 caput, in fine) + custas. Por isso muitos litigantes desistem do recurso.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Princípios do JEC — OSICE:** **O**ralidade · **S**implicidade · **I**nformalidade · **C**eleridade · **E**conomia (art. 2º).' },
          { type: 'box', kind: 'macete', text: '**JEC: 40-20-10:** competência **40** SM; jus postulandi **20** SM; recurso inominado **10** dias.' },
          { type: 'box', kind: 'macete', text: '**No JEC NÃO cabe RAR:** **R**escisória, **A**gravo de instrumento, **R**Esp.' },
          { type: 'box', kind: 'macete', text: '**Sentença ilíquida JAMAIS** (art. 38 par. único). Memoriza: JEC só com sentença líquida.' },
          { type: 'box', kind: 'macete', text: '**Prazos JEC = contínuos.** CPC art. 219 (dias úteis) NÃO se aplica. Súmula CJF 99 + FONAJE 165.' },
          { type: 'box', kind: 'macete', text: '**Honorários só no recurso (vencido).** Em 1º grau, regra é não pagar.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**REsp NÃO CABE** (Súmula 203/STJ). Banca pode dizer "cabe REsp por divergência jurisprudencial entre Turmas" — falso, é Pedido de Uniformização, não REsp.' },
          { type: 'box', kind: 'atencao', text: '**RE CABE** com repercussão geral (não confundir com REsp). Esse é o recurso de constitucionalidade no JEC.' },
          { type: 'box', kind: 'atencao', text: '**Espólio e PJ comum NÃO podem ser autores** no JEC. Erro: dizer que PJ pode quando ré ≠ pode quando autora (só pode quando ré qualquer PJ).' },
          { type: 'box', kind: 'atencao', text: '**No JEC NÃO há intervenção de terceiros** (art. 31). Litisconsórcio é admitido. Banca confunde os dois institutos.' },
          { type: 'box', kind: 'atencao', text: '**Citação por edital é VEDADA** (art. 18 § 2º). Se réu não localizado, extinção do processo no JEC; reabertura no rito comum.' },
          { type: 'box', kind: 'atencao', text: '**Conciliação é OBJETIVO permanente, não fase única.** Em qualquer estágio, juiz tenta. Diferente do CPC 334, onde é fase definida.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 8 (atos processuais):** prazos no JEC são CONTÍNUOS, não em dias úteis. CPC art. 219 não se aplica.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 24 (Juizados da Fazenda):** rito complementar à 9.099, mas com Fazenda Pública (Lei 12.153/09). Limite 60 SM (não 40).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 25 (JEF):** Lei 10.259/01 — Juizados Federais. Outro microssistema, com regras próprias.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** REsp e ação rescisória NÃO cabem do JEC. Súmula 203/STJ + FONAJE 44.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 26 (gratuidade):** Súmula 640/STJ aplica-se também ao JEC.' }
        ]
      }
    ]
  },
  {
    id: '24-juizados-fazenda-publica',
    num: 24, materia: 'pc',
    title: 'Juizados Especiais da Fazenda Pública (Lei 12.153/09)',
    edital: '3.2.24',
    editalText: 'Juizados Especiais da Fazenda Pública. Lei 12.153/09. Competência, procedimento, RPV.',
    size: 'Médio',
    schedule: 'Mês 2 da Fase 2 (nov/2026) — semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A **Lei 12.153/09** criou o **Juizado Especial da Fazenda Pública (JEFP)** para causas de menor complexidade contra **Estados, DF, Territórios e Municípios** (e suas autarquias, fundações, empresas públicas). O grande diferencial em relação ao JEC: aqui há **Fazenda no polo passivo**. Aplica-se subsidiariamente a Lei 9.099/95 (art. 27).' },
          { type: 'p', text: 'Três marcas estruturais: (a) **competência absoluta** onde instalado o juizado (art. 2º § 4º — diferente do JEC, que parte da doutrina entende ser opção); (b) **valor até 60 SM** (não 40 como no JEC); (c) **cumprimento por RPV** quando obrigação de pagar até 60 SM, OU precatório acima desse limite.' },
          { type: 'p', text: 'A Lei 12.153 ampliou a tutela do administrado em causas pequenas — antes, ele era obrigado a usar a vara da Fazenda comum (mais lenta). Atinge dispensa do reexame necessário, desnecessidade de manifestação prévia da Fazenda em decisões liminares (em parte), e flexibilização do precatório com a RPV.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Competência (arts. 2º e 5º)' },
          { type: 'list', items: [
            '**Art. 2º** — competência cível do JEFP: causas de até 60 SM em que figurem como rés Estados, DF, Territórios, Municípios + suas autarquias e fundações',
            '**Art. 2º § 1º** — EXCLUÍDAS: ações de mandado de segurança, desapropriação, anulação ou cancelamento de ato administrativo (salvo de natureza previdenciária e de lançamento fiscal), execuções fiscais, demandas sobre direitos ou interesses difusos, coletivos e individuais homogêneos, ações sobre bens imóveis, causas de improbidade administrativa, ações que tenham por objeto a impugnação de lei',
            '**Art. 2º § 4º** — competência do JEFP é **ABSOLUTA**, onde houver juizado instalado',
            '**Art. 5º** — partes admitidas: como autoras, PF + ME e EPP; como rés, Estados, DF, Territórios, Municípios + autarquias e fundações + empresas públicas'
          ] },
          { type: 'h', text: 'Procedimento' },
          { type: 'list', items: [
            '**Art. 7º** — não há REEXAME NECESSÁRIO no JEFP, ainda que sentença contrária à Fazenda (regra excepcional ao CPC art. 496)',
            '**Art. 8º** — citação por servidor judiciário ou correspondência (regra)',
            '**Art. 9º** — entes públicos exibirão documentos requisitados em até 30 dias',
            '**Art. 13** — sentença deve ser LÍQUIDA (subsidiariedade da Lei 9.099 art. 38 par. único)',
            '**Art. 16** — decisões que tenham por objeto antecipação de tutela podem ser proferidas LIMINARMENTE, sem necessidade de prévia manifestação da Fazenda em todos os casos',
            '**Art. 17 §§ 1º-2º** — turmas recursais compostas por juízes de 1º grau, com membros suplentes; pedido de uniformização regional/nacional'
          ] },
          { type: 'h', text: 'Cumprimento de sentença' },
          { type: 'list', items: [
            '**Art. 12** — pagamento de obrigação de pagar quantia certa: por **RPV** se até 60 SM; por **precatório** se acima',
            '**Art. 13** — RPV: prazo de 60 dias após requisição',
            '**Art. 13 § 4º** — descumprimento autoriza sequestro do valor, não bloqueio de outras verbas'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Competência absoluta (art. 2º § 4º)' },
          { type: 'p', text: 'Diferente do JEC tradicional (onde há discussão se é opção do autor), no **JEFP a competência é ABSOLUTA** quando o juizado está instalado naquela comarca/foro. Significa: causas de até 60 SM contra ente público local **devem** ir para o JEFP.' },
          { type: 'box', kind: 'atencao', text: '**Competência absoluta no JEFP** (art. 2º § 4º). Erro frequente: confundir com JEC, onde regra majoritária é opção do autor.' },
          { type: 'h', text: 'Causas excluídas (art. 2º § 1º)' },
          { type: 'p', text: 'O rol é **TAXATIVO**. Memorize as principais exclusões: MS, desapropriação, atos administrativos (com 2 exceções: previdenciário e lançamento fiscal), execuções fiscais, ações coletivas, imóveis, improbidade. Causas previdenciárias estaduais/municipais — CABEM. Causas tributárias estaduais/municipais sobre lançamento fiscal — CABEM.' },
          { type: 'box', kind: 'atencao', text: '**MS NÃO cabe no JEFP** (art. 2º § 1º). Erro frequente: confundir com JEF (Lei 10.259), onde o art. 3º também exclui MS.' },
          { type: 'h', text: 'Sem reexame necessário (art. 7º)' },
          { type: 'p', text: 'Mesmo sentença contra a Fazenda **NÃO precisa de reexame necessário** no JEFP. O microssistema afastou a regra do CPC art. 496. Apenas o recurso inominado da Fazenda mantém o duplo grau, se for interposto.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Tema 503 (RE 633.703):** prazos em dobro para Fazenda Pública (CPC art. 183) **APLICAM-SE** ao JEFP. Subsidiariedade do CPC.' },
          { type: 'h', text: 'RPV × precatório no JEFP' },
          { type: 'p', text: '**RPV (Requisição de Pequeno Valor):** até 60 SM, prazo de 60 dias para pagamento. **Precatório:** acima de 60 SM, sistema do art. 100 da CF (fila, ordem cronológica). O JEFP tem o limite máximo de 60 SM, então a regra prática é RPV.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**JEFP — Estados, DF, Municípios + autarquias e fundações + EP.** União NÃO entra (essa é Lei 10.259/01 — JEF).' },
          { type: 'box', kind: 'macete', text: '**JEFP: 60 SM + competência ABSOLUTA + sem reexame.** Três marcas que diferenciam do JEC.' },
          { type: 'box', kind: 'macete', text: '**Excluídos do JEFP — MS-DAi-EF-CO-IM:** **MS** · **D**esapropriação e **A**tos administrativos (não previdenciário/fiscal) · **E**xecução **F**iscal · **C**ole**O**tivas e individuais homogêneas · **IM**óveis e **IM**probidade.' },
          { type: 'box', kind: 'macete', text: '**RPV no JEFP — 60-60:** até **60** SM, prazo **60** dias.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**JEFP NÃO julga União ou autarquias federais** (essas vão para o JEF — Lei 10.259/01). O art. 5º II é taxativo: Estados, DF, Territórios, Municípios + autarquias/fundações desses entes + empresas públicas.' },
          { type: 'box', kind: 'atencao', text: '**Reexame necessário NÃO se aplica** (art. 7º). Banca pode dizer "sentença contra a Fazenda no JEFP exige reexame" — falso.' },
          { type: 'box', kind: 'atencao', text: '**Causas tributárias podem caber** se forem sobre lançamento fiscal (não execução fiscal). Banca tenta induzir exclusão geral — confira o § 1º.' },
          { type: 'box', kind: 'atencao', text: '**Prazos em dobro da Fazenda APLICAM-SE** ao JEFP** (STF Tema 503). Subsidiariedade do CPC.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 23 (JEC):** subsidiariedade da Lei 9.099/95 (art. 27 da Lei 12.153). Princípios OSICE valem; sentença líquida; embargos de declaração com 5 dias.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 25 (JEF):** outro microssistema federal — para União, autarquias e fundações federais (Lei 10.259/01).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 12 (cumprimento contra Fazenda):** RPV vs precatório (CF art. 100 + ADCT art. 87). RPV no JEFP até 60 SM; em juízo comum, segue limites estaduais (Estado fixa, mín. 30 SM se nada dispuser).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** atuação como fiscal do ordenamento em causas com interesse público. No JEFP, a atuação do MP segue regra geral.' }
        ]
      }
    ]
  },
  {
    id: '25-juizados-federais',
    num: 25, materia: 'pc',
    title: 'Juizados Especiais Federais (Lei 10.259/01)',
    edital: '3.2.25',
    editalText: 'Juizados Especiais Federais. Lei 10.259/01. Competência, procedimento, recursos para a Turma Nacional.',
    size: 'Médio',
    schedule: 'Mês 2 da Fase 2 (nov/2026) — semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A **Lei 10.259/01** instituiu os **Juizados Especiais Federais (JEF)** para causas cíveis (e criminais) de menor complexidade na Justiça Federal. Diferencia-se do JEC (Lei 9.099/95) e do JEFP (Lei 12.153/09) pelo polo passivo: aqui a ré é a **União, suas autarquias, fundações e empresas públicas FEDERAIS** (art. 6º II).' },
          { type: 'p', text: 'Limite de **60 SM** (cíveis), competência **ABSOLUTA** onde instalado (art. 3º § 3º). Causas previdenciárias federais (INSS) representam o grosso do trabalho dos JEFs. Procedimento e recursos seguem essencialmente a Lei 9.099/95 (subsidiária — art. 1º). O grande diferencial: **Pedido de Uniformização** (regional e nacional) para harmonizar jurisprudência, com a **TNU (Turma Nacional de Uniformização)**.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Competência (art. 3º)' },
          { type: 'list', items: [
            '**Caput** — JEF cível julga causas até **60 salários-mínimos** de competência da Justiça Federal',
            '**§ 1º** — EXCLUÍDAS: causas relativas a direitos coletivos e difusos, ações da União, autarquias federais e fundações federais (em determinadas hipóteses), MS, desapropriação, divisão e demarcação, ações populares, execuções fiscais, ações sobre bens imóveis, anulação ou cancelamento de ato administrativo (salvo previdenciário e lançamento fiscal)',
            '**§ 2º** — competência cível segue valor da causa',
            '**§ 3º** — competência **ABSOLUTA** onde instalado o JEF'
          ] },
          { type: 'h', text: 'Procedimento e tutelas' },
          { type: 'list', items: [
            '**Art. 4º** — juiz pode, de ofício ou a requerimento, deferir medidas cautelares no curso do processo, para evitar dano irreparável à parte',
            '**Art. 5º** — não há reexame necessário (recepciona Lei 9.099)',
            '**Art. 9º** — não há prazos em dobro nem prazos diferenciados para a Fazenda Pública no JEF (regra excepcional!)',
            '**Art. 11** — entes públicos cumprirão decisões liminares e antecipatórias em 5 dias',
            '**Art. 12** — pagamento RPV até 60 SM (art. 17), em 60 dias'
          ] },
          { type: 'h', text: 'Recursos' },
          { type: 'list', items: [
            '**Art. 14** — Pedido de Uniformização: cabível quando houver divergência entre Turmas Recursais sobre questão de DIREITO MATERIAL, julgado pelas turmas regionais (mesma região) ou pela TNU (Turmas Recursais de regiões diferentes ou contrariedade a súmula/jurisprudência STJ)',
            '**Art. 15** — TNU é integrada por 10 juízes federais (2 por região), presidida pelo CJF; pode estender efeito a outros casos (precedente)',
            '**Art. 14 § 4º** — incidente cabível no STJ se a decisão da TNU contrariar súmula ou jurisprudência dominante do STJ',
            '**RE no STF** — cabe (com repercussão geral) das decisões da Turma Recursal',
            '**REsp no STJ** — NÃO CABE (Súmula 203/STJ)'
          ] },
          { type: 'h', text: 'JEF Criminal (arts. 20-26)' },
          { type: 'list', items: [
            'Competência para infrações penais de menor potencial ofensivo (até 2 anos de pena máxima)',
            'Subsidiariedade da Lei 9.099/95 também na parte penal (transação penal, suspensão condicional, ANPP)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'NÃO há prazos diferenciados para a Fazenda no JEF (art. 9º)' },
          { type: 'p', text: 'Esta é a peculiaridade marcante: **enquanto no JEFP estadual há prazo em dobro** (Tema 503/STF aplicando subsidiariamente o CPC), na **Lei 10.259 o art. 9º veda expressamente** prazos diferenciados. União/autarquias federais litigam no JEF como qualquer outra parte.' },
          { type: 'box', kind: 'atencao', text: '**JEF não tem prazo em dobro para Fazenda** (art. 9º). Diferente do JEFP estadual, onde há (Tema 503/STF). Banca confunde os dois!' },
          { type: 'h', text: 'Cumprimento de obrigação de pagar — 60 dias' },
          { type: 'p', text: 'Pagamento por **RPV em 60 dias** após requisição (art. 17). Limite de 60 SM. Acima disso, segue precatório do art. 100 da CF. Descumprimento → sequestro do valor.' },
          { type: 'h', text: 'Pedido de Uniformização (PU)' },
          { type: 'table', headers: ['Hipótese', 'Competência', 'Base'],
            rows: [
              ['Divergência entre Turmas da MESMA região', 'Turma Regional de Uniformização (TRU)', 'Art. 14 § 1º'],
              ['Divergência entre Turmas de regiões DIFERENTES', 'Turma Nacional de Uniformização (TNU)', 'Art. 14 § 2º'],
              ['Decisão TNU contrariando súmula/jurisprudência STJ', 'STJ', 'Art. 14 § 4º']
            ] },
          { type: 'box', kind: 'atencao', text: '**PU é só sobre DIREITO MATERIAL.** Divergência sobre direito processual NÃO cabe pedido de uniformização. Erro recorrente.' },
          { type: 'h', text: 'Causas excluídas (art. 3º § 1º)' },
          { type: 'p', text: 'Memorize: MS, desapropriação, atos administrativos (com exceção de previdenciário e lançamento fiscal), execuções fiscais, coletivas/difusas, imóveis, ação popular. **MUITAS causas previdenciárias** vão para o JEF (revisões de benefício, restabelecimento, concessão).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**JEF = União + autarquias federais + fundações federais + EP federais.** Estados/Municípios = JEFP.' },
          { type: 'box', kind: 'macete', text: '**JEF: 60 SM + competência ABSOLUTA + SEM prazo em dobro.** Diferente do JEFP que TEM prazo em dobro.' },
          { type: 'box', kind: 'macete', text: '**TNU/TRU julgam DIREITO MATERIAL.** Processual não cabe PU.' },
          { type: 'box', kind: 'macete', text: '**Hierarquia: TR → TRU → TNU → STJ.** Matéria sobe quando há divergência ou contrariedade a súmula superior.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**JEF NÃO TEM prazo em dobro para Fazenda** (art. 9º). Diferente do JEFP estadual.' },
          { type: 'box', kind: 'atencao', text: '**Causas previdenciárias federais (INSS) tipicamente VÃO para o JEF**, especialmente concessão/revisão de benefício até 60 SM. É o "core" prático do JEF.' },
          { type: 'box', kind: 'atencao', text: '**REsp NÃO cabe**, mas há mecanismo alternativo: art. 14 § 4º — incidente no STJ contra decisão da TNU contrária à súmula/jurisprudência STJ.' },
          { type: 'box', kind: 'atencao', text: '**MS contra ato federal NÃO cabe no JEF** (art. 3º § 1º) — vai para vara federal comum (Lei 12.016/09).' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 23 (JEC):** Lei 9.099/95 aplicável subsidiariamente. Princípios e procedimento gerais.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 24 (JEFP):** outro microssistema da Fazenda — estadual, com diferenças em prazos.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 12 (cumprimento contra Fazenda):** RPV/precatório federal segue mesma lógica geral, com prazos próprios da 10.259.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 28 (precedentes):** TNU edita súmulas vinculantes de fato — força jurisprudencial relevante para concursos.' }
        ]
      }
    ]
  },
  {
    id: '26-justica-gratuita',
    num: 26, materia: 'pc',
    title: 'Assistência judiciária e justiça gratuita',
    edital: '3.2.26',
    editalText: 'Assistência judiciária integral. Justiça gratuita (Lei 1.060/50 e CPC arts. 98-102). Defensoria Pública. Honorários sucumbenciais e gratuidade.',
    size: 'Médio',
    schedule: 'Mês 2 da Fase 2 (nov/2026) — semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O **acesso à justiça** (CF art. 5º LXXIV) tem três expressões complementares: (a) **assistência jurídica integral e gratuita** — prestação de serviço jurídico, função da Defensoria Pública (DPE/DPU/CF art. 134); (b) **assistência judiciária** — patrocínio em juízo (Defensoria, núcleo de prática, advogado dativo); (c) **gratuidade da justiça** — dispensa de pagamento de custas, despesas e honorários (CPC arts. 98-102 + Lei 1.060/50).' },
          { type: 'p', text: 'O CPC/15 reformulou a matéria — derrogou a maior parte da Lei 1.060/50 (que regia a gratuidade desde 1950), trazendo regulamentação detalhada nos arts. 98-102. Pontos centrais: pedido pode ser formulado a qualquer tempo (Súmula 640/STJ); PF tem **presunção** de hipossuficiência (iuris tantum); PJ deve PROVAR (Súmula 481/STJ); honorários e custas, quando vencido o beneficiário, são **exigíveis sob condição** (art. 98 § 3º) — só pagam se nos 5 anos houver melhora econômica.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'CPC arts. 98 a 102' },
          { type: 'list', items: [
            '**Art. 98** — pessoa NATURAL ou JURÍDICA, brasileira ou estrangeira, com insuficiência de recursos, tem direito à gratuidade',
            '**Art. 98 § 1º** — abrangência: taxas, custas, selos postais, indenização à testemunha, depósitos prévios, honorários do advogado e do perito, etc.',
            '**Art. 98 § 2º** — concessão NÃO afasta a responsabilidade do beneficiário pelos honorários e custas decorrentes de sua sucumbência',
            '**Art. 98 § 3º** — verbas decorrentes da sucumbência ficam **sob condição suspensiva de exigibilidade** e somente são exigidas se, em até 5 anos, vier a ter capacidade financeira; passados 5 anos, **prescrita** a obrigação',
            '**Art. 99** — pedido a qualquer tempo (PI, contestação, recurso); presume-se VERDADEIRA a alegação de PF (§ 3º)',
            '**Art. 99 § 2º** — juiz somente indefere se houver elementos nos autos que evidenciem falta de pressupostos; antes, intima para comprovar (§ 2º final)',
            '**Art. 99 § 4º** — o juiz não pode INDEFERIR DE OFÍCIO para aplicar a regra do § 2º — antes, intima',
            '**Art. 100** — impugnação à gratuidade pela parte contrária: nos próprios autos, sem suspender o processo',
            '**Art. 102** — sobrevindo melhora econômica, o beneficiário pode ser obrigado a pagar custas/despesas; havendo má-fé na declaração, multa de até 10x sobre as custas dispensadas'
          ] },
          { type: 'h', text: 'Súmulas relevantes' },
          { type: 'list', items: [
            '**Súmula 481/STJ** — Faz jus ao benefício a PJ (com ou sem fins lucrativos) que comprovar impossibilidade de arcar com encargos processuais',
            '**Súmula 640/STJ** — Gratuidade pode ser requerida a QUALQUER TEMPO, considerando-se a situação no momento do pedido',
            '**Súmula 178/STJ** — Beneficiário não está dispensado de pagar custas e honorários, em caso de derrota; suspensos sob condição (depois CPC § 3º)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'PF presume — PJ prova' },
          { type: 'p', text: '**Pessoa Física:** declaração de hipossuficiência (mesmo no próprio corpo da PI) **PRESUME** verdade (art. 99 § 3º). Juiz só indefere se houver elementos contrários nos autos — e ainda assim deve INTIMAR a parte para comprovar antes (§ 2º).' },
          { type: 'p', text: '**Pessoa Jurídica:** SEM presunção. Deve **PROVAR** a hipossuficiência financeira (Súmula 481/STJ). Pode ter fins lucrativos, sim — sociedade empresária em situação econômica adversa pode receber gratuidade.' },
          { type: 'box', kind: 'macete', text: '**PF presume; PJ prova** (Súmula 481/STJ). É a frase-chave do tema.' },
          { type: 'h', text: 'Honorários sucumbenciais e gratuidade (art. 98 § 3º)' },
          { type: 'p', text: '**Beneficiário derrotado é condenado em honorários, sim** — apenas a EXIGIBILIDADE fica suspensa por 5 anos. Se nesse prazo houver melhora, paga; senão, prescreve. Erro frequente: imaginar que gratuidade dispensa condenação por sucumbência.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 178 + CPC art. 98 § 3º:** beneficiário derrotado é condenado, exigibilidade suspensa por 5 anos. Não há dispensa pura e simples.' },
          { type: 'h', text: 'Pedido a qualquer tempo (Súmula 640/STJ)' },
          { type: 'p', text: 'Pode ser feito na PI, contestação, recurso, cumprimento de sentença, em qualquer fase. O que importa é a situação econômica **no momento da formulação do pedido**. Não há preclusão.' },
          { type: 'h', text: 'Indeferimento de ofício e contraditório prévio (art. 99 § 2º)' },
          { type: 'p', text: 'O juiz **NÃO pode indeferir** sem antes INTIMAR a parte para apresentar comprovação. Esse é dever de cooperação processual + contraditório. Indeferimento direto, sem oportunidade de comprovação, gera nulidade.' },
          { type: 'box', kind: 'atencao', text: '**Antes de indeferir gratuidade — INTIMAR para comprovar** (art. 99 § 2º). Banca pode armar: "juiz indefere de ofício quando inverossímil" — falso, exige contraditório prévio.' },
          { type: 'h', text: 'Impugnação (art. 100)' },
          { type: 'p', text: 'A parte contrária impugna **nos próprios autos**, sem suspensão do processo. Cabe agravo de instrumento da decisão (CPC art. 1.015 V — entendimento majoritário, ou recorrer ao final, controvertido).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Acesso à justiça — 3 expressões: jurídica integral · judiciária · gratuidade da justiça.** As 3 são distintas, podem coincidir mas não se confundem.' },
          { type: 'box', kind: 'macete', text: '**98 § 3º: SUSPENDE 5 anos, depois PRESCREVE.** Não dispensa.' },
          { type: 'box', kind: 'macete', text: '**A qualquer tempo · contraditório prévio · PF presume · PJ prova.** Quatro pilares.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**PJ pode ser beneficiária**, sim — mas DEVE PROVAR (Súmula 481/STJ). Erro frequente: dizer que apenas PF tem direito.' },
          { type: 'box', kind: 'atencao', text: '**Estrangeiro também tem direito** (art. 98 caput). Não há restrição à nacionalidade.' },
          { type: 'box', kind: 'atencao', text: '**Indeferimento de ofício SEM intimação prévia = nulidade** (art. 99 § 2º). Banca pode tentar dizer "juiz pode indeferir de plano se ostensivamente abastada" — falso, sempre intima primeiro.' },
          { type: 'box', kind: 'atencao', text: '**Beneficiário derrotado É CONDENADO** em honorários — só fica suspenso (art. 98 § 3º). Não há dispensa.' },
          { type: 'box', kind: 'atencao', text: '**A maior parte da Lei 1.060/50 foi REVOGADA pelo CPC/15** (art. 1.072 III). Apenas alguns dispositivos sobrevivem (sobre Defensoria). Não estudar a Lei 1.060 sem ler o CPC arts. 98-102.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 17 (gratuidade no JEC/JEFP/JEF):** mesma sistemática, aplicável subsidiariamente.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 30 (honorários):** beneficiário da gratuidade derrotado paga honorários sob condição (art. 98 § 3º).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** atuação obrigatória em causas com incapazes (art. 178 II) — frequentemente coincide com gratuidade.' },
          { type: 'box', kind: 'conexao', text: '**Defensoria Pública (CF art. 134):** órgão constitucional independente; presta assistência jurídica integral e gratuita.' }
        ]
      }
    ]
  },
  {
    id: '27-cooperacao-internacional',
    num: 27, materia: 'pc',
    title: 'Cooperação jurídica internacional',
    edital: '3.2.27',
    editalText: 'Cooperação jurídica internacional. Auxílio direto. Carta rogatória. Homologação de sentença estrangeira (CPC arts. 26-41 e 960-965).',
    size: 'Pequeno-Médio',
    schedule: 'Mês 2 da Fase 2 (nov/2026) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O CPC/15 disciplinou pela primeira vez de modo sistemático a **cooperação jurídica internacional** (arts. 26-41) e a **homologação de sentença estrangeira** (arts. 960-965). Antes, a matéria era dispersa em tratados, regimentos do STJ e Lei 9.307/96 (arbitragem). Hoje há marco unificado.' },
          { type: 'p', text: 'Três institutos centrais a distinguir: (1) **Auxílio direto** (CPC art. 28) — autoridade brasileira EXECUTA o ato pedido por estado estrangeiro sem juízo de delibação. (2) **Carta rogatória** (CPC art. 36) — pedido de ato com necessidade de juízo de delibação no STJ (concede-se exequatur). (3) **Homologação de sentença estrangeira** (CPC arts. 960-965) — STJ reconhece eficácia da decisão estrangeira para que produza efeitos no Brasil.' },
          { type: 'p', text: 'A **autoridade central** brasileira é o Ministério da Justiça (Departamento de Recuperação de Ativos e Cooperação Jurídica Internacional — DRCI). Princípios: respeito às garantias do devido processo (CPC art. 26 § 2º), publicidade dos procedimentos, espontaneidade e reciprocidade.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Disposições gerais (arts. 26-27)' },
          { type: 'list', items: [
            '**Art. 26** — cooperação reger-se-á por tratado de que o Brasil seja parte; na sua ausência, pelo princípio da reciprocidade',
            '**Art. 26 § 1º** — princípios da cooperação: respeito às garantias do devido processo legal; igualdade de tratamento; publicidade processual (salvo sigilo legal); existência de autoridade central; espontaneidade na transmissão',
            '**Art. 26 § 4º** — vedada a discriminação ao requerimento estrangeiro',
            '**Art. 27** — objeto: citação, intimação, colheita de provas, informações, atos concertados, qualquer outro ato não vedado em lei brasileira'
          ] },
          { type: 'h', text: 'Auxílio direto (arts. 28-34)' },
          { type: 'list', items: [
            '**Art. 28** — auxílio direto = quando a medida solicitada não decorrer diretamente de decisão estrangeira; pode ser executada diretamente pelas autoridades brasileiras',
            '**Art. 30** — atos de auxílio direto: obtenção e prestação de informações, colheita de provas (salvo as que precisem de cooperação direta entre autoridades centrais)',
            '**Art. 33** — para auxílio direto que reclame medida judicial, competência da JUSTIÇA FEDERAL'
          ] },
          { type: 'h', text: 'Carta rogatória e exequatur (arts. 36-37)' },
          { type: 'list', items: [
            '**Art. 36** — carta rogatória passiva: respeitará as garantias do devido processo legal; será denegada se manifestamente ofensiva à ordem pública',
            '**Art. 37** — pedido pode ser feito pela parte ou pela autoridade estrangeira; exequatur cabível ao STJ (CF art. 105 I i)'
          ] },
          { type: 'h', text: 'Sentença estrangeira (arts. 960-965)' },
          { type: 'list', items: [
            '**Art. 960** — homologação obrigatória para produção de efeitos da sentença estrangeira no Brasil',
            '**Art. 961** — decisão estrangeira pode ser executada após homologação pelo STJ ou concessão de exequatur a carta rogatória, salvo em casos legais expressos (ex: divórcio consensual puro — § 5º)',
            '**Art. 961 § 5º** — sentença estrangeira de DIVÓRCIO CONSENSUAL produz efeitos no Brasil INDEPENDENTEMENTE de homologação pelo STJ. Apenas registro civil',
            '**Art. 963** — requisitos para homologação: sentença proferida por autoridade competente; cientificação ou revelia legalmente verificada; eficaz no país de origem; não ofender coisa julgada brasileira; estar em português autenticado/traduzido; atender requisitos legais',
            '**Art. 964** — não há revisão de mérito (juízo de DELIBAÇÃO)',
            '**Art. 965** — execução da sentença homologada na JUSTIÇA FEDERAL (CF art. 109 X)'
          ] },
          { type: 'h', text: 'Sentença arbitral estrangeira' },
          { type: 'list', items: [
            '**Lei 9.307 art. 35** — homologação no STJ (CF art. 105 I i)',
            '**Lei 9.307 art. 39** — recusa só nos casos da Convenção de Nova York/1958 (incapacidade, convenção inválida, ofensa à ordem pública, falta de notificação, decisão fora dos limites, falta de obrigatoriedade na origem)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Auxílio direto × carta rogatória — qual a diferença?' },
          { type: 'p', text: 'Critério legal (CPC art. 28): se a medida pedida decorre diretamente de decisão estrangeira, é **carta rogatória** (com exequatur do STJ). Se for ato administrativo/processual independente — coleta de prova, informação, citação — pode ser **auxílio direto** (sem juízo de delibação, executado diretamente).' },
          { type: 'box', kind: 'macete', text: '**Decorre de DECISÃO estrangeira → ROGATÓRIA + STJ. Não decorre → AUXÍLIO DIRETO.**' },
          { type: 'h', text: 'Divórcio consensual estrangeiro — efeito direto (art. 961 § 5º)' },
          { type: 'p', text: 'Inovação importante do CPC/15: divórcio CONSENSUAL puro (sem partilha de bens controvertida ou guarda) produz efeitos **IMEDIATAMENTE** no Brasil, com simples averbação no registro civil. **NÃO precisa de homologação no STJ.**' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.787.345 e Tema 1.047:** divórcio consensual puro estrangeiro dispensa homologação. Se houver partilha de bens em discussão, exige homologação.' },
          { type: 'h', text: 'STJ — competência única para homologação' },
          { type: 'p', text: 'A EC 45/2004 transferiu a competência homologatória do STF para o STJ (CF art. 105 I i). O procedimento segue o **Regimento Interno do STJ** (RISTJ arts. 216-A a 216-N) + CPC.' },
          { type: 'h', text: 'Juízo de delibação (art. 964)' },
          { type: 'p', text: 'O STJ **NÃO revisa o mérito** da sentença estrangeira. Apenas verifica os requisitos formais e a não ofensa à ordem pública/soberania nacional/dignidade humana. É controle de admissibilidade, não de revisão substancial.' },
          { type: 'box', kind: 'atencao', text: '**STJ NÃO revisa mérito** da sentença estrangeira (art. 964). Erro: dizer que é "duplo grau" ou que cabe rediscussão da causa.' },
          { type: 'h', text: 'Execução de sentença homologada — JF' },
          { type: 'p', text: 'Após homologação no STJ, a execução é na **Justiça Federal** (CF art. 109 X + CPC art. 965). Não vai para a Justiça Comum estadual, mesmo se a matéria for tipicamente estadual.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**3 institutos: Auxílio Direto · Carta Rogatória · Homologação.** Aux: direto, sem delibação. Rogatória: ato com delibação (STJ). Homologação: efeito de sentença (STJ).' },
          { type: 'box', kind: 'macete', text: '**Divórcio consensual puro = efeito DIRETO** (art. 961 §5º). Sem partilha controvertida → dispensa STJ.' },
          { type: 'box', kind: 'macete', text: '**Sempre que entrar STJ, vira JF na execução** (art. 965 + CF 109 X).' },
          { type: 'box', kind: 'macete', text: '**4 cartas: precatória (juízos), de ordem (tribunal pra inferior), rogatória (internacional), arbitral (árbitro).**' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**STF NÃO homologa mais sentença estrangeira** (mudou em 2004 com a EC 45). É STJ. Banca pode tentar a antiga sistemática.' },
          { type: 'box', kind: 'atencao', text: '**Não há revisão de mérito no juízo de delibação** (art. 964). STJ verifica requisitos, não rediscute causa.' },
          { type: 'box', kind: 'atencao', text: '**Auxílio direto NÃO precisa de delibação do STJ** (art. 33 — competência da JF). Erro: confundir com carta rogatória.' },
          { type: 'box', kind: 'atencao', text: '**Sentença arbitral estrangeira → STJ** (Lei 9.307 art. 35). Diferente da interna, que é TEJ direto.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 22 (arbitragem):** sentença arbitral ESTRANGEIRA — homologação no STJ + Convenção de Nova York.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 6 (competência):** competência absoluta da Justiça Federal para execução da sentença estrangeira homologada (CF 109 X).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** decisão do STJ em homologação é irrecorrível para tribunal superior, salvo embargos no próprio STJ.' }
        ]
      }
    ]
  },
  {
    id: '28-precedentes-stare-decisis',
    num: 28, materia: 'pc',
    title: 'Sistema de precedentes — IRDR, IAC, repetitivos',
    edital: '3.2.28',
    editalText: 'Microssistema de precedentes vinculantes. CPC arts. 926-928, 976-987 (IRDR), 947 (IAC), 1.036-1.041 (repetitivos).',
    size: 'Grande',
    schedule: 'Mês 2 da Fase 2 (nov/2026) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O CPC/15 instituiu o **microssistema de precedentes vinculantes** (arts. 926-928 + 927 + 947 + 976-987 + 1.036-1.041), influenciado pelo *stare decisis* anglo-saxão. A finalidade é **uniformidade, integridade, estabilidade e coerência** da jurisprudência (art. 926 caput) — antídoto à "loteria judiciária".' },
          { type: 'p', text: 'O **art. 927** lista os **6 precedentes obrigatórios**: (I) decisões em controle concentrado de constitucionalidade do STF; (II) súmulas vinculantes; (III) acórdãos em IRDR ou IAC; (IV) acórdãos em recursos repetitivos do STJ ou repercussão geral do STF; (V) súmulas do STF (matéria constitucional) e do STJ (matéria infraconstitucional); (VI) orientação do plenário/órgão especial a que estiverem vinculados (regimentos).' },
          { type: 'p', text: 'A construção do precedente exige **fundamentação adequada** (art. 489 § 1º V e VI): juiz não pode invocar precedente sem demonstrar adequação do caso concreto à *ratio decidendi*; nem deixar de aplicar precedente sem demonstrar **distinguishing** (distinção) ou **overruling** (superação). Esses dois conceitos são pedra de toque das provas modernas.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Princípios gerais (arts. 926-927)' },
          { type: 'list', items: [
            '**Art. 926** — tribunais devem uniformizar sua jurisprudência e mantê-la **estável, íntegra e coerente**',
            '**Art. 926 § 1º** — tribunais editarão enunciados de súmula da jurisprudência',
            '**Art. 926 § 2º** — ao editar súmula, atenção às circunstâncias fáticas dos precedentes',
            '**Art. 927** — juízes e tribunais OBSERVARÃO (vinculação): I (decisões STF controle concentrado); II (SV); III (acórdãos IRDR/IAC); IV (acórdãos repetitivos STJ + RG STF); V (súmulas STF/STJ); VI (orientação do plenário/órgão especial)',
            '**Art. 927 § 1º** — observância do contraditório + dever de fundamentação adequada (art. 489 § 1º)',
            '**Art. 927 § 4º** — modificação de enunciado: precedida de audiências públicas e participação de pessoas/instituições',
            '**Art. 928** — julgamento de casos repetitivos = IRDR + recursos repetitivos'
          ] },
          { type: 'h', text: 'IRDR — Incidente de Resolução de Demandas Repetitivas (arts. 976-987)' },
          { type: 'list', items: [
            '**Art. 976** — pressupostos: (I) efetiva REPETIÇÃO de processos sobre **mesma questão exclusivamente de DIREITO**; (II) risco de OFENSA à ISONOMIA e à SEGURANÇA jurídica',
            '**Art. 976 § 1º** — basta UMA causa pendente no tribunal para instauração',
            '**Art. 977** — legitimados: relator/órgão julgador (de ofício); partes; MP; Defensoria Pública',
            '**Art. 978** — IRDR julgado pelo órgão indicado no regimento (geralmente plenário/órgão especial)',
            '**Art. 982 II** — suspensão dos processos pendentes na área de jurisdição do tribunal',
            '**Art. 985** — tese aplicada a TODOS os processos da área de jurisdição (presentes e FUTUROS — efeito ultra partes)',
            '**Art. 985 § 1º** — não observada a tese: cabe RECLAMAÇÃO',
            '**Art. 987** — cabe RE/REsp do julgamento do IRDR (efeito suspensivo nacional automático)'
          ] },
          { type: 'h', text: 'IAC — Incidente de Assunção de Competência (art. 947)' },
          { type: 'list', items: [
            '**Caput** — admissível em julgamento de relevante questão de direito, com grande repercussão social, sem repetição em múltiplos processos',
            '**§ 1º** — proposta pelo relator, partes ou MP; órgão indicado no regimento decide',
            '**§ 3º** — acórdão do IAC vinculará todos os juízes e órgãos fracionários (efeito vinculante interno do tribunal)',
            'Diferença IRDR × IAC: IRDR exige repetição; IAC pode ser usado com 1 caso de grande relevância (uniformização preventiva)'
          ] },
          { type: 'h', text: 'Recursos repetitivos (arts. 1.036-1.041)' },
          { type: 'list', items: [
            '**Art. 1.036** — quando houver multiplicidade de RE/REsp com mesma questão de direito, presidência seleciona DOIS ou mais "casos-piloto"',
            '**Art. 1.037** — outros processos da mesma matéria ficam SUSPENSOS no país',
            '**Art. 1.039 par. único** — recursos em que se aplicará a tese do paradigma e os pendentes serão decididos conforme tese fixada',
            '**Art. 1.040** — implementação da tese: tribunal de origem aplica + processos suspensos retomam'
          ] },
          { type: 'h', text: 'Reclamação (arts. 988-993)' },
          { type: 'list', items: [
            '**Art. 988** — cabível para: (I) preservar competência do tribunal; (II) garantir autoridade de suas decisões; (III) garantir observância de decisão STF em controle concentrado; (IV) garantir observância de SV, acórdão repetitivo, IRDR, IAC, RG',
            '**Art. 988 § 5º II** — reclamação contra acórdão recorrido EXIGE prévio esgotamento das instâncias ordinárias quando se tratar de inobservância de decisão em RG/repetitivo',
            '**Não cabe reclamação para fazer cumprir SÚMULA não vinculante** — apenas vinculante (Súmula 734/STF)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Distinguishing × Overruling' },
          { type: 'p', text: '**Distinguishing** = afastamento do precedente porque o caso concreto tem peculiaridades fáticas que justificam tratamento distinto. NÃO desconstrói o precedente; apenas diferencia. Pode ser feito por qualquer juiz, com fundamentação adequada (art. 489 § 1º VI).' },
          { type: 'p', text: '**Overruling** = SUPERAÇÃO do precedente. Só pode ser feito pelo MESMO órgão que editou (ou superior). Exige procedimento específico — quórum, audiência pública etc. (art. 927 § 4º). Razões geralmente: mudança fática, social, jurídica.' },
          { type: 'box', kind: 'macete', text: '**Distinguishing = DIFERENCIAR; Overruling = SUPERAR.** Distinguishing qualquer juiz; Overruling apenas o tribunal autor do precedente.' },
          { type: 'h', text: 'Vinculação obrigatória do art. 927' },
          { type: 'p', text: 'Apesar da redação "OBSERVARÃO" (art. 927), há discussão doutrinária sobre se gera vinculação real ou apenas dever de fundamentação. **Posição predominante (Didier, Marinoni):** sim, há eficácia vinculante, especialmente porque há **reclamação** (art. 988 IV) para garantir observância. Bancas tendem a adotar essa visão.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 510 (REsp 1.696.396):** observância de precedente do STJ em REsp repetitivo é OBRIGATÓRIA aos juízos inferiores; descumprimento autoriza reclamação após esgotamento das ordinárias.' },
          { type: 'h', text: 'IRDR — pressupostos e efeitos' },
          { type: 'p', text: '**Efetiva repetição** + **risco à isonomia/segurança jurídica** (art. 976). A tese vincula processos pendentes E FUTUROS na área do tribunal (art. 985 II) — efeito **ultra partes**. Apenas tribunal de 2º grau julga IRDR (relator no tribunal pode propor, ou propor por iniciativa).' },
          { type: 'box', kind: 'atencao', text: '**IRDR exige questão exclusivamente de DIREITO** (art. 976 I). Matéria de fato/probatória NÃO. Banca pode armar.' },
          { type: 'h', text: 'IRDR × IAC — diferenças' },
          { type: 'table', headers: ['Critério', 'IRDR (976)', 'IAC (947)'],
            rows: [
              ['Repetição de processos', 'Necessária', 'Não'],
              ['Foco', 'Resolver demandas em massa', 'Uniformização preventiva'],
              ['Suspensão de processos', 'Sim, na área do tribunal', 'Não obrigatória'],
              ['Vinculação', 'Casos pendentes + futuros (985 II)', 'Vinculante para juízes e órgãos do tribunal (947 §3º)']
            ] },
          { type: 'h', text: 'Reclamação para cumprir precedente — esgotamento (art. 988 § 5º II)' },
          { type: 'p', text: 'Para acionar reclamação contra acórdão de tribunal local que descumpriu precedente repetitivo/RG, exige-se **esgotamento das instâncias ordinárias** (recurso especial/extraordinário deve ter sido tentado). Apenas para SV há reclamação direta.' },
          { type: 'h', text: 'Modulação de efeitos (art. 927 § 3º)' },
          { type: 'p', text: 'Quando houver alteração de jurisprudência consolidada, pode haver MODULAÇÃO dos efeitos (limitar retroatividade) por razão de interesse social e segurança jurídica. Tema clássico do STF (controle de constitucionalidade) trazido para a esfera dos precedentes.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Art. 927 — 6 precedentes obrigatórios:** I (controle concentrado STF) · II (SV) · III (IRDR/IAC) · IV (repetitivos STJ + RG STF) · V (súmulas STF/STJ) · VI (regimento — plenário/órgão especial).' },
          { type: 'box', kind: 'macete', text: '**SEIQ: Segurança · Estabilidade · Integridade · Q (= coerência)** — 4 valores do art. 926.' },
          { type: 'box', kind: 'macete', text: '**IRDR: Repetição + Direito + Risco isonomia.** Sem repetição, vai pra IAC.' },
          { type: 'box', kind: 'macete', text: '**Reclamação (988 IV) — só pra inobservância de PRECEDENTE OBRIGATÓRIO.** Não cabe contra súmula simples (734/STF).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Súmula simples NÃO autoriza reclamação** (Súmula 734/STF). Só súmula VINCULANTE.' },
          { type: 'box', kind: 'atencao', text: '**Reclamação contra descumprimento de RG/repetitivo: esgotamento ordinário** (art. 988 § 5º II). Pegadinha: dizer "cabe direto, sem esgotamento".' },
          { type: 'box', kind: 'atencao', text: '**IRDR não é IAC.** Memoriza: IRDR exige repetição; IAC é preventivo (1 caso de grande relevância).' },
          { type: 'box', kind: 'atencao', text: '**Distinguishing pode qualquer juiz; Overruling apenas o tribunal autor.** Erro frequente: dizer que qualquer instância pode superar precedente.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 11 (procedimento comum):** improcedência liminar do art. 332 baseada em precedentes obrigatórios — tem ligação direta com o art. 927.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** RE/REsp repetitivos (1.036-1.041), RG (1.035), tudo se conversa com o microssistema de precedentes.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 19 (MS):** SV gera reclamação direta; outros precedentes exigem esgotamento.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 1 (lei processual):** dever de fundamentação (CPC art. 489 § 1º) é o "motor" do sistema — sem ele, precedente é decoração.' }
        ]
      }
    ]
  },
  {
    id: '29-cnj-cnmp-resolucoes',
    num: 29, materia: 'pc',
    title: 'CNJ, CNMP — resoluções aplicáveis',
    edital: '3.2.29',
    editalText: 'Resoluções do CNJ e CNMP relevantes ao processo civil e à atuação do MP.',
    size: 'Pequeno-Médio',
    schedule: 'Mês 2 da Fase 2 (nov/2026) — semana 2',
    advantage: 'A candidata é Analista MPMG — atos do CNMP são parte do dia a dia',
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Os atos normativos do **CNJ** (Conselho Nacional de Justiça — CF art. 103-B) e do **CNMP** (Conselho Nacional do Ministério Público — CF art. 130-A) são fontes regulatórias relevantes do processo civil e da atuação ministerial. Embora subordinados à Constituição e à lei, têm **força normativa interna**, vinculando juízes/membros do MP.' },
          { type: 'p', text: 'Para o concurso do MPMG, há **3 grupos de atos** que merecem atenção: (i) **CNJ** — Resolução 125/2010 (política de tratamento de conflitos, base dos CEJUSCs); 65/2009 (gestão de processos estratégicos); (ii) **CNMP** — Resolução 23/2007 (inquérito civil), 174/2017 (recomendações), 179/2017 (TAC), 230/2021 (LGPD); (iii) **TJMG** — atos locais de processo eletrônico e organização (Lei Orgânica do MPMG — LC 34/94).' },
          { type: 'p', text: 'A **Resolução CNMP 23/2007** é a mais cobrada — disciplina o **inquérito civil**, instrumento exclusivo do MP (CF art. 129 III). Seu conhecimento é essencial para qualquer concurso de Promotor.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'CNJ — Conselho Nacional de Justiça' },
          { type: 'list', items: [
            '**CF art. 103-B** — composição, atribuições; controle administrativo do Judiciário',
            '**Resolução CNJ 125/2010** — Política Judiciária Nacional de Tratamento Adequado dos Conflitos. Base normativa dos **CEJUSCs**',
            '**Resolução CNJ 305/2019** (e aditivas) — PJe (Processo Eletrônico)',
            '**Resolução CNJ 65/2009** — Plano Nacional de Gestão Documental',
            'Decisões em PCA (Procedimento de Controle Administrativo) e em Reclamação Disciplinar têm efeitos disciplinares e administrativos sobre o Judiciário'
          ] },
          { type: 'h', text: 'CNMP — Conselho Nacional do Ministério Público' },
          { type: 'list', items: [
            '**CF art. 130-A** — composição, atribuições; controle administrativo do MP',
            '**Resolução CNMP 23/2007** — Inquérito Civil: instauração, instrução, conclusão, arquivamento. Aplica-se também ao MPF/MPM. Disciplina prazos, formalidades, possibilidade de recomendação, audiência pública',
            '**Resolução CNMP 174/2017** — Recomendações (instrumento extrajudicial de orientação a entes públicos/privados)',
            '**Resolução CNMP 179/2017** — TAC (Termo de Ajustamento de Conduta) — disciplina, requisitos, efeitos',
            '**Resolução CNMP 230/2021** — LGPD aplicada ao MP',
            '**Resolução CNMP 181/2017** (criminal — ANPP) — Acordo de Não Persecução Penal'
          ] },
          { type: 'h', text: 'Inquérito Civil — Resolução CNMP 23/2007 (pontos cobrados)' },
          { type: 'list', items: [
            '**Art. 1º** — IC é instrumento INVESTIGATIVO, não-cogente, de natureza administrativa, exclusivo do MP',
            '**Art. 2º** — instaurado para apurar fato que possa ensejar tutela de interesses ou direitos a cargo do MP (difusos, coletivos, individuais homogêneos)',
            '**Art. 4º** — pode ser instaurado de OFÍCIO ou em razão de representação/notícia',
            '**Art. 9º** — promoção de arquivamento submetida ao Conselho Superior do MP — o juiz NÃO homologa (diferente do IP penal); arquivamento administrativo',
            '**Art. 10** — prazo para conclusão: 1 ano, prorrogável fundamentadamente',
            '**Art. 14** — TAC pode encerrar o inquérito; valor de TÍTULO EXECUTIVO EXTRAJUDICIAL (Lei 7.347/85 art. 5º § 6º)',
            '**Sigilo** — em regra, sigiloso (art. 7º), com possibilidade de divulgação ponderada'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Inquérito civil × inquérito policial' },
          { type: 'table', headers: ['Critério', 'IC (CNMP 23/07)', 'IP (CPP)'],
            rows: [
              ['Titularidade', 'MP (exclusivo — CF 129 III)', 'Polícia Judiciária'],
              ['Natureza', 'Administrativo, investigatório', 'Administrativo, investigatório'],
              ['Arquivamento', 'CSMP (Conselho Superior); juiz NÃO interfere', 'Juiz HOMOLOGAVA até Pacote Anticrime; agora interno do MP'],
              ['Resultado', 'ACP, TAC, recomendação ou arquivamento', 'Denúncia, ANPP, arquivamento'],
              ['Sigilo', 'Em regra, sigiloso', 'Em regra, sigiloso']
            ] },
          { type: 'box', kind: 'atencao', text: '**IC — arquivamento NÃO passa pelo juiz.** Vai ao **Conselho Superior do MP** (CSMP). Diferente do IP. Erro frequente.' },
          { type: 'h', text: 'TAC — Termo de Ajustamento de Conduta' },
          { type: 'p', text: 'Instrumento extrajudicial pelo qual o investigado se obriga a adequar conduta à lei, sob cominação de multa. **Título executivo EXTRAJUDICIAL** (Lei 7.347 art. 5º § 6º). Pode ser celebrado por qualquer legitimado da ACP (incluindo MP, Adm Pública, Defensoria, associações, com requisitos próprios).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.612.931:** TAC celebrado em IC tem natureza de TEE (Lei 7.347 art. 5º § 6º). Cabe execução nos termos do CPC arts. 824 e seguintes.' },
          { type: 'h', text: 'Recomendação (CNMP 174/2017)' },
          { type: 'p', text: 'Instrumento de **orientação** (não-vinculante) a entes públicos ou privados. NÃO cria obrigação juridicamente exigível. Mas o destinatário deve responder fundamentadamente (sob pena de improbidade ou da ACP). É forma extrajudicial de evitar o Judiciário.' },
          { type: 'h', text: 'Resolução CNMP 230/2021 — LGPD' },
          { type: 'p', text: 'O MP é controlador de dados pessoais. Aplicação da LGPD com peculiaridades — atividades persecutórias têm regime próprio (Anteprojeto LGPD criminal). Tema novo, possível em concurso 2027/2028.' },
          { type: 'h', text: 'Limites das resoluções do CNJ/CNMP' },
          { type: 'p', text: 'Resoluções não podem inovar contra a lei nem usurpar competência legislativa. **STF (ADI 4.638):** a competência normativa do CNJ não é genérica nem abrange matéria reservada à lei. Concursos cobram esse limite — pegadinha de "resolução pode tudo".' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**IC = Instrumento exclusivo do MP. Arquivamento NO MP, não no juiz** (CSMP).' },
          { type: 'box', kind: 'macete', text: '**TAC = TEE** (título executivo extrajudicial). Lei 7.347 art. 5º § 6º.' },
          { type: 'box', kind: 'macete', text: '**Resoluções CNMP cobradas: 23 (IC) · 174 (Recomendação) · 179 (TAC) · 181 (ANPP) · 230 (LGPD).**' },
          { type: 'box', kind: 'macete', text: '**Resolução CNJ 125 = CEJUSCs.** Base normativa dos centros de mediação/conciliação.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**IC arquivamento NÃO vai ao juiz** (vai ao CSMP — Conselho Superior). Diferente do IP penal pré-Pacote Anticrime.' },
          { type: 'box', kind: 'atencao', text: '**Recomendação NÃO é juridicamente vinculante** — é orientação. Mas destinatário deve responder fundamentadamente.' },
          { type: 'box', kind: 'atencao', text: '**Resoluções do CNJ/CNMP têm limites** (STF ADI 4.638). Não substituem lei nem invadem matéria legislativa.' },
          { type: 'box', kind: 'atencao', text: '**TAC tem força de TEE** — passa direto à execução, não precisa de processo de conhecimento. Mas se houver inadimplemento, segue rito de execução por título extrajudicial.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 5 (MP):** atribuições constitucionais e legais do MP — IC é instrumento exclusivo (CF 129 III).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 20 (ACP):** TAC e IC são instrumentos pré-judiciais — frequentemente evitam ACP, ou a antecedem.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 21 (mediação):** Resolução CNJ 125/2010 é a base normativa do CEJUSC — política nacional de tratamento de conflitos.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 28 (precedentes):** decisões do CNJ em PCA podem ter impacto disciplinar; STF tem revisado limites normativos.' }
        ]
      }
    ]
  },
  {
    id: '30-honorarios-custas',
    num: 30, materia: 'pc',
    title: 'Honorários sucumbenciais, custas e multas',
    edital: '3.2.30',
    editalText: 'Honorários advocatícios sucumbenciais (CPC art. 85). Custas processuais. Multas processuais (litigância de má-fé, ato atentatório).',
    size: 'Médio',
    schedule: 'Mês 2 da Fase 2 (nov/2026) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Honorários sucumbenciais (**CPC art. 85**) e custas processuais são os principais ÔNUS financeiros do processo. O CPC/15 inovou ao consolidar a **natureza alimentar** dos honorários (art. 85 § 14), garantindo prioridade na execução, e ao estabelecer **honorários recursais** (§ 11) — "majoração" dos honorários quando recurso for desprovido.' },
          { type: 'p', text: 'Quanto à Fazenda Pública (§ 3º), há **sistema escalonado** de percentuais conforme valor da condenação ou da causa, com mínimos por faixa (1% a 20%). Quando há **sucumbência mínima** ou **recíproca** (§§ 14 e 86 par. único), há regras específicas.' },
          { type: 'p', text: 'As **multas processuais** complementam o ônus: litigância de má-fé (arts. 80-81), atos atentatórios à dignidade da justiça (arts. 77 § 2º e 334 § 8º), execução (arts. 774 e 918), descumprimento de ordem judicial (multa diária — art. 537). Cada uma tem natureza, destinatário e regime próprios.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Honorários sucumbenciais (art. 85)' },
          { type: 'list', items: [
            '**Caput** — honorários fixados entre **10% e 20%** sobre valor da condenação, do proveito econômico ou, na ausência, do valor atualizado da causa',
            '**§ 2º** — critérios para fixação: zelo, lugar, natureza/importância da causa, trabalho realizado, tempo exigido',
            '**§ 3º** — Fazenda Pública (sistema ESCALONADO): 10-20% (até 200 SM); 8-10% (200 a 2.000 SM); 5-8% (2.000 a 20.000 SM); 3-5% (20.000 a 100.000 SM); 1-3% (acima 100.000 SM)',
            '**§ 6º** — limites se aplicam ainda que ESTADO seja vencedor; honorários como verba SUI GENERIS, NÃO sujeita a sucumbência mínima',
            '**§ 11** — honorários **RECURSAIS**: tribunal MAJORARÁ honorários, observando limites do § 2º; majoração somada não pode ultrapassar limites máximos do caput/§ 3º',
            '**§ 14** — natureza ALIMENTAR; vedada compensação em caso de sucumbência parcial',
            '**§ 18** — caput, § 2º e demais aplicam-se também à reconvenção, ao cumprimento de sentença, à execução resistida'
          ] },
          { type: 'h', text: 'Sucumbência recíproca e mínima' },
          { type: 'list', items: [
            '**Art. 85 § 14** — vedada COMPENSAÇÃO de honorários em sucumbência parcial',
            '**Art. 86** — sucumbência recíproca: cada parte arca proporcionalmente. **Par. único:** sucumbência mínima (vencedor decai pequena parte) → o vencedor recebe TODOS os honorários',
            '**Súmula 326/STJ:** dano moral fixado em valor inferior ao postulado NÃO importa sucumbência recíproca'
          ] },
          { type: 'h', text: 'Custas processuais' },
          { type: 'list', items: [
            'Fato gerador: distribuição da ação ou prática do ato',
            '**Art. 82 § 2º** — sentença condenará vencido a pagar custas; salvo gratuidade ou outra disposição',
            'Custas estaduais regidas por leis estaduais (no MG: Lei 14.939/03 e regulamento)',
            'Sentenças contra a Fazenda: dispensa de custas em algumas hipóteses (lei estadual define)'
          ] },
          { type: 'h', text: 'Multas processuais' },
          { type: 'list', items: [
            '**Art. 77 § 2º** — atos atentatórios à dignidade da justiça (descumprir ordem, criar obstáculo): multa de até 20% do valor da causa, à União/Estado',
            '**Arts. 80-81** — litigância de má-fé: hipóteses no art. 80; multa de 1% a 10% do valor corrigido da causa, à parte contrária + indenização',
            '**Art. 334 § 8º** — ausência injustificada à audiência de conciliação: até 2% do valor da causa/vantagem econômica, à União/Estado',
            '**Art. 537** — multa cominatória (astreintes) por descumprimento de obrigação de fazer/não fazer/entregar coisa',
            '**Art. 774** — atos atentatórios à dignidade da justiça na execução: multa até 20% do valor atualizado do débito, ao exequente',
            '**Art. 918** — execução manifestamente protelatória: multa de até 20% sobre valor da execução, ao exequente'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Honorários da Fazenda Pública — § 3º' },
          { type: 'p', text: 'Sistema **ESCALONADO POR FAIXAS** — quanto maior o valor, menor o percentual. Vencedor da Fazenda **respeita o piso** da faixa correspondente. Lei 14.940/24 trouxe alterações para evitar honorários ínfimos em causas multimilionárias contra a União.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tema 1.105:** o §3º do art. 85 estabelece sistema cogente; juiz não pode fixar abaixo do mínimo da faixa, ainda que sob argumento de proporcionalidade.' },
          { type: 'h', text: 'Honorários recursais (§ 11)' },
          { type: 'p', text: 'Quando o recurso for **desprovido** (não conhecido OU julgado improcedente), o tribunal **MAJORA** os honorários como sanção pela atuação recursal infrutífera. Não é "novo honorário" — é majoração do existente. Limite: somatório não pode ultrapassar máximo legal (20% ou faixa do § 3º).' },
          { type: 'box', kind: 'atencao', text: '**Honorários recursais incidem mesmo em causa que envolva Fazenda** (§ 11 + §3º). Erro frequente.' },
          { type: 'h', text: 'Natureza alimentar (§ 14)' },
          { type: 'p', text: 'Honorários têm natureza ALIMENTAR — beneficiário tem prioridade na fila de pagamento (art. 100 § 1º CF para precatórios, art. 833 IV CPC para impenhorabilidade). NÃO se sujeitam a compensação em sucumbência parcial.' },
          { type: 'h', text: 'Sucumbência recíproca × mínima' },
          { type: 'p', text: '**Recíproca:** cada parte ganha em parte; rateia honorários proporcionalmente, **vedada compensação** (§ 14). **Mínima:** vencedor decai em ponto irrelevante (ex: pediu 100, ganhou 95) → adversário paga TUDO. Súmula 326/STJ traz exemplo clássico (dano moral fixado abaixo do pedido NÃO é recíproca).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 326:** "Na ação de indenização por dano moral, a condenação em montante inferior ao postulado na inicial não implica sucumbência recíproca."' },
          { type: 'h', text: 'Multas — destinatários' },
          { type: 'table', headers: ['Multa', 'Hipótese', 'Destinatário'],
            rows: [
              ['Art. 77 § 2º', 'Ato atentatório (descumprir ordem etc.)', 'União/Estado'],
              ['Art. 81', 'Litigância de má-fé', 'Parte contrária + indenização'],
              ['Art. 334 § 8º', 'Ausência audiência conciliação', 'União/Estado'],
              ['Art. 537', 'Astreintes (descumprir tutela específica)', 'Exequente/credor'],
              ['Art. 774', 'Ato atentatório execução', 'Exequente'],
              ['Art. 918', 'Execução protelatória', 'Exequente']
            ] },
          { type: 'box', kind: 'macete', text: '**Atentatórios = União/Estado. Má-fé = parte contrária. Astreintes/protelação = exequente.**' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Honorários Fazenda — 5 faixas, do maior pro menor (10-20% até 1-3%).** Quanto maior o valor da causa, menor o %.' },
          { type: 'box', kind: 'macete', text: '**Recursais (§11) = MAJORAÇÃO, não novo honorário.** Soma respeita limite máximo.' },
          { type: 'box', kind: 'macete', text: '**Honorários = ALIMENTAR (§14). Vedada COMPENSAÇÃO.**' },
          { type: 'box', kind: 'macete', text: '**Litigância má-fé: 1-10% + indenização. Atentatório: até 20%, à União.**' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Honorários recursais APLICAM-SE à Fazenda** (§ 11 c/c § 3º). Erro: assumir que Fazenda escapa.' },
          { type: 'box', kind: 'atencao', text: '**§ 14 veda COMPENSAÇÃO** em sucumbência parcial. Antes do CPC/15, era comum compensar; hoje, não.' },
          { type: 'box', kind: 'atencao', text: '**Súmula 326/STJ — dano moral fixado abaixo do pedido = SUCUMBÊNCIA NÃO RECÍPROCA.** Apenas o réu paga.' },
          { type: 'box', kind: 'atencao', text: '**Astreintes do art. 537 vão para o EXEQUENTE**, não para a União. Diferente das multas atentatórias.' },
          { type: 'box', kind: 'atencao', text: '**Honorários NA RECONVENÇÃO, NA EXECUÇÃO RESISTIDA, NO CUMPRIMENTO DE SENTENÇA — TODOS COBRADOS** (§ 18). Erro: pensar que só na sentença principal.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico 12 (cumprimento contra Fazenda):** honorários do § 3º na fase de cumprimento — § 7º exclui honorários no cumprimento NÃO impugnado.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 17 (gratuidade):** beneficiário derrotado paga honorários, mas exigibilidade SUSPENSA por 5 anos (CPC art. 98 § 3º).' },
          { type: 'box', kind: 'conexao', text: '**Tópico 16 (recursos):** honorários recursais (§ 11) — todo recurso desprovido majora a verba.' },
          { type: 'box', kind: 'conexao', text: '**Tópico 21 (mediação):** ausência à audiência do art. 334 = ato atentatório (multa § 8º à União/Estado).' }
        ]
      }
    ]
  },

  // ============================================================
  // ESQUELETOS — Fase 3 (Direito Civil)
  // numeração própria 1-17 (não mistura com PC); materia: 'civil'
  // ============================================================
  {
    id: 'civ-01-lindb',
    num: 1, materia: 'civil',
    title: 'LINDB e teoria geral do Direito Civil',
    edital: '3.1.1',
    editalText: 'Lei de Introdução às Normas do Direito Brasileiro. Vigência, aplicação, integração e interpretação. Teoria geral do Direito Civil.',
    size: 'Médio',
    schedule: 'Mês 1 da Fase 3 (dez/2026) — semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A **LINDB** (Decreto-Lei 4.657/42, com alterações da Lei 13.655/18) é a "**lei sobre as leis**" — meta-norma que disciplina vigência, conflitos no tempo e no espaço, integração e interpretação. Aplica-se a TODOS os ramos do direito brasileiro, não só ao Civil. É preâmbulo essencial para qualquer concurso jurídico.' },
          { type: 'p', text: 'A **Lei 13.655/18** acrescentou os arts. 20 a 30 — o **consequencialismo jurídico**: motivação obrigatória das decisões, valores fáticos, segurança jurídica na aplicação do direito público. Considerada a "reforma do direito administrativo brasileiro" sem mudar o direito material — só o modo de decidir.' },
          { type: 'p', text: 'Três eixos para concurso: (a) **vigência e conflito no tempo** (arts. 1º-2º + 6º — irretroatividade, vacatio legis, ato jurídico perfeito, direito adquirido, coisa julgada); (b) **integração** (art. 4º — analogia, costumes, princípios); (c) **consequencialismo** (arts. 20-30 — motivação, valores, segurança jurídica).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Vigência e revogação (arts. 1º-2º)' },
          { type: 'list', items: [
            '**Art. 1º** — vacatio legis de 45 dias no Brasil + 3 meses no estrangeiro, salvo disposição em contrário',
            '**Art. 1º § 1º** — leis que estabeleçam período de adaptação obedecem o prazo nelas fixado (vacatio especial)',
            '**Art. 1º § 3º** — se lei for republicada antes da entrada em vigor, vacatio recomeça',
            '**Art. 2º** — não havendo disposição em contrário, lei vigora até ser modificada/revogada',
            '**Art. 2º § 1º** — revogação: expressa, tácita (incompatível), por norma superior, por específica geral (lex specialis)',
            '**Art. 2º § 2º** — lei nova GERAL não revoga lei especial anterior, salvo disposição expressa',
            '**Art. 2º § 3º** — repristinação: revogação da lei revogadora NÃO restaura lei revogada, salvo disposição expressa'
          ] },
          { type: 'h', text: 'Conflito de leis no tempo (art. 6º)' },
          { type: 'list', items: [
            '**Caput** — lei em vigor terá efeito IMEDIATO e GERAL, respeitados ato jurídico perfeito, direito adquirido e coisa julgada',
            '**§ 1º** — ato jurídico perfeito = já consumado segundo lei vigente',
            '**§ 2º** — direito adquirido = aquele que o titular pode exercer; também os subordinados a termo prefixado ou condição preestabelecida e inalterável',
            '**§ 3º** — coisa julgada = decisão judicial não mais sujeita a recurso'
          ] },
          { type: 'h', text: 'Integração e interpretação (arts. 4º-5º)' },
          { type: 'list', items: [
            '**Art. 4º** — quando a lei for omissa, juiz decidirá conforme: ANALOGIA, COSTUMES, PRINCÍPIOS GERAIS DO DIREITO',
            '**Art. 5º** — na aplicação da lei, o juiz atenderá aos FINS SOCIAIS e às EXIGÊNCIAS DO BEM COMUM'
          ] },
          { type: 'h', text: 'Conflito de leis no espaço (arts. 7º-19)' },
          { type: 'list', items: [
            '**Art. 7º** — lei do país do domicílio rege começo e fim da personalidade, nome, capacidade, direitos de família',
            '**Art. 8º** — bens regem-se pela lei do país onde estiverem situados (lex rei sitae)',
            '**Art. 9º** — obrigações regem-se pela lei do país em que se constituírem (locus regit actum)',
            '**Art. 10** — sucessão por morte ou ausência: lei do domicílio do falecido (regra), com proteção do art. 5º XXXI CF (mais favorável a brasileiro)'
          ] },
          { type: 'h', text: 'Consequencialismo (arts. 20-30 — Lei 13.655/18)' },
          { type: 'list', items: [
            '**Art. 20** — em decisões da esfera administrativa, controladora e judicial, o juiz não decidirá com base em VALORES JURÍDICOS ABSTRATOS sem considerar consequências práticas',
            '**Art. 21** — decisão que invalide ato/contrato/processo administrativo deve indicar consequências e regime de transição',
            '**Art. 22** — interpretação considerará obstáculos e dificuldades reais do gestor; agente público não responde por mera divergência de opinião',
            '**Art. 23** — nova interpretação de norma exige regime de transição (segurança jurídica)',
            '**Art. 28** — agente público responde pessoalmente por DOLO ou ERRO GROSSEIRO',
            '**Art. 30** — autoridades devem atuar para SEGURANÇA JURÍDICA — súmulas, regulamentos, respostas a consultas'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Antinomias e critérios de solução' },
          { type: 'p', text: 'Quando duas normas conflitam, três critérios em escala (Bobbio): (1) **hierárquico** — lei superior prevalece; (2) **cronológico** — lei posterior prevalece; (3) **especialidade** — lei específica prevalece. Antinomia REAL = não resolvível por critérios; exige aplicação de equidade ou reformulação legal.' },
          { type: 'box', kind: 'macete', text: '**Antinomias — HIE-CRO-ESPE (Hierárquico → Cronológico → Especialidade).** Em conflito entre critérios: hierárquico vence cronológico; cronológico geral cede à especialidade.' },
          { type: 'h', text: 'Repristinação (art. 2º § 3º)' },
          { type: 'p', text: '**REPRISTINAÇÃO NÃO É AUTOMÁTICA.** Se a lei A foi revogada pela lei B, e a lei B é depois revogada pela lei C, a lei A NÃO volta a vigorar — salvo se a lei C dispuser expressamente. Cuidado: confunde-se com efeito repristinatório (controle de constitucionalidade).' },
          { type: 'box', kind: 'atencao', text: '**Repristinação ≠ efeito repristinatório.** Repristinação (LINDB art. 2º §3º) NÃO é automática. Efeito repristinatório (controle constitucionalidade) reaparece norma anterior pela DECLARAÇÃO de inconstitucionalidade.' },
          { type: 'h', text: 'Vacatio legis especial' },
          { type: 'p', text: 'A regra dos 45 dias (art. 1º) é **supletiva**. Cada lei pode fixar sua própria vacatio. Códigos costumam ter vacatio longa (CC/02 = 1 ano; CPC/15 = 1 ano). Lei sem cláusula expressa de vigência → 45 dias.' },
          { type: 'h', text: 'Direito adquirido × expectativa de direito' },
          { type: 'p', text: '**Direito adquirido** = aquele cujo titular já pode exercer (ou está protegido por termo/condição inalterável). Imune à lei nova (CF 5º XXXVI). **Expectativa de direito** = situação não consolidada. Pode ser alterada por lei nova.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — RE 226.855:** servidor que ainda não cumpriu requisitos para aposentadoria tem mera EXPECTATIVA, não direito adquirido. Lei nova pode alterar regras.' },
          { type: 'h', text: 'Consequencialismo — art. 20 (decisões "abstratas" vedadas)' },
          { type: 'p', text: 'Magistrados, controladores e administradores **NÃO podem decidir com base em valores jurídicos ABSTRATOS** (boa-fé, função social, dignidade) **sem considerar consequências PRÁTICAS**. Não significa "consequencialismo puro" — exige motivação concreta com análise de impactos.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — ADI 6.421:** art. 20 LINDB compatível com a Constituição; reforça segurança jurídica e previsibilidade decisional, sem afastar princípios constitucionais.' },
          { type: 'h', text: 'Erro grosseiro × culpa simples (art. 28)' },
          { type: 'p', text: 'Agente público responde pessoalmente apenas por **DOLO** ou **ERRO GROSSEIRO** — afasta responsabilização por culpa simples ou divergência razoável de opinião. Visa proteger administrador honesto que se equivoca em situação complexa.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Vacatio: 45 + 3.** 45 dias no Brasil, 3 meses no exterior, salvo disposição em contrário (art. 1º).' },
          { type: 'box', kind: 'macete', text: '**Integração — A-C-P:** **A**nalogia · **C**ostumes · **P**rincípios (art. 4º).' },
          { type: 'box', kind: 'macete', text: '**Cláusula de imutabilidade — A-D-C:** **A**to jurídico perfeito · **D**ireito adquirido · **C**oisa julgada (CF 5º XXXVI + LINDB 6º).' },
          { type: 'box', kind: 'macete', text: '**Lei NOVA GERAL não revoga lei ESPECIAL (art. 2º §2º).** Lex specialis derogat generali — princípio da especialidade.' },
          { type: 'box', kind: 'macete', text: '**Consequencialismo — arts. 20 a 30 = Lei 13.655/18 (LINDB reformada).** Núcleo: motivação concreta + segurança jurídica.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Repristinação NÃO é automática** (art. 2º §3º). Banca arma: "revogada a lei revogadora, restaura-se a lei anterior" — falso, salvo disposição expressa.' },
          { type: 'box', kind: 'atencao', text: '**Lex specialis derogat generali** — lei nova GERAL não revoga ESPECIAL anterior (art. 2º §2º). A relação especial-geral mantém-se.' },
          { type: 'box', kind: 'atencao', text: '**Direito adquirido × expectativa** — só direito ADQUIRIDO está protegido (CF 5º XXXVI). Expectativa pode ser frustrada por lei nova.' },
          { type: 'box', kind: 'atencao', text: '**Art. 28 LINDB protege agente público de DIVERGÊNCIA de opinião** — mas não de dolo nem erro grosseiro. Banca pode armar: "agente responde por toda culpa" — falso após Lei 13.655/18.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 5 (fatos jurídicos):** prescrição e decadência — institutos com regras próprias, mas LINDB regula vigência da lei aplicável.' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 1 (lei processual):** princípios análogos de aplicação no tempo (tempus regit actum); CPC/15 art. 14 aplica imediatamente sem retroatividade.' },
          { type: 'box', kind: 'conexao', text: '**Direito Administrativo:** arts. 20-30 LINDB são pedra de toque do "novo direito administrativo brasileiro".' },
          { type: 'box', kind: 'conexao', text: '**Direito Constitucional:** CF art. 5º XXXVI (irretroatividade) é fundamento do art. 6º LINDB.' }
        ]
      }
    ]
  },
  {
    id: 'civ-02-pessoas-naturais',
    num: 2, materia: 'civil',
    title: 'Pessoas naturais',
    edital: '3.1.2',
    editalText: 'Personalidade. Capacidade. Direitos da personalidade. Domicílio. Ausência. Estatuto da Pessoa com Deficiência.',
    size: 'Médio',
    schedule: 'Mês 1 da Fase 3 (dez/2026) — semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Pessoa natural é o ser humano sujeito de direitos. **Personalidade** começa com o nascimento com vida (art. 2º), mas a lei resguarda os direitos do **nascituro** desde a concepção. **Capacidade** distingue-se em **de direito** (todos têm — art. 1º) e **de fato** (idade + discernimento — arts. 3º-4º).' },
          { type: 'p', text: 'A **Lei 13.146/15 (Estatuto da Pessoa com Deficiência)** revolucionou o tema: deficiência **NÃO afeta plena capacidade civil** (art. 6º EPD). A incapacidade hoje é restrita: **ABSOLUTA** apenas para menores de 16 anos (art. 3º); **RELATIVA** para os hipóteses do art. 4º (inclusive maiores que não puderem exprimir vontade). Tomada de decisão apoiada (art. 1.783-A) substituiu, para a maioria dos casos, a curatela.' },
          { type: 'p', text: 'Os **direitos da personalidade** (arts. 11-21) são **absolutos, indisponíveis, irrenunciáveis, intransmissíveis, imprescritíveis**. Vida, honra, imagem, nome, privacidade, integridade física e moral. Tutela cível autônoma — não exige dolo nem dano, basta a lesão ou ameaça.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Personalidade e capacidade (arts. 1º-5º)' },
          { type: 'list', items: [
            '**Art. 1º** — toda pessoa é capaz de direitos e deveres na ordem civil',
            '**Art. 2º** — personalidade começa com nascimento com vida; lei põe a salvo, desde a concepção, os direitos do NASCITURO',
            '**Art. 3º** — ABSOLUTAMENTE incapazes: menores de 16 anos (UNICO inciso, após Lei 13.146/15)',
            '**Art. 4º** — RELATIVAMENTE incapazes: I — maiores de 16 e menores de 18; II — ébrios habituais e viciados em tóxico; III — aqueles que, por causa transitória ou permanente, NÃO puderem exprimir sua vontade; IV — pródigos',
            '**Art. 5º** — cessação da menoridade: 18 anos OU (par. único) emancipação por: concessão dos pais, casamento, emprego público efetivo, colação de grau em ensino superior, estabelecimento civil/comercial, economia própria a partir dos 16 anos'
          ] },
          { type: 'h', text: 'Direitos da personalidade (arts. 11-21)' },
          { type: 'list', items: [
            '**Art. 11** — direitos da personalidade são INTRANSMISSÍVEIS e IRRENUNCIÁVEIS, salvo casos previstos em lei',
            '**Art. 12** — pode-se exigir cessação de ameaça/lesão a direito da personalidade + perdas e danos',
            '**Art. 12 par. único** — em caso de morte, legitimados: cônjuge, ascendentes, descendentes, colaterais até 4º grau (rol não taxativo na jurisprudência)',
            '**Art. 13** — disposição corpórea: vedada quando importar diminuição permanente da integridade física, salvo por exigência médica',
            '**Art. 16** — toda pessoa tem direito ao NOME (prenome + sobrenome)',
            '**Art. 17** — nome não pode ser empregado por outrem em publicações ou representações que exponham ao desprezo público',
            '**Art. 19** — pseudônimo amparado por nome',
            '**Art. 20** — divulgação de escritos, transmissão de palavra, publicação/exposição/utilização de imagem podem ser proibidas a requerimento, e havendo dano causarão indenização',
            '**Art. 21** — vida privada inviolável; juiz pode adotar medidas necessárias'
          ] },
          { type: 'h', text: 'Domicílio (arts. 70-78)' },
          { type: 'list', items: [
            '**Art. 70** — domicílio = lugar onde pessoa estabelece residência com ânimo definitivo',
            '**Art. 72** — domicílio profissional: para relações profissionais',
            '**Art. 73** — pessoa sem residência habitual: domicílio onde for encontrada',
            '**Art. 75** — domicílio das PJs: sede ou onde funcionarem suas diretorias e administrações',
            '**Art. 76** — domicílio NECESSÁRIO: incapazes (do representante), servidores públicos (lugar onde exercerem funções), militares (sede do comando), marítimos (porto onde matriculado), preso (lugar do cumprimento da pena)',
            '**Art. 78** — eleição de domicílio em contrato (foro de eleição) — limites em contrato de adesão'
          ] },
          { type: 'h', text: 'Ausência (arts. 22-39)' },
          { type: 'list', items: [
            '**Art. 22** — desaparecido sem notícias ou representante: juiz declara ausência e nomeia CURADOR (1ª fase)',
            '**Arts. 26-27** — após 1 ano da arrecadação dos bens (ou 3 anos se houve representante), abre-se SUCESSÃO PROVISÓRIA (2ª fase)',
            '**Art. 37** — após 10 anos do trânsito em julgado da sentença de abertura da sucessão provisória, ou 5 anos das últimas notícias se ausente tinha 80+ anos, abre-se SUCESSÃO DEFINITIVA (3ª fase)',
            '**Art. 39** — se o ausente regressar nos 10 anos após a definitiva, terá direito aos bens existentes no estado em que se acharem'
          ] },
          { type: 'h', text: 'Tomada de Decisão Apoiada (art. 1.783-A — Lei 13.146/15)' },
          { type: 'list', items: [
            'Procedimento JUDICIAL pelo qual a pessoa com deficiência elege APOIADORES de sua confiança',
            'Apoiadores prestam assistência sem retirar a capacidade civil',
            'Diferença com curatela: TDA é manifestação de AUTONOMIA da pessoa; curatela é proteção em face de impossibilidade de exprimir vontade'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Status do nascituro — teorias' },
          { type: 'p', text: 'Três teorias: (a) **NATALISTA** — só com nascimento com vida há personalidade (art. 2º caput); direitos do nascituro são meras expectativas. (b) **CONDICIONALISTA** — personalidade adquirida sob condição do nascimento com vida. (c) **CONCEPCIONISTA** — personalidade desde a concepção, mas com direitos que se completam com nascimento. STJ tem oscilado, mas tendência atual é **concepcionista** quanto a direitos da personalidade (REsp 1.415.727 — direito à imagem do nascituro).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.415.727:** indenização por danos morais ao nascituro por morte do pai antes do nascimento. Adoção da teoria concepcionista para direitos da personalidade.' },
          { type: 'h', text: 'Estatuto da Pessoa com Deficiência (Lei 13.146/15) — revisão estrutural' },
          { type: 'p', text: 'Antes do EPD: deficiência psíquica/intelectual era hipótese clássica de incapacidade absoluta. **Após EPD:** deficiência **NÃO afeta plena capacidade civil** (art. 6º EPD). A incapacidade absoluta restringiu-se aos menores de 16 anos. Pessoas com deficiência mental podem usar **TDA** (autonomia) ou, em casos extremos de impossibilidade de exprimir vontade, curatela (mas relativa — art. 1.772 CC).' },
          { type: 'box', kind: 'atencao', text: '**Pessoa com deficiência tem PLENA capacidade civil** (Lei 13.146 art. 6º). Erro frequente: assumir que continua absolutamente incapaz como antes do EPD.' },
          { type: 'h', text: 'Direitos da personalidade — características' },
          { type: 'p', text: 'São **absolutos** (oponíveis erga omnes), **indisponíveis** (não podem ser cedidos), **irrenunciáveis**, **intransmissíveis**, **imprescritíveis** (não se extinguem pelo não-exercício), **vitalícios** (acompanham a pessoa até a morte; depois, a tutela é pelos legitimados do art. 12 par. único).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 521.697 (Ricardo Henkin):** direitos da personalidade do morto podem ser tutelados pela família, em caráter de "lesão ricochete" — atinge memória do falecido e dignidade dos parentes.' },
          { type: 'h', text: 'Emancipação (art. 5º par. único)' },
          { type: 'p', text: 'Modos de emancipação: **voluntária** (concessão dos pais, irrevogável); **judicial** (tutor); **legal** (casamento, emprego público efetivo, colação de grau em superior, estabelecimento civil/comercial, economia própria 16+). A emancipação confere capacidade civil plena (mas não responsabilidade penal — penal é 18 anos sempre).' },
          { type: 'box', kind: 'atencao', text: '**Emancipação NÃO altera responsabilidade penal** — apenas civil. Erro: confundir capacidade civil com imputabilidade penal (que é 18 anos).' },
          { type: 'h', text: 'Domicílio aparente x necessário' },
          { type: 'p', text: '**Necessário (art. 76)** — fixado por lei: incapaz, servidor, militar, marítimo, preso. Não admite escolha. **Aparente** — caracterizado pela presença material e sinais de fixação. Se PF tem múltiplas residências, é considerada domiciliada em qualquer delas (art. 71).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Personalidade — INA-IRRENUNCIÁVEL-INTRANSMISSÍVEL-IMPRESCRITÍVEL.** Características essenciais.' },
          { type: 'box', kind: 'macete', text: '**Absolutos: < 16 anos.** Apenas (após EPD).' },
          { type: 'box', kind: 'macete', text: '**Relativos: 16-18, ébrio, viciado, NÃO podem exprimir vontade, pródigo (art. 4º).**' },
          { type: 'box', kind: 'macete', text: '**Ausência — 3 fases: Curadoria → Provisória (1 ou 3 anos) → Definitiva (10 anos).**' },
          { type: 'box', kind: 'macete', text: '**Emancipação legal: CCEEEE — Casamento · Emprego público · Estabelecimento · Estudo superior · Economia própria 16+.**' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Pessoa com deficiência intelectual NÃO é mais ABSOLUTAMENTE incapaz.** Pode ser relativa (art. 4º III — impossibilidade de exprimir vontade) ou tomada de decisão apoiada (art. 1.783-A). Mudança radical pelo EPD.' },
          { type: 'box', kind: 'atencao', text: '**Maior de 16 e menor de 18 é RELATIVO** — pratica atos com assistência. Diferente de "absolutamente incapaz".' },
          { type: 'box', kind: 'atencao', text: '**Personalidade da PJ é distinta dos direitos da personalidade pessoais.** PJ tem honra OBJETIVA (Súmula 227/STJ), mas não direito à intimidade ou à integridade física.' },
          { type: 'box', kind: 'atencao', text: '**Domicílio do incapaz é NECESSÁRIO — do representante** (art. 76). Mesmo que o incapaz resida em outro lugar, juridicamente segue o representante.' },
          { type: 'box', kind: 'atencao', text: '**Sucessão definitiva pode SUSPENDER se ausente retornar.** Mas após 10 anos, bens vão para os herdeiros sem mais retorno (art. 39).' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 16 (Família — alimentos, tutela, curatela):** EPD reformou curatela (art. 1.767 + 1.772) — restrita a "atos negociais e patrimoniais". Tomada de decisão apoiada é alternativa.' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 5 (MP no processo):** intervenção obrigatória em causas com incapazes (CPC art. 178 II).' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 11 (responsabilidade civil):** menor incapaz responde subsidiariamente (CC art. 928); pais respondem objetivamente pelos atos dos filhos (art. 932 I).' }
        ]
      }
    ]
  },
  {
    id: 'civ-03-pessoas-juridicas',
    num: 3, materia: 'civil',
    title: 'Pessoas jurídicas',
    edital: '3.1.3',
    editalText: 'Conceito. Espécies. Constituição, registro, extinção. Desconsideração da personalidade jurídica (CC art. 50).',
    size: 'Médio',
    schedule: 'Mês 1 da Fase 3 (dez/2026) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A pessoa jurídica é **entidade abstrata** com personalidade própria, distinta dos seus membros. **Princípio da autonomia patrimonial** (art. 49-A, incluído pela Lei 13.874/19): patrimônio da PJ não se confunde com o dos sócios. A separação é a "essência" da PJ — só excepcionalmente (desconsideração) se rompe.' },
          { type: 'p', text: 'O CC classifica as PJs em **direito público** (externas: Estados estrangeiros e organismos internacionais; internas: União, Estados, DF, Municípios, autarquias, fundações públicas) e **direito privado** (associações, sociedades, fundações, OSCs, EIRELI — esta extinta pela Lei 14.382/22, agora SLU). A constituição se completa com **registro** (art. 45) — antes do registro, há mera "sociedade de fato".' },
          { type: 'p', text: 'A **desconsideração da personalidade jurídica (art. 50)** é o mecanismo de exceção. O CC adota a **TEORIA MAIOR**: exige abuso da personalidade caracterizado por **DESVIO DE FINALIDADE** ou **CONFUSÃO PATRIMONIAL**. Diferente da TEORIA MENOR (CDC art. 28; ambiental Lei 9.605), que basta a insolvência. A Lei 13.874/19 detalhou os requisitos do art. 50.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Espécies, constituição e responsabilidade (arts. 40-52)' },
          { type: 'list', items: [
            '**Art. 40** — PJs de direito público interno ou externo, e de direito privado',
            '**Art. 41** — PJs de direito público interno: União, Estados, DF, Territórios, Municípios, autarquias, demais entidades de caráter público criadas por lei',
            '**Art. 44** — PJs de direito privado: associações, sociedades, fundações, organizações religiosas, partidos políticos, EIRELI (revogada Lei 14.382/22)',
            '**Art. 45** — começa a existência legal das PJs de direito privado com inscrição do ato constitutivo no registro próprio',
            '**Art. 49-A** (Lei 13.874/19) — PJ NÃO se confunde com seus sócios, associados, instituidores ou administradores. Patrimônio é AUTÔNOMO',
            '**Art. 49-A par. único** — autonomia patrimonial é instrumento lícito de alocação de risco e estímulo à atividade econômica'
          ] },
          { type: 'h', text: 'Desconsideração (art. 50 — Lei 13.874/19)' },
          { type: 'list', items: [
            '**Caput** — em caso de ABUSO DA PERSONALIDADE JURÍDICA, caracterizado por DESVIO DE FINALIDADE ou CONFUSÃO PATRIMONIAL, pode o juiz, a requerimento da parte ou do MP (quando intervir), desconsiderar para que os efeitos atinjam bens dos sócios/administradores',
            '**§ 1º** — DESVIO DE FINALIDADE = utilização da PJ com propósito de lesar credores ou praticar ato ilícito',
            '**§ 2º** — CONFUSÃO PATRIMONIAL: I — cumprimento repetitivo de obrigações da PJ pelo sócio (ou vice-versa); II — transferência de ativos sem efetivas contraprestações; III — outros atos de descumprimento da autonomia patrimonial',
            '**§ 3º** — desconsideração também pode atingir bens dos sócios/administradores em RECUPERAÇÃO JUDICIAL/falência',
            '**§ 4º** — desconsideração INVERSA: bens da PJ podem responder por dívidas pessoais dos sócios',
            '**§ 5º** — não constitui desvio de finalidade a mera expansão ou alteração da finalidade original (proteção)'
          ] },
          { type: 'h', text: 'Fundações (arts. 62-69)' },
          { type: 'list', items: [
            '**Art. 62** — fundações privadas só para fins RELIGIOSOS, MORAIS, CULTURAIS, ASSISTENCIAIS',
            'Constituição por escritura pública ou testamento, com indicação dos fins',
            '**Art. 66** — fundações são fiscalizadas pelo MP do estado onde situadas (atribuição clássica do MPMG)'
          ] },
          { type: 'h', text: 'Lei 14.382/22 — extinção da EIRELI' },
          { type: 'list', items: [
            'Lei 14.382/22 (Marco Legal das Garantias) extinguiu a EIRELI',
            'EIRELIs existentes foram automaticamente convertidas em **SLU (Sociedade Limitada Unipessoal)**',
            'SLU já existia desde Lei 13.874/19 — agora é única figura unipessoal limitada'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Teoria Maior × Teoria Menor da desconsideração' },
          { type: 'p', text: '**TEORIA MAIOR** (CC art. 50): exige **abuso da personalidade** — desvio de finalidade ou confusão patrimonial. Mera insolvência NÃO autoriza. Aplicável em direito empresarial e civil em geral.' },
          { type: 'p', text: '**TEORIA MENOR** (CDC art. 28; Lei 9.605/98 — ambiental): basta a **OBSTACULIZAÇÃO ao ressarcimento** ou a **insolvência da PJ**. Não exige abuso. Aplicável apenas onde lei específica adota (consumidor e ambiental são clássicos).' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.658.648:** Teoria Menor é aplicada apenas em casos legalmente previstos. Em direito civil/empresarial geral, a Teoria MAIOR (CC art. 50) é a regra.' },
          { type: 'box', kind: 'macete', text: '**Maior = abuso (CC 50). Menor = insolvência (CDC 28 + ambiental).** Maior exige mais para desconsiderar; Menor é mais permissiva.' },
          { type: 'h', text: 'Desconsideração inversa (art. 50 § 4º)' },
          { type: 'p', text: 'Possível desde a edição da Lei 13.874/19 (positivou jurisprudência STJ). **Bens da PJ respondem por dívidas pessoais dos sócios.** Hipótese clássica: sócio que esvazia patrimônio pessoal para a PJ (com confusão patrimonial reversa).' },
          { type: 'h', text: 'Procedimento: IDPJ (CPC arts. 133-137)' },
          { type: 'p', text: 'Desconsideração exige **incidente de desconsideração da personalidade jurídica (IDPJ)** no processo civil, com contraditório, instrução, decisão (recurso: agravo de instrumento — CPC art. 1.015 IV). Sem IDPJ, atingir patrimônio do sócio é nulo. Apenas em CDC e ambiental admite-se "desconsideração in radice" sem IDPJ pleno (controvertido).' },
          { type: 'box', kind: 'atencao', text: '**Sem IDPJ, desconsideração é NULA** (CPC arts. 133-137). Mero pedido em fase de execução, sem incidente, não basta.' },
          { type: 'h', text: 'Personalidade da PJ × dos seus integrantes' },
          { type: 'p', text: 'PJ tem **autonomia patrimonial** (art. 49-A) — patrimônio próprio. Sócios respondem nas dimensões da participação societária (LTDA: limitação ao capital social — Lei 6.404). Desconsideração rompe essa proteção, mas é EXCEPCIONAL.' },
          { type: 'h', text: 'Direitos da personalidade da PJ' },
          { type: 'p', text: 'PJ NÃO tem todos os direitos da personalidade da PF — apenas alguns: **honra OBJETIVA** (reputação — Súmula 227/STJ), nome/marca (art. 1.155+), imagem corporativa. NÃO tem direito à privacidade pessoal nem integridade física (são "imateriais por natureza").' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 227:** "A pessoa jurídica pode sofrer dano moral." Reconhecimento da honra objetiva.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Desconsideração — DD: Desvio de finalidade + cumprimento Duplicado de obrigações = abuso (Maior).**' },
          { type: 'box', kind: 'macete', text: '**Maior = CC 50 (abuso). Menor = CDC 28 / Lei 9.605 (insolvência).**' },
          { type: 'box', kind: 'macete', text: '**EIRELI EXTINTA** (Lei 14.382/22). Hoje só existe SLU (sociedade limitada unipessoal).' },
          { type: 'box', kind: 'macete', text: '**Fundação privada — 4 fins: religioso, moral, cultural, assistencial (art. 62).** MP fiscaliza.' },
          { type: 'box', kind: 'macete', text: '**Lei 13.874/19 — Liberdade Econômica.** Reformou desconsideração (art. 50) + autonomia patrimonial (49-A) + introduziu SLU.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**EIRELI NÃO EXISTE MAIS** (extinta pela Lei 14.382/22). Substituída pela SLU (Sociedade Limitada Unipessoal) automaticamente.' },
          { type: 'box', kind: 'atencao', text: '**Mera INSOLVÊNCIA não autoriza desconsideração (Teoria Maior — art. 50).** Banca arma: "PJ insolvente → sócios respondem". Falso, em direito civil geral. Em CDC sim (Teoria Menor).' },
          { type: 'box', kind: 'atencao', text: '**Desconsideração exige IDPJ** (CPC 133-137). Pedido direto na execução = nulo.' },
          { type: 'box', kind: 'atencao', text: '**Direitos da personalidade da PJ — limitados.** Tem honra OBJETIVA (S. 227/STJ), mas não privacidade ou integridade física.' },
          { type: 'box', kind: 'atencao', text: '**Mero crescimento ou alteração de objeto social NÃO é desvio de finalidade** (art. 50 §5º). Proteção positivada pela Lei 13.874/19.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico PC 4 (intervenção de terceiros):** IDPJ é incidente do art. 133-137 CPC.' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 5 (MP):** MP fiscaliza fundações (CC art. 66) — função clássica do Promotor de Justiça.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 12 (empresa):** sociedades empresárias seguem Lei 6.404 (S.A.) e CC arts. 1.052+ (LTDA). SLU é unipessoal limitada.' },
          { type: 'box', kind: 'conexao', text: '**Direito Administrativo:** PJs de direito público interno (União, autarquias) seguem regime distinto, com prerrogativas (impenhorabilidade, prescrição).' }
        ]
      }
    ]
  },
  {
    id: 'civ-04-bens',
    num: 4, materia: 'civil',
    title: 'Bens',
    edital: '3.1.4',
    editalText: 'Conceito de bens. Classificação. Bens públicos. Bem de família legal e voluntário (Lei 8.009/90).',
    size: 'Pequeno-Médio',
    schedule: 'Mês 1 da Fase 3 (dez/2026) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Bens são "tudo o que pode ser objeto de uma relação jurídica". O CC classifica os bens em **móveis/imóveis** (arts. 79-84), **fungíveis/infungíveis e consumíveis/inconsumíveis** (arts. 85-86), **divisíveis/indivisíveis** (arts. 87-88), **singulares/coletivos** (arts. 89-91), **principais/acessórios** (arts. 92-97), **PÚBLICOS** (arts. 98-103) e **bem de família** (arts. 1.711+ + Lei 8.009/90).' },
          { type: 'p', text: 'Para concurso de Promotor, dois núcleos pesam: (1) **Bens públicos** — classificação por destinação (uso comum, uso especial, dominicais), prerrogativas (inalienabilidade relativa, impenhorabilidade, imprescritibilidade); (2) **Bem de família** — distinção entre legal (Lei 8.009/90 — automático) e voluntário (CC 1.711+ — escritura registrada). Exceções à impenhorabilidade.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Classificação geral (arts. 79-91)' },
          { type: 'list', items: [
            '**Art. 79** — móveis: suscetíveis de movimento próprio ou remoção sem alteração da substância',
            '**Art. 80** — imóveis: solo + tudo que se incorpora natural/artificialmente. **Direitos reais** sobre imóveis também são imóveis (regra IMPORTANTE)',
            '**Art. 81** — bens MÓVEIS POR DETERMINAÇÃO LEGAL: energias com valor econômico, direitos reais sobre objetos móveis, ações de sociedades, etc.',
            '**Art. 82** — móveis por NATUREZA + por antecipação (frutos pendentes destinados ao corte)',
            '**Art. 85** — fungíveis: substituíveis por outros do mesmo gênero, qualidade, quantidade (dinheiro, grãos)',
            '**Art. 86** — consumíveis: cujo uso importa destruição imediata (alimentos)',
            '**Art. 91** — universalidade DE FATO: pluralidade de bens singulares com unidade econômica (rebanho, biblioteca)'
          ] },
          { type: 'h', text: 'Bens públicos (arts. 98-103)' },
          { type: 'list', items: [
            '**Art. 98** — bens públicos: pertencem às PJs de direito público interno; demais são particulares',
            '**Art. 99** — três espécies: (I) USO COMUM do povo: rios, mares, estradas, ruas, praças; (II) USO ESPECIAL: edifícios e terrenos destinados a serviço público; (III) DOMINICAIS: patrimônio das PJs públicas, como objeto de direito real ou pessoal',
            '**Art. 100** — bens de uso comum e uso especial são INALIENÁVEIS enquanto conservarem essa qualificação. Dominicais podem ser alienados, observados os requisitos legais',
            '**Art. 101** — desafetação possível por lei (uso especial → dominical, depois alienar)',
            '**Art. 102** — bens públicos NÃO ESTÃO sujeitos a USUCAPIÃO',
            '**Art. 103** — uso comum pode ser gratuito ou retribuído, conforme estabelecido em lei'
          ] },
          { type: 'h', text: 'Bem de família (CC arts. 1.711-1.722 + Lei 8.009/90)' },
          { type: 'list', items: [
            '**CC art. 1.711** — pode-se destinar parte do patrimônio para bem de família, máximo 1/3 do patrimônio líquido. Inscrito no registro imobiliário',
            '**CC art. 1.712** — bem de família abrange prédio residencial + valores mobiliários para conservação/sustento da família',
            '**CC art. 1.715** — bem de família é IMPENHORÁVEL e isento de execução por dívidas posteriores à instituição',
            '**Lei 8.009/90 art. 1º** — IMÓVEL RESIDENCIAL próprio do casal/entidade familiar é IMPENHORÁVEL automaticamente, não respondendo por dívida civil/comercial/fiscal/previdenciária do casal/famílias',
            '**Lei 8.009/90 art. 3º** — exceções (rol TAXATIVO): I (revogado); II — créditos de empregados domésticos; III — credor de financiamento do próprio imóvel; IV — pensão alimentícia (decisão judicial); V — IPTU/cotas condominiais do imóvel; VI — execução de hipoteca dada em garantia ao casal; VII — civil de fiança em locação (julgado constitucional pelo STF)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Bem de família LEGAL × VOLUNTÁRIO' },
          { type: 'table', headers: ['Critério', 'Legal (Lei 8.009)', 'Voluntário (CC 1.711)'],
            rows: [
              ['Constituição', 'AUTOMÁTICA — basta residência', 'Escritura pública + REGISTRO'],
              ['Limite valor', 'Sem limite no imóvel residencial', 'Até 1/3 do patrimônio líquido'],
              ['Exceções', 'Rol taxativo do art. 3º (Lei 8.009)', 'Tributos do imóvel + pensão alimentícia'],
              ['Atinge', 'Imóvel residencial + alguns móveis essenciais', 'Imóvel + valores mobiliários']
            ] },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 449:** "A vaga de garagem que possui matrícula própria no registro de imóveis NÃO constitui bem de família para efeito de penhora." Tem matrícula = é bem distinto, penhorável.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 486:** "É impenhorável o único imóvel residencial do devedor que esteja LOCADO a terceiros, desde que a renda obtida com a locação seja revertida para a subsistência da família ou para o pagamento de aluguel da residência onde a família reside."' },
          { type: 'h', text: 'Bens PÚBLICOS — 3 prerrogativas (clássicas)' },
          { type: 'p', text: '**INALIENABILIDADE** (relativa — desafetação permite venda); **IMPENHORABILIDADE** (absoluta — bens públicos não podem ser penhorados; pagamento por precatórios/RPVs); **IMPRESCRITIBILIDADE** (não admitem usucapião — art. 102 + Súmula 340/STF). Forma o "tripé" da proteção dos bens públicos.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STF — Súmula 340:** "Desde a vigência do Código Civil, os bens dominicais, como os demais bens públicos, NÃO PODEM ser adquiridos por usucapião." Aplicação ampla a todas as espécies de bens públicos.' },
          { type: 'h', text: 'Fiança locatícia — exceção controvertida' },
          { type: 'p', text: '**Lei 8.009/90 art. 3º VII** permite penhora do bem de família do FIADOR em LOCAÇÃO. STF reconheceu constitucionalidade (RE 612.360 — Tema 295). Crítica doutrinária: viola direito à moradia (CF art. 6º). Tema clássico de prova oral.' },
          { type: 'h', text: 'Bens dominicais e desafetação' },
          { type: 'p', text: 'Dominicais são "bens públicos sem destinação pública específica" — patrimônio disponível. Podem ser alienados (com requisitos: avaliação, autorização legislativa, licitação — Lei 14.133/21). **Uso comum/especial** exigem **desafetação** prévia (lei ou ato administrativo) para virarem dominicais e poderem ser alienados.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Bens públicos: 3 espécies (USO COMUM · USO ESPECIAL · DOMINICAIS) + 3 prerrogativas (INALIENÁVEL · IMPENHORÁVEL · IMPRESCRITÍVEL).**' },
          { type: 'box', kind: 'macete', text: '**Bem família LEGAL = AUTOMÁTICO (Lei 8.009/90). VOLUNTÁRIO = registro (CC 1.711).**' },
          { type: 'box', kind: 'macete', text: '**Lei 8.009 art. 3º — 7 EXCEÇÕES:** doméstico, financiamento, alimentos, IPTU/condomínio, hipoteca, fiança locatícia, etc.' },
          { type: 'box', kind: 'macete', text: '**Súmula 340/STF: bens públicos = SEM USUCAPIÃO.** Universal.' },
          { type: 'box', kind: 'macete', text: '**Móveis por DETERMINAÇÃO LEGAL: energia, direitos reais sobre móveis, ações** (art. 81).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Bem de família LEGAL é AUTOMÁTICO** — não precisa registro nem declaração. A residência do casal é protegida ipso facto (Lei 8.009 art. 1º).' },
          { type: 'box', kind: 'atencao', text: '**Imóvel residencial LOCADO PODE ser bem de família** se renda for usada para subsistência ou aluguel residencial (Súmula 486/STJ). Erro: assumir que locação afasta proteção.' },
          { type: 'box', kind: 'atencao', text: '**Vaga de garagem com matrícula PRÓPRIA = penhorável** (Súmula 449/STJ). Diferente da unidade autônoma como um todo.' },
          { type: 'box', kind: 'atencao', text: '**Fiança locatícia PENHORA bem de família do fiador** (Lei 8.009 art. 3º VII + STF Tema 295). Exceção amplamente cobrada.' },
          { type: 'box', kind: 'atencao', text: '**Bem público é IMPRESCRITÍVEL — NÃO admite usucapião** (Súmula 340/STF + CC 102). Banca arma: "dominicais sem afetação podem ser usucapidos" — falso.' },
          { type: 'box', kind: 'atencao', text: '**Direitos reais sobre IMÓVEIS são IMÓVEIS** (art. 80 II). Direitos reais sobre móveis são móveis. Pegadinha clássica.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 13 (direitos reais — posse e propriedade):** usucapião. Bem público nunca é usucapido (Súmula 340/STF).' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 15 (execução):** impenhorabilidade do bem de família é defesa do devedor; STJ tem jurisprudência ampla sobre exceções.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 16 (família — alimentos):** pensão alimentícia é exceção que permite penhora do bem de família (Lei 8.009 art. 3º IV).' }
        ]
      }
    ]
  },
  {
    id: 'civ-05-fatos-juridicos',
    num: 5, materia: 'civil',
    title: 'Fatos jurídicos, prescrição e decadência',
    edital: '3.1.5',
    editalText: 'Fato, ato e negócio jurídico. Defeitos do negócio jurídico. Validade, eficácia, nulidade e anulabilidade. Prescrição e decadência.',
    size: 'Grande',
    schedule: 'Mês 1 da Fase 3 (dez/2026) — semana 2-3',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Fato jurídico (lato sensu) é qualquer acontecimento que produza efeitos jurídicos. **Pontes de Miranda** estruturou a escala: **fato jurídico stricto sensu** (acontecimento da natureza — nascimento, morte) → **ato-fato jurídico** (conduta humana sem vontade dirigida — achar tesouro) → **ato jurídico stricto sensu** (vontade que produz efeitos predeterminados — protesto) → **negócio jurídico** (autonomia plena — contrato, testamento).' },
          { type: 'p', text: '**Plano da existência, validade e eficácia** (escada ponteana): existir = atender pressupostos mínimos; ser válido = atender requisitos legais (capacidade, forma, objeto lícito); ser eficaz = produzir efeitos. Há atos que existem mas são inválidos (anuláveis); há atos válidos mas ineficazes (sob condição suspensiva).' },
          { type: 'p', text: '**Prescrição × decadência** é divisor de águas. Prescrição extingue a PRETENSÃO (não o direito); decadência extingue o próprio DIREITO. CC unificou: prescrição com prazos do art. 205 (geral, 10 anos) e 206 (especiais); decadência convencional ou legal (arts. 207-211). Aplicação prática: prescrição admite suspensão/interrupção/renúncia; decadência legal não.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Negócio jurídico (arts. 104-184)' },
          { type: 'list', items: [
            '**Art. 104** — requisitos de VALIDADE: I — agente capaz; II — objeto lícito, possível, determinado/determinável; III — forma prescrita ou não defesa em lei',
            '**Art. 107** — forma livre, salvo quando lei exigir forma especial (negócios solenes)',
            '**Art. 108** — escritura pública é da SUBSTÂNCIA do ato em negócios sobre IMÓVEIS de valor superior a 30 SM',
            '**Art. 113** — interpretação: boa-fé objetiva e usos do lugar',
            '**Art. 114** — negócios benéficos e renúncia interpretam-se restritivamente',
            '**Art. 121** — condição: cláusula que subordina efeito do negócio a evento FUTURO e INCERTO',
            '**Art. 131** — termo: evento FUTURO E CERTO. Diferença com condição (futuro INCERTO)'
          ] },
          { type: 'h', text: 'Defeitos do negócio jurídico (arts. 138-165)' },
          { type: 'list', items: [
            '**Erro substancial (art. 138)** — engano sobre elemento essencial do negócio. Anulabilidade. Prazo: 4 anos da celebração (art. 178 II)',
            '**Dolo (art. 145)** — engano provocado pela parte ou terceiro. Anulabilidade. Prazo: 4 anos',
            '**Coação (art. 151)** — ameaça que vicia a vontade. Anulabilidade. Prazo: 4 anos da cessação',
            '**Estado de perigo (art. 156)** — assumir obrigação excessivamente onerosa em situação de necessidade extrema (parente em risco)',
            '**Lesão (art. 157)** — desproporção entre prestações por inexperiência ou premente necessidade. Anulabilidade — pode ser COMPLEMENTADA pelo lesado para conservar o negócio (§2º)',
            '**Fraude contra credores (arts. 158-165)** — alienação que reduz devedor à insolvência. AÇÃO PAULIANA. Anulabilidade — prazo 4 anos',
            '**Simulação (art. 167)** — declaração não corresponde à vontade real. NULIDADE ABSOLUTA. Não convalida; pode ser arguida a qualquer tempo'
          ] },
          { type: 'h', text: 'Nulidade × anulabilidade' },
          { type: 'list', items: [
            '**Nulidade ABSOLUTA (art. 166)** — vício gravíssimo: agente absolutamente incapaz, objeto ilícito/impossível, ausência de forma essencial, simulação, etc. **Pode ser arguida por QUALQUER interessado e pelo MP. Não convalida pelo tempo. Imprescritível.**',
            '**Anulabilidade (art. 171)** — vício menos grave: agente relativamente incapaz, defeitos do negócio jurídico (erro, dolo, coação, lesão, estado de perigo, fraude). **Só pelos interessados. Convalida pelo decurso do prazo (4 anos — art. 178). Prescritível decadencial.**'
          ] },
          { type: 'h', text: 'Prescrição (arts. 189-206)' },
          { type: 'list', items: [
            '**Art. 189** — violado o direito, nasce para o titular a PRETENSÃO, que se extingue pela PRESCRIÇÃO',
            '**Art. 190** — prescrição da pretensão extingue a possibilidade de ação',
            '**Art. 191** — renúncia da prescrição: tácita ou expressa, após consumada e sem prejudicar terceiros',
            '**Art. 197-201** — causas SUSPENSIVAS (entre cônjuges, ascendentes-descendentes, contra incapazes do art. 3º — apenas absolutamente incapaz)',
            '**Arts. 202-204** — causas INTERRUPTIVAS — UMA SÓ VEZ pelo mesmo fato (art. 202 caput)',
            '**Art. 205** — prazo geral: 10 ANOS, se não houver previsão específica',
            '**Art. 206** — prazos especiais: §3º V — pretensão de reparação civil = 3 ANOS; §5º I — exigir cumprimento de obrigação líquida em instrumento público/particular = 5 ANOS'
          ] },
          { type: 'h', text: 'Decadência (arts. 207-211)' },
          { type: 'list', items: [
            '**Art. 207** — salvo disposição em contrário, NÃO se aplicam à decadência as normas que impedem, suspendem ou interrompem a prescrição',
            '**Art. 208** — aplica-se à decadência o art. 195 (proteção dos absolutamente incapazes)',
            '**Art. 209** — é nula a renúncia à decadência LEGAL',
            '**Art. 210** — DECADÊNCIA LEGAL conhecível DE OFÍCIO',
            '**Art. 211** — DECADÊNCIA CONVENCIONAL — só pode ser arguida pela parte beneficiada'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Prescrição × decadência — diferenças essenciais' },
          { type: 'table', headers: ['Critério', 'Prescrição', 'Decadência'],
            rows: [
              ['O que extingue', 'A PRETENSÃO (não o direito)', 'O próprio DIREITO'],
              ['Suspensão/interrupção', 'Sim (arts. 197-204)', 'NÃO (regra — art. 207). Exceção: art. 195 (incapazes)'],
              ['Renúncia', 'Possível, após consumada (art. 191)', 'Convencional sim; LEGAL não (art. 209)'],
              ['Conhecimento de ofício', 'Sim (CPC art. 487 II)', 'Decadência LEGAL: SIM (art. 210). Convencional: NÃO (art. 211)'],
              ['Aplicação', 'Direitos a prestação', 'Direitos potestativos (formação/desconstituição)']
            ] },
          { type: 'box', kind: 'macete', text: '**Prescrição = PRETENSÃO. Decadência = DIREITO.** Prescrição admite suspensão/interrupção; decadência (legal) não.' },
          { type: 'h', text: 'Simulação — única causa de NULIDADE entre os defeitos' },
          { type: 'p', text: 'Todos os defeitos do negócio jurídico geram **anulabilidade** (arts. 138, 145, 151, 156, 157, 158) — EXCETO **simulação** (art. 167), que gera **nulidade absoluta**. Por isso pode ser arguida a qualquer tempo, por qualquer interessado ou MP. Doutrina explica: simulação atinge a estrutura mesma do negócio (não há vontade real correspondente).' },
          { type: 'box', kind: 'atencao', text: '**Simulação = NULIDADE absoluta** (não anulabilidade). Erro frequente: confundir com os outros defeitos.' },
          { type: 'h', text: 'Prazos prescricionais mais cobrados' },
          { type: 'list', items: [
            '**10 anos** (art. 205) — geral, residual',
            '**5 anos** (206 §5º I) — cobrança de obrigação líquida em instrumento público/particular',
            '**5 anos** (206 §5º II) — pretensão de honorários de profissionais liberais',
            '**3 anos** (206 §3º V) — REPARAÇÃO CIVIL (responsabilidade civil)',
            '**3 anos** (206 §3º IV) — pretensão de ressarcimento por enriquecimento sem causa',
            '**2 anos** (206 §2º) — alimentos em decorrência de sentença',
            '**1 ano** (206 §1º) — pretensão de hospedeiros, contra mantenedores de pensões'
          ] },
          { type: 'h', text: 'Decadência convencional × legal' },
          { type: 'p', text: '**LEGAL** — fixada por lei. Conhecível DE OFÍCIO (art. 210). Renúncia é nula (art. 209). Ex: prazo para anular casamento (4 anos — art. 1.560), prazo para reclamar vícios redibitórios (30 dias se evidente, 1 ano se oculto — art. 445).' },
          { type: 'p', text: '**CONVENCIONAL** — fixada pelas partes. NÃO é conhecível de ofício (art. 211). Pode ser renunciada. Beneficiária deve invocar.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 405:** "A ação de cobrança do seguro obrigatório DPVAT prescreve em 3 anos." Aplicação do art. 206 §3º IX (seguro). Tema cobrado.' },
          { type: 'h', text: 'Causas que SUSPENDEM × INTERROMPEM' },
          { type: 'p', text: '**Suspensão (arts. 197-201)** — paralisa o curso, depois retoma de onde parou. Causas: entre cônjuges, ascendentes/descendentes, contra absolutamente incapazes, etc. **Interrupção (arts. 202-204)** — zera o prazo, recomeça do zero. Causas: citação válida (Súmula 106/STJ), protesto (judicial ou extrajudicial), reconhecimento do devedor, etc. **UMA SÓ VEZ** pelo mesmo fato (art. 202 caput).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Defeitos: 6** — Erro · Dolo · Coação · Estado de perigo · Lesão · Fraude. Todos = anulabilidade. **Simulação = NULIDADE.**' },
          { type: 'box', kind: 'macete', text: '**Prescrição × Decadência = PRETENSÃO × DIREITO.** A pretensão "se extingue" (prescrição); o direito "decai" (decadência).' },
          { type: 'box', kind: 'macete', text: '**Reparação civil = 3 anos (art. 206 §3º V).** Tema vinculante na prática.' },
          { type: 'box', kind: 'macete', text: '**Decadência LEGAL = ofício + irrenunciável. CONVENCIONAL = parte + renunciável.**' },
          { type: 'box', kind: 'macete', text: '**Plano ponteano: existir → válido → eficaz.** Existência mínimo, validade requisitos legais, eficácia produção de efeitos.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Simulação = NULIDADE (art. 167).** Os outros 6 defeitos = anulabilidade. Erro recorrente.' },
          { type: 'box', kind: 'atencao', text: '**Lesão admite COMPLEMENTAÇÃO (art. 157 §2º) — diferente dos outros defeitos.** Lesado pode optar por manter o negócio ajustando preço.' },
          { type: 'box', kind: 'atencao', text: '**Decadência LEGAL é conhecível DE OFÍCIO** (art. 210). CONVENCIONAL não. Banca confunde.' },
          { type: 'box', kind: 'atencao', text: '**Renúncia à decadência LEGAL é NULA** (art. 209). À convencional é válida.' },
          { type: 'box', kind: 'atencao', text: '**Prescrição interrompida UMA ÚNICA VEZ** pelo mesmo fato (art. 202 caput). Pegadinha: dizer que pode ser interrompida várias vezes.' },
          { type: 'box', kind: 'atencao', text: '**Suspensão da prescrição contra absolutamente incapaz — só MENOR DE 16 ANOS** (art. 198 c/c art. 3º após EPD). Pessoa com deficiência intelectual NÃO é absolutamente incapaz e prescrição corre normalmente contra ela (salvo TDA/curatela).' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 11 (responsabilidade civil):** prazo prescricional de 3 anos (art. 206 §3º V).' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 1 (LINDB):** integração e antinomias relacionam-se com vigência das normas — base para análise de prescrição/decadência por leis sucessivas.' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 11 (procedimento comum):** improcedência liminar do pedido por prescrição/decadência (CPC art. 332 §1º). Juiz reconhece de ofício as legais.' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 16 (recursos):** pode-se discutir prescrição em qualquer fase recursal (CPC art. 487 par. único).' }
        ]
      }
    ]
  },
  {
    id: 'civ-06-obrigacoes-geral',
    num: 6, materia: 'civil',
    title: 'Obrigações — parte geral',
    edital: '3.1.6',
    editalText: 'Conceito. Modalidades. Efeitos. Transmissão. Adimplemento. Extinção sem pagamento.',
    size: 'Grande',
    schedule: 'Mês 2 da Fase 3 (jan/2027) — semana 1',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: '**Obrigação** = relação jurídica pela qual uma parte (devedor) deve prestação econômica à outra (credor). Estrutura: **sujeitos** (credor + devedor) + **vínculo** (relação jurídica) + **prestação** (objeto). É elo de conexão entre direito patrimonial e o trabalho da pessoa para sua satisfação econômica.' },
          { type: 'p', text: 'Quanto ao OBJETO: obrigações de **dar** (entrega de coisa), **fazer** (prestação de serviço/atividade), **não fazer** (abstenção). Quanto à PLURALIDADE: **divisíveis** × **indivisíveis** (natureza ou disposição), **solidárias** (cada um dos múltiplos sujeitos por toda a dívida — só por lei ou contrato, art. 265). Quanto ao MODO: **alternativas** (escolha entre prestações, art. 252), **facultativas** (uma prestação principal + faculdade de substituir).' },
          { type: 'p', text: 'A obrigação **se extingue** principalmente pelo PAGAMENTO (forma normal). Há também extinções sem pagamento: **compensação** (créditos recíprocos), **confusão** (mesma pessoa credor e devedor), **remissão** (perdão), **novação** (substitui a obrigação por nova). Há ainda: pagamento em consignação, sub-rogação, dação em pagamento, imputação do pagamento.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Modalidades de obrigações (arts. 233-285)' },
          { type: 'list', items: [
            '**Art. 233-242** — obrigação de DAR coisa CERTA: até a tradição, riscos do credor; salvo culpa do devedor',
            '**Art. 243-246** — obrigação de DAR coisa INCERTA: gênero e quantidade; concentração do crédito',
            '**Arts. 247-249** — obrigação de FAZER: pessoal (intuitu personae) ou impessoal; recusa = perdas e danos OU prestação por terceiro à custa do devedor',
            '**Arts. 250-251** — obrigação de NÃO FAZER: extingue-se quando se torna impossível sem culpa; descumprimento = desfazimento à custa do devedor + perdas e danos',
            '**Arts. 252-256** — alternativas: 2+ prestações; escolha cabe ao devedor (regra), salvo disposição em contrário',
            '**Arts. 257-263** — divisíveis × indivisíveis: indivisibilidade pode ser por NATUREZA, lei ou disposição',
            '**Arts. 264-285** — SOLIDÁRIAS: presunção iuris tantum NÃO se presume; resulta da lei ou da vontade (art. 265)',
            '**Art. 266** — solidariedade ATIVA: cada credor pode exigir TUDO; **PASSIVA**: cada devedor responde por TUDO'
          ] },
          { type: 'h', text: 'Transmissão (arts. 286-303)' },
          { type: 'list', items: [
            '**Cessão de crédito (286-298)** — credor transfere a outrem o seu crédito; admitida salvo se pessoal, vedada por lei ou contrato; eficácia perante devedor depende de notificação (art. 290)',
            '**Assunção de dívida (299-303)** — terceiro assume a posição do devedor; depende de CONSENTIMENTO EXPRESSO do credor (art. 299)',
            '**Cessão de contrato** — não regulada expressamente no CC, mas é construção doutrinária ampla'
          ] },
          { type: 'h', text: 'Adimplemento (arts. 304-388)' },
          { type: 'list', items: [
            '**Pagamento (304+)** — extinção normal: quem paga, a quem, como, quando, onde',
            '**Art. 305** — terceiro INTERESSADO pode pagar (e sub-roga-se nos direitos); terceiro NÃO INTERESSADO pode pagar com oposição do devedor',
            '**Pagamento em consignação (334-345)** — credor sem domicílio certo, recusa, etc. Eficácia retroativa à data da consignação',
            '**Sub-rogação (346-351)** — substituição na titularidade do crédito, com transferência de todos os direitos acessórios',
            '**Imputação (352-355)** — devedor pode escolher qual dívida quitar (regra), conforme certas regras',
            '**Dação em pagamento (356-359)** — credor consente em receber prestação diversa da originária'
          ] },
          { type: 'h', text: 'Extinção sem pagamento (arts. 368-388)' },
          { type: 'list', items: [
            '**Compensação (368-380)** — duas pessoas reciprocamente devedoras e credoras → extinguem-se até onde se compensarem. Requisitos: dívidas LÍQUIDAS, VENCIDAS, FUNGÍVEIS',
            '**Confusão (381-384)** — quando na mesma pessoa coincidem credor e devedor (sucessão hereditária)',
            '**Remissão (385-388)** — perdão da dívida pelo credor; total ou parcial. Pessoal (não atinge co-devedores), salvo se de natureza solidária',
            '**Novação (360-367)** — extingue obrigação anterior pela criação de nova, com ânimo de novar (animus novandi). Modalidades: objetiva (novo objeto), subjetiva ativa (novo credor) ou passiva (novo devedor)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Solidariedade NÃO se presume (art. 265)' },
          { type: 'p', text: 'Regra fundamental: a solidariedade **NUNCA** se presume — resulta apenas da LEI ou da VONTADE expressa das partes. Em caso de dúvida sobre se há solidariedade entre múltiplos devedores/credores, presume-se conjunção (cada um responde por sua parte, dividida proporcionalmente).' },
          { type: 'box', kind: 'macete', text: '**Solidariedade NÃO se presume — só por LEI ou VONTADE expressa (art. 265).** Frase-chave do tema.' },
          { type: 'h', text: 'Solidariedade passiva — efeitos' },
          { type: 'p', text: 'Cada devedor solidário responde pelo TODO. Pagamento de qualquer um exonera os demais. Subrogação interna: o que pagou cobra dos demais a quota-parte (art. 283). **Renúncia da solidariedade** pelo credor a um devedor não atinge os demais — solidariedade subsiste contra os outros pelo restante (art. 282).' },
          { type: 'h', text: 'Cessão de crédito × assunção de dívida' },
          { type: 'table', headers: ['Critério', 'Cessão de crédito', 'Assunção de dívida'],
            rows: [
              ['O que se transfere', 'Posição do CREDOR', 'Posição do DEVEDOR'],
              ['Consentimento do devedor', 'NÃO necessário (basta notificação)', '— ─'],
              ['Consentimento do credor', '— ─', 'NECESSÁRIO (expresso — art. 299)'],
              ['Razão', 'Devedor é indiferente a quem paga', 'Credor pode preferir o devedor original (solvência)']
            ] },
          { type: 'h', text: 'Compensação — requisitos cumulativos' },
          { type: 'p', text: 'Para compensação operar (extinção automática): (a) dívidas RECÍPROCAS; (b) LÍQUIDAS (valor determinado); (c) VENCIDAS; (d) FUNGÍVEIS (mesmo gênero). Faltando UM = não há compensação. Banca cobra a literalidade.' },
          { type: 'box', kind: 'macete', text: '**Compensação: RLVF — Recíprocas, Líquidas, Vencidas, Fungíveis (art. 369).**' },
          { type: 'h', text: 'Novação × dação em pagamento × pagamento em consignação' },
          { type: 'p', text: '**Novação** = extingue obrigação ANTERIOR criando NOVA com animus novandi. **Dação em pagamento** = credor recebe coisa diversa, mas a obrigação se extingue (não nasce nova). **Consignação** = depósito judicial/extrajudicial diante de recusa do credor — extinção retroativa da obrigação à data do depósito.' },
          { type: 'h', text: 'Adimplemento substancial (criação jurisprudencial)' },
          { type: 'p', text: 'Quando o devedor cumpriu a maior parte da prestação (substancialmente), o credor NÃO pode resolver o contrato — apenas exigir o saldo. Doutrina italiana adotada pelo STJ (REsp 1.581.505 — alienação fiduciária), com nuances. Tema cobrado em provas modernas.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Tese consolidada (REsp 1.622.555):** adimplemento substancial NÃO se aplica a contratos de alienação fiduciária regidos pelo Decreto-Lei 911/69 (mudança de orientação após 2017).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Solidariedade — só LEI ou VONTADE.** Não se presume (art. 265).' },
          { type: 'box', kind: 'macete', text: '**Compensação RLVF: Recíproca · Líquida · Vencida · Fungível (art. 369).**' },
          { type: 'box', kind: 'macete', text: '**Cessão CRÉDITO = sem precisar do devedor; Assunção DÍVIDA = precisa do credor.**' },
          { type: 'box', kind: 'macete', text: '**4 extinções sem pagamento: CCRN — Compensação · Confusão · Remissão · Novação.**' },
          { type: 'box', kind: 'macete', text: '**Sub-rogação: terceiro INTERESSADO paga, herda direitos.** Não-interessado: sem sub-rogação automática.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Solidariedade NÃO SE PRESUME** (art. 265). Em dúvida = conjuntiva (cada um por sua quota).' },
          { type: 'box', kind: 'atencao', text: '**Cessão de crédito não precisa do devedor; basta notificá-lo** (art. 290). Erro: confundir com assunção de dívida.' },
          { type: 'box', kind: 'atencao', text: '**Adimplemento substancial NÃO se aplica em alienação fiduciária** (DL 911/69), conforme STJ (REsp 1.622.555).' },
          { type: 'box', kind: 'atencao', text: '**Compensação automática NÃO opera com dívida ilíquida** — é requisito cumulativo do art. 369.' },
          { type: 'box', kind: 'atencao', text: '**Renúncia à solidariedade quanto a UM devedor não dispensa os demais** (art. 282). Banca arma armadilhas com isso.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 7 (inadimplemento):** descumprimento gera mora ou inadimplemento absoluto + perdas e danos. Adimplemento substancial é defesa.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 8 (contratos):** adimplemento substancial relaciona-se à exceção do contrato não cumprido (art. 476).' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 12 (cumprimento):** prestações pecuniárias seguem rito próprio (CPC art. 523+).' }
        ]
      }
    ]
  },
  {
    id: 'civ-07-obrigacoes-inadimplemento',
    num: 7, materia: 'civil',
    title: 'Inadimplemento, mora e perdas e danos',
    edital: '3.1.7',
    editalText: 'Inadimplemento absoluto e relativo. Mora. Perdas e danos. Juros, cláusula penal, arras.',
    size: 'Médio',
    schedule: 'Mês 2 da Fase 3 (jan/2027) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Quando a obrigação não é cumprida, há **inadimplemento**. Pode ser **absoluto** (impossibilidade definitiva — perde sentido a prestação) ou **relativo** (a chamada **MORA** — atraso que não impossibilita o cumprimento ainda útil ao credor).' },
          { type: 'p', text: '**Mora do devedor** (mora solvendi): regra geral é mora EX RE — automática (caput do art. 397) quando há termo certo. Sem termo, mora EX PERSONA — exige interpelação (judicial ou extrajudicial). **Mora do credor** (mora accipiendi): art. 396 — recusa em receber. Efeito: devedor consigna; credor responde por perdas e danos.' },
          { type: 'p', text: 'A consequência do inadimplemento (absoluto ou mora) é o pagamento de **PERDAS E DANOS** (arts. 402-405): danos emergentes (o que efetivamente perdeu) + lucros cessantes (o que razoavelmente deixou de ganhar). Juros + cláusula penal + arras são institutos que **fortalecem a obrigação** ou **liquidam previamente** os danos.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Inadimplemento e mora (arts. 389-401)' },
          { type: 'list', items: [
            '**Art. 389** — não cumprida obrigação: devedor responde por PERDAS E DANOS, MAIS juros + atualização monetária + honorários',
            '**Art. 393** — devedor não responde por CASO FORTUITO ou FORÇA MAIOR, salvo se expressamente assumiu o risco',
            '**Art. 394** — em mora o devedor que não efetuar pagamento; o credor que não quiser recebê-lo no tempo, lugar e forma',
            '**Art. 397** — inadimplemento da obrigação POSITIVA E LÍQUIDA, no termo, constitui de pleno direito em mora o devedor (mora **EX RE**)',
            '**Art. 397 par. único** — não havendo termo, a mora se constitui mediante interpelação (mora **EX PERSONA**)',
            '**Art. 398** — obrigações ILÍCITAS (responsabilidade extracontratual) → mora desde o ato ilícito',
            '**Arts. 399-401** — devedor em mora responde até por caso fortuito; mora pode ser purgada (purgação) com pagamento + danos'
          ] },
          { type: 'h', text: 'Perdas e danos (arts. 402-405)' },
          { type: 'list', items: [
            '**Art. 402** — perdas e danos compreendem: (a) o que o credor EFETIVAMENTE PERDEU (DANO EMERGENTE) + (b) o que RAZOAVELMENTE deixou de lucrar (LUCROS CESSANTES)',
            '**Art. 403** — danos diretos e imediatos; danos remotos NÃO',
            '**Art. 404** — perdas e danos em obrigações pecuniárias = juros + correção monetária + honorários, salvo cláusula penal',
            '**Art. 405** — juros de mora correm desde a CITAÇÃO inicial em obrigações ilíquidas (sem termo certo)'
          ] },
          { type: 'h', text: 'Juros (arts. 406-407)' },
          { type: 'list', items: [
            '**Art. 406** — juros NÃO convencionados (legais): taxa em vigor para mora dos impostos federais (SELIC). STJ tem aplicação variada — tendência recente: art. 406 = SELIC',
            '**Distinção:** juros COMPENSATÓRIOS (remuneração do capital, prévio convencional) × juros MORATÓRIOS (sanção pelo atraso)',
            'Juros convencionais: Lei de Usura (Decreto 22.626/33) limita a 12% a.a., salvo instituições financeiras (Súmula 596/STF)'
          ] },
          { type: 'h', text: 'Cláusula penal (arts. 408-416)' },
          { type: 'list', items: [
            '**Art. 408** — cláusula penal: pena convencional, prefixação dos danos',
            '**Art. 409** — pode ser estipulada para o caso de TOTAL inadimplemento (compensatória) ou simples MORA (moratória)',
            '**Art. 410** — cláusula penal COMPENSATÓRIA: alternativa a benefício do credor (escolhe entre executar a obrigação ou cobrar a multa)',
            '**Art. 411** — cláusula penal MORATÓRIA: cumulativa ao desempenho da obrigação',
            '**Art. 412** — cláusula penal NÃO pode exceder o valor da OBRIGAÇÃO PRINCIPAL',
            '**Art. 413** — penalidade deve ser REDUZIDA EQUITATIVAMENTE pelo juiz se: (a) obrigação cumprida em parte; (b) montante manifestamente excessivo'
          ] },
          { type: 'h', text: 'Arras (arts. 417-420)' },
          { type: 'list', items: [
            '**Arras CONFIRMATÓRIAS (art. 417)** — sinal dado em garantia da firmeza do contrato; em caso de descumprimento, arras servem como mínimo de perdas e danos',
            '**Art. 418** — descumprimento por quem deu as arras: outro pode reter o sinal. Descumprimento por quem recebeu: deve restituir + igual valor (em dobro)',
            '**Arras PENITENCIAIS (art. 420)** — concedem direito de arrependimento; quem deu pode arrepender-se perdendo as arras; quem recebeu pode arrepender-se devolvendo em dobro. NÃO há direito a perdas e danos suplementares'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Mora EX RE × EX PERSONA' },
          { type: 'p', text: '**EX RE** — automática, "decorre da coisa". Aplicável a obrigações com termo certo (art. 397 caput). "Dies interpellat pro homine" — o dia interpela pelo homem.' },
          { type: 'p', text: '**EX PERSONA** — exige interpelação (judicial ou extrajudicial — notificação cartorária, e-mail, comunicação registrada). Sem interpelação, não há mora. Aplicável quando a obrigação NÃO tem termo certo (art. 397 par. único).' },
          { type: 'box', kind: 'macete', text: '**EX RE = Récorde (data fixa); EX PERSONA = Pessoa precisa interpelar.**' },
          { type: 'h', text: 'Cláusula penal compensatória × moratória' },
          { type: 'table', headers: ['Critério', 'Compensatória', 'Moratória'],
            rows: [
              ['Hipótese', 'Inadimplemento TOTAL', 'Atraso (mora)'],
              ['Efeito', 'ALTERNATIVA (credor escolhe: executar OU cobrar pena)', 'CUMULATIVA (cobrança da pena + cumprimento)'],
              ['Limite', 'Não pode exceder valor da obrigação (art. 412)', 'Idem'],
              ['Redução', 'Pode pelo juiz (art. 413)', 'Idem']
            ] },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 616:** "A indenização decorrente de seguro de vida em garantia de mútuo NÃO é considerada cláusula penal."' },
          { type: 'h', text: 'Arras confirmatórias × penitenciais' },
          { type: 'p', text: '**CONFIRMATÓRIAS (art. 417)** — REGRA. Reforçam o vínculo; descumprimento = perda das arras (mais perdas e danos suplementares se provados — art. 419). NÃO há arrependimento.' },
          { type: 'p', text: '**PENITENCIAIS (art. 420)** — exigem cláusula EXPRESSA. Concedem direito de arrependimento. Limitação dos danos: máximo é o valor das arras (em dobro) — sem suplemento.' },
          { type: 'box', kind: 'macete', text: '**Confirmatórias = REGRA, sem arrependimento. Penitenciais = exceção, COM arrependimento + limite.**' },
          { type: 'h', text: 'Adimplemento substancial' },
          { type: 'p', text: 'Construção jurisprudencial (origem: Direito inglês — substantial performance). Quando o devedor cumpriu a parte essencial da prestação, mesmo com falhas menores, o credor NÃO pode resolver o contrato — apenas exigir o saldo + perdas e danos. Razão: boa-fé + função social do contrato + vedação ao abuso.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.622.555 (2017):** adimplemento substancial NÃO se aplica a alienação fiduciária regida pelo Decreto-Lei 911/69. Mudança de orientação relevante.' },
          { type: 'h', text: 'Caso fortuito × força maior (art. 393)' },
          { type: 'p', text: 'Doutrina diverge na distinção: **fortuito** = evento humano imprevisível (greve geral); **força maior** = evento da natureza inevitável (terremoto). Mas o efeito é IDÊNTICO (art. 393): excluem responsabilidade do devedor, salvo se assumiu expressamente o risco. Em concursos, atenção à **interpretação literal** do CC.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Mora — EX RE = data certa, automática. EX PERSONA = sem termo, interpelação.**' },
          { type: 'box', kind: 'macete', text: '**Cláusula penal compensatória ALTERNATIVA, moratória CUMULATIVA.**' },
          { type: 'box', kind: 'macete', text: '**Cláusula penal limite: valor da OBRIGAÇÃO PRINCIPAL (art. 412). Manifestamente excessivo: REDUÇÃO equitativa pelo juiz (art. 413).**' },
          { type: 'box', kind: 'macete', text: '**Arras: confirmatória SEM arrependimento; penitencial COM arrependimento.**' },
          { type: 'box', kind: 'macete', text: '**Perdas e danos: dano EMERGENTE + lucros CESSANTES** (art. 402).' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Mora EX RE quando há TERMO CERTO** — aplicação automática, sem necessidade de interpelação.' },
          { type: 'box', kind: 'atencao', text: '**Cláusula penal compensatória NÃO se cumula com obrigação principal** — é alternativa. Já a moratória cumula.' },
          { type: 'box', kind: 'atencao', text: '**Caso fortuito EXCLUI responsabilidade, SALVO se devedor estava em mora** (art. 399) ou expressamente assumiu o risco (art. 393).' },
          { type: 'box', kind: 'atencao', text: '**Lei de Usura (Decreto 22.626/33) limita juros convencionais a 12% a.a. — exceção: instituições financeiras (Súmula 596/STF).**' },
          { type: 'box', kind: 'atencao', text: '**Arras CONFIRMATÓRIAS são a regra do CC** (art. 417); penitenciais (art. 420) exigem disposição EXPRESSA.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 6 (obrigações geral):** o inadimplemento se conecta à compensação, novação, remissão.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 11 (responsabilidade civil):** dano emergente + lucros cessantes são noções comuns à responsabilidade extracontratual.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 8 (contratos):** exceção do contrato não cumprido (art. 476) é defesa diante do inadimplemento; resolução por inadimplemento é típica.' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 12 (cumprimento):** título executivo judicial líquido pode ser cobrado por cumprimento de sentença.' }
        ]
      }
    ]
  },
  {
    id: 'civ-08-contratos-geral',
    num: 8, materia: 'civil',
    title: 'Contratos — parte geral',
    edital: '3.1.8',
    editalText: 'Princípios. Formação. Classificação. Vícios redibitórios. Evicção. Extinção. Função social. Boa-fé objetiva.',
    size: 'Grande',
    schedule: 'Mês 2 da Fase 3 (jan/2027) — semana 3-4',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Contrato é **negócio jurídico bilateral** que cria obrigações entre as partes. CC/02 atualizou três princípios fundamentais: **AUTONOMIA DA VONTADE** (clássico, mas relativizada), **FUNÇÃO SOCIAL DO CONTRATO** (art. 421 — limite ao dirigismo contratual), **BOA-FÉ OBJETIVA** (arts. 113, 187, 422). Esses três pilares regem a interpretação e execução de todo contrato.' },
          { type: 'p', text: 'A **boa-fé objetiva** (modelo de conduta) impõe deveres laterais: informar, cooperar, lealdade, sigilo. Tem três funções: **INTERPRETATIVA** (art. 113 — interpretar negócios à luz da boa-fé), **INTEGRATIVA** (art. 422 — deveres anexos não escritos) e **CONTROLADORA** (art. 187 — abuso de direito). Dela derivam institutos: **venire contra factum proprium**, **supressio/surrectio**, **duty to mitigate the loss**, **tu quoque**.' },
          { type: 'p', text: 'O CC/02 também reformou as **excludentes da execução do contrato**: extinção pode dar-se por **resolução** (descumprimento), **resilição** (manifestação de vontade — arts. 472-473), **rescisão** (defeitos que viciam o negócio). Há ainda a **onerosidade excessiva** (arts. 478-480) — fato superveniente e imprevisível torna a prestação extremamente onerosa.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Princípios e formação (arts. 421-435)' },
          { type: 'list', items: [
            '**Art. 421** — liberdade de contratar exercida em razão e nos LIMITES da função social do contrato',
            '**Art. 421-A (Lei 13.874/19)** — contratos paritários presumem-se PARITÁRIOS, com inferência de que respeitam a autonomia da vontade',
            '**Art. 422** — contraentes obrigados a observar BOA-FÉ tanto na conclusão quanto na execução do contrato',
            '**Art. 423** — contratos de adesão: cláusulas DUVIDOSAS interpretam-se a favor do aderente',
            '**Art. 424** — contratos de adesão: NULAS cláusulas que estipulem renúncia antecipada de direito da natureza do negócio',
            '**Art. 427** — proposta vincula o proponente, salvo disposição em contrário',
            '**Art. 428** — proposta perde vigor quando: I — feita sem prazo a presente; II — feita sem prazo por escrito + tempo razoável; etc.',
            '**Art. 433** — aceitação de contrato entre PRESENTES: imediata. ENTRE AUSENTES (à distância): tornam-se obrigatórias quando expedida (teoria da expedição — art. 434)'
          ] },
          { type: 'h', text: 'Vícios redibitórios e evicção (arts. 441-457)' },
          { type: 'list', items: [
            '**VÍCIO REDIBITÓRIO (art. 441)** — coisa adquirida tem defeito OCULTO que a torna IMPRÓPRIA ao uso ou diminui valor. Adquirente pode redibir (rescindir) ou pedir abatimento do preço',
            '**Art. 444** — responsabilidade do alienante ainda que ignorasse o vício; mas se ignorava, restitui apenas o preço; se conhecia, paga perdas e danos',
            '**Art. 445 — PRAZOS DECADENCIAIS:** redibitória ou estimatória → 30 DIAS para coisa MÓVEL, 1 ANO para IMÓVEL (vício APARENTE/EVIDENTE no uso normal). Vício OCULTO: prazo conta a partir da CIÊNCIA',
            '**EVICÇÃO (arts. 447-457)** — perda da coisa adquirida em virtude de sentença que a atribui a terceiro com direito anterior à aquisição',
            '**Art. 448** — partes podem reforçar, diminuir ou EXCLUIR a responsabilidade pela evicção (mas exclusão exige cláusula expressa e ciência)',
            '**Art. 450** — alienante responde por evicção: restituição preço + frutos restituídos pelo adquirente + despesas + benfeitorias necessárias e úteis'
          ] },
          { type: 'h', text: 'Extinção dos contratos (arts. 472-480)' },
          { type: 'list', items: [
            '**Art. 472** — extinção por DISTRATO: mesma forma do contrato',
            '**Art. 473** — RESILIÇÃO unilateral nos casos em que a lei expressa ou implicitamente permitir, mediante denúncia notificada à outra parte',
            '**RESOLUÇÃO** (arts. 474-480) — extingue por descumprimento: cláusula resolutiva expressa (operação automática) OU implícita (pede-se em juízo, com possibilidade de cumprir)',
            '**Art. 476** — EXCEÇÃO DO CONTRATO NÃO CUMPRIDO (exceptio non adimpleti contractus): nos contratos bilaterais, nenhum contraente pode exigir antes de cumprir sua parte',
            '**Art. 478** — ONEROSIDADE EXCESSIVA: prestação tornar-se EXCESSIVAMENTE ONEROSA por fatos EXTRAORDINÁRIOS e IMPREVISÍVEIS = parte pode pedir RESOLUÇÃO',
            '**Art. 479** — outra parte pode evitar resolução modificando equitativamente as condições do contrato (revisão)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Boa-fé objetiva — funções e deveres laterais' },
          { type: 'p', text: 'Modelo de conduta probo, não estado psicológico. **Funções:** (i) **interpretativa** (art. 113); (ii) **integrativa** (art. 422 — deveres anexos); (iii) **controle** (art. 187 — abuso de direito). **Deveres anexos:** informação, lealdade, cooperação, cuidado, sigilo.' },
          { type: 'h', text: 'Institutos derivados da boa-fé objetiva' },
          { type: 'list', items: [
            '**Venire contra factum proprium** — vedação à conduta contraditória; partes não podem agir de modo a frustrar expectativas legítimas criadas',
            '**Supressio** — perda de direito pelo seu não-exercício prolongado, com efeito de criar legítima expectativa na outra parte',
            '**Surrectio** — surgimento de direito decorrente de prática reiterada que cria expectativa de continuidade',
            '**Duty to mitigate the loss** — credor tem dever de minimizar suas próprias perdas, sob pena de não obter ressarcimento integral (jurisprudência STJ)',
            '**Tu quoque** — quem desrespeitou regra contratual não pode invocá-la em seu benefício'
          ] },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.273.811:** duty to mitigate the loss aplica-se ao Direito brasileiro como decorrência da boa-fé objetiva (art. 422). Credor que poderia mitigar dano e não o fez, não obtém indenização integral.' },
          { type: 'h', text: 'Vícios redibitórios — prazos' },
          { type: 'p', text: 'Prazos DECADENCIAIS (art. 445): **móvel = 30 dias; imóvel = 1 ano** para vício APARENTE/EVIDENTE no uso normal. Vício OCULTO conta da CIÊNCIA do vício, com PRAZO MÁXIMO: 180 dias para móvel + 1 ano para imóvel após a aquisição.' },
          { type: 'box', kind: 'macete', text: '**Vícios redibitórios: 30 dias móvel · 1 ano imóvel (aparente).** Oculto = ciência + prazo máximo (180d móvel · 1 ano imóvel).' },
          { type: 'h', text: 'Evicção × vício redibitório' },
          { type: 'table', headers: ['Critério', 'Vício redibitório', 'Evicção'],
            rows: [
              ['Origem', 'Defeito FÍSICO oculto da coisa', 'Defeito JURÍDICO (terceiro com direito anterior)'],
              ['Pressuposto', 'Coisa imprópria ao uso ou diminuída de valor', 'Sentença que atribui a coisa a terceiro'],
              ['Direitos', 'Redibitória OU estimatória', 'Restituição preço + indenização (art. 450)'],
              ['Prazo', '30 dias móvel; 1 ano imóvel (art. 445)', 'Prazo prescricional comum, não decadencial']
            ] },
          { type: 'h', text: 'Onerosidade excessiva (rebus sic stantibus)' },
          { type: 'p', text: 'Reflete a **teoria da imprevisão**: contrato vincula apenas enquanto as condições permanecem iguais (cláusula REBUS SIC STANTIBUS). Para revisar/resolver: **(i) fato superveniente; (ii) extraordinário e imprevisível; (iii) que torne a prestação excessivamente onerosa para uma parte; (iv) com vantagem extrema para outra.** Distintos da TEORIA DO RISCO PRÓPRIO em CDC (art. 6º V: basta a onerosidade superveniente, sem imprevisibilidade).' },
          { type: 'box', kind: 'atencao', text: '**CDC adota teoria mais ampla** (art. 6º V) — basta o desequilíbrio superveniente, dispensando imprevisibilidade. CC exige extraordinariedade + imprevisibilidade (art. 478).' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**3 princípios contratuais: AUTONOMIA · FUNÇÃO SOCIAL · BOA-FÉ OBJETIVA.**' },
          { type: 'box', kind: 'macete', text: '**Boa-fé objetiva = modelo de conduta. Subjetiva = estado mental.**' },
          { type: 'box', kind: 'macete', text: '**Vícios redibitórios: 30/1 ano (aparente). Cuidado com OCULTO: ciência + máximo legal.**' },
          { type: 'box', kind: 'macete', text: '**Resolução (descumprimento) × Resilição (vontade) × Rescisão (vícios).**' },
          { type: 'box', kind: 'macete', text: '**Onerosidade CC: extraordinário + imprevisível. CDC: basta excessivamente onerosa.**' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Vícios redibitórios: 30 dias móvel · 1 ANO imóvel (aparente).** NÃO se conta da venda — conta-se desde a entrega (art. 445).' },
          { type: 'box', kind: 'atencao', text: '**Evicção é defeito JURÍDICO** (terceiro com direito anterior); vício redibitório é FÍSICO. Confusão recorrente.' },
          { type: 'box', kind: 'atencao', text: '**Cláusula que exclui evicção exige FORMA EXPRESSA e ciência do adquirente** (art. 448). Ausentes esses requisitos, é nula.' },
          { type: 'box', kind: 'atencao', text: '**Onerosidade excessiva exige IMPREVISIBILIDADE** no CC (art. 478). Em contratos de consumo, não — CDC art. 6º V basta o desequilíbrio.' },
          { type: 'box', kind: 'atencao', text: '**Aceitação entre AUSENTES: teoria da EXPEDIÇÃO (art. 434).** Ao expedir aceitação, contrato torna-se obrigatório, salvo retratação tempestiva.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 7 (inadimplemento):** descumprimento contratual gera mora ou inadimplemento absoluto + resolução por descumprimento.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 9 (contratos em espécie):** princípios gerais aplicáveis a todos os tipos.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 11 (responsabilidade civil):** descumprimento = perdas e danos. Responsabilidade contratual.' },
          { type: 'box', kind: 'conexao', text: '**CDC:** princípios contratuais reforçados (transparência, vulnerabilidade), mais protetivos ao consumidor.' }
        ]
      }
    ]
  },
  {
    id: 'civ-09-contratos-especie',
    num: 9, materia: 'civil',
    title: 'Contratos em espécie',
    edital: '3.1.9',
    editalText: 'Compra e venda, troca, doação, locação, comodato, mútuo, prestação de serviço, empreitada, mandato, fiança, transação.',
    size: 'Médio',
    schedule: 'Mês 2 da Fase 3 (jan/2027) — semana 4',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Os **contratos em espécie** (CC arts. 481-853) detalham os tipos contratuais mais comuns. Para concurso, a banca cobra repetidamente: COMPRA E VENDA (cláusulas especiais — retrovenda, preempção, reserva de domínio), DOAÇÃO (revogação por ingratidão), LOCAÇÃO (Lei 8.245/91), MÚTUO/COMODATO, FIANÇA (benefício de ordem), MANDATO. Os demais (transporte, depósito, seguro, jogo) tendem a ser menos cobrados.' },
          { type: 'p', text: 'Atenção a três pontos cruciais: (1) **fiança não admite interpretação extensiva** (art. 819) — protege o fiador; (2) **doação pura é irrevogável**, salvo INGRATIDÃO (art. 555) — rol taxativo; (3) **locação residencial** segue Lei 8.245/91 (lei especial) e não o CC. CC trata locação de coisas em geral (arts. 565+), aplicável quando 8.245 não cobre.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Compra e venda (arts. 481-535)' },
          { type: 'list', items: [
            '**Art. 481** — pelo contrato de compra e venda, um dos contratantes obriga-se a transferir o domínio de certa coisa, e o outro, a pagar-lhe o preço',
            '**Art. 484** — preço deve ser certo, determinado ou determinável; arbitramento por terceiro vale (art. 485)',
            '**Art. 486-488** — preço pode ser fixado por bolsa de valores OU em referência ao MERCADO',
            '**Art. 489** — cláusula leonina (preço a critério de uma das partes): NULA',
            '**RETROVENDA (arts. 505-508)** — vendedor pode reservar o direito de recobrar o imóvel em prazo até 3 anos (decadencial)',
            '**PREEMPÇÃO/PREFERÊNCIA (arts. 513-520)** — compromisso de oferecer preferência ao alienante em caso de revenda',
            '**RESERVA DE DOMÍNIO (arts. 521-528)** — vendedor pode reservar para si o domínio até pagamento integral (móveis)'
          ] },
          { type: 'h', text: 'Doação (arts. 538-564)' },
          { type: 'list', items: [
            '**Art. 538** — doação é contrato pelo qual uma pessoa, por liberalidade, transfere bens a outra que os aceita',
            '**Art. 540** — doação remuneratória ou modal: parte gratuita + parte onerosa',
            '**Art. 549** — NULA a doação que exceder o que o doador poderia DISPOR em testamento (50% — proteção da legítima)',
            '**Art. 555** — doação pode ser REVOGADA por INGRATIDÃO (art. 557 — rol TAXATIVO: atentar contra vida, ofensa física, injúria grave, recusa de alimentos) ou inexecução do encargo',
            '**Art. 559** — direito de revogar é do DOADOR — incomunicável e não passa aos herdeiros'
          ] },
          { type: 'h', text: 'Locação (arts. 565-578 + Lei 8.245/91 — residencial/comercial)' },
          { type: 'list', items: [
            '**Lei 8.245/91** — locação predial urbana RESIDENCIAL e NÃO RESIDENCIAL (lei especial)',
            'CC arts. 565-578 — locação de coisas em geral (móveis e imóveis rurais)',
            '**Lei 8.245 art. 7º** — locação por prazo igual ou superior a 30 meses: resilição automática ao final do prazo. Inferior a 30 meses: prorroga automaticamente',
            '**Lei 8.245 art. 47** — locação RESIDENCIAL sem prazo: pode ser denunciada após 5 anos contínuos OU sob determinadas hipóteses',
            '**Bem de família do FIADOR de locação é PENHORÁVEL** (Lei 8.009/90 art. 3º VII — STF Tema 295)'
          ] },
          { type: 'h', text: 'Mútuo, comodato e mandato' },
          { type: 'list', items: [
            '**MÚTUO (arts. 586-592)** — empréstimo de coisa FUNGÍVEL (transferência de propriedade); muito usado para empréstimo de dinheiro',
            '**COMODATO (arts. 579-585)** — empréstimo GRATUITO de coisa INFUNGÍVEL; somente uso',
            '**MANDATO (arts. 653-692)** — alguém recebe poderes para praticar atos em nome de outrem; pode ser GRATUITO ou ONEROSO; expresso, tácito, geral, especial; SUBSTABELECIMENTO admitido salvo vedação'
          ] },
          { type: 'h', text: 'Fiança (arts. 818-839)' },
          { type: 'list', items: [
            '**Art. 818** — pelo contrato de fiança, uma pessoa garante satisfazer ao credor obrigação assumida pelo devedor, caso este não a cumpra',
            '**Art. 819** — interpretação RESTRITIVA — não admite extensão',
            '**Art. 820** — pode ser estipulada SEM o consentimento do devedor ou contra a vontade dele',
            '**Art. 822** — fiança NÃO admite EXIGIBILIDADE em obrigações nulas',
            '**Art. 827 — BENEFÍCIO DE ORDEM:** fiador goza do direito de exigir, antes da execução, sejam executados os bens do DEVEDOR. Renunciável (art. 828)',
            '**Art. 838** — fiador exonera-se se for chamado a pagar e provar mudança da situação econômica do devedor'
          ] },
          { type: 'h', text: 'Transação (arts. 840-850)' },
          { type: 'list', items: [
            '**Art. 840** — transação previne ou termina litígios mediante CONCESSÕES MÚTUAS',
            '**Art. 842** — transação por escrito (instrumento público se direitos imobiliários, particular se outros)',
            '**Art. 849** — transação SÓ pode ser rescindida por DOLO, COAÇÃO ou ERRO ESSENCIAL quanto à pessoa ou coisa controvertida — não por simples ignorância de fatos'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Doação — revogação por ingratidão (rol taxativo)' },
          { type: 'p', text: 'CC art. 557 traz **rol TAXATIVO** das hipóteses de ingratidão: I — atentar contra a vida; II — ofensa física; III — injúria grave ou calúnia; IV — recusa de alimentos quando devidos. Outras condutas, mesmo reprováveis, NÃO autorizam revogação. Doação pura é IRREVOGÁVEL fora dessas hipóteses.' },
          { type: 'box', kind: 'atencao', text: '**Rol do art. 557 é TAXATIVO** (numerus clausus). Conduta que não se enquadra = não revoga, ainda que reprovável.' },
          { type: 'h', text: 'Fiança — interpretação restritiva (art. 819)' },
          { type: 'p', text: 'Fiança é contrato de natureza acessória, gratuita (em regra) e protetora do fiador. Não admite extensão — se o contrato afiançado é prorrogado SEM concordância do fiador, a fiança não se estende ao novo prazo (Súmula 214/STJ — para locação). Princípio: **fiança = estrita interpretação**.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 214:** "O fiador na locação NÃO responde por obrigações resultantes de aditamento ao qual NÃO ANUIU."' },
          { type: 'h', text: 'Benefício de ordem (art. 827)' },
          { type: 'p', text: 'Fiador pode exigir que primeiro sejam executados os bens do **DEVEDOR PRINCIPAL**. Renunciável (art. 828). Não cabe se: (a) renunciado expressamente; (b) fiador for tutor, curador, ou se obrigou como devedor principal; (c) devedor for insolvente ou falido. Em locação, costuma haver renúncia expressa (art. 828 II — fiador "principal pagador").' },
          { type: 'h', text: 'Reserva de domínio × alienação fiduciária' },
          { type: 'p', text: '**Reserva de domínio** (CC arts. 521-528) — vendedor mantém propriedade até pagamento integral; comprador tem POSSE. Forma de garantia em compra e venda de móveis. **Alienação fiduciária** (Decreto-Lei 911/69 e Lei 9.514/97) — comprador transfere ao credor a propriedade RESOLÚVEL como garantia; muito usada em automóveis e imóveis. Distinção é cobrada.' },
          { type: 'h', text: 'Locação — denúncia vazia × cheia' },
          { type: 'p', text: '**DENÚNCIA VAZIA** = locador retoma sem motivo, ao final do prazo determinado de 30 meses (Lei 8.245 art. 47 I) ou após 5 anos de prazo indeterminado. **DENÚNCIA CHEIA** = motivada (uso próprio, demolição, etc.). Distinção essencial para entender retomada.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Doação — ROL TAXATIVO de ingratidão (art. 557): VIDA · OFENSA FÍSICA · INJÚRIA · RECUSA DE ALIMENTOS.**' },
          { type: 'box', kind: 'macete', text: '**Mútuo = FUNGÍVEL (transfere propriedade). Comodato = INFUNGÍVEL (só uso, gratuito).**' },
          { type: 'box', kind: 'macete', text: '**Fiança = INTERPRETAÇÃO RESTRITIVA (819). Súmula 214: aditamento sem fiador = não responde.**' },
          { type: 'box', kind: 'macete', text: '**Benefício de ordem = renunciável (828). "Principal pagador" = renúncia.**' },
          { type: 'box', kind: 'macete', text: '**Locação 30 meses ou +: denúncia vazia ao final. Menos: prorroga automática.**' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Doação rol de ingratidão é TAXATIVO** (art. 557). Outras condutas reprováveis NÃO autorizam revogação.' },
          { type: 'box', kind: 'atencao', text: '**Mútuo é FUNGÍVEL** (transfere propriedade — mutuário tem que devolver coisa do mesmo gênero). Comodato é INFUNGÍVEL.' },
          { type: 'box', kind: 'atencao', text: '**Súmula 214/STJ — fiador NÃO responde por aditamento sem sua anuência.** Aplicação à locação.' },
          { type: 'box', kind: 'atencao', text: '**Bem de família do fiador de locação É PENHORÁVEL** (Lei 8.009 art. 3º VII + STF Tema 295).' },
          { type: 'box', kind: 'atencao', text: '**Doação que excede ½ do patrimônio = NULA (art. 549)** — proteção da legítima.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 8 (contratos geral):** princípios e regras gerais aplicam-se a TODOS os contratos em espécie.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 4 (bens):** bem de família do fiador é penhorável (exceção Lei 8.009 art. 3º VII).' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 7 (inadimplemento):** vícios redibitórios e evicção são institutos relacionados a defeitos contratuais.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 17 (sucessões):** doação não pode exceder o que poderia dispor em testamento (art. 549).' }
        ]
      }
    ]
  },
  {
    id: 'civ-10-atos-unilaterais',
    num: 10, materia: 'civil',
    title: 'Atos unilaterais e enriquecimento sem causa',
    edital: '3.1.10',
    editalText: 'Promessa de recompensa. Gestão de negócios. Pagamento indevido. Enriquecimento sem causa.',
    size: 'Pequeno-Médio',
    schedule: 'Mês 3 da Fase 3 (fev/2027) — semana 2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'Os **atos unilaterais** são fontes de obrigações que decorrem da manifestação de vontade de UMA SÓ pessoa, sem necessidade de aceitação. CC/02 trata: **promessa de recompensa** (arts. 854-860), **gestão de negócios** (arts. 861-875), **pagamento indevido** (arts. 876-883), **enriquecimento sem causa** (arts. 884-886).' },
          { type: 'p', text: 'O **enriquecimento sem causa** (arts. 884-886) é norma fundamental: aquele que se enriqueceu à custa de outrem deve restituir o indevidamente auferido. **CARÁTER SUBSIDIÁRIO** (art. 886): só cabe quando NÃO houver outra ação específica. É "última fronteira" da reparação patrimonial — fonte autônoma de obrigação.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Promessa de recompensa (arts. 854-860)' },
          { type: 'list', items: [
            '**Art. 854** — quem, por anúncios públicos, prometer recompensa por algo, fica obrigado a cumprir',
            '**Art. 855** — promessa pode ser revogada ANTES da prestação do serviço (mesma forma do anúncio)',
            '**Art. 858** — em concursos, a recompensa cabe a quem cumprir conforme o anúncio'
          ] },
          { type: 'h', text: 'Gestão de negócios (arts. 861-875)' },
          { type: 'list', items: [
            '**Art. 861** — quem, sem autorização, gere negócio alheio, dirigir-se-á segundo a vontade presumível do dono',
            '**Art. 862** — gerir negócios contra a vontade manifesta do dono → responde por perdas e danos, salvo se a vontade fosse contrária à lei',
            '**Art. 869** — gestão útil e bem conduzida obriga o dono a indenizar despesas necessárias e úteis'
          ] },
          { type: 'h', text: 'Pagamento indevido (arts. 876-883)' },
          { type: 'list', items: [
            '**Art. 876** — todo aquele que recebeu o que NÃO LHE ERA DEVIDO fica obrigado a restituir',
            '**Art. 877** — quem voluntariamente pagou o indevido tem o ônus da prova — deve provar que pagou por erro',
            '**Art. 878** — irrecuperável a quantia paga conscientemente para fim ilícito (regra rigorosa)',
            '**Art. 882** — não se pode repetir o que se pagou em razão de prescrição (dívida prescrita) — embora extinta a pretensão, a dívida persiste'
          ] },
          { type: 'h', text: 'Enriquecimento sem causa (arts. 884-886)' },
          { type: 'list', items: [
            '**Art. 884** — aquele que, sem JUSTA CAUSA, se enriquecer à custa de outrem, deve restituir o que indevidamente auferiu',
            '**Art. 884 par. único** — restituição se faz pela coisa, ou pela quantia equivalente',
            '**Art. 885** — restituição é INDEVIDA quando o enriquecimento se basear em causa juridicamente legítima (ex: doação válida)',
            '**Art. 886** — NÃO caberá ação de enriquecimento sem causa quando a lei conferir ao lesado outros meios para se ressarcir do prejuízo (CARÁTER SUBSIDIÁRIO)'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Pagamento indevido — ônus da prova' },
          { type: 'p', text: 'Quem alega ter pago indevidamente tem **ÔNUS DE PROVAR O ERRO** (art. 877). Pagamento voluntário é presumidamente devido — quem se diz lesado deve quebrar essa presunção.' },
          { type: 'h', text: 'Enriquecimento sem causa — subsidiariedade (art. 886)' },
          { type: 'p', text: 'A ação de enriquecimento sem causa é **SUBSIDIÁRIA**: só cabe quando não há outra ação específica. Hipótese típica: quando a parte não tem ação contratual nem de responsabilidade civil — então invoca o enriquecimento como "fundo último" de tutela.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.304.061:** ação por enriquecimento sem causa é subsidiária; tendo a parte ação contratual ou de responsabilidade, não cabe a do art. 884.' },
          { type: 'h', text: 'Pagamento de dívida PRESCRITA' },
          { type: 'p', text: '**Art. 882** — quem paga DÍVIDA PRESCRITA não pode pedir de volta. A prescrição extingue a PRETENSÃO (art. 189), mas a dívida persiste como obrigação natural. Pagamento espontâneo de dívida prescrita = válido e irretratável.' },
          { type: 'h', text: 'Diferença com responsabilidade civil' },
          { type: 'p', text: 'Responsabilidade civil pressupõe **ATO ILÍCITO** (art. 186) ou ATIVIDADE DE RISCO (art. 927 par. único). Enriquecimento sem causa **NÃO** exige ilicitude — pode haver enriquecimento por fato lícito (recebimento de coisa por engano, p. ex.). Respondem a fontes distintas de obrigação.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**4 atos unilaterais: PROMESSA · GESTÃO · PAGAMENTO INDEVIDO · ENRIQUECIMENTO SEM CAUSA.**' },
          { type: 'box', kind: 'macete', text: '**Enriquecimento sem causa = SUBSIDIÁRIO (art. 886). Sem outra ação = pode invocar.**' },
          { type: 'box', kind: 'macete', text: '**Dívida PRESCRITA paga = NÃO se restitui (art. 882).**' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Enriquecimento é SUBSIDIÁRIO** (art. 886). Tendo ação específica = não cabe.' },
          { type: 'box', kind: 'atencao', text: '**Pagamento de dívida PRESCRITA = irretratável** (art. 882). Pagador não recupera.' },
          { type: 'box', kind: 'atencao', text: '**Quem paga indevido tem ônus da prova do erro** (art. 877). Pagamento voluntário é presumidamente devido.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 11 (responsabilidade civil):** institutos distintos — responsabilidade exige ilicitude; enriquecimento basta a falta de causa.' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 5 (prescrição):** dívida prescrita paga não se repete (art. 882) — exceção ao princípio.' }
        ]
      }
    ]
  },
  {
    id: 'civ-11-responsabilidade-civil',
    num: 11, materia: 'civil',
    title: 'Responsabilidade civil',
    edital: '3.1.11',
    editalText: 'Subjetiva e objetiva. Atos ilícitos. Dano material e moral. Quantificação. Responsabilidade do Estado, do empregador, dos pais.',
    size: 'Gigante',
    schedule: 'Mês 3 da Fase 3 (fev/2027) — semana 1-2',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'A responsabilidade civil é instituto que **obriga ao ressarcimento** quem causa dano a outrem. Pressupostos clássicos: **conduta** (ação/omissão) + **dano** (prejuízo material ou moral) + **nexo causal** (conexão causa-efeito). A **culpa** entra como pressuposto na **responsabilidade SUBJETIVA**; é dispensada na **OBJETIVA** (basta a relação dano-conduta).' },
          { type: 'p', text: 'O CC/02 introduziu inovação radical: o **art. 927 par. único** (cláusula geral de risco) — atividades habitualmente desenvolvidas que impliquem RISCO aos direitos de outrem geram responsabilidade OBJETIVA. Isso alargou enormemente o rol de hipóteses (antes restrito a leis específicas: CDC art. 12-14, ambiental Lei 6.938 art. 14 §1º, transporte de pessoas etc.).' },
          { type: 'p', text: 'Responsabilidade civil **EXTRACONTRATUAL** (aquiliana — arts. 186 + 927) e **CONTRATUAL** (decorre do descumprimento de obrigação — arts. 389+). CC/02 unificou tratamento em muitos pontos. Distinção mais relevante hoje: prazo prescricional (3 anos para extracontratual — art. 206 §3º V; 10 anos para contratual — art. 205, regra geral). Com o STJ tendendo a aplicar 3 anos a ambas em muitos casos (responsabilidade civil em sentido amplo).' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Ato ilícito e responsabilidade — bases (arts. 186, 187, 927)' },
          { type: 'list', items: [
            '**Art. 186** — aquele que, por AÇÃO ou OMISSÃO voluntária, NEGLIGÊNCIA ou IMPRUDÊNCIA, violar direito e causar dano a outrem, comete ATO ILÍCITO',
            '**Art. 187** — comete ato ilícito o titular de um direito que, ao exercê-lo, EXCEDE manifestamente os limites impostos por seu fim econômico/social, pela boa-fé ou pelos bons costumes (ABUSO DE DIREITO)',
            '**Art. 188** — NÃO constituem atos ilícitos: legítima defesa, exercício regular de direito, estado de necessidade',
            '**Art. 927 caput** — aquele que por ato ilícito (arts. 186 e 187) causar dano a outrem, fica obrigado a repará-lo',
            '**Art. 927 par. único** — RESPONSABILIDADE OBJETIVA quando: (a) lei especificar; (b) atividade NORMALMENTE desenvolvida pelo autor implicar, POR SUA NATUREZA, RISCO para os direitos de outrem (TEORIA DO RISCO CRIADO)'
          ] },
          { type: 'h', text: 'Responsabilidade indireta (art. 932)' },
          { type: 'list', items: [
            '**I — pais** pelos filhos menores que estiverem sob sua autoridade',
            '**II — tutor** ou curador pelo pupilo ou curatelado',
            '**III — empregador** pelos atos dos empregados, no exercício do trabalho ou em razão dele',
            '**IV — donos de hotéis, hospedarias, estabelecimentos** onde se hospede ou aloje',
            '**V — os que gratuitamente houverem participado nos produtos do crime**',
            '**Art. 933** — responsabilidade do art. 932 é **OBJETIVA** (independe de culpa do responsável)'
          ] },
          { type: 'h', text: 'Quantificação dos danos (arts. 944-954)' },
          { type: 'list', items: [
            '**Art. 944 caput** — indenização mede-se pela EXTENSÃO do dano',
            '**Art. 944 par. único** — havendo excessiva DESPROPORÇÃO entre gravidade da culpa e dano, juiz pode REDUZIR equitativamente a indenização',
            '**Art. 945** — culpa CONCORRENTE da vítima atenua a indenização',
            '**Art. 948** — homicídio: indenização inclui despesas com tratamento + funeral + alimentos para dependentes (art. 948 II)',
            '**Art. 949** — lesão à saúde: despesas + lucros cessantes até o fim da convalescência + qualquer outro dano',
            '**Art. 950** — defeito que diminua capacidade laboral: pensão correspondente à inabilitação permanente',
            '**Art. 953** — calúnia, difamação, injúria: indenização pelo prejuízo + juiz pode arbitrar dano moral'
          ] },
          { type: 'h', text: 'Dano moral, estético, existencial' },
          { type: 'list', items: [
            'CF art. 5º X — direito à indenização por dano moral (constitucional)',
            'CC art. 186 — dano patrimonial OU MORAL pode caracterizar ato ilícito',
            '**Súmula 387/STJ** — é lícita a CUMULAÇÃO de indenizações de dano ESTÉTICO e MORAL',
            '**Súmula 227/STJ** — pessoa JURÍDICA pode sofrer dano moral (honra objetiva)',
            '**Súmula 326/STJ** — dano moral fixado abaixo do pedido NÃO importa sucumbência recíproca'
          ] },
          { type: 'h', text: 'Excludentes (responsabilidade subjetiva)' },
          { type: 'list', items: [
            '**Caso fortuito / força maior** (art. 393) — eventos imprevisíveis e inevitáveis',
            '**Fato exclusivo da vítima** — afasta o nexo causal (Súmula 145/STJ — transporte gratuito por relação de cortesia)',
            '**Fato exclusivo de terceiro** — afasta nexo, salvo se previsível',
            '**Legítima defesa, exercício regular de direito, estado de necessidade** (CC art. 188) — atos lícitos, embora possam gerar dever de indenizar em hipóteses do art. 929-930'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Subjetiva × objetiva — diferenças' },
          { type: 'table', headers: ['Aspecto', 'Subjetiva', 'Objetiva'],
            rows: [
              ['Pressupostos', 'Conduta + dano + nexo + CULPA', 'Conduta + dano + nexo (sem culpa)'],
              ['Base normativa', 'Art. 186 + 927 caput', 'Art. 927 par. único + leis específicas'],
              ['Defesa', 'Negar culpa, romper nexo', 'Romper nexo (caso fortuito, fato vítima)'],
              ['Hipóteses clássicas', 'Acidentes em geral entre particulares', 'CDC, ambiental, transporte, atividade de risco']
            ] },
          { type: 'h', text: 'Cláusula geral de risco (art. 927 par. único)' },
          { type: 'p', text: 'Inovação do CC/02. Não exige lei específica — basta que a atividade normalmente desenvolvida implique risco aos direitos de outrem POR SUA NATUREZA. STJ aplicou a: empresa de transporte ferroviário, atividade de manuseio de explosivos, geração de energia, transporte rodoviário de cargas perigosas. Crítica doutrinária: indeterminação semântica.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — REsp 1.366.587:** atividades de produção de cerveja são objetivas (atividade industrial perigosa). Mostra a aplicação ampla do art. 927 par. único.' },
          { type: 'h', text: 'Dano in re ipsa' },
          { type: 'p', text: 'Em situações específicas, o dano dispensa prova — DECORRE DA PRÓPRIA SITUAÇÃO. Hipóteses clássicas: protesto indevido, inscrição indevida em SPC/SERASA (Súmula 297/STJ), atraso na devolução de imóvel locado, abandono afetivo ostensivo (controvertido — STJ tem mudado posição). Banca cobra a literalidade.' },
          { type: 'box', kind: 'jurisprudencia', text: '**STJ — Súmula 385:** "Da anotação irregular em cadastro de proteção ao crédito, NÃO cabe indenização por dano moral, quando preexistente legítima inscrição, ressalvado o direito ao cancelamento." Limita o dano in re ipsa.' },
          { type: 'h', text: 'Responsabilidade indireta — pais pelos filhos' },
          { type: 'p', text: '**Pais respondem OBJETIVAMENTE** pelos atos do filho menor sob sua autoridade (art. 932 I + art. 933). NÃO precisam ter culpa — basta a condição de pai. Tem natureza SOLIDÁRIA com o filho, mas há regra especial: o filho menor responde SUBSIDIARIAMENTE (art. 928). Os pais respondem em primeiro lugar.' },
          { type: 'box', kind: 'atencao', text: '**Pais respondem OBJETIVAMENTE pelos filhos** (art. 932 I + 933). Erro frequente: assumir responsabilidade subjetiva.' },
          { type: 'h', text: 'Reparação por excessiva desproporção (art. 944 par. único)' },
          { type: 'p', text: 'Inovação relevante: indenização mede-se pela EXTENSÃO do dano (caput), MAS havendo excessiva desproporção entre culpa e dano, juiz pode REDUZIR. Aplicação: caso clássico do "Maradona vs criança" — culpa leve, dano enorme = redução. Crítica: enfraquece reparação integral. Aplicado com parcimônia pelo STJ.' },
          { type: 'h', text: 'Responsabilidade civil do Estado' },
          { type: 'p', text: '**CF art. 37 § 6º** — responsabilidade OBJETIVA das pessoas jurídicas de direito público (e privadas prestadoras de serviço público) pelos danos que seus agentes causem a terceiros. Direito de REGRESSO contra agente nos casos de dolo ou culpa. Modalidade: **TEORIA DO RISCO ADMINISTRATIVO** (com excludentes — fortuito, fato exclusivo da vítima/terceiro), não risco integral.' },
          { type: 'p', text: '**Omissão estatal:** STF (Tema 366 — RE 841.526) consolidou tese híbrida: omissão GENÉRICA (falta de policiamento generalizado) = subjetiva (faute du service); omissão ESPECÍFICA (já existente dever de agir) = objetiva. Tema controverso e cobrado.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Pressupostos: 4 — Conduta · Dano · Nexo · Culpa (na subjetiva).** Objetiva: 3 — sem culpa.' },
          { type: 'box', kind: 'macete', text: '**Cláusula geral de risco — art. 927 par. único.** Atividade que NORMALMENTE implica risco = OBJETIVA.' },
          { type: 'box', kind: 'macete', text: '**Pais OBJETIVOS (932 I + 933). Filho subsidiário (928).**' },
          { type: 'box', kind: 'macete', text: '**Estado: art. 37 §6º CF — OBJETIVA por ATO COMISSIVO; OMISSÃO GENÉRICA = subjetiva.**' },
          { type: 'box', kind: 'macete', text: '**Súmula 387/STJ: dano moral + estético = CUMULA.** Súmula 227: PJ TEM dano moral.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Reparação civil — prazo prescricional 3 ANOS** (art. 206 §3º V). Tema vinculante na prática.' },
          { type: 'box', kind: 'atencao', text: '**Pais respondem OBJETIVAMENTE pelos filhos** — independe de culpa (arts. 932 I + 933).' },
          { type: 'box', kind: 'atencao', text: '**Filho menor responde SUBSIDIARIAMENTE — só se os pais não tiverem condição de reparar** (art. 928). Erro: dizer que responsabilidade é solidária.' },
          { type: 'box', kind: 'atencao', text: '**Súmula 385/STJ — preexistente legítima inscrição em SPC = sem dano moral.** Limita o dano in re ipsa.' },
          { type: 'box', kind: 'atencao', text: '**Estado responde por OMISSÃO GENÉRICA de forma SUBJETIVA** (faute du service). Por ATO COMISSIVO ou omissão ESPECÍFICA, OBJETIVA.' },
          { type: 'box', kind: 'atencao', text: '**Atividade de risco (art. 927 par. único) = OBJETIVA mesmo sem lei específica.** Inovação do CC/02.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 5 (fatos jurídicos):** prescrição da reparação civil = 3 anos (art. 206 §3º V).' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 7 (inadimplemento contratual):** responsabilidade contratual segue regras próprias (arts. 389+); STJ tende a aplicar 3 anos a ambas (recurso repetitivo).' },
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 2 (pessoas naturais):** menor responde subsidiariamente (928); pais objetivamente (932 I + 933).' },
          { type: 'box', kind: 'conexao', text: '**Direito Administrativo:** responsabilidade do Estado (art. 37 §6º CF).' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 20 (ACP):** ações coletivas frequentemente tratam de responsabilidade civil (improbidade, ambiental, consumidor).' }
        ]
      }
    ]
  },
  {
    id: 'civ-12-empresa',
    num: 12, materia: 'civil',
    title: 'Direito de empresa',
    edital: '3.1.12',
    editalText: 'Empresário. Sociedade. Estabelecimento. Nome empresarial. EIRELI/SLU. Falência e recuperação (noções).',
    size: 'Médio',
    schedule: 'Mês 3 da Fase 3 (fev/2027) — semana 2-3',
    advantage: null,
    sections: [
      {
        h: 'Foco central',
        items: [
          { type: 'p', text: 'O CC/02 absorveu o **Direito Empresarial** no Livro II da Parte Especial (arts. 966-1.195) — adotou a **TEORIA DA EMPRESA** (italiana) em substituição à teoria dos atos de comércio. Empresário é "quem exerce profissionalmente atividade econômica organizada para a produção ou circulação de bens ou de serviços" (art. 966).' },
          { type: 'p', text: 'Cinco temas centrais: (1) **Empresário individual × sociedade empresária × sociedade simples**; (2) **Tipos societários** (Ltda, S.A., SLU); (3) **Estabelecimento** (universalidade de fato, art. 1.142+); (4) **Nome empresarial** (firma × denominação); (5) **Falência/recuperação** (noções gerais — Lei 11.101/05).' },
          { type: 'p', text: 'A Lei 13.874/19 introduziu a **SLU (Sociedade Limitada Unipessoal)** e a Lei 14.382/22 extinguiu a EIRELI. Reformas do "Marco Legal" buscam simplificar a vida empresarial.' }
        ]
      },
      {
        h: 'Lei seca primária',
        items: [
          { type: 'h', text: 'Empresário (arts. 966-980)' },
          { type: 'list', items: [
            '**Art. 966 caput** — empresário: profissionalmente, atividade econômica organizada para produção ou circulação de bens/serviços',
            '**Art. 966 par. único** — NÃO é empresário quem exerce profissão INTELECTUAL, científica, literária, artística, ainda com auxiliares — salvo se elemento de empresa',
            '**Art. 967** — registro do empresário individual no Registro Público de Empresas Mercantis (Junta Comercial)',
            '**Art. 970** — tratamento favorecido a ME e EPP (LC 123/06)'
          ] },
          { type: 'h', text: 'Sociedades (arts. 981-1.094)' },
          { type: 'list', items: [
            '**Art. 981** — sociedade = pessoas que mutuamente se obrigam a contribuir para exercer atividade econômica e partilhar resultados',
            '**Art. 982** — sociedade EMPRESÁRIA: tem por objeto exercício de atividade própria de empresário (registro na Junta). SIMPLES: demais (registro no Cartório de PJs)',
            '**Tipos:** sociedade EM COMUM (irregular — sem registro), EM CONTA DE PARTICIPAÇÃO, SIMPLES (cartório), LIMITADA (LTDA), por AÇÕES (Lei 6.404/76 — S.A.), em NOME COLETIVO, em COMANDITA SIMPLES e por AÇÕES, COOPERATIVA',
            '**Art. 1.052** — LIMITADA: responsabilidade limitada ao capital social; sócios respondem solidariamente pela integralização',
            '**Art. 1.052 §1º (Lei 13.874/19)** — Sociedade Limitada Unipessoal (SLU) — limitada com 1 sócio'
          ] },
          { type: 'h', text: 'Estabelecimento (arts. 1.142-1.149)' },
          { type: 'list', items: [
            '**Art. 1.142** — estabelecimento = complexo de bens organizados para exercício da empresa, por empresário ou sociedade',
            '**Trespasse (art. 1.144)** — alienação do estabelecimento; eficácia perante credores depende de PUBLICAÇÃO + ANUÊNCIA expressa OU tácita (em 30 dias)',
            '**Art. 1.146** — adquirente do estabelecimento responde pelo pagamento dos débitos anteriores ao trespasse, regularmente CONTABILIZADOS',
            '**Art. 1.147** — não havendo permissão expressa, alienante NÃO PODE concorrer com o adquirente em prazo de 5 anos (cláusula de não-concorrência implícita)'
          ] },
          { type: 'h', text: 'Nome empresarial (arts. 1.155-1.168)' },
          { type: 'list', items: [
            '**Art. 1.155** — nome empresarial = firma OU denominação',
            '**FIRMA:** nome do empresário (individual) ou de UM ou MAIS sócios (firma social)',
            '**DENOMINAÇÃO:** designação genérica + indicação do objeto social — usada nas S.A., obrigatoriamente; LTDA pode ser firma ou denominação',
            '**Princípios:** novidade (art. 1.163) + veracidade'
          ] }
        ]
      },
      {
        h: 'Pontos críticos para prova',
        items: [
          { type: 'h', text: 'Empresário × profissional intelectual (art. 966 par. único)' },
          { type: 'p', text: 'O CC/02 RETIROU os profissionais intelectuais (médicos, advogados, escritores, artistas) do conceito de empresário. Exceção: quando o exercício da profissão **constituir elemento de empresa** — quando a atividade pessoal se subordina a uma organização empresarial (ex: clínica médica organizada como empresa). Cobrado em provas.' },
          { type: 'box', kind: 'atencao', text: '**Profissional intelectual NÃO é empresário** (art. 966 par. único), salvo se constituir elemento de empresa. Banca arma essa pegadinha.' },
          { type: 'h', text: 'EIRELI extinta — SLU substituiu' },
          { type: 'p', text: '**Lei 14.382/22** revogou expressamente a EIRELI (CC art. 980-A). EIRELIs existentes foram automaticamente convertidas em SLU (Sociedade Limitada Unipessoal — Lei 13.874/19). SLU NÃO exige capital mínimo (diferente da antiga EIRELI, que exigia 100 SM).' },
          { type: 'box', kind: 'atencao', text: '**EIRELI NÃO EXISTE MAIS** (Lei 14.382/22). Hoje só SLU. Erro frequente em concursos.' },
          { type: 'h', text: 'Trespasse — anuência dos credores' },
          { type: 'p', text: 'Para o trespasse (alienação do estabelecimento) ser eficaz perante credores: publicação no Diário Oficial + ANUÊNCIA dos credores (expressa ou tácita — silêncio em 30 dias = anuência). Sem isso, contratos pendentes não se transferem automaticamente.' },
          { type: 'h', text: 'Cláusula de não-concorrência (art. 1.147)' },
          { type: 'p', text: 'A lei cria por DEFAULT uma cláusula de não-concorrência: alienante de estabelecimento não pode concorrer com o adquirente por 5 anos. Pode ser afastada por cláusula expressa em sentido contrário.' },
          { type: 'h', text: 'Falência e recuperação (Lei 11.101/05)' },
          { type: 'p', text: 'Aplicáveis ao EMPRESÁRIO E SOCIEDADE EMPRESÁRIA — não a sociedades simples nem a profissionais liberais. **3 institutos:** (1) **Recuperação JUDICIAL** (art. 47-69) — devedor em crise apresenta plano para credores aprovarem; (2) **Recuperação EXTRAJUDICIAL** (art. 161-167) — acordo direto com credores, homologado pelo juiz; (3) **FALÊNCIA** (art. 75+) — execução coletiva concursal — devedor empresário insolvente.' }
        ]
      },
      {
        h: 'Macetes e mnemônicos',
        items: [
          { type: 'box', kind: 'macete', text: '**Profissional intelectual NÃO é empresário** (art. 966 par. único). Salvo se elemento de empresa.' },
          { type: 'box', kind: 'macete', text: '**EIRELI extinta. SLU vigente.** (Lei 14.382/22 + 13.874/19).' },
          { type: 'box', kind: 'macete', text: '**Trespasse: PUBLICAÇÃO + anuência (expressa ou silêncio em 30 dias).**' },
          { type: 'box', kind: 'macete', text: '**Não-concorrência implícita: 5 anos** (art. 1.147).' },
          { type: 'box', kind: 'macete', text: '**Falência só para EMPRESÁRIO/sociedade empresária.** Sociedade simples NÃO falir.' }
        ]
      },
      {
        h: 'Pegadinhas de prova',
        items: [
          { type: 'box', kind: 'atencao', text: '**Profissional intelectual (advogado, médico) NÃO é empresário** — salvo elemento de empresa.' },
          { type: 'box', kind: 'atencao', text: '**SLU não tem capital mínimo** — diferente da extinta EIRELI (que exigia 100 SM).' },
          { type: 'box', kind: 'atencao', text: '**Sociedade simples NÃO falir** — só empresária/empresário individual está sujeito ao regime falimentar.' },
          { type: 'box', kind: 'atencao', text: '**Adquirente do estabelecimento responde por débitos CONTABILIZADOS** (art. 1.146); por dívidas trabalhistas e tributárias, regras especiais ampliam responsabilidade.' }
        ]
      },
      {
        h: 'Conexões com outros tópicos',
        items: [
          { type: 'box', kind: 'conexao', text: '**Tópico Civ 3 (PJ):** SLU é tipo societário unipessoal limitado. Personalidade jurídica e desconsideração aplicam-se.' },
          { type: 'box', kind: 'conexao', text: '**Tópico PC 15 (execução):** falência é execução coletiva concursal; rege-se pela Lei 11.101/05.' },
          { type: 'box', kind: 'conexao', text: '**Direito Tributário:** sucessão de empresas tem regime tributário específico (CTN art. 133).' }
        ]
      }
    ]
  },
  {
    id: 'civ-13-direitos-reais',
    num: 13, materia: 'civil',
    title: 'Direitos reais — posse e propriedade',
    edital: '3.1.13',
    editalText: 'Posse. Propriedade. Aquisição e perda. Função social. Usucapião. Direitos de vizinhança.',
    size: '', schedule: '', advantage: null,
    outline: [
      'Posse — teorias (Savigny, Ihering); classificação',
      'Efeitos da posse — proteção, frutos, benfeitorias, indenização',
      'Ações possessórias — fungibilidade',
      'Propriedade — atributos e função social',
      'Aquisição da propriedade imóvel — registro, acessão, usucapião',
      'Usucapião — espécies (extraordinária, ordinária, especial urbana, rural, familiar, coletiva)',
      'Perda da propriedade',
      'Direitos de vizinhança — uso anormal, passagem forçada, águas, limites'
    ],
    sections: []
  },
  {
    id: 'civ-14-direitos-reais-garantia',
    num: 14, materia: 'civil',
    title: 'Direitos reais sobre coisa alheia e direitos reais de garantia',
    edital: '3.1.14',
    editalText: 'Superfície, servidões, usufruto, uso, habitação, concessão de uso. Penhor, hipoteca, anticrese. Alienação fiduciária.',
    size: '', schedule: '', advantage: null,
    outline: [
      'Direitos reais sobre coisa alheia — superfície, servidões, usufruto, uso, habitação',
      'Concessão de uso especial para fins de moradia',
      'Direitos reais de garantia — penhor, hipoteca, anticrese',
      'Alienação fiduciária em garantia — móvel (Lei 4.728/65) e imóvel (Lei 9.514/97)',
      'Princípios — publicidade, especialidade'
    ],
    sections: []
  },
  {
    id: 'civ-15-familia-geral',
    num: 15, materia: 'civil',
    title: 'Direito de família — casamento, união estável, regime de bens',
    edital: '3.1.15',
    editalText: 'Casamento — capacidade, impedimentos, formalidades, efeitos. União estável. Regime de bens.',
    size: '', schedule: '', advantage: null,
    outline: [
      'Casamento — habilitação, celebração, prova',
      'Capacidade núbil; impedimentos × causas suspensivas',
      'Efeitos pessoais e patrimoniais',
      'Regimes de bens — comunhão parcial, universal, separação, participação final',
      'Pacto antenupcial',
      'União estável — requisitos (CC art. 1.723) e efeitos',
      'Casamento e união homoafetiva (ADI 4.277, RE 646.721)',
      'Dissolução — divórcio direto (EC 66/2010)'
    ],
    sections: []
  },
  {
    id: 'civ-16-familia-especifico',
    num: 16, materia: 'civil',
    title: 'Família — alimentos, filiação, tutela e curatela',
    edital: '3.1.16',
    editalText: 'Filiação. Reconhecimento. Adoção. Poder familiar. Alimentos. Tutela, curatela, guarda.',
    size: '', schedule: '', advantage: null,
    outline: [
      'Filiação — presunções (art. 1.597); socioafetividade; multiparentalidade (RE 898.060)',
      'Reconhecimento de filhos',
      'Adoção (Lei 12.010/09) — requisitos',
      'Poder familiar — exercício, suspensão, destituição',
      'Alimentos — pressupostos, espécies (provisionais, provisórios, definitivos)',
      'Binômio necessidade × possibilidade × razoabilidade',
      'Prisão civil do alimentante (Súmula 309/STJ)',
      'Tutela × curatela × guarda',
      'Tomada de decisão apoiada (Lei 13.146/15)'
    ],
    sections: []
  },
  {
    id: 'civ-17-sucessoes',
    num: 17, materia: 'civil',
    title: 'Sucessões',
    edital: '3.1.17',
    editalText: 'Sucessão legítima e testamentária. Inventário. Partilha. Colação. Sonegados. Petição de herança.',
    size: '', schedule: '', advantage: null,
    outline: [
      'Abertura — saisine (CC art. 1.784)',
      'Ordem de vocação hereditária',
      'Direito do cônjuge × companheiro (RE 878.694)',
      'Sucessão testamentária — formas (público, cerrado, particular)',
      'Legítima × disponível; deserdação',
      'Inventário judicial × extrajudicial (Lei 11.441/07)',
      'Partilha amigável × judicial',
      'Colação, sonegados, petição de herança',
      'Cessão de direitos hereditários'
    ],
    sections: []
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
  { id: 37, topic: 20, q: 'Diferença entre TAC e ANPC?', a: 'TAC (Lei 7.347 §6º): compromisso de adequação à lei, dispensa responsabilização. ANPC (Lei 14.230/21): pressupõe responsabilização por improbidade, requer integral devolução + reparação + homologação judicial.', tags: ['ACP', 'improbidade'] },
  // ====== Bloco 1 — tópicos 1-3 ======
  { id: 38, topic: 1, q: 'A vedação à decisão-surpresa (art. 10 CPC) vale para matérias de ordem pública?', a: 'SIM. Mesmo em matérias cognoscíveis de ofício (incompetência absoluta, prescrição, etc.), o juiz deve dar oportunidade de manifestação às partes (REsp 1.676.027 STJ).', tags: ['CPC', 'cooperacao'] },
  { id: 39, topic: 1, q: 'Os 4 deveres do juiz na cooperação (mnemônico EPCA)?', a: 'Esclarecer, Prevenir, Consultar e Auxiliar (Mitidiero/Marinoni). Concretizam o art. 6º CPC.', tags: ['CPC', 'cooperacao'] },
  { id: 40, topic: 1, q: '3 modalidades do diálogo das fontes (Cláudia Lima Marques)?', a: 'CCC: Coerência (uma lei serve de base à outra), Complementaridade/subsidiariedade (uma supre a outra), Coordenação/influência (princípios cruzados).', tags: ['principios'] },
  { id: 41, topic: 1, q: 'Aplicação imediata da lei processual = retroatividade?', a: 'NÃO. Princípio do isolamento dos atos processuais (art. 14 CPC): nova lei aplica-se aos atos a praticar, preservando os já praticados.', tags: ['CPC', 'lei-processual'] },
  { id: 42, topic: 2, q: 'Casos paradigmáticos da Corte IDH × Brasil (mnemônico DGGFH)?', a: 'Damião Ximenes (saúde mental), Gomes Lund (anistia), Garibaldi (impunidade), Favela Nova Brasília (tortura), Vladimir Herzog (imprescritibilidade crimes contra humanidade).', tags: ['DH'] },
  { id: 43, topic: 2, q: 'O que é controle de convencionalidade?', a: 'Dever do juiz de aferir compatibilidade da lei interna com tratados de DH. Se a lei contraria tratado supralegal, deixa de ser aplicada (Almonacid Arellano vs. Chile, 2006).', tags: ['DH', 'convencionalidade'] },
  { id: 44, topic: 2, q: 'Quais 3 tratados têm status de EC no Brasil hoje?', a: 'Convenção sobre Direitos das PCD (Decreto 6.949/09), Tratado de Marraqueche (Decreto 9.522/18) e Convenção Interamericana contra o Racismo (Decreto 10.932/22).', tags: ['DH'] },
  { id: 45, topic: 2, q: 'Contraditório formal × substancial?', a: 'Formal = oportunidade de manifestação. Substancial (CPC art. 9º) = direito de INFLUENCIAR a decisão; juiz deve enfrentar argumentos (art. 489 §1º IV).', tags: ['principios', 'contraditorio'] },
  { id: 46, topic: 3, q: '4 características da jurisdição (mnemônico SIDU)?', a: 'Substitutividade (decide pelas partes), Inércia (não age de ofício), Definitividade (coisa julgada), Unidade (jurisdição é uma só).', tags: ['jurisdicao'] },
  { id: 47, topic: 3, q: 'O que é interesse de agir (3 elementos UNA)?', a: 'Utilidade do provimento + Necessidade da provocação + Adequação da via processual escolhida.', tags: ['acao'] },
  { id: 48, topic: 3, q: 'Diferença entre carência da ação e improcedência?', a: 'Carência (485 VI) = sem mérito, coisa julgada apenas formal, admite repropositura. Improcedência (487 I) = COM mérito, coisa julgada material.', tags: ['acao'] },

  // ====== Bloco 2 — tópicos 4-5 ======
  { id: 49, topic: 4, q: '5 espécies de intervenção no CPC/15 (mnemônico ADCIA)?', a: 'Assistência (simples e litisconsorcial), Denunciação da lide, Chamamento ao processo, IDPJ, Amicus curiae. Oposição saiu (virou ação autônoma).', tags: ['intervencao'] },
  { id: 50, topic: 4, q: '4 modalidades de desconsideração da PJ (DIIE)?', a: 'Direta (sócios pela PJ), Inversa (PJ pelo sócio), Indireta (grupos econômicos), Expansiva (sucessão de fato).', tags: ['IDPJ'] },
  { id: 51, topic: 4, q: 'Litisconsórcio necessário × unitário?', a: 'NECESSÁRIO: lei ou relação material EXIGE a presença de todos. UNITÁRIO: decisão DEVE ser idêntica para todos. Dimensões INDEPENDENTES (pode haver facultativo unitário).', tags: ['litisconsorcio'] },
  { id: 52, topic: 4, q: 'Curador especial (CPC art. 72) é função de quem?', a: 'DEFENSORIA PÚBLICA. Exercida em 4 hipóteses: réu preso revel, edital revel, hora certa revel, incapaz sem representante.', tags: ['curador-especial', 'DP'] },
  { id: 53, topic: 5, q: 'Distinção entre as 3 funções essenciais (MP, Adv Pública, Defensoria)?', a: 'MP defende o SISTEMA (ordem jurídica + indisponíveis); Adv Pública defende o ENTE PÚBLICO; Defensoria defende o NECESSITADO.', tags: ['MP', 'AP', 'DP'] },
  { id: 54, topic: 5, q: 'Hipóteses de intervenção do MP como fiscal (PIM)?', a: 'CPC art. 178: P (interesse Público/social), I (incapaz), M (Movimentos coletivos pela posse de terra rural ou urbana). Súmula 189: NÃO em execução fiscal.', tags: ['MP'] },
  { id: 55, topic: 5, q: 'Prazo do MP/DP/AP - acumulam dobra com art. 229?', a: 'NÃO. A dobra das funções essenciais (180/183/186) não se acumula com a dobra do art. 229 (litisconsortes com advogados diferentes).', tags: ['MP', 'prazos'] },
  { id: 56, topic: 5, q: 'STJ Súmula 226 (MP)?', a: 'O MP tem legitimidade para ACP em defesa de direitos individuais homogêneos, ainda que disponíveis. Marco da legitimação ampla.', tags: ['MP', 'ACP'] },

  // ====== Bloco 3 — tópicos 6-9 ======
  { id: 57, topic: 6, q: '5 critérios determinativos da competência?', a: 'ABSOLUTA: Matéria, Pessoa, Função. RELATIVA: Valor, Território (em regra). Mnemônico MaPeFun-VaTe.', tags: ['competencia'] },
  { id: 58, topic: 6, q: 'Única hipótese em que o juiz declara incompetência relativa de ofício?', a: 'Cláusula abusiva de eleição de foro em contrato de adesão (art. 63 §3º), antes da citação. Exceção à Súmula 33/STJ.', tags: ['competencia'] },
  { id: 59, topic: 6, q: 'O que é translatio iudicii?', a: 'Aproveitamento dos atos NÃO DECISÓRIOS do juízo incompetente (CPC art. 64 §4º). Inovação do CPC/15 — antes a incompetência absoluta nulificava tudo.', tags: ['competencia'] },
  { id: 60, topic: 6, q: 'STJ Súmula 489?', a: 'Reconhecida a continência, devem ser reunidas na JF as ACPs propostas nesta e na Justiça Estadual. Força atrativa da JF.', tags: ['competencia', 'ACP'] },
  { id: 61, topic: 7, q: 'Atipicidade dos meios executivos - requisitos do Tema 1.137/STJ?', a: 'CNH, passaporte, cartão de crédito (art. 139 IV) cabíveis em quantia certa, mas com: esgotamento de meios típicos + patrimônio compatível ocultado + decisão fundamentada + proporcionalidade.', tags: ['juiz', 'execucao'] },
  { id: 62, topic: 7, q: 'Conciliador × Mediador?', a: 'CONCILIADOR: causas SEM vínculo prévio (consumo); pode propor solução. MEDIADOR: causas COM vínculo (família, condomínio); restaura comunicação, NÃO propõe.', tags: ['juiz', 'mediacao'] },
  { id: 63, topic: 7, q: 'Responsabilidade civil do juiz (art. 143) - quando?', a: 'DRO: Dolo ou fraude; Recusa, Omissão ou retardamento sem justo motivo. Hipóteses TAXATIVAS — responsabilidade pessoal e direta.', tags: ['juiz'] },
  { id: 64, topic: 8, q: 'O que são NJP (CPC art. 190)?', a: 'Negócios jurídicos processuais atípicos: partes plenamente capazes podem convencionar sobre ônus, poderes, faculdades e deveres processuais (em causas que admitam autocomposição).', tags: ['atos', 'NJP'] },
  { id: 65, topic: 8, q: 'Prazo em dobro do art. 229 - aplica em autos eletrônicos?', a: 'NÃO (Tema 1.024/STJ). A dobra para litisconsortes com advogados diferentes só vale em autos físicos. Pegadinha clássica.', tags: ['prazos'] },
  { id: 66, topic: 8, q: '4 princípios das nulidades (CIPA)?', a: 'Causalidade (contamina dependentes), Instrumentalidade (atinge fim = válido), Prejuízo (sem dano = sem nulidade), Aproveitamento (juiz prefere sanar).', tags: ['nulidades'] },
  { id: 67, topic: 8, q: 'ED interrompem ou suspendem o prazo dos demais recursos?', a: 'INTERROMPEM (CPC art. 1.026), para TODAS as partes. Mudança em relação ao CPC/73 (que apenas suspendia).', tags: ['atos', 'recursos'] },
  { id: 68, topic: 9, q: 'Esquema da tutela provisória (gênero/fundamentos/naturezas)?', a: 'GÊNERO: tutela provisória. 2 FUNDAMENTOS: urgência e evidência. 2 NATUREZAS: antecipada (satisfativa) e cautelar (conservativa).', tags: ['tutela'] },
  { id: 69, topic: 9, q: '4 hipóteses de tutela de evidência (art. 311)?', a: 'I) abuso de defesa/protelatório; II) tese repetitivo/SV + comprovação documental; III) reipersecutório com prova documental; IV) inicial documental + sem prova capaz de gerar dúvida.', tags: ['tutela'] },
  { id: 70, topic: 9, q: 'Quando ocorre estabilização (art. 304)?',  a: 'Quando o réu NÃO interpõe AGRAVO DE INSTRUMENTO contra a tutela antecipada antecedente (Tema 1.099/STJ). Outras impugnações não impedem.', tags: ['tutela'] },
  { id: 71, topic: 9, q: 'Estabilização gera coisa julgada material?', a: 'NÃO. É imutabilidade processual relativa. Por 2 anos (art. 304 §5º) cabe ação revisional. Após, decadência do direito de revisão.', tags: ['tutela'] },

  // ====== Bloco 4 — tópicos 10-11 ======
  { id: 72, topic: 10, q: 'Marcos da formação - autor × réu?', a: 'AUTOR: propositura (protocolo da PI - art. 312). RÉU: citação válida (art. 240). Antes da citação, réu ainda não está em juízo.', tags: ['formacao'] },
  { id: 73, topic: 10, q: 'Decadência e prescrição extinguem com ou sem mérito?', a: 'COM MÉRITO (art. 487 II) - geram coisa julgada MATERIAL. Erro frequente classificar como sem mérito (485).', tags: ['extincao'] },
  { id: 74, topic: 10, q: 'O que é perempção (art. 486 §3º)?', a: 'Sanção: 3 abandonos pelo autor (485 III) = autor PROIBIDO de propor nova ação contra o mesmo réu, com o mesmo objeto. Única exceção à regra de repropositura.', tags: ['extincao'] },
  { id: 75, topic: 11, q: 'Audiência do art. 334 só dispensa quando?', a: 'Quando AMBAS as partes manifestam desinteresse expresso (art. 334 §4º I) OU se não admitir autocomposição (II). Apenas uma não basta.', tags: ['procedimento-comum'] },
  { id: 76, topic: 11, q: '6 hipóteses de fundamentação inadequada (art. 489 §1º)?', a: 'I) reprodução normativa; II) conceito indeterminado sem aplicação; III) motivação genérica; IV) não enfrentar argumento; V) precedente sem demonstrar aplicação; VI) ignorar precedente sem distinguir/superar.', tags: ['sentenca'] },
  { id: 77, topic: 11, q: '4 mitigações ao efeito material da revelia (art. 345)?', a: 'I) litisconsorte que contesta sobre fato comum; II) direitos indisponíveis; III) PI sem instrumento indispensável; IV) inverossimilhança ou contradição com prova nos autos.', tags: ['revelia'] },
  { id: 78, topic: 11, q: 'Coisa julgada coletiva (mnemônico DIPR)?', a: 'DIfusos e coletivos = secundum eventum PRobationis (improc por insuf prova permite reajuizar). Individual homogêneo = só beneficia (in utilibus).', tags: ['coletivo', 'coisa-julgada'] },
  { id: 79, topic: 11, q: 'Limites da remessa necessária (CPC art. 496 §3º)?', a: 'União: até 1.000 SM. Estados/DF/Capitais: até 500 SM. Municípios não-capitais: até 100 SM. Abaixo, dispensada.',  tags: ['remessa'] },
  { id: 80, topic: 11, q: 'Improcedência liminar (art. 332) - cabe retratação na apelação?', a: 'SIM (art. 332 §3º) - ÚNICO caso na apelação. Se juiz não retrata, réu é citado para contrarrazões.', tags: ['procedimento-comum'] },

  // ====== Bloco 5 — tópicos 12-15 ======
  { id: 81, topic: 12, q: 'Multa do art. 523 §1º incide automaticamente?', a: 'SIM (Tema 962/STJ): incide automaticamente após 15 dias do prazo, INDEPENDENTEMENTE de intimação pessoal do devedor. Basta a do advogado.', tags: ['cumprimento'] },
  { id: 82, topic: 12, q: 'Limites de RPV (federal/estadual/municipal)?', a: 'Federal: 60 SM. Estadual: 40 SM. Municipal: 30 SM (regra; entes podem fixar diferente em legislação local).', tags: ['cumprimento', 'fazenda'] },
  { id: 83, topic: 12, q: 'STJ Súmula 309 (alimentos)?', a: 'A prisão civil cabe pelo débito das 3 ÚLTIMAS prestações ANTERIORES ao ajuizamento + parcelas vincendas até o pagamento. Único caso de prisão civil constitucional ainda existente.', tags: ['alimentos'] },
  { id: 84, topic: 13, q: 'Possessória: força nova × velha?', a: 'NOVA: até 1 ano e 1 dia da turbação/esbulho - rito especial + LIMINAR. VELHA: após esse prazo - procedimento comum, só tutela ordinária.', tags: ['possessorias'] },
  { id: 85, topic: 13, q: 'Inventário extrajudicial - requisitos?', a: 'Lei 11.441/07: maiores capazes + consenso + sem testamento + sem incapazes. Em cartório, por escritura pública, com advogado.', tags: ['especiais'] },
  { id: 86, topic: 13, q: 'Oposição é intervenção de terceiros no CPC/15?', a: 'NÃO! Virou AÇÃO AUTÔNOMA (arts. 682-686). Saiu do rol de intervenções. Erro frequente em prova.', tags: ['oposicao'] },
  { id: 87, topic: 14, q: 'O que é decisão por equidade na jurisdição voluntária?', a: 'CPC art. 723 §único: o juiz NÃO fica restrito à legalidade estrita - pode adotar a solução mais conveniente e oportuna. Inovação do CPC/15.', tags: ['voluntaria'] },
  { id: 88, topic: 14, q: 'Curatela após Estatuto da PCD (Lei 13.146/15)?', a: 'EXCEPCIONAL e LIMITADA a atos PATRIMONIAIS. Atos existenciais (casar, votar, ter filhos) preservados. Tomada de Decisão Apoiada é instituto menos invasivo.', tags: ['voluntaria', 'curatela'] },
  { id: 89, topic: 15, q: 'Cumprimento × Execução autônoma?', a: 'CUMPRIMENTO (513+): título JUDICIAL, fase do mesmo processo. EXECUÇÃO (771+): título EXTRAJUDICIAL, processo autônomo. Embargos sem garantia (CPC/15) × com garantia (CPC/73).', tags: ['execucao'] },
  { id: 90, topic: 15, q: 'Salário acima de 50 SM é penhorável?', a: 'SIM, no excedente (art. 833 §2º + Súmula 394/STJ). Também penhorável para alimentos (sem limite). Erro: dizer impenhorável em qualquer hipótese.', tags: ['execucao', 'penhora'] },
  { id: 91, topic: 15, q: 'Fraude à execução × fraude contra credores?', a: 'À EXECUÇÃO: vício processual, INEFICÁCIA do ato (CPC 792). CONTRA CREDORES: vício material, ANULABILIDADE (CC 158-165, exige ação pauliana com consilium fraudis).', tags: ['execucao', 'fraude'] },

  // ====== Bloco 6 — tópico 16 ======
  { id: 92, topic: 16, q: 'O que é taxatividade mitigada (Tema 988/STJ)?', a: 'O rol do art. 1.015 é taxativo, mas admite-se interpretação EXTENSIVA por analogia em casos de URGÊNCIA decorrente da inutilidade do julgamento da apelação.', tags: ['recursos'] },
  { id: 93, topic: 16, q: 'O que é teoria da causa madura (art. 1.013 §3º)?', a: 'Em apelação contra sentença TERMINATIVA (sem mérito), o tribunal pode julgar DIRETO o mérito se a causa estiver pronta. Inversão do CPC/73.', tags: ['recursos', 'apelacao'] },
  { id: 94, topic: 16, q: 'Ratio decidendi × obiter dictum?', a: 'RATIO = fundamento JURÍDICO determinante (vincula). OBITER = observação lateral (não vincula). Distinção essencial no sistema de precedentes.', tags: ['precedentes'] },
  { id: 95, topic: 16, q: 'Distinguishing × Overruling?', a: 'DISTINGUISHING = caso concreto DIFERE do precedente em aspecto relevante - afasta aplicação. OVERRULING = SUPERAÇÃO/abandono do precedente pelo próprio tribunal.', tags: ['precedentes'] },
  { id: 96, topic: 16, q: 'IRDR - 2 requisitos cumulativos (art. 976)?', a: '(1) EFETIVA REPETIÇÃO de processos com idêntica questão UNICAMENTE de direito; (2) RISCO DE OFENSA à isonomia e segurança jurídica.', tags: ['IRDR'] },
  { id: 97, topic: 16, q: 'Sucumbência recursal - quando se aplica?', a: 'CPC art. 85 §11: na decisão do recurso, o tribunal MAJORA os honorários (até o dobro do limite legal) - mesmo em recurso parcialmente provido. Aplica em apelação, ED, AI, AInt.', tags: ['recursos', 'honorarios'] },

  // ====== Bloco 7 — tópicos 17-20 ======
  { id: 98, topic: 17, q: '3 institutos da assistência (mnemônico GAJ)?', a: 'Gratuidade (não pagar custas), Assistência judiciária (advogado pago pelo Estado), assistência Jurídica integral (DP - orientação + judicial + extrajudicial).', tags: ['assistencia'] },
  { id: 99, topic: 17, q: 'Beneficiário condenado em sucumbência - paga?', a: 'NÃO de imediato. Exigibilidade SUSPENSA por 5 anos (art. 98 §3º). Cessada hipossuficiência no prazo, exige-se. Esgotado sem mudança, prescreve.', tags: ['assistencia'] },
  { id: 100, topic: 18, q: 'Limites JEC/JEF/JEFP?', a: 'JEC: 40 SM. JEF: 60 SM. JEFP: 60 SM (só quem demanda CONTRA ente público).', tags: ['juizados'] },
  { id: 101, topic: 18, q: 'Advogado dispensado no JEC até quanto?', a: '20 SM (art. 9º Lei 9.099). Acima é OBRIGATÓRIO. Defensoria sem limites.', tags: ['juizados'] },
  { id: 102, topic: 18, q: 'PJ pode ser autora no JEC?', a: 'APENAS ME, EPP, MEI, OSCIP, sociedades de crédito ao microempreendedor (art. 8º §1º). PJ comum NÃO entra.', tags: ['juizados'] },
  { id: 103, topic: 19, q: '3 pressupostos do MS (DLA-AAI)?', a: 'Direito Líquido e Certo (prova pré-constituída) + Ato de Autoridade pública + Abusividade ou Ilegalidade.', tags: ['MS'] },
  { id: 104, topic: 19, q: 'Súmula 269/STF (MS)?', a: 'O MS não substitui ação de cobrança. Conjugada com Súmula 271: MS não produz efeitos patrimoniais pretéritos.', tags: ['MS'] },
  { id: 105, topic: 19, q: 'MS coletivo - legitimados (PASE)?', a: 'CF art. 5º LXX: Partido com representação no CN; Associação >1 ano em atividade; Sindicato; Entidade de classe. Defensoria NÃO está no rol.', tags: ['MS', 'coletivo'] },
  { id: 106, topic: 19, q: 'O que é tese concretista intermediária no MI?', a: 'Lei 13.300/16: STF fixa PRAZO para o omisso atuar. Não cumprido, STF SUPRE a omissão para o impetrante (art. 8º). Casos paradigma: MI 670, 708, 712 (greve servidores).', tags: ['MI'] },
  { id: 107, topic: 20, q: 'Legitimados ACP (mnemônico MP-DEAUFA)?', a: 'MP, Defensoria, Entes federativos (U/E/M), Autarquias/EP/SEM/Fundações, Associações >1 ano com pertinência temática.', tags: ['ACP'] },
  { id: 108, topic: 20, q: 'Tema 1.075/STF (art. 16 LACP)?', a: 'INCONSTITUCIONAL a limitação territorial da coisa julgada na ACP. Hoje a coisa julgada é AMPLA, respeitando apenas o âmbito do interesse tutelado.', tags: ['ACP'] },
  { id: 109, topic: 20, q: 'Improbidade após Lei 14.230/21 - culpa cabe?', a: 'NÃO. Apenas DOLO em todas as modalidades (art. 1º §1º). MP é único legitimado (art. 17). STF (ADIs 7.236, 7.235, 7.226) aplicou irretroatividade favorável.', tags: ['improbidade'] },
  { id: 110, topic: 20, q: 'Tema 897/STF (ressarcimento)?', a: 'Imprescritível APENAS para ressarcimento por ato DOLOSO de improbidade. Atos culposos (após Lei 14.230, sem improbidade) prescrevem normalmente.', tags: ['improbidade'] },
  { id: 111, topic: 20, q: 'ANPC × TAC?', a: 'ANPC (Lei 14.230 art. 17-B): pressupõe RECONHECIMENTO da improbidade + sanção atenuada + homologação judicial. TAC (Lei 7.347 §6º): compromisso PROSPECTIVO de adequação, sem reconhecimento de ato ímprobo.', tags: ['improbidade', 'ACP'] },
  { id: 112, topic: 20, q: 'Habeas Data - pressuposto para impetrar?', a: 'PRÉVIA RECUSA administrativa de informações (Súmula 2/STJ). Não basta querer dado - precisa ter pedido formalmente e recebido negativa ou silêncio.', tags: ['HD'] },
  { id: 113, topic: 20, q: 'Ação Popular - quem pode propor?', a: 'Apenas o CIDADÃO (com título eleitoral em dia). PJ NÃO pode (Súmula 365/STF). Custas isentas, salvo má-fé.', tags: ['popular'] },
  { id: 114, topic: 20, q: 'Coisa julgada na Ação Popular?', a: 'Secundum eventum probationis: improcedência por insuficiência de provas NÃO faz coisa julgada material - pode ser reproposta com prova nova (Lei 4.717 art. 18).', tags: ['popular'] },
  { id: 115, topic: 20, q: 'Inquérito Civil - exclusivo de quem?', a: 'Do MP (CF art. 129 III + Resolução 23/2007 CNMP). Instrumento extrajudicial inquisitivo, sigiloso, sem contraditório obrigatório. Pode resultar em ACP, arquivamento ou TAC.', tags: ['inquerito-civil'] },
  { id: 116, topic: 18, q: 'Princípios do JEC (mnemônico OSICE)?', a: 'Oralidade, Simplicidade, Informalidade, Celeridade, Economia processual (Lei 9.099 art. 2º).', tags: ['juizados'] },
  { id: 117, topic: 8, q: 'Calendário processual × NJP?', a: 'CALENDÁRIO (art. 191): específico (datas para atos). NJP (art. 190): amplo (regras procedimentais). Ambos exigem capacidade, livre disposição, contraditório.', tags: ['atos', 'NJP'] },

  // ============ Bloco 8 — Fase 2 (PC 21-23) ============
  // Tópico 21 — Mediação e conciliação
  { id: 118, topic: 21, q: 'Mediação × conciliação — qual o critério legal de distinção (CPC art. 165 §§ 2º-3º)?', a: 'VÍNCULO PRÉVIO entre as partes. Mediação: TINHA relação anterior (família, vizinhança), mediador FACILITA sem sugerir. Conciliação: NÃO tinha vínculo, conciliador pode SUGERIR solução.', tags: ['fase2', 'mediacao'] },
  { id: 119, topic: 21, q: 'Quando a audiência do CPC art. 334 NÃO é realizada?', a: 'Duas hipóteses: (i) ambas as partes manifestarem desinteresse expressamente — autor na PI, réu até 10 dias antes; (ii) causa não admitir autocomposição. Em litisconsórcio, todos devem manifestar desinteresse (§6º).', tags: ['fase2', 'audiencia-334'] },
  { id: 120, topic: 21, q: 'Qual a sanção para ausência injustificada à audiência de conciliação/mediação?', a: 'Ato atentatório à dignidade da justiça (CPC art. 334 §8º): multa de até 2% sobre valor da causa ou vantagem econômica pretendida, revertida à União/Estado.', tags: ['fase2', 'mediacao', 'multa'] },
  { id: 121, topic: 21, q: 'Mediação cabe em direitos indisponíveis?', a: 'Cabe quando indisponíveis MAS transigíveis (Lei 13.140 art. 3º §§1º-2º), exigindo homologação judicial e oitiva do MP. Ex: alimentos (existência indisponível, valor transigível).', tags: ['fase2', 'mediacao', 'indisponiveis'] },
  { id: 122, topic: 21, q: 'Confidencialidade na mediação tem alguma exceção?', a: 'Sim — informação relativa a CRIME DE AÇÃO PÚBLICA (Lei 13.140 art. 30). Não se aplica a crime de ação privada. Mediador deve denunciar.', tags: ['fase2', 'mediacao', 'confidencialidade'] },
  { id: 123, topic: 21, q: 'Por quanto tempo o mediador fica impedido de atuar como árbitro/testemunha relativa ao mesmo conflito?', a: '1 ano após o encerramento da última audiência (Lei 13.140 art. 7º). Esquecer esse prazo é erro frequente.', tags: ['fase2', 'mediacao'] },

  // Tópico 22 — Arbitragem
  { id: 124, topic: 22, q: 'O que é Kompetenz-Kompetenz na arbitragem?', a: 'Princípio (Lei 9.307 art. 8º par. único): cabe ao próprio árbitro decidir sobre sua competência, inclusive sobre validade da convenção arbitral. Importação do direito alemão.', tags: ['fase2', 'arbitragem'] },
  { id: 125, topic: 22, q: 'Cláusula arbitral em contrato de adesão exige o quê?', a: 'Iniciativa do aderente OU concordância expressa em destaque + visto/assinatura específica (Lei 9.307 art. 4º §2º). Sem isso, ineficaz.', tags: ['fase2', 'arbitragem', 'adesao'] },
  { id: 126, topic: 22, q: 'Sentença arbitral interna precisa de homologação judicial?', a: 'NÃO. É título executivo judicial direto (CPC art. 515 VII + Lei 9.307 art. 31). EXCEÇÃO: sentença arbitral ESTRANGEIRA — homologação no STJ (CF art. 105 I i).', tags: ['fase2', 'arbitragem', 'sentenca'] },
  { id: 127, topic: 22, q: 'Qual o prazo da ação anulatória de sentença arbitral?', a: '90 dias DECADENCIAIS (Lei 9.307 art. 33 §1º), contados do recebimento da sentença ou da decisão dos embargos. Hipóteses taxativas no art. 32.', tags: ['fase2', 'arbitragem', 'anulatoria'] },
  { id: 128, topic: 22, q: 'Convenção de arbitragem é matéria conhecível de ofício pelo juiz?', a: 'NÃO (CPC art. 337 X + §5º). Réu deve alegar na contestação, sob pena de RENÚNCIA TÁCITA. Sem alegação, processo prossegue na Justiça Comum.', tags: ['fase2', 'arbitragem', 'competencia'] },
  { id: 129, topic: 22, q: 'Arbitragem com Adm Pública pode ser por equidade ou sigilosa?', a: 'NÃO. Lei 9.307 art. 2º §3º (alterado pela Lei 13.129/15): só DE DIREITO e com publicidade obrigatória. Sigilo é vedado.', tags: ['fase2', 'arbitragem', 'fazenda'] },

  // Tópico 23 — JEC
  { id: 130, topic: 23, q: 'Como contam os prazos no JEC?', a: 'CONTÍNUOS (corridos), não em dias úteis. Súmula CJF 99 + FONAJE 165. CPC art. 219 NÃO se aplica ao JEC.', tags: ['fase2', 'JEC', 'prazos'] },
  { id: 131, topic: 23, q: 'Quem pode ser autor no JEC (art. 8º)?', a: 'PF capaz, MEI, ME, EPP, OSCIP, sociedade de crédito ao microempreendedor. NÃO podem: incapaz, espólio, PJ comum (S.A., Ltda. de grande porte).', tags: ['fase2', 'JEC', 'partes'] },
  { id: 132, topic: 23, q: 'Sentença ilíquida cabe no JEC?', a: 'NÃO. Lei 9.099 art. 38 par. único — sentença DEVE ser sempre líquida. Se inviável, extinção art. 51 II.', tags: ['fase2', 'JEC', 'sentenca'] },
  { id: 133, topic: 23, q: 'Cabe REsp contra acórdão da Turma Recursal?', a: 'NÃO (Súmula 203/STJ). Cabe apenas RE com repercussão geral. Para divergência entre Turmas, há Pedido de Uniformização (não REsp).', tags: ['fase2', 'JEC', 'recursos'] },
  { id: 134, topic: 23, q: 'Cabe ação rescisória no JEC?', a: 'NÃO (FONAJE 44). Microssistema do JEC não admite rescisória — privilegia coisa julgada e celeridade.', tags: ['fase2', 'JEC', 'recursos'] },
  { id: 135, topic: 23, q: 'Honorários sucumbenciais no JEC: cabem?', a: 'Em 1º grau: NÃO (regra). Exceção: litigância de má-fé. NO RECURSO INOMINADO: vencido paga honorários + custas (art. 55 caput, in fine).', tags: ['fase2', 'JEC', 'honorarios'] },

  // ============ Bloco 9 — Fase 2 (PC 24-26) ============
  // Tópico 24 — JEFP
  { id: 136, topic: 24, q: 'Quem pode ser réu no JEFP (Lei 12.153/09)?', a: 'Estados, DF, Territórios, Municípios + suas autarquias, fundações e empresas públicas. NÃO inclui União/autarquias federais (essas vão para o JEF — Lei 10.259/01).', tags: ['fase2', 'JEFP'] },
  { id: 137, topic: 24, q: 'Limite de valor e tipo de competência no JEFP?', a: 'Até 60 salários-mínimos. Competência ABSOLUTA onde houver juizado instalado (art. 2º §4º) — diferente do JEC, onde regra majoritária é opção do autor.', tags: ['fase2', 'JEFP'] },
  { id: 138, topic: 24, q: 'Reexame necessário aplica-se no JEFP?', a: 'NÃO (art. 7º Lei 12.153). Sentença contra a Fazenda no JEFP NÃO depende de reexame necessário. Regra excepcional ao CPC art. 496.', tags: ['fase2', 'JEFP'] },
  { id: 139, topic: 24, q: 'Causas excluídas do JEFP — cite 3?', a: 'Mandado de segurança, desapropriação, execuções fiscais, ações coletivas/difusas/individuais homogêneas, imóveis, improbidade, anulação/cancelamento de ato administrativo (salvo previdenciário e lançamento fiscal). Art. 2º §1º.', tags: ['fase2', 'JEFP'] },

  // Tópico 25 — JEF
  { id: 140, topic: 25, q: 'Há prazo em dobro para Fazenda no JEF (Lei 10.259)?', a: 'NÃO. Art. 9º veda expressamente prazos diferenciados para a Fazenda no JEF — regra excepcional. Diferente do JEFP estadual, onde HÁ prazo em dobro (Tema 503/STF).', tags: ['fase2', 'JEF'] },
  { id: 141, topic: 25, q: 'Sobre o que é o Pedido de Uniformização (PU)?', a: 'Apenas DIREITO MATERIAL. Hipóteses: divergência entre Turmas Recursais da mesma região (TRU); de regiões diferentes (TNU); decisão TNU contrária a súmula/jurisprudência STJ (vai ao STJ — art. 14 §4º).', tags: ['fase2', 'JEF', 'PU'] },
  { id: 142, topic: 25, q: 'Quem é parte no JEF (Lei 10.259, art. 6º)?', a: 'Como rés: União, autarquias, fundações e empresas públicas FEDERAIS. Como autoras: PF, ME e EPP. Causas previdenciárias federais (INSS) são o "core" prático.', tags: ['fase2', 'JEF'] },
  { id: 143, topic: 25, q: 'RPV no JEF — limite e prazo?', a: 'Até 60 SM, prazo de pagamento de 60 dias após requisição (art. 17). Acima de 60 SM segue precatório (CF art. 100).', tags: ['fase2', 'JEF', 'RPV'] },

  // Tópico 26 — Gratuidade
  { id: 144, topic: 26, q: 'PF e PJ — quem precisa provar a hipossuficiência?', a: 'PF tem PRESUNÇÃO de hipossuficiência (art. 99 §3º). PJ deve PROVAR (Súmula 481/STJ). PJ pode ter fins lucrativos — basta demonstrar a impossibilidade.', tags: ['fase2', 'gratuidade'] },
  { id: 145, topic: 26, q: 'Beneficiário da gratuidade derrotado é condenado em honorários?', a: 'SIM. Mas a exigibilidade fica SUSPENSA por 5 anos (CPC art. 98 §3º). Se nesse período houver melhora econômica, paga; senão, prescreve.', tags: ['fase2', 'gratuidade', 'honorarios'] },
  { id: 146, topic: 26, q: 'Quando pode ser pedida a gratuidade da justiça?', a: 'A QUALQUER TEMPO (Súmula 640/STJ). Na PI, contestação, recurso, cumprimento. O critério é a situação econômica NO MOMENTO do pedido.', tags: ['fase2', 'gratuidade'] },
  { id: 147, topic: 26, q: 'Juiz pode indeferir gratuidade de ofício?', a: 'Indeferimento exige CONTRADITÓRIO PRÉVIO. Mesmo se houver elementos que indiquem falta de pressupostos, deve INTIMAR a parte para comprovar (art. 99 §2º). Indeferimento direto = nulidade.', tags: ['fase2', 'gratuidade'] },

  // ============ Bloco 10 — Fase 2 (PC 27-30) ============
  // Tópico 27 — Cooperação internacional
  { id: 148, topic: 27, q: 'Diferença entre auxílio direto e carta rogatória?', a: 'Critério (CPC art. 28): se a medida DECORRE de decisão estrangeira → carta rogatória (com exequatur do STJ). Se for ato administrativo/processual independente → auxílio direto (sem delibação, executado pela JF).', tags: ['fase2', 'cooperacao'] },
  { id: 149, topic: 27, q: 'Divórcio consensual estrangeiro precisa de homologação no STJ?', a: 'NÃO (CPC art. 961 §5º). Divórcio consensual puro produz efeitos diretos no Brasil — basta averbação no registro civil. Se houver partilha de bens controvertida, exige homologação.', tags: ['fase2', 'cooperacao'] },
  { id: 150, topic: 27, q: 'Quem homologa sentença estrangeira no Brasil?', a: 'STJ (CF art. 105 I i, após EC 45/2004). Antes era STF. Procedimento: juízo de DELIBAÇÃO (não revisa mérito — art. 964 CPC). Execução posterior: Justiça Federal (CF 109 X).', tags: ['fase2', 'cooperacao', 'STJ'] },
  { id: 151, topic: 27, q: 'O STJ revisa o mérito da sentença estrangeira na homologação?', a: 'NÃO (CPC art. 964). Apenas verifica requisitos formais e ofensa à ordem pública/soberania. É juízo de DELIBAÇÃO — controle de admissibilidade, não revisão substancial.', tags: ['fase2', 'cooperacao'] },

  // Tópico 28 — Precedentes
  { id: 152, topic: 28, q: 'Quais os 6 precedentes obrigatórios do art. 927 do CPC?', a: 'I — controle concentrado STF; II — Súmula Vinculante; III — IRDR/IAC; IV — repetitivos STJ + RG STF; V — súmulas STF/STJ; VI — orientação plenário/órgão especial (regimento).', tags: ['fase2', 'precedentes'] },
  { id: 153, topic: 28, q: 'Qual a diferença entre distinguishing e overruling?', a: 'DISTINGUISHING = afastar precedente porque caso concreto tem peculiaridades fáticas distintas; pode qualquer juiz, com fundamentação. OVERRULING = SUPERAR o precedente; só o tribunal autor (ou superior).', tags: ['fase2', 'precedentes'] },
  { id: 154, topic: 28, q: 'IRDR vs IAC — diferença essencial?', a: 'IRDR (art. 976) exige REPETIÇÃO efetiva de processos sobre questão de direito + risco à isonomia/segurança. IAC (art. 947) é PREVENTIVO — basta uma causa de relevante questão jurídica com grande repercussão social, sem repetição.', tags: ['fase2', 'precedentes', 'IRDR'] },
  { id: 155, topic: 28, q: 'Cabe reclamação contra inobservância de súmula simples (não vinculante)?', a: 'NÃO (Súmula 734/STF). Só cabe contra inobservância de PRECEDENTE OBRIGATÓRIO (art. 988 IV) — SV, controle concentrado, IRDR, IAC, repetitivos, RG. Para repetitivos/RG, exige esgotamento ordinário (§5º II).', tags: ['fase2', 'precedentes', 'reclamacao'] },

  // Tópico 29 — CNJ/CNMP
  { id: 156, topic: 29, q: 'Inquérito civil — quem arquiva?', a: 'Conselho Superior do MP (CSMP). NÃO vai ao juiz (diferente do IP penal). Resolução CNMP 23/2007 art. 9º. Se o MP arquiva, sobe ao CSMP para revisão administrativa.', tags: ['fase2', 'CNMP', 'IC'] },
  { id: 157, topic: 29, q: 'TAC (Termo de Ajustamento de Conduta) — natureza?', a: 'Título executivo EXTRAJUDICIAL (Lei 7.347/85 art. 5º §6º). Pode ser celebrado por legitimados da ACP (MP, Adm Pública, Defensoria). Disciplinado pela Resolução CNMP 179/2017.', tags: ['fase2', 'CNMP', 'TAC'] },
  { id: 158, topic: 29, q: 'Resolução CNJ 125/2010 — qual seu objeto?', a: 'Instituiu a POLÍTICA JUDICIÁRIA NACIONAL DE TRATAMENTO ADEQUADO DOS CONFLITOS. Base normativa dos CEJUSCs (Centros Judiciários de Solução de Conflitos e Cidadania).', tags: ['fase2', 'CNJ', 'CEJUSC'] },
  { id: 159, topic: 29, q: 'Resoluções CNJ/CNMP podem inovar contra a lei?', a: 'NÃO. STF (ADI 4.638): competência normativa não é genérica; matéria reservada à lei é intocável. Resoluções regulam atividade administrativa, não criam direito material novo.', tags: ['fase2', 'CNJ', 'limites'] },

  // Tópico 30 — Honorários e custas
  { id: 160, topic: 30, q: 'Honorários Fazenda — sistema do art. 85 §3º?', a: 'ESCALONADO em 5 faixas: 10-20% (até 200 SM); 8-10% (200-2.000); 5-8% (2.000-20.000); 3-5% (20.000-100.000); 1-3% (>100.000). Quanto maior o valor, MENOR o percentual.', tags: ['fase2', 'honorarios', 'fazenda'] },
  { id: 161, topic: 30, q: 'O que são honorários recursais (§11)?', a: 'MAJORAÇÃO dos honorários quando recurso é desprovido (não conhecido OU julgado improcedente). NÃO é novo honorário; é majoração do existente. Soma respeita limite máximo do caput/§3º. Aplica-se à Fazenda também.', tags: ['fase2', 'honorarios', 'recursos'] },
  { id: 162, topic: 30, q: 'Dano moral fixado abaixo do pedido = sucumbência recíproca?', a: 'NÃO (Súmula 326/STJ). Apenas o réu paga honorários. A "redução" pelo juiz é exercício de proporcionalidade — não importa decadência do autor.', tags: ['fase2', 'honorarios', 'sucumbencia'] },
  { id: 163, topic: 30, q: 'Multa por ato atentatório — destinatário?', a: 'União/Estado (CPC art. 77 §2º — até 20% do valor da causa). Diferente de: litigância de má-fé (parte contrária — art. 81); astreintes (exequente — art. 537); execução protelatória (exequente — art. 918).', tags: ['fase2', 'multas'] },

  // ============ Bloco 11 — Fase 3 (Civil 1-5 — Parte Geral) ============
  // Civ 1 — LINDB
  { id: 164, topic: 1, materia: 'civil', q: 'O que é repristinação no direito brasileiro?', a: 'Restauração da lei revogada quando a lei revogadora é ela mesma revogada. NÃO é automática (LINDB art. 2º §3º) — só acontece se a nova lei dispuser EXPRESSAMENTE.', tags: ['fase3', 'LINDB'] },
  { id: 165, topic: 1, materia: 'civil', q: 'Quando se aplica vacatio legis de 45 dias (LINDB)?', a: 'Quando a lei NÃO fixa data própria de vigência (regra supletiva — art. 1º). Ex: lei sem cláusula de vigência → 45 dias no Brasil + 3 meses no exterior. Códigos costumam fixar vacatio longa (ex: 1 ano).', tags: ['fase3', 'LINDB', 'vigencia'] },
  { id: 166, topic: 1, materia: 'civil', q: 'Quais os critérios para resolver antinomias?', a: 'Bobbio: (1) Hierárquico (lei superior); (2) Cronológico (lei posterior); (3) Especialidade (lei específica). Em conflito entre critérios: hierárquico vence cronológico; cronológico geral cede à especialidade.', tags: ['fase3', 'LINDB', 'antinomias'] },
  { id: 167, topic: 1, materia: 'civil', q: 'O que diz o art. 28 da LINDB sobre responsabilização do agente público?', a: 'Agente público responde PESSOALMENTE apenas por DOLO ou ERRO GROSSEIRO. Lei 13.655/18 protege administrador de divergência razoável de opinião — não é culpa simples.', tags: ['fase3', 'LINDB', 'consequencialismo'] },
  { id: 168, topic: 1, materia: 'civil', q: 'Lei nova GERAL revoga lei especial anterior?', a: 'NÃO, salvo disposição expressa (LINDB art. 2º §2º). Lex specialis derogat generali — princípio da especialidade. A relação especial-geral mantém-se.', tags: ['fase3', 'LINDB'] },

  // Civ 2 — Pessoas naturais
  { id: 169, topic: 2, materia: 'civil', q: 'Quem são os ABSOLUTAMENTE incapazes após a Lei 13.146/15 (EPD)?', a: 'APENAS os menores de 16 anos (CC art. 3º — único inciso após EPD). Pessoa com deficiência mental NÃO é mais absolutamente incapaz; pode ser relativa (art. 4º III) ou usar tomada de decisão apoiada.', tags: ['fase3', 'pessoas-naturais', 'EPD'] },
  { id: 170, topic: 2, materia: 'civil', q: 'Quais as três fases da ausência?', a: '(1) CURADORIA — declaração + curador (art. 22). (2) SUCESSÃO PROVISÓRIA — após 1 ano da arrecadação (ou 3 anos com representante) — arts. 26-27. (3) SUCESSÃO DEFINITIVA — após 10 anos da provisória (ou 5 anos das últimas notícias se tinha 80+ anos) — art. 37.', tags: ['fase3', 'pessoas-naturais', 'ausencia'] },
  { id: 171, topic: 2, materia: 'civil', q: 'Quais os modos de emancipação legal (art. 5º par. único)?', a: 'Casamento, emprego público efetivo, colação de grau em ensino superior, estabelecimento civil/comercial, economia própria do menor com 16+ anos. Voluntária: pais ou tutor (judicial).', tags: ['fase3', 'pessoas-naturais', 'emancipacao'] },
  { id: 172, topic: 2, materia: 'civil', q: 'Características dos direitos da personalidade?', a: 'ABSOLUTOS · INDISPONÍVEIS · IRRENUNCIÁVEIS · INTRANSMISSÍVEIS · IMPRESCRITÍVEIS · VITALÍCIOS. Tutela cível autônoma — basta lesão ou ameaça (art. 12).', tags: ['fase3', 'pessoas-naturais', 'personalidade'] },
  { id: 173, topic: 2, materia: 'civil', q: 'Qual a teoria adotada pelo STJ sobre o status jurídico do nascituro?', a: 'Tendência CONCEPCIONISTA para direitos da personalidade (REsp 1.415.727 — indenização ao nascituro por morte do pai). CC art. 2º caput sugere natalista, mas jurisprudência avança.', tags: ['fase3', 'pessoas-naturais', 'nascituro'] },

  // Civ 3 — Pessoas jurídicas
  { id: 174, topic: 3, materia: 'civil', q: 'Diferença entre Teoria Maior e Teoria Menor da desconsideração?', a: 'MAIOR (CC art. 50): exige ABUSO da personalidade — desvio de finalidade ou confusão patrimonial. MENOR (CDC art. 28; ambiental Lei 9.605): basta a INSOLVÊNCIA ou obstaculização ao ressarcimento.', tags: ['fase3', 'PJ', 'desconsideracao'] },
  { id: 175, topic: 3, materia: 'civil', q: 'O que mudou na desconsideração com a Lei 13.874/19?', a: 'Detalhou os requisitos do art. 50: definiu desvio de finalidade (§1º) e confusão patrimonial (§2º), positivou a desconsideração INVERSA (§4º), e protegeu a expansão lícita da finalidade original (§5º).', tags: ['fase3', 'PJ', 'desconsideracao'] },
  { id: 176, topic: 3, materia: 'civil', q: 'A EIRELI ainda existe no direito brasileiro?', a: 'NÃO (extinta pela Lei 14.382/22 — Marco Legal das Garantias). EIRELIs existentes foram convertidas automaticamente em SLU (Sociedade Limitada Unipessoal — Lei 13.874/19).', tags: ['fase3', 'PJ'] },
  { id: 177, topic: 3, materia: 'civil', q: 'Procedimento para desconsiderar a personalidade jurídica?', a: 'IDPJ — Incidente de Desconsideração da Personalidade Jurídica (CPC arts. 133-137). Exige contraditório, instrução, decisão (recurso: agravo de instrumento — art. 1.015 IV). Sem IDPJ, desconsideração é nula.', tags: ['fase3', 'PJ', 'IDPJ'] },
  { id: 178, topic: 3, materia: 'civil', q: 'PJ pode sofrer dano moral?', a: 'SIM — Súmula 227/STJ. Tutela a honra OBJETIVA (reputação no mercado/sociedade). Não tem direito à privacidade pessoal, integridade física ou direitos personalíssimos individuais.', tags: ['fase3', 'PJ', 'personalidade'] },

  // Civ 4 — Bens
  { id: 179, topic: 4, materia: 'civil', q: 'Quais as 3 espécies de bens públicos (CC art. 99)?', a: 'I — USO COMUM do povo (rios, ruas, praças); II — USO ESPECIAL (edifícios destinados a serviço público); III — DOMINICAIS (patrimônio das PJs públicas, sem destinação específica).', tags: ['fase3', 'bens', 'publicos'] },
  { id: 180, topic: 4, materia: 'civil', q: 'Bem público admite usucapião?', a: 'NÃO. Súmula 340/STF e CC art. 102 — TODOS os bens públicos (mesmo dominicais) são imprescritíveis. Junto com inalienabilidade e impenhorabilidade, formam o tripé da proteção.', tags: ['fase3', 'bens', 'publicos'] },
  { id: 181, topic: 4, materia: 'civil', q: 'Diferença entre bem de família LEGAL e VOLUNTÁRIO?', a: 'LEGAL (Lei 8.009/90): AUTOMÁTICO — basta residência. VOLUNTÁRIO (CC 1.711+): exige escritura + REGISTRO; limite de 1/3 do patrimônio; abrange imóvel + valores mobiliários.', tags: ['fase3', 'bens', 'bem-familia'] },
  { id: 182, topic: 4, materia: 'civil', q: 'Imóvel residencial LOCADO pode ser bem de família?', a: 'SIM — Súmula 486/STJ. Único imóvel residencial locado a terceiros é impenhorável SE a renda for usada para subsistência da família ou para pagar aluguel residencial. Súmula 449: vaga de garagem com matrícula PRÓPRIA é penhorável.', tags: ['fase3', 'bens', 'bem-familia'] },
  { id: 183, topic: 4, materia: 'civil', q: 'Bem de família do FIADOR em locação pode ser penhorado?', a: 'SIM — Lei 8.009/90 art. 3º VII + STF Tema 295 (RE 612.360). Exceção controvertida (viola direito à moradia segundo crítica), mas constitucional.', tags: ['fase3', 'bens', 'bem-familia'] },

  // Civ 5 — Fatos jurídicos
  { id: 184, topic: 5, materia: 'civil', q: 'Diferença entre prescrição e decadência?', a: 'PRESCRIÇÃO extingue a PRETENSÃO (não o direito); admite suspensão/interrupção/renúncia. DECADÊNCIA extingue o próprio DIREITO; legal NÃO admite suspensão/interrupção/renúncia (art. 207 + 209). Pretensão = prestação; decadência = direito potestativo.', tags: ['fase3', 'fatos', 'prescricao'] },
  { id: 185, topic: 5, materia: 'civil', q: 'Qual é o defeito do negócio jurídico que gera NULIDADE absoluta?', a: 'SIMULAÇÃO (CC art. 167). É a ÚNICA exceção entre os defeitos — todos os outros (erro, dolo, coação, lesão, estado de perigo, fraude contra credores) geram apenas anulabilidade.', tags: ['fase3', 'fatos', 'simulacao'] },
  { id: 186, topic: 5, materia: 'civil', q: 'Prazo prescricional para reparação civil (responsabilidade civil)?', a: '3 ANOS (CC art. 206 §3º V). Conta-se da ciência inequívoca do dano. Vinculante na prática forense; tema cobrado em quase toda prova.', tags: ['fase3', 'fatos', 'prescricao'] },
  { id: 187, topic: 5, materia: 'civil', q: 'Decadência LEGAL pode ser conhecida de ofício?', a: 'SIM (CC art. 210). Juiz deve reconhecer mesmo sem alegação da parte. CONVENCIONAL (art. 211): apenas pela parte beneficiada.', tags: ['fase3', 'fatos', 'decadencia'] },
  { id: 188, topic: 5, materia: 'civil', q: 'A prescrição pode ser interrompida várias vezes pelo mesmo fato?', a: 'NÃO. CC art. 202 caput: a interrupção só ocorre UMA ÚNICA VEZ pelo mesmo fato. Após interrompida, recomeça a contagem por inteiro.', tags: ['fase3', 'fatos', 'prescricao'] },

  // ============ Bloco 12 — Fase 3 (Civil 6-7 — Obrigações) ============
  // Civ 6 — Obrigações parte geral
  { id: 189, topic: 6, materia: 'civil', q: 'A solidariedade obrigacional pode ser presumida?', a: 'NÃO (CC art. 265). Solidariedade decorre apenas da LEI ou da VONTADE expressa. Em dúvida = obrigação conjuntiva (cada um por sua quota proporcional).', tags: ['fase3', 'obrigacoes', 'solidariedade'] },
  { id: 190, topic: 6, materia: 'civil', q: 'Quais os requisitos cumulativos para compensação operar (art. 369)?', a: 'RLVF: dívidas RECÍPROCAS, LÍQUIDAS, VENCIDAS, FUNGÍVEIS. Faltando um, não há compensação. Mais comum em Direito Tributário e Civil.', tags: ['fase3', 'obrigacoes', 'compensacao'] },
  { id: 191, topic: 6, materia: 'civil', q: 'Cessão de crédito × assunção de dívida — qual exige consentimento do credor?', a: 'ASSUNÇÃO DE DÍVIDA exige consentimento expresso do credor (art. 299). Cessão de crédito NÃO precisa do devedor — basta NOTIFICAÇÃO (art. 290). Razão: credor pode ter interesse na solvência do devedor; devedor é indiferente a quem paga.', tags: ['fase3', 'obrigacoes', 'cessao'] },
  { id: 192, topic: 6, materia: 'civil', q: 'O que diferencia novação, dação em pagamento e consignação?', a: 'NOVAÇÃO: extingue obrigação anterior CRIANDO NOVA (animus novandi). DAÇÃO: credor recebe coisa diversa, mas a obrigação se EXTINGUE (sem nova). CONSIGNAÇÃO: depósito diante de recusa do credor — extinção retroativa.', tags: ['fase3', 'obrigacoes', 'extincao'] },
  { id: 193, topic: 6, materia: 'civil', q: 'Adimplemento substancial aplica-se a alienação fiduciária?', a: 'NÃO mais (STJ — REsp 1.622.555, 2017). Em outras espécies de contratos sim, mas em alienação fiduciária regida pelo Decreto-Lei 911/69 a teoria não se aplica — credor pode acionar regimes próprios.', tags: ['fase3', 'obrigacoes', 'adimplemento'] },

  // Civ 7 — Inadimplemento
  { id: 194, topic: 7, materia: 'civil', q: 'Diferença entre mora ex re e mora ex persona?', a: 'EX RE (art. 397 caput): obrigação POSITIVA E LÍQUIDA com TERMO CERTO. Mora automática (dies interpellat pro homine). EX PERSONA (par. único): sem termo certo. Exige interpelação judicial ou extrajudicial.', tags: ['fase3', 'mora'] },
  { id: 195, topic: 7, materia: 'civil', q: 'Quais elementos compõem as perdas e danos (art. 402)?', a: 'DANO EMERGENTE (o que efetivamente perdeu) + LUCROS CESSANTES (o que razoavelmente deixou de lucrar). Devem ser danos diretos e imediatos (art. 403) — danos remotos não são indenizáveis.', tags: ['fase3', 'perdas-danos'] },
  { id: 196, topic: 7, materia: 'civil', q: 'Cláusula penal compensatória × moratória — qual a diferença?', a: 'COMPENSATÓRIA (inadimplemento total): ALTERNATIVA — credor escolhe entre executar a obrigação OU cobrar a multa. MORATÓRIA (mero atraso): CUMULATIVA — pode cobrar multa + cumprimento. Limite: não excede valor da obrigação principal (art. 412).', tags: ['fase3', 'clausula-penal'] },
  { id: 197, topic: 7, materia: 'civil', q: 'Arras confirmatórias × penitenciais?', a: 'CONFIRMATÓRIAS (regra — art. 417): reforçam o vínculo, sem arrependimento, descumprimento = perda das arras + perdas e danos suplementares (art. 419). PENITENCIAIS (exceção — art. 420): permitem arrependimento; limite máximo é o valor das arras em dobro.', tags: ['fase3', 'arras'] },
  { id: 198, topic: 7, materia: 'civil', q: 'Devedor em mora responde por caso fortuito?', a: 'SIM (art. 399). Em regra, devedor não responde por caso fortuito/força maior (art. 393); MAS se já estava em mora, responde até por isso, salvo se provar que o evento ocorreria mesmo sem o atraso.', tags: ['fase3', 'mora', 'fortuito'] },

  // ============ Bloco 13 — Fase 3 (Civil 11 — Responsabilidade Civil) ============
  { id: 199, topic: 11, materia: 'civil', q: 'Quais os pressupostos da responsabilidade civil subjetiva?', a: 'CONDUTA (ação/omissão) + DANO (material ou moral) + NEXO CAUSAL + CULPA (dolo, negligência ou imprudência — art. 186). Objetiva: dispensa culpa.', tags: ['fase3', 'resp-civil'] },
  { id: 200, topic: 11, materia: 'civil', q: 'O que estabelece o art. 927 par. único do CC?', a: 'Cláusula geral de risco — atividade NORMALMENTE desenvolvida que, POR SUA NATUREZA, implique risco aos direitos de outrem gera responsabilidade OBJETIVA, independentemente de culpa. Inovação radical do CC/02.', tags: ['fase3', 'resp-civil', 'risco'] },
  { id: 201, topic: 11, materia: 'civil', q: 'Pais respondem por atos dos filhos menores — responsabilidade subjetiva ou objetiva?', a: 'OBJETIVA (CC arts. 932 I + 933). Independem de culpa dos pais. Pais respondem em primeiro lugar; filho menor responde SUBSIDIARIAMENTE (art. 928), salvo se atos foram praticados sem assistência ou já fora do âmbito familiar.', tags: ['fase3', 'resp-civil', 'pais'] },
  { id: 202, topic: 11, materia: 'civil', q: 'Dano moral e estético podem ser cumulados?', a: 'SIM — Súmula 387/STJ. Dano estético (lesão à integridade física que afeta aparência) é AUTÔNOMO ao dano moral (lesão à dignidade/imagem). Hipótese clássica: vítima de queimadura grave.', tags: ['fase3', 'resp-civil', 'dano'] },
  { id: 203, topic: 11, materia: 'civil', q: 'Pessoa jurídica pode sofrer dano moral?', a: 'SIM — Súmula 227/STJ. Tutela a HONRA OBJETIVA (reputação no mercado). NÃO cobre direitos da personalidade individuais (privacidade, integridade física). Inscrição indevida em SPC contra PJ pode gerar dano moral.', tags: ['fase3', 'resp-civil', 'PJ', 'dano'] },
  { id: 204, topic: 11, materia: 'civil', q: 'O Estado responde objetivamente por OMISSÃO?', a: 'DEPENDE. STF Tema 366: omissão GENÉRICA (falta de policiamento generalizado) = SUBJETIVA (faute du service). Omissão ESPECÍFICA (existindo dever específico de agir, ex: chuva e árvore caindo na via) = OBJETIVA. Distinção essencial.', tags: ['fase3', 'resp-civil', 'estado'] },
  { id: 205, topic: 11, materia: 'civil', q: 'Súmula 385/STJ — qual a regra?', a: 'Anotação irregular em cadastro de proteção ao crédito NÃO gera dano moral, quando preexistente legítima inscrição (anterior). Limita o dano in re ipsa. Apenas direito ao cancelamento.', tags: ['fase3', 'resp-civil', 'sumula'] },

  // ============ Bloco 14 — Fase 3 (Civil 8-9 — Contratos) ============
  // Civ 8 — Contratos parte geral
  { id: 206, topic: 8, materia: 'civil', q: 'Quais as 3 funções da boa-fé objetiva?', a: 'INTERPRETATIVA (art. 113 — interpretar negócios à luz da boa-fé); INTEGRATIVA (art. 422 — deveres anexos: informar, lealdade, cooperação); CONTROLE (art. 187 — abuso de direito).', tags: ['fase3', 'contratos', 'boa-fe'] },
  { id: 207, topic: 8, materia: 'civil', q: 'O que é venire contra factum proprium?', a: 'Vedação à conduta contraditória — partes não podem agir de modo a frustrar expectativas legítimas que elas mesmas criaram. Decorre da boa-fé objetiva. Junto com supressio, surrectio, duty to mitigate e tu quoque, é instituto derivado.', tags: ['fase3', 'contratos', 'boa-fe'] },
  { id: 208, topic: 8, materia: 'civil', q: 'Prazo decadencial para arguir vícios redibitórios?', a: 'CC art. 445: APARENTE — 30 dias para móvel, 1 ANO para imóvel. OCULTO: prazo conta da CIÊNCIA, com máximo legal (180 dias móvel, 1 ano imóvel após aquisição).', tags: ['fase3', 'contratos', 'vicios'] },
  { id: 209, topic: 8, materia: 'civil', q: 'Diferença entre vício redibitório e evicção?', a: 'VÍCIO REDIBITÓRIO = defeito FÍSICO oculto da coisa (imprópria ao uso). EVICÇÃO = defeito JURÍDICO (sentença atribui a coisa a terceiro com direito anterior à aquisição). Cláusula que exclui evicção exige forma expressa + ciência.', tags: ['fase3', 'contratos', 'evicao'] },
  { id: 210, topic: 8, materia: 'civil', q: 'Onerosidade excessiva no CC vs CDC — diferença?', a: 'CC art. 478: exige fato EXTRAORDINÁRIO + IMPREVISÍVEL + excessivamente oneroso + vantagem extrema para outra parte. CDC art. 6º V: basta o desequilíbrio superveniente — DISPENSA imprevisibilidade. Mais protetor ao consumidor.', tags: ['fase3', 'contratos', 'onerosidade'] },

  // Civ 9 — Contratos espécie
  { id: 211, topic: 9, materia: 'civil', q: 'Doação pura admite revogação?', a: 'NÃO, em regra. Apenas por INGRATIDÃO (art. 557 — rol TAXATIVO: atentar contra vida, ofensa física, injúria grave, recusa de alimentos) ou inexecução do encargo. Outras condutas, mesmo reprováveis, NÃO revogam.', tags: ['fase3', 'doacao'] },
  { id: 212, topic: 9, materia: 'civil', q: 'Mútuo × comodato — diferença essencial?', a: 'MÚTUO: empréstimo de coisa FUNGÍVEL (dinheiro, grãos) — TRANSFERE propriedade; mutuário devolve do mesmo gênero. COMODATO: empréstimo GRATUITO de coisa INFUNGÍVEL — apenas USO, sem transferência de propriedade.', tags: ['fase3', 'mutuo', 'comodato'] },
  { id: 213, topic: 9, materia: 'civil', q: 'O que é o benefício de ordem na fiança?', a: 'Direito do FIADOR de exigir que sejam executados PRIMEIRO os bens do DEVEDOR PRINCIPAL (art. 827). RENUNCIÁVEL (art. 828). Não cabe se: renunciou expressamente, é "principal pagador", devedor é insolvente/falido.', tags: ['fase3', 'fianca'] },
  { id: 214, topic: 9, materia: 'civil', q: 'Súmula 214/STJ — qual a regra?', a: 'Fiador na locação NÃO responde por obrigações resultantes de aditamento ao qual NÃO ANUIU. Aplica princípio da interpretação RESTRITIVA da fiança (art. 819).', tags: ['fase3', 'fianca'] },
  { id: 215, topic: 9, materia: 'civil', q: 'Bem de família do fiador locatício pode ser penhorado?', a: 'SIM (Lei 8.009/90 art. 3º VII + STF Tema 295 — RE 612.360). Exceção controversa (viola direito à moradia segundo crítica), mas constitucional.', tags: ['fase3', 'fianca', 'bem-familia'] },

  // ============ Bloco 15 — Fase 3 (Civil 10 + 12) ============
  // Civ 10 — Atos unilaterais
  { id: 216, topic: 10, materia: 'civil', q: 'O que caracteriza o enriquecimento sem causa (CC art. 884)?', a: 'Aquele que se enriquece SEM JUSTA CAUSA à custa de outrem deve restituir. Ação tem CARÁTER SUBSIDIÁRIO (art. 886) — só cabe quando NÃO houver outra ação específica para o lesado.', tags: ['fase3', 'enriquecimento'] },
  { id: 217, topic: 10, materia: 'civil', q: 'Pagamento de dívida prescrita pode ser repetido?', a: 'NÃO (art. 882). Prescrição extingue a PRETENSÃO, mas a dívida persiste como obrigação natural. Pagamento espontâneo é válido e irretratável.', tags: ['fase3', 'pagamento-indevido'] },
  { id: 218, topic: 10, materia: 'civil', q: 'Quem alega ter pago indevidamente tem o ônus da prova de quê?', a: 'Do ERRO (art. 877). Pagamento voluntário é presumidamente devido. Quem alega indevido deve provar que pagou por engano.', tags: ['fase3', 'pagamento-indevido'] },
  { id: 219, topic: 10, materia: 'civil', q: 'Diferença entre enriquecimento sem causa e responsabilidade civil?', a: 'Responsabilidade exige ATO ILÍCITO (art. 186). Enriquecimento sem causa NÃO exige ilicitude — basta a ausência de causa juridicamente legítima. São fontes autônomas de obrigação.', tags: ['fase3', 'enriquecimento'] },

  // Civ 12 — Empresa
  { id: 220, topic: 12, materia: 'civil', q: 'Profissional intelectual (advogado, médico) é empresário?', a: 'NÃO (art. 966 par. único). Profissão intelectual, científica, literária, artística — ainda com auxiliares — não é empresarial. EXCEÇÃO: quando constituir ELEMENTO DE EMPRESA (organização empresarial subordinante).', tags: ['fase3', 'empresa'] },
  { id: 221, topic: 12, materia: 'civil', q: 'EIRELI ainda existe no direito brasileiro?', a: 'NÃO (extinta pela Lei 14.382/22). EIRELIs existentes foram convertidas automaticamente em SLU (Sociedade Limitada Unipessoal — Lei 13.874/19). SLU NÃO tem capital mínimo (diferente da antiga EIRELI).', tags: ['fase3', 'empresa', 'EIRELI'] },
  { id: 222, topic: 12, materia: 'civil', q: 'O que é trespasse?', a: 'Alienação do ESTABELECIMENTO empresarial (CC art. 1.144). Eficácia perante credores depende de PUBLICAÇÃO + ANUÊNCIA (expressa ou tácita — silêncio por 30 dias). Adquirente responde por débitos CONTABILIZADOS (art. 1.146).', tags: ['fase3', 'empresa', 'trespasse'] },
  { id: 223, topic: 12, materia: 'civil', q: 'Falência aplica-se à sociedade simples?', a: 'NÃO. Lei 11.101/05 aplica-se apenas a EMPRESÁRIO INDIVIDUAL e SOCIEDADE EMPRESÁRIA. Sociedade simples e profissionais liberais não estão sujeitos ao regime falimentar.', tags: ['fase3', 'empresa', 'falencia'] }
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
  },
  {
    id: 16,
    topic: 1,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'A respeito da vedação à decisão-surpresa (CPC art. 10), assinale a alternativa CORRETA:',
    alternatives: [
      'Aplica-se apenas a matérias de defesa do réu, não a questões de ordem pública.',
      'Aplica-se mesmo a matérias cognoscíveis de ofício, conforme jurisprudência consolidada do STJ.',
      'Permite ao juiz decidir com base em fundamento novo, desde que devidamente fundamentado.',
      'É flexibilizada quando o juiz invocar precedente vinculante.',
      'Aplica-se apenas em primeira instância.'
    ],
    correct: 'B',
    explanation: 'STJ (REsp 1.676.027 e REsp 1.755.266): a vedação à decisão-surpresa do art. 10 alcança até as matérias COGNOSCÍVEIS DE OFÍCIO. O juiz não pode decidir com fundamento sobre o qual as partes não tiveram oportunidade de se manifestar, ainda que matéria de ordem pública. Exceção apenas para questões puramente de direito que constituam desdobramento lógico do já debatido.'
  },
  {
    id: 17,
    topic: 2,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o status normativo dos tratados internacionais de direitos humanos no Brasil, assinale a CORRETA:',
    alternatives: [
      'Todos os tratados de DH têm status de emenda constitucional, independentemente de rito de aprovação.',
      'Tratados de DH têm sempre status supralegal.',
      'Apenas os tratados aprovados pelo rito do art. 5º §3º da CF têm status de EC; os demais ratificados são supralegais.',
      'Tratados de DH equivalem à legislação ordinária.',
      'Não há tratado de DH com status de EC no Brasil.'
    ],
    correct: 'C',
    explanation: 'STF, RE 466.343/SP (Cesar Peluso, 2008): tratados de DH não aprovados pelo rito do art. 5º §3º têm status SUPRALEGAL (acima da lei, abaixo da CF). Aprovados pelo rito (3/5, dois turnos, cada Casa) têm status de EC. Atualmente: PCD, Marraqueche e Convenção Interamericana contra o Racismo são os 3 com status de EC.'
  },
  {
    id: 18,
    topic: 3,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre as condições da ação no CPC/15:',
    alternatives: [
      'São três: legitimidade, interesse e possibilidade jurídica do pedido.',
      'São apenas duas: legitimidade e interesse de agir, segundo o art. 17.',
      'A possibilidade jurídica do pedido continua sendo categoria autônoma.',
      'A teoria da asserção foi expressamente repudiada pelo CPC/15.',
      'A carência da ação gera coisa julgada material.'
    ],
    correct: 'B',
    explanation: 'CPC art. 17: "Para postular em juízo é necessário ter interesse e legitimidade." A possibilidade jurídica do pedido foi absorvida pelo interesse de agir (mantida a teoria eclética de Liebman, com essa simplificação). Carência da ação = extinção sem mérito (485 VI), apenas coisa julgada formal. Teoria da asserção continua predominante (STJ — REsp 1.395.875).'
  },
  {
    id: 19,
    topic: 4,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre a oposição no CPC/15, assinale a alternativa CORRETA:',
    alternatives: [
      'É espécie de intervenção de terceiros, regulada nos arts. 119-138.',
      'Foi extinta do CPC/15.',
      'Passou a ser ação autônoma sob o procedimento comum (arts. 682-686), não mais intervenção.',
      'Continua sendo intervenção, mas com nome alterado para nomeação à autoria.',
      'Apenas o assistente pode opor-se à pretensão das partes.'
    ],
    correct: 'C',
    explanation: 'O CPC/15 retirou a oposição do rol das intervenções de terceiros (arts. 119-138) e a transformou em AÇÃO AUTÔNOMA, sob o procedimento comum (arts. 682-686). Ainda admite julgamento conjunto se proposta antes da AIJ. Erro frequente: tratá-la como intervenção (regime CPC/73).'
  },
  {
    id: 20,
    topic: 5,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre os prazos do MP, da Defensoria Pública e da Advocacia Pública no processo civil:',
    alternatives: [
      'O prazo é em quádruplo, somando-se a dobra das funções essenciais com a do art. 229.',
      'Apenas o MP tem prazo em dobro; DP e AP seguem o prazo comum.',
      'MP, DP e AP têm prazo em dobro, que NÃO se acumula com a dobra do art. 229.',
      'A dobra do art. 180 (MP) só vale para a primeira manifestação.',
      'A dobra dos entes essenciais é em dobro apenas em primeira instância.'
    ],
    correct: 'C',
    explanation: 'CPC arts. 180 (MP), 183 (Adv. Pública) e 186 (DP): todos têm prazo em DOBRO, contados da intimação pessoal. NÃO se acumulam com a dobra do art. 229 (litisconsortes com advogados diferentes - art. 229 §2º). Pegadinha clássica que tenta induzir o "quádruplo" - ERRADO.'
  },
  {
    id: 21,
    topic: 6,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre a competência da Justiça Federal (CF art. 109), é INCORRETO afirmar:',
    alternatives: [
      'Compete à JF processar causas em que figure como parte sociedade de economia mista federal.',
      'Compete à JF processar causas em que a União seja parte, autora, ré, assistente ou opoente.',
      'Excluem-se da competência da JF as causas de falência e os acidentes do trabalho.',
      'A competência da JF é absoluta - cognoscível de ofício.',
      'Reconhecida continência, ACPs federal e estadual reúnem-se na JF (Súmula 489/STJ).'
    ],
    correct: 'A',
    explanation: 'A) INCORRETO - Súmula 556/STJ: "É competente a Justiça Estadual para processar e julgar causas em que é parte sociedade de economia mista federal." SEM federal NÃO está no art. 109 I (apenas União, autarquias, EP). B), C), D), E) Corretos.'
  },
  {
    id: 22,
    topic: 7,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre a atipicidade dos meios executivos do art. 139 IV do CPC, conforme entendimento atual do STJ:',
    alternatives: [
      'Medidas atípicas (suspensão de CNH, passaporte, cartão de crédito) são vedadas em obrigações pecuniárias.',
      'Medidas atípicas são cabíveis livremente, sem necessidade de fundamentação.',
      'São cabíveis em quantia certa, mas exigem esgotamento de meios típicos, demonstração de patrimônio compatível ocultado, fundamentação e proporcionalidade (Tema 1.137).',
      'O juiz pode determinar a prisão civil por dívida pecuniária, em caráter excepcional.',
      'Aplicam-se apenas a obrigações de fazer e não-fazer, conforme o regime do CPC/73.'
    ],
    correct: 'C',
    explanation: 'STJ, Tema 1.137 (REsp 1.788.950): as medidas atípicas (suspensão de CNH, passaporte, cartão) são CABÍVEIS em execução de obrigação pecuniária, mas exigem cumulativamente: (i) esgotamento de meios típicos; (ii) patrimônio compatível ocultado; (iii) decisão fundamentada e proporcional; (iv) sem violação ao núcleo essencial de direitos fundamentais. Não é "carta branca", nem vedação absoluta.'
  },
  {
    id: 23,
    topic: 8,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o prazo em dobro para litisconsortes com advogados de escritórios diferentes (CPC art. 229):',
    alternatives: [
      'Aplica-se sempre, independentemente do meio (físico ou eletrônico).',
      'Aplica-se em autos físicos, mas NÃO em autos eletrônicos (Tema 1.024/STJ).',
      'Aplica-se apenas em primeira instância.',
      'Soma-se à dobra do MP/DP/AP.',
      'Apenas no juizado especial.'
    ],
    correct: 'B',
    explanation: 'STJ, Tema 1.024 (REsp 1.813.684): o prazo em dobro do art. 229 NÃO se aplica em autos eletrônicos, mesmo se o réu se manifestou em meio físico. A justificativa do dobro (dificuldade de cópia em autos físicos) não existe no eletrônico, onde há cópia digital permanente.'
  },
  {
    id: 24,
    topic: 9,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre a estabilização da tutela antecipada antecedente (CPC art. 304), conforme STJ Tema 1.099:',
    alternatives: [
      'Ocorre quando o réu apresenta contestação tempestivamente.',
      'Ocorre quando o réu apresenta qualquer impugnação à tutela.',
      'Ocorre apenas se o réu NÃO interpuser AGRAVO DE INSTRUMENTO contra a tutela.',
      'Gera coisa julgada material imediata.',
      'Permite revisão judicial pelo prazo de 5 anos.'
    ],
    correct: 'C',
    explanation: 'STJ, Tema 1.099 (REsp 1.997.347): a estabilização ocorre SOMENTE se o réu não interpuser AGRAVO DE INSTRUMENTO. Outras impugnações (contestação, requerimento de revogação) NÃO impedem a estabilização. Estabilização = imutabilidade processual, NÃO coisa julgada material. Cabe revisão por 2 anos (art. 304 §5º).'
  },
  {
    id: 25,
    topic: 10,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a extinção do processo por decadência ou prescrição:',
    alternatives: [
      'É hipótese de extinção sem resolução do mérito (art. 485).',
      'Gera apenas coisa julgada formal.',
      'É hipótese de extinção COM resolução do mérito (art. 487 II) e gera coisa julgada material.',
      'Permite repropositura da ação após o prazo prescricional civil.',
      'Aplica-se apenas a direitos materiais disponíveis.'
    ],
    correct: 'C',
    explanation: 'CPC art. 487 II: "Haverá resolução de mérito quando o juiz: II - decidir, de ofício ou a requerimento, sobre a ocorrência de decadência ou prescrição." Embora extingam o direito material, são tratadas como sentença de mérito - geram COISA JULGADA MATERIAL e impedem repropositura. Pegadinha clássica em prova.'
  },
  {
    id: 26,
    topic: 11,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'A respeito da audiência de conciliação ou mediação (CPC art. 334):',
    alternatives: [
      'É facultativa, dependendo da vontade exclusiva do autor.',
      'Só é dispensada se ambas as partes manifestarem desinteresse expresso ou se a causa não admitir autocomposição.',
      'Pode ser dispensada apenas pelo juiz, de ofício.',
      'O não comparecimento gera apenas advertência verbal.',
      'É realizada após a contestação, para tentativa final de acordo.'
    ],
    correct: 'B',
    explanation: 'CPC art. 334 §4º: a audiência só é dispensada se: (I) AMBAS as partes manifestarem desinteresse; (II) não admitir autocomposição. O não comparecimento injustificado é ato atentatório à dignidade da justiça - multa de até 2% (art. 334 §8º). É realizada ANTES da contestação - prazo conta a partir dela.'
  },
  {
    id: 27,
    topic: 11,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o efeito material da revelia, é INCORRETO afirmar que se mitiga em caso de:',
    alternatives: [
      'Litisconsorte que apresenta defesa sobre fato comum.',
      'Direitos indisponíveis.',
      'PI desacompanhada de instrumento que a lei considere indispensável.',
      'Inverossimilhança das alegações ou contradição com prova nos autos.',
      'Réu que apresenta a contestação em prazo posterior ao legal.'
    ],
    correct: 'E',
    explanation: 'CPC art. 345 lista as 4 mitigações ao efeito material da revelia (presunção de veracidade): I) litisconsorte; II) indisponibilidade; III) falta de instrumento indispensável; IV) inverossimilhança. A apresentação de contestação intempestiva caracteriza REVELIA - não é mitigação dela. Pegadinha de inversão lógica.'
  },
  {
    id: 28,
    topic: 11,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre a fundamentação substancial da sentença (CPC art. 489 §1º), NÃO se considera fundamentada a decisão que:',
    alternatives: [
      'Aplica fundamentadamente uma súmula vinculante ao caso.',
      'Limita-se à indicação do ato normativo, sem explicar a relação com o caso.',
      'Distingue precedente aplicável demonstrando peculiaridades fáticas relevantes.',
      'Enfrenta todos os argumentos relevantes deduzidos pelas partes.',
      'Aplica conceito jurídico indeterminado com expressa contextualização ao caso.'
    ],
    correct: 'B',
    explanation: 'CPC art. 489 §1º I: NÃO é fundamentada a decisão que se limita à indicação, reprodução ou paráfrase do ato normativo, sem explicar sua relação com o caso. As demais alternativas descrevem fundamentações ADEQUADAS. As 6 hipóteses de fundamentação inadequada (incisos I-VI) elevam o ônus de motivação.'
  },
  {
    id: 29,
    topic: 12,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a multa do art. 523 §1º do CPC (cumprimento de sentença), conforme Tema 962/STJ:',
    alternatives: [
      'Incide somente após intimação pessoal do devedor.',
      'Incide automaticamente após 15 dias do prazo, mesmo sem intimação pessoal — basta a do advogado.',
      'É de 20% do valor do débito.',
      'Não se aplica a honorários advocatícios.',
      'Pode ser afastada por requerimento do devedor.'
    ],
    correct: 'B',
    explanation: 'STJ, Tema 962 (REsp 1.620.919): a multa de 10% do art. 523 §1º incide AUTOMATICAMENTE após o término do prazo de 15 dias, INDEPENDENTEMENTE de intimação pessoal do devedor. A intimação do advogado (via DJe) é suficiente. A multa é de 10% + honorários de 10% (art. 523 §1º) - somam 20% do valor.'
  },
  {
    id: 30,
    topic: 13,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a oposição no CPC/15:',
    alternatives: [
      'Continua como espécie de intervenção de terceiros, listada nos arts. 119-138.',
      'Foi extinta como instituto pelo CPC/15.',
      'Passou a ser AÇÃO AUTÔNOMA sob procedimento comum (arts. 682-686), não mais intervenção.',
      'Permanece intervenção, mas com prazo simplificado de 15 dias.',
      'Foi substituída pela nomeação à autoria.'
    ],
    correct: 'C',
    explanation: 'O CPC/15 retirou a oposição do rol de intervenções (arts. 119-138). Passou a ser AÇÃO AUTÔNOMA sob procedimento comum (arts. 682-686). Mantém julgamento conjunto se proposta antes da AIJ. Erro frequente em prova.'
  },
  {
    id: 31,
    topic: 14,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a curatela após o Estatuto da Pessoa com Deficiência (Lei 13.146/15):',
    alternatives: [
      'A curatela é instituto amplo, abrangendo todos os atos da vida civil.',
      'A pessoa com deficiência é sempre absolutamente incapaz.',
      'A curatela é EXCEPCIONAL e LIMITADA a atos patrimoniais e negociais.',
      'Foi extinta a curatela como instituto.',
      'Atos existenciais (casar, ter filhos, votar) sujeitam-se a controle do curador.'
    ],
    correct: 'C',
    explanation: 'A Lei 13.146/15 modificou profundamente a curatela: PCD são em regra civilmente capazes; a curatela é EXCEPCIONAL e LIMITADA a atos PATRIMONIAIS e negociais (CC art. 1.772). Atos EXISTENCIAIS (casar, votar, ter filhos, escolher tratamento) são preservados. A Tomada de Decisão Apoiada (CC art. 1.783-A) é alternativa menos invasiva.'
  },
  {
    id: 32,
    topic: 15,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre os embargos à execução no CPC/15:',
    alternatives: [
      'Exigem prévia garantia da execução para serem opostos.',
      'NÃO exigem garantia para oposição, mas a SUSPENSÃO da execução exige garantia.',
      'Devem ser opostos no prazo de 30 dias da intimação do devedor.',
      'Têm efeito suspensivo automático.',
      'São cabíveis apenas contra a Fazenda Pública.'
    ],
    correct: 'B',
    explanation: 'CPC/15 (mudança importante em relação ao CPC/73): os embargos à execução NÃO exigem garantia para serem opostos (prazo: 15 dias da juntada do mandado - art. 915). Mas a SUSPENSÃO da execução depende de garantia + risco grave (art. 919 §1º). Não há efeito suspensivo automático.'
  },
  {
    id: 33,
    topic: 15,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a impenhorabilidade salarial e seus limites:',
    alternatives: [
      'Salários são absolutamente impenhoráveis em qualquer hipótese.',
      'São impenhoráveis em regra, mas penhoráveis para alimentos e em quantias acima de 50 SM (no excedente).',
      'São penhoráveis em qualquer hipótese se a dívida for tributária.',
      'A impenhorabilidade só vale para servidores públicos.',
      'Salários acima de 10 SM são integralmente penhoráveis.'
    ],
    correct: 'B',
    explanation: 'CPC art. 833 IV + §2º + Súmula 394/STJ: salários são impenhoráveis EM REGRA, mas há duas exceções: (i) para pagamento de prestação ALIMENTÍCIA (sem limite); (ii) para quantias acima de 50 SALÁRIOS-MÍNIMOS mensais (penhorável no excedente). Erro frequente afirmar impenhorabilidade absoluta.'
  },
  {
    id: 34,
    topic: 16,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre a teoria da causa madura no CPC/15 (art. 1.013 §3º):',
    alternatives: [
      'Aplica-se quando a apelação é provida sobre matéria de mérito.',
      'Permite ao tribunal julgar diretamente o mérito quando a sentença foi terminativa e a causa está pronta para julgamento.',
      'Foi mantida na mesma sistemática do CPC/73, devolvendo o processo à 1ª instância.',
      'Aplica-se apenas se houver requerimento expresso das partes.',
      'Limita-se a causas de competência do STJ.'
    ],
    correct: 'B',
    explanation: 'CPC art. 1.013 §3º: em apelação contra sentença que NÃO RESOLVEU o mérito (terminativa - art. 485), o tribunal pode julgar DIRETAMENTE o mérito se a causa estiver em condições de imediato julgamento. Inversão da lógica do CPC/73 (que devolvia para 1ª instância).'
  },
  {
    id: 35,
    topic: 16,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre os embargos de declaração no CPC/15:',
    alternatives: [
      'SUSPENDEM o prazo dos demais recursos.',
      'INTERROMPEM o prazo dos demais recursos para todas as partes.',
      'Aplicam-se apenas a sentenças, não a acórdãos.',
      'Têm prazo de 15 dias úteis.',
      'Não admitem multa por caráter protelatório.'
    ],
    correct: 'B',
    explanation: 'CPC art. 1.026 (mudança importante CPC/15): os ED INTERROMPEM (não suspendem) o prazo dos demais recursos para TODAS as partes. Cabíveis contra qualquer decisão. Prazo: 5 dias úteis. Multa de até 2% (1ª) ou 10% (reiteração) por caráter protelatório (§§2º-3º).'
  },
  {
    id: 36,
    topic: 17,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a sucumbência do beneficiário da gratuidade da justiça (CPC art. 98 §3º):',
    alternatives: [
      'O beneficiário é integralmente isento de honorários e custas, mesmo se vencido.',
      'O beneficiário, se vencido, paga sucumbência em condições normais.',
      'O beneficiário, se vencido, é condenado em sucumbência, mas a exigibilidade fica suspensa por 5 anos.',
      'A condenação em sucumbência impede nova concessão de gratuidade.',
      'A suspensão da exigibilidade vale por 10 anos.'
    ],
    correct: 'C',
    explanation: 'CPC art. 98 §3º: o beneficiário vencido É CONDENADO em sucumbência, mas a EXIGIBILIDADE FICA SUSPENSA POR 5 ANOS. Cessada a hipossuficiência no prazo, exige-se. Esgotado o prazo sem mudança, há prescrição da pretensão. Mecanismo equilibrado entre proteção e responsabilização.'
  },
  {
    id: 37,
    topic: 18,
    banca: 'Simulada',
    nivel: 'Fácil',
    statement: 'Sobre a possibilidade de pessoa jurídica figurar como autora no JEC:',
    alternatives: [
      'Qualquer pessoa jurídica pode ser autora.',
      'Apenas pessoas jurídicas de direito público.',
      'Apenas microempresa, EPP, MEI e algumas entidades específicas (OSCIPs, sociedades de crédito ao microempreendedor).',
      'Sociedades anônimas podem, desde que com receita anual reduzida.',
      'É vedado a qualquer PJ ser autora no JEC.'
    ],
    correct: 'C',
    explanation: 'Lei 9.099/95 art. 8º §1º: PJ no JEC apenas como microempresa, empresa de pequeno porte, MEI, OSCIPs e sociedades de crédito ao microempreendedor. PJ comum NÃO entra. Pessoa jurídica de direito público também é VEDADA (art. 8º caput).'
  },
  {
    id: 38,
    topic: 19,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre os legitimados ativos do Mandado de Segurança Coletivo (CF art. 5º LXX):',
    alternatives: [
      'Apenas o Ministério Público.',
      'Partido político (com representação no CN), organização sindical, entidade de classe ou associação (em funcionamento há pelo menos 1 ano).',
      'Qualquer pessoa interessada na defesa de direito coletivo.',
      'Apenas a Defensoria Pública.',
      'Pessoa jurídica de direito público.'
    ],
    correct: 'B',
    explanation: 'CF art. 5º LXX + Lei 12.016/09 arts. 21-22: legitimados são (a) partido político com representação no CN; (b) organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos 1 ANO. Defensoria NÃO está no rol (mas tem legitimidade para ACP - distinção importante).'
  },
  {
    id: 39,
    topic: 20,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre o art. 16 da Lei 7.347/85 (LACP), conforme decisão do STF (RE 1.101.937, Tema 1.075):',
    alternatives: [
      'A coisa julgada na ACP fica limitada à competência territorial do juízo prolator.',
      'O dispositivo foi declarado INCONSTITUCIONAL: a coisa julgada na ACP é AMPLA, respeitando apenas o âmbito do interesse tutelado.',
      'Aplica-se apenas em ACPs ambientais.',
      'A limitação territorial vale apenas em causas estaduais.',
      'A norma foi expressamente revogada por nova lei em 2021.'
    ],
    correct: 'B',
    explanation: 'STF, RE 1.101.937 (Tema 1.075, abr/2021): "É inconstitucional o art. 16 da Lei 7.347/85, alterada pela Lei 9.494/97." A limitação territorial da coisa julgada coletiva foi RECHAÇADA. Hoje a coisa julgada na ACP é AMPLA, observando o âmbito do interesse tutelado (nacional/regional/local) e as regras de competência do art. 93 II do CDC.'
  },
  {
    id: 40,
    topic: 20,
    banca: 'Simulada',
    nivel: 'Difícil',
    statement: 'Sobre o ressarcimento ao erário por ato de improbidade administrativa, conforme STF Tema 897:',
    alternatives: [
      'É imprescritível em qualquer hipótese.',
      'Sempre prescreve em 5 anos.',
      'É imprescritível APENAS para atos DOLOSOS de improbidade.',
      'É imprescritível para atos culposos, em razão da maior dificuldade de identificação.',
      'Aplica-se o prazo prescricional de 10 anos do CC art. 205.'
    ],
    correct: 'C',
    explanation: 'STF, Tema 897 (RE 852.475): "São imprescritíveis as ações de ressarcimento ao erário fundadas na prática de ATO DOLOSO tipificado na Lei de Improbidade Administrativa." Após Lei 14.230/21, atos culposos não geram improbidade - seguem prazo prescricional civil ordinário.'
  },
  {
    id: 41,
    topic: 5,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre a intervenção do MP em execução fiscal:',
    alternatives: [
      'É obrigatória, por força do art. 178 I (interesse público).',
      'É facultativa, dependendo da Fazenda credora.',
      'É desnecessária, conforme Súmula 189/STJ.',
      'Só é obrigatória se houver dívida ativa de valor superior a 1.000 SM.',
      'Cabível apenas em executivos fiscais federais.'
    ],
    correct: 'C',
    explanation: 'STJ Súmula 189: "É desnecessária a intervenção do MP nas execuções fiscais." A simples presença da Fazenda como exequente NÃO caracteriza interesse público do art. 178 I para fins de intervenção do MP. Reforça a leitura RESTRITIVA do conceito de interesse público.'
  },
  {
    id: 42,
    topic: 9,
    banca: 'Simulada',
    nivel: 'Fácil',
    statement: 'Sobre a tutela de evidência (CPC art. 311):',
    alternatives: [
      'Exige a demonstração de probabilidade do direito e do perigo de dano.',
      'DISPENSA o requisito de perigo, exigindo apenas a evidência das hipóteses taxativas do art. 311.',
      'Pode ser concedida em qualquer hipótese, sem requisitos específicos.',
      'Aplica-se apenas em causas até 60 SM.',
      'É concedida apenas após a contestação.'
    ],
    correct: 'B',
    explanation: 'CPC art. 311: a tutela de evidência DISPENSA o perigo de dano (não há urgência - há "evidência" do direito). As 4 hipóteses são TAXATIVAS: I) abuso de defesa; II) tese repetitivo/SV + comprovação documental; III) reipersecutório com prova documental; IV) inicial documental + sem prova capaz de gerar dúvida razoável. Algumas podem ser concedidas liminarmente.'
  },
  {
    id: 43,
    topic: 6,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o foro do consumidor (CDC art. 101 I):',
    alternatives: [
      'É absoluto - o consumidor é OBRIGADO a demandar em seu próprio domicílio.',
      'É privilégio do consumidor: pode demandar em seu domicílio OU em outro foro de sua escolha.',
      'Aplica-se apenas em causas até 40 SM.',
      'Cabe ao fornecedor decidir o foro.',
      'É inderrogável por cláusula contratual de eleição de foro.'
    ],
    correct: 'B',
    explanation: 'CDC art. 101 I: o foro do domicílio do consumidor é PRIVILÉGIO seu - não vinculação. O consumidor PODE demandar em outro foro se preferir. Cláusula de eleição de foro abusiva em contrato de adesão é nula (CPC art. 63 §3º + CDC art. 51 IV) - única hipótese em que o juiz declara incompetência relativa de ofício.'
  },
  {
    id: 44,
    topic: 11,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o saneamento e organização do processo (CPC art. 357):',
    alternatives: [
      'É decisão monocrática insindicável.',
      'Resolve questões processuais pendentes, delimita questões controvertidas, distribui ônus probatório e define provas a produzir.',
      'Equivale ao despacho liminar positivo.',
      'É vedada a distribuição dinâmica do ônus da prova.',
      'A decisão de saneamento é irrecorrível.'
    ],
    correct: 'B',
    explanation: 'CPC art. 357: a decisão de saneamento é momento-chave do processo - resolve preliminares pendentes, delimita controvérsia fática (objeto da prova), distribui ônus probatório (regra ou DINÂMICA - §1º), define questões de direito relevantes e designa AIJ. Em causas complexas, pode haver audiência de saneamento (§3º). Saneamento consensual (§2º) é NJP típico.'
  },
  {
    id: 45,
    topic: 8,
    banca: 'Simulada',
    nivel: 'Médio',
    statement: 'Sobre o calendário processual (CPC art. 191):',
    alternatives: [
      'É instituto idêntico ao negócio jurídico processual atípico (art. 190).',
      'Permite ao juiz e às partes fixarem CONJUNTAMENTE prazos e datas para os atos processuais, com efeito vinculante.',
      'Substitui a sistemática de prazos legais.',
      'Aplicável apenas em causas de família.',
      'Requer homologação do tribunal superior.'
    ],
    correct: 'B',
    explanation: 'CPC art. 191: o calendário processual é fixado em comum acordo entre juiz e partes, com datas e prazos específicos para os atos processuais. É VINCULANTE - dispensa intimações específicas. Diferente do NJP do art. 190 (mais amplo, sobre regras procedimentais). Ambos exigem capacidade, livre disposição e contraditório.'
  },

  // ============ Bloco 8 — Fase 2 (PC 21-23) ============
  {
    id: 46, topic: 21, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a audiência de conciliação ou de mediação prevista no art. 334 do CPC, é correto afirmar:',
    alternatives: [
      'A audiência será sempre realizada, ainda que ambas as partes manifestem desinteresse, em razão do princípio do estímulo à autocomposição.',
      'Havendo litisconsórcio, a audiência somente deixará de ser realizada se TODOS os litisconsortes manifestarem desinteresse na composição consensual.',
      'O autor manifesta desinteresse na audiência por petição autônoma, no prazo de 10 dias da distribuição da inicial.',
      'A ausência injustificada da parte gera apenas multa por litigância de má-fé, no patamar de 1% sobre o valor da causa.',
      'A audiência é incompatível com causas que admitam autocomposição, sendo dispensada nesses casos.'
    ],
    correct: 'B',
    explanation: 'CPC art. 334 §6º: havendo litisconsórcio, o desinteresse na audiência só vale se TODOS manifestarem. Um único litisconsorte que queira a audiência impõe sua realização. (A) Se ambas recusarem expressamente, NÃO se realiza (§4º I). (C) Autor manifesta na própria PI (§5º). (D) Ausência é ato atentatório à dignidade da justiça, multa de até 2% (§8º). (E) Audiência é dispensada quando a causa NÃO admite autocomposição (§4º II), o oposto do enunciado.'
  },
  {
    id: 47, topic: 21, banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a Lei de Mediação (Lei 13.140/15) e a relação entre mediação e direitos indisponíveis, assinale a alternativa correta:',
    alternatives: [
      'A mediação é restrita a direitos patrimoniais disponíveis, sendo incompatível com direitos indisponíveis em qualquer hipótese.',
      'Direitos indisponíveis transigíveis admitem mediação, dispensando-se nesse caso a homologação judicial e a participação do Ministério Público.',
      'Direitos indisponíveis transigíveis admitem mediação, exigindo-se homologação judicial e oitiva do Ministério Público.',
      'A confidencialidade da mediação é absoluta e cobre inclusive informações relativas a crimes de ação pública.',
      'O acordo obtido em mediação extrajudicial sobre direitos disponíveis somente é eficaz após homologação judicial.'
    ],
    correct: 'C',
    explanation: 'Lei 13.140 art. 3º §§ 1º-2º: direitos indisponíveis MAS transigíveis (ex: valor de alimentos) admitem mediação, com homologação judicial + oitiva do MP. (A) Falso — mediação cabe em direitos indisponíveis transigíveis. (B) Falso — exige homologação e MP. (D) Falso — art. 30 da Lei 13.140 ressalva crime de ação pública (mediador deve denunciar). (E) Falso — acordo extrajudicial sobre direito disponível é título executivo extrajudicial, sem necessidade de homologação (art. 20 par. único).'
  },
  {
    id: 48, topic: 22, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a sentença arbitral e os meios de impugnação, é correto afirmar:',
    alternatives: [
      'Cabe apelação contra a sentença arbitral, no prazo de 15 dias úteis, perante o Tribunal de Justiça.',
      'A sentença arbitral interna depende de homologação pelo juiz togado para constituir título executivo judicial.',
      'A sentença arbitral pode ser desconstituída por ação anulatória, no prazo decadencial de 90 dias após o recebimento, nas hipóteses taxativas do art. 32 da Lei 9.307/96.',
      'A ação anulatória pode ser substituída por ação rescisória ajuizada no STJ, no prazo de 2 anos.',
      'A sentença arbitral estrangeira é homologada pelo STF, na forma do art. 102, I, "h", da Constituição Federal.'
    ],
    correct: 'C',
    explanation: 'Lei 9.307 art. 33 c/c art. 32: ação anulatória é o meio de impugnação à sentença arbitral, prazo decadencial de 90 dias, hipóteses taxativas. (A) Falso — não cabe recurso, só ação anulatória. (B) Falso — sentença arbitral interna é TEJ direto (CPC art. 515 VII + Lei 9.307 art. 31), sem homologação. (D) Falso — não há rescisória da sentença arbitral; só anulatória. (E) Falso — sentença arbitral estrangeira é homologada pelo STJ (CF art. 105 I i, alterado pela EC 45/2004).'
  },
  {
    id: 49, topic: 22, banca: 'Simulada', nivel: 'Difícil',
    statement: 'No tocante à arbitragem envolvendo a Administração Pública, conforme alterações da Lei 13.129/15, é INCORRETO afirmar:',
    alternatives: [
      'A arbitragem é admitida para dirimir conflitos relativos a direitos patrimoniais disponíveis envolvendo a Administração Pública direta e indireta.',
      'Veda-se a arbitragem por equidade no âmbito da Administração Pública, sendo obrigatória a arbitragem de direito.',
      'O princípio da publicidade impõe-se à arbitragem com a Administração, sendo proibido o sigilo tradicionalmente utilizado em arbitragens privadas.',
      'A autoridade competente para celebrar a convenção de arbitragem é a mesma para a celebração de acordos ou transações.',
      'A sentença arbitral em desfavor da Administração Pública depende de duplo grau de jurisdição (reexame necessário) para produzir efeitos.'
    ],
    correct: 'E',
    explanation: 'NÃO há reexame necessário em sentença arbitral contra a Administração — a sentença arbitral é título executivo judicial direto. O reexame necessário do CPC art. 496 aplica-se a sentenças JUDICIAIS. As demais alternativas são corretas: (A) art. 1º §1º; (B) art. 2º §3º; (C) art. 2º §3º; (D) art. 1º §2º.'
  },
  {
    id: 50, topic: 23, banca: 'Simulada', nivel: 'Médio',
    statement: 'No procedimento dos Juizados Especiais Cíveis (Lei 9.099/95), é correto afirmar:',
    alternatives: [
      'Os prazos processuais contam-se em dias úteis, em razão da aplicação subsidiária do CPC art. 219.',
      'Cabe recurso especial ao STJ contra acórdãos das Turmas Recursais quando houver violação à lei federal.',
      'A sentença pode ser ilíquida nas causas condenatórias, remetendo-se a liquidação para fase posterior.',
      'A capacidade postulatória da própria parte (jus postulandi) é admitida em causas até 20 salários-mínimos, mas o recurso inominado exige sempre advogado.',
      'Cabe ação rescisória contra sentença transitada em julgado nos Juizados Especiais, observado o prazo de 2 anos.'
    ],
    correct: 'D',
    explanation: 'Lei 9.099 art. 9º + FONAJE 36 + STJ Tema 1.111: jus postulandi até 20 SM, mas recurso inominado exige advogado. (A) Falso — prazos no JEC são CONTÍNUOS, CPC 219 NÃO se aplica (Súmula CJF 99 + FONAJE 165). (B) Falso — Súmula 203/STJ veda REsp do JEC. (C) Falso — art. 38 par. único veda sentença ilíquida. (E) Falso — FONAJE 44 veda rescisória no JEC.'
  },
  {
    id: 51, topic: 23, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre as partes admitidas no Juizado Especial Cível (art. 8º da Lei 9.099/95), assinale a alternativa correta:',
    alternatives: [
      'O espólio pode ser parte autora, exercendo os direitos do falecido nos juizados.',
      'A pessoa jurídica de grande porte pode ser autora desde que a causa não exceda 40 salários-mínimos.',
      'O incapaz pode ser autor mediante representação ou assistência, conforme regra geral.',
      'Microempresas, empresas de pequeno porte, OSCIP, MEI e sociedades de crédito ao microempreendedor podem ser autoras.',
      'A massa falida pode propor ações no JEC para acelerar a recuperação de créditos.'
    ],
    correct: 'D',
    explanation: 'Lei 9.099 art. 8º §1º + Lei 9.841/99 + LC 123/06: ME, EPP, OSCIP, MEI e sociedade de crédito ao microempreendedor podem ser autoras. (A) Falso — espólio NÃO pode ser parte (FONAJE 72). (B) Falso — apenas ME, EPP, OSCIP, MEI etc. (C) Falso — incapaz não pode ser parte (art. 8º §1º). (E) Falso — causas falimentares são EXCLUÍDAS do JEC (art. 3º §2º).'
  },
  {
    id: 52, topic: 23, banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre os recursos no JEC, considere as proposições e marque a CORRETA:',
    alternatives: [
      'Cabe recurso especial nos casos em que houver divergência jurisprudencial entre Turmas Recursais de diferentes estados.',
      'Cabe recurso extraordinário, com demonstração de repercussão geral, contra acórdão de Turma Recursal que decida questão constitucional.',
      'O recurso inominado dispensa o pagamento de preparo, em razão do princípio da economia processual.',
      'Os embargos de declaração no JEC têm prazo de 15 dias e não suspendem prazo para outros recursos.',
      'Cabe agravo de instrumento contra todas as decisões interlocutórias proferidas pelo juiz togado do JEC.'
    ],
    correct: 'B',
    explanation: 'É possível RE contra acórdãos de Turma Recursal, com repercussão geral. STF tem jurisprudência consolidada nesse sentido. (A) Falso — Súmula 203/STJ veda REsp; eventual divergência se resolve via Pedido de Uniformização. (C) Falso — art. 42: preparo é o DOBRO das custas iniciais. (D) Falso — ED têm prazo de 5 dias e SUSPENDEM o prazo para outros recursos (Súmula 640 indireta). (E) Falso — interlocutórias só impugnáveis com a sentença, salvo MS excepcional (TNU Súmula 8).'
  },
  {
    id: 53, topic: 21, banca: 'Simulada', nivel: 'Difícil',
    statement: 'Distingue mediação e conciliação, conforme o CPC e a Lei 13.140/15:',
    alternatives: [
      'Apenas o conciliador atua segundo princípios da imparcialidade e da informalidade; o mediador atua de forma diretiva.',
      'Mediação aplica-se preferencialmente a casos sem vínculo prévio, com sugestão de soluções pelo mediador; conciliação a casos com vínculo prévio, sem proposição de saídas.',
      'Mediação aplica-se preferencialmente a casos COM vínculo prévio, sem que o mediador sugira soluções; conciliação a casos SEM vínculo prévio, com possibilidade de o conciliador propor saídas.',
      'Não há diferença normativa entre os institutos; a denominação varia conforme a tradição forense de cada Estado.',
      'Apenas a mediação observa a confidencialidade; a conciliação é sempre pública.'
    ],
    correct: 'C',
    explanation: 'CPC art. 165 §§ 2º-3º: distinção legal pelo VÍNCULO PRÉVIO. Mediação = vínculo prévio, mediador FACILITA sem sugerir; conciliação = sem vínculo, conciliador pode SUGERIR. (A) Falso — ambos atuam com imparcialidade. (B) Inverte a regra. (D) Falso — diferença é normativa. (E) Falso — confidencialidade aplica-se a ambas.'
  },
  {
    id: 54, topic: 22, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a cláusula compromissória no contrato de adesão, é correto afirmar:',
    alternatives: [
      'É sempre nula, em razão da hipossuficiência presumida do aderente.',
      'Vincula automaticamente o aderente, em razão do princípio pacta sunt servanda.',
      'Somente terá eficácia se o aderente tomar a iniciativa OU concordar expressamente em destaque, com visto ou assinatura específica.',
      'Pode ser invocada de ofício pelo juiz para extinguir o processo sem mérito, em qualquer hipótese.',
      'Submete-se à homologação do CADE para vincular o aderente.'
    ],
    correct: 'C',
    explanation: 'Lei 9.307 art. 4º §2º: dupla proteção do aderente — iniciativa OU concordância em destaque + visto. (A) Falso — não é sempre nula; é eficaz se cumpridos os requisitos. (B) Falso — exige proteção adicional ao aderente. (D) Falso — convenção arbitral não é cognoscível de ofício (CPC art. 337 X + §5º). (E) Falso — não há intervenção do CADE em arbitragem privada.'
  },

  // ============ Bloco 9 — Fase 2 (PC 24-26) ============
  {
    id: 55, topic: 24, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre o Juizado Especial da Fazenda Pública (Lei 12.153/09), assinale a alternativa correta:',
    alternatives: [
      'A competência é facultativa para o autor, podendo escolher entre o JEFP e a vara da Fazenda comum nas causas até 60 SM.',
      'A competência é absoluta nas comarcas onde houver juizado instalado, abrangendo causas de até 60 salários-mínimos contra Estados, DF, Municípios e suas autarquias e fundações.',
      'O reexame necessário do CPC art. 496 aplica-se integralmente ao JEFP, em razão do princípio da supremacia do interesse público.',
      'Mandado de segurança e ações coletivas estão entre as causas inseridas na competência do JEFP.',
      'Apenas pessoas físicas podem ser autoras no JEFP, sendo vedada a participação de microempresas ou empresas de pequeno porte.'
    ],
    correct: 'B',
    explanation: 'Lei 12.153/09 art. 2º: competência ABSOLUTA, até 60 SM, contra entes estaduais/municipais. (A) Falso — competência absoluta (§4º). (C) Falso — art. 7º veda reexame necessário no JEFP. (D) Falso — art. 2º §1º exclui MS e ações coletivas. (E) Falso — ME e EPP podem ser autoras (art. 5º I).'
  },
  {
    id: 56, topic: 24, banca: 'Simulada', nivel: 'Difícil',
    statement: 'A respeito dos prazos processuais no Juizado Especial da Fazenda Pública (Lei 12.153/09), considere:',
    alternatives: [
      'Não se aplicam ao JEFP os prazos em dobro previstos no CPC art. 183, em razão do princípio da celeridade dos juizados.',
      'Aplicam-se ao JEFP os prazos em dobro do CPC art. 183, conforme entendimento firmado pelo STF (Tema 503).',
      'A Fazenda Pública goza de prazos em quádruplo no JEFP, conforme regra histórica do antigo CPC.',
      'Os prazos no JEFP são em dias úteis, pela aplicação subsidiária do CPC art. 219.',
      'Não existe contagem específica para Fazenda no JEFP, pois ela atua em igualdade com particulares.'
    ],
    correct: 'B',
    explanation: 'STF Tema 503 (RE 633.703): prazos em dobro do CPC aplicam-se ao JEFP por subsidiariedade. (A) Inverso da realidade. (C) Falso — quádruplo foi extinto. (D) Falso — prazos no JEFP são contínuos (subsidiariedade da Lei 9.099). (E) Falso — Fazenda goza de prerrogativas (Tema 503).'
  },
  {
    id: 57, topic: 25, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre os Juizados Especiais Federais (Lei 10.259/01), é correto afirmar:',
    alternatives: [
      'Aplica-se à União, autarquias federais e fundações federais o prazo em dobro do CPC art. 183.',
      'A competência é absoluta nas localidades onde houver vara federal especializada, abrangendo causas de até 60 salários-mínimos.',
      'Cabe recurso especial ao STJ contra acórdão da Turma Recursal Federal, com base na Lei 10.259/01.',
      'O Pedido de Uniformização cabe contra divergência entre Turmas Recursais sobre questões de DIREITO PROCESSUAL.',
      'Mandado de segurança contra ato federal é da competência do JEF quando o valor da causa não exceder 60 SM.'
    ],
    correct: 'B',
    explanation: 'Lei 10.259 art. 3º §3º: competência absoluta nas comarcas com JEF instalado, até 60 SM. (A) Falso — art. 9º veda prazos diferenciados para Fazenda no JEF. (C) Falso — Súmula 203/STJ veda REsp do JEF. (D) Falso — PU é só sobre direito MATERIAL. (E) Falso — MS está excluído (art. 3º §1º).'
  },
  {
    id: 58, topic: 25, banca: 'Simulada', nivel: 'Difícil',
    statement: 'Em relação à Turma Nacional de Uniformização de Jurisprudência (TNU) e ao Pedido de Uniformização no JEF, considere as proposições e marque a CORRETA:',
    alternatives: [
      'A TNU é integrada por desembargadores federais escolhidos pelos Tribunais Regionais Federais.',
      'O pedido de uniformização cabe quando há divergência entre Turmas Recursais sobre matéria processual ou material, indistintamente.',
      'Quando a decisão da TNU contrariar súmula ou jurisprudência dominante do STJ, cabe incidente perante o próprio STJ.',
      'O pedido de uniformização tem efeito suspensivo automático sobre a execução do acórdão da Turma Recursal.',
      'A TNU pode editar súmulas vinculantes para o Judiciário, equiparáveis às SVs do STF.'
    ],
    correct: 'C',
    explanation: 'Lei 10.259 art. 14 §4º: contra decisão da TNU contrária a súmula/jurisprudência STJ, cabe incidente no STJ. (A) Falso — TNU é integrada por JUÍZES FEDERAIS (10 juízes, 2 por região — art. 15). (B) Falso — PU só sobre direito MATERIAL. (D) Falso — não há efeito suspensivo automático. (E) Falso — súmulas da TNU não vinculam como SV do STF (CF art. 103-A).'
  },
  {
    id: 59, topic: 26, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a justiça gratuita no CPC/15, é correto afirmar:',
    alternatives: [
      'A pessoa jurídica não pode obter o benefício da gratuidade, em razão da impossibilidade de presunção de hipossuficiência.',
      'A gratuidade somente pode ser requerida na petição inicial, sob pena de preclusão temporal.',
      'O beneficiário da gratuidade derrotado na demanda fica integralmente dispensado de pagar honorários sucumbenciais e custas.',
      'O juiz pode indeferir o pedido de gratuidade sem prévia oportunidade de comprovação à parte, quando os autos evidenciarem capacidade financeira.',
      'O beneficiário derrotado é condenado em honorários sucumbenciais e custas, mas a exigibilidade fica suspensa por até 5 anos.'
    ],
    correct: 'E',
    explanation: 'CPC art. 98 §3º: beneficiário derrotado é CONDENADO em honorários, exigibilidade SUSPENSA por 5 anos. Se não houver melhora, prescreve. (A) Falso — Súmula 481/STJ permite à PJ que comprove. (B) Falso — Súmula 640/STJ: a qualquer tempo. (C) Falso — não há dispensa, há suspensão. (D) Falso — art. 99 §2º exige contraditório prévio.'
  },
  {
    id: 60, topic: 26, banca: 'Simulada', nivel: 'Médio',
    statement: 'No tocante ao pedido de gratuidade da justiça pela pessoa jurídica, é correto afirmar:',
    alternatives: [
      'É vedada à pessoa jurídica em qualquer hipótese, pelo princípio da personalidade.',
      'Apenas pessoas jurídicas sem fins lucrativos têm direito ao benefício.',
      'A pessoa jurídica, com ou sem fins lucrativos, pode obter a gratuidade desde que comprove a impossibilidade de arcar com os encargos processuais.',
      'A pessoa jurídica goza da mesma presunção iuris tantum de hipossuficiência que a pessoa física.',
      'A concessão à pessoa jurídica depende da prévia oitiva do Ministério Público em todos os casos.'
    ],
    correct: 'C',
    explanation: 'Súmula 481/STJ: PJ com OU sem fins lucrativos pode obter, desde que COMPROVE a impossibilidade. (A) Falso — possível desde que comprovada. (B) Falso — também as com fins lucrativos. (D) Falso — só PF tem presunção (art. 99 §3º); PJ deve provar. (E) Falso — MP só intervém em casos do art. 178 (interesse público/incapaz).'
  },

  // ============ Bloco 10 — Fase 2 (PC 27-30) ============
  {
    id: 61, topic: 27, banca: 'Simulada', nivel: 'Médio',
    statement: 'Em relação à cooperação jurídica internacional regulada pelo CPC/15, é correto afirmar:',
    alternatives: [
      'A homologação de sentença estrangeira é da competência do Supremo Tribunal Federal, conforme regra constitucional vigente.',
      'A sentença estrangeira de divórcio consensual produz efeitos no Brasil independentemente de homologação pelo STJ.',
      'O auxílio direto exige sempre prévio juízo de delibação pelo STJ, equiparando-se à carta rogatória.',
      'Na homologação de sentença estrangeira, o STJ examina o mérito da causa, podendo reformar a decisão proferida no exterior.',
      'A execução de sentença estrangeira homologada é da Justiça Estadual do domicílio do devedor.'
    ],
    correct: 'B',
    explanation: 'CPC art. 961 §5º: divórcio CONSENSUAL puro produz efeitos diretos, dispensando homologação. (A) Falso — STJ desde EC 45/2004 (CF 105 I i). (C) Falso — auxílio direto NÃO precisa de delibação (CPC art. 33: competência da JF). (D) Falso — art. 964 veda revisão de mérito (juízo de delibação). (E) Falso — execução é JF (CF 109 X + CPC 965).'
  },
  {
    id: 62, topic: 27, banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre o juízo de delibação na homologação de sentença estrangeira pelo STJ, é INCORRETO afirmar:',
    alternatives: [
      'Não comporta análise do mérito da decisão estrangeira, em razão da soberania jurisdicional do país de origem.',
      'O STJ verifica requisitos formais como autoridade competente, citação ou revelia legalmente verificada e tradução.',
      'A sentença estrangeira não pode ofender a coisa julgada brasileira nem a ordem pública nacional.',
      'A homologação é dispensada quando a sentença estrangeira já houver sido objeto de exequatur em carta rogatória.',
      'Em caso de divórcio consensual puro, o efeito da sentença é direto, dispensando-se a homologação.'
    ],
    correct: 'D',
    explanation: 'O exequatur (carta rogatória) NÃO substitui a homologação — são institutos distintos. Carta rogatória = ato isolado; homologação = reconhecimento da decisão como um todo. (A) Correto — art. 964. (B) Correto — art. 963. (C) Correto — art. 963 par. único. (E) Correto — art. 961 §5º.'
  },
  {
    id: 63, topic: 28, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre o microssistema de precedentes vinculantes do CPC/15, assinale a alternativa correta:',
    alternatives: [
      'O art. 927 do CPC enumera precedentes meramente persuasivos, sem qualquer eficácia vinculante.',
      'O distinguishing somente pode ser realizado pelo tribunal autor do precedente, vedado a juízos inferiores.',
      'O IRDR exige a efetiva repetição de processos sobre questão de direito, com risco à isonomia e à segurança jurídica.',
      'A reclamação cabe contra qualquer súmula do STJ, ainda que não vinculante, para garantir uniformidade.',
      'O overruling pode ser realizado por qualquer juiz, com fundamentação adequada, em decisão singular.'
    ],
    correct: 'C',
    explanation: 'CPC art. 976 I-II: IRDR exige efetiva repetição + risco à isonomia/segurança. (A) Falso — art. 927 traz precedentes obrigatórios. (B) Falso — distinguishing pode QUALQUER juiz com fundamentação adequada (art. 489 §1º VI). (D) Falso — Súmula 734/STF: só súmulas vinculantes. (E) Falso — overruling só pelo tribunal autor (ou superior).'
  },
  {
    id: 64, topic: 28, banca: 'Simulada', nivel: 'Difícil',
    statement: 'Considerando o IRDR (incidente de resolução de demandas repetitivas) e o IAC (incidente de assunção de competência), assinale a alternativa correta:',
    alternatives: [
      'Tanto o IRDR quanto o IAC exigem a efetiva repetição de processos sobre a mesma questão.',
      'O IRDR aplica-se a questão exclusivamente de direito; o IAC, a questões de fato e de direito conexas.',
      'O IRDR vincula apenas as partes do caso paradigma; o IAC, todos os juízes da área de jurisdição.',
      'A tese fixada no IRDR vincula os processos pendentes E os FUTUROS na área de jurisdição do tribunal.',
      'O IAC requer a aprovação do plenário do STF para produzir efeitos vinculantes nacionais.'
    ],
    correct: 'D',
    explanation: 'CPC art. 985 II: tese do IRDR aplica-se a casos pendentes E futuros (efeito ultra partes). (A) Falso — IAC NÃO exige repetição. (B) Falso — ambos sobre direito; IAC tem foco em "relevante questão de direito". (C) Inverte: IRDR vincula a área (947 §3º para IAC também). (E) Falso — IAC é interno do tribunal de 2º grau.'
  },
  {
    id: 65, topic: 29, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre o inquérito civil (Resolução CNMP 23/2007), é correto afirmar:',
    alternatives: [
      'É instrumento investigativo concorrente entre Ministério Público e Polícia Judiciária.',
      'A promoção de arquivamento depende de homologação pelo juiz competente, sob pena de nulidade.',
      'É instrumento investigativo exclusivo do Ministério Público (CF art. 129 III); o arquivamento submete-se ao Conselho Superior do MP.',
      'O inquérito civil tem prazo improrrogável de 6 meses para conclusão, conforme regulamento.',
      'O termo de ajustamento de conduta firmado em inquérito civil exige homologação judicial para constituir título executivo.'
    ],
    correct: 'C',
    explanation: 'Res. CNMP 23/2007 + CF art. 129 III: IC é exclusivo do MP. (A) Falso — exclusivo do MP. (B) Falso — arquivamento vai ao CSMP, NÃO ao juiz. (D) Falso — prazo é 1 ano, prorrogável (art. 9º). (E) Falso — TAC é título executivo EXTRAJUDICIAL direto (Lei 7.347 art. 5º §6º).'
  },
  {
    id: 66, topic: 29, banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre o limite do poder normativo do CNJ e do CNMP, é correto afirmar:',
    alternatives: [
      'As resoluções podem inovar sobre matéria reservada à lei, em razão da autonomia constitucional dos órgãos.',
      'As resoluções têm força de emenda constitucional quando aprovadas por maioria qualificada.',
      'Conforme decidido pelo STF (ADI 4.638), a competência normativa não é genérica nem alcança matéria reservada à lei.',
      'As resoluções dispensam controle judicial em razão do princípio da autoadministração.',
      'O Conselho pode revogar dispositivos legais por ato administrativo motivado.'
    ],
    correct: 'C',
    explanation: 'STF ADI 4.638: competência normativa do CNJ/CNMP é limitada à atividade administrativa do Poder/órgão; não substitui lei em matéria reservada (proporcionalidade + reserva legal). (A), (B), (D), (E) violam separação de poderes e reserva de lei.'
  },
  {
    id: 67, topic: 30, banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre os honorários sucumbenciais no CPC/15, é correto afirmar:',
    alternatives: [
      'O juiz pode compensar honorários quando há sucumbência recíproca, mantendo-se a regra do CPC/73.',
      'Os honorários têm natureza indenizatória, não alimentar, em razão da sua titularidade pela parte vencedora.',
      'Os honorários recursais (§11) não se aplicam a recursos contra a Fazenda Pública, em razão do interesse público.',
      'A condenação em honorários abrange a fase de cumprimento de sentença, a reconvenção e a execução resistida.',
      'O juiz pode fixar honorários abaixo do percentual mínimo legal quando entender excessivo o valor da condenação.'
    ],
    correct: 'D',
    explanation: 'CPC art. 85 §18: caput, §2º e demais aplicam-se também à reconvenção, ao cumprimento de sentença e à execução resistida. (A) Falso — §14 VEDA compensação. (B) Falso — §14 estabelece natureza ALIMENTAR. (C) Falso — §11 aplica-se à Fazenda. (E) Falso — STJ Tema 1.105 veda fixação abaixo do mínimo da faixa.'
  },
  {
    id: 68, topic: 30, banca: 'Simulada', nivel: 'Difícil',
    statement: 'A respeito das multas processuais no CPC/15, considerando os destinatários dos respectivos valores, é correto afirmar:',
    alternatives: [
      'A multa por litigância de má-fé (art. 81) reverte em favor da União ou do Estado, por sua natureza punitiva.',
      'A multa cominatória (astreintes — art. 537) é destinada à União, em substituição à execução privada.',
      'A multa por ato atentatório à dignidade da justiça (art. 77 §2º) reverte em favor da parte contrária prejudicada.',
      'A multa por ausência injustificada à audiência de conciliação (art. 334 §8º) reverte em favor da União ou do Estado.',
      'A multa por execução manifestamente protelatória (art. 918) é destinada ao juiz que conduz o processo.'
    ],
    correct: 'D',
    explanation: 'CPC art. 334 §8º: ausência à audiência = ato atentatório, multa até 2% à União/Estado. (A) Falso — má-fé reverte à PARTE CONTRÁRIA + indenização (art. 81). (B) Falso — astreintes vão ao EXEQUENTE. (C) Falso — atentatório ao art. 77 §2º vai à União/Estado. (E) Falso — protelação execução = exequente.'
  },

  // ============ Bloco 11 — Fase 3 (Civil 1-5 — Parte Geral) ============
  {
    id: 69, topic: 1, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a Lei de Introdução às Normas do Direito Brasileiro (LINDB), é correto afirmar:',
    alternatives: [
      'A revogação da lei revogadora restaura automaticamente a vigência da lei original revogada (repristinação).',
      'Lei nova de caráter geral revoga automaticamente lei especial anterior, em razão do critério cronológico.',
      'A vacatio legis de 45 dias é norma cogente, não admitindo prazo diverso fixado pela própria lei.',
      'Os arts. 20 a 30 da LINDB, introduzidos pela Lei 13.655/18, exigem que decisões considerem consequências práticas e zelem pela segurança jurídica.',
      'Em caso de antinomia entre normas, prevalece sempre o critério cronológico, ainda que conflite com hierárquico ou de especialidade.'
    ],
    correct: 'D',
    explanation: 'Lei 13.655/18 acrescentou arts. 20-30 — consequencialismo + segurança jurídica. (A) Falso — repristinação NÃO é automática (art. 2º §3º). (B) Falso — lei nova GERAL não revoga lei especial salvo disposição expressa (art. 2º §2º). (C) Falso — 45 dias é supletiva. (E) Falso — Bobbio: hierárquico vence cronológico; especialidade vence cronológico geral.'
  },
  {
    id: 70, topic: 1, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a responsabilização do agente público à luz do art. 28 da LINDB (incluído pela Lei 13.655/18), assinale a alternativa correta:',
    alternatives: [
      'O agente público responde pessoalmente por todos os atos que praticar, independentemente de culpa ou dolo.',
      'O agente público responde pessoalmente apenas em caso de dolo ou erro grosseiro.',
      'O agente público é absolutamente irresponsável por seus atos administrativos, em razão da imunidade funcional.',
      'A responsabilidade do agente é objetiva, dispensada a comprovação de dolo ou culpa.',
      'Mera divergência razoável de opinião gera responsabilidade pessoal do agente, em razão do princípio da legalidade.'
    ],
    correct: 'B',
    explanation: 'LINDB art. 28: responsabilização pessoal apenas por DOLO ou ERRO GROSSEIRO. Lei 13.655/18 protege administrador honesto que diverge razoavelmente. (A), (D), (E) ampliam indevidamente; (C) imunidade absoluta inexiste.'
  },
  {
    id: 71, topic: 2, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Após a Lei 13.146/15 (Estatuto da Pessoa com Deficiência), são absolutamente incapazes:',
    alternatives: [
      'Os menores de 18 anos e as pessoas com deficiência intelectual ou mental.',
      'Apenas os menores de 16 anos.',
      'Os maiores de 16 e menores de 18 anos.',
      'Os ébrios habituais e os pródigos.',
      'Apenas as pessoas que não puderem exprimir sua vontade, por causa transitória ou permanente.'
    ],
    correct: 'B',
    explanation: 'CC art. 3º (após EPD): apenas menores de 16 anos são absolutamente incapazes. Pessoa com deficiência mental ou intelectual NÃO é mais absolutamente incapaz — pode ser relativamente incapaz (art. 4º III) ou usar tomada de decisão apoiada (art. 1.783-A). (C) e (D) são relativamente incapazes (art. 4º).'
  },
  {
    id: 72, topic: 2, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a ausência (CC arts. 22-39), é correto afirmar:',
    alternatives: [
      'A sucessão definitiva pode ser aberta imediatamente, sem qualquer fase intermediária.',
      'A ausência tem três fases: curadoria, sucessão provisória e sucessão definitiva.',
      'Após a abertura da sucessão definitiva, o ausente que retornar tem direito à reposição integral de todos os bens, nos exatos termos em que se encontravam.',
      'A declaração de ausência exige prévia ação penal pela polícia.',
      'A sucessão provisória abre-se 5 anos após a declaração de ausência, em qualquer hipótese.'
    ],
    correct: 'B',
    explanation: 'Ausência tem 3 fases: (1) curadoria (art. 22); (2) sucessão provisória — após 1 ano da arrecadação ou 3 anos com representante (arts. 26-27); (3) sucessão definitiva — após 10 anos da provisória ou 5 das últimas notícias se tinha 80+ anos (art. 37). (C) Falso — art. 39: bens NO ESTADO em que se acharem, não integralmente.'
  },
  {
    id: 73, topic: 3, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a desconsideração da personalidade jurídica no direito brasileiro, assinale a alternativa correta:',
    alternatives: [
      'O Código Civil adota a Teoria Menor da desconsideração, bastando a insolvência da pessoa jurídica para atingir os sócios.',
      'O CDC e a legislação ambiental adotam a Teoria Maior, exigindo abuso da personalidade caracterizado por desvio de finalidade ou confusão patrimonial.',
      'O Código Civil (art. 50) adota a Teoria Maior — exige abuso da personalidade caracterizado por desvio de finalidade ou confusão patrimonial.',
      'A Lei 13.874/19 (Liberdade Econômica) eliminou a possibilidade de desconsideração no direito civil brasileiro.',
      'A desconsideração inversa, em que bens da PJ respondem por dívidas pessoais dos sócios, é vedada no ordenamento.'
    ],
    correct: 'C',
    explanation: 'CC art. 50 adota Teoria MAIOR: exige abuso (desvio de finalidade ou confusão patrimonial). (A) Inverte — Maior é CC. (B) Inverte — Menor é CDC e ambiental. (D) Falso — Lei 13.874/19 detalhou a desconsideração. (E) Falso — desconsideração inversa positivada no §4º (Lei 13.874).'
  },
  {
    id: 74, topic: 3, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a EIRELI (Empresa Individual de Responsabilidade Limitada) no direito brasileiro atual, é correto afirmar:',
    alternatives: [
      'A EIRELI permanece em pleno vigor como tipo societário unipessoal, com capital social mínimo de 100 salários-mínimos.',
      'A EIRELI foi extinta pela Lei 14.382/22 (Marco Legal das Garantias), tendo as existentes sido convertidas automaticamente em Sociedade Limitada Unipessoal (SLU).',
      'A EIRELI passou a ser denominada microempresa individual, com regime tributário simplificado.',
      'A EIRELI é exclusiva para atividades empresariais, vedada para sociedades simples.',
      'A EIRELI exige no mínimo dois sócios, perdendo a característica unipessoal após a Lei 13.874/19.'
    ],
    correct: 'B',
    explanation: 'Lei 14.382/22 extinguiu a EIRELI; SLU (Sociedade Limitada Unipessoal — Lei 13.874/19) absorveu a função unipessoal limitada. (A) e (E) Falso — EIRELI já não existe. (C) Falso — não houve renomeação. (D) Falso — EIRELI valia para qualquer atividade.'
  },
  {
    id: 75, topic: 4, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre o bem de família legal (Lei 8.009/90), considere as proposições e marque a CORRETA:',
    alternatives: [
      'Sua constituição depende de escritura pública e registro no Cartório de Imóveis, sob pena de não produzir efeitos.',
      'É instituído automaticamente pela mera residência, sendo o imóvel residencial impenhorável independentemente de declaração formal.',
      'Limita-se ao imóvel residencial cujo valor não ultrapasse 1/3 do patrimônio líquido do casal.',
      'A impenhorabilidade é absoluta, sem qualquer exceção legal.',
      'Não se aplica a imóvel residencial locado a terceiros, mesmo que a renda obtida seja revertida para subsistência da família.'
    ],
    correct: 'B',
    explanation: 'Lei 8.009/90 art. 1º: bem de família legal é AUTOMÁTICO — basta residência. (A) Falso — voluntário (CC 1.711) é que exige registro. (C) Falso — limite de 1/3 é do bem de família VOLUNTÁRIO. (D) Falso — art. 3º traz exceções (alimentos, financiamento, fiança locatícia etc.). (E) Falso — Súmula 486/STJ: imóvel locado pode ser bem de família se renda usada para subsistência.'
  },
  {
    id: 76, topic: 4, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre os bens públicos no direito brasileiro, é INCORRETO afirmar:',
    alternatives: [
      'Os bens de uso comum do povo e os de uso especial são inalienáveis, enquanto conservarem essa qualificação.',
      'Os bens dominicais podem ser alienados, observados os requisitos legais.',
      'Bens públicos não estão sujeitos a usucapião, conforme Súmula 340 do STF.',
      'A desafetação permite a transformação de bem de uso comum ou especial em dominical, viabilizando posterior alienação.',
      'Os bens dominicais, por não terem destinação pública específica, admitem prescrição aquisitiva por particulares que comprovem posse mansa e pacífica por longo período.'
    ],
    correct: 'E',
    explanation: 'Súmula 340/STF + CC art. 102: TODOS os bens públicos (inclusive dominicais) são IMPRESCRITÍVEIS. Não admitem usucapião por particular. (A), (B), (C), (D) corretas — alinhadas ao CC arts. 100-103.'
  },
  {
    id: 77, topic: 5, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'A respeito da prescrição e da decadência no Código Civil, é correto afirmar:',
    alternatives: [
      'A prescrição extingue o próprio direito; a decadência extingue apenas a pretensão.',
      'A decadência legal pode ser conhecida de ofício pelo juiz; a decadência convencional, somente mediante alegação da parte interessada.',
      'A prescrição admite interrupção repetida pelos mesmos fatos, em razão do princípio da inafastabilidade da jurisdição.',
      'A renúncia à decadência legal é válida quando feita antes da consumação do prazo.',
      'O prazo prescricional para a pretensão de reparação civil é de 5 anos, conforme regra geral do art. 205 do Código Civil.'
    ],
    correct: 'B',
    explanation: 'CC arts. 210-211: legal de ofício; convencional só por alegação. (A) Inverte — prescrição extingue PRETENSÃO; decadência extingue DIREITO. (C) Falso — interrupção UMA SÓ VEZ (art. 202 caput). (D) Falso — renúncia à decadência legal é NULA (art. 209). (E) Falso — reparação civil prescreve em 3 ANOS (art. 206 §3º V).'
  },
  {
    id: 78, topic: 5, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre os defeitos do negócio jurídico e suas consequências, assinale a alternativa correta:',
    alternatives: [
      'Todos os defeitos do negócio jurídico (erro, dolo, coação, lesão, estado de perigo, fraude e simulação) geram a anulabilidade do ato.',
      'A simulação gera nulidade absoluta, podendo ser arguida a qualquer tempo, por qualquer interessado ou pelo Ministério Público.',
      'A lesão somente pode ser alegada pela parte lesada na ação anulatória, sem possibilidade de complementação para preservar o negócio.',
      'A fraude contra credores caracteriza-se por mera diminuição do patrimônio do devedor, independentemente de redução à insolvência.',
      'O erro substancial admite suprimento pelos sucessores, em razão do princípio da boa-fé objetiva.'
    ],
    correct: 'B',
    explanation: 'CC art. 167: simulação = NULIDADE absoluta. Pode ser arguida por qualquer interessado, MP, conhecida de ofício. (A) Falso — simulação é NULIDADE, não anulabilidade. (C) Falso — art. 157 §2º: lesão admite COMPLEMENTAÇÃO para conservar o negócio. (D) Falso — fraude exige redução à INSOLVÊNCIA (art. 158). (E) Falso — erro substancial gera anulabilidade, não suprimento por sucessores.'
  },

  // ============ Bloco 12 — Fase 3 (Civil 6-7 — Obrigações) ============
  {
    id: 79, topic: 6, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a solidariedade obrigacional no Direito Civil brasileiro, é correto afirmar:',
    alternatives: [
      'A solidariedade presume-se quando há multiplicidade de devedores ou de credores em uma mesma obrigação.',
      'A solidariedade decorre apenas da lei ou da vontade expressa das partes; não se presume.',
      'A solidariedade ativa permite que o credor escolha qual devedor pagará a dívida proporcional.',
      'A renúncia da solidariedade pelo credor a um dos devedores extingue automaticamente a solidariedade em relação a todos.',
      'A solidariedade entre devedores impede a sub-rogação interna entre eles.'
    ],
    correct: 'B',
    explanation: 'CC art. 265: solidariedade NÃO se presume — só por LEI ou VONTADE expressa. (A) Falso — em dúvida, obrigação conjuntiva. (C) Falso — solidariedade ATIVA refere-se a vários CREDORES, não devedores. (D) Falso — art. 282: renúncia a um devedor não dispensa demais. (E) Falso — devedor que paga sub-roga-se nos direitos do credor (art. 283).'
  },
  {
    id: 80, topic: 6, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a cessão de crédito e a assunção de dívida no Código Civil, é INCORRETO afirmar:',
    alternatives: [
      'A cessão de crédito tem eficácia perante o devedor a partir da notificação, dispensando seu consentimento.',
      'A assunção de dívida exige consentimento expresso do credor para que o terceiro possa substituir o devedor original.',
      'O credor cessionário tem os mesmos direitos do credor cedente, podendo opor ao devedor as exceções que este teria.',
      'A assunção de dívida é vedada em qualquer hipótese, em razão da pessoalidade do vínculo obrigacional.',
      'O devedor pode opor ao cessionário as exceções pessoais que tinha ao cedente, desde que existentes ao tempo da notificação.'
    ],
    correct: 'D',
    explanation: 'Assunção de dívida é PERMITIDA (CC arts. 299-303), exigindo apenas consentimento expresso do credor. As demais alternativas são corretas: (A) art. 290; (B) art. 299; (C)/(E) art. 294 — devedor pode opor exceções pessoais ao cessionário.'
  },
  {
    id: 81, topic: 7, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a mora no Direito Civil, é correto afirmar:',
    alternatives: [
      'Toda obrigação, independentemente de termo, exige interpelação para constituição em mora.',
      'A mora ex re ocorre automaticamente em obrigações positivas e líquidas, com termo certo, dispensando interpelação.',
      'A mora do credor (mora accipiendi) impossibilita a posterior consignação em pagamento.',
      'O devedor em mora não responde por caso fortuito ocorrido durante o atraso.',
      'A mora ex persona incide automaticamente em obrigações ilícitas (responsabilidade extracontratual).'
    ],
    correct: 'B',
    explanation: 'CC art. 397 caput: mora EX RE em obrigação positiva e líquida com termo. (A) Falso — sem termo é EX PERSONA. (C) Falso — credor em mora viabiliza consignação pelo devedor. (D) Falso — devedor em mora responde até por fortuito (art. 399). (E) Falso — em obrigações ILÍCITAS mora desde o ATO ILÍCITO (art. 398), não é ex persona.'
  },
  {
    id: 82, topic: 7, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a cláusula penal no Código Civil, considere as proposições e marque a CORRETA:',
    alternatives: [
      'A cláusula penal compensatória é cumulativa à execução da obrigação principal, em razão do princípio da reparação integral.',
      'A cláusula penal moratória é alternativa, podendo o credor escolher entre cobrar a pena ou exigir o cumprimento da obrigação.',
      'O valor da cláusula penal pode exceder o valor da obrigação principal, desde que estipulado expressamente pelas partes.',
      'A cláusula penal compensatória opera em caso de inadimplemento total e é alternativa; a cláusula penal moratória opera em caso de mora e é cumulativa.',
      'A cláusula penal manifestamente excessiva NÃO pode ser reduzida pelo juiz, em razão da autonomia da vontade.'
    ],
    correct: 'D',
    explanation: 'CC arts. 410-411: compensatória (inadimplemento total) é ALTERNATIVA; moratória (atraso) é CUMULATIVA. (A) Inverte: compensatória é alternativa. (B) Inverte: moratória é cumulativa. (C) Falso — art. 412: limite é o valor da obrigação principal. (E) Falso — art. 413: juiz REDUZ equitativamente se manifestamente excessivo.'
  },

  // ============ Bloco 13 — Fase 3 (Civil 11 — Responsabilidade Civil) ============
  {
    id: 83, topic: 11, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a responsabilidade civil objetiva no direito brasileiro, é correto afirmar:',
    alternatives: [
      'Aplica-se exclusivamente nas hipóteses expressamente previstas em lei especial, sendo vedada a aplicação por cláusula geral.',
      'A vítima fica dispensada de provar o dano e o nexo causal.',
      'O CC/02 adotou cláusula geral de risco no art. 927 par. único, gerando responsabilidade objetiva quando a atividade normalmente desenvolvida implicar risco aos direitos de outrem por sua natureza.',
      'A responsabilidade objetiva é incompatível com o ordenamento jurídico brasileiro, que adota a teoria da culpa em todos os casos.',
      'Apenas a responsabilidade do Estado prevista no art. 37 §6º da Constituição é objetiva no direito brasileiro.'
    ],
    correct: 'C',
    explanation: 'CC art. 927 par. único: cláusula geral de risco — atividade que normalmente implique risco POR SUA NATUREZA = responsabilidade OBJETIVA. (A) Falso — cláusula geral expandiu hipóteses. (B) Falso — vítima ainda prova dano e nexo. (D) Falso — sistema brasileiro admite ambas. (E) Falso — há objetiva também em CDC, ambiental, atividade de risco etc.'
  },
  {
    id: 84, topic: 11, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'A respeito da responsabilidade dos pais por atos dos filhos menores, é INCORRETO afirmar:',
    alternatives: [
      'Os pais respondem objetivamente pelos atos dos filhos menores que estiverem sob sua autoridade (CC arts. 932 I + 933).',
      'A responsabilidade dos pais independe de demonstração de culpa em sua atuação educacional.',
      'O filho menor responde de forma SOLIDÁRIA com os pais, podendo ser executado independentemente da falta de patrimônio dos pais.',
      'O filho menor responde de forma SUBSIDIÁRIA, somente se os pais não tiverem condições econômicas para arcar com a indenização (art. 928).',
      'Se o ato for praticado pelo filho menor sem assistência ou conhecimento dos pais, e estiver fora da esfera familiar, a responsabilidade pode ser afastada.'
    ],
    correct: 'C',
    explanation: 'CC art. 928: filho menor responde SUBSIDIARIAMENTE — só se os pais não tiverem condições. NÃO é solidária. As demais alternativas estão corretas conforme CC arts. 928, 932 I e 933.'
  },
  {
    id: 85, topic: 11, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre o dano moral e o dano estético no direito brasileiro, é correto afirmar:',
    alternatives: [
      'Dano moral e dano estético são institutos idênticos, vedando-se sua cumulação para evitar bis in idem.',
      'A pessoa jurídica não pode sofrer dano moral, em razão da incompatibilidade com a natureza das pessoas jurídicas.',
      'É lícita a cumulação de indenizações de dano moral e dano estético, desde que decorrentes do mesmo fato (Súmula 387/STJ).',
      'O dano in re ipsa (presumido) aplica-se a toda inscrição em cadastro de proteção ao crédito, ainda que existam inscrições anteriores legítimas.',
      'O dano moral só é indenizável quando há prova específica do sofrimento da vítima, mediante perícia psicológica.'
    ],
    correct: 'C',
    explanation: 'Súmula 387/STJ: cumulação possível. Estético (lesão à aparência) e moral (lesão à dignidade) são autônomos. (A) Errado — institutos distintos. (B) Errado — Súmula 227/STJ. (D) Errado — Súmula 385/STJ: anotação preexistente legítima afasta dano moral. (E) Errado — alguns danos morais são in re ipsa.'
  },
  {
    id: 86, topic: 11, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a responsabilidade civil do Estado, conforme jurisprudência do STF, marque a alternativa CORRETA:',
    alternatives: [
      'A responsabilidade do Estado é sempre subjetiva, fundada na teoria do risco administrativo.',
      'A omissão genérica do Estado (falta de policiamento amplo) gera responsabilidade objetiva, equiparada a ato comissivo.',
      'Por ato comissivo do agente, a responsabilidade é OBJETIVA (art. 37 §6º CF); a omissão GENÉRICA é SUBJETIVA (faute du service); a omissão ESPECÍFICA (existindo dever determinado de agir) volta a ser OBJETIVA.',
      'O Estado adota a teoria do risco integral, sem qualquer excludente de responsabilidade.',
      'O direito de regresso do Estado contra o agente é absoluto, independendo de comprovação de dolo ou culpa.'
    ],
    correct: 'C',
    explanation: 'STF Tema 366 (RE 841.526) — responsabilidade do Estado: comissivo OBJETIVO (art. 37 §6º); omissão genérica SUBJETIVA (faute du service); omissão específica OBJETIVA. (A) Falso — comissivo é objetivo. (B) Falso — omissão genérica é SUBJETIVA. (D) Falso — teoria adotada é RISCO ADMINISTRATIVO (com excludentes). (E) Falso — regresso depende de DOLO ou CULPA do agente (CF 37 §6º final).'
  },

  // ============ Bloco 14 — Fase 3 (Civil 8-9 — Contratos) ============
  {
    id: 87, topic: 8, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre os princípios contratuais no direito brasileiro, é correto afirmar:',
    alternatives: [
      'A autonomia da vontade é princípio absoluto, não admitindo qualquer limitação por outros princípios.',
      'A função social do contrato (CC art. 421) limita a autonomia da vontade, vedando contratos que conflitem com os interesses sociais.',
      'A boa-fé objetiva é estado psicológico do contratante, exigindo prova da intenção positiva.',
      'A boa-fé objetiva tem apenas função interpretativa, não impondo deveres anexos às partes.',
      'O princípio da pacta sunt servanda foi totalmente abandonado pelo CC/02, em razão da função social.'
    ],
    correct: 'B',
    explanation: 'CC art. 421: liberdade de contratar exercida nos LIMITES da função social. (A) Falso — autonomia é relativizada. (C) Falso — boa-fé OBJETIVA é modelo de conduta, não estado psicológico (que seria a SUBJETIVA). (D) Falso — três funções: interpretativa, integrativa e controle. (E) Falso — pacta sunt servanda mantém-se como base, com mitigações.'
  },
  {
    id: 88, topic: 8, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a teoria da imprevisão e a onerosidade excessiva, conforme o CC e o CDC, é correto afirmar:',
    alternatives: [
      'O CC e o CDC adotam a mesma fórmula para revisão contratual, exigindo fato extraordinário e imprevisível.',
      'O CC exige fato extraordinário e imprevisível para resolver/revisar contrato (art. 478); o CDC dispensa imprevisibilidade — basta a onerosidade superveniente (art. 6º V).',
      'Apenas o CDC permite revisão contratual; no direito civil, vigora pacta sunt servanda absoluto.',
      'A onerosidade excessiva no CC autoriza apenas a resolução, vedada a revisão para reequilíbrio.',
      'A teoria da imprevisão foi expressamente afastada pelo CC/02, em homenagem à autonomia da vontade.'
    ],
    correct: 'B',
    explanation: 'CC art. 478 vs CDC art. 6º V: CC exige IMPREVISIBILIDADE; CDC basta o desequilíbrio. (A) Falso — fórmulas distintas. (C) Falso — CC também admite (art. 478). (D) Falso — art. 479 permite revisão pela outra parte. (E) Falso — CC/02 expressamente positivou a teoria.'
  },
  {
    id: 89, topic: 9, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre a doação no Código Civil, assinale a alternativa correta:',
    alternatives: [
      'A doação pura é sempre revogável a critério do doador.',
      'O rol de hipóteses de ingratidão (art. 557) é exemplificativo, podendo o juiz adicionar outras condutas reprováveis.',
      'A doação que excede o limite de disposição testamentária (1/2 do patrimônio) é NULA, independentemente de boa-fé do donatário.',
      'A doação não admite cláusula modal, devendo ser pura ou condicional.',
      'O direito de revogar por ingratidão pode ser exercido pelos herdeiros do doador a qualquer tempo.'
    ],
    correct: 'C',
    explanation: 'CC art. 549: doação que excede 1/2 do patrimônio (limite testamentário) é NULA — proteção da legítima. (A) Falso — pura é IRREVOGÁVEL salvo ingratidão. (B) Falso — rol é TAXATIVO (art. 557). (D) Falso — doação MODAL é admitida (art. 540). (E) Falso — direito de revogar é do DOADOR, incomunicável aos herdeiros (art. 559).'
  },
  {
    id: 90, topic: 9, materia: 'civil', banca: 'Simulada', nivel: 'Difícil',
    statement: 'Sobre a fiança no direito brasileiro, assinale a alternativa correta:',
    alternatives: [
      'A fiança admite interpretação extensiva, em razão da garantia integral pretendida pelo credor.',
      'O benefício de ordem é IRRENUNCIÁVEL pelo fiador, sob pena de nulidade da cláusula.',
      'O fiador na locação responde por obrigações decorrentes de aditamento contratual, ainda que não tenha anuído.',
      'O bem de família do fiador locatício é impenhorável em qualquer hipótese, em razão do direito constitucional à moradia.',
      'A fiança é interpretada restritivamente (art. 819) e o fiador não responde por aditamento sem sua anuência (Súmula 214/STJ).'
    ],
    correct: 'E',
    explanation: 'CC art. 819 + Súmula 214/STJ: interpretação RESTRITIVA da fiança; sem anuência ao aditamento, não responde. (A) Falso — interpretação restritiva. (B) Falso — benefício de ordem é RENUNCIÁVEL (art. 828). (C) Falso — Súmula 214 STJ. (D) Falso — Lei 8.009/90 art. 3º VII + STF Tema 295: penhorável.'
  },

  // ============ Bloco 15 — Fase 3 (Civil 10 + 12) ============
  {
    id: 91, topic: 10, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre o enriquecimento sem causa no Código Civil, é correto afirmar:',
    alternatives: [
      'A ação por enriquecimento sem causa pode ser usada concorrentemente com outras ações disponíveis ao lesado, em razão da reparação integral.',
      'A ação por enriquecimento sem causa é subsidiária — somente cabe quando a lei não conferir ao lesado outros meios para se ressarcir do prejuízo (art. 886).',
      'O enriquecimento sem causa exige a comprovação de ato ilícito por parte do beneficiado.',
      'A ação por enriquecimento sem causa é imprescritível, em razão da gravidade do desequilíbrio.',
      'Quem paga dívida prescrita pode pleitear sua repetição com base no enriquecimento sem causa.'
    ],
    correct: 'B',
    explanation: 'CC art. 886: subsidiariedade. (A) Falso — só quando NÃO há outra ação específica. (C) Falso — não exige ilicitude. (D) Falso — submete-se ao prazo geral (10 anos — art. 205) ou específicos. (E) Falso — art. 882: pagamento de dívida prescrita NÃO se repete.'
  },
  {
    id: 92, topic: 12, materia: 'civil', banca: 'Simulada', nivel: 'Médio',
    statement: 'Sobre o conceito de empresário no CC/02 e sua aplicação a profissionais intelectuais, é correto afirmar:',
    alternatives: [
      'Todo profissional que exerce atividade econômica organizada é considerado empresário, independentemente da natureza da profissão.',
      'Profissionais intelectuais (médicos, advogados, escritores, artistas) NÃO são considerados empresários, salvo se o exercício da profissão constituir ELEMENTO DE EMPRESA.',
      'Profissionais liberais sempre são empresários, em razão da remuneração pela atividade.',
      'O CC/02 manteve a teoria dos atos de comércio adotada pelo CCom/1850.',
      'O empresário, mesmo individual, é obrigatoriamente registrado no Cartório de Pessoas Jurídicas.'
    ],
    correct: 'B',
    explanation: 'CC art. 966 par. único: profissional intelectual NÃO é empresário, salvo se elemento de empresa. (A) Falso — exclui intelectuais. (C) Falso — só se for elemento de empresa. (D) Falso — CC/02 adotou TEORIA DA EMPRESA (italiana). (E) Falso — empresário individual registra-se na JUNTA COMERCIAL (art. 967).'
  }
],

// ============ SÚMULAS RELEVANTES ============
sumulas: [
  // STF Súmulas Vinculantes
  { tribunal: 'STF', tipo: 'SV', num: 10, topic: 16, text: 'Viola a cláusula de reserva de plenário (CF, art. 97) a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.' },
  { tribunal: 'STF', tipo: 'SV', num: 17, topic: 12, text: 'Durante o período previsto no parágrafo 1º do art. 100 da Constituição Federal, não incidem juros de mora sobre os precatórios que nele sejam pagos.' },
  { tribunal: 'STF', tipo: 'SV', num: 25, topic: 1, text: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' },

  // STF Súmulas
  { tribunal: 'STF', tipo: 'Súmula', num: 267, topic: 19, text: 'Não cabe mandado de segurança contra ato judicial passível de recurso ou correição.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 268, topic: 19, text: 'Não cabe mandado de segurança contra decisão judicial com trânsito em julgado.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 269, topic: 19, text: 'O mandado de segurança não é substitutivo de ação de cobrança.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 271, topic: 19, text: 'Concessão de mandado de segurança não produz efeitos patrimoniais em relação a período pretérito, os quais devem ser reclamados administrativamente ou pela via judicial própria.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 279, topic: 16, text: 'Para simples reexame de prova não cabe recurso extraordinário.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 280, topic: 16, text: 'Por ofensa a direito local não cabe recurso extraordinário.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 282, topic: 16, text: 'É inadmissível o recurso extraordinário, quando não ventilada, na decisão recorrida, a questão federal suscitada.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 343, topic: 16, text: 'Não cabe ação rescisória por ofensa a literal disposição de lei, quando a decisão rescindenda se tiver baseado em texto legal de interpretação controvertida nos tribunais.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 356, topic: 16, text: 'O ponto omisso da decisão, sobre o qual não foram opostos embargos declaratórios, não pode ser objeto de recurso extraordinário, por faltar o requisito do prequestionamento.' },
  { tribunal: 'STF', tipo: 'Súmula', num: 365, topic: 20, text: 'Pessoa jurídica não tem legitimidade para propor ação popular.' },

  // STJ Súmulas
  { tribunal: 'STJ', tipo: 'Súmula', num: 2, topic: 19, text: 'Não cabe o habeas data (CF, art. 5º, LXXII, letra a) se não houve recusa de informações por parte da autoridade administrativa.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 7, topic: 16, text: 'A pretensão de simples reexame de prova não enseja recurso especial.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 33, topic: 6, text: 'A incompetência relativa não pode ser declarada de ofício.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 84, topic: 14, text: 'É admissível a oposição de embargos de terceiro fundados em alegação de posse advinda do compromisso de compra e venda de imóvel, ainda que desprovido do registro.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 99, topic: 5, text: 'O Ministério Público tem legitimidade para recorrer no processo em que oficiou como fiscal da lei, ainda que não haja recurso da parte.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 106, topic: 8, text: 'Proposta a ação no prazo fixado para o seu exercício, a demora na citação, por motivos inerentes ao mecanismo da Justiça, não justifica o acolhimento da arguição de prescrição ou decadência.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 150, topic: 16, text: 'Compete à Justiça Federal decidir sobre a existência de juízo arbitral. (Aplicação análoga: prescreve em cinco anos a ação rescisória.)' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 189, topic: 5, text: 'É desnecessária a intervenção do Ministério Público nas execuções fiscais.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 203, topic: 18, text: 'Não cabe recurso especial contra decisão proferida por órgão de segundo grau dos Juizados Especiais.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 211, topic: 16, text: 'Inadmissível recurso especial quanto à questão que, a despeito da oposição de embargos declaratórios, não foi apreciada pelo Tribunal a quo.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 226, topic: 5, text: 'O Ministério Público tem legitimidade para recorrer na ação de acidente do trabalho, ainda que o segurado esteja assistido por advogado.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 231, topic: 11, text: 'A incidência da revelia não implica a procedência do pedido.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 235, topic: 6, text: 'A conexão não determina a reunião dos processos, se um deles já foi julgado.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 240, topic: 10, text: 'A extinção do processo, por abandono da causa pelo autor, depende de requerimento do réu.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 259, topic: 14, text: 'A ação de prestação de contas pode ser proposta pelo titular de conta-corrente bancária.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 309, topic: 13, text: 'O débito alimentar que autoriza a prisão civil do alimentante é o que compreende as três prestações anteriores ao ajuizamento da execução e as que se vencerem no curso do processo.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 314, topic: 15, text: 'Em execução fiscal, não localizados bens penhoráveis, suspende-se o processo por um ano, findo o qual se inicia o prazo da prescrição quinquenal intercorrente.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 329, topic: 20, text: 'O Ministério Público tem legitimidade para propor ação civil pública em defesa do patrimônio público.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 339, topic: 13, text: 'É cabível ação monitória contra a Fazenda Pública.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 372, topic: 19, text: 'Na ação de exibição de documentos, não cabe a aplicação de multa cominatória.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 375, topic: 15, text: 'O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova de má-fé do terceiro adquirente.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 384, topic: 13, text: 'Cabe ação monitória para haver saldo remanescente oriundo de venda extrajudicial de bem alienado fiduciariamente em garantia.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 393, topic: 15, text: 'A exceção de pré-executividade é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que não demandem dilação probatória.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 394, topic: 15, text: 'É admissível, em embargos à execução, compensar os valores de imposto de renda retidos indevidamente na fonte com os valores restituídos apurados na declaração anual.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 410, topic: 4, text: 'A prévia intimação pessoal do devedor constitui condição necessária para a cobrança de multa pelo descumprimento de obrigação de fazer ou não fazer.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 414, topic: 8, text: 'A citação por edital na execução fiscal é cabível quando frustradas as demais modalidades.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 460, topic: 19, text: 'É incabível o mandado de segurança para convalidar a compensação tributária realizada pelo contribuinte.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 481, topic: 17, text: 'Faz jus ao benefício da justiça gratuita a pessoa jurídica com ou sem fins lucrativos que demonstrar sua impossibilidade de arcar com os encargos processuais.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 485, topic: 1, text: 'A Lei de Arbitragem aplica-se aos contratos que contenham cláusula arbitral, ainda que celebrados antes da sua edição.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 489, topic: 6, text: 'Reconhecida a continência, devem ser reunidas na Justiça Federal as ações civis públicas propostas nesta e na Justiça estadual.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 503, topic: 6, text: 'O prazo para ajuizamento de ação monitória em face do emitente de cheque sem força executiva é quinquenal, a contar do dia seguinte à data de emissão estampada na cártula.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 556, topic: 6, text: 'É competente a Justiça Estadual para processar e julgar as causas em que é parte sociedade de economia mista federal.' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 612, topic: 15, text: 'O direito à prestação dos serviços de assistência médico-hospitalar contratados originariamente com a operadora não pode ser obstado, mesmo após o inadimplemento, sem prévia notificação. (Tese análoga aplicada à exigência de memória discriminada em excesso de execução, art. 525, §4º).' },
  { tribunal: 'STJ', tipo: 'Súmula', num: 637, topic: 14, text: 'O ente público tem legitimidade e interesse para intervir, como amicus curiae, em ação possessória entre particulares, podendo opinar sobre questões de ordem pública envolvidas.' },
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
  ],
  fase2Meses: [
    { mes: 'Mês 1 (out)', topicos: '21, 22, 23', notas: 'Mediação/conciliação, arbitragem, JEC. Eixo "modos alternativos + microssistema".' },
    { mes: 'Mês 2 (nov)', topicos: '24, 25, 26, 27, 28, 29, 30', notas: 'Juizados Fazenda/Federal, gratuidade, cooperação internacional, precedentes, CNJ/CNMP, honorários. Bloco mais leve em volume; foco em jurisprudência consolidada.' }
  ],
  fase3Meses: [
    { mes: 'Mês 1 (dez/26)', topicos: 'civ 1-5', notas: 'LINDB, pessoas naturais e jurídicas, bens, fatos jurídicos. Base que sustenta tudo o resto.' },
    { mes: 'Mês 2 (jan/27)', topicos: 'civ 6-9', notas: 'Obrigações geral + inadimplemento, contratos geral + espécie. Volume alto — quebrar contratos em sub-resumos.' },
    { mes: 'Mês 3 (fev/27)', topicos: 'civ 10-13', notas: 'Atos unilaterais, responsabilidade civil, empresa, posse e propriedade.' },
    { mes: 'Mês 4 (mar/27)', topicos: 'civ 14-17 + revisão', notas: 'Garantias reais, família, sucessões. Última semana = simulado integrando Civil + PC.' }
  ]
}

};
