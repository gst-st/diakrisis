// Applies rounded corners to Mermaid diagram nodes + fullscreen viewer with pan/zoom
export function onRouteDidUpdate() {
  setTimeout(() => {
    // Rounded corners
    const rects = document.querySelectorAll('.mermaid rect, .docusaurus-mermaid-container rect');
    rects.forEach(rect => {
      const currentRx = rect.getAttribute('rx');
      if (!currentRx || parseFloat(currentRx) < 5) {
        rect.setAttribute('rx', '10');
        rect.setAttribute('ry', '10');
      }
    });

    // Decorate every Mermaid diagram with an explicit "expand" affordance
    const containers = document.querySelectorAll('.docusaurus-mermaid-container, .mermaid');
    containers.forEach(container => {
      if (container.dataset.expandReady) return;
      container.dataset.expandReady = 'true';

      const svg = container.querySelector('svg');
      if (!svg) return;

      // Wrap container so we can position the button
      container.style.position = container.style.position || 'relative';

      // Create expand button
      const btn = document.createElement('button');
      btn.className = 'mermaid-expand-button';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Развернуть диаграмму');
      btn.title = 'Развернуть на весь экран';
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>';
      container.appendChild(btn);

      const openFullscreen = (event) => {
        if (event) {
          event.stopPropagation();
          event.preventDefault();
        }
        showFullscreen(svg);
      };

      btn.addEventListener('click', openFullscreen);
      svg.style.cursor = 'zoom-in';
      svg.addEventListener('click', openFullscreen);
    });
  }, 500);
}

function showFullscreen(sourceSvg) {
  // Avoid double-stack
  if (document.querySelector('.mermaid-fullscreen-overlay')) return;

  const overlay = document.createElement('div');
  overlay.className = 'mermaid-fullscreen-overlay';

  // Stage holds the cloned SVG and applies pan/zoom transform
  const stage = document.createElement('div');
  stage.className = 'mermaid-fullscreen-stage';

  const clone = sourceSvg.cloneNode(true);
  clone.removeAttribute('style');
  clone.classList.add('mermaid-fullscreen-svg');
  stage.appendChild(clone);

  // Toolbar
  const toolbar = document.createElement('div');
  toolbar.className = 'mermaid-fullscreen-toolbar';

  const makeButton = (label, title, onClick) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'mermaid-toolbar-button';
    b.textContent = label;
    b.title = title;
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      onClick();
    });
    return b;
  };

  // State
  const state = { scale: 1, tx: 0, ty: 0 };
  const applyTransform = () => {
    stage.style.transform = `translate(${state.tx}px, ${state.ty}px) scale(${state.scale})`;
  };
  const reset = () => { state.scale = 1; state.tx = 0; state.ty = 0; applyTransform(); };
  const zoomBy = (factor) => {
    state.scale = Math.max(0.3, Math.min(8, state.scale * factor));
    applyTransform();
  };

  toolbar.appendChild(makeButton('+', 'Увеличить', () => zoomBy(1.25)));
  toolbar.appendChild(makeButton('−', 'Уменьшить', () => zoomBy(0.8)));
  toolbar.appendChild(makeButton('1:1', 'Сбросить масштаб', reset));
  const closeBtn = makeButton('×', 'Закрыть (Esc)', () => closeOverlay());
  closeBtn.classList.add('mermaid-toolbar-close');
  toolbar.appendChild(closeBtn);

  overlay.appendChild(stage);
  overlay.appendChild(toolbar);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  // Pan via drag
  let dragging = false;
  let dragStart = null;
  stage.addEventListener('mousedown', (e) => {
    dragging = true;
    dragStart = { x: e.clientX - state.tx, y: e.clientY - state.ty };
    stage.style.cursor = 'grabbing';
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    state.tx = e.clientX - dragStart.x;
    state.ty = e.clientY - dragStart.y;
    applyTransform();
  });
  window.addEventListener('mouseup', () => {
    dragging = false;
    stage.style.cursor = 'grab';
  });

  // Zoom via wheel
  overlay.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    zoomBy(factor);
  }, { passive: false });

  // Close on overlay-only click (not stage)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  // Close on Escape
  const onEsc = (e) => {
    if (e.key === 'Escape') closeOverlay();
  };
  document.addEventListener('keydown', onEsc);

  function closeOverlay() {
    overlay.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onEsc);
  }

  stage.style.cursor = 'grab';
}
