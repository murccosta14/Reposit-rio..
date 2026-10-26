
'use strict';

// ==============================================
// DADOS DAS 30 EQUIPES
// ==============================================

const rawTeams = [
  ['ATL','Atlanta Hawks','Atlanta','Leste','Sudeste',1946,1,'State Farm Arena','#e03a3e','Campeão em 1958, quando a franquia atuava em St. Louis. Dominique Wilkins é um ídolo histórico.'],
  ['BOS','Boston Celtics','Boston','Leste','Atlântico',1946,18,'TD Garden','#007a33','Uma das franquias mais vitoriosas da NBA, com eras marcantes de Bill Russell e Larry Bird.'],
  ['BKN','Brooklyn Nets','Brooklyn','Leste','Atlântico',1967,0,'Barclays Center','#ffffff','Fundada na ABA, passou por Nova Jersey antes de adotar o nome Brooklyn Nets em 2012.'],
  ['CHA','Charlotte Hornets','Charlotte','Leste','Sudeste',1988,0,'Spectrum Center','#00788c','A marca Hornets é conhecida pela identidade de Charlotte e por sua história de reconstruções.'],
  ['CHI','Chicago Bulls','Chicago','Leste','Central',1966,6,'United Center','#ce1141','Conquistou seis campeonatos durante os anos 1990, liderado por Michael Jordan e Scottie Pippen.'],
  ['CLE','Cleveland Cavaliers','Cleveland','Leste','Central',1970,1,'Rocket Mortgage FieldHouse','#860038','Conquistou o título de 2016 com LeBron James, após uma virada histórica nas Finais.'],
  ['DAL','Dallas Mavericks','Dallas','Oeste','Sudoeste',1980,1,'American Airlines Center','#00538c','Campeão de 2011 com Dirk Nowitzki, uma das grandes referências da franquia.'],
  ['DEN','Denver Nuggets','Denver','Oeste','Noroeste',1967,1,'Ball Arena','#0e2240','Conquistou seu primeiro campeonato da NBA em 2023, liderado por Nikola Jokić.'],
  ['DET','Detroit Pistons','Detroit','Leste','Central',1941,3,'Little Caesars Arena','#c8102e','Famoso pelos Bad Boys e pela defesa coletiva que também marcou o título de 2004.'],
  ['GS','Golden State Warriors','San Francisco','Oeste','Pacífico',1946,7,'Chase Center','#1d428a','Ficou conhecido pelo estilo de arremessos e movimentação liderado por Stephen Curry.'],
  ['HOU','Houston Rockets','Houston','Oeste','Sudoeste',1967,2,'Toyota Center','#ce1141','Conquistou dois títulos consecutivos em 1994 e 1995 com Hakeem Olajuwon.'],
  ['IND','Indiana Pacers','Indianapolis','Leste','Central',1967,0,'Gainbridge Fieldhouse','#002d62','Franquia de forte tradição competitiva, marcada por nomes como Reggie Miller.'],
  ['LAC','LA Clippers','Los Angeles','Oeste','Pacífico',1970,0,'Intuit Dome','#c8102e','Passou por Buffalo e San Diego antes de se estabelecer em Los Angeles.'],
  ['LAL','Los Angeles Lakers','Los Angeles','Oeste','Pacífico',1947,17,'Crypto.com Arena','#552583','Franquia histórica de Magic Johnson, Kareem Abdul-Jabbar, Kobe Bryant e LeBron James.'],
  ['MEM','Memphis Grizzlies','Memphis','Oeste','Sudoeste',1995,0,'FedExForum','#5d76a9','Conhecido pelo espírito competitivo e pela fase Grit and Grind.'],
  ['MIA','Miami Heat','Miami','Leste','Sudeste',1988,3,'Kaseya Center','#98002e','Campeão em 2006, 2012 e 2013. A cultura de disciplina e trabalho é parte de sua identidade.'],
  ['MIL','Milwaukee Bucks','Milwaukee','Leste','Central',1968,2,'Fiserv Forum','#00471b','Campeão em 1971 e 2021, com nomes como Kareem Abdul-Jabbar e Giannis Antetokounmpo.'],
  ['MIN','Minnesota Timberwolves','Minneapolis','Oeste','Noroeste',1989,0,'Target Center','#0c2340','Teve Kevin Garnett como grande ídolo e desenvolveu novas gerações de talentos.'],
  ['NOP','New Orleans Pelicans','New Orleans','Oeste','Sudoeste',2002,0,'Smoothie King Center','#0c2340','A franquia adotou o nome Pelicans em 2013 e busca construir seu legado.'],
  ['NY','New York Knicks','New York','Leste','Atlântico',1946,2,'Madison Square Garden','#006bb6','Um dos times mais tradicionais da NBA, famoso por sua torcida e pelo Madison Square Garden.'],
  ['OKC','Oklahoma City Thunder','Oklahoma City','Oeste','Noroeste',1967,2,'Paycom Center','#007ac1','A franquia inclui a história do Seattle SuperSonics e conquistou o título de 2025 em Oklahoma City.'],
  ['ORL','Orlando Magic','Orlando','Leste','Sudeste',1989,0,'Kia Center','#0077c0','Foi finalista em 1995 e 2009 e é conhecido por desenvolver gerações de jovens talentos.'],
  ['PHI','Philadelphia 76ers','Philadelphia','Leste','Atlântico',1946,3,'Xfinity Mobile Arena','#006bb6','Franquia histórica associada a Wilt Chamberlain, Julius Erving e Allen Iverson.'],
  ['PHX','Phoenix Suns','Phoenix','Oeste','Pacífico',1968,0,'Mortgage Matchup Center','#1d1160','Chegou às Finais em diferentes épocas, com grandes nomes como Charles Barkley e Steve Nash.'],
  ['POR','Portland Trail Blazers','Portland','Oeste','Noroeste',1970,1,'Moda Center','#e03a3e','Campeão de 1977, com Bill Walton, e conhecido por sua torcida fiel.'],
  ['SAC','Sacramento Kings','Sacramento','Oeste','Pacífico',1923,1,'Golden 1 Center','#5a2d81','A franquia tem origem no Rochester Royals, campeão da NBA em 1951.'],
  ['SAS','San Antonio Spurs','San Antonio','Oeste','Sudoeste',1967,5,'Frost Bank Center','#c4ced4','Conquistou cinco campeonatos com uma cultura de trabalho coletivo e grandes jogadores.'],
  ['TOR','Toronto Raptors','Toronto','Leste','Atlântico',1995,1,'Scotiabank Arena','#ce1141','Única franquia canadense da NBA. Foi campeã pela primeira vez em 2019.'],
  ['UTA','Utah Jazz','Salt Lake City','Oeste','Noroeste',1974,0,'Delta Center','#002b5c','Marcado historicamente pela parceria entre John Stockton e Karl Malone.'],
  ['WAS','Washington Wizards','Washington, D.C.','Leste','Sudeste',1961,1,'Capital One Arena','#002b5c','Franquia campeã em 1978, quando era conhecida como Washington Bullets.']
];

