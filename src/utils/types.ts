export type BooksMarksType={
    resourceId: string,
    resourceType: string,
      abstract: string,
      path: string
  }
  
  export type InitialValuesType = {
    resourceId: string;
    abstract: string;
    path: string;
  };

  export type DataUser = {
    id: string;
    username: string;
    name: string;
    avatar: string;
    language: {
      id: string;
      name: string;
    };
  };

  export type DeleteBooksMarksType={
    id:string
  }

  export type UpdateBookMarkType={
    id:string,
    abstract:string,
    path:string
  }

  export type CardBookMarksType = {
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