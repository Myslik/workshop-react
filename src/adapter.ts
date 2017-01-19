export interface IRow {
    [key: string]: any;
    id: string;
}

export interface IColumn {
    key: string;
    width?: number;
}

export interface IAdapter {
    fetchColumns(): Promise<IColumn[]>;
    fetchRows(): Promise<IRow[]>;
}