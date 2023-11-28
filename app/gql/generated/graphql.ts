import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables,
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
  DateTime: { input: any; output: any };
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Enumdel_YnFilter = {
  equals?: InputMaybe<Del_Yn>;
  in?: InputMaybe<Array<Del_Yn>>;
  not?: InputMaybe<NestedEnumdel_YnFilter>;
  notIn?: InputMaybe<Array<Del_Yn>>;
};

export type Enumshow_YnFilter = {
  equals?: InputMaybe<Show_Yn>;
  in?: InputMaybe<Array<Show_Yn>>;
  not?: InputMaybe<NestedEnumshow_YnFilter>;
  notIn?: InputMaybe<Array<Show_Yn>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Item = {
  __typename?: 'Item';
  bid: Scalars['Int']['output'];
  del_yn: Del_Yn;
  img_url: Scalars['String']['output'];
  ins_date: Scalars['DateTime']['output'];
  item_id: Scalars['BigInt']['output'];
  item_title: Scalars['String']['output'];
  keywords: Scalars['String']['output'];
  upd_date: Scalars['DateTime']['output'];
  use_yn: Show_Yn;
};

export type ItemCreateManyInput = {
  bid?: InputMaybe<Scalars['Int']['input']>;
  del_yn?: InputMaybe<Del_Yn>;
  img_url: Scalars['String']['input'];
  ins_date?: InputMaybe<Scalars['DateTime']['input']>;
  item_id?: InputMaybe<Scalars['BigInt']['input']>;
  item_title: Scalars['String']['input'];
  keywords: Scalars['String']['input'];
  upd_date?: InputMaybe<Scalars['DateTime']['input']>;
  use_yn?: InputMaybe<Show_Yn>;
};

export type ItemWhereInput = {
  AND?: InputMaybe<Array<ItemWhereInput>>;
  NOT?: InputMaybe<Array<ItemWhereInput>>;
  OR?: InputMaybe<Array<ItemWhereInput>>;
  bid?: InputMaybe<IntFilter>;
  del_yn?: InputMaybe<Enumdel_YnFilter>;
  img_url?: InputMaybe<StringFilter>;
  ins_date?: InputMaybe<DateTimeFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  item_title?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringFilter>;
  upd_date?: InputMaybe<DateTimeFilter>;
  use_yn?: InputMaybe<Enumshow_YnFilter>;
};

export type ItemWhereUniqueInput = {
  AND?: InputMaybe<Array<ItemWhereInput>>;
  NOT?: InputMaybe<Array<ItemWhereInput>>;
  OR?: InputMaybe<Array<ItemWhereInput>>;
  bid?: InputMaybe<IntFilter>;
  del_yn?: InputMaybe<Enumdel_YnFilter>;
  img_url?: InputMaybe<StringFilter>;
  ins_date?: InputMaybe<DateTimeFilter>;
  item_id?: InputMaybe<Scalars['BigInt']['input']>;
  item_title?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringFilter>;
  upd_date?: InputMaybe<DateTimeFilter>;
  use_yn?: InputMaybe<Enumshow_YnFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addItem: Item;
  changeUseYn: Item;
  deleteItem: Item;
};

export type MutationAddItemArgs = {
  Item: ItemCreateManyInput;
};

export type MutationChangeUseYnArgs = {
  Item: ItemCreateManyInput;
};

export type MutationDeleteItemArgs = {
  Item: ItemWhereUniqueInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumdel_YnFilter = {
  equals?: InputMaybe<Del_Yn>;
  in?: InputMaybe<Array<Del_Yn>>;
  not?: InputMaybe<NestedEnumdel_YnFilter>;
  notIn?: InputMaybe<Array<Del_Yn>>;
};

export type NestedEnumshow_YnFilter = {
  equals?: InputMaybe<Show_Yn>;
  in?: InputMaybe<Array<Show_Yn>>;
  not?: InputMaybe<NestedEnumshow_YnFilter>;
  notIn?: InputMaybe<Array<Show_Yn>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** 광고 아이템 리스트 */
  item_list: Array<Item>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum Del_Yn {
  N = 'N',
  Y = 'Y',
}

export enum Show_Yn {
  N = 'N',
  Y = 'Y',
}

export type AddItemMutationVariables = Exact<{
  item: ItemCreateManyInput;
}>;

export type AddItemMutation = {
  __typename?: 'Mutation';
  addItem: {
    __typename?: 'Item';
    item_title: string;
    img_url: string;
    bid: number;
    keywords: string;
  };
};

export type ChangeUseYnMutationVariables = Exact<{
  item: ItemCreateManyInput;
}>;

export type ChangeUseYnMutation = {
  __typename?: 'Mutation';
  changeUseYn: {
    __typename?: 'Item';
    use_yn: Show_Yn;
    item_id: any;
    upd_date: any;
    keywords: string;
    item_title: string;
    ins_date: any;
    img_url: string;
    del_yn: Del_Yn;
    bid: number;
  };
};

export type DeleteItemMutationVariables = Exact<{
  item: ItemWhereUniqueInput;
}>;

export type DeleteItemMutation = {
  __typename?: 'Mutation';
  deleteItem: {
    __typename?: 'Item';
    item_id: any;
    img_url: string;
    item_title: string;
    keywords: string;
    bid: number;
    use_yn: Show_Yn;
    ins_date: any;
    upd_date: any;
    del_yn: Del_Yn;
  };
};

export type GetItemListQueryVariables = Exact<{ [key: string]: never }>;

export type GetItemListQuery = {
  __typename?: 'Query';
  item_list: Array<{
    __typename?: 'Item';
    item_id: any;
    img_url: string;
    item_title: string;
    keywords: string;
    bid: number;
    use_yn: Show_Yn;
    ins_date: any;
    upd_date: any;
    del_yn: Del_Yn;
  }>;
};

export const AddItemDocument = `
    mutation AddItem($item: ItemCreateManyInput!) {
  addItem(Item: $item) {
    item_title
    img_url
    bid
    keywords
  }
}
    `;

export const useAddItemMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    AddItemMutation,
    TError,
    AddItemMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    AddItemMutation,
    TError,
    AddItemMutationVariables,
    TContext
  >({
    mutationKey: ['AddItem'],
    mutationFn: (variables?: AddItemMutationVariables) =>
      fetcher<AddItemMutation, AddItemMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        AddItemDocument,
        variables,
      )(),
  });
};

export const ChangeUseYnDocument = `
    mutation ChangeUseYn($item: ItemCreateManyInput!) {
  changeUseYn(Item: $item) {
    use_yn
    item_id
    upd_date
    keywords
    item_title
    ins_date
    img_url
    del_yn
    bid
  }
}
    `;

export const useChangeUseYnMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    ChangeUseYnMutation,
    TError,
    ChangeUseYnMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    ChangeUseYnMutation,
    TError,
    ChangeUseYnMutationVariables,
    TContext
  >({
    mutationKey: ['ChangeUseYn'],
    mutationFn: (variables?: ChangeUseYnMutationVariables) =>
      fetcher<ChangeUseYnMutation, ChangeUseYnMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        ChangeUseYnDocument,
        variables,
      )(),
  });
};

