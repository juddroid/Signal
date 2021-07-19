import { atom } from 'recoil';

export const stationListState = atom<any>({
  key: 'stationListState',
  default: null,
});

export const arrivalBusInfoListState = atom({
  key: 'arrivalBusInfoListState',
  default: null,
});

export const selectedStationState = atom<{
  title: any;
  busInfoList: any;
} | null>({
  key: 'seletedStationState',
  default: null,
});

export const currentPositionState = atom({
  key: 'currentPositionState',
  default: {
    lat: 0,
    lng: 0,
  },
});

export const signalState = atom<{
  green: boolean;
  orange: boolean;
  red: boolean;
}>({
  key: 'signalState',
  default: {
    green: true,
    orange: false,
    red: false,
  },
});
