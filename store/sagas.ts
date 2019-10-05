import actionCreatorFactory from 'typescript-fsa';
import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

const ac = actionCreatorFactory();

export const githubRepoFetch = ac<string>('GITHUB_REPO_FETCH');
export const qiitaArticleFetch = ac<string>('QIITA_ARTICLE_FETCH');

/**
 * githubのレポジトリを取得する命令
 * @param action
 */
function* githubRepoFetchSaga(action: ReturnType<typeof githubRepoFetch>) {
  yield put(actions.loadingAmount({ isLoading: true }));
  try {
    console.log(action)
  } catch (err) {
    console.error(err);
  } finally {
    yield put(actions.loadingAmount({ isLoading: false }));
  }
}


/**
 * Qiitaの記事一覧を取得する命令
 * @param action
 */
function* qiitaArticleFetchSaga(action: ReturnType<typeof qiitaArticleFetch>) {
  yield put(actions.loadingAmount({ isLoading: true }));
  try {
    console.log(action)
  } catch (err) {
    console.error(err);
  } finally {
    yield put(actions.loadingAmount({ isLoading: false }));
  }
}

export default function* mySaga(): SagaIterator {
  yield takeEvery(githubRepoFetch, githubRepoFetchSaga);
  yield takeEvery(qiitaArticleFetch, qiitaArticleFetchSaga);
}
