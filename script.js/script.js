
'use strict';

// =====================================================
// DADOS DAS 30 FRANQUIAS DA NBA
// =====================================================

// Os títulos representam conquistas históricas da NBA.
// As informações não representam o desempenho atual.

const TEAMS = [
  {
    id: 'ATL',
    name: 'Atlanta Hawks',
    city: 'Atlanta',
    conference: 'Leste',
    division: 'Sudeste',
    founded: 1946,
    titles: 1,
    arena: 'State Farm Arena',
    accent: '#e03a3e',
    history: 'A franquia começou como Buffalo Bisons, passou por outras cidades e se estabeleceu em Atlanta em 1968. Seu título foi conquistado em 1958, quando jogava em St. Louis. Dominique Wilkins é um dos grandes nomes de sua história.'
  },
  {
    id: 'BOS',
    name: 'Boston Celtics',
    city: 'Boston',
    conference: 'Leste',
    division: 'Atlântico',
    founded: 1946,
    titles: 18,
    arena: 'TD Garden',
    accent: '#007a33',
    history: 'Uma das franquias mais vitoriosas da liga. Dominou grande parte dos anos 1960 com Bill Russell e conquistou títulos em diferentes eras, incluindo a equipe de Larry Bird nos anos 1980 e o campeonato de 2024.'
  },
  {
    id: 'BKN',
    name: 'Brooklyn Nets',
    city: 'Brooklyn',
    conference: 'Leste',
    division: 'Atlântico',
    founded: 1967,
    titles: 0,
    arena: 'Barclays Center',
    accent: '#ffffff',
    history: 'Criada em 1967, a franquia disputou a ABA antes de entrar na NBA em 1976. Depois de jogar em Nova Jersey, mudou-se para o Brooklyn em 2012. Conquistou títulos na ABA, mas ainda busca seu primeiro campeonato da NBA.'
  },
  {
    id: 'CHA',
    name: 'Charlotte Hornets',
    city: 'Charlotte',
    conference: 'Leste',
    division: 'Sudeste',
    founded: 1988,
    titles: 0,
    arena: 'Spectrum Center',
    accent: '#00788c',
    history: 'A franquia original de Charlotte estreou em 1988. A história da marca Hornets teve mudanças e realinhamentos, e o nome foi recuperado em 2014. A equipe ainda busca seu primeiro título da NBA.'
  },
  {
    id: 'CHI',
    name: 'Chicago Bulls',
    city: 'Chicago',
    conference: 'Leste',
    division: 'Central',
    founded: 1966,
    titles: 6,
    arena: 'United Center',
    accent: '#ce1141',
    history: 'Tornou-se uma potência global nos anos 1990 ao conquistar seis campeonatos, liderada por Michael Jordan, Scottie Pippen e pelo técnico Phil Jackson. É uma das marcas mais reconhecidas do basquete mundial.'
  },
  {
    id: 'CLE',
    name: 'Cleveland Cavaliers',
    city: 'Cleveland',
    conference: 'Leste',
    division: 'Central',
    founded: 1970,
    titles: 1,
    arena: 'Rocket Mortgage FieldHouse',
    accent: '#860038',
    history: 'O momento mais marcante da franquia aconteceu em 2016, quando venceu as Finais após estar perdendo a série por 3 a 1 contra o Golden State Warriors. LeBron James foi o principal nome daquela conquista.'
  },
  {
    id: 'DAL',
    name: 'Dallas Mavericks',
    city: 'Dallas',
    conference: 'Oeste',
    division: 'Sudoeste',
    founded: 1980,
    titles: 1,
    arena: 'American Airlines Center',
    accent: '#00538c',
    history: 'Fundado em 1980, conquistou o campeonato de 2011 com Dirk Nowitzki como grande referência. A franquia também chegou às Finais em outras temporadas e teve estrelas como Luka Dončić.'
  },
  {
    id: 'DEN',
    name: 'Denver Nuggets',
    city: 'Denver',
    conference: 'Oeste',
    division: 'Noroeste',
    founded: 1967,
    titles: 1,
    arena: 'Ball Arena',
    accent: '#0e2240',
    history: 'Começou na ABA como Denver Rockets e adotou o nome Nuggets em 1974. Conquistou seu primeiro título da NBA em 2023, liderado por Nikola Jokić e Jamal Murray.'
  },
  {
    id: 'DET',
    name: 'Detroit Pistons',
    city: 'Detroit',
    conference: 'Leste',
    division: 'Central',
    founded: 1941,
    titles: 3,
    arena: 'Little Caesars Arena',
    accent: '#c8102e',
    history: 'A franquia nasceu em Fort Wayne e mudou-se para Detroit em 1957. Ficou marcada pelos Bad Boys no fim dos anos 1980 e pelo título de 2004, conquistado por uma equipe conhecida pela defesa coletiva.'
  },
  {
    id: 'GS',
    name: 'Golden State Warriors',
    city: 'San Francisco',
    conference: 'Oeste',
    division: 'Pacífico',
    founded: 1946,
    titles: 7,
    arena: 'Chase Center',
    accent: '#1d428a',
    history: 'Fundada na Filadélfia, a franquia mudou-se para a Califórnia e adotou o nome Golden State. A era liderada por Stephen Curry, Klay Thompson e Draymond Green conquistou quatro títulos entre 2015 e 2022.'
  },
  {
    id: 'HOU',
    name: 'Houston Rockets',
    city: 'Houston',
    conference: 'Oeste',
    division: 'Sudoeste',
    founded: 1967,
    titles: 2,
    arena: 'Toyota Center',
    accent: '#ce1141',
    history: 'A equipe começou em San Diego e mudou-se para Houston em 1971. Conquistou títulos consecutivos em 1994 e 1995, liderada por Hakeem Olajuwon. Também teve estrelas como Moses Malone, Yao Ming e James Harden.'
  },
  {
    id: 'IND',
    name: 'Indiana Pacers',
    city: 'Indianapolis',
    conference: 'Leste',
    division: 'Central',
    founded: 1967,
    titles: 0,
    arena: 'Gainbridge Fieldhouse',
    accent: '#002d62',
    history: 'Fundado na ABA, o Indiana Pacers entrou na NBA em 1976. Conquistou títulos na antiga liga, mas ainda busca seu primeiro campeonato da NBA. Reggie Miller é um dos maiores ídolos da franquia.'
  },
  {
    id: 'LAC',
    name: 'LA Clippers',
    city: 'Los Angeles',
    conference: 'Oeste',
    division: 'Pacífico',
    founded: 1970,
    titles: 0,
    arena: 'Intuit Dome',
    accent: '#c8102e',
    history: 'A franquia nasceu como Buffalo Braves, passou por San Diego e chegou a Los Angeles em 1984. Nos anos 2010, ficou conhecida pela equipe de Chris Paul, Blake Griffin e DeAndre Jordan, apelidada de Lob City.'
  },
  {
    id: 'LAL',
    name: 'Los Angeles Lakers',
    city: 'Los Angeles',
    conference: 'Oeste',
    division: 'Pacífico',
    founded: 1947,
    titles: 17,
    arena: 'Crypto.com Arena',
    accent: '#552583',
    history: 'Nascida em Minneapolis, a franquia mudou-se para Los Angeles em 1960. Sua história inclui eras de George Mikan, Magic Johnson, Kareem Abdul-Jabbar, Kobe Bryant, Shaquille O’Neal e LeBron James.'
  },
  {
    id: 'MEM',
    name: 'Memphis Grizzlies',
    city: 'Memphis',
    conference: 'Oeste',
    division: 'Sudoeste',
    founded: 1995,
    titles: 0,
    arena: 'FedExForum',
    accent: '#5d76a9',
    history: 'A franquia nasceu em Vancouver em 1995 e mudou-se para Memphis em 2001. Ficou conhecida pelo estilo físico Grit and Grind, com Marc Gasol, Zach Randolph, Mike Conley e Tony Allen.'
  },
  {
    id: 'MIA',
    name: 'Miami Heat',
    city: 'Miami',
    conference: 'Leste',
    division: 'Sudeste',
    founded: 1988,
    titles: 3,
    arena: 'Kaseya Center',
    accent: '#98002e',
    history: 'Fundado em 1988, conquistou títulos em 2006, 2012 e 2013. Dwyane Wade foi central no primeiro campeonato, enquanto LeBron James e Chris Bosh integraram o Big Three dos títulos de 2012 e 2013.'
  },
  {
    id: 'MIL',
    name: 'Milwaukee Bucks',
    city: 'Milwaukee',
    conference: 'Leste',
    division: 'Central',
    founded: 1968,
    titles: 2,
    arena: 'Fiserv Forum',
    accent: '#00471b',
    history: 'Conquistou seu primeiro título em 1971 com Kareem Abdul-Jabbar e Oscar Robertson. Voltou ao topo em 2021, liderado por Giannis Antetokounmpo, que marcou 50 pontos no jogo decisivo das Finais.'
  },
  {
    id: 'MIN',
    name: 'Minnesota Timberwolves',
    city: 'Minneapolis',
    conference: 'Oeste',
    division: 'Noroeste',
    founded: 1989,
    titles: 0,
    arena: 'Target Center',
    accent: '#0c2340',
    history: 'Criado em 1989, teve Kevin Garnett como grande ídolo, MVP em 2004. Em anos recentes, voltou a disputar fases avançadas com uma nova geração de jogadores, incluindo Anthony Edwards.'
  },
  {
    id: 'NOP',
    name: 'New Orleans Pelicans',
    city: 'New Orleans',
    conference: 'Oeste',
    division: 'Sudoeste',
    founded: 2002,
    titles: 0,
    arena: 'Smoothie King Center',
    accent: '#0c2340',
    history: 'A franquia começou em New Orleans em 2002, passou temporariamente por Oklahoma City após o furacão Katrina e adotou o nome Pelicans em 2013. Chris Paul e Anthony Davis estão entre seus nomes de destaque.'
  },
  {
    id: 'NY',
    name: 'New York Knicks',
    city: 'New York',
    conference: 'Leste',
    division: 'Atlântico',
    founded: 1946,
    titles: 2,
    arena: 'Madison Square Garden',
    accent: '#006bb6',
    history: 'Uma das franquias originais da NBA, fundada em 1946. Conquistou campeonatos em 1970 e 1973 e joga no Madison Square Garden, em Manhattan. É conhecida por sua torcida histórica.'
  },
  {
    id: 'OKC',
    name: 'Oklahoma City Thunder',
    city: 'Oklahoma City',
    conference: 'Oeste',
    division: 'Noroeste',
    founded: 1967,
    titles: 2,
    arena: 'Paycom Center',
    accent: '#007ac1',
    history: 'A franquia nasceu como Seattle SuperSonics, conquistou um título em 1979 e mudou-se para Oklahoma City em 2008. A franquia também conquistou o campeonato de 2025, liderada por uma nova geração competitiva.'
  },
  {
    id: 'ORL',
    name: 'Orlando Magic',
    city: 'Orlando',
    conference: 'Leste',
    division: 'Sudeste',
    founded: 1989,
    titles: 0,
    arena: 'Kia Center',
    accent: '#0077c0',
    history: 'Fundado em 1989, chegou às Finais em 1995 com Shaquille O’Neal e Penny Hardaway e voltou à decisão em 2009 com Dwight Howard. Ainda busca seu primeiro título da NBA.'
  },
  {
    id: 'PHI',
    name: 'Philadelphia 76ers',
    city: 'Philadelphia',
    conference: 'Leste',
    division: 'Atlântico',
    founded: 1946,
    titles: 3,
    arena: 'Xfinity Mobile Arena',
    accent: '#006bb6',
    history: 'A franquia começou como Syracuse Nationals e mudou-se para Filadélfia em 1963. Conquistou títulos em 1955, 1967 e 1983. Wilt Chamberlain, Julius Erving e Allen Iverson estão entre suas figuras históricas.'
  },
  {
    id: 'PHX',
    name: 'Phoenix Suns',
    city: 'Phoenix',
    conference: 'Oeste',
    division: 'Pacífico',
    founded: 1968,
    titles: 0,
    arena: 'Mortgage Matchup Center',
    accent: '#1d1160',
    history: 'Fundado em 1968, chegou às Finais em 1976, 1993 e 2021, mas ainda busca seu primeiro campeonato. Charles Barkley, Steve Nash, Devin Booker e outros grandes nomes marcaram sua trajetória.'
  },
  {
    id: 'POR',
    name: 'Portland Trail Blazers',
    city: 'Portland',
    conference: 'Oeste',
    division: 'Noroeste',
    founded: 1970,
    titles: 1,
    arena: 'Moda Center',
    accent: '#e03a3e',
    history: 'Fundado em 1970, conquistou seu único título em 1977 com Bill Walton. Ao longo das décadas, teve estrelas como Clyde Drexler, Brandon Roy e Damian Lillard.'
  },
  {
    id: 'SAC',
    name: 'Sacramento Kings',
    city: 'Sacramento',
    conference: 'Oeste',
    division: 'Pacífico',
    founded: 1923,
    titles: 1,
    arena: 'Golden 1 Center',
    accent: '#5a2d81',
    history: 'A franquia começou como Rochester Royals em 1923, conquistou o título de 1951 e passou por várias cidades antes de se estabelecer em Sacramento em 1985.'
  },
  {
    id: 'SAS',
    name: 'San Antonio Spurs',
    city: 'San Antonio',
    conference: 'Oeste',
    division: 'Sudoeste',
    founded: 1967,
    titles: 5,
    arena: 'Frost Bank Center',
    accent: '#c4ced4',
    history: 'Entrou na NBA em 1976 após jogar na ABA. Seus cinco títulos foram conquistados entre 1999 e 2014, com nomes como Tim Duncan, Tony Parker, Manu Ginóbili e o técnico Gregg Popovich.'
  },
  {
    id: 'TOR',
    name: 'Toronto Raptors',
    city: 'Toronto',
    conference: 'Leste',
    division: 'Atlântico',
    founded: 1995,
    titles: 1,
    arena: 'Scotiabank Arena',
    accent: '#ce1141',
    history: 'Criado em 1995, é a única franquia da NBA sediada no Canadá. Conquistou seu primeiro título em 2019, liderado por Kawhi Leonard, com apoio de Kyle Lowry e outros jogadores.'
  },
  {
    id: 'UTA',
    name: 'Utah Jazz',
    city: 'Salt Lake City',
    conference: 'Oeste',
    division: 'Noroeste',
    founded: 1974,
    titles: 0,
    arena: 'Delta Center',
    accent: '#002b5c',
    history: 'A franquia começou em New Orleans em 1974 e mudou-se para Salt Lake City em 1979. Chegou às Finais em 1997 e 1998 com John Stockton e Karl Malone, mas perdeu para os Bulls.'
  },
  {
    id: 'WAS',
    name: 'Washington Wizards',
    city: 'Washington, D.C.',
    conference: 'Leste',
    division: 'Sudeste',
    founded: 1961,
    titles: 1,
    arena: 'Capital One Arena',
    accent: '#002b5c',
    history: 'A franquia começou como Chicago Packers em 1961 e passou por mudanças de nome e cidade. Seu único título veio em 1978, quando era conhecida como Washington Bullets.'
  }
];

