import { IAdapter, IColumn, IRow } from "./adapter";

export class DemoAdapter implements IAdapter {
    fetchColumns(): Promise<IColumn[]> {
        return new Promise<IColumn[]>((resolve, reject) => {
            resolve([
                { key: "id", width: 70 },
                { key: "name", width: 150 }
            ]);
        });
    }

    fetchRows(): Promise<IRow[]> {
        return new Promise<IRow[]>((resolve, reject) => {
            resolve([
                { id: "1", name: "Jane" },
                { id: "2", name: "Thomas" }
            ]);
        });
    }
}