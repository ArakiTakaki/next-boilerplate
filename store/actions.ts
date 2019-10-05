import actionCreatorFactory from 'typescript-fsa';

const ac = actionCreatorFactory();

export const countAmount = ac<number>('COUNT_AMOUNT');

export const qiitaArticleAmount = ac<any[]>('QIITA_ARTICLE_AMOUNT');
export const qiitaArticleSelect = ac<{id: string}>('QIITA_ARTICLE_SELECT');

export const githubRepoAmount = ac<any[]>('GITHUB_REPO_AMOUNT');

export const loadingAmount = ac<{isLoading: boolean}>('LOADING_AMOUNT');
