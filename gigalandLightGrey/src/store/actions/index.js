import { 
    createAction as action, 
    createAsyncAction as asyncAction 
} from 'typesafe-actions';

export const getNftBreakdown = asyncAction(
    'nft/GET_NFT_BREAKDOWN',
    'nft/GET_NFT_BREAKDOWN_SUCCESS',
    'nft/GET_NFT_BREAKDOWN_FAIL'
)();

export const getNftShowcase = asyncAction(
    'nft/GET_NFT_SHOWCASE',
    'nft/GET_NFT_SHOWCASE_SUCCESS',
    'nft/GET_NFT_SHOWCASE_FAIL'
)();

export const getNftDetail = asyncAction(
    'nft/GET_NFT_DETAIL',
    'nft/GET_NFT_DETAIL_SUCCESS',
    'nft/GET_NFT_DETAIL_FAIL'
)();

export const getHotCollections = asyncAction(
    'nft/GET_HOT_COLLECTIONS',
    'nft/GET_HOT_COLLECTIONS_SUCCESS',
    'nft/GET_HOT_COLLECTIONS_FAIL'
)();

export const getAuthorList = asyncAction(
    'nft/GET_AUTHOR_LIST',
    'nft/GET_AUTHOR_LIST_SUCCESS',
    'nft/GET_AUTHOR_LIST_FAIL'
)();

export const getAuthorRanking = asyncAction(
    'nft/GET_AUTHOR_RANKING',
    'nft/GET_AUTHOR_RANKING_SUCCESS',
    'nft/GET_AUTHOR_RANKING_FAIL'
)();

export const getBlogPosts = asyncAction(
    'nft/GET_BLOG_POSTS',
    'nft/GET_BLOG_POSTS_SUCCESS',
    'nft/GET_BLOG_POSTS_FAIL'
)();

export const getRecentPosts = asyncAction(
    'nft/GET_RECENT_POSTS',
    'nft/GET_RECENT_POSTS_SUCCESS',
    'nft/GET_RECENT_POSTS_FAIL'
)();

export const getTags = asyncAction(
    'nft/GET_TAGS',
    'nft/GET_TAGS_SUCCESS',
    'nft/GET_TAGS_FAIL'
)();

export const getComments = asyncAction(
    'nft/GET_COMMENTS',
    'nft/GET_COMMENTS_SUCCESS',
    'nft/GET_COMMENTS_FAIL'
)();

export const clearNfts = action('nft/CLEAR_ALL_NFTS')();
export const clearFilter = action('nft/CLEAR_FILTER')();
export const filterCategories = action('nft/FILTER_CATEGORIES')();
export const filterStatus = action('nft/FILTER_STATUS')();
export const filterItemsType = action('nft/FILTER_ITEMS_TYPE')();
export const filterCollections = action('nft/FILTER_COLLECTIONS')();
export const filterNftTitle = action('nft/FILTER_NFT_TITLE')();