// =====================================================
// LOGOS DOS TIMES
// =====================================================

const ESPN_LOGO_CODES = {
  ATL: 'atl',
  BOS: 'bos',
  BKN: 'bkn',
  CHA: 'cha',
  CHI: 'chi',
  CLE: 'cle',
  DAL: 'dal',
  DEN: 'den',
  DET: 'det',
  GS: 'gs',
  HOU: 'hou',
  IND: 'ind',
  LAC: 'lac',
  LAL: 'lal',
  MEM: 'mem',
  MIA: 'mia',
  MIL: 'mil',
  MIN: 'min',
  NOP: 'no',
  NY: 'ny',
  OKC: 'okc',
  ORL: 'orl',
  PHI: 'phi',
  PHX: 'phx',
  POR: 'por',
  SAC: 'sac',
  SAS: 'sa',
  TOR: 'tor',
  UTA: 'utah',
  WAS: 'wsh'
};

const LOGO = team =>
  `https://a.espncdn.com/i/teamlogos/nba/500/${ESPN_LOGO_CODES[team.id]}.png`;

const $ = id => document.getElementById(id);

// =====================================================
// BUSCA, FILTROS E CARTÕES DAS EQUIPES
// =====================================================

const conferenceFilter = $('conferenceFilter');
const divisionFilter = $('divisionFilter');
const teamSearch = $('teamSearch');
const sortTeams = $('sortTeams');