const TEAMS = rawTeams.map(t => ({
  id: t[0],
  name: t[1],
  city: t[2],
  conference: t[3],
  division: t[4],
  founded: t[5],
  titles: t[6],
  arena: t[7],
  accent: t[8],
  history: t[9]
}));

const logoCodes = {
  ATL:'atl', BOS:'bos', BKN:'bkn', CHA:'cha', CHI:'chi',
  CLE:'cle', DAL:'dal', DEN:'den', DET:'det', GS:'gs',
  HOU:'hou', IND:'ind', LAC:'lac', LAL:'lal', MEM:'mem',
  MIA:'mia', MIL:'mil', MIN:'min', NOP:'no', NY:'ny',
  OKC:'okc', ORL:'orl', PHI:'phi', PHX:'phx', POR:'por',
  SAC:'sac', SAS:'sa', TOR:'tor', UTA:'utah', WAS:'wsh'
};

const $ = id => document.getElementById(id);

function logoMarkup(team, className = 'team-logo') {
  const url = `https://a.espncdn.com/i/teamlogos/nba/500/${logoCodes[team.id]}.png`;

  return `
    <img class="${className}" src="${url}"
      alt="Logo do ${team.name}" loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.hidden=false">
    <span class="team-logo-fallback" hidden
      style="--team-accent:${team.accent}">${team.id}</span>
  `;
}

// ==============================================
// PESQUISA E FILTROS DAS EQUIPES
// ==============================================

