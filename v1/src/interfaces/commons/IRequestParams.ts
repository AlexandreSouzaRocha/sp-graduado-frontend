export default interface IRequestParams {
  baseUrl: string;
  path: string;
  headers: any;
  method: string;
  body?: any;
  queryString?: any;
}