function logoMarkup(team, extraClass = 'team-logo') {
  return `
    <img
      class="${extraClass}"
      src="${LOGO(team)}"
      alt="Logo do ${team.name}"
      loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.hidden=false"
    >
    <span
      class="team-logo-fallback"
      hidden
      style="--team-accent:${team.accent}"
    >${team.id}</span>
  `;
}

function renderTeams() {
  const q = teamSearch.value.trim().toLocaleLowerCase('pt-BR');

  let filtered = TEAMS.filter(t => {
    const conferenceMatches =
      conferenceFilter.value === 'all' ||
      t.conference === conferenceFilter.value;

    const divisionMatches =
      divisionFilter.value === 'all' ||
      t.division === divisionFilter.value;

    const text = `${t.name} ${t.city} ${t.division} ${t.conference}`;
    const searchMatches =
      text.toLocaleLowerCase('pt-BR').includes(q);

    return conferenceMatches && divisionMatches && searchMatches;
  });

  if (sortTeams.value === 'titles') {
    filtered.sort((a, b) =>
      b.titles - a.titles || a.name.localeCompare(b.name)
    );
  } else if (sortTeams.value === 'founded') {
    filtered.sort((a, b) =>
      a.founded - b.founded || a.name.localeCompare(b.name)
    );
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  $('teamCount').textContent =
    `${filtered.length} ${filtered.length === 1 ? 'equipe' : 'equipes'}`;

  $('teamGrid').innerHTML = filtered.length
    ? filtered.map(t => `
      <article
        class="team-card"
        style="--team-accent:${t.accent}"
      >
        <div class="team-card-top">
          ${logoMarkup(t)}

          <div>
            <h3 class="team-name">${t.name}</h3>
            <p class="team-city">${t.city}</p>
          </div>
        </div>

        <div class="team-tags">
          <span class="tag">Conferência ${t.conference}</span>
          <span class="tag">${t.division}</span>
        </div>

        <p class="team-description">
          ${t.history.length > 125
            ? t.history.slice(0, 122) + '…'
            : t.history}
        </p>

        <div class="team-card-bottom">
          <span class="team-titles">
            <strong>${t.titles}</strong>
            ${t.titles === 1 ? 'título NBA' : 'títulos NBA'}
          </span>

          <button class="card-button" data-team="${t.id}">
            Ver perfil ↗
          </button>
        </div>
      </article>
    `).join('')
    : `
      <div class="empty-state">
        <span>⌕</span>
        <p>Nenhum time encontrado. Tente outra busca ou limpe os filtros.</p>
      </div>
    `;
}

[
  teamSearch,
  conferenceFilter,
  divisionFilter,
  sortTeams
].forEach(el => {
  el.addEventListener(
    el === teamSearch ? 'input' : 'change',
    renderTeams
  );
});

$('clearFilters').addEventListener('click', () => {
  teamSearch.value = '';
  conferenceFilter.value = 'all';
  divisionFilter.value = 'all';
  sortTeams.value = 'name';
  renderTeams();
});

$('teamGrid').addEventListener('click', e => {
  const btn = e.target.closest('[data-team]');
  if (!btn) return;
  openTeam(btn.dataset.team);
});

// =====================================================
// JANELA COM DETALHES DOS TIMES
// =====================================================

function openTeam(id) {
  const t = TEAMS.find(x => x.id === id);
  if (!t) return;

  $('teamDialogContent').innerHTML = `
    <div class="dialog-team-head">
      ${logoMarkup(t, 'dialog-logo')}

      <div>
        <h2>${t.name}</h2>
        <p>${t.city} • Conferência ${t.conference}</p>
      </div>
    </div>

    <p class="dialog-description">${t.history}</p>

    <div class="dialog-facts">
      <div class="dialog-fact">
        <span>Fundação</span>
        <strong>${t.founded}</strong>
      </div>

      <div class="dialog-fact">
        <span>Títulos NBA</span>
        <strong>${t.titles}</strong>
      </div>

      <div class="dialog-fact">
        <span>Divisão</span>
        <strong>${t.division}</strong>
      </div>

      <div class="dialog-fact">
        <span>Arena</span>
        <strong>${t.arena}</strong>
      </div>
    </div>
  `;

  const dialog = $('teamDialog');

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    alert(`${t.name}\n${t.history}`);
  }
}

