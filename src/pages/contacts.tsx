//использование режимов отображения данных сетка либо таблица

export const DATA_VIEW_MODE = {
    TABLE: 'TABLE',
    GRID: 'GRID'
  }; // Используйте `as const` для литеральных типов

export type DataViewMode = keyof typeof DATA_VIEW_MODE; // Определите тип DataViewMode

// DataViewMode - Это тип состояния, который указывает, что dataViewMode в стейте может быть только одним из значений из DATA_VIEW_MODE.