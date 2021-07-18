import { atom } from 'recoil';

export const stationListState = atom<any>({
  key: 'stationListState',
  default: null,
});

export const arrivalBusInfoListState = atom({
  key: 'arrivalBusInfoListState',
  default: null,
});

export const seletedStationState = atom({
  key: 'seletedStationState',
  default: null,
});