$('closeDialog').addEventListener('click', () => {
  $('teamDialog').close();
});

$('teamDialog').addEventListener('click', e => {
  if (e.target === $('teamDialog')) {
    $('teamDialog').close();
  }
});

renderTeams();

// =====================================================
// COMPARADOR DE FRANQUIAS
// =====================================================

function populateTeamSelect(select) {
  select.innerHTML = TEAMS.slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(t => `<option value="${t.id}">${t.name}</option>`)
    .join('');
}

populateTeamSelect($('compareA'));
populateTeamSelect($('compareB'));

$('compareA').value = 'BOS';
$('compareB').value = 'LAL';

function renderComparison() {
  const a = TEAMS.find(t => t.id === $('compareA').value);
  const b = TEAMS.find(t => t.id === $('compareB').value);

  const stats = [
    ['Títulos NBA', t => t.titles],
    ['Ano de fundação', t => t.founded],
    ['Conferência', t => t.conference],
    ['Divisão', t => t.division],
    ['Arena', t => t.arena]
  ];

  $('comparison').innerHTML = [a, b].map(t => `
    <article class="compare-team">
      <div class="compare-team-head">
        ${logoMarkup(t, 'compare-logo')}

        <div>
          <h3>${t.name}</h3>
          <p>${t.city}</p>
        </div>
      </div>

      ${stats.map(([label, get]) => `
        <div class="compare-stat">
          <span>${label}</span>
          <strong>${get(t)}</strong>
        </div>
      `).join('')}
    </article>
  `).join('');
}

