import React, { Component } from "react";
import anime from "animejs";

interface IAnimeProps extends anime.AnimeParams {}
interface IAnimeProps {}

interface IAnimeState {}

class Anime extends Component<IAnimeProps, IAnimeState> {
  private targets: HTMLElement[] = [];

  constructor(props: IAnimeProps) {
    super(props);
  }

  addTargets(target: HTMLElement) {
    console.log("a");
    this.targets = [...this.targets, target];
  }

  renderChildren(children: React.ReactNode) {
    console.log(children);
  }

  render() {
    return null;
  }
}

export default Anime;

// import * as CSS from 'csstype';

// interface IAnimation extends IAnimationStyleProperties, IOtherProperties, IPropertyParameters {
//     targets: HTMLElement[];
// }

// interface IAnimationStyleProperties extends IAnimationStylePropertyParameters { }

// interface IOtherProperties {
//     [index: string]: any;
// }

// type IAnimationStylePropertyParameters = { [P in keyof CSS.Properties & CSS.SvgProperties]: IPropertyParameters | string | number };

// interface IPropertyParameters extends IAnimationParameters {
//     duration?: number | functionBasedParamter;
//     delay?: number | functionBasedParamter;
//     endDelay?: number | functionBasedParamter;
//     easing?: string;
//     round?: number;
//     value?: animationValues;
// }

// type functionBasedParamter = (target: HTMLElement, index: number, targetsLength: number) => number;

// interface IAnimationParameters {
//     direction?: ANIMATION_DIRECTION_PARAMETERS;
//     loop?: number | boolean;
//     autoplay?: boolean;
// }

// type animationValues = string | number;

// enum ANIMATION_DIRECTION_PARAMETERS {
//     NORMAL = "normal",
//     REVERSE = "reverse",
//     ALTERNATE = "alternate",
// }
