abstract class State {
  protected player!: MediaPlayer;

  constructor(player: MediaPlayer) {
    this.player = player;
  }

  abstract clickPlay(player: MediaPlayer): void

  abstract clickLock(player: MediaPlayer): void

  abstract clickNext(player: MediaPlayer): void

  abstract clickPrevious(player: MediaPlayer): void
}

class LockedState extends State {

  clickLock() {
    this.player.changeState(new ReadyStateTmp(this.player));
  }

  clickPlay() {
  }

  clickNext() {
  }

  clickPrevious() {
  }
}

class ReadyStateTmp extends State {
  clickLock() {
    this.player.changeState(new LockedState(this.player));
  }

  clickPlay() {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }

  clickNext() {
    this.player.nextSong();
  }

  clickPrevious() {
    this.player.previousSong();
  }
}

class PlayingState extends State {
  clickLock() {
    this.player.changeState(new LockedState(this.player));

  }

  clickPlay() {
    this.player.stopPlayback();
    this.player.changeState(new ReadyStateTmp(this.player));
  }


  clickNext() {
    this.player.nextSong();
  }


  clickPrevious() {
    this.player.previousSong();
  }
}


class MediaPlayer {
  public tracks!: string[];
  public state!: any;
  public currentNumber!: number;

  constructor() {
    this.tracks = [];
    this.state = new ReadyStateTmp(this);
    this.currentNumber = 0;
  }

  changeState(state: State) {
    this.state = state;

  }

  // Методи UI делегуватимуть роботу активному стану.
  clickLock() {
    this.state.clickLock();
  }

  clickPlay() {
    this.state.clickPlay();
  }

  clickNext() {
    this.state.clickNext();

  }

  clickPrevious() {
    this.state.clickPrevious();
  }

  // Сервісні методи контексту, що викликаються станами.
  startPlayback() {
  }

  // ...
  stopPlayback() {
  }

  // ...
  nextSong(): void {
    this.currentNumber = (this.currentNumber + 1) % this.tracks.length;
  }

  // ...
  previousSong(): void {
    this.currentNumber = (this.currentNumber - 1) % this.tracks.length;

  }

  // ...
  fastForward(time: number) {
  }

  // ...
  rewind(time: number) {
  }
}