function renderTeams() {
  const search = $('teamSearch').value
    .trim().toLocaleLowerCase('pt-BR');

  let teams = TEAMS.filter(team => {
    const conference =
      $('conferenceFilter').value === 'all' ||
      team.conference === $('conferenceFilter').value;

    const division =
      $('divisionFilter').value === 'all' ||
      team.division === $('divisionFilter').value;

    const text = `${team.name} ${team.city} ${team.division}`
      .toLocaleLowerCase('pt-BR');

    return conference && division && text.includes(search);
  });

  const sort = $('sortTeams').value;

  if (sort === 'titles') {
    teams.sort((a, b) => b.titles - a.titles || a.name.localeCompare(b.name));
  } else if (sort === 'founded') {
    teams.sort((a, b) => a.founded - b.founded);
  } else {
    teams.sort((a, b) => a.name.localeCompare(b.name));
  }

  $('teamCount').textContent =
    `${teams.length} ${teams.length === 1 ? 'equipe' : 'equipes'}`;

  $('teamGrid').innerHTML = teams.length
    ? teams.map(team => `
      <article class="team-card"
        style="--team-accent:${team.accent}">
        <div class="team-card-top">
          ${logoMarkup(team)}
          <div>
            <h3 class="team-name">${team.name}</h3>
            <p class="team-city">${team.city}</p>
          </div>
        </div>

        <div class="team-tags">
          <span class="tag">${team.conference}</span>
          <span class="tag">${team.division}</span>
        </div>

        <p class="team-description">${team.history}</p>

        <div class="team-card-bottom">
          <span class="team-titles">
            <strong>${team.titles}</strong> títulos NBA
          </span>
          <button class="card-button" data-team="${team.id}">
            Ver perfil ↗
          </button>
        </div>
      </article>
    `).join('')
    : '<div class="empty-state">Nenhum time encontrado.</div>';
}

[
  'teamSearch',
  'conferenceFilter',
  'divisionFilter',
  'sortTeams'
].forEach(id => {
  $(id).addEventListener(
    id === 'teamSearch' ? 'input' : 'change',
    renderTeams
  );
});

$('clearFilters').addEventListener('click', () => {
  $('teamSearch').value = '';
  $('conferenceFilter').value = 'all';
  $('divisionFilter').value = 'all';
  $('sortTeams').value = 'name';
  renderTeams();
});

$('teamGrid').addEventListener('click', event => {
  const button = event.target.closest('[data-team]');
  if (!button) return;

  const team = TEAMS.find(t => t.id === button.dataset.team);

  $('teamDialogContent').innerHTML = `
    <div class="dialog-team-head">
      ${logoMarkup(team, 'dialog-logo')}
      <div>
        <h2>${team.name}</h2>
        <p>${team.city} • ${team.conference}</p>
      </div>
    </div>

    <p class="dialog-description">${team.history}</p>

    <div class="dialog-facts">
      <div class="dialog-fact">
        <span>Fundação</span><strong>${team.founded}</strong>
      </div>
      <div class="dialog-fact">
        <span>Títulos NBA</span><strong>${team.titles}</strong>
      </div>
      <div class="dialog-fact">
        <span>Divisão</span><strong>${team.division}</strong>
      </div>
      <div class="dialog-fact">
        <span>Arena de referência</span><strong>${team.arena}</strong>
      </div>
    </div>
  `;

  $('teamDialog').showModal();
});

$('closeDialog').addEventListener('click', () => {
  $('teamDialog').close();
});

$('teamDialog').addEventListener('click', event => {
  if (event.target === $('teamDialog')) {
    $('teamDialog').close();
  }
});

renderTeams();

// ==============================================
// COMPARADOR
// ==============================================

function fillCompare(id) {
  $(id).innerHTML = TEAMS.map(team =>
    `<option value="${team.id}">${team.name}</option>`
  ).join('');
}

fillCompare('compareA');
fillCompare('compareB');

$('compareA').value = 'BOS';
$('compareB').value = 'LAL';

function renderComparison() {
  const a = TEAMS.find(t => t.id === $('compareA').value);
  const b = TEAMS.find(t => t.id === $('compareB').value);

  $('comparison').innerHTML = [a,b].map(team => `
    <article class="compare-team">
      <div class="compare-team-head">
        ${logoMarkup(team)}
        <div>
          <h3>${team.name}</h3>
          <p>${team.city}</p>
        </div>
      </div>
      ${[
        ['Títulos NBA',team.titles],
        ['Fundação',team.founded],
        ['Conferência',team.conference],
        ['Divisão',team.division],
        ['Arena',team.arena]
      ].map(([label,value]) => `
        <div class="compare-stat">
          <span>${label}</span><strong>${value}</strong>
        </div>
      `).join('')}
    </article>
  `).join('');
}

