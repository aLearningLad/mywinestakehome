export type Iparams = {
  id: string;
};

export type Inavlinks = {
  id: number;
  title: string;
  uniqueLink: string;
};

export type Ifooterlinks = {
  id: number;
  title: string;
  link: string;
};

export type Isociallinks = {
  title: string;
  icon: React.ReactElement;
  link: string;
};

export type Istockwines = {
  id: number;
  extLink: string;
  img: string;
  title: string;
  flavournotes: string;
  from: string;
  color: string;
  concentr: string;
  avgrating: number;
  review: string;
  by: string;
};

export type Idbwinecard = {
  id: number;
  name: string;
  year: number;
  type: string;
  varietal: string;
  rating: string;
  consumed: true;
  dateconsumed: string;
  region: string;
  winestyle: string;
  foodpairings: string;
  winecolor: string;
  bottlesize: string;
  tastingnotes: string;
  oakaging: boolean;
  alcoholcontent: string;
  vintner: string;
};