$('compareA').addEventListener('change', renderComparison);
$('compareB').addEventListener('change', renderComparison);

renderComparison();

// =====================================================
// QUIZ INTERATIVO DA NBA
// =====================================================

const QUESTIONS = [
  {
    q: 'Em que ano a liga que se tornou a NBA foi fundada?',
    a: ['1936', '1946', '1956', '1966'],
    correct: 1,
    ex: 'A Basketball Association of America (BAA) foi fundada em 1946; o nome NBA veio em 1949.'
  },
  {
    q: 'Quantas franquias compõem a NBA?',
    a: ['20', '24', '30', '32'],
    correct: 2,
    ex: 'A liga possui 30 franquias divididas em duas conferências.'
  },
  {
    q: 'Qual equipe conquistou seis títulos durante a era de Michael Jordan nos anos 1990?',
    a: ['Boston Celtics', 'Chicago Bulls', 'Miami Heat', 'Phoenix Suns'],
    correct: 1,
    ex: 'Os Bulls venceram seis campeonatos entre 1991 e 1998.'
  },
  {
    q: 'Qual equipe venceu seu primeiro título da NBA em 2023?',
    a: ['Denver Nuggets', 'Phoenix Suns', 'Utah Jazz', 'Brooklyn Nets'],
    correct: 0,
    ex: 'Denver conquistou o campeonato de 2023 com Nikola Jokić como principal referência.'
  },
  {
    q: 'Quantos minutos tem uma partida NBA no tempo regulamentar?',
    a: ['40', '48', '50', '60'],
    correct: 1,
    ex: 'São quatro quartos de 12 minutos, totalizando 48 minutos.'
  },
  {
    q: 'Qual é a única franquia sediada no Canadá?',
    a: ['Vancouver Grizzlies', 'Toronto Raptors', 'Montreal Mounties', 'Ottawa Towers'],
    correct: 1,
    ex: 'O Toronto Raptors representa Toronto, no Canadá.'
  },
  {
    q: 'Quantas vitórias uma equipe precisa para vencer uma série de playoffs em melhor de sete?',
    a: ['2', '3', '4', '5'],
    correct: 2,
    ex: 'A primeira equipe a vencer quatro partidas vence a série.'
  },
  {
    q: 'Qual jogador ficou associado à dinastia dos Lakers conhecida como Showtime?',
    a: ['Magic Johnson', 'Tim Duncan', 'Reggie Miller', 'Dirk Nowitzki'],
    correct: 0,
    ex: 'Magic Johnson liderou os Lakers durante a era Showtime nos anos 1980.'
  },
  {
    q: 'Qual equipe venceu o campeonato de 2019?',
    a: ['Golden State Warriors', 'Toronto Raptors', 'Milwaukee Bucks', 'Philadelphia 76ers'],
    correct: 1,
    ex: 'Toronto conquistou seu primeiro título em 2019, liderado por Kawhi Leonard.'
  },
  {
    q: 'Qual é o limite padrão do relógio de arremesso na NBA?',
    a: ['14 segundos', '18 segundos', '24 segundos', '30 segundos'],
    correct: 2,
    ex: 'A equipe atacante deve tentar um arremesso que cumpra as regras dentro de 24 segundos.'
  },
  {
    q: 'Qual franquia tem o nome Celtics?',
    a: ['Boston', 'Brooklyn', 'Dallas', 'Denver'],
    correct: 0,
    ex: 'O Boston Celtics foi fundado em 1946 e é uma das franquias históricas da liga.'
  },
  {
    q: 'Qual prêmio reconhece o jogador mais valioso da temporada regular?',
    a: ['MVP', 'DPOY apenas', 'Sixth Man', 'Rookie of the Month'],
    correct: 0,
    ex: 'MVP significa Most Valuable Player.'
  }
];