$('compareA').addEventListener('change', renderComparison);
$('compareB').addEventListener('change', renderComparison);
renderComparison();

// ==============================================
// QUIZ DE CONHECIMENTOS
// ==============================================

const QUIZ_QUESTIONS = [
  {q:'Em que ano a liga que se tornou a NBA foi fundada?',a:['1936','1946','1956','1966'],correct:1},
  {q:'Quantas franquias existem na NBA?',a:['20','24','30','32'],correct:2},
  {q:'Qual equipe venceu seis títulos com Michael Jordan?',a:['Boston Celtics','Chicago Bulls','Miami Heat','Phoenix Suns'],correct:1},
  {q:'Quem foi campeão da NBA em 2023?',a:['Denver Nuggets','Phoenix Suns','Utah Jazz','Brooklyn Nets'],correct:0},
  {q:'Quantos minutos tem uma partida da NBA sem prorrogação?',a:['40','48','50','60'],correct:1},
  {q:'Qual é a equipe canadense da NBA?',a:['Memphis Grizzlies','Toronto Raptors','Orlando Magic','Atlanta Hawks'],correct:1},
  {q:'Quantas vitórias são necessárias para vencer uma série de playoffs?',a:['2','3','4','5'],correct:2},
  {q:'Qual jogador foi símbolo do Showtime dos Lakers?',a:['Magic Johnson','Tim Duncan','Reggie Miller','Dirk Nowitzki'],correct:0},
  {q:'Quem conquistou o título de 2019?',a:['Golden State Warriors','Toronto Raptors','Milwaukee Bucks','76ers'],correct:1},
  {q:'Qual é o tempo padrão do relógio de arremesso?',a:['14 segundos','18 segundos','24 segundos','30 segundos'],correct:2},
  {q:'De qual cidade são os Celtics?',a:['Boston','Brooklyn','Dallas','Denver'],correct:0},
  {q:'O que significa MVP?',a:['Most Valuable Player','Most Versatile Pass','Main Victory Point','Most Valuable Play'],correct:0}
];

let quizOrder = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function startQuiz() {
  quizOrder = [...QUIZ_QUESTIONS.keys()]
    .sort(() => Math.random() - .5).slice(0,10);

  quizIndex = 0;
  quizScore = 0;
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = QUIZ_QUESTIONS[quizOrder[quizIndex]];
  quizAnswered = false;

  $('quizProgress').textContent =
    `Pergunta ${quizIndex + 1} de ${quizOrder.length}`;

  $('quizScore').textContent = `Pontos: ${quizScore}`;

  $('quizProgressBar').style.width =
    `${100 * (quizIndex + 1) / quizOrder.length}%`;

  $('quizQuestion').textContent = q.q;

  $('quizAnswers').innerHTML = q.a.map((a,i) => `
    <button class="answer-button" data-answer="${i}">
      ${String.fromCharCode(65+i)}. ${a}
    </button>
  `).join('');

  $('quizFeedback').textContent = '';
  $('nextQuestion').disabled = true;
  $('nextQuestion').textContent =
    quizIndex === 9 ? 'Ver resultado' : 'Próxima pergunta';
}

$('quizAnswers').addEventListener('click', event => {
  const button = event.target.closest('[data-answer]');
  if (!button || quizAnswered) return;

  quizAnswered = true;
  const q = QUIZ_QUESTIONS[quizOrder[quizIndex]];
  const selected = Number(button.dataset.answer);

  $('quizAnswers').querySelectorAll('button').forEach(b => {
    b.disabled = true;
    if (Number(b.dataset.answer) === q.correct) {
      b.classList.add('correct');
    }
  });

  if (selected === q.correct) {
    quizScore++;
    $('quizFeedback').textContent = 'Resposta correta!';
  } else {
    button.classList.add('wrong');
    $('quizFeedback').textContent =
      `Resposta correta: ${q.a[q.correct]}.`;
  }

  $('quizScore').textContent = `Pontos: ${quizScore}`;
  $('nextQuestion').disabled = false;
});

$('nextQuestion').addEventListener('click', () => {
  if (!quizAnswered) return;

  if (quizIndex < 9) {
    quizIndex++;
    showQuizQuestion();
    return;
  }

  $('quizQuestion').textContent =
    `Resultado: ${quizScore} de 10 pontos!`;

  $('quizAnswers').innerHTML =
    '<div class="empty-state">🏆 Quiz concluído!</div>';

  $('quizFeedback').textContent =
    'Clique em Reiniciar quiz para tentar novamente.';

  $('nextQuestion').disabled = true;
  $('quizProgress').textContent = 'Resultado final';
});

