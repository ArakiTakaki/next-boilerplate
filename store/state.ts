export interface IState {
  count: number;
  selectedQiitaArticle: string;
  qiitaArticle: any;
  githubRepositories: any;
  isLoading: boolean;
}

const initialState: IState = {
  count: 0,
  selectedQiitaArticle: '',
  qiitaArticle: [],
  githubRepositories: [],
  isLoading: false
};

export default initialState;
