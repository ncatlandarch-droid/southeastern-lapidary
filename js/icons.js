window.ICONS = {
  icons: {
    // Gem Types
    'ruby': '<path d="M4 8l8-6 8 6-8 12z" fill="#9b2335" stroke="currentColor"/><path d="M4 8h16M12 2v18" stroke="currentColor"/>',
    'sapphire': '<ellipse cx="12" cy="12" rx="7" ry="9" fill="#1e3a5f" stroke="currentColor"/><path d="M7 9l5 12 5-12M8 15l4-13 4 13" stroke="currentColor"/>',
    'emerald': '<rect x="6" y="4" width="12" height="16" rx="2" fill="#2d6a4f" stroke="currentColor"/><path d="M6 8h12M6 16h12M9 4v16M15 4v16" stroke="currentColor"/>',
    'garnet': '<circle cx="12" cy="12" r="8" fill="#8b1a1a" stroke="currentColor"/><path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17" stroke="currentColor"/>',
    'aquamarine': '<path d="M12 3s-7 7-7 11a7 7 0 0 0 14 0c0-4-7-11-7-11z" fill="#5fa8d3" stroke="currentColor"/><path d="M12 3v18M7.5 12.5l9 5M16.5 12.5l-9 5" stroke="currentColor"/>',
    'amethyst': '<path d="M12 2l7 4v8l-7 8-7-8V6z" fill="#7b4f9e" stroke="currentColor"/><path d="M12 2v18M5 10l14-2M5 14l14 2" stroke="currentColor"/>',
    'quartz': '<path d="M12 2l4 6v14H8V8zM8 12l-4 4v6h4zM16 10l4 4v8h-4z" fill="#5c4033" stroke="currentColor"/>',
    'smoky quartz': '<path d="M12 2l4 6v14H8V8zM8 12l-4 4v6h4zM16 10l4 4v8h-4z" fill="#5c4033" stroke="currentColor"/>',
    'citrine': '<path d="M8 4h8l4 4v8l-4 4H8l-4-4V8z" fill="#d4a843" stroke="currentColor"/><path d="M8 4l8 16M16 4L8 20M4 8l16 8M4 16l16-8" stroke="currentColor"/>',
    'tourmaline': '<path d="M9 3h6l2 3v13l-2 2H9l-2-2V6z" fill="#3a7d44" stroke="currentColor"/><path d="M12 3v18M7 8h10M7 14h10" stroke="currentColor"/>',
    'agate': '<ellipse cx="12" cy="12" rx="9" ry="6" fill="#6ba3c7" stroke="currentColor"/><path d="M6 10c4-2 8-2 12 0M5 14c4 2 10 2 14 0" stroke="currentColor"/>',
    'jasper': '<path d="M12 4c4 0 7 2 8 6s-2 10-7 10-9-5-9-9 3-7 8-7z" fill="#c4956a" stroke="currentColor"/><circle cx="9" cy="9" r="1" fill="#c4956a"/><circle cx="15" cy="14" r="1.5" fill="#c4956a"/>',
    'gem-generic': '<path d="M12 2L4 10l8 12 8-12z" fill="#d4a843" stroke="currentColor"/><path d="M4 10h16M12 2v20" stroke="currentColor"/>',

    // Tools & Process
    'saw': '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/><path d="M12 4l1-1M18 12l1 1M12 20l-1 1M6 12l-1-1M17 7l1-1M17 17l1 1M7 17l-1 1M7 7l-1-1"/>',
    'loupe': '<path d="M3 21l6-6"/><circle cx="13" cy="11" r="6"/><path d="M17.5 15.5l1.5-1.5"/>',
    'polish': '<path d="M12 4v4M12 16v4M4 12h4M16 12h4M7 7l2 2M15 15l2 2M7 17l2-2M15 9l2-2"/>',
    'chisel': '<path d="M14 3l3 3-8 8H6v-3z"/><path d="M16 5l-2-2M18 7l-2-2"/>',
    'scale': '<path d="M12 3v18M8 6h8M6 10c0 3 6 4 6 4s6-1 6-4L12 6zM5 21h14"/>',
    'caliper': '<path d="M4 2v20M4 5h8M4 19h4M12 5v14M12 5h4M12 19h2M16 5l2 4M14 19l2-4"/>',

    // Process Steps
    'source': '<path d="M3 20l6-10 4 5 5-8 3 13z"/>',
    'slab': '<path d="M4 12h16l-2 6H6zM6 6h12l2 6H4z"/>',
    'shape': '<path d="M12 4l6 4v8l-6 4-6-4V8z"/><path d="M8 6l8 12M16 6L8 18"/>',
    'finish': '<circle cx="12" cy="12" r="7"/><path d="M10 9l3-1 1 3"/>',
    'create': '<path d="M8 20c-2 0-4-1-4-4 0-4 8-12 8-12s8 8 8 12c0 3-2 4-4 4"/><circle cx="12" cy="16" r="2" fill="#d4a843"/>',

    // Navigation/UI
    'cart': '<path d="M3 3h2l2.5 11h9l2.5-7h-12M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM19 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>',
    'search': '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    'menu': '<path d="M4 6h16M4 12h16M4 18h16"/>',
    'close': '<path d="M18 6L6 18M6 6l12 12"/>',
    'language': '<circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3c-2.5 0-4.5 4-4.5 9s2 9 4.5 9 4.5-4 4.5-9-2-9-4.5-9z"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    'arrow-down': '<path d="M12 5v14M5 12l7 7 7-7"/>',
    'chevron-down': '<path d="M6 9l6 6 6-6"/>',
    'check': '<path d="M20 6L9 17l-5-5"/>',
    'star': '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    'location': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    'calendar': '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    'email': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'workshop': '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"/>',

    // Social
    'instagram': '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M16.5 7.5v.001"/>',
    'facebook': '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    'youtube': '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',

    // Service Icons
    'custom-cut': '<path d="M12 2l7 4v12l-7 4-7-4V6zM12 2v20M5 6l14 12M19 6L5 18"/>',
    'stone-sale': '<path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zM8 10h8M8 14h8M12 7v10"/>',
    'jewelry': '<circle cx="12" cy="8" r="5"/><path d="M12 13c-4 0-7 3-7 7h14c0-4-3-7-7-7z"/><circle cx="12" cy="17" r="2" fill="#d4a843"/>',
    'rough-stone': '<path d="M5 8l4-4 8 2 4 6-3 8-7 2-8-5L5 8z"/><path d="M9 4l1 7-5 3M17 6l-3 6 4 4M10 11l4 4-2 7"/>',
    'wholesale': '<path d="M3 6l9-4 9 4v12l-9 4-9-4V6z"/><path d="M3 6l9 4 9-4M12 10v14M8 12l8 4M8 16l8-4"/>'
  },

  getIcon: function(name, size = 24) {
    if (name === 'smoky quartz') name = 'quartz';
    const path = this.icons[name];
    if (!path) {
      console.warn(`Icon "${name}" not found.`);
      return '';
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-${name.replace(/\s+/g, '-')}">${path}</svg>`;
  }
};