let quizOrder = [];
let quizIndex = 0;
let quizPoints = 0;
let answered = false;

function startQuiz() {
  quizOrder = QUESTIONS.map((_, i) => i)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  quizIndex = 0;
  quizPoints = 0;
  answered = false;

  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[quizOrder[quizIndex]];
  answered = false;

  $('quizProgress').textContent =
    `Pergunta ${quizIndex + 1} de ${quizOrder.length}`;

  $('quizScore').textContent = `Pontos: ${quizPoints}`;

  $('quizProgressBar').style.width =
    `${(quizIndex + 1) / quizOrder.length * 100}%`;

  $('quizQuestion').textContent = q.q;

  $('quizAnswers').innerHTML = q.a.map((answer, i) => `
    <button class="answer-button" data-answer="${i}">
      ${String.fromCharCode(65 + i)}. ${answer}
    </button>
  `).join('');

  $('quizFeedback').textContent = '';
  $('quizFeedback').className = 'quiz-feedback';

  $('nextQuestion').disabled = true;
  $('nextQuestion').textContent =
    quizIndex === quizOrder.length - 1
      ? 'Ver resultado'
      : 'Próxima pergunta';
}

$('quizAnswers').addEventListener('click', e => {
  const btn = e.target.closest('[data-answer]');

  if (!btn || answered) return;

  answered = true;

  const q = QUESTIONS[quizOrder[quizIndex]];
  const choice = Number(btn.dataset.answer);

  [...$('quizAnswers').querySelectorAll('button')].forEach(b => {
    b.disabled = true;

    if (Number(b.dataset.answer) === q.correct) {
      b.classList.add('correct');
    }
  });

  if (choice === q.correct) {
    quizPoints++;
    btn.classList.add('correct');

    $('quizFeedback').textContent = `Correto! ${q.ex}`;
    $('quizFeedback').classList.add('correct-text');
  } else {
    btn.classList.add('wrong');

    $('quizFeedback').textContent =
      `Não foi dessa vez. ${q.ex}`;

    $('quizFeedback').classList.add('wrong-text');
  }

  $('quizScore').textContent = `Pontos: ${quizPoints}`;
  $('nextQuestion').disabled = false;
});

$('nextQuestion').addEventListener('click', () => {
  if (!answered) return;

  if (quizIndex < quizOrder.length - 1) {
    quizIndex++;
    renderQuestion();
    return;
  }

  $('quizQuestion').textContent =
    `Você fez ${quizPoints} de ${quizOrder.length} pontos!`;

  let icon;
  let message;

  if (quizPoints >= 8) {
    icon = '🏆';
    message = 'Ótimo resultado!';
  } else if (quizPoints >= 5) {
    icon = '🏀';
    message = 'Bom começo. Continue estudando a história da liga.';
  } else {
    icon = '📚';
    message = 'Vale revisar as regras e a história da NBA e tentar novamente.';
  }

  $('quizAnswers').innerHTML = `
    <div class="empty-state">
      <span>${icon}</span>
      <p>${message}</p>
    </div>
  `;

  $('quizFeedback').textContent =
    'O resultado é apenas educativo. Reinicie para receber novas perguntas.';

  $('nextQuestion').disabled = true;
  $('nextQuestion').textContent = 'Quiz concluído';
  $('quizProgress').textContent = 'Resultado final';
  $('quizProgressBar').style.width = '100%';
});

