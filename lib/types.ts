export type ValentineConfig = {
  valentineName: string;
  pageTitle: string;
  floatingEmojis: {
    hearts: string[];
    bears: string[];
  };
  questions: {
    first: {
      text: string;
      yesBtn: string;
      noBtn: string;
      secretAnswer: string;
    };
    second: {
      text: string;
      subText: string;
      startText: string;
      nextBtn: string;
    };
    third: {
      text: string;
      yesBtn: string;
      noBtn: string;
    };
  };
  loveMessages: {
    extreme: string;
    high: string;
    normal: string;
  };
  celebration: {
    title: string;
    message: string;
    emojis: string;
  };
  colors: {
    backgroundStart: string;
    backgroundEnd: string;
    buttonBackground: string;
    buttonHover: string;
    textColor: string;
  };
  animations: {
    floatDuration: string;
    floatDistance: string;
    bounceSpeed: string;
    heartExplosionSize: number;
  };
  music: {
    enabled: boolean;
    autoplay: boolean;
    musicUrl: string;
    startText: string;
    stopText: string;
    volume: number;
  };
  image: {
    imageUrl: string;
    imageAltText: string;
  };
};

export type Position = {
  left: string;
  top: string;
};
export type Next = {
  onNext: () => void;
};
export type FloatingElement = {
  id: string;
  emoji: string;
  style: {
    left: string;
    animationDelay: string;
    animationDuration: string;
  };
};
export type Yes = {
  onYes: () => void;
};

export interface MusicPlayerProps {
  autoStart?: boolean;
}