export const DeleteItemDocument = `
    mutation DeleteItem($item: ItemWhereUniqueInput!) {
  deleteItem(Item: $item) {
    item_id
    img_url
    item_title
    keywords
    bid
    use_yn
    ins_date
    upd_date
    del_yn
  }
}
    `;

export const useDeleteItemMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    DeleteItemMutation,
    TError,
    DeleteItemMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    DeleteItemMutation,
    TError,
    DeleteItemMutationVariables,
    TContext
  >({
    mutationKey: ['DeleteItem'],
    mutationFn: (variables?: DeleteItemMutationVariables) =>
      fetcher<DeleteItemMutation, DeleteItemMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        DeleteItemDocument,
        variables,
      )(),
  });
};

export const GetItemListDocument = `
    query getItemList {
  item_list {
    item_id
    img_url
    item_title
    keywords
    bid
    use_yn
    ins_date
    upd_date
    del_yn
  }
}
    `;

export const useGetItemListQuery = <TData = GetItemListQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetItemListQueryVariables,
  options?: UseQueryOptions<GetItemListQuery, TError, TData>,
) => {
  return useQuery<GetItemListQuery, TError, TData>({
    queryKey:
      variables === undefined ? ['getItemList'] : ['getItemList', variables],
    queryFn: fetcher<GetItemListQuery, GetItemListQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetItemListDocument,
      variables,
    ),
  });
};
