export interface album{
  userId : number;
  id : number;
  title : string;
}

export interface photo{
  albumId : number;
  idPhoto : number;
  title : string;
  url : string;
  thumbnailUrl : string;
}
