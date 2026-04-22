// Applies rounded corners to Mermaid diagram nodes + fullscreen zoom
export function onRouteDidUpdate() {
  // Wait for Mermaid to render
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

    // Fullscreen zoom on click
    const svgs = document.querySelectorAll('.docusaurus-mermaid-container svg, .mermaid svg');
    svgs.forEach(svg => {
      // Skip if already has listener
      if (svg.dataset.zoomReady) return;
      svg.dataset.zoomReady = 'true';

      svg.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'mermaid-fullscreen-overlay';

        const clone = svg.cloneNode(true);
        clone.style.maxWidth = '95vw';
        clone.style.maxHeight = '90vh';
        clone.style.width = 'auto';
        clone.style.height = 'auto';
        clone.style.cursor = 'zoom-out';

        overlay.appendChild(clone);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        // Close on click anywhere
        overlay.addEventListener('click', () => {
          overlay.remove();
          document.body.style.overflow = '';
        });

        // Close on Escape
        const onEsc = (e) => {
          if (e.key === 'Escape') {
            overlay.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onEsc);
          }
        };
        document.addEventListener('keydown', onEsc);
      });
    });
  }, 500);
}
