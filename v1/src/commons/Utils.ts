export default class Utils {
  static sleep(ms: number): Promise<boolean> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static defaultHeaders(): any {
    return {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
  }
}
