interface IOrg {
  id: string;
  name: string;
  children?: IOrg[];
}