$('restartQuiz').addEventListener('click', startQuiz);
startQuiz();

// ==============================================
// SIMULADOR DOS PLAYOFFS
// ==============================================

const defaultEast = ['BOS','NY','CLE','MIL','PHI','MIA','ORL','CHI'];
const defaultWest = ['OKC','DEN','MIN','DAL','PHX','LAL','GS','SAS'];

function seedList(container, conference, defaults) {
  const teams = TEAMS.filter(t => t.conference === conference);

  $(container).innerHTML = defaults.map((id,i) => `
    <label class="seed-field">
      <span class="seed-number">${i+1}</span>
      <select class="seed-select" data-conference="${conference}">
        ${teams.map(t => `
          <option value="${t.id}" ${t.id === id ? 'selected' : ''}>
            ${t.name}
          </option>
        `).join('')}
      </select>
    </label>
  `).join('');
}

function resetPlayoffs() {
  seedList('eastSeeds','Leste',defaultEast);
  seedList('westSeeds','Oeste',defaultWest);

  $('playoffResults').innerHTML =
    '<div class="empty-state">Escolha os times e simule!</div>';
}

function getConferenceTeams(container) {
  return [...$(container).querySelectorAll('select')]
    .map(select => TEAMS.find(t => t.id === select.value));
}

function series(a,b) {
  let winsA = 0;
  let winsB = 0;

  while (winsA < 4 && winsB < 4) {
    if (Math.random() < .5) winsA++;
    else winsB++;
  }

  return {
    winner: winsA === 4 ? a : b,
    loser: winsA === 4 ? b : a,
    score: `${Math.max(winsA,winsB)}–${Math.min(winsA,winsB)}`
  };
}

function round(teams) {
  const games = [];

  for (let i=0;i<teams.length;i+=2) {
    games.push(series(teams[i],teams[i+1]));
  }

  return games;
}

function conferencePlayoffs(t) {
  const first = round([
    t[0],t[7],t[3],t[4],
    t[2],t[5],t[1],t[6]
  ]);

  const second = round(first.map(x => x.winner));
  const final = round(second.map(x => x.winner));

  return {
    rounds: [first,second,final],
    champion: final[0].winner
  };
}

function roundMarkup(title, games) {
  return `
    <div class="round-column">
      <h4>${title}</h4>
      ${games.map(g => `
        <div class="round-match">
          <strong>${g.winner.name}</strong>
          <span>venceu ${g.score} contra ${g.loser.name}</span>
        </div>
      `).join('')}
    </div>
  `;
}

$('simulatePlayoffs').addEventListener('click', () => {
  const east = getConferenceTeams('eastSeeds');
  const west = getConferenceTeams('westSeeds');

  if (
    new Set(east.map(t=>t.id)).size !== 8 ||
    new Set(west.map(t=>t.id)).size !== 8
  ) {
    $('playoffResults').innerHTML =
      '<div class="empty-state">Selecione oito times diferentes por conferência.</div>';
    return;
  }

  const e = conferencePlayoffs(east);
  const w = conferencePlayoffs(west);
  const championship = series(e.champion,w.champion);

  $('playoffResults').innerHTML =
    roundMarkup('Leste • Primeira rodada',e.rounds[0]) +
    roundMarkup('Oeste • Primeira rodada',w.rounds[0]) +
    roundMarkup('Semifinais do Leste',e.rounds[1]) +
    roundMarkup('Semifinais do Oeste',w.rounds[1]) +
    roundMarkup('Finais de conferência',[
      ...e.rounds[2],...w.rounds[2]
    ]) +
    roundMarkup('Finais da NBA',[championship]) +
    `
      <div class="champion-box">
        <div class="trophy">🏆</div>
        <p class="eyebrow">CAMPEÃO SIMULADO</p>
        <h3>${championship.winner.name}</h3>
        <p>Resultado aleatório, não é previsão.</p>
      </div>
    `;
});

$('resetPlayoffs').addEventListener('click', resetPlayoffs);
resetPlayoffs();

// ==============================================
// PLACARES (CONSULTA EXTERNA)
// ==============================================

