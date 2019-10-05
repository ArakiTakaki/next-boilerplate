import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as action from './actions';
import initialState from './state';

export default reducerWithInitialState(initialState)
  .case(action.countAmount, (state, payload) => ({ ...state, count: payload }))
  .case(action.qiitaArticleAmount, (state, payload) => ({ ...state, qiitaArticle: payload }))
  .case(action.githubRepoAmount, (state, payload) => ({ ...state, githubRepositories: payload }))
  .case(action.loadingAmount, (state, payload) => ({ ...state, isLoading: payload.isLoading }))
  .case(action.qiitaArticleSelect, (state, payload) => ({ ...state, selectedQiitaArticle: payload.id }));
