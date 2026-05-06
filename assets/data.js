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
      { h: 'Foco central', items: [
        'Aplicação da lei processual no tempo (tempus regit actum) e no espaço',
        'CPC arts. 1º a 15 — normas fundamentais',
        'Princípio da inafastabilidade da jurisdição (CF art. 5º XXXV)',
        'Métodos de interpretação: gramatical, sistemática, teleológica, histórica',
        '"Diálogo das fontes" — Erik Jayme: aplicação simultânea de fontes (especialmente CDC e CC) para harmonização normativa'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 1º a 15 (normas fundamentais do processo)',
        'LINDB (Decreto-Lei 4.657/42), arts. 1º a 6º (vigência) e 20-30 (interpretação no setor público)'
      ]},
      { h: 'Pontos críticos para prova', items: [
        'O CPC adota o modelo constitucional de processo (art. 1º)',
        'Princípio do isolamento dos atos processuais — nova lei aplica-se aos atos a praticar',
        'Boa-fé objetiva como dever de todos os sujeitos do processo (art. 5º)'
      ]}
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
      { h: 'Foco central', items: [
        'Princípios constitucionais do processo: devido processo legal, contraditório, ampla defesa, duração razoável (CF art. 5º LXXVIII), juiz natural',
        'CPC art. 1º — modelo constitucional do processo',
        'Convencionalidade: Convenção Americana de DH (Pacto de São José da Costa Rica) e impacto no processo civil',
        'Sistema interamericano: Comissão e Corte IDH'
      ]},
      { h: 'Lei seca primária', items: [
        'CF/88 art. 5º (LIV, LV, LXXVIII)',
        'CPC arts. 1º a 12 (normas fundamentais)',
        'Convenção Americana de DH (Decreto 678/92)'
      ]},
      { h: 'Jurisprudência relevante', items: [
        'STF — supralegalidade dos tratados de DH não incorporados como EC',
        'Casos da Corte IDH com impacto processual (Damião Ximenes Lopes, Gomes Lund, etc.)',
        'Acompanhar via Buscador Dizer o Direito'
      ]}
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
      { h: 'Foco central', items: [
        'Jurisdição: conceito, características (substitutividade, definitividade, inércia), teorias (Carnelutti, Chiovenda, Allorio)',
        'Equivalentes jurisdicionais: autocomposição, mediação, arbitragem',
        'Ação: direito autônomo, abstrato, instrumental — teorias (imanentista, concretista, abstrata)',
        'Condições da ação no CPC: legitimidade e interesse (possibilidade jurídica deixou de ser autônoma)',
        'Exceção: defesa em sentido amplo (toda resistência) e estrito (defesas processuais)',
        'Processo: relação jurídica processual triangular; pressupostos processuais (existência, validade, eficácia)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 16-20, 175',
        'CF/88 art. 5º XXXV (inafastabilidade)'
      ]},
      { h: 'Pegadinhas', items: [
        'Teoria da asserção × condições in concreto: a maioria adota asserção (verifica condições à luz das alegações)',
        'Arbitragem: jurisdição ou equivalente jurisdicional? Doutrina divide; STJ tende a tratar como jurisdicional',
        'Pressupostos processuais × condições da ação — distinguir bem'
      ]}
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
      { h: 'Foco central', items: [
        'Capacidade: ser parte (capacidade de direito) × estar em juízo (capacidade processual) × postular (capacidade postulatória)',
        'Substituição processual = legitimação extraordinária (atua em nome próprio defendendo direito alheio)',
        'Litisconsórcio: necessário/facultativo, simples/unitário, ativo/passivo, inicial/ulterior',
        'Intervenção de terceiros: assistência (simples e litisconsorcial), denunciação da lide, chamamento ao processo, IDPJ, amicus curiae',
        'IDPJ — instaurado a requerimento; suspende o processo; cabe agravo de instrumento (CPC art. 1015 IV)',
        'Amicus curiae — natureza jurídica, requisitos (relevância da matéria, especificidade, repercussão social), limites recursais'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 70-80 (capacidade), 113-118 (litisconsórcio), 119-138 (intervenção, IDPJ, amicus)'
      ]},
      { h: 'Jurisprudência relevante', items: [
        'STJ Tema 1019 — IDPJ na execução fiscal (cabimento)',
        'STF RE 1101937 — amicus curiae (limites recursais)',
        'Súmula 375/STJ — fraude à execução exige inscrição da penhora'
      ]},
      { h: 'Pegadinhas', items: [
        'Desconsideração direta (objetiva, art. 50 CC) × inversa (alcançar bens da PJ a partir de dívida do sócio)',
        'Amicus curiae não recorre, salvo: contra decisão de admissão e em IRDR/IAC',
        'Litisconsórcio multitudinário — limitação pelo juiz (CPC art. 113 §1º)'
      ]}
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
      { h: 'Foco central', items: [
        'MP no processo civil: parte (legitimidade ativa) × fiscal da ordem jurídica (custos legis)',
        'Hipóteses obrigatórias de intervenção (CPC art. 178): interesse público/social, incapaz, litígios coletivos sobre posse rural',
        'Prazo do MP em dobro (CPC art. 180); Defensoria também (art. 186); Advocacia Pública também (art. 183)',
        'Curador especial pela Defensoria (CPC art. 72): réu preso, citado por edital ou hora certa, incapaz sem representante',
        'Nulidade pela ausência de intimação do MP — só nulidade absoluta se houver prejuízo (princípio do prejuízo)'
      ]},
      { h: 'Lei seca primária', items: [
        'CPC arts. 176-188',
        'CF/88 arts. 127-130 (MP), 131-132 (Adv. Pública), 134 (DP)',
        'LC 75/93 (MPU); LC 34/94 (MP/MG)',
        'LC 80/94 (Defensoria Pública)'
      ]},
      { h: 'Jurisprudência relevante', items: [
        'STJ Tema 1075 e 1076 — intimação do MP',
        'Súmula 99/STJ — MP intervém em ações de família com interesse de incapaz',
        'Súmula 226/STJ — MP tem legitimidade para ACP em defesa de direitos individuais homogêneos disponíveis'
      ]}
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