$('restartQuiz').addEventListener('click', startQuiz);

startQuiz();

// =====================================================
// SIMULADOR DE PLAYOFFS
// =====================================================

// As equipes abaixo são seleções iniciais de exemplo.
// Não representam necessariamente a classificação atual.

const defaultEast = [
  'BOS', 'NY', 'CLE', 'MIL',
  'PHI', 'MIA', 'ORL', 'CHI'
];

const defaultWest = [
  'OKC', 'DEN', 'MIN', 'DAL',
  'PHX', 'LAL', 'GS', 'SAS'
];

function createSeeds(containerId, ids, prefix) {
  const conference = prefix === 'E' ? 'Leste' : 'Oeste';

  const availableTeams = TEAMS
    .filter(t => t.conference === conference)
    .sort((a, b) => a.name.localeCompare(b.name));

  $(containerId).innerHTML = ids.map((id, i) => `
    <label class="seed-field">
      <span class="seed-number">${i + 1}</span>

      <select class="seed-select" data-seed="${prefix}${i}">
        ${availableTeams.map(t => `
          <option
            value="${t.id}"
            ${t.id === id ? 'selected' : ''}
          >
            ${t.name}
          </option>
        `).join('')}
      </select>
    </label>
  `).join('');
}

function resetPlayoffs() {
  createSeeds('eastSeeds', defaultEast, 'E');
  createSeeds('westSeeds', defaultWest, 'W');

  $('playoffResults').innerHTML = `
    <p class="empty-state">
      Escolha as equipes de cada conferência e inicie a simulação.
    </p>
  `;
}

function getSeeds(prefix) {
  return [
    ...document.querySelectorAll(`[data-seed^="${prefix}"]`)
  ].map(select => select.value);
}

function simulateSeries(a, b) {
  let wa = 0;
  let wb = 0;
  const games = [];

  while (wa < 4 && wb < 4) {
    const winner = Math.random() < 0.5 ? 'a' : 'b';

    if (winner === 'a') {
      wa++;
    } else {
      wb++;
    }

    games.push(winner);
  }

  return {
    winner: wa === 4 ? a : b,
    loser: wa === 4 ? b : a,
    score: wa === 4 ? `${wa}–${wb}` : `${wb}–${wa}`,
    games
  };
}

function playRound(teams) {
  const winners = [];
  const matches = [];

  for (let i = 0; i < teams.length; i += 2) {
    const result = simulateSeries(teams[i], teams[i + 1]);

    winners.push(result.winner);
    matches.push(result);
  }

  return { winners, matches };
}

function runConference(seeds) {
  // Confrontos: 1x8, 4x5, 3x6 e 2x7.

  const r1 = playRound([
    seeds[0], seeds[7],
    seeds[3], seeds[4],
    seeds[2], seeds[5],
    seeds[1], seeds[6]
  ]);

  const r2 = playRound([
    r1.winners[0], r1.winners[1],
    r1.winners[2], r1.winners[3]
  ]);

  const r3 = playRound(r2.winners);

  return {
    rounds: [r1.matches, r2.matches, r3.matches],
    champion: r3.winners[0]
  };
}

function roundHTML(title, matches) {
  return `
    <div class="round-column">
      <h4>${title}</h4>

      ${matches.map(m => `
        <div class="round-match">
          <strong>${m.winner.name}</strong>
          <span>venceu ${m.score}</span>
          <span>contra ${m.loser.name}</span>
        </div>
      `).join('')}
    </div>
  `;
}

$('simulatePlayoffs').addEventListener('click', () => {
  const east = getSeeds('E');
  const west = getSeeds('W');

  if (new Set(east).size !== 8 || new Set(west).size !== 8) {
    $('playoffResults').innerHTML = `
      <p class="empty-state">
        Escolha oito equipes diferentes em cada conferência.
      </p>
    `;
    return;
  }

  const eastTeams = east.map(id => TEAMS.find(t => t.id === id));
  const westTeams = west.map(id => TEAMS.find(t => t.id === id));

  const er = runConference(eastTeams);
  const wr = runConference(westTeams);

  const finals = simulateSeries(er.champion, wr.champion);

  $('playoffResults').innerHTML =
    roundHTML('Leste · 1ª rodada', er.rounds[0]) +
    roundHTML('Oeste · 1ª rodada', wr.rounds[0]) +
    roundHTML('Semifinais · Leste', er.rounds[1]) +
    roundHTML('Semifinais · Oeste', wr.rounds[1]) +
    roundHTML(
      'Finais de conferência',
      [...er.rounds[2], ...wr.rounds[2]]
    ) +
    `
      <div class="round-column">
        <h4>Finais da NBA</h4>

        <div class="round-match">
          <strong>${finals.winner.name}</strong>
          <span>venceu ${finals.score}</span>
          <span>contra ${finals.loser.name}</span>
        </div>
      </div>

      <div class="champion-box">
        <div class="trophy">🏆</div>
        <p class="eyebrow">CAMPEÃO SIMULADO</p>
        <h3>${finals.winner.name}</h3>
        <p>Resultado gerado aleatoriamente para fins educativos.</p>
      </div>
    `;
});