async function refreshScores() {
  const button = $('refreshScores');

  button.disabled = true;
  button.textContent = 'Consultando…';
  $('liveStatus').textContent = 'Buscando resultados…';

  try {
    const url =
      'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Falha na consulta');
    }

    const data = await response.json();
    const events = data.events || [];

    $('scoreboard').innerHTML = events.length
      ? events.map(event => {
        const competitors =
          event.competitions?.[0]?.competitors || [];

        const home = competitors.find(x=>x.homeAway==='home');
        const away = competitors.find(x=>x.homeAway==='away');

        if (!home || !away) return '';

        return `
          <article class="score-card">
            <div class="score-card-head">
              <span>${event.name}</span>
              <span>${event.status?.type?.shortDetail || ''}</span>
            </div>
            <div class="score-team">
              <span class="score-team-name">
                ${away.team.displayName}
              </span>
              <strong class="score-number">
                ${away.score ?? '—'}
              </strong>
            </div>
            <div class="score-team">
              <span class="score-team-name">
                ${home.team.displayName}
              </span>
              <strong class="score-number">
                ${home.score ?? '—'}
              </strong>
            </div>
          </article>
        `;
      }).join('')
      : '<div class="empty-state">Nenhuma partida retornada para a data consultada.</div>';

    $('liveStatus').textContent = 'Consulta concluída';

  } catch(error) {
    $('scoreboard').innerHTML =
      '<div class="empty-state">Não foi possível carregar os placares. A fonte externa pode estar indisponível ou bloqueada pelo navegador.</div>';

    $('liveStatus').textContent = 'Placar indisponível';
    console.warn(error);

  } finally {
    button.disabled = false;
    button.textContent = 'Atualizar placares';
  }
}

$('refreshScores').addEventListener('click', refreshScores);

// ==============================================
// NOVO: TESTE DE COMPATIBILIDADE NBA
// ==============================================

// Seis características avaliadas pelo teste.
// Os perfis são editoriais e recreativos.

const TRAITS = {
  tradicao: 'história e tradição',
  estrelas: 'grandes jogadores e protagonismo',
  ataque: 'basquete ofensivo e criativo',
  defesa: 'disciplina e trabalho em equipe',
  superacao: 'superação e espírito competitivo',
  futuro: 'renovação e jovens talentos'
};

// Cada pergunta possui quatro opções.
// A primeira característica recebe 2 pontos.
// A segunda recebe 1 ponto.

const TEST = [
  {
    question:'O que mais chama sua atenção em uma equipe?',
    options:[
      ['Uma história cheia de títulos','tradicao','estrelas'],
      ['Jogadores que brilham nas decisões','estrelas','ataque'],
      ['Um grupo unido que luta até o fim','defesa','superacao'],
      ['Um projeto jovem e promissor','futuro','superacao']
    ]
  },
  {
    question:'Que tipo de partida você mais gosta de assistir?',
    options:[
      ['Defesas intensas e duelos táticos','defesa','tradicao'],
      ['Muitos pontos e jogadas espetaculares','ataque','estrelas'],
      ['Uma virada surpreendente','superacao','ataque'],
      ['Jovens surpreendendo favoritos','futuro','superacao']
    ]
  },
  {
    question:'Qual história de time te interessa mais?',
    options:[
      ['Uma dinastia que marcou gerações','tradicao','estrelas'],
      ['Um elenco construído com paciência','futuro','defesa'],
      ['Um azarão que desafia expectativas','superacao','defesa'],
      ['Um time que revolucionou o jogo','ataque','estrelas']
    ]
  },
  {
    question:'Que tipo de jogador você prefere acompanhar?',
    options:[
      ['Um líder que organiza e defende','defesa','tradicao'],
      ['Uma estrela que decide jogos','estrelas','ataque'],
      ['Um jovem em rápida evolução','futuro','ataque'],
      ['Um atleta que nunca desiste','superacao','defesa']
    ]
  },
  {
    question:'O que mantém sua torcida após uma derrota?',
    options:[
      ['O peso da camisa e sua história','tradicao','superacao'],
      ['A confiança nos grandes jogadores','estrelas','ataque'],
      ['A dedicação e união do elenco','defesa','superacao'],
      ['A esperança de um futuro melhor','futuro','superacao']
    ]
  },
  {
    question:'Como seria seu time ideal?',
    options:[
      ['Clássico, vencedor e respeitado','tradicao','defesa'],
      ['Ousado, rápido e criativo','ataque','futuro'],
      ['Cheio de grandes estrelas','estrelas','tradicao'],
      ['Subestimado, mas competitivo','superacao','defesa']
    ]
  },
  {
    question:'Qual torcida mais combina com você?',
    options:[
      ['Orgulhosa de seu passado','tradicao','estrelas'],
      ['Animada com o espetáculo','ataque','estrelas'],
      ['Leal mesmo nas fases difíceis','superacao','defesa'],
      ['Empolgada com uma nova geração','futuro','superacao']
    ]
  },
  {
    question:'O que mais importa nos playoffs?',
    options:[
      ['Experiência e tradição','tradicao','estrelas'],
      ['Uma estrela decisiva','estrelas','ataque'],
      ['Defesa e trabalho coletivo','defesa','superacao'],
      ['A coragem de surpreender','superacao','futuro']
    ]
  },
  {
    question:'Que conquista seria mais emocionante?',
    options:[
      ['Manter o legado de um gigante','tradicao','defesa'],
      ['Ver um grande craque ser campeão','estrelas','ataque'],
      ['Ganhar o primeiro título','superacao','futuro'],
      ['Acompanhar uma geração crescer','futuro','ataque']
    ]
  },
  {
    question:'Qual frase melhor representa você?',
    options:[
      ['Respeite a história','tradicao','defesa'],
      ['O espetáculo não pode parar','ataque','estrelas'],
      ['Nunca subestime quem luta','superacao','defesa'],
      ['O futuro começa agora','futuro','ataque']
    ]
  }
];

