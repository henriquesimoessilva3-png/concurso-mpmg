// =====================================================================
// Utilitários compartilhados — Concurso MPMG
// localStorage helpers, navegação, formatação
// =====================================================================

(function () {
  'use strict';

  const STORAGE_PREFIX = 'concurso-mpmg-';

  window.App = {

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
      const idx = APP_DATA.topics.findIndex(t => t.id === id);
      return {
        prev: idx > 0 ? APP_DATA.topics[idx - 1] : null,
        next: idx < APP_DATA.topics.length - 1 ? APP_DATA.topics[idx + 1] : null
      };
    },

    getQueryParam(name) {
      const url = new URL(window.location.href);
      return url.searchParams.get(name);
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
