import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
} from '@angular/animations';

export function slideLeft() {
  return [
    query(':enter, :leave',
      style({position: 'fixed', width: '100%'}),
      {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s linear',
          style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s linear',
          style({transform: 'translateX(-100%)'}))
      ], {optional: true}),
    ])
  ];
}

export function slideRight() {
  return [
    query(':enter, :leave',
      style({position: 'fixed', width: '100%'}),
      {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s linear',
          style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s linear',
          style({transform: 'translateX(100%)'}))
      ], {optional: true}),
    ])
  ];
}

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home => *', slideLeft()),
    transition('Contact => *', slideRight()),
    transition('About => Contact', slideLeft()),
    transition('About => Experience', slideLeft()),
    transition('About => Home', slideRight()),
    transition('Experience => Home', slideRight()),
    transition('Experience => About', slideRight()),
    transition('Experience => Contact', slideLeft()),
  ]);

