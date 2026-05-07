// =====================================================================
// Utilitários compartilhados — Concurso MPMG
// localStorage helpers, navegação, formatação
// =====================================================================

(function () {
  'use strict';

  const STORAGE_PREFIX = 'concurso-mpmg-';

  // Mapa de matérias — chave (campo `materia` em data.js) → metadados
  // Ordem aqui é a ordem de exibição no hub.
  const MATERIAS = [
    { key: 'pc',      label: 'Processo Civil',         short: 'PC',     prefix: 'PC ',     icon: '⚙️' },
    { key: 'civil',   label: 'Direito Civil',          short: 'Civil',  prefix: 'Civ ',    icon: '📘' },
    { key: 'const',   label: 'Constitucional',         short: 'Const.', prefix: 'Const ',  icon: '🏛️' },
    { key: 'adm',     label: 'Administrativo',         short: 'Adm.',   prefix: 'Adm ',    icon: '🏢' },
    { key: 'elei',    label: 'Eleitoral',              short: 'Eleit.', prefix: 'Elei ',   icon: '🗳️' },
    { key: 'trib',    label: 'Tributário/Financeiro',  short: 'Trib.',  prefix: 'Trib ',   icon: '💰' },
    { key: 'mp',      label: 'Teoria do MP',           short: 'MP',     prefix: 'MP ',     icon: '⚖️' },
    { key: 'penal',   label: 'Penal/Criminologia',     short: 'Penal',  prefix: 'Pen ',    icon: '🚔' },
    { key: 'pp',      label: 'Processo Penal',         short: 'P. Pen.',prefix: 'PP ',     icon: '👮' },
    { key: 'colmat',  label: 'Material Coletivo',      short: 'Mat. Col.', prefix: 'ColM ', icon: '👥' },
    { key: 'colproc', label: 'Processual Coletivo',    short: 'Proc. Col.',prefix: 'ColP ', icon: '🤝' }
  ];

  window.App = {

    // ---------- matérias ----------
    MATERIAS,

    getMateria(key) {
      return MATERIAS.find(m => m.key === (key || 'pc')) || MATERIAS[0];
    },

    getMateriaLabel(key) {
      return this.getMateria(key).label;
    },

    getMateriaPrefix(key) {
      return this.getMateria(key).prefix;
    },

    // ---------- localStorage ----------
    load(key, fallback) {
      try {
        const raw = localStorage.getItem(STORAGE_PREFIX + key);
        return raw ? JSON.parse(raw) : (fallback !== undefined ? fallback : null);
      } catch (e) {
        console.warn('Erro ao carregar', key, e);
        return fallback !== undefined ? fallback : null;
      }
    },

    save(key, value) {
      try {
        localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
        return true;
      } catch (e) {
        console.warn('Erro ao salvar', key, e);
        return false;
      }
    },

    remove(key) {
      try { localStorage.removeItem(STORAGE_PREFIX + key); return true; }
      catch (e) { return false; }
    },

    // ---------- tópicos ----------
    getTopic(id) {
      return APP_DATA.topics.find(t => t.id === id);
    },

    getAdjacentTopics(id) {
      const cur = APP_DATA.topics.find(t => t.id === id);
      if (!cur) return { prev: null, next: null };
      const mat = cur.materia || 'pc';
      const same = APP_DATA.topics.filter(t => (t.materia || 'pc') === mat);
      const idx = same.findIndex(t => t.id === id);
      return {
        prev: idx > 0 ? same[idx - 1] : null,
        next: idx < same.length - 1 ? same[idx + 1] : null
      };
    },

    getQueryParam(name) {
      const url = new URL(window.location.href);
      return url.searchParams.get(name);
    },

    // Retorna alvo "voltar" inteligente: se chegou via ?topic=N, volta ao tópico de origem
    backTarget() {
      const topicNum = parseInt(this.getQueryParam('topic')) || null;
      if (topicNum && typeof APP_DATA !== 'undefined') {
        const t = APP_DATA.topics.find(x => x.num === topicNum);
        if (t) {
          const shortTitle = t.title.length > 38 ? t.title.slice(0, 38) + '…' : t.title;
          return { href: 'topicos.html?id=' + t.id, label: '← Tópico ' + t.num + ': ' + shortTitle, isTopic: true };
        }
      }
      return { href: 'index.html', label: '← Painel', isTopic: false };
    },

    // Aplica o back-target ao link com id="back-link"
    applyBackLink() {
      const el = document.getElementById('back-link');
      if (!el) return;
      const back = this.backTarget();
      el.href = back.href;
      el.textContent = back.label;
    },

    // ---------- formatação ----------
    formatDate(d) {
      if (!d) return '';
      const date = (d instanceof Date) ? d : new Date(d);
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    },

    formatDateTime(d) {
      const date = (d instanceof Date) ? d : new Date(d);
      const hh = String(date.getHours()).padStart(2, '0');
      const min = String(date.getMinutes()).padStart(2, '0');
      return `${this.formatDate(date)} ${hh}:${min}`;
    },

    today() {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    },

    daysBetween(a, b) {
      const ms = (b - a) / (1000 * 60 * 60 * 24);
      return Math.round(ms);
    },

    addDays(date, days) {
      const d = new Date(date);
      d.setDate(d.getDate() + days);
      return d;
    },

    // ---------- HTML helpers ----------
    escape(s) {
      if (s == null) return '';
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },

    el(tag, attrs, children) {
      const e = document.createElement(tag);
      if (attrs) {
        for (const k in attrs) {
          if (k === 'class') e.className = attrs[k];
          else if (k === 'html') e.innerHTML = attrs[k];
          else if (k === 'text') e.textContent = attrs[k];
          else if (k.startsWith('on') && typeof attrs[k] === 'function') e.addEventListener(k.slice(2), attrs[k]);
          else e.setAttribute(k, attrs[k]);
        }
      }
      if (children) {
        (Array.isArray(children) ? children : [children]).forEach(c => {
          if (c == null) return;
          if (typeof c === 'string') e.appendChild(document.createTextNode(c));
          else e.appendChild(c);
        });
      }
      return e;
    },

    // ---------- TTS (Text-to-Speech) ----------
    // Compartilhado entre flashcards.html e simulado.html.
    // topicos.html usa controle próprio mais completo.
    tts: {
      _voice: null,
      _initialized: false,
      _currentBtn: null,
      init() {
        if (!('speechSynthesis' in window)) return;
        if (this._initialized) return;
        const pickVoice = () => {
          const all = window.speechSynthesis.getVoices();
          const ptBR = all.find(v => /pt[-_]br/i.test(v.lang));
          this._voice = ptBR || all.find(v => /^pt/i.test(v.lang)) || null;
        };
        pickVoice();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = pickVoice;
        }
        this._initialized = true;
      },
      speak(text, btn) {
        if (!('speechSynthesis' in window)) return;
        this.init();
        // Se está falando o mesmo botão, alterna pause/resume
        if (this._currentBtn === btn && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
          window.speechSynthesis.cancel();
          if (btn) btn.classList.remove('speaking');
          this._currentBtn = null;
          return;
        }
        window.speechSynthesis.cancel();
        const u = new window.SpeechSynthesisUtterance(text);
        if (this._voice) { u.voice = this._voice; u.lang = this._voice.lang; }
        else u.lang = 'pt-BR';
        u.rate = 1;
        u.onend = () => { if (btn) btn.classList.remove('speaking'); this._currentBtn = null; };
        u.onerror = () => { if (btn) btn.classList.remove('speaking'); this._currentBtn = null; };
        window.speechSynthesis.speak(u);
        if (btn) btn.classList.add('speaking');
        this._currentBtn = btn;
      },
      stop() {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        if (this._currentBtn) this._currentBtn.classList.remove('speaking');
        this._currentBtn = null;
      }
    },

    // ---------- toast ----------
    toast(message, type) {
      const t = document.createElement('div');
      t.style.cssText = `
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: ${type === 'error' ? '#c44536' : '#2d6a4f'}; color: white;
        padding: 0.7rem 1.2rem; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999;
        font-size: 0.9rem; font-weight: 600; opacity: 0;
        transition: opacity 0.2s ease, transform 0.3s ease;
      `;
      t.textContent = message;
      document.body.appendChild(t);
      setTimeout(() => { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(-4px)'; }, 10);
      setTimeout(() => {
        t.style.opacity = '0';
        setTimeout(() => t.remove(), 250);
      }, 2200);
    }

  };

})();