$('resetPlayoffs').addEventListener('click', resetPlayoffs);

resetPlayoffs();

// =====================================================
// CONSULTA DE PLACARES DA NBA
// =====================================================

// Fonte externa: ESPN.
// O navegador precisa de internet e a API pode
// bloquear determinadas requisições.

const ESPN_SCOREBOARD =
  'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

function formatGameStatus(event) {
  const comp = event.competitions?.[0];

  if (event.status?.type?.completed) {
    return 'Finalizado';
  }

  return (
    event.status?.type?.shortDetail ||
    comp?.status?.type?.shortDetail ||
    'Status indisponível'
  );
}

function renderScores(events) {
  if (!events.length) {
    $('scoreboard').innerHTML = `
      <div class="empty-state">
        <span>📅</span>
        <p>Nenhuma partida foi retornada para a data consultada.</p>
      </div>
    `;
    return;
  }

  $('scoreboard').innerHTML = events.map(event => {
    const competition = event.competitions?.[0];
    const competitors = competition?.competitors || [];

    const home =
      competitors.find(t => t.homeAway === 'home') ||
      competitors[0];

    const away =
      competitors.find(t => t.homeAway === 'away') ||
      competitors[1];

    if (!home || !away) return '';

    const homeScore = Number(home.score || 0);
    const awayScore = Number(away.score || 0);

    const done = event.status?.type?.completed;

    let note = 'Consulte o feed para atualizações.';

    if (done) {
      if (homeScore === awayScore) {
        note = 'Partida encerrada';
      } else if (homeScore > awayScore) {
        note = `${home.team?.displayName || 'Mandante'} venceu`;
      } else {
        note = `${away.team?.displayName || 'Visitante'} venceu`;
      }
    }

    return `
      <article class="score-card">
        <div class="score-card-head">
          <span>${event.name || 'Jogo NBA'}</span>
          <span>${formatGameStatus(event)}</span>
        </div>

        <div class="score-team">
          <span class="score-team-name">
            ${away.team?.displayName || away.team?.name || 'Visitante'}
          </span>
          <strong class="score-number">
            ${away.score ?? '—'}
          </strong>
        </div>

        <div class="score-team">
          <span class="score-team-name">
            ${home.team?.displayName || home.team?.name || 'Mandante'}
          </span>
          <strong class="score-number">
            ${home.score ?? '—'}
          </strong>
        </div>

        <p class="score-note">${note}</p>
      </article>
    `;
  }).join('') || `
    <div class="empty-state">
      <p>Não foi possível interpretar os jogos retornados.</p>
    </div>
  `;
}

async function refreshScores() {
  const btn = $('refreshScores');

  btn.disabled = true;
  btn.textContent = 'Consultando…';

  $('liveStatus').textContent = 'Consultando fonte externa…';

  $('scoreboard').innerHTML = `
    <div class="empty-state">
      <span>⏳</span>
      <p>Buscando os placares mais recentes…</p>
    </div>
  `;

  try {
    const response = await fetch(ESPN_SCOREBOARD, {
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    renderScores(data.events || []);

    const time = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });

    $('liveStatus').textContent =
      `Consulta concluída • ${time}`;

    $('liveStatus').previousElementSibling?.classList.add('live');

  } catch (error) {
    $('scoreboard').innerHTML = `
      <div class="empty-state">
        <span>⚠️</span>
        <p>
          Não foi possível acessar o feed de placares.
          A fonte pode bloquear requisições do navegador
          (CORS) ou estar temporariamente indisponível.
          Abra o site com conexão à internet e tente novamente.
        </p>
      </div>
    `;

    $('liveStatus').textContent =
      'Fonte indisponível no momento';

    console.warn(
      'Falha ao consultar o placar público:',
      error
    );

  } finally {
    btn.disabled = false;
    btn.textContent = 'Atualizar placares';
  }
}

$('refreshScores').addEventListener('click', refreshScores);

// =====================================================
// MENU RESPONSIVO PARA CELULARES
// =====================================================

$('menuToggle').addEventListener('click', () => {
  const nav = $('mainNav');

  const open = nav.classList.toggle('open');

  $('menuToggle').setAttribute(
    'aria-expanded',
    String(open)
  );

  $('menuToggle').setAttribute(
    'aria-label',
    open ? 'Fechar menu' : 'Abrir menu'
  );
});

$('mainNav').addEventListener('click', e => {
  if (e.target.closest('a')) {
    $('mainNav').classList.remove('open');

    $('menuToggle').setAttribute(
      'aria-expanded',
      'false'
    );

    $('menuToggle').setAttribute(
      'aria-label',
      'Abrir menu'
    );
  }
});

// =====================================================
// VERIFICAÇÃO INICIAL
// =====================================================

console.info(
  `NBA Central: ${TEAMS.length} franquias carregadas.`
);
