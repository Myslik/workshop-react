import { IRow, IColumn, IQuery, IAdapter } from "./adapter";

export interface ODataResponse {
    value: any[];
}

export class ODataAdapter implements IAdapter {
    constructor(public url: string, public columns: IColumn[], public key: string) { }

    fetchColumns(): Promise<IColumn[]> {
        return new Promise<IColumn[]>((resolve, reject) => {
            resolve(this.columns);
        });
    }

    buildUri(query?: IQuery): string {
        if (query) {
            let buffer: string[] = [];
            if (query.sorting) {
                const suffix = query.sorting.asc === false ? " desc" : " asc";
                buffer.push("$orderby=" + query.sorting.key + suffix);
            }
            return this.url + "?" + buffer.join("&");
        }
        return this.url;
    }

    handleResponse(response: ODataResponse): IRow[] {
        return response.value.map(r => {
            r["id"] = r[this.key];
            return r as IRow;
        });
    }

    fetchRows(query?: IQuery): Promise<IRow[]> {
        const uri = this.buildUri(query);
        return new Promise<IRow[]>((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open("GET", uri, true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    var response = <ODataResponse>JSON.parse(request.responseText);
                    resolve(this.handleResponse(response));
                } else {
                    reject();
                }
            }
            request.onerror = () => {
                reject();
            }
            request.send();
        });
    }
}