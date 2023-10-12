export type ListGroupParms = {
  cities: string[];
  onCitySelected: (city: string) => void;
};

export type ListItemParameter = {
  city: string;
  index: number;
  selectedIndex: number;
  onClick: (index: number) => void;
};
