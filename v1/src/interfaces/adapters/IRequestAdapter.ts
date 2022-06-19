import IResponseParams from '../commons/IResponseParamas';
import IRequestParams from '../commons/IRequestParams';

export default interface IRequestAdapter {
  execute: (params: IRequestParams) => Promise<IResponseParams>;
}
