import { useEffect } from 'react';

export const useContentProtection = () => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      // Allow context menu on inputs/textareas
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
    };

    // Disable text selection on protected content
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('protected-content')) {
        e.preventDefault();
      }
    };

    // Disable screenshot shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable PrintScreen
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        return;
      }
      // Disable Ctrl+Shift+S (Screenshot on Chrome)
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        return;
      }
      // Disable Ctrl+Alt+S (Some screenshot tools)
      if (e.ctrlKey && e.altKey && e.key === 's') {
        e.preventDefault();
        return;
      }
    };

    // Disable drag-and-drop of images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.classList.contains('protected-content')) {
        e.preventDefault();
      }
    };

    // Disable image copy via keyboard
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('protected-content')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);
};
