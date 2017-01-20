export interface IRow {
    [key: string]: any;
    id: string;
}

export interface IColumn {
    key: string;
    width?: number;
}

export interface ISorting {
    key: string;
    asc?: boolean;
}

export interface IQuery {
    sorting?: ISorting;
}

export interface IAdapter {
    fetchColumns(): Promise<IColumn[]>;
    fetchRows(query?: IQuery): Promise<IRow[]>;
}