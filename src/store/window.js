import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // Open window (also restores minimized windows)
    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.isMinimized = false; // restore if minimized
        win.isMaximized = false; // optional: start normal size
        win.zIndex = state.nextZIndex++;
        win.data = data ?? win.data;
    }),

    // Close window
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.isMinimized = false;
        win.isMaximized = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),

    // Focus window
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
    }),

    // Minimize window
    minimizeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMinimized = true;
        win.isMaximized = false;
    }),

    // Maximize window
    maximizeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        // Toggle maximize
        win.isMaximized = !win.isMaximized;

        // If maximized, remove minimize
        if (win.isMaximized) {
            win.isMinimized = false;
        }

        win.zIndex = state.nextZIndex++;
    }),

    // Restore minimized window
    restoreWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMinimized = false;
        win.zIndex = state.nextZIndex++;
    }),

})));

export default useWindowStore;