// Perfis das 30 franquias.
// Ordem: tradição, estrelas, ataque, defesa,
// superação e futuro. Escala de 0 a 4.

const PROFILES = {
  ATL:[1,2,3,2,4,4],
  BOS:[4,4,3,4,1,2],
  BKN:[2,3,3,1,3,3],
  CHA:[1,1,3,1,4,4],
  CHI:[4,4,3,3,2,2],
  CLE:[3,3,3,4,3,3],
  DAL:[3,4,4,2,3,3],
  DEN:[2,4,4,3,3,3],
  DET:[4,2,1,4,3,4],
  GS:[4,4,4,3,2,2],
  HOU:[3,3,4,2,3,4],
  IND:[3,2,4,3,4,3],
  LAC:[2,4,3,2,4,2],
  LAL:[4,4,4,2,2,2],
  MEM:[2,2,3,4,4,4],
  MIA:[4,3,3,4,4,2],
  MIL:[3,4,3,4,3,3],
  MIN:[1,3,3,4,4,4],
  NOP:[1,3,4,1,4,3],
  NY:[4,3,3,3,4,3],
  OKC:[2,4,4,4,3,4],
  ORL:[1,2,2,4,4,4],
  PHI:[4,4,3,3,3,3],
  PHX:[2,4,4,2,4,3],
  POR:[3,3,3,2,4,4],
  SAC:[3,2,4,2,4,3],
  SAS:[4,4,2,4,2,4],
  TOR:[2,3,3,4,4,3],
  UTA:[3,2,3,4,4,3],
  WAS:[3,2,3,2,4,4]
};

const TRAIT_KEYS = Object.keys(TRAITS);

let testIndex = 0;
let testAnswers = Array(TEST.length).fill(null);

function showTestQuestion() {
  const q = TEST[testIndex];
  const selected = testAnswers[testIndex];

  $('affinityQuestionArea').hidden = false;
  $('affinityResult').hidden = true;

  $('affinityQuestion').textContent = q.question;

  $('affinityProgress').textContent =
    `Pergunta ${testIndex + 1} de ${TEST.length}`;

  $('affinityOptions').innerHTML = q.options.map((opt,i) => `
    <button type="button"
      class="affinity-option ${selected === i ? 'selected' : ''}"
      data-choice="${i}"
      aria-pressed="${selected === i}">
      <span class="affinity-option-letter">
        ${String.fromCharCode(65+i)}
      </span>
      <span>${opt[0]}</span>
    </button>
  `).join('');

  const completed = testAnswers.filter(a => a !== null).length;
  const percent = Math.round(100 * completed / TEST.length);

  $('affinityPercent').textContent = `${percent}% respondido`;
  $('affinityProgressBar').style.width = `${percent}%`;

  $('affinityBack').hidden = testIndex === 0;
  $('affinityNext').hidden = false;
  $('affinityNext').disabled = selected === null;

  $('affinityNext').textContent =
    testIndex === TEST.length-1
      ? 'Ver meu time'
      : 'Próxima pergunta';
}

