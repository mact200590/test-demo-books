declare namespace Definitions {
  export type User = {
    id: string;
    username: string;
    name: string;
    avatar: string;
    language: {
      id: string;
      name: string;
    };
  };

  export type BookMarks = {
    id: string;
    abstract: string;
    path: string;
    time: number;
    author: {
      id: string;
      userName: string;
      name: string;
    };
    resource: {
      id: string;
      type: string;
      cover: string;
      title: string;
    };
  };

  // type to params
  export type UpdateBookMarkParams = {
    id: string,
    abstract: string,
    path: string
  }

  export type CreateBooksMarksParams = {
    resourceId: string,
    resourceType: string,
    abstract: string,
    path: string
  }

  export type AsyncStorageKeys = "SESSION_TOKEN" | "REFRESH_TOKEN";
}

