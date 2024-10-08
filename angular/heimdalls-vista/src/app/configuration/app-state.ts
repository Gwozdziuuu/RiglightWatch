const KEY = 'MAT_APP_STATE';

export interface AppState {
  darkTheme: boolean;
}

export function getAppState(): AppState {
  let value: AppState | null = null;

  try {
    const storageValue = localStorage.getItem(KEY);

    if (storageValue) {
      value = JSON.parse(storageValue);
    }
  } catch {
  }
  if (!value) {
    value = {
      darkTheme: false
    };
    saveToStorage(value);
  }
  return value;
}

export function setAppState(newState: AppState): void {
  const currentState = getAppState();
  const keys = new Set([...Object.keys(currentState), ...Object.keys(newState)]) as Set<keyof AppState>;

  // @ts-ignore
  for (const key of keys) {
    if (currentState[key] !== newState[key]) {
      saveToStorage(newState);
      break;
    }
  }
}

function saveToStorage(value: AppState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {}
}