$('affinityOptions').addEventListener('click', event => {
  const button = event.target.closest('[data-choice]');
  if (!button) return;

  testAnswers[testIndex] = Number(button.dataset.choice);
  showTestQuestion();
});

function calculateCompatibility() {
  const weights = {};

  TRAIT_KEYS.forEach(key => weights[key] = 0);

  TEST.forEach((q,i) => {
    const option = q.options[testAnswers[i]];

    weights[option[1]] += 2;
    weights[option[2]] += 1;
  });

  const total = Object.values(weights)
    .reduce((sum,value) => sum + value,0);

  const ranking = TEAMS.map(team => {
    const profile = PROFILES[team.id];

    const profileTotal =
      profile.reduce((sum,value) => sum + value,0);

    let difference = 0;

    TRAIT_KEYS.forEach((key,i) => {
      const userShare = weights[key] / total;
      const teamShare = profile[i] / profileTotal;

      difference += Math.abs(userShare - teamShare);
    });

    const score = Math.round(
      100 * (1 - difference / 2)
    );

    return {team,score};
  });

  ranking.sort((a,b) =>
    b.score-a.score || a.team.name.localeCompare(b.team.name)
  );

  const favorites = TRAIT_KEYS.slice().sort(
    (a,b) => weights[b]-weights[a]
  );

  return {ranking,favorites};
}

function showCompatibilityResult() {
  const {ranking,favorites} = calculateCompatibility();

  const top = ranking.slice(0,3);
  const winner = top[0];

  $('affinityQuestionArea').hidden = true;
  $('affinityResult').hidden = false;
  $('affinityBack').hidden = true;
  $('affinityNext').hidden = true;

  $('affinityProgress').textContent = 'Resultado do teste';
  $('affinityPercent').textContent = '10 de 10 perguntas';
  $('affinityProgressBar').style.width = '100%';

  $('affinityResult').innerHTML = `
    <div class="affinity-winner">
      ${logoMarkup(winner.team)}

      <div>
        <p class="eyebrow">SEU TIME MAIS COMPATÍVEL</p>
        <h3>${winner.team.name}</h3>
        <span class="affinity-score">
          ${winner.score}% de afinidade
        </span>
      </div>
    </div>

    <p class="affinity-explanation">
      Suas respostas indicam preferência por
      <strong>${TRAITS[favorites[0]]}</strong> e
      <strong>${TRAITS[favorites[1]]}</strong>.
      No sistema deste teste, essas características
      combinam com o ${winner.team.name}.
    </p>

    <p class="affinity-explanation">
      ${winner.team.history}
    </p>

    <h3>Seus três times mais compatíveis</h3>

    <div class="affinity-ranking">
      ${top.map((item,i) => `
        <div class="affinity-rank-card">
          <span>${i+1}º lugar</span>
          <strong>${item.team.name}</strong>
          <span>${item.score}% de afinidade</span>

          <div class="affinity-meter">
            <span class="affinity-meter-fill"
              style="width:${item.score}%"></span>
          </div>
        </div>
      `).join('')}
    </div>

    <p class="fine-print">
      Este resultado é recreativo. Os percentuais
      representam uma comparação entre preferências
      e perfis editoriais dos times, não uma
      probabilidade científica.
    </p>
  `;
}

$('affinityNext').addEventListener('click', () => {
  if (testAnswers[testIndex] === null) return;

  if (testIndex < TEST.length-1) {
    testIndex++;
    showTestQuestion();
  } else {
    showCompatibilityResult();
  }
});

$('affinityBack').addEventListener('click', () => {
  if (testIndex > 0) {
    testIndex--;
    showTestQuestion();
  }
});

$('affinityRestart').addEventListener('click', () => {
  testIndex = 0;
  testAnswers = Array(TEST.length).fill(null);
  showTestQuestion();
});

showTestQuestion();

// ==============================================
// MENU PARA CELULARES
// ==============================================

$('menuToggle').addEventListener('click', () => {
  const nav = $('mainNav');
  const open = nav.classList.toggle('open');

  $('menuToggle').setAttribute(
    'aria-expanded',String(open)
  );
});

$('mainNav').addEventListener('click', event => {
  if (event.target.closest('a')) {
    $('mainNav').classList.remove('open');
    $('menuToggle').setAttribute('aria-expanded','false');
  }
});

console.info(`NBA Central: ${TEAMS.length} franquias carregadas.`);
