export interface TableColumn {
  key: string;
  header?: string;
  type: 'text' | 'secret';
  cell?: (element: any) => string;            // Opcjonalna funkcja renderująca dla niestandardowych komórek
  component?: any;                            // Komponent do renderowania niestandardowych danych
}

export interface VisibilityChangeEvent {
  id: any;                                    // Identyfikator wiersza
  isVisible: boolean;                         // Nowy stan widoczności
  columnKey: string;                          // Klucz kolumny, która zmienia swoją widoczność
}
