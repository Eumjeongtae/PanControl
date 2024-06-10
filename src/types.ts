export interface PanPlayState {
  id: number;
  name: string;
  isPlaying: boolean;
}

export interface GroupState {
  id: number;
  groubName: string;
  playNum:string;
  fans: PanPlayState[];
}
