import { Component, OnDestroy, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LOADERS } from './ion-busy-indicator.layout';

const BUSY_INDICATOR_STYLES =
    `
/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */

 .la-ball-8bits,
 .la-ball-8bits>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-8bits {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-8bits.la-dark {
     color: #333
 }
 
 .la-ball-8bits>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-8bits {
     width: 12px;
     height: 12px
 }
 
 .la-ball-8bits>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 4px;
     height: 4px;
     border-radius: 0;
     opacity: 0;
     -webkit-transform: translate(100%, 100%);
     -moz-transform: translate(100%, 100%);
     -ms-transform: translate(100%, 100%);
     -o-transform: translate(100%, 100%);
     transform: translate(100%, 100%);
     -webkit-animation: ball-8bits 1s 0s ease infinite;
     -moz-animation: ball-8bits 1s 0s ease infinite;
     -o-animation: ball-8bits 1s 0s ease infinite;
     animation: ball-8bits 1s 0s ease infinite
 }
 
 .la-ball-8bits>div:nth-child(1) {
     -webkit-animation-delay: -.9375s;
     -moz-animation-delay: -.9375s;
     -o-animation-delay: -.9375s;
     animation-delay: -.9375s
 }
 
 .la-ball-8bits>div:nth-child(2) {
     -webkit-animation-delay: -.875s;
     -moz-animation-delay: -.875s;
     -o-animation-delay: -.875s;
     animation-delay: -.875s
 }
 
 .la-ball-8bits>div:nth-child(3) {
     -webkit-animation-delay: -.8125s;
     -moz-animation-delay: -.8125s;
     -o-animation-delay: -.8125s;
     animation-delay: -.8125s
 }
 
 .la-ball-8bits>div:nth-child(4) {
     -webkit-animation-delay: -.75s;
     -moz-animation-delay: -.75s;
     -o-animation-delay: -.75s;
     animation-delay: -.75s
 }
 
 .la-ball-8bits>div:nth-child(5) {
     -webkit-animation-delay: -.6875s;
     -moz-animation-delay: -.6875s;
     -o-animation-delay: -.6875s;
     animation-delay: -.6875s
 }
 
 .la-ball-8bits>div:nth-child(6) {
     -webkit-animation-delay: -.625s;
     -moz-animation-delay: -.625s;
     -o-animation-delay: -.625s;
     animation-delay: -.625s
 }
 
 .la-ball-8bits>div:nth-child(7) {
     -webkit-animation-delay: -.5625s;
     -moz-animation-delay: -.5625s;
     -o-animation-delay: -.5625s;
     animation-delay: -.5625s
 }
 
 .la-ball-8bits>div:nth-child(8) {
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-ball-8bits>div:nth-child(9) {
     -webkit-animation-delay: -.4375s;
     -moz-animation-delay: -.4375s;
     -o-animation-delay: -.4375s;
     animation-delay: -.4375s
 }
 
 .la-ball-8bits>div:nth-child(10) {
     -webkit-animation-delay: -.375s;
     -moz-animation-delay: -.375s;
     -o-animation-delay: -.375s;
     animation-delay: -.375s
 }
 
 .la-ball-8bits>div:nth-child(11) {
     -webkit-animation-delay: -.3125s;
     -moz-animation-delay: -.3125s;
     -o-animation-delay: -.3125s;
     animation-delay: -.3125s
 }
 
 .la-ball-8bits>div:nth-child(12) {
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-ball-8bits>div:nth-child(13) {
     -webkit-animation-delay: -.1875s;
     -moz-animation-delay: -.1875s;
     -o-animation-delay: -.1875s;
     animation-delay: -.1875s
 }
 
 .la-ball-8bits>div:nth-child(14) {
     -webkit-animation-delay: -.125s;
     -moz-animation-delay: -.125s;
     -o-animation-delay: -.125s;
     animation-delay: -.125s
 }
 
 .la-ball-8bits>div:nth-child(15) {
     -webkit-animation-delay: -.0625s;
     -moz-animation-delay: -.0625s;
     -o-animation-delay: -.0625s;
     animation-delay: -.0625s
 }
 
 .la-ball-8bits>div:nth-child(16) {
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-8bits>div:nth-child(1) {
     top: -100%;
     left: 0
 }
 
 .la-ball-8bits>div:nth-child(2) {
     top: -100%;
     left: 33.3333333333%
 }
 
 .la-ball-8bits>div:nth-child(3) {
     top: -66.6666666667%;
     left: 66.6666666667%
 }
 
 .la-ball-8bits>div:nth-child(4) {
     top: -33.3333333333%;
     left: 100%
 }
 
 .la-ball-8bits>div:nth-child(5) {
     top: 0;
     left: 100%
 }
 
 .la-ball-8bits>div:nth-child(6) {
     top: 33.3333333333%;
     left: 100%
 }
 
 .la-ball-8bits>div:nth-child(7) {
     top: 66.6666666667%;
     left: 66.6666666667%
 }
 
 .la-ball-8bits>div:nth-child(8) {
     top: 100%;
     left: 33.3333333333%
 }
 
 .la-ball-8bits>div:nth-child(9) {
     top: 100%;
     left: 0
 }
 
 .la-ball-8bits>div:nth-child(10) {
     top: 100%;
     left: -33.3333333333%
 }
 
 .la-ball-8bits>div:nth-child(11) {
     top: 66.6666666667%;
     left: -66.6666666667%
 }
 
 .la-ball-8bits>div:nth-child(12) {
     top: 33.3333333333%;
     left: -100%
 }
 
 .la-ball-8bits>div:nth-child(13) {
     top: 0;
     left: -100%
 }
 
 .la-ball-8bits>div:nth-child(14) {
     top: -33.3333333333%;
     left: -100%
 }
 
 .la-ball-8bits>div:nth-child(15) {
     top: -66.6666666667%;
     left: -66.6666666667%
 }
 
 .la-ball-8bits>div:nth-child(16) {
     top: -100%;
     left: -33.3333333333%
 }
 
 .la-ball-8bits.la-sm {
     width: 6px;
     height: 6px
 }
 
 .la-ball-8bits.la-sm>div {
     width: 2px;
     height: 2px
 }
 
 .la-ball-8bits.la-2x {
     width: 24px;
     height: 24px
 }
 
 .la-ball-8bits.la-2x>div {
     width: 8px;
     height: 8px
 }
 
 .la-ball-8bits.la-3x {
     width: 36px;
     height: 36px
 }
 
 .la-ball-8bits.la-3x>div {
     width: 12px;
     height: 12px
 }
 
 @-webkit-keyframes ball-8bits {
     0% {
         opacity: 1
     }
     50% {
         opacity: 1
     }
     51% {
         opacity: 0
     }
 }
 
 @-moz-keyframes ball-8bits {
     0% {
         opacity: 1
     }
     50% {
         opacity: 1
     }
     51% {
         opacity: 0
     }
 }
 
 @-o-keyframes ball-8bits {
     0% {
         opacity: 1
     }
     50% {
         opacity: 1
     }
     51% {
         opacity: 0
     }
 }
 
 @keyframes ball-8bits {
     0% {
         opacity: 1
     }
     50% {
         opacity: 1
     }
     51% {
         opacity: 0
     }
 }
 
 .la-ball-atom,
 .la-ball-atom>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-atom {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-atom.la-dark {
     color: #333
 }
 
 .la-ball-atom>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-atom {
     width: 32px;
     height: 32px
 }
 
 .la-ball-atom>div:nth-child(1) {
     position: absolute;
     top: 50%;
     left: 50%;
     z-index: 1;
     width: 60%;
     height: 60%;
     background: #aaa;
     border-radius: 100%;
     -webkit-transform: translate(-50%, -50%);
     -moz-transform: translate(-50%, -50%);
     -ms-transform: translate(-50%, -50%);
     -o-transform: translate(-50%, -50%);
     transform: translate(-50%, -50%);
     -webkit-animation: ball-atom-shrink 4.5s infinite linear;
     -moz-animation: ball-atom-shrink 4.5s infinite linear;
     -o-animation: ball-atom-shrink 4.5s infinite linear;
     animation: ball-atom-shrink 4.5s infinite linear
 }
 
 .la-ball-atom>div:not(:nth-child(1)) {
     position: absolute;
     left: 0;
     z-index: 0;
     width: 100%;
     height: 100%;
     background: none;
     -webkit-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
     -moz-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
     -o-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
     animation: ball-atom-zindex 1.5s 0s infinite steps(2, end)
 }
 
 .la-ball-atom>div:not(:nth-child(1)):before {
     position: absolute;
     top: 0;
     left: 0;
     width: 10px;
     height: 10px;
     margin-top: -5px;
     margin-left: -5px;
     content: "";
     background: currentColor;
     border-radius: 50%;
     opacity: .75;
     -webkit-animation: ball-atom-position 1.5s 0s infinite ease, ball-atom-size 1.5s 0s infinite ease;
     -moz-animation: ball-atom-position 1.5s 0s infinite ease, ball-atom-size 1.5s 0s infinite ease;
     -o-animation: ball-atom-position 1.5s 0s infinite ease, ball-atom-size 1.5s 0s infinite ease;
     animation: ball-atom-position 1.5s 0s infinite ease, ball-atom-size 1.5s 0s infinite ease
 }
 
 .la-ball-atom>div:nth-child(2) {
     -webkit-animation-delay: .75s;
     -moz-animation-delay: .75s;
     -o-animation-delay: .75s;
     animation-delay: .75s
 }
 
 .la-ball-atom>div:nth-child(2):before {
     -webkit-animation-delay: 0s, -1.125s;
     -moz-animation-delay: 0s, -1.125s;
     -o-animation-delay: 0s, -1.125s;
     animation-delay: 0s, -1.125s
 }
 
 .la-ball-atom>div:nth-child(3) {
     -webkit-transform: rotate(120deg);
     -moz-transform: rotate(120deg);
     -ms-transform: rotate(120deg);
     -o-transform: rotate(120deg);
     transform: rotate(120deg);
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-ball-atom>div:nth-child(3):before {
     -webkit-animation-delay: -1s, -0.75s;
     -moz-animation-delay: -1s, -0.75s;
     -o-animation-delay: -1s, -0.75s;
     animation-delay: -1s, -0.75s
 }
 
 .la-ball-atom>div:nth-child(4) {
     -webkit-transform: rotate(240deg);
     -moz-transform: rotate(240deg);
     -ms-transform: rotate(240deg);
     -o-transform: rotate(240deg);
     transform: rotate(240deg);
     -webkit-animation-delay: .25s;
     -moz-animation-delay: .25s;
     -o-animation-delay: .25s;
     animation-delay: .25s
 }
 
 .la-ball-atom>div:nth-child(4):before {
     -webkit-animation-delay: -0.5s, -0.125s;
     -moz-animation-delay: -0.5s, -0.125s;
     -o-animation-delay: -0.5s, -0.125s;
     animation-delay: -0.5s, -0.125s
 }
 
 .la-ball-atom.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-atom.la-sm>div:not(:nth-child(1)):before {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-atom.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-atom.la-2x>div:not(:nth-child(1)):before {
     width: 20px;
     height: 20px;
     margin-top: -10px;
     margin-left: -10px
 }
 
 .la-ball-atom.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-atom.la-3x>div:not(:nth-child(1)):before {
     width: 30px;
     height: 30px;
     margin-top: -15px;
     margin-left: -15px
 }
 
 @-webkit-keyframes ball-atom-position {
     50% {
         top: 100%;
         left: 100%
     }
 }
 
 @-moz-keyframes ball-atom-position {
     50% {
         top: 100%;
         left: 100%
     }
 }
 
 @-o-keyframes ball-atom-position {
     50% {
         top: 100%;
         left: 100%
     }
 }
 
 @keyframes ball-atom-position {
     50% {
         top: 100%;
         left: 100%
     }
 }
 
 @-webkit-keyframes ball-atom-size {
     50% {
         -webkit-transform: scale(0.5, 0.5);
         transform: scale(0.5, 0.5)
     }
 }
 
 @-moz-keyframes ball-atom-size {
     50% {
         -moz-transform: scale(0.5, 0.5);
         transform: scale(0.5, 0.5)
     }
 }
 
 @-o-keyframes ball-atom-size {
     50% {
         -o-transform: scale(0.5, 0.5);
         transform: scale(0.5, 0.5)
     }
 }
 
 @keyframes ball-atom-size {
     50% {
         -webkit-transform: scale(0.5, 0.5);
         -moz-transform: scale(0.5, 0.5);
         -o-transform: scale(0.5, 0.5);
         transform: scale(0.5, 0.5)
     }
 }
 
 @-webkit-keyframes ball-atom-zindex {
     50% {
         z-index: 10
     }
 }
 
 @-moz-keyframes ball-atom-zindex {
     50% {
         z-index: 10
     }
 }
 
 @-o-keyframes ball-atom-zindex {
     50% {
         z-index: 10
     }
 }
 
 @keyframes ball-atom-zindex {
     50% {
         z-index: 10
     }
 }
 
 @-webkit-keyframes ball-atom-shrink {
     50% {
         -webkit-transform: translate(-50%, -50%) scale(0.8, 0.8);
         transform: translate(-50%, -50%) scale(0.8, 0.8)
     }
 }
 
 @-moz-keyframes ball-atom-shrink {
     50% {
         -moz-transform: translate(-50%, -50%) scale(0.8, 0.8);
         transform: translate(-50%, -50%) scale(0.8, 0.8)
     }
 }
 
 @-o-keyframes ball-atom-shrink {
     50% {
         -o-transform: translate(-50%, -50%) scale(0.8, 0.8);
         transform: translate(-50%, -50%) scale(0.8, 0.8)
     }
 }
 
 @keyframes ball-atom-shrink {
     50% {
         -webkit-transform: translate(-50%, -50%) scale(0.8, 0.8);
         -moz-transform: translate(-50%, -50%) scale(0.8, 0.8);
         -o-transform: translate(-50%, -50%) scale(0.8, 0.8);
         transform: translate(-50%, -50%) scale(0.8, 0.8)
     }
 }
 
 .la-ball-beat,
 .la-ball-beat>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-beat {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-beat.la-dark {
     color: #333
 }
 
 .la-ball-beat>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-beat {
     width: 54px;
     height: 18px
 }
 
 .la-ball-beat>div {
     width: 10px;
     height: 10px;
     margin: 4px;
     border-radius: 100%;
     -webkit-animation: ball-beat 0.7s -0.15s infinite linear;
     -moz-animation: ball-beat 0.7s -0.15s infinite linear;
     -o-animation: ball-beat 0.7s -0.15s infinite linear;
     animation: ball-beat 0.7s -0.15s infinite linear
 }
 
 .la-ball-beat>div:nth-child(2n-1) {
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-ball-beat.la-sm {
     width: 26px;
     height: 8px
 }
 
 .la-ball-beat.la-sm>div {
     width: 4px;
     height: 4px;
     margin: 2px
 }
 
 .la-ball-beat.la-2x {
     width: 108px;
     height: 36px
 }
 
 .la-ball-beat.la-2x>div {
     width: 20px;
     height: 20px;
     margin: 8px
 }
 
 .la-ball-beat.la-3x {
     width: 162px;
     height: 54px
 }
 
 .la-ball-beat.la-3x>div {
     width: 30px;
     height: 30px;
     margin: 12px
 }
 
 @-webkit-keyframes ball-beat {
     50% {
         opacity: .2;
         -webkit-transform: scale(0.75);
         transform: scale(0.75)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-beat {
     50% {
         opacity: .2;
         -moz-transform: scale(0.75);
         transform: scale(0.75)
     }
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-beat {
     50% {
         opacity: .2;
         -o-transform: scale(0.75);
         transform: scale(0.75)
     }
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-beat {
     50% {
         opacity: .2;
         -webkit-transform: scale(0.75);
         -moz-transform: scale(0.75);
         -o-transform: scale(0.75);
         transform: scale(0.75)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-circus,
 .la-ball-circus>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-circus {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-circus.la-dark {
     color: #333
 }
 
 .la-ball-circus>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-circus {
     width: 16px;
     height: 16px
 }
 
 .la-ball-circus>div {
     position: absolute;
     top: 0;
     left: -100%;
     display: block;
     width: 16px;
     width: 100%;
     height: 16px;
     height: 100%;
     border-radius: 100%;
     opacity: .5;
     -webkit-animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
     -moz-animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
     -o-animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
     animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1), ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1)
 }
 
 .la-ball-circus>div:nth-child(1) {
     -webkit-animation-delay: 0s, -0.5s;
     -moz-animation-delay: 0s, -0.5s;
     -o-animation-delay: 0s, -0.5s;
     animation-delay: 0s, -0.5s
 }
 
 .la-ball-circus>div:nth-child(2) {
     -webkit-animation-delay: -0.5s, -1s;
     -moz-animation-delay: -0.5s, -1s;
     -o-animation-delay: -0.5s, -1s;
     animation-delay: -0.5s, -1s
 }
 
 .la-ball-circus>div:nth-child(3) {
     -webkit-animation-delay: -1s, -1.5s;
     -moz-animation-delay: -1s, -1.5s;
     -o-animation-delay: -1s, -1.5s;
     animation-delay: -1s, -1.5s
 }
 
 .la-ball-circus>div:nth-child(4) {
     -webkit-animation-delay: -1.5s, -2s;
     -moz-animation-delay: -1.5s, -2s;
     -o-animation-delay: -1.5s, -2s;
     animation-delay: -1.5s, -2s
 }
 
 .la-ball-circus>div:nth-child(5) {
     -webkit-animation-delay: -2s, -2.5s;
     -moz-animation-delay: -2s, -2.5s;
     -o-animation-delay: -2s, -2.5s;
     animation-delay: -2s, -2.5s
 }
 
 .la-ball-circus.la-sm {
     width: 8px;
     height: 8px
 }
 
 .la-ball-circus.la-sm>div {
     width: 8px;
     height: 8px
 }
 
 .la-ball-circus.la-2x {
     width: 32px;
     height: 32px
 }
 
 .la-ball-circus.la-2x>div {
     width: 32px;
     height: 32px
 }
 
 .la-ball-circus.la-3x {
     width: 48px;
     height: 48px
 }
 
 .la-ball-circus.la-3x>div {
     width: 48px;
     height: 48px
 }
 
 @-webkit-keyframes ball-circus-position {
     50% {
         left: 100%
     }
 }
 
 @-moz-keyframes ball-circus-position {
     50% {
         left: 100%
     }
 }
 
 @-o-keyframes ball-circus-position {
     50% {
         left: 100%
     }
 }
 
 @keyframes ball-circus-position {
     50% {
         left: 100%
     }
 }
 
 @-webkit-keyframes ball-circus-size {
     50% {
         -webkit-transform: scale(0.3, 0.3);
         transform: scale(0.3, 0.3)
     }
 }
 
 @-moz-keyframes ball-circus-size {
     50% {
         -moz-transform: scale(0.3, 0.3);
         transform: scale(0.3, 0.3)
     }
 }
 
 @-o-keyframes ball-circus-size {
     50% {
         -o-transform: scale(0.3, 0.3);
         transform: scale(0.3, 0.3)
     }
 }
 
 @keyframes ball-circus-size {
     50% {
         -webkit-transform: scale(0.3, 0.3);
         -moz-transform: scale(0.3, 0.3);
         -o-transform: scale(0.3, 0.3);
         transform: scale(0.3, 0.3)
     }
 }
 
 .la-ball-climbing-dot,
 .la-ball-climbing-dot>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-climbing-dot {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-climbing-dot.la-dark {
     color: #333
 }
 
 .la-ball-climbing-dot>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-climbing-dot {
     width: 42px;
     height: 32px
 }
 
 .la-ball-climbing-dot>div:nth-child(1) {
     position: absolute;
     bottom: 32%;
     left: 18%;
     width: 14px;
     height: 14px;
     border-radius: 100%;
     -webkit-transform-origin: center bottom;
     -moz-transform-origin: center bottom;
     -ms-transform-origin: center bottom;
     -o-transform-origin: center bottom;
     transform-origin: center bottom;
     -webkit-animation: ball-climbing-dot-jump 0.6s ease-in-out infinite;
     -moz-animation: ball-climbing-dot-jump 0.6s ease-in-out infinite;
     -o-animation: ball-climbing-dot-jump 0.6s ease-in-out infinite;
     animation: ball-climbing-dot-jump 0.6s ease-in-out infinite
 }
 
 .la-ball-climbing-dot>div:not(:nth-child(1)) {
     position: absolute;
     top: 0;
     right: 0;
     width: 14px;
     height: 2px;
     border-radius: 0;
     -webkit-transform: translate(60%, 0);
     -moz-transform: translate(60%, 0);
     -ms-transform: translate(60%, 0);
     -o-transform: translate(60%, 0);
     transform: translate(60%, 0);
     -webkit-animation: ball-climbing-dot-steps 1.8s linear infinite;
     -moz-animation: ball-climbing-dot-steps 1.8s linear infinite;
     -o-animation: ball-climbing-dot-steps 1.8s linear infinite;
     animation: ball-climbing-dot-steps 1.8s linear infinite
 }
 
 .la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(2) {
     -webkit-animation-delay: 0ms;
     -moz-animation-delay: 0ms;
     -o-animation-delay: 0ms;
     animation-delay: 0ms
 }
 
 .la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(3) {
     -webkit-animation-delay: -600ms;
     -moz-animation-delay: -600ms;
     -o-animation-delay: -600ms;
     animation-delay: -600ms
 }
 
 .la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(4) {
     -webkit-animation-delay: -1200ms;
     -moz-animation-delay: -1200ms;
     -o-animation-delay: -1200ms;
     animation-delay: -1200ms
 }
 
 .la-ball-climbing-dot.la-sm {
     width: 20px;
     height: 16px
 }
 
 .la-ball-climbing-dot.la-sm>div:nth-child(1) {
     width: 6px;
     height: 6px
 }
 
 .la-ball-climbing-dot.la-sm>div:not(:nth-child(1)) {
     width: 6px;
     height: 1px
 }
 
 .la-ball-climbing-dot.la-2x {
     width: 84px;
     height: 64px
 }
 
 .la-ball-climbing-dot.la-2x>div:nth-child(1) {
     width: 28px;
     height: 28px
 }
 
 .la-ball-climbing-dot.la-2x>div:not(:nth-child(1)) {
     width: 28px;
     height: 4px
 }
 
 .la-ball-climbing-dot.la-3x {
     width: 126px;
     height: 96px
 }
 
 .la-ball-climbing-dot.la-3x>div:nth-child(1) {
     width: 42px;
     height: 42px
 }
 
 .la-ball-climbing-dot.la-3x>div:not(:nth-child(1)) {
     width: 42px;
     height: 6px
 }
 
 @-webkit-keyframes ball-climbing-dot-jump {
     0% {
         -webkit-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
     20% {
         -webkit-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     40% {
         -webkit-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     50% {
         bottom: 125%
     }
     46% {
         -webkit-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     80% {
         -webkit-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     90% {
         -webkit-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     100% {
         -webkit-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
 }
 
 @-moz-keyframes ball-climbing-dot-jump {
     0% {
         -moz-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
     20% {
         -moz-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     40% {
         -moz-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     50% {
         bottom: 125%
     }
     46% {
         -moz-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     80% {
         -moz-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     90% {
         -moz-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     100% {
         -moz-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
 }
 
 @-o-keyframes ball-climbing-dot-jump {
     0% {
         -o-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
     20% {
         -o-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     40% {
         -o-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     50% {
         bottom: 125%
     }
     46% {
         -o-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     80% {
         -o-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     90% {
         -o-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     100% {
         -o-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
 }
 
 @keyframes ball-climbing-dot-jump {
     0% {
         -webkit-transform: scale(1, 0.7);
         -moz-transform: scale(1, 0.7);
         -o-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
     20% {
         -webkit-transform: scale(0.7, 1.2);
         -moz-transform: scale(0.7, 1.2);
         -o-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     40% {
         -webkit-transform: scale(1, 1);
         -moz-transform: scale(1, 1);
         -o-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     50% {
         bottom: 125%
     }
     46% {
         -webkit-transform: scale(1, 1);
         -moz-transform: scale(1, 1);
         -o-transform: scale(1, 1);
         transform: scale(1, 1)
     }
     80% {
         -webkit-transform: scale(0.7, 1.2);
         -moz-transform: scale(0.7, 1.2);
         -o-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     90% {
         -webkit-transform: scale(0.7, 1.2);
         -moz-transform: scale(0.7, 1.2);
         -o-transform: scale(0.7, 1.2);
         transform: scale(0.7, 1.2)
     }
     100% {
         -webkit-transform: scale(1, 0.7);
         -moz-transform: scale(1, 0.7);
         -o-transform: scale(1, 0.7);
         transform: scale(1, 0.7)
     }
 }
 
 @-webkit-keyframes ball-climbing-dot-steps {
     0% {
         top: 0;
         right: 0;
         opacity: 0
     }
     50% {
         opacity: 1
     }
     100% {
         top: 100%;
         right: 100%;
         opacity: 0
     }
 }
 
 @-moz-keyframes ball-climbing-dot-steps {
     0% {
         top: 0;
         right: 0;
         opacity: 0
     }
     50% {
         opacity: 1
     }
     100% {
         top: 100%;
         right: 100%;
         opacity: 0
     }
 }
 
 @-o-keyframes ball-climbing-dot-steps {
     0% {
         top: 0;
         right: 0;
         opacity: 0
     }
     50% {
         opacity: 1
     }
     100% {
         top: 100%;
         right: 100%;
         opacity: 0
     }
 }
 
 @keyframes ball-climbing-dot-steps {
     0% {
         top: 0;
         right: 0;
         opacity: 0
     }
     50% {
         opacity: 1
     }
     100% {
         top: 100%;
         right: 100%;
         opacity: 0
     }
 }
 
 .la-ball-clip-rotate-multiple,
 .la-ball-clip-rotate-multiple>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-clip-rotate-multiple {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-clip-rotate-multiple.la-dark {
     color: #333
 }
 
 .la-ball-clip-rotate-multiple>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-clip-rotate-multiple {
     width: 32px;
     height: 32px
 }
 
 .la-ball-clip-rotate-multiple>div {
     position: absolute;
     top: 50%;
     left: 50%;
     background: transparent;
     border-style: solid;
     border-width: 2px;
     border-radius: 100%;
     -webkit-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
     -moz-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
     -o-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
     animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite
 }
 
 .la-ball-clip-rotate-multiple>div:first-child {
     position: absolute;
     width: 32px;
     height: 32px;
     border-right-color: transparent;
     border-left-color: transparent
 }
 
 .la-ball-clip-rotate-multiple>div:last-child {
     width: 16px;
     height: 16px;
     border-top-color: transparent;
     border-bottom-color: transparent;
     -webkit-animation-duration: .5s;
     -moz-animation-duration: .5s;
     -o-animation-duration: .5s;
     animation-duration: .5s;
     -webkit-animation-direction: reverse;
     -moz-animation-direction: reverse;
     -o-animation-direction: reverse;
     animation-direction: reverse
 }
 
 .la-ball-clip-rotate-multiple.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-clip-rotate-multiple.la-sm>div {
     border-width: 1px
 }
 
 .la-ball-clip-rotate-multiple.la-sm>div:first-child {
     width: 16px;
     height: 16px
 }
 
 .la-ball-clip-rotate-multiple.la-sm>div:last-child {
     width: 8px;
     height: 8px
 }
 
 .la-ball-clip-rotate-multiple.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-clip-rotate-multiple.la-2x>div {
     border-width: 4px
 }
 
 .la-ball-clip-rotate-multiple.la-2x>div:first-child {
     width: 64px;
     height: 64px
 }
 
 .la-ball-clip-rotate-multiple.la-2x>div:last-child {
     width: 32px;
     height: 32px
 }
 
 .la-ball-clip-rotate-multiple.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-clip-rotate-multiple.la-3x>div {
     border-width: 6px
 }
 
 .la-ball-clip-rotate-multiple.la-3x>div:first-child {
     width: 96px;
     height: 96px
 }
 
 .la-ball-clip-rotate-multiple.la-3x>div:last-child {
     width: 48px;
     height: 48px
 }
 
 @-webkit-keyframes ball-clip-rotate-multiple-rotate {
     0% {
         -webkit-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -webkit-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -webkit-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 @-moz-keyframes ball-clip-rotate-multiple-rotate {
     0% {
         -moz-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -moz-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -moz-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 @-o-keyframes ball-clip-rotate-multiple-rotate {
     0% {
         -o-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -o-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -o-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 @keyframes ball-clip-rotate-multiple-rotate {
     0% {
         -webkit-transform: translate(-50%, -50%) rotate(0deg);
         -moz-transform: translate(-50%, -50%) rotate(0deg);
         -o-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -webkit-transform: translate(-50%, -50%) rotate(180deg);
         -moz-transform: translate(-50%, -50%) rotate(180deg);
         -o-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -webkit-transform: translate(-50%, -50%) rotate(360deg);
         -moz-transform: translate(-50%, -50%) rotate(360deg);
         -o-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 .la-ball-clip-rotate-pulse,
 .la-ball-clip-rotate-pulse>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-clip-rotate-pulse {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-clip-rotate-pulse.la-dark {
     color: #333
 }
 
 .la-ball-clip-rotate-pulse>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-clip-rotate-pulse {
     width: 32px;
     height: 32px
 }
 
 .la-ball-clip-rotate-pulse>div {
     position: absolute;
     top: 50%;
     left: 50%;
     border-radius: 100%
 }
 
 .la-ball-clip-rotate-pulse>div:first-child {
     position: absolute;
     width: 32px;
     height: 32px;
     background: transparent;
     border-style: solid;
     border-width: 2px;
     border-right-color: transparent;
     border-left-color: transparent;
     -webkit-animation: ball-clip-rotate-pulse-rotate 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -moz-animation: ball-clip-rotate-pulse-rotate 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -o-animation: ball-clip-rotate-pulse-rotate 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     animation: ball-clip-rotate-pulse-rotate 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite
 }
 
 .la-ball-clip-rotate-pulse>div:last-child {
     width: 16px;
     height: 16px;
     -webkit-animation: ball-clip-rotate-pulse-scale 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -moz-animation: ball-clip-rotate-pulse-scale 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -o-animation: ball-clip-rotate-pulse-scale 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     animation: ball-clip-rotate-pulse-scale 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite
 }
 
 .la-ball-clip-rotate-pulse.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-clip-rotate-pulse.la-sm>div:first-child {
     width: 16px;
     height: 16px;
     border-width: 1px
 }
 
 .la-ball-clip-rotate-pulse.la-sm>div:last-child {
     width: 8px;
     height: 8px
 }
 
 .la-ball-clip-rotate-pulse.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-clip-rotate-pulse.la-2x>div:first-child {
     width: 64px;
     height: 64px;
     border-width: 4px
 }
 
 .la-ball-clip-rotate-pulse.la-2x>div:last-child {
     width: 32px;
     height: 32px
 }
 
 .la-ball-clip-rotate-pulse.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-clip-rotate-pulse.la-3x>div:first-child {
     width: 96px;
     height: 96px;
     border-width: 6px
 }
 
 .la-ball-clip-rotate-pulse.la-3x>div:last-child {
     width: 48px;
     height: 48px
 }
 
 @-webkit-keyframes ball-clip-rotate-pulse-rotate {
     0% {
         -webkit-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -webkit-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -webkit-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 @-moz-keyframes ball-clip-rotate-pulse-rotate {
     0% {
         -moz-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -moz-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -moz-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 @-o-keyframes ball-clip-rotate-pulse-rotate {
     0% {
         -o-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -o-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -o-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 @keyframes ball-clip-rotate-pulse-rotate {
     0% {
         -webkit-transform: translate(-50%, -50%) rotate(0deg);
         -moz-transform: translate(-50%, -50%) rotate(0deg);
         -o-transform: translate(-50%, -50%) rotate(0deg);
         transform: translate(-50%, -50%) rotate(0deg)
     }
     50% {
         -webkit-transform: translate(-50%, -50%) rotate(180deg);
         -moz-transform: translate(-50%, -50%) rotate(180deg);
         -o-transform: translate(-50%, -50%) rotate(180deg);
         transform: translate(-50%, -50%) rotate(180deg)
     }
     100% {
         -webkit-transform: translate(-50%, -50%) rotate(360deg);
         -moz-transform: translate(-50%, -50%) rotate(360deg);
         -o-transform: translate(-50%, -50%) rotate(360deg);
         transform: translate(-50%, -50%) rotate(360deg)
     }
 }
 
 @-webkit-keyframes ball-clip-rotate-pulse-scale {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: translate(-50%, -50%) scale(1);
         transform: translate(-50%, -50%) scale(1)
     }
     30% {
         opacity: .3;
         -webkit-transform: translate(-50%, -50%) scale(0.15);
         transform: translate(-50%, -50%) scale(0.15)
     }
 }
 
 @-moz-keyframes ball-clip-rotate-pulse-scale {
     0%,
     100% {
         opacity: 1;
         -moz-transform: translate(-50%, -50%) scale(1);
         transform: translate(-50%, -50%) scale(1)
     }
     30% {
         opacity: .3;
         -moz-transform: translate(-50%, -50%) scale(0.15);
         transform: translate(-50%, -50%) scale(0.15)
     }
 }
 
 @-o-keyframes ball-clip-rotate-pulse-scale {
     0%,
     100% {
         opacity: 1;
         -o-transform: translate(-50%, -50%) scale(1);
         transform: translate(-50%, -50%) scale(1)
     }
     30% {
         opacity: .3;
         -o-transform: translate(-50%, -50%) scale(0.15);
         transform: translate(-50%, -50%) scale(0.15)
     }
 }
 
 @keyframes ball-clip-rotate-pulse-scale {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: translate(-50%, -50%) scale(1);
         -moz-transform: translate(-50%, -50%) scale(1);
         -o-transform: translate(-50%, -50%) scale(1);
         transform: translate(-50%, -50%) scale(1)
     }
     30% {
         opacity: .3;
         -webkit-transform: translate(-50%, -50%) scale(0.15);
         -moz-transform: translate(-50%, -50%) scale(0.15);
         -o-transform: translate(-50%, -50%) scale(0.15);
         transform: translate(-50%, -50%) scale(0.15)
     }
 }
 
 .la-ball-clip-rotate,
 .la-ball-clip-rotate>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-clip-rotate {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-clip-rotate.la-dark {
     color: #333
 }
 
 .la-ball-clip-rotate>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-clip-rotate {
     width: 32px;
     height: 32px
 }
 
 .la-ball-clip-rotate>div {
     width: 32px;
     height: 32px;
     background: transparent;
     border-width: 2px;
     border-bottom-color: transparent;
     border-radius: 100%;
     -webkit-animation: ball-clip-rotate 0.75s linear infinite;
     -moz-animation: ball-clip-rotate 0.75s linear infinite;
     -o-animation: ball-clip-rotate 0.75s linear infinite;
     animation: ball-clip-rotate 0.75s linear infinite
 }
 
 .la-ball-clip-rotate.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-clip-rotate.la-sm>div {
     width: 16px;
     height: 16px;
     border-width: 1px
 }
 
 .la-ball-clip-rotate.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-clip-rotate.la-2x>div {
     width: 64px;
     height: 64px;
     border-width: 4px
 }
 
 .la-ball-clip-rotate.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-clip-rotate.la-3x>div {
     width: 96px;
     height: 96px;
     border-width: 6px
 }
 
 @-webkit-keyframes ball-clip-rotate {
     0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -webkit-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes ball-clip-rotate {
     0% {
         -moz-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -moz-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes ball-clip-rotate {
     0% {
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes ball-clip-rotate {
     0% {
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -webkit-transform: rotate(180deg);
         -moz-transform: rotate(180deg);
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 .la-ball-elastic-dots,
 .la-ball-elastic-dots>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-elastic-dots {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-elastic-dots.la-dark {
     color: #333
 }
 
 .la-ball-elastic-dots>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-elastic-dots {
     width: 120px;
     height: 10px;
     font-size: 0;
     text-align: center
 }
 
 .la-ball-elastic-dots>div {
     display: inline-block;
     width: 10px;
     height: 10px;
     white-space: nowrap;
     border-radius: 100%;
     -webkit-animation: ball-elastic-dots-anim 1s infinite;
     -moz-animation: ball-elastic-dots-anim 1s infinite;
     -o-animation: ball-elastic-dots-anim 1s infinite;
     animation: ball-elastic-dots-anim 1s infinite
 }
 
 .la-ball-elastic-dots.la-sm {
     width: 60px;
     height: 4px
 }
 
 .la-ball-elastic-dots.la-sm>div {
     width: 4px;
     height: 4px
 }
 
 .la-ball-elastic-dots.la-2x {
     width: 240px;
     height: 20px
 }
 
 .la-ball-elastic-dots.la-2x>div {
     width: 20px;
     height: 20px
 }
 
 .la-ball-elastic-dots.la-3x {
     width: 360px;
     height: 30px
 }
 
 .la-ball-elastic-dots.la-3x>div {
     width: 30px;
     height: 30px
 }
 
 @-webkit-keyframes ball-elastic-dots-anim {
     0%,
     100% {
         margin: 0;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     50% {
         margin: 0 5%;
         -webkit-transform: scale(0.65);
         transform: scale(0.65)
     }
 }
 
 @-moz-keyframes ball-elastic-dots-anim {
     0%,
     100% {
         margin: 0;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     50% {
         margin: 0 5%;
         -moz-transform: scale(0.65);
         transform: scale(0.65)
     }
 }
 
 @-o-keyframes ball-elastic-dots-anim {
     0%,
     100% {
         margin: 0;
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         margin: 0 5%;
         -o-transform: scale(0.65);
         transform: scale(0.65)
     }
 }
 
 @keyframes ball-elastic-dots-anim {
     0%,
     100% {
         margin: 0;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         margin: 0 5%;
         -webkit-transform: scale(0.65);
         -moz-transform: scale(0.65);
         -o-transform: scale(0.65);
         transform: scale(0.65)
     }
 }
 
 .la-ball-fall,
 .la-ball-fall>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-fall {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-fall.la-dark {
     color: #333
 }
 
 .la-ball-fall>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-fall {
     width: 54px;
     height: 18px
 }
 
 .la-ball-fall>div {
     width: 10px;
     height: 10px;
     margin: 4px;
     border-radius: 100%;
     opacity: 0;
     -webkit-animation: ball-fall 1s ease-in-out infinite;
     -moz-animation: ball-fall 1s ease-in-out infinite;
     -o-animation: ball-fall 1s ease-in-out infinite;
     animation: ball-fall 1s ease-in-out infinite
 }
 
 .la-ball-fall>div:nth-child(1) {
     -webkit-animation-delay: -200ms;
     -moz-animation-delay: -200ms;
     -o-animation-delay: -200ms;
     animation-delay: -200ms
 }
 
 .la-ball-fall>div:nth-child(2) {
     -webkit-animation-delay: -100ms;
     -moz-animation-delay: -100ms;
     -o-animation-delay: -100ms;
     animation-delay: -100ms
 }
 
 .la-ball-fall>div:nth-child(3) {
     -webkit-animation-delay: 0ms;
     -moz-animation-delay: 0ms;
     -o-animation-delay: 0ms;
     animation-delay: 0ms
 }
 
 .la-ball-fall.la-sm {
     width: 26px;
     height: 8px
 }
 
 .la-ball-fall.la-sm>div {
     width: 4px;
     height: 4px;
     margin: 2px
 }
 
 .la-ball-fall.la-2x {
     width: 108px;
     height: 36px
 }
 
 .la-ball-fall.la-2x>div {
     width: 20px;
     height: 20px;
     margin: 8px
 }
 
 .la-ball-fall.la-3x {
     width: 162px;
     height: 54px
 }
 
 .la-ball-fall.la-3x>div {
     width: 30px;
     height: 30px;
     margin: 12px
 }
 
 @-webkit-keyframes ball-fall {
     0% {
         opacity: 0;
         -webkit-transform: translateY(-145%);
         transform: translateY(-145%)
     }
     10% {
         opacity: .5
     }
     20% {
         opacity: 1;
         -webkit-transform: translateY(0);
         transform: translateY(0)
     }
     80% {
         opacity: 1;
         -webkit-transform: translateY(0);
         transform: translateY(0)
     }
     90% {
         opacity: .5
     }
     100% {
         opacity: 0;
         -webkit-transform: translateY(145%);
         transform: translateY(145%)
     }
 }
 
 @-moz-keyframes ball-fall {
     0% {
         opacity: 0;
         -moz-transform: translateY(-145%);
         transform: translateY(-145%)
     }
     10% {
         opacity: .5
     }
     20% {
         opacity: 1;
         -moz-transform: translateY(0);
         transform: translateY(0)
     }
     80% {
         opacity: 1;
         -moz-transform: translateY(0);
         transform: translateY(0)
     }
     90% {
         opacity: .5
     }
     100% {
         opacity: 0;
         -moz-transform: translateY(145%);
         transform: translateY(145%)
     }
 }
 
 @-o-keyframes ball-fall {
     0% {
         opacity: 0;
         -o-transform: translateY(-145%);
         transform: translateY(-145%)
     }
     10% {
         opacity: .5
     }
     20% {
         opacity: 1;
         -o-transform: translateY(0);
         transform: translateY(0)
     }
     80% {
         opacity: 1;
         -o-transform: translateY(0);
         transform: translateY(0)
     }
     90% {
         opacity: .5
     }
     100% {
         opacity: 0;
         -o-transform: translateY(145%);
         transform: translateY(145%)
     }
 }
 
 @keyframes ball-fall {
     0% {
         opacity: 0;
         -webkit-transform: translateY(-145%);
         -moz-transform: translateY(-145%);
         -o-transform: translateY(-145%);
         transform: translateY(-145%)
     }
     10% {
         opacity: .5
     }
     20% {
         opacity: 1;
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -o-transform: translateY(0);
         transform: translateY(0)
     }
     80% {
         opacity: 1;
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -o-transform: translateY(0);
         transform: translateY(0)
     }
     90% {
         opacity: .5
     }
     100% {
         opacity: 0;
         -webkit-transform: translateY(145%);
         -moz-transform: translateY(145%);
         -o-transform: translateY(145%);
         transform: translateY(145%)
     }
 }
 
 .la-ball-fussion,
 .la-ball-fussion>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-fussion {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-fussion.la-dark {
     color: #333
 }
 
 .la-ball-fussion>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-fussion {
     width: 8px;
     height: 8px
 }
 
 .la-ball-fussion>div {
     position: absolute;
     width: 12px;
     height: 12px;
     border-radius: 100%;
     -webkit-transform: translate(-50%, -50%);
     -moz-transform: translate(-50%, -50%);
     -ms-transform: translate(-50%, -50%);
     -o-transform: translate(-50%, -50%);
     transform: translate(-50%, -50%);
     -webkit-animation: ball-fussion-ball1 1s 0s ease infinite;
     -moz-animation: ball-fussion-ball1 1s 0s ease infinite;
     -o-animation: ball-fussion-ball1 1s 0s ease infinite;
     animation: ball-fussion-ball1 1s 0s ease infinite
 }
 
 .la-ball-fussion>div:nth-child(1) {
     top: 0;
     left: 50%;
     z-index: 1
 }
 
 .la-ball-fussion>div:nth-child(2) {
     top: 50%;
     left: 100%;
     z-index: 2;
     -webkit-animation-name: ball-fussion-ball2;
     -moz-animation-name: ball-fussion-ball2;
     -o-animation-name: ball-fussion-ball2;
     animation-name: ball-fussion-ball2
 }
 
 .la-ball-fussion>div:nth-child(3) {
     top: 100%;
     left: 50%;
     z-index: 1;
     -webkit-animation-name: ball-fussion-ball3;
     -moz-animation-name: ball-fussion-ball3;
     -o-animation-name: ball-fussion-ball3;
     animation-name: ball-fussion-ball3
 }
 
 .la-ball-fussion>div:nth-child(4) {
     top: 50%;
     left: 0;
     z-index: 2;
     -webkit-animation-name: ball-fussion-ball4;
     -moz-animation-name: ball-fussion-ball4;
     -o-animation-name: ball-fussion-ball4;
     animation-name: ball-fussion-ball4
 }
 
 .la-ball-fussion.la-sm {
     width: 4px;
     height: 4px
 }
 
 .la-ball-fussion.la-sm>div {
     width: 6px;
     height: 6px
 }
 
 .la-ball-fussion.la-2x {
     width: 16px;
     height: 16px
 }
 
 .la-ball-fussion.la-2x>div {
     width: 24px;
     height: 24px
 }
 
 .la-ball-fussion.la-3x {
     width: 24px;
     height: 24px
 }
 
 .la-ball-fussion.la-3x>div {
     width: 36px;
     height: 36px
 }
 
 @-webkit-keyframes ball-fussion-ball1 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 100%;
         z-index: 2;
         opacity: .35
     }
 }
 
 @-moz-keyframes ball-fussion-ball1 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 100%;
         z-index: 2;
         opacity: .35
     }
 }
 
 @-o-keyframes ball-fussion-ball1 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 100%;
         z-index: 2;
         opacity: .35
     }
 }
 
 @keyframes ball-fussion-ball1 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 100%;
         z-index: 2;
         opacity: .35
     }
 }
 
 @-webkit-keyframes ball-fussion-ball2 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 100%;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 @-moz-keyframes ball-fussion-ball2 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 100%;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 @-o-keyframes ball-fussion-ball2 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 100%;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 @keyframes ball-fussion-ball2 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: 200%;
         opacity: 1
     }
     100% {
         top: 100%;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 @-webkit-keyframes ball-fussion-ball3 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 0;
         z-index: 2;
         opacity: .35
     }
 }
 
 @-moz-keyframes ball-fussion-ball3 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 0;
         z-index: 2;
         opacity: .35
     }
 }
 
 @-o-keyframes ball-fussion-ball3 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 0;
         z-index: 2;
         opacity: .35
     }
 }
 
 @keyframes ball-fussion-ball3 {
     0% {
         opacity: .35
     }
     50% {
         top: 200%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 50%;
         left: 0;
         z-index: 2;
         opacity: .35
     }
 }
 
 @-webkit-keyframes ball-fussion-ball4 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 0;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 @-moz-keyframes ball-fussion-ball4 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 0;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 @-o-keyframes ball-fussion-ball4 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 0;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 @keyframes ball-fussion-ball4 {
     0% {
         opacity: .35
     }
     50% {
         top: -100%;
         left: -100%;
         opacity: 1
     }
     100% {
         top: 0;
         left: 50%;
         z-index: 1;
         opacity: .35
     }
 }
 
 .la-ball-grid-beat,
 .la-ball-grid-beat>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-grid-beat {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-grid-beat.la-dark {
     color: #333
 }
 
 .la-ball-grid-beat>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-grid-beat {
     width: 36px;
     height: 36px
 }
 
 .la-ball-grid-beat>div {
     width: 8px;
     height: 8px;
     margin: 2px;
     border-radius: 100%;
     -webkit-animation-name: ball-grid-beat;
     -moz-animation-name: ball-grid-beat;
     -o-animation-name: ball-grid-beat;
     animation-name: ball-grid-beat;
     -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
     -o-animation-iteration-count: infinite;
     animation-iteration-count: infinite
 }
 
 .la-ball-grid-beat>div:nth-child(1) {
     -webkit-animation-duration: .65s;
     -moz-animation-duration: .65s;
     -o-animation-duration: .65s;
     animation-duration: .65s;
     -webkit-animation-delay: .03s;
     -moz-animation-delay: .03s;
     -o-animation-delay: .03s;
     animation-delay: .03s
 }
 
 .la-ball-grid-beat>div:nth-child(2) {
     -webkit-animation-duration: 1.02s;
     -moz-animation-duration: 1.02s;
     -o-animation-duration: 1.02s;
     animation-duration: 1.02s;
     -webkit-animation-delay: .09s;
     -moz-animation-delay: .09s;
     -o-animation-delay: .09s;
     animation-delay: .09s
 }
 
 .la-ball-grid-beat>div:nth-child(3) {
     -webkit-animation-duration: 1.06s;
     -moz-animation-duration: 1.06s;
     -o-animation-duration: 1.06s;
     animation-duration: 1.06s;
     -webkit-animation-delay: -.69s;
     -moz-animation-delay: -.69s;
     -o-animation-delay: -.69s;
     animation-delay: -.69s
 }
 
 .la-ball-grid-beat>div:nth-child(4) {
     -webkit-animation-duration: 1.5s;
     -moz-animation-duration: 1.5s;
     -o-animation-duration: 1.5s;
     animation-duration: 1.5s;
     -webkit-animation-delay: -.41s;
     -moz-animation-delay: -.41s;
     -o-animation-delay: -.41s;
     animation-delay: -.41s
 }
 
 .la-ball-grid-beat>div:nth-child(5) {
     -webkit-animation-duration: 1.6s;
     -moz-animation-duration: 1.6s;
     -o-animation-duration: 1.6s;
     animation-duration: 1.6s;
     -webkit-animation-delay: .04s;
     -moz-animation-delay: .04s;
     -o-animation-delay: .04s;
     animation-delay: .04s
 }
 
 .la-ball-grid-beat>div:nth-child(6) {
     -webkit-animation-duration: .84s;
     -moz-animation-duration: .84s;
     -o-animation-duration: .84s;
     animation-duration: .84s;
     -webkit-animation-delay: .07s;
     -moz-animation-delay: .07s;
     -o-animation-delay: .07s;
     animation-delay: .07s
 }
 
 .la-ball-grid-beat>div:nth-child(7) {
     -webkit-animation-duration: .68s;
     -moz-animation-duration: .68s;
     -o-animation-duration: .68s;
     animation-duration: .68s;
     -webkit-animation-delay: -.66s;
     -moz-animation-delay: -.66s;
     -o-animation-delay: -.66s;
     animation-delay: -.66s
 }
 
 .la-ball-grid-beat>div:nth-child(8) {
     -webkit-animation-duration: .93s;
     -moz-animation-duration: .93s;
     -o-animation-duration: .93s;
     animation-duration: .93s;
     -webkit-animation-delay: -.76s;
     -moz-animation-delay: -.76s;
     -o-animation-delay: -.76s;
     animation-delay: -.76s
 }
 
 .la-ball-grid-beat>div:nth-child(9) {
     -webkit-animation-duration: 1.24s;
     -moz-animation-duration: 1.24s;
     -o-animation-duration: 1.24s;
     animation-duration: 1.24s;
     -webkit-animation-delay: -.76s;
     -moz-animation-delay: -.76s;
     -o-animation-delay: -.76s;
     animation-delay: -.76s
 }
 
 .la-ball-grid-beat.la-sm {
     width: 18px;
     height: 18px
 }
 
 .la-ball-grid-beat.la-sm>div {
     width: 4px;
     height: 4px;
     margin: 1px
 }
 
 .la-ball-grid-beat.la-2x {
     width: 72px;
     height: 72px
 }
 
 .la-ball-grid-beat.la-2x>div {
     width: 16px;
     height: 16px;
     margin: 4px
 }
 
 .la-ball-grid-beat.la-3x {
     width: 108px;
     height: 108px
 }
 
 .la-ball-grid-beat.la-3x>div {
     width: 24px;
     height: 24px;
     margin: 6px
 }
 
 @-webkit-keyframes ball-grid-beat {
     0% {
         opacity: 1
     }
     50% {
         opacity: .35
     }
     100% {
         opacity: 1
     }
 }
 
 @-moz-keyframes ball-grid-beat {
     0% {
         opacity: 1
     }
     50% {
         opacity: .35
     }
     100% {
         opacity: 1
     }
 }
 
 @-o-keyframes ball-grid-beat {
     0% {
         opacity: 1
     }
     50% {
         opacity: .35
     }
     100% {
         opacity: 1
     }
 }
 
 @keyframes ball-grid-beat {
     0% {
         opacity: 1
     }
     50% {
         opacity: .35
     }
     100% {
         opacity: 1
     }
 }
 
 .la-ball-grid-pulse,
 .la-ball-grid-pulse>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-grid-pulse {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-grid-pulse.la-dark {
     color: #333
 }
 
 .la-ball-grid-pulse>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-grid-pulse {
     width: 36px;
     height: 36px
 }
 
 .la-ball-grid-pulse>div {
     width: 8px;
     height: 8px;
     margin: 2px;
     border-radius: 100%;
     -webkit-animation-name: ball-grid-pulse;
     -moz-animation-name: ball-grid-pulse;
     -o-animation-name: ball-grid-pulse;
     animation-name: ball-grid-pulse;
     -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
     -o-animation-iteration-count: infinite;
     animation-iteration-count: infinite
 }
 
 .la-ball-grid-pulse>div:nth-child(1) {
     -webkit-animation-duration: .65s;
     -moz-animation-duration: .65s;
     -o-animation-duration: .65s;
     animation-duration: .65s;
     -webkit-animation-delay: .03s;
     -moz-animation-delay: .03s;
     -o-animation-delay: .03s;
     animation-delay: .03s
 }
 
 .la-ball-grid-pulse>div:nth-child(2) {
     -webkit-animation-duration: 1.02s;
     -moz-animation-duration: 1.02s;
     -o-animation-duration: 1.02s;
     animation-duration: 1.02s;
     -webkit-animation-delay: .09s;
     -moz-animation-delay: .09s;
     -o-animation-delay: .09s;
     animation-delay: .09s
 }
 
 .la-ball-grid-pulse>div:nth-child(3) {
     -webkit-animation-duration: 1.06s;
     -moz-animation-duration: 1.06s;
     -o-animation-duration: 1.06s;
     animation-duration: 1.06s;
     -webkit-animation-delay: -.69s;
     -moz-animation-delay: -.69s;
     -o-animation-delay: -.69s;
     animation-delay: -.69s
 }
 
 .la-ball-grid-pulse>div:nth-child(4) {
     -webkit-animation-duration: 1.5s;
     -moz-animation-duration: 1.5s;
     -o-animation-duration: 1.5s;
     animation-duration: 1.5s;
     -webkit-animation-delay: -.41s;
     -moz-animation-delay: -.41s;
     -o-animation-delay: -.41s;
     animation-delay: -.41s
 }
 
 .la-ball-grid-pulse>div:nth-child(5) {
     -webkit-animation-duration: 1.6s;
     -moz-animation-duration: 1.6s;
     -o-animation-duration: 1.6s;
     animation-duration: 1.6s;
     -webkit-animation-delay: .04s;
     -moz-animation-delay: .04s;
     -o-animation-delay: .04s;
     animation-delay: .04s
 }
 
 .la-ball-grid-pulse>div:nth-child(6) {
     -webkit-animation-duration: .84s;
     -moz-animation-duration: .84s;
     -o-animation-duration: .84s;
     animation-duration: .84s;
     -webkit-animation-delay: .07s;
     -moz-animation-delay: .07s;
     -o-animation-delay: .07s;
     animation-delay: .07s
 }
 
 .la-ball-grid-pulse>div:nth-child(7) {
     -webkit-animation-duration: .68s;
     -moz-animation-duration: .68s;
     -o-animation-duration: .68s;
     animation-duration: .68s;
     -webkit-animation-delay: -.66s;
     -moz-animation-delay: -.66s;
     -o-animation-delay: -.66s;
     animation-delay: -.66s
 }
 
 .la-ball-grid-pulse>div:nth-child(8) {
     -webkit-animation-duration: .93s;
     -moz-animation-duration: .93s;
     -o-animation-duration: .93s;
     animation-duration: .93s;
     -webkit-animation-delay: -.76s;
     -moz-animation-delay: -.76s;
     -o-animation-delay: -.76s;
     animation-delay: -.76s
 }
 
 .la-ball-grid-pulse>div:nth-child(9) {
     -webkit-animation-duration: 1.24s;
     -moz-animation-duration: 1.24s;
     -o-animation-duration: 1.24s;
     animation-duration: 1.24s;
     -webkit-animation-delay: -.76s;
     -moz-animation-delay: -.76s;
     -o-animation-delay: -.76s;
     animation-delay: -.76s
 }
 
 .la-ball-grid-pulse.la-sm {
     width: 18px;
     height: 18px
 }
 
 .la-ball-grid-pulse.la-sm>div {
     width: 4px;
     height: 4px;
     margin: 1px
 }
 
 .la-ball-grid-pulse.la-2x {
     width: 72px;
     height: 72px
 }
 
 .la-ball-grid-pulse.la-2x>div {
     width: 16px;
     height: 16px;
     margin: 4px
 }
 
 .la-ball-grid-pulse.la-3x {
     width: 108px;
     height: 108px
 }
 
 .la-ball-grid-pulse.la-3x>div {
     width: 24px;
     height: 24px;
     margin: 6px
 }
 
 @-webkit-keyframes ball-grid-pulse {
     0% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .35;
         -webkit-transform: scale(0.45);
         transform: scale(0.45)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-grid-pulse {
     0% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .35;
         -moz-transform: scale(0.45);
         transform: scale(0.45)
     }
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-grid-pulse {
     0% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .35;
         -o-transform: scale(0.45);
         transform: scale(0.45)
     }
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-grid-pulse {
     0% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .35;
         -webkit-transform: scale(0.45);
         -moz-transform: scale(0.45);
         -o-transform: scale(0.45);
         transform: scale(0.45)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-newton-cradle,
 .la-ball-newton-cradle>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-newton-cradle {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-newton-cradle.la-dark {
     color: #333
 }
 
 .la-ball-newton-cradle>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-newton-cradle {
     width: 40px;
     height: 10px
 }
 
 .la-ball-newton-cradle>div {
     width: 10px;
     height: 10px;
     border-radius: 100%
 }
 
 .la-ball-newton-cradle>div:first-child {
     -webkit-transform: translateX(0%);
     -moz-transform: translateX(0%);
     -ms-transform: translateX(0%);
     -o-transform: translateX(0%);
     transform: translateX(0%);
     -webkit-animation: ball-newton-cradle-left 1s 0s ease-out infinite;
     -moz-animation: ball-newton-cradle-left 1s 0s ease-out infinite;
     -o-animation: ball-newton-cradle-left 1s 0s ease-out infinite;
     animation: ball-newton-cradle-left 1s 0s ease-out infinite
 }
 
 .la-ball-newton-cradle>div:last-child {
     -webkit-transform: translateX(0%);
     -moz-transform: translateX(0%);
     -ms-transform: translateX(0%);
     -o-transform: translateX(0%);
     transform: translateX(0%);
     -webkit-animation: ball-newton-cradle-right 1s 0s ease-out infinite;
     -moz-animation: ball-newton-cradle-right 1s 0s ease-out infinite;
     -o-animation: ball-newton-cradle-right 1s 0s ease-out infinite;
     animation: ball-newton-cradle-right 1s 0s ease-out infinite
 }
 
 .la-ball-newton-cradle.la-sm {
     width: 20px;
     height: 4px
 }
 
 .la-ball-newton-cradle.la-sm>div {
     width: 4px;
     height: 4px
 }
 
 .la-ball-newton-cradle.la-2x {
     width: 80px;
     height: 20px
 }
 
 .la-ball-newton-cradle.la-2x>div {
     width: 20px;
     height: 20px
 }
 
 .la-ball-newton-cradle.la-3x {
     width: 120px;
     height: 30px
 }
 
 .la-ball-newton-cradle.la-3x>div {
     width: 30px;
     height: 30px
 }
 
 @-webkit-keyframes ball-newton-cradle-left {
     25% {
         -webkit-transform: translateX(-100%);
         transform: translateX(-100%);
         -webkit-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     50% {
         -webkit-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 @-moz-keyframes ball-newton-cradle-left {
     25% {
         -moz-transform: translateX(-100%);
         transform: translateX(-100%);
         -moz-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     50% {
         -moz-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 @-o-keyframes ball-newton-cradle-left {
     25% {
         -o-transform: translateX(-100%);
         transform: translateX(-100%);
         -o-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     50% {
         -o-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 @keyframes ball-newton-cradle-left {
     25% {
         -webkit-transform: translateX(-100%);
         -moz-transform: translateX(-100%);
         -o-transform: translateX(-100%);
         transform: translateX(-100%);
         -webkit-animation-timing-function: ease-in;
         -moz-animation-timing-function: ease-in;
         -o-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     50% {
         -webkit-transform: translateX(0%);
         -moz-transform: translateX(0%);
         -o-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 @-webkit-keyframes ball-newton-cradle-right {
     50% {
         -webkit-transform: translateX(0%);
         transform: translateX(0%)
     }
     75% {
         -webkit-transform: translateX(100%);
         transform: translateX(100%);
         -webkit-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     100% {
         -webkit-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 @-moz-keyframes ball-newton-cradle-right {
     50% {
         -moz-transform: translateX(0%);
         transform: translateX(0%)
     }
     75% {
         -moz-transform: translateX(100%);
         transform: translateX(100%);
         -moz-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     100% {
         -moz-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 @-o-keyframes ball-newton-cradle-right {
     50% {
         -o-transform: translateX(0%);
         transform: translateX(0%)
     }
     75% {
         -o-transform: translateX(100%);
         transform: translateX(100%);
         -o-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     100% {
         -o-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 @keyframes ball-newton-cradle-right {
     50% {
         -webkit-transform: translateX(0%);
         -moz-transform: translateX(0%);
         -o-transform: translateX(0%);
         transform: translateX(0%)
     }
     75% {
         -webkit-transform: translateX(100%);
         -moz-transform: translateX(100%);
         -o-transform: translateX(100%);
         transform: translateX(100%);
         -webkit-animation-timing-function: ease-in;
         -moz-animation-timing-function: ease-in;
         -o-animation-timing-function: ease-in;
         animation-timing-function: ease-in
     }
     100% {
         -webkit-transform: translateX(0%);
         -moz-transform: translateX(0%);
         -o-transform: translateX(0%);
         transform: translateX(0%)
     }
 }
 
 .la-ball-pulse-rise,
 .la-ball-pulse-rise>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-pulse-rise {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-pulse-rise.la-dark {
     color: #333
 }
 
 .la-ball-pulse-rise>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-pulse-rise {
     width: 70px;
     height: 14px
 }
 
 .la-ball-pulse-rise>div {
     width: 10px;
     height: 10px;
     margin: 2px;
     border-radius: 100%;
     -webkit-animation: ball-pulse-rise-even 1s cubic-bezier(0.15, 0.36, 0.9, 0.6) 0s infinite;
     -moz-animation: ball-pulse-rise-even 1s cubic-bezier(0.15, 0.36, 0.9, 0.6) 0s infinite;
     -o-animation: ball-pulse-rise-even 1s cubic-bezier(0.15, 0.36, 0.9, 0.6) 0s infinite;
     animation: ball-pulse-rise-even 1s cubic-bezier(0.15, 0.36, 0.9, 0.6) 0s infinite
 }
 
 .la-ball-pulse-rise>div:nth-child(2n-1) {
     -webkit-animation-name: ball-pulse-rise-odd;
     -moz-animation-name: ball-pulse-rise-odd;
     -o-animation-name: ball-pulse-rise-odd;
     animation-name: ball-pulse-rise-odd
 }
 
 .la-ball-pulse-rise.la-sm {
     width: 34px;
     height: 6px
 }
 
 .la-ball-pulse-rise.la-sm>div {
     width: 4px;
     height: 4px;
     margin: 1px
 }
 
 .la-ball-pulse-rise.la-2x {
     width: 140px;
     height: 28px
 }
 
 .la-ball-pulse-rise.la-2x>div {
     width: 20px;
     height: 20px;
     margin: 4px
 }
 
 .la-ball-pulse-rise.la-3x {
     width: 210px;
     height: 42px
 }
 
 .la-ball-pulse-rise.la-3x>div {
     width: 30px;
     height: 30px;
     margin: 6px
 }
 
 @-webkit-keyframes ball-pulse-rise-even {
     0% {
         opacity: 1;
         -webkit-transform: scale(1.1);
         transform: scale(1.1)
     }
     25% {
         -webkit-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     50% {
         opacity: .35;
         -webkit-transform: scale(0.3);
         transform: scale(0.3)
     }
     75% {
         -webkit-transform: translateY(200%);
         transform: translateY(200%)
     }
     100% {
         opacity: 1;
         -webkit-transform: translateY(0);
         -webkit-transform: scale(1);
         transform: translateY(0);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-pulse-rise-even {
     0% {
         opacity: 1;
         -moz-transform: scale(1.1);
         transform: scale(1.1)
     }
     25% {
         -moz-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     50% {
         opacity: .35;
         -moz-transform: scale(0.3);
         transform: scale(0.3)
     }
     75% {
         -moz-transform: translateY(200%);
         transform: translateY(200%)
     }
     100% {
         opacity: 1;
         -moz-transform: translateY(0);
         -moz-transform: scale(1);
         transform: translateY(0);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-pulse-rise-even {
     0% {
         opacity: 1;
         -o-transform: scale(1.1);
         transform: scale(1.1)
     }
     25% {
         -o-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     50% {
         opacity: .35;
         -o-transform: scale(0.3);
         transform: scale(0.3)
     }
     75% {
         -o-transform: translateY(200%);
         transform: translateY(200%)
     }
     100% {
         opacity: 1;
         -o-transform: translateY(0);
         -o-transform: scale(1);
         transform: translateY(0);
         transform: scale(1)
     }
 }
 
 @keyframes ball-pulse-rise-even {
     0% {
         opacity: 1;
         -webkit-transform: scale(1.1);
         -moz-transform: scale(1.1);
         -o-transform: scale(1.1);
         transform: scale(1.1)
     }
     25% {
         -webkit-transform: translateY(-200%);
         -moz-transform: translateY(-200%);
         -o-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     50% {
         opacity: .35;
         -webkit-transform: scale(0.3);
         -moz-transform: scale(0.3);
         -o-transform: scale(0.3);
         transform: scale(0.3)
     }
     75% {
         -webkit-transform: translateY(200%);
         -moz-transform: translateY(200%);
         -o-transform: translateY(200%);
         transform: translateY(200%)
     }
     100% {
         opacity: 1;
         -webkit-transform: translateY(0);
         -webkit-transform: scale(1);
         -moz-transform: translateY(0);
         -moz-transform: scale(1);
         -o-transform: translateY(0);
         -o-transform: scale(1);
         transform: translateY(0);
         transform: scale(1)
     }
 }
 
 @-webkit-keyframes ball-pulse-rise-odd {
     0% {
         opacity: .35;
         -webkit-transform: scale(0.4);
         transform: scale(0.4)
     }
     25% {
         -webkit-transform: translateY(200%);
         transform: translateY(200%)
     }
     50% {
         opacity: 1;
         -webkit-transform: scale(1.1);
         transform: scale(1.1)
     }
     75% {
         -webkit-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     100% {
         opacity: .35;
         -webkit-transform: translateY(0);
         -webkit-transform: scale(0.75);
         transform: translateY(0);
         transform: scale(0.75)
     }
 }
 
 @-moz-keyframes ball-pulse-rise-odd {
     0% {
         opacity: .35;
         -moz-transform: scale(0.4);
         transform: scale(0.4)
     }
     25% {
         -moz-transform: translateY(200%);
         transform: translateY(200%)
     }
     50% {
         opacity: 1;
         -moz-transform: scale(1.1);
         transform: scale(1.1)
     }
     75% {
         -moz-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     100% {
         opacity: .35;
         -moz-transform: translateY(0);
         -moz-transform: scale(0.75);
         transform: translateY(0);
         transform: scale(0.75)
     }
 }
 
 @-o-keyframes ball-pulse-rise-odd {
     0% {
         opacity: .35;
         -o-transform: scale(0.4);
         transform: scale(0.4)
     }
     25% {
         -o-transform: translateY(200%);
         transform: translateY(200%)
     }
     50% {
         opacity: 1;
         -o-transform: scale(1.1);
         transform: scale(1.1)
     }
     75% {
         -o-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     100% {
         opacity: .35;
         -o-transform: translateY(0);
         -o-transform: scale(0.75);
         transform: translateY(0);
         transform: scale(0.75)
     }
 }
 
 @keyframes ball-pulse-rise-odd {
     0% {
         opacity: .35;
         -webkit-transform: scale(0.4);
         -moz-transform: scale(0.4);
         -o-transform: scale(0.4);
         transform: scale(0.4)
     }
     25% {
         -webkit-transform: translateY(200%);
         -moz-transform: translateY(200%);
         -o-transform: translateY(200%);
         transform: translateY(200%)
     }
     50% {
         opacity: 1;
         -webkit-transform: scale(1.1);
         -moz-transform: scale(1.1);
         -o-transform: scale(1.1);
         transform: scale(1.1)
     }
     75% {
         -webkit-transform: translateY(-200%);
         -moz-transform: translateY(-200%);
         -o-transform: translateY(-200%);
         transform: translateY(-200%)
     }
     100% {
         opacity: .35;
         -webkit-transform: translateY(0);
         -webkit-transform: scale(0.75);
         -moz-transform: translateY(0);
         -moz-transform: scale(0.75);
         -o-transform: translateY(0);
         -o-transform: scale(0.75);
         transform: translateY(0);
         transform: scale(0.75)
     }
 }
 
 .la-ball-pulse-sync,
 .la-ball-pulse-sync>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-pulse-sync {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-pulse-sync.la-dark {
     color: #333
 }
 
 .la-ball-pulse-sync>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-pulse-sync {
     width: 54px;
     height: 18px
 }
 
 .la-ball-pulse-sync>div {
     width: 10px;
     height: 10px;
     margin: 4px;
     border-radius: 100%;
     -webkit-animation: ball-pulse-sync 0.6s infinite ease-in-out;
     -moz-animation: ball-pulse-sync 0.6s infinite ease-in-out;
     -o-animation: ball-pulse-sync 0.6s infinite ease-in-out;
     animation: ball-pulse-sync 0.6s infinite ease-in-out
 }
 
 .la-ball-pulse-sync>div:nth-child(1) {
     -webkit-animation-delay: -.14s;
     -moz-animation-delay: -.14s;
     -o-animation-delay: -.14s;
     animation-delay: -.14s
 }
 
 .la-ball-pulse-sync>div:nth-child(2) {
     -webkit-animation-delay: -.07s;
     -moz-animation-delay: -.07s;
     -o-animation-delay: -.07s;
     animation-delay: -.07s
 }
 
 .la-ball-pulse-sync>div:nth-child(3) {
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-pulse-sync.la-sm {
     width: 26px;
     height: 8px
 }
 
 .la-ball-pulse-sync.la-sm>div {
     width: 4px;
     height: 4px;
     margin: 2px
 }
 
 .la-ball-pulse-sync.la-2x {
     width: 108px;
     height: 36px
 }
 
 .la-ball-pulse-sync.la-2x>div {
     width: 20px;
     height: 20px;
     margin: 8px
 }
 
 .la-ball-pulse-sync.la-3x {
     width: 162px;
     height: 54px
 }
 
 .la-ball-pulse-sync.la-3x>div {
     width: 30px;
     height: 30px;
     margin: 12px
 }
 
 @-webkit-keyframes ball-pulse-sync {
     33% {
         -webkit-transform: translateY(100%);
         transform: translateY(100%)
     }
     66% {
         -webkit-transform: translateY(-100%);
         transform: translateY(-100%)
     }
     100% {
         -webkit-transform: translateY(0);
         transform: translateY(0)
     }
 }
 
 @-moz-keyframes ball-pulse-sync {
     33% {
         -moz-transform: translateY(100%);
         transform: translateY(100%)
     }
     66% {
         -moz-transform: translateY(-100%);
         transform: translateY(-100%)
     }
     100% {
         -moz-transform: translateY(0);
         transform: translateY(0)
     }
 }
 
 @-o-keyframes ball-pulse-sync {
     33% {
         -o-transform: translateY(100%);
         transform: translateY(100%)
     }
     66% {
         -o-transform: translateY(-100%);
         transform: translateY(-100%)
     }
     100% {
         -o-transform: translateY(0);
         transform: translateY(0)
     }
 }
 
 @keyframes ball-pulse-sync {
     33% {
         -webkit-transform: translateY(100%);
         -moz-transform: translateY(100%);
         -o-transform: translateY(100%);
         transform: translateY(100%)
     }
     66% {
         -webkit-transform: translateY(-100%);
         -moz-transform: translateY(-100%);
         -o-transform: translateY(-100%);
         transform: translateY(-100%)
     }
     100% {
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -o-transform: translateY(0);
         transform: translateY(0)
     }
 }
 
 .la-ball-pulse,
 .la-ball-pulse>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-pulse {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-pulse.la-dark {
     color: #333
 }
 
 .la-ball-pulse>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-pulse {
     width: 54px;
     height: 18px
 }
 
 .la-ball-pulse>div:nth-child(1) {
     -webkit-animation-delay: -200ms;
     -moz-animation-delay: -200ms;
     -o-animation-delay: -200ms;
     animation-delay: -200ms
 }
 
 .la-ball-pulse>div:nth-child(2) {
     -webkit-animation-delay: -100ms;
     -moz-animation-delay: -100ms;
     -o-animation-delay: -100ms;
     animation-delay: -100ms
 }
 
 .la-ball-pulse>div:nth-child(3) {
     -webkit-animation-delay: 0ms;
     -moz-animation-delay: 0ms;
     -o-animation-delay: 0ms;
     animation-delay: 0ms
 }
 
 .la-ball-pulse>div {
     width: 10px;
     height: 10px;
     margin: 4px;
     border-radius: 100%;
     -webkit-animation: ball-pulse 1s ease infinite;
     -moz-animation: ball-pulse 1s ease infinite;
     -o-animation: ball-pulse 1s ease infinite;
     animation: ball-pulse 1s ease infinite
 }
 
 .la-ball-pulse.la-sm {
     width: 26px;
     height: 8px
 }
 
 .la-ball-pulse.la-sm>div {
     width: 4px;
     height: 4px;
     margin: 2px
 }
 
 .la-ball-pulse.la-2x {
     width: 108px;
     height: 36px
 }
 
 .la-ball-pulse.la-2x>div {
     width: 20px;
     height: 20px;
     margin: 8px
 }
 
 .la-ball-pulse.la-3x {
     width: 162px;
     height: 54px
 }
 
 .la-ball-pulse.la-3x>div {
     width: 30px;
     height: 30px;
     margin: 12px
 }
 
 @-webkit-keyframes ball-pulse {
     0%,
     60%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     30% {
         opacity: .1;
         -webkit-transform: scale(0.01);
         transform: scale(0.01)
     }
 }
 
 @-moz-keyframes ball-pulse {
     0%,
     60%,
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     30% {
         opacity: .1;
         -moz-transform: scale(0.01);
         transform: scale(0.01)
     }
 }
 
 @-o-keyframes ball-pulse {
     0%,
     60%,
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
     30% {
         opacity: .1;
         -o-transform: scale(0.01);
         transform: scale(0.01)
     }
 }
 
 @keyframes ball-pulse {
     0%,
     60%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     30% {
         opacity: .1;
         -webkit-transform: scale(0.01);
         -moz-transform: scale(0.01);
         -o-transform: scale(0.01);
         transform: scale(0.01)
     }
 }
 
 .la-ball-rotate,
 .la-ball-rotate>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-rotate {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-rotate.la-dark {
     color: #333
 }
 
 .la-ball-rotate>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-rotate {
     width: 10px;
     height: 10px
 }
 
 .la-ball-rotate>div {
     width: 10px;
     height: 10px;
     border-radius: 100%;
     -webkit-animation: ball-rotate-animation 1s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;
     -moz-animation: ball-rotate-animation 1s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;
     -o-animation: ball-rotate-animation 1s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;
     animation: ball-rotate-animation 1s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite
 }
 
 .la-ball-rotate>div:before,
 .la-ball-rotate>div:after {
     position: absolute;
     width: inherit;
     height: inherit;
     margin: inherit;
     content: "";
     background: currentColor;
     border-radius: inherit;
     opacity: .8
 }
 
 .la-ball-rotate>div:before {
     top: 0;
     left: -150%
 }
 
 .la-ball-rotate>div:after {
     top: 0;
     left: 150%
 }
 
 .la-ball-rotate.la-sm {
     width: 4px;
     height: 4px
 }
 
 .la-ball-rotate.la-sm>div {
     width: 4px;
     height: 4px
 }
 
 .la-ball-rotate.la-2x {
     width: 20px;
     height: 20px
 }
 
 .la-ball-rotate.la-2x>div {
     width: 20px;
     height: 20px
 }
 
 .la-ball-rotate.la-3x {
     width: 30px;
     height: 30px
 }
 
 .la-ball-rotate.la-3x>div {
     width: 30px;
     height: 30px
 }
 
 @-webkit-keyframes ball-rotate-animation {
     0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -webkit-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes ball-rotate-animation {
     0% {
         -moz-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -moz-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes ball-rotate-animation {
     0% {
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes ball-rotate-animation {
     0% {
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     50% {
         -webkit-transform: rotate(180deg);
         -moz-transform: rotate(180deg);
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 .la-ball-running-dots,
 .la-ball-running-dots>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-running-dots {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-running-dots.la-dark {
     color: #333
 }
 
 .la-ball-running-dots>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-running-dots {
     width: 10px;
     height: 10px
 }
 
 .la-ball-running-dots>div {
     position: absolute;
     width: 10px;
     height: 10px;
     margin-left: -25px;
     border-radius: 100%;
     -webkit-animation: ball-running-dots-animate 2s linear infinite;
     -moz-animation: ball-running-dots-animate 2s linear infinite;
     -o-animation: ball-running-dots-animate 2s linear infinite;
     animation: ball-running-dots-animate 2s linear infinite
 }
 
 .la-ball-running-dots>div:nth-child(1) {
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-running-dots>div:nth-child(2) {
     -webkit-animation-delay: -.4s;
     -moz-animation-delay: -.4s;
     -o-animation-delay: -.4s;
     animation-delay: -.4s
 }
 
 .la-ball-running-dots>div:nth-child(3) {
     -webkit-animation-delay: -.8s;
     -moz-animation-delay: -.8s;
     -o-animation-delay: -.8s;
     animation-delay: -.8s
 }
 
 .la-ball-running-dots>div:nth-child(4) {
     -webkit-animation-delay: -1.2s;
     -moz-animation-delay: -1.2s;
     -o-animation-delay: -1.2s;
     animation-delay: -1.2s
 }
 
 .la-ball-running-dots>div:nth-child(5) {
     -webkit-animation-delay: -1.6s;
     -moz-animation-delay: -1.6s;
     -o-animation-delay: -1.6s;
     animation-delay: -1.6s
 }
 
 .la-ball-running-dots>div:nth-child(6) {
     -webkit-animation-delay: -2s;
     -moz-animation-delay: -2s;
     -o-animation-delay: -2s;
     animation-delay: -2s
 }
 
 .la-ball-running-dots>div:nth-child(7) {
     -webkit-animation-delay: -2.4s;
     -moz-animation-delay: -2.4s;
     -o-animation-delay: -2.4s;
     animation-delay: -2.4s
 }
 
 .la-ball-running-dots>div:nth-child(8) {
     -webkit-animation-delay: -2.8s;
     -moz-animation-delay: -2.8s;
     -o-animation-delay: -2.8s;
     animation-delay: -2.8s
 }
 
 .la-ball-running-dots>div:nth-child(9) {
     -webkit-animation-delay: -3.2s;
     -moz-animation-delay: -3.2s;
     -o-animation-delay: -3.2s;
     animation-delay: -3.2s
 }
 
 .la-ball-running-dots>div:nth-child(10) {
     -webkit-animation-delay: -3.6s;
     -moz-animation-delay: -3.6s;
     -o-animation-delay: -3.6s;
     animation-delay: -3.6s
 }
 
 .la-ball-running-dots.la-sm {
     width: 4px;
     height: 4px
 }
 
 .la-ball-running-dots.la-sm>div {
     width: 4px;
     height: 4px;
     margin-left: -12px
 }
 
 .la-ball-running-dots.la-2x {
     width: 20px;
     height: 20px
 }
 
 .la-ball-running-dots.la-2x>div {
     width: 20px;
     height: 20px;
     margin-left: -50px
 }
 
 .la-ball-running-dots.la-3x {
     width: 30px;
     height: 30px
 }
 
 .la-ball-running-dots.la-3x>div {
     width: 30px;
     height: 30px;
     margin-left: -75px
 }
 
 @-webkit-keyframes ball-running-dots-animate {
     0%,
     100% {
         width: 100%;
         height: 100%;
         -webkit-transform: translateY(0) translateX(500%);
         transform: translateY(0) translateX(500%)
     }
     80% {
         -webkit-transform: translateY(0) translateX(0);
         transform: translateY(0) translateX(0)
     }
     85% {
         width: 100%;
         height: 100%;
         -webkit-transform: translateY(-125%) translateX(0);
         transform: translateY(-125%) translateX(0)
     }
     90% {
         width: 200%;
         height: 75%
     }
     95% {
         width: 100%;
         height: 100%;
         -webkit-transform: translateY(-100%) translateX(500%);
         transform: translateY(-100%) translateX(500%)
     }
 }
 
 @-moz-keyframes ball-running-dots-animate {
     0%,
     100% {
         width: 100%;
         height: 100%;
         -moz-transform: translateY(0) translateX(500%);
         transform: translateY(0) translateX(500%)
     }
     80% {
         -moz-transform: translateY(0) translateX(0);
         transform: translateY(0) translateX(0)
     }
     85% {
         width: 100%;
         height: 100%;
         -moz-transform: translateY(-125%) translateX(0);
         transform: translateY(-125%) translateX(0)
     }
     90% {
         width: 200%;
         height: 75%
     }
     95% {
         width: 100%;
         height: 100%;
         -moz-transform: translateY(-100%) translateX(500%);
         transform: translateY(-100%) translateX(500%)
     }
 }
 
 @-o-keyframes ball-running-dots-animate {
     0%,
     100% {
         width: 100%;
         height: 100%;
         -o-transform: translateY(0) translateX(500%);
         transform: translateY(0) translateX(500%)
     }
     80% {
         -o-transform: translateY(0) translateX(0);
         transform: translateY(0) translateX(0)
     }
     85% {
         width: 100%;
         height: 100%;
         -o-transform: translateY(-125%) translateX(0);
         transform: translateY(-125%) translateX(0)
     }
     90% {
         width: 200%;
         height: 75%
     }
     95% {
         width: 100%;
         height: 100%;
         -o-transform: translateY(-100%) translateX(500%);
         transform: translateY(-100%) translateX(500%)
     }
 }
 
 @keyframes ball-running-dots-animate {
     0%,
     100% {
         width: 100%;
         height: 100%;
         -webkit-transform: translateY(0) translateX(500%);
         -moz-transform: translateY(0) translateX(500%);
         -o-transform: translateY(0) translateX(500%);
         transform: translateY(0) translateX(500%)
     }
     80% {
         -webkit-transform: translateY(0) translateX(0);
         -moz-transform: translateY(0) translateX(0);
         -o-transform: translateY(0) translateX(0);
         transform: translateY(0) translateX(0)
     }
     85% {
         width: 100%;
         height: 100%;
         -webkit-transform: translateY(-125%) translateX(0);
         -moz-transform: translateY(-125%) translateX(0);
         -o-transform: translateY(-125%) translateX(0);
         transform: translateY(-125%) translateX(0)
     }
     90% {
         width: 200%;
         height: 75%
     }
     95% {
         width: 100%;
         height: 100%;
         -webkit-transform: translateY(-100%) translateX(500%);
         -moz-transform: translateY(-100%) translateX(500%);
         -o-transform: translateY(-100%) translateX(500%);
         transform: translateY(-100%) translateX(500%)
     }
 }
 
 .la-ball-scale-multiple,
 .la-ball-scale-multiple>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-scale-multiple {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-scale-multiple.la-dark {
     color: #333
 }
 
 .la-ball-scale-multiple>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-scale-multiple {
     width: 32px;
     height: 32px
 }
 
 .la-ball-scale-multiple>div {
     position: absolute;
     top: 0;
     left: 0;
     width: 32px;
     height: 32px;
     border-radius: 100%;
     opacity: 0;
     -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
     -moz-animation: ball-scale-multiple 1s 0s linear infinite;
     -o-animation: ball-scale-multiple 1s 0s linear infinite;
     animation: ball-scale-multiple 1s 0s linear infinite
 }
 
 .la-ball-scale-multiple>div:nth-child(2) {
     -webkit-animation-delay: .2s;
     -moz-animation-delay: .2s;
     -o-animation-delay: .2s;
     animation-delay: .2s
 }
 
 .la-ball-scale-multiple>div:nth-child(3) {
     -webkit-animation-delay: .4s;
     -moz-animation-delay: .4s;
     -o-animation-delay: .4s;
     animation-delay: .4s
 }
 
 .la-ball-scale-multiple.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale-multiple.la-sm>div {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale-multiple.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale-multiple.la-2x>div {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale-multiple.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-scale-multiple.la-3x>div {
     width: 96px;
     height: 96px
 }
 
 @-webkit-keyframes ball-scale-multiple {
     0% {
         opacity: 0;
         -webkit-transform: scale(0);
         transform: scale(0)
     }
     5% {
         opacity: .75
     }
     100% {
         opacity: 0;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-scale-multiple {
     0% {
         opacity: 0;
         -moz-transform: scale(0);
         transform: scale(0)
     }
     5% {
         opacity: .75
     }
     100% {
         opacity: 0;
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-scale-multiple {
     0% {
         opacity: 0;
         -o-transform: scale(0);
         transform: scale(0)
     }
     5% {
         opacity: .75
     }
     100% {
         opacity: 0;
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-scale-multiple {
     0% {
         opacity: 0;
         -webkit-transform: scale(0);
         -moz-transform: scale(0);
         -o-transform: scale(0);
         transform: scale(0)
     }
     5% {
         opacity: .75
     }
     100% {
         opacity: 0;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-scale-pulse,
 .la-ball-scale-pulse>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-scale-pulse {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-scale-pulse.la-dark {
     color: #333
 }
 
 .la-ball-scale-pulse>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-scale-pulse {
     width: 32px;
     height: 32px
 }
 
 .la-ball-scale-pulse>div {
     position: absolute;
     top: 0;
     left: 0;
     width: 32px;
     height: 32px;
     border-radius: 100%;
     opacity: .5;
     -webkit-animation: ball-scale-pulse 2s infinite ease-in-out;
     -moz-animation: ball-scale-pulse 2s infinite ease-in-out;
     -o-animation: ball-scale-pulse 2s infinite ease-in-out;
     animation: ball-scale-pulse 2s infinite ease-in-out
 }
 
 .la-ball-scale-pulse>div:last-child {
     -webkit-animation-delay: -1.0s;
     -moz-animation-delay: -1.0s;
     -o-animation-delay: -1.0s;
     animation-delay: -1.0s
 }
 
 .la-ball-scale-pulse.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale-pulse.la-sm>div {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale-pulse.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale-pulse.la-2x>div {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale-pulse.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-scale-pulse.la-3x>div {
     width: 96px;
     height: 96px
 }
 
 @-webkit-keyframes ball-scale-pulse {
     0%,
     100% {
         -webkit-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-scale-pulse {
     0%,
     100% {
         -moz-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-scale-pulse {
     0%,
     100% {
         -o-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-scale-pulse {
     0%,
     100% {
         -webkit-transform: scale(0);
         -moz-transform: scale(0);
         -o-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-scale-ripple-multiple,
 .la-ball-scale-ripple-multiple>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-scale-ripple-multiple {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-scale-ripple-multiple.la-dark {
     color: #333
 }
 
 .la-ball-scale-ripple-multiple>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-scale-ripple-multiple {
     width: 32px;
     height: 32px
 }
 
 .la-ball-scale-ripple-multiple>div {
     position: absolute;
     top: 0;
     left: 0;
     width: 32px;
     height: 32px;
     background: transparent;
     border-width: 2px;
     border-radius: 100%;
     opacity: 0;
     -webkit-animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
     -moz-animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
     -o-animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
     animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8)
 }
 
 .la-ball-scale-ripple-multiple>div:nth-child(1) {
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-scale-ripple-multiple>div:nth-child(2) {
     -webkit-animation-delay: .25s;
     -moz-animation-delay: .25s;
     -o-animation-delay: .25s;
     animation-delay: .25s
 }
 
 .la-ball-scale-ripple-multiple>div:nth-child(3) {
     -webkit-animation-delay: .5s;
     -moz-animation-delay: .5s;
     -o-animation-delay: .5s;
     animation-delay: .5s
 }
 
 .la-ball-scale-ripple-multiple.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale-ripple-multiple.la-sm>div {
     width: 16px;
     height: 16px;
     border-width: 1px
 }
 
 .la-ball-scale-ripple-multiple.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale-ripple-multiple.la-2x>div {
     width: 64px;
     height: 64px;
     border-width: 4px
 }
 
 .la-ball-scale-ripple-multiple.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-scale-ripple-multiple.la-3x>div {
     width: 96px;
     height: 96px;
     border-width: 6px
 }
 
 @-webkit-keyframes ball-scale-ripple-multiple {
     0% {
         opacity: 1;
         -webkit-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .5;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     95% {
         opacity: 0
     }
 }
 
 @-moz-keyframes ball-scale-ripple-multiple {
     0% {
         opacity: 1;
         -moz-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .5;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     95% {
         opacity: 0
     }
 }
 
 @-o-keyframes ball-scale-ripple-multiple {
     0% {
         opacity: 1;
         -o-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .5;
         -o-transform: scale(1);
         transform: scale(1)
     }
     95% {
         opacity: 0
     }
 }
 
 @keyframes ball-scale-ripple-multiple {
     0% {
         opacity: 1;
         -webkit-transform: scale(0.1);
         -moz-transform: scale(0.1);
         -o-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .5;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     95% {
         opacity: 0
     }
 }
 
 .la-ball-scale-ripple,
 .la-ball-scale-ripple>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-scale-ripple {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-scale-ripple.la-dark {
     color: #333
 }
 
 .la-ball-scale-ripple>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-scale-ripple {
     width: 32px;
     height: 32px
 }
 
 .la-ball-scale-ripple>div {
     width: 32px;
     height: 32px;
     background: transparent;
     border-width: 2px;
     border-radius: 100%;
     opacity: 0;
     -webkit-animation: ball-scale-ripple 1s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
     -moz-animation: ball-scale-ripple 1s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
     -o-animation: ball-scale-ripple 1s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
     animation: ball-scale-ripple 1s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8)
 }
 
 .la-ball-scale-ripple.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale-ripple.la-sm>div {
     width: 16px;
     height: 16px;
     border-width: 1px
 }
 
 .la-ball-scale-ripple.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale-ripple.la-2x>div {
     width: 64px;
     height: 64px;
     border-width: 4px
 }
 
 .la-ball-scale-ripple.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-scale-ripple.la-3x>div {
     width: 96px;
     height: 96px;
     border-width: 6px
 }
 
 @-webkit-keyframes ball-scale-ripple {
     0% {
         opacity: 1;
         -webkit-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .65;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     100% {
         opacity: 0
     }
 }
 
 @-moz-keyframes ball-scale-ripple {
     0% {
         opacity: 1;
         -moz-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .65;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     100% {
         opacity: 0
     }
 }
 
 @-o-keyframes ball-scale-ripple {
     0% {
         opacity: 1;
         -o-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .65;
         -o-transform: scale(1);
         transform: scale(1)
     }
     100% {
         opacity: 0
     }
 }
 
 @keyframes ball-scale-ripple {
     0% {
         opacity: 1;
         -webkit-transform: scale(0.1);
         -moz-transform: scale(0.1);
         -o-transform: scale(0.1);
         transform: scale(0.1)
     }
     70% {
         opacity: .65;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     100% {
         opacity: 0
     }
 }
 
 .la-ball-scale,
 .la-ball-scale>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-scale {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-scale.la-dark {
     color: #333
 }
 
 .la-ball-scale>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-scale {
     width: 32px;
     height: 32px
 }
 
 .la-ball-scale>div {
     width: 32px;
     height: 32px;
     border-radius: 100%;
     opacity: 0;
     -webkit-animation: ball-scale 1s 0s ease-in-out infinite;
     -moz-animation: ball-scale 1s 0s ease-in-out infinite;
     -o-animation: ball-scale 1s 0s ease-in-out infinite;
     animation: ball-scale 1s 0s ease-in-out infinite
 }
 
 .la-ball-scale.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale.la-sm>div {
     width: 16px;
     height: 16px
 }
 
 .la-ball-scale.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale.la-2x>div {
     width: 64px;
     height: 64px
 }
 
 .la-ball-scale.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-scale.la-3x>div {
     width: 96px;
     height: 96px
 }
 
 @-webkit-keyframes ball-scale {
     0% {
         opacity: 1;
         -webkit-transform: scale(0);
         transform: scale(0)
     }
     100% {
         opacity: 0;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-scale {
     0% {
         opacity: 1;
         -moz-transform: scale(0);
         transform: scale(0)
     }
     100% {
         opacity: 0;
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-scale {
     0% {
         opacity: 1;
         -o-transform: scale(0);
         transform: scale(0)
     }
     100% {
         opacity: 0;
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-scale {
     0% {
         opacity: 1;
         -webkit-transform: scale(0);
         -moz-transform: scale(0);
         -o-transform: scale(0);
         transform: scale(0)
     }
     100% {
         opacity: 0;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-spin-clockwise-fade-rotating,
 .la-ball-spin-clockwise-fade-rotating>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-spin-clockwise-fade-rotating {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-spin-clockwise-fade-rotating.la-dark {
     color: #333
 }
 
 .la-ball-spin-clockwise-fade-rotating>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-spin-clockwise-fade-rotating {
     width: 32px;
     height: 32px;
     -webkit-animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;
     -moz-animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;
     -o-animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;
     animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear
 }
 
 .la-ball-spin-clockwise-fade-rotating>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 8px;
     height: 8px;
     margin-top: -4px;
     margin-left: -4px;
     border-radius: 100%;
     -webkit-animation: ball-spin-clockwise-fade-rotating 1s infinite linear;
     -moz-animation: ball-spin-clockwise-fade-rotating 1s infinite linear;
     -o-animation: ball-spin-clockwise-fade-rotating 1s infinite linear;
     animation: ball-spin-clockwise-fade-rotating 1s infinite linear
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(1) {
     top: 5%;
     left: 50%;
     -webkit-animation-delay: -.875s;
     -moz-animation-delay: -.875s;
     -o-animation-delay: -.875s;
     animation-delay: -.875s
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(2) {
     top: 18.1801948466%;
     left: 81.8198051534%;
     -webkit-animation-delay: -.75s;
     -moz-animation-delay: -.75s;
     -o-animation-delay: -.75s;
     animation-delay: -.75s
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(3) {
     top: 50%;
     left: 95%;
     -webkit-animation-delay: -.625s;
     -moz-animation-delay: -.625s;
     -o-animation-delay: -.625s;
     animation-delay: -.625s
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(4) {
     top: 81.8198051534%;
     left: 81.8198051534%;
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(5) {
     top: 94.9999999966%;
     left: 50.0000000005%;
     -webkit-animation-delay: -.375s;
     -moz-animation-delay: -.375s;
     -o-animation-delay: -.375s;
     animation-delay: -.375s
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(6) {
     top: 81.8198046966%;
     left: 18.1801949248%;
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(7) {
     top: 49.9999750815%;
     left: 5.0000051215%;
     -webkit-animation-delay: -.125s;
     -moz-animation-delay: -.125s;
     -o-animation-delay: -.125s;
     animation-delay: -.125s
 }
 
 .la-ball-spin-clockwise-fade-rotating>div:nth-child(8) {
     top: 18.179464974%;
     left: 18.1803700518%;
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-spin-clockwise-fade-rotating.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-spin-clockwise-fade-rotating.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-spin-clockwise-fade-rotating.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-spin-clockwise-fade-rotating.la-2x>div {
     width: 16px;
     height: 16px;
     margin-top: -8px;
     margin-left: -8px
 }
 
 .la-ball-spin-clockwise-fade-rotating.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-spin-clockwise-fade-rotating.la-3x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 @-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate {
     100% {
         -webkit-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @-moz-keyframes ball-spin-clockwise-fade-rotating-rotate {
     100% {
         -moz-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @-o-keyframes ball-spin-clockwise-fade-rotating-rotate {
     100% {
         -o-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @keyframes ball-spin-clockwise-fade-rotating-rotate {
     100% {
         -webkit-transform: rotate(-360deg);
         -moz-transform: rotate(-360deg);
         -o-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @-webkit-keyframes ball-spin-clockwise-fade-rotating {
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-spin-clockwise-fade-rotating {
     50% {
         opacity: .25;
         -moz-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-spin-clockwise-fade-rotating {
     50% {
         opacity: .25;
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-spin-clockwise-fade-rotating {
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         -moz-transform: scale(0.5);
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-spin-clockwise-fade,
 .la-ball-spin-clockwise-fade>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-spin-clockwise-fade {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-spin-clockwise-fade.la-dark {
     color: #333
 }
 
 .la-ball-spin-clockwise-fade>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-spin-clockwise-fade {
     width: 32px;
     height: 32px
 }
 
 .la-ball-spin-clockwise-fade>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 8px;
     height: 8px;
     margin-top: -4px;
     margin-left: -4px;
     border-radius: 100%;
     -webkit-animation: ball-spin-clockwise-fade 1s infinite linear;
     -moz-animation: ball-spin-clockwise-fade 1s infinite linear;
     -o-animation: ball-spin-clockwise-fade 1s infinite linear;
     animation: ball-spin-clockwise-fade 1s infinite linear
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(1) {
     top: 5%;
     left: 50%;
     -webkit-animation-delay: -.875s;
     -moz-animation-delay: -.875s;
     -o-animation-delay: -.875s;
     animation-delay: -.875s
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(2) {
     top: 18.1801948466%;
     left: 81.8198051534%;
     -webkit-animation-delay: -.75s;
     -moz-animation-delay: -.75s;
     -o-animation-delay: -.75s;
     animation-delay: -.75s
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(3) {
     top: 50%;
     left: 95%;
     -webkit-animation-delay: -.625s;
     -moz-animation-delay: -.625s;
     -o-animation-delay: -.625s;
     animation-delay: -.625s
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(4) {
     top: 81.8198051534%;
     left: 81.8198051534%;
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(5) {
     top: 94.9999999966%;
     left: 50.0000000005%;
     -webkit-animation-delay: -.375s;
     -moz-animation-delay: -.375s;
     -o-animation-delay: -.375s;
     animation-delay: -.375s
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(6) {
     top: 81.8198046966%;
     left: 18.1801949248%;
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(7) {
     top: 49.9999750815%;
     left: 5.0000051215%;
     -webkit-animation-delay: -.125s;
     -moz-animation-delay: -.125s;
     -o-animation-delay: -.125s;
     animation-delay: -.125s
 }
 
 .la-ball-spin-clockwise-fade>div:nth-child(8) {
     top: 18.179464974%;
     left: 18.1803700518%;
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-spin-clockwise-fade.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-spin-clockwise-fade.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-spin-clockwise-fade.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-spin-clockwise-fade.la-2x>div {
     width: 16px;
     height: 16px;
     margin-top: -8px;
     margin-left: -8px
 }
 
 .la-ball-spin-clockwise-fade.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-spin-clockwise-fade.la-3x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 @-webkit-keyframes ball-spin-clockwise-fade {
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-spin-clockwise-fade {
     50% {
         opacity: .25;
         -moz-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-spin-clockwise-fade {
     50% {
         opacity: .25;
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-spin-clockwise-fade {
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         -moz-transform: scale(0.5);
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-spin-clockwise,
 .la-ball-spin-clockwise>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-spin-clockwise {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-spin-clockwise.la-dark {
     color: #333
 }
 
 .la-ball-spin-clockwise>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-spin-clockwise {
     width: 32px;
     height: 32px
 }
 
 .la-ball-spin-clockwise>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 8px;
     height: 8px;
     margin-top: -4px;
     margin-left: -4px;
     border-radius: 100%;
     -webkit-animation: ball-spin-clockwise 1s infinite ease-in-out;
     -moz-animation: ball-spin-clockwise 1s infinite ease-in-out;
     -o-animation: ball-spin-clockwise 1s infinite ease-in-out;
     animation: ball-spin-clockwise 1s infinite ease-in-out
 }
 
 .la-ball-spin-clockwise>div:nth-child(1) {
     top: 5%;
     left: 50%;
     -webkit-animation-delay: -.875s;
     -moz-animation-delay: -.875s;
     -o-animation-delay: -.875s;
     animation-delay: -.875s
 }
 
 .la-ball-spin-clockwise>div:nth-child(2) {
     top: 18.1801948466%;
     left: 81.8198051534%;
     -webkit-animation-delay: -.75s;
     -moz-animation-delay: -.75s;
     -o-animation-delay: -.75s;
     animation-delay: -.75s
 }
 
 .la-ball-spin-clockwise>div:nth-child(3) {
     top: 50%;
     left: 95%;
     -webkit-animation-delay: -.625s;
     -moz-animation-delay: -.625s;
     -o-animation-delay: -.625s;
     animation-delay: -.625s
 }
 
 .la-ball-spin-clockwise>div:nth-child(4) {
     top: 81.8198051534%;
     left: 81.8198051534%;
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-ball-spin-clockwise>div:nth-child(5) {
     top: 94.9999999966%;
     left: 50.0000000005%;
     -webkit-animation-delay: -.375s;
     -moz-animation-delay: -.375s;
     -o-animation-delay: -.375s;
     animation-delay: -.375s
 }
 
 .la-ball-spin-clockwise>div:nth-child(6) {
     top: 81.8198046966%;
     left: 18.1801949248%;
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-ball-spin-clockwise>div:nth-child(7) {
     top: 49.9999750815%;
     left: 5.0000051215%;
     -webkit-animation-delay: -.125s;
     -moz-animation-delay: -.125s;
     -o-animation-delay: -.125s;
     animation-delay: -.125s
 }
 
 .la-ball-spin-clockwise>div:nth-child(8) {
     top: 18.179464974%;
     left: 18.1803700518%;
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-spin-clockwise.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-spin-clockwise.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-spin-clockwise.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-spin-clockwise.la-2x>div {
     width: 16px;
     height: 16px;
     margin-top: -8px;
     margin-left: -8px
 }
 
 .la-ball-spin-clockwise.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-spin-clockwise.la-3x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 @-webkit-keyframes ball-spin-clockwise {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -webkit-transform: scale(0);
         transform: scale(0)
     }
 }
 
 @-moz-keyframes ball-spin-clockwise {
     0%,
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -moz-transform: scale(0);
         transform: scale(0)
     }
 }
 
 @-o-keyframes ball-spin-clockwise {
     0%,
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -o-transform: scale(0);
         transform: scale(0)
     }
 }
 
 @keyframes ball-spin-clockwise {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -webkit-transform: scale(0);
         -moz-transform: scale(0);
         -o-transform: scale(0);
         transform: scale(0)
     }
 }
 
 .la-ball-spin-fade-rotating,
 .la-ball-spin-fade-rotating>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-spin-fade-rotating {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-spin-fade-rotating.la-dark {
     color: #333
 }
 
 .la-ball-spin-fade-rotating>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-spin-fade-rotating {
     width: 32px;
     height: 32px;
     -webkit-animation: ball-spin-fade-rotate 6s infinite linear;
     -moz-animation: ball-spin-fade-rotate 6s infinite linear;
     -o-animation: ball-spin-fade-rotate 6s infinite linear;
     animation: ball-spin-fade-rotate 6s infinite linear
 }
 
 .la-ball-spin-fade-rotating>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 8px;
     height: 8px;
     margin-top: -4px;
     margin-left: -4px;
     border-radius: 100%;
     -webkit-animation: ball-spin-fade 1s infinite linear;
     -moz-animation: ball-spin-fade 1s infinite linear;
     -o-animation: ball-spin-fade 1s infinite linear;
     animation: ball-spin-fade 1s infinite linear
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(1) {
     top: 5%;
     left: 50%;
     -webkit-animation-delay: -1.125s;
     -moz-animation-delay: -1.125s;
     -o-animation-delay: -1.125s;
     animation-delay: -1.125s
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(2) {
     top: 18.1801948466%;
     left: 81.8198051534%;
     -webkit-animation-delay: -1.25s;
     -moz-animation-delay: -1.25s;
     -o-animation-delay: -1.25s;
     animation-delay: -1.25s
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(3) {
     top: 50%;
     left: 95%;
     -webkit-animation-delay: -1.375s;
     -moz-animation-delay: -1.375s;
     -o-animation-delay: -1.375s;
     animation-delay: -1.375s
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(4) {
     top: 81.8198051534%;
     left: 81.8198051534%;
     -webkit-animation-delay: -1.5s;
     -moz-animation-delay: -1.5s;
     -o-animation-delay: -1.5s;
     animation-delay: -1.5s
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(5) {
     top: 94.9999999966%;
     left: 50.0000000005%;
     -webkit-animation-delay: -1.625s;
     -moz-animation-delay: -1.625s;
     -o-animation-delay: -1.625s;
     animation-delay: -1.625s
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(6) {
     top: 81.8198046966%;
     left: 18.1801949248%;
     -webkit-animation-delay: -1.75s;
     -moz-animation-delay: -1.75s;
     -o-animation-delay: -1.75s;
     animation-delay: -1.75s
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(7) {
     top: 49.9999750815%;
     left: 5.0000051215%;
     -webkit-animation-delay: -1.875s;
     -moz-animation-delay: -1.875s;
     -o-animation-delay: -1.875s;
     animation-delay: -1.875s
 }
 
 .la-ball-spin-fade-rotating>div:nth-child(8) {
     top: 18.179464974%;
     left: 18.1803700518%;
     -webkit-animation-delay: -2s;
     -moz-animation-delay: -2s;
     -o-animation-delay: -2s;
     animation-delay: -2s
 }
 
 .la-ball-spin-fade-rotating.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-spin-fade-rotating.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-spin-fade-rotating.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-spin-fade-rotating.la-2x>div {
     width: 16px;
     height: 16px;
     margin-top: -8px;
     margin-left: -8px
 }
 
 .la-ball-spin-fade-rotating.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-spin-fade-rotating.la-3x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 @-webkit-keyframes ball-spin-fade-rotate {
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes ball-spin-fade-rotate {
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes ball-spin-fade-rotate {
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes ball-spin-fade-rotate {
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-webkit-keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 @-moz-keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -moz-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 @-o-keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 @keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         -moz-transform: scale(0.5);
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 .la-ball-spin-fade,
 .la-ball-spin-fade>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-spin-fade {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-spin-fade.la-dark {
     color: #333
 }
 
 .la-ball-spin-fade>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-spin-fade {
     width: 32px;
     height: 32px
 }
 
 .la-ball-spin-fade>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 8px;
     height: 8px;
     margin-top: -4px;
     margin-left: -4px;
     border-radius: 100%;
     -webkit-animation: ball-spin-fade 1s infinite linear;
     -moz-animation: ball-spin-fade 1s infinite linear;
     -o-animation: ball-spin-fade 1s infinite linear;
     animation: ball-spin-fade 1s infinite linear
 }
 
 .la-ball-spin-fade>div:nth-child(1) {
     top: 5%;
     left: 50%;
     -webkit-animation-delay: -1.125s;
     -moz-animation-delay: -1.125s;
     -o-animation-delay: -1.125s;
     animation-delay: -1.125s
 }
 
 .la-ball-spin-fade>div:nth-child(2) {
     top: 18.1801948466%;
     left: 81.8198051534%;
     -webkit-animation-delay: -1.25s;
     -moz-animation-delay: -1.25s;
     -o-animation-delay: -1.25s;
     animation-delay: -1.25s
 }
 
 .la-ball-spin-fade>div:nth-child(3) {
     top: 50%;
     left: 95%;
     -webkit-animation-delay: -1.375s;
     -moz-animation-delay: -1.375s;
     -o-animation-delay: -1.375s;
     animation-delay: -1.375s
 }
 
 .la-ball-spin-fade>div:nth-child(4) {
     top: 81.8198051534%;
     left: 81.8198051534%;
     -webkit-animation-delay: -1.5s;
     -moz-animation-delay: -1.5s;
     -o-animation-delay: -1.5s;
     animation-delay: -1.5s
 }
 
 .la-ball-spin-fade>div:nth-child(5) {
     top: 94.9999999966%;
     left: 50.0000000005%;
     -webkit-animation-delay: -1.625s;
     -moz-animation-delay: -1.625s;
     -o-animation-delay: -1.625s;
     animation-delay: -1.625s
 }
 
 .la-ball-spin-fade>div:nth-child(6) {
     top: 81.8198046966%;
     left: 18.1801949248%;
     -webkit-animation-delay: -1.75s;
     -moz-animation-delay: -1.75s;
     -o-animation-delay: -1.75s;
     animation-delay: -1.75s
 }
 
 .la-ball-spin-fade>div:nth-child(7) {
     top: 49.9999750815%;
     left: 5.0000051215%;
     -webkit-animation-delay: -1.875s;
     -moz-animation-delay: -1.875s;
     -o-animation-delay: -1.875s;
     animation-delay: -1.875s
 }
 
 .la-ball-spin-fade>div:nth-child(8) {
     top: 18.179464974%;
     left: 18.1803700518%;
     -webkit-animation-delay: -2s;
     -moz-animation-delay: -2s;
     -o-animation-delay: -2s;
     animation-delay: -2s
 }
 
 .la-ball-spin-fade.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-spin-fade.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-spin-fade.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-spin-fade.la-2x>div {
     width: 16px;
     height: 16px;
     margin-top: -8px;
     margin-left: -8px
 }
 
 .la-ball-spin-fade.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-spin-fade.la-3x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 @-webkit-keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 @-moz-keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -moz-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 @-o-keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 @keyframes ball-spin-fade {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     50% {
         opacity: .25;
         -webkit-transform: scale(0.5);
         -moz-transform: scale(0.5);
         -o-transform: scale(0.5);
         transform: scale(0.5)
     }
 }
 
 .la-ball-spin-rotate,
 .la-ball-spin-rotate>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-spin-rotate {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-spin-rotate.la-dark {
     color: #333
 }
 
 .la-ball-spin-rotate>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-spin-rotate {
     width: 32px;
     height: 32px;
     -webkit-animation: ball-spin-rotate 2s infinite linear;
     -moz-animation: ball-spin-rotate 2s infinite linear;
     -o-animation: ball-spin-rotate 2s infinite linear;
     animation: ball-spin-rotate 2s infinite linear
 }
 
 .la-ball-spin-rotate>div {
     position: absolute;
     top: 0;
     width: 60%;
     height: 60%;
     border-radius: 100%;
     -webkit-animation: ball-spin-bounce 2s infinite ease-in-out;
     -moz-animation: ball-spin-bounce 2s infinite ease-in-out;
     -o-animation: ball-spin-bounce 2s infinite ease-in-out;
     animation: ball-spin-bounce 2s infinite ease-in-out
 }
 
 .la-ball-spin-rotate>div:last-child {
     top: auto;
     bottom: 0;
     -webkit-animation-delay: -1.0s;
     -moz-animation-delay: -1.0s;
     -o-animation-delay: -1.0s;
     animation-delay: -1.0s
 }
 
 .la-ball-spin-rotate.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-spin-rotate.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-spin-rotate.la-3x {
     width: 96px;
     height: 96px
 }
 
 @-webkit-keyframes ball-spin-rotate {
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes ball-spin-rotate {
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes ball-spin-rotate {
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes ball-spin-rotate {
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-webkit-keyframes ball-spin-bounce {
     0%,
     100% {
         -webkit-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-spin-bounce {
     0%,
     100% {
         -moz-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-spin-bounce {
     0%,
     100% {
         -o-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-spin-bounce {
     0%,
     100% {
         -webkit-transform: scale(0);
         -moz-transform: scale(0);
         -o-transform: scale(0);
         transform: scale(0)
     }
     50% {
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-spin,
 .la-ball-spin>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-spin {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-spin.la-dark {
     color: #333
 }
 
 .la-ball-spin>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-spin {
     width: 32px;
     height: 32px
 }
 
 .la-ball-spin>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 8px;
     height: 8px;
     margin-top: -4px;
     margin-left: -4px;
     border-radius: 100%;
     -webkit-animation: ball-spin 1s infinite ease-in-out;
     -moz-animation: ball-spin 1s infinite ease-in-out;
     -o-animation: ball-spin 1s infinite ease-in-out;
     animation: ball-spin 1s infinite ease-in-out
 }
 
 .la-ball-spin>div:nth-child(1) {
     top: 5%;
     left: 50%;
     -webkit-animation-delay: -1.125s;
     -moz-animation-delay: -1.125s;
     -o-animation-delay: -1.125s;
     animation-delay: -1.125s
 }
 
 .la-ball-spin>div:nth-child(2) {
     top: 18.1801948466%;
     left: 81.8198051534%;
     -webkit-animation-delay: -1.25s;
     -moz-animation-delay: -1.25s;
     -o-animation-delay: -1.25s;
     animation-delay: -1.25s
 }
 
 .la-ball-spin>div:nth-child(3) {
     top: 50%;
     left: 95%;
     -webkit-animation-delay: -1.375s;
     -moz-animation-delay: -1.375s;
     -o-animation-delay: -1.375s;
     animation-delay: -1.375s
 }
 
 .la-ball-spin>div:nth-child(4) {
     top: 81.8198051534%;
     left: 81.8198051534%;
     -webkit-animation-delay: -1.5s;
     -moz-animation-delay: -1.5s;
     -o-animation-delay: -1.5s;
     animation-delay: -1.5s
 }
 
 .la-ball-spin>div:nth-child(5) {
     top: 94.9999999966%;
     left: 50.0000000005%;
     -webkit-animation-delay: -1.625s;
     -moz-animation-delay: -1.625s;
     -o-animation-delay: -1.625s;
     animation-delay: -1.625s
 }
 
 .la-ball-spin>div:nth-child(6) {
     top: 81.8198046966%;
     left: 18.1801949248%;
     -webkit-animation-delay: -1.75s;
     -moz-animation-delay: -1.75s;
     -o-animation-delay: -1.75s;
     animation-delay: -1.75s
 }
 
 .la-ball-spin>div:nth-child(7) {
     top: 49.9999750815%;
     left: 5.0000051215%;
     -webkit-animation-delay: -1.875s;
     -moz-animation-delay: -1.875s;
     -o-animation-delay: -1.875s;
     animation-delay: -1.875s
 }
 
 .la-ball-spin>div:nth-child(8) {
     top: 18.179464974%;
     left: 18.1803700518%;
     -webkit-animation-delay: -2s;
     -moz-animation-delay: -2s;
     -o-animation-delay: -2s;
     animation-delay: -2s
 }
 
 .la-ball-spin.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-spin.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-spin.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-spin.la-2x>div {
     width: 16px;
     height: 16px;
     margin-top: -8px;
     margin-left: -8px
 }
 
 .la-ball-spin.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-spin.la-3x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 @-webkit-keyframes ball-spin {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -webkit-transform: scale(0);
         transform: scale(0)
     }
 }
 
 @-moz-keyframes ball-spin {
     0%,
     100% {
         opacity: 1;
         -moz-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -moz-transform: scale(0);
         transform: scale(0)
     }
 }
 
 @-o-keyframes ball-spin {
     0%,
     100% {
         opacity: 1;
         -o-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -o-transform: scale(0);
         transform: scale(0)
     }
 }
 
 @keyframes ball-spin {
     0%,
     100% {
         opacity: 1;
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
     20% {
         opacity: 1
     }
     80% {
         opacity: 0;
         -webkit-transform: scale(0);
         -moz-transform: scale(0);
         -o-transform: scale(0);
         transform: scale(0)
     }
 }
 
 .la-ball-square-clockwise-spin,
 .la-ball-square-clockwise-spin>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-square-clockwise-spin {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-square-clockwise-spin.la-dark {
     color: #333
 }
 
 .la-ball-square-clockwise-spin>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-square-clockwise-spin {
     width: 26px;
     height: 26px
 }
 
 .la-ball-square-clockwise-spin>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 12px;
     height: 12px;
     margin-top: -6px;
     margin-left: -6px;
     border-radius: 100%;
     -webkit-animation: ball-square-clockwise-spin 1s infinite ease-in-out;
     -moz-animation: ball-square-clockwise-spin 1s infinite ease-in-out;
     -o-animation: ball-square-clockwise-spin 1s infinite ease-in-out;
     animation: ball-square-clockwise-spin 1s infinite ease-in-out
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(1) {
     top: 0;
     left: 0;
     -webkit-animation-delay: -.875s;
     -moz-animation-delay: -.875s;
     -o-animation-delay: -.875s;
     animation-delay: -.875s
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(2) {
     top: 0;
     left: 50%;
     -webkit-animation-delay: -.75s;
     -moz-animation-delay: -.75s;
     -o-animation-delay: -.75s;
     animation-delay: -.75s
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(3) {
     top: 0;
     left: 100%;
     -webkit-animation-delay: -.625s;
     -moz-animation-delay: -.625s;
     -o-animation-delay: -.625s;
     animation-delay: -.625s
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(4) {
     top: 50%;
     left: 100%;
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(5) {
     top: 100%;
     left: 100%;
     -webkit-animation-delay: -.375s;
     -moz-animation-delay: -.375s;
     -o-animation-delay: -.375s;
     animation-delay: -.375s
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(6) {
     top: 100%;
     left: 50%;
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(7) {
     top: 100%;
     left: 0;
     -webkit-animation-delay: -.125s;
     -moz-animation-delay: -.125s;
     -o-animation-delay: -.125s;
     animation-delay: -.125s
 }
 
 .la-ball-square-clockwise-spin>div:nth-child(8) {
     top: 50%;
     left: 0;
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-ball-square-clockwise-spin.la-sm {
     width: 12px;
     height: 12px
 }
 
 .la-ball-square-clockwise-spin.la-sm>div {
     width: 6px;
     height: 6px;
     margin-top: -3px;
     margin-left: -3px
 }
 
 .la-ball-square-clockwise-spin.la-2x {
     width: 52px;
     height: 52px
 }
 
 .la-ball-square-clockwise-spin.la-2x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 .la-ball-square-clockwise-spin.la-3x {
     width: 78px;
     height: 78px
 }
 
 .la-ball-square-clockwise-spin.la-3x>div {
     width: 36px;
     height: 36px;
     margin-top: -18px;
     margin-left: -18px
 }
 
 @-webkit-keyframes ball-square-clockwise-spin {
     0%,
     40%,
     100% {
         -webkit-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-square-clockwise-spin {
     0%,
     40%,
     100% {
         -moz-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-square-clockwise-spin {
     0%,
     40%,
     100% {
         -o-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-square-clockwise-spin {
     0%,
     40%,
     100% {
         -webkit-transform: scale(0.4);
         -moz-transform: scale(0.4);
         -o-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-square-spin,
 .la-ball-square-spin>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-square-spin {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-square-spin.la-dark {
     color: #333
 }
 
 .la-ball-square-spin>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-square-spin {
     width: 26px;
     height: 26px
 }
 
 .la-ball-square-spin>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 12px;
     height: 12px;
     margin-top: -6px;
     margin-left: -6px;
     border-radius: 100%;
     -webkit-animation: ball-square-spin 1s infinite ease-in-out;
     -moz-animation: ball-square-spin 1s infinite ease-in-out;
     -o-animation: ball-square-spin 1s infinite ease-in-out;
     animation: ball-square-spin 1s infinite ease-in-out
 }
 
 .la-ball-square-spin>div:nth-child(1) {
     top: 0;
     left: 0;
     -webkit-animation-delay: -1.125s;
     -moz-animation-delay: -1.125s;
     -o-animation-delay: -1.125s;
     animation-delay: -1.125s
 }
 
 .la-ball-square-spin>div:nth-child(2) {
     top: 0;
     left: 50%;
     -webkit-animation-delay: -1.25s;
     -moz-animation-delay: -1.25s;
     -o-animation-delay: -1.25s;
     animation-delay: -1.25s
 }
 
 .la-ball-square-spin>div:nth-child(3) {
     top: 0;
     left: 100%;
     -webkit-animation-delay: -1.375s;
     -moz-animation-delay: -1.375s;
     -o-animation-delay: -1.375s;
     animation-delay: -1.375s
 }
 
 .la-ball-square-spin>div:nth-child(4) {
     top: 50%;
     left: 100%;
     -webkit-animation-delay: -1.5s;
     -moz-animation-delay: -1.5s;
     -o-animation-delay: -1.5s;
     animation-delay: -1.5s
 }
 
 .la-ball-square-spin>div:nth-child(5) {
     top: 100%;
     left: 100%;
     -webkit-animation-delay: -1.625s;
     -moz-animation-delay: -1.625s;
     -o-animation-delay: -1.625s;
     animation-delay: -1.625s
 }
 
 .la-ball-square-spin>div:nth-child(6) {
     top: 100%;
     left: 50%;
     -webkit-animation-delay: -1.75s;
     -moz-animation-delay: -1.75s;
     -o-animation-delay: -1.75s;
     animation-delay: -1.75s
 }
 
 .la-ball-square-spin>div:nth-child(7) {
     top: 100%;
     left: 0;
     -webkit-animation-delay: -1.875s;
     -moz-animation-delay: -1.875s;
     -o-animation-delay: -1.875s;
     animation-delay: -1.875s
 }
 
 .la-ball-square-spin>div:nth-child(8) {
     top: 50%;
     left: 0;
     -webkit-animation-delay: -2s;
     -moz-animation-delay: -2s;
     -o-animation-delay: -2s;
     animation-delay: -2s
 }
 
 .la-ball-square-spin.la-sm {
     width: 12px;
     height: 12px
 }
 
 .la-ball-square-spin.la-sm>div {
     width: 6px;
     height: 6px;
     margin-top: -3px;
     margin-left: -3px
 }
 
 .la-ball-square-spin.la-2x {
     width: 52px;
     height: 52px
 }
 
 .la-ball-square-spin.la-2x>div {
     width: 24px;
     height: 24px;
     margin-top: -12px;
     margin-left: -12px
 }
 
 .la-ball-square-spin.la-3x {
     width: 78px;
     height: 78px
 }
 
 .la-ball-square-spin.la-3x>div {
     width: 36px;
     height: 36px;
     margin-top: -18px;
     margin-left: -18px
 }
 
 @-webkit-keyframes ball-square-spin {
     0%,
     40%,
     100% {
         -webkit-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -webkit-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-moz-keyframes ball-square-spin {
     0%,
     40%,
     100% {
         -moz-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -moz-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @-o-keyframes ball-square-spin {
     0%,
     40%,
     100% {
         -o-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 @keyframes ball-square-spin {
     0%,
     40%,
     100% {
         -webkit-transform: scale(0.4);
         -moz-transform: scale(0.4);
         -o-transform: scale(0.4);
         transform: scale(0.4)
     }
     70% {
         -webkit-transform: scale(1);
         -moz-transform: scale(1);
         -o-transform: scale(1);
         transform: scale(1)
     }
 }
 
 .la-ball-triangle-path,
 .la-ball-triangle-path>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-triangle-path {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-triangle-path.la-dark {
     color: #333
 }
 
 .la-ball-triangle-path>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-triangle-path {
     width: 32px;
     height: 32px
 }
 
 .la-ball-triangle-path>div {
     position: absolute;
     top: 0;
     left: 0;
     width: 10px;
     height: 10px;
     border-radius: 100%
 }
 
 .la-ball-triangle-path>div:nth-child(1) {
     -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
     -moz-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
     -o-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
     animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite
 }
 
 .la-ball-triangle-path>div:nth-child(2) {
     -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
     -moz-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
     -o-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
     animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite
 }
 
 .la-ball-triangle-path>div:nth-child(3) {
     -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
     -moz-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
     -o-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
     animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite
 }
 
 .la-ball-triangle-path.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-triangle-path.la-sm>div {
     width: 4px;
     height: 4px
 }
 
 .la-ball-triangle-path.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-triangle-path.la-2x>div {
     width: 20px;
     height: 20px
 }
 
 .la-ball-triangle-path.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-triangle-path.la-3x>div {
     width: 30px;
     height: 30px
 }
 
 @-webkit-keyframes ball-triangle-path-ball-one {
     0% {
         -webkit-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -webkit-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -webkit-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -webkit-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
 }
 
 @-moz-keyframes ball-triangle-path-ball-one {
     0% {
         -moz-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -moz-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -moz-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -moz-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
 }
 
 @-o-keyframes ball-triangle-path-ball-one {
     0% {
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
 }
 
 @keyframes ball-triangle-path-ball-one {
     0% {
         -webkit-transform: translate(0, 220%);
         -moz-transform: translate(0, 220%);
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -webkit-transform: translate(110%, 0);
         -moz-transform: translate(110%, 0);
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -webkit-transform: translate(220%, 220%);
         -moz-transform: translate(220%, 220%);
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -webkit-transform: translate(0, 220%);
         -moz-transform: translate(0, 220%);
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
 }
 
 @-webkit-keyframes ball-triangle-path-ball-two {
     0% {
         -webkit-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -webkit-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -webkit-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -webkit-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
 }
 
 @-moz-keyframes ball-triangle-path-ball-two {
     0% {
         -moz-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -moz-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -moz-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -moz-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
 }
 
 @-o-keyframes ball-triangle-path-ball-two {
     0% {
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
 }
 
 @keyframes ball-triangle-path-ball-two {
     0% {
         -webkit-transform: translate(110%, 0);
         -moz-transform: translate(110%, 0);
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -webkit-transform: translate(220%, 220%);
         -moz-transform: translate(220%, 220%);
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -webkit-transform: translate(0, 220%);
         -moz-transform: translate(0, 220%);
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -webkit-transform: translate(110%, 0);
         -moz-transform: translate(110%, 0);
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
 }
 
 @-webkit-keyframes ball-triangle-path-ball-tree {
     0% {
         -webkit-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -webkit-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -webkit-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -webkit-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
 }
 
 @-moz-keyframes ball-triangle-path-ball-tree {
     0% {
         -moz-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -moz-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -moz-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -moz-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
 }
 
 @-o-keyframes ball-triangle-path-ball-tree {
     0% {
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
 }
 
 @keyframes ball-triangle-path-ball-tree {
     0% {
         -webkit-transform: translate(220%, 220%);
         -moz-transform: translate(220%, 220%);
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
     17% {
         opacity: .25
     }
     33% {
         opacity: 1;
         -webkit-transform: translate(0, 220%);
         -moz-transform: translate(0, 220%);
         -o-transform: translate(0, 220%);
         transform: translate(0, 220%)
     }
     50% {
         opacity: .25
     }
     66% {
         opacity: 1;
         -webkit-transform: translate(110%, 0);
         -moz-transform: translate(110%, 0);
         -o-transform: translate(110%, 0);
         transform: translate(110%, 0)
     }
     83% {
         opacity: .25
     }
     100% {
         opacity: 1;
         -webkit-transform: translate(220%, 220%);
         -moz-transform: translate(220%, 220%);
         -o-transform: translate(220%, 220%);
         transform: translate(220%, 220%)
     }
 }
 
 .la-ball-zig-zag-deflect,
 .la-ball-zig-zag-deflect>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-zig-zag-deflect {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-zig-zag-deflect.la-dark {
     color: #333
 }
 
 .la-ball-zig-zag-deflect>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-zig-zag-deflect {
     position: relative;
     width: 32px;
     height: 32px
 }
 
 .la-ball-zig-zag-deflect>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 10px;
     height: 10px;
     margin-top: -5px;
     margin-left: -5px;
     border-radius: 100%
 }
 
 .la-ball-zig-zag-deflect>div:first-child {
     -webkit-animation: ball-zig-deflect 1.5s 0s infinite linear;
     -moz-animation: ball-zig-deflect 1.5s 0s infinite linear;
     -o-animation: ball-zig-deflect 1.5s 0s infinite linear;
     animation: ball-zig-deflect 1.5s 0s infinite linear
 }
 
 .la-ball-zig-zag-deflect>div:last-child {
     -webkit-animation: ball-zag-deflect 1.5s 0s infinite linear;
     -moz-animation: ball-zag-deflect 1.5s 0s infinite linear;
     -o-animation: ball-zag-deflect 1.5s 0s infinite linear;
     animation: ball-zag-deflect 1.5s 0s infinite linear
 }
 
 .la-ball-zig-zag-deflect.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-zig-zag-deflect.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-zig-zag-deflect.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-zig-zag-deflect.la-2x>div {
     width: 20px;
     height: 20px;
     margin-top: -10px;
     margin-left: -10px
 }
 
 .la-ball-zig-zag-deflect.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-zig-zag-deflect.la-3x>div {
     width: 30px;
     height: 30px;
     margin-top: -15px;
     margin-left: -15px
 }
 
 @-webkit-keyframes ball-zig-deflect {
     17% {
         -webkit-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     34% {
         -webkit-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     50% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -webkit-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     84% {
         -webkit-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-moz-keyframes ball-zig-deflect {
     17% {
         -moz-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     34% {
         -moz-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     50% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -moz-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     84% {
         -moz-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     100% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-o-keyframes ball-zig-deflect {
     17% {
         -o-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     34% {
         -o-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     50% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -o-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     84% {
         -o-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     100% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @keyframes ball-zig-deflect {
     17% {
         -webkit-transform: translate(-80%, -160%);
         -moz-transform: translate(-80%, -160%);
         -o-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     34% {
         -webkit-transform: translate(80%, -160%);
         -moz-transform: translate(80%, -160%);
         -o-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     50% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -webkit-transform: translate(80%, -160%);
         -moz-transform: translate(80%, -160%);
         -o-transform: translate(80%, -160%);
         transform: translate(80%, -160%)
     }
     84% {
         -webkit-transform: translate(-80%, -160%);
         -moz-transform: translate(-80%, -160%);
         -o-transform: translate(-80%, -160%);
         transform: translate(-80%, -160%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-webkit-keyframes ball-zag-deflect {
     17% {
         -webkit-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     34% {
         -webkit-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     50% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -webkit-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     84% {
         -webkit-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-moz-keyframes ball-zag-deflect {
     17% {
         -moz-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     34% {
         -moz-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     50% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -moz-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     84% {
         -moz-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     100% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-o-keyframes ball-zag-deflect {
     17% {
         -o-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     34% {
         -o-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     50% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -o-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     84% {
         -o-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     100% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @keyframes ball-zag-deflect {
     17% {
         -webkit-transform: translate(80%, 160%);
         -moz-transform: translate(80%, 160%);
         -o-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     34% {
         -webkit-transform: translate(-80%, 160%);
         -moz-transform: translate(-80%, 160%);
         -o-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     50% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     67% {
         -webkit-transform: translate(-80%, 160%);
         -moz-transform: translate(-80%, 160%);
         -o-transform: translate(-80%, 160%);
         transform: translate(-80%, 160%)
     }
     84% {
         -webkit-transform: translate(80%, 160%);
         -moz-transform: translate(80%, 160%);
         -o-transform: translate(80%, 160%);
         transform: translate(80%, 160%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 .la-ball-zig-zag,
 .la-ball-zig-zag>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-ball-zig-zag {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-ball-zig-zag.la-dark {
     color: #333
 }
 
 .la-ball-zig-zag>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-ball-zig-zag {
     position: relative;
     width: 32px;
     height: 32px
 }
 
 .la-ball-zig-zag>div {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 10px;
     height: 10px;
     margin-top: -5px;
     margin-left: -5px;
     border-radius: 100%
 }
 
 .la-ball-zig-zag>div:first-child {
     -webkit-animation: ball-zig-effect 0.7s 0s infinite linear;
     -moz-animation: ball-zig-effect 0.7s 0s infinite linear;
     -o-animation: ball-zig-effect 0.7s 0s infinite linear;
     animation: ball-zig-effect 0.7s 0s infinite linear
 }
 
 .la-ball-zig-zag>div:last-child {
     -webkit-animation: ball-zag-effect 0.7s 0s infinite linear;
     -moz-animation: ball-zag-effect 0.7s 0s infinite linear;
     -o-animation: ball-zag-effect 0.7s 0s infinite linear;
     animation: ball-zag-effect 0.7s 0s infinite linear
 }
 
 .la-ball-zig-zag.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-ball-zig-zag.la-sm>div {
     width: 4px;
     height: 4px;
     margin-top: -2px;
     margin-left: -2px
 }
 
 .la-ball-zig-zag.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-ball-zig-zag.la-2x>div {
     width: 20px;
     height: 20px;
     margin-top: -10px;
     margin-left: -10px
 }
 
 .la-ball-zig-zag.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-ball-zig-zag.la-3x>div {
     width: 30px;
     height: 30px;
     margin-top: -15px;
     margin-left: -15px
 }
 
 @-webkit-keyframes ball-zig-effect {
     0% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -webkit-transform: translate(-75%, -150%);
         transform: translate(-75%, -150%)
     }
     66% {
         -webkit-transform: translate(75%, -150%);
         transform: translate(75%, -150%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-moz-keyframes ball-zig-effect {
     0% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -moz-transform: translate(-75%, -150%);
         transform: translate(-75%, -150%)
     }
     66% {
         -moz-transform: translate(75%, -150%);
         transform: translate(75%, -150%)
     }
     100% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-o-keyframes ball-zig-effect {
     0% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -o-transform: translate(-75%, -150%);
         transform: translate(-75%, -150%)
     }
     66% {
         -o-transform: translate(75%, -150%);
         transform: translate(75%, -150%)
     }
     100% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @keyframes ball-zig-effect {
     0% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -webkit-transform: translate(-75%, -150%);
         -moz-transform: translate(-75%, -150%);
         -o-transform: translate(-75%, -150%);
         transform: translate(-75%, -150%)
     }
     66% {
         -webkit-transform: translate(75%, -150%);
         -moz-transform: translate(75%, -150%);
         -o-transform: translate(75%, -150%);
         transform: translate(75%, -150%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-webkit-keyframes ball-zag-effect {
     0% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -webkit-transform: translate(75%, 150%);
         transform: translate(75%, 150%)
     }
     66% {
         -webkit-transform: translate(-75%, 150%);
         transform: translate(-75%, 150%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-moz-keyframes ball-zag-effect {
     0% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -moz-transform: translate(75%, 150%);
         transform: translate(75%, 150%)
     }
     66% {
         -moz-transform: translate(-75%, 150%);
         transform: translate(-75%, 150%)
     }
     100% {
         -moz-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @-o-keyframes ball-zag-effect {
     0% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -o-transform: translate(75%, 150%);
         transform: translate(75%, 150%)
     }
     66% {
         -o-transform: translate(-75%, 150%);
         transform: translate(-75%, 150%)
     }
     100% {
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 @keyframes ball-zag-effect {
     0% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
     33% {
         -webkit-transform: translate(75%, 150%);
         -moz-transform: translate(75%, 150%);
         -o-transform: translate(75%, 150%);
         transform: translate(75%, 150%)
     }
     66% {
         -webkit-transform: translate(-75%, 150%);
         -moz-transform: translate(-75%, 150%);
         -o-transform: translate(-75%, 150%);
         transform: translate(-75%, 150%)
     }
     100% {
         -webkit-transform: translate(0, 0);
         -moz-transform: translate(0, 0);
         -o-transform: translate(0, 0);
         transform: translate(0, 0)
     }
 }
 
 .la-cog,
 .la-cog>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-cog {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-cog.la-dark {
     color: #333
 }
 
 .la-cog>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-cog {
     width: 31px;
     height: 31px
 }
 
 .la-cog>div {
     width: 100%;
     height: 100%;
     background-color: transparent;
     border-style: dashed;
     border-width: 2px;
     border-radius: 100%;
     -webkit-animation: cog-rotate 4s linear infinite;
     -moz-animation: cog-rotate 4s linear infinite;
     -o-animation: cog-rotate 4s linear infinite;
     animation: cog-rotate 4s linear infinite
 }
 
 .la-cog>div:after {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     content: "";
     border: 2px solid currentColor;
     border-radius: 100%
 }
 
 .la-cog.la-sm {
     width: 15px;
     height: 15px
 }
 
 .la-cog.la-sm>div {
     border-width: 1px
 }
 
 .la-cog.la-sm>div:after {
     border-width: 1px
 }
 
 .la-cog.la-2x {
     width: 61px;
     height: 61px
 }
 
 .la-cog.la-2x>div {
     border-width: 4px
 }
 
 .la-cog.la-2x>div:after {
     border-width: 4px
 }
 
 .la-cog.la-3x {
     width: 91px;
     height: 91px
 }
 
 .la-cog.la-3x>div {
     border-width: 6px
 }
 
 .la-cog.la-3x>div:after {
     border-width: 6px
 }
 
 @-webkit-keyframes cog-rotate {
     0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes cog-rotate {
     0% {
         -moz-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes cog-rotate {
     0% {
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes cog-rotate {
     0% {
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 .la-cube-transition,
 .la-cube-transition>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-cube-transition {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-cube-transition.la-dark {
     color: #333
 }
 
 .la-cube-transition>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-cube-transition {
     width: 32px;
     height: 32px
 }
 
 .la-cube-transition>div {
     position: absolute;
     top: 0;
     left: 0;
     width: 14px;
     height: 14px;
     margin-top: -7px;
     margin-left: -7px;
     border-radius: 0;
     -webkit-animation: cube-transition 1.6s 0s infinite ease-in-out;
     -moz-animation: cube-transition 1.6s 0s infinite ease-in-out;
     -o-animation: cube-transition 1.6s 0s infinite ease-in-out;
     animation: cube-transition 1.6s 0s infinite ease-in-out
 }
 
 .la-cube-transition>div:last-child {
     -webkit-animation-delay: -.8s;
     -moz-animation-delay: -.8s;
     -o-animation-delay: -.8s;
     animation-delay: -.8s
 }
 
 .la-cube-transition.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-cube-transition.la-sm>div {
     width: 6px;
     height: 6px;
     margin-top: -3px;
     margin-left: -3px
 }
 
 .la-cube-transition.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-cube-transition.la-2x>div {
     width: 28px;
     height: 28px;
     margin-top: -14px;
     margin-left: -14px
 }
 
 .la-cube-transition.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-cube-transition.la-3x>div {
     width: 42px;
     height: 42px;
     margin-top: -21px;
     margin-left: -21px
 }
 
 @-webkit-keyframes cube-transition {
     25% {
         top: 0;
         left: 100%;
         -webkit-transform: scale(0.5) rotate(-90deg);
         transform: scale(0.5) rotate(-90deg)
     }
     50% {
         top: 100%;
         left: 100%;
         -webkit-transform: scale(1) rotate(-180deg);
         transform: scale(1) rotate(-180deg)
     }
     75% {
         top: 100%;
         left: 0;
         -webkit-transform: scale(0.5) rotate(-270deg);
         transform: scale(0.5) rotate(-270deg)
     }
     100% {
         top: 0;
         left: 0;
         -webkit-transform: scale(1) rotate(-360deg);
         transform: scale(1) rotate(-360deg)
     }
 }
 
 @-moz-keyframes cube-transition {
     25% {
         top: 0;
         left: 100%;
         -moz-transform: scale(0.5) rotate(-90deg);
         transform: scale(0.5) rotate(-90deg)
     }
     50% {
         top: 100%;
         left: 100%;
         -moz-transform: scale(1) rotate(-180deg);
         transform: scale(1) rotate(-180deg)
     }
     75% {
         top: 100%;
         left: 0;
         -moz-transform: scale(0.5) rotate(-270deg);
         transform: scale(0.5) rotate(-270deg)
     }
     100% {
         top: 0;
         left: 0;
         -moz-transform: scale(1) rotate(-360deg);
         transform: scale(1) rotate(-360deg)
     }
 }
 
 @-o-keyframes cube-transition {
     25% {
         top: 0;
         left: 100%;
         -o-transform: scale(0.5) rotate(-90deg);
         transform: scale(0.5) rotate(-90deg)
     }
     50% {
         top: 100%;
         left: 100%;
         -o-transform: scale(1) rotate(-180deg);
         transform: scale(1) rotate(-180deg)
     }
     75% {
         top: 100%;
         left: 0;
         -o-transform: scale(0.5) rotate(-270deg);
         transform: scale(0.5) rotate(-270deg)
     }
     100% {
         top: 0;
         left: 0;
         -o-transform: scale(1) rotate(-360deg);
         transform: scale(1) rotate(-360deg)
     }
 }
 
 @keyframes cube-transition {
     25% {
         top: 0;
         left: 100%;
         -webkit-transform: scale(0.5) rotate(-90deg);
         -moz-transform: scale(0.5) rotate(-90deg);
         -o-transform: scale(0.5) rotate(-90deg);
         transform: scale(0.5) rotate(-90deg)
     }
     50% {
         top: 100%;
         left: 100%;
         -webkit-transform: scale(1) rotate(-180deg);
         -moz-transform: scale(1) rotate(-180deg);
         -o-transform: scale(1) rotate(-180deg);
         transform: scale(1) rotate(-180deg)
     }
     75% {
         top: 100%;
         left: 0;
         -webkit-transform: scale(0.5) rotate(-270deg);
         -moz-transform: scale(0.5) rotate(-270deg);
         -o-transform: scale(0.5) rotate(-270deg);
         transform: scale(0.5) rotate(-270deg)
     }
     100% {
         top: 0;
         left: 0;
         -webkit-transform: scale(1) rotate(-360deg);
         -moz-transform: scale(1) rotate(-360deg);
         -o-transform: scale(1) rotate(-360deg);
         transform: scale(1) rotate(-360deg)
     }
 }
 
 .la-fire,
 .la-fire>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-fire {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-fire.la-dark {
     color: #333
 }
 
 .la-fire>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-fire {
     width: 32px;
     height: 32px
 }
 
 .la-fire>div {
     position: absolute;
     bottom: 0;
     left: 50%;
     width: 12px;
     height: 12px;
     border-radius: 0;
     border-radius: 2px;
     -webkit-transform: translateY(0) translateX(-50%) rotate(45deg) scale(0);
     -moz-transform: translateY(0) translateX(-50%) rotate(45deg) scale(0);
     -ms-transform: translateY(0) translateX(-50%) rotate(45deg) scale(0);
     -o-transform: translateY(0) translateX(-50%) rotate(45deg) scale(0);
     transform: translateY(0) translateX(-50%) rotate(45deg) scale(0);
     -webkit-animation: fire-diamonds 1.5s infinite linear;
     -moz-animation: fire-diamonds 1.5s infinite linear;
     -o-animation: fire-diamonds 1.5s infinite linear;
     animation: fire-diamonds 1.5s infinite linear
 }
 
 .la-fire>div:nth-child(1) {
     -webkit-animation-delay: -.85s;
     -moz-animation-delay: -.85s;
     -o-animation-delay: -.85s;
     animation-delay: -.85s
 }
 
 .la-fire>div:nth-child(2) {
     -webkit-animation-delay: -1.85s;
     -moz-animation-delay: -1.85s;
     -o-animation-delay: -1.85s;
     animation-delay: -1.85s
 }
 
 .la-fire>div:nth-child(3) {
     -webkit-animation-delay: -2.85s;
     -moz-animation-delay: -2.85s;
     -o-animation-delay: -2.85s;
     animation-delay: -2.85s
 }
 
 .la-fire.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-fire.la-sm>div {
     width: 6px;
     height: 6px
 }
 
 .la-fire.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-fire.la-2x>div {
     width: 24px;
     height: 24px
 }
 
 .la-fire.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-fire.la-3x>div {
     width: 36px;
     height: 36px
 }
 
 @-webkit-keyframes fire-diamonds {
     0% {
         -webkit-transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0)
     }
     50% {
         -webkit-transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
         transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)
     }
     100% {
         -webkit-transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)
     }
 }
 
 @-moz-keyframes fire-diamonds {
     0% {
         -moz-transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0)
     }
     50% {
         -moz-transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
         transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)
     }
     100% {
         -moz-transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)
     }
 }
 
 @-o-keyframes fire-diamonds {
     0% {
         -o-transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0)
     }
     50% {
         -o-transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
         transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)
     }
     100% {
         -o-transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)
     }
 }
 
 @keyframes fire-diamonds {
     0% {
         -webkit-transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
         -moz-transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
         -o-transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0)
     }
     50% {
         -webkit-transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
         -moz-transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
         -o-transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
         transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)
     }
     100% {
         -webkit-transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
         -moz-transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
         -o-transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
         transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)
     }
 }
 
 .la-line-scale-party,
 .la-line-scale-party>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-scale-party {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-scale-party.la-dark {
     color: #333
 }
 
 .la-line-scale-party>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-scale-party {
     width: 40px;
     height: 32px
 }
 
 .la-line-scale-party>div {
     width: 4px;
     height: 32px;
     margin: 2px;
     margin-top: 0;
     margin-bottom: 0;
     border-radius: 0;
     -webkit-animation-name: line-scale-party;
     -moz-animation-name: line-scale-party;
     -o-animation-name: line-scale-party;
     animation-name: line-scale-party;
     -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
     -o-animation-iteration-count: infinite;
     animation-iteration-count: infinite
 }
 
 .la-line-scale-party>div:nth-child(1) {
     -webkit-animation-duration: .43s;
     -moz-animation-duration: .43s;
     -o-animation-duration: .43s;
     animation-duration: .43s;
     -webkit-animation-delay: -.23s;
     -moz-animation-delay: -.23s;
     -o-animation-delay: -.23s;
     animation-delay: -.23s
 }
 
 .la-line-scale-party>div:nth-child(2) {
     -webkit-animation-duration: .62s;
     -moz-animation-duration: .62s;
     -o-animation-duration: .62s;
     animation-duration: .62s;
     -webkit-animation-delay: -.32s;
     -moz-animation-delay: -.32s;
     -o-animation-delay: -.32s;
     animation-delay: -.32s
 }
 
 .la-line-scale-party>div:nth-child(3) {
     -webkit-animation-duration: .43s;
     -moz-animation-duration: .43s;
     -o-animation-duration: .43s;
     animation-duration: .43s;
     -webkit-animation-delay: -.44s;
     -moz-animation-delay: -.44s;
     -o-animation-delay: -.44s;
     animation-delay: -.44s
 }
 
 .la-line-scale-party>div:nth-child(4) {
     -webkit-animation-duration: .8s;
     -moz-animation-duration: .8s;
     -o-animation-duration: .8s;
     animation-duration: .8s;
     -webkit-animation-delay: -.31s;
     -moz-animation-delay: -.31s;
     -o-animation-delay: -.31s;
     animation-delay: -.31s
 }
 
 .la-line-scale-party>div:nth-child(5) {
     -webkit-animation-duration: .74s;
     -moz-animation-duration: .74s;
     -o-animation-duration: .74s;
     animation-duration: .74s;
     -webkit-animation-delay: -.24s;
     -moz-animation-delay: -.24s;
     -o-animation-delay: -.24s;
     animation-delay: -.24s
 }
 
 .la-line-scale-party.la-sm {
     width: 20px;
     height: 16px
 }
 
 .la-line-scale-party.la-sm>div {
     width: 2px;
     height: 16px;
     margin: 1px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale-party.la-2x {
     width: 80px;
     height: 64px
 }
 
 .la-line-scale-party.la-2x>div {
     width: 8px;
     height: 64px;
     margin: 4px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale-party.la-3x {
     width: 120px;
     height: 96px
 }
 
 .la-line-scale-party.la-3x>div {
     width: 12px;
     height: 96px;
     margin: 6px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 @-webkit-keyframes line-scale-party {
     0% {
         -webkit-transform: scaleY(1);
         transform: scaleY(1)
     }
     50% {
         -webkit-transform: scaleY(0.3);
         transform: scaleY(0.3)
     }
     100% {
         -webkit-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 @-moz-keyframes line-scale-party {
     0% {
         -moz-transform: scaleY(1);
         transform: scaleY(1)
     }
     50% {
         -moz-transform: scaleY(0.3);
         transform: scaleY(0.3)
     }
     100% {
         -moz-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 @-o-keyframes line-scale-party {
     0% {
         -o-transform: scaleY(1);
         transform: scaleY(1)
     }
     50% {
         -o-transform: scaleY(0.3);
         transform: scaleY(0.3)
     }
     100% {
         -o-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 @keyframes line-scale-party {
     0% {
         -webkit-transform: scaleY(1);
         -moz-transform: scaleY(1);
         -o-transform: scaleY(1);
         transform: scaleY(1)
     }
     50% {
         -webkit-transform: scaleY(0.3);
         -moz-transform: scaleY(0.3);
         -o-transform: scaleY(0.3);
         transform: scaleY(0.3)
     }
     100% {
         -webkit-transform: scaleY(1);
         -moz-transform: scaleY(1);
         -o-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 .la-line-scale-pulse-out-rapid,
 .la-line-scale-pulse-out-rapid>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-scale-pulse-out-rapid {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-scale-pulse-out-rapid.la-dark {
     color: #333
 }
 
 .la-line-scale-pulse-out-rapid>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-scale-pulse-out-rapid {
     width: 40px;
     height: 32px
 }
 
 .la-line-scale-pulse-out-rapid>div {
     width: 4px;
     height: 32px;
     margin: 2px;
     margin-top: 0;
     margin-bottom: 0;
     border-radius: 0;
     -webkit-animation: line-scale-pulse-out-rapid 0.9s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
     -moz-animation: line-scale-pulse-out-rapid 0.9s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
     -o-animation: line-scale-pulse-out-rapid 0.9s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
     animation: line-scale-pulse-out-rapid 0.9s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78)
 }
 
 .la-line-scale-pulse-out-rapid>div:nth-child(3) {
     -webkit-animation-delay: -.9s;
     -moz-animation-delay: -.9s;
     -o-animation-delay: -.9s;
     animation-delay: -.9s
 }
 
 .la-line-scale-pulse-out-rapid>div:nth-child(2),
 .la-line-scale-pulse-out-rapid>div:nth-child(4) {
     -webkit-animation-delay: -.65s;
     -moz-animation-delay: -.65s;
     -o-animation-delay: -.65s;
     animation-delay: -.65s
 }
 
 .la-line-scale-pulse-out-rapid>div:nth-child(1),
 .la-line-scale-pulse-out-rapid>div:nth-child(5) {
     -webkit-animation-delay: -.4s;
     -moz-animation-delay: -.4s;
     -o-animation-delay: -.4s;
     animation-delay: -.4s
 }
 
 .la-line-scale-pulse-out-rapid.la-sm {
     width: 20px;
     height: 16px
 }
 
 .la-line-scale-pulse-out-rapid.la-sm>div {
     width: 2px;
     height: 16px;
     margin: 1px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale-pulse-out-rapid.la-2x {
     width: 80px;
     height: 64px
 }
 
 .la-line-scale-pulse-out-rapid.la-2x>div {
     width: 8px;
     height: 64px;
     margin: 4px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale-pulse-out-rapid.la-3x {
     width: 120px;
     height: 96px
 }
 
 .la-line-scale-pulse-out-rapid.la-3x>div {
     width: 12px;
     height: 96px;
     margin: 6px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 @-webkit-keyframes line-scale-pulse-out-rapid {
     0% {
         -webkit-transform: scaley(1);
         transform: scaley(1)
     }
     80% {
         -webkit-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     90% {
         -webkit-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 @-moz-keyframes line-scale-pulse-out-rapid {
     0% {
         -moz-transform: scaley(1);
         transform: scaley(1)
     }
     80% {
         -moz-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     90% {
         -moz-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 @-o-keyframes line-scale-pulse-out-rapid {
     0% {
         -o-transform: scaley(1);
         transform: scaley(1)
     }
     80% {
         -o-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     90% {
         -o-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 @keyframes line-scale-pulse-out-rapid {
     0% {
         -webkit-transform: scaley(1);
         -moz-transform: scaley(1);
         -o-transform: scaley(1);
         transform: scaley(1)
     }
     80% {
         -webkit-transform: scaley(0.3);
         -moz-transform: scaley(0.3);
         -o-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     90% {
         -webkit-transform: scaley(1);
         -moz-transform: scaley(1);
         -o-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 .la-line-scale-pulse-out,
 .la-line-scale-pulse-out>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-scale-pulse-out {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-scale-pulse-out.la-dark {
     color: #333
 }
 
 .la-line-scale-pulse-out>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-scale-pulse-out {
     width: 40px;
     height: 32px
 }
 
 .la-line-scale-pulse-out>div {
     width: 4px;
     height: 32px;
     margin: 2px;
     margin-top: 0;
     margin-bottom: 0;
     border-radius: 0;
     -webkit-animation: line-scale-pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
     -moz-animation: line-scale-pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
     -o-animation: line-scale-pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
     animation: line-scale-pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85)
 }
 
 .la-line-scale-pulse-out>div:nth-child(3) {
     -webkit-animation-delay: -.9s;
     -moz-animation-delay: -.9s;
     -o-animation-delay: -.9s;
     animation-delay: -.9s
 }
 
 .la-line-scale-pulse-out>div:nth-child(2),
 .la-line-scale-pulse-out>div:nth-child(4) {
     -webkit-animation-delay: -.7s;
     -moz-animation-delay: -.7s;
     -o-animation-delay: -.7s;
     animation-delay: -.7s
 }
 
 .la-line-scale-pulse-out>div:nth-child(1),
 .la-line-scale-pulse-out>div:nth-child(5) {
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-line-scale-pulse-out.la-sm {
     width: 20px;
     height: 16px
 }
 
 .la-line-scale-pulse-out.la-sm>div {
     width: 2px;
     height: 16px;
     margin: 1px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale-pulse-out.la-2x {
     width: 80px;
     height: 64px
 }
 
 .la-line-scale-pulse-out.la-2x>div {
     width: 8px;
     height: 64px;
     margin: 4px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale-pulse-out.la-3x {
     width: 120px;
     height: 96px
 }
 
 .la-line-scale-pulse-out.la-3x>div {
     width: 12px;
     height: 96px;
     margin: 6px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 @-webkit-keyframes line-scale-pulse-out {
     0% {
         -webkit-transform: scaley(1);
         transform: scaley(1)
     }
     50% {
         -webkit-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     100% {
         -webkit-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 @-moz-keyframes line-scale-pulse-out {
     0% {
         -moz-transform: scaley(1);
         transform: scaley(1)
     }
     50% {
         -moz-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     100% {
         -moz-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 @-o-keyframes line-scale-pulse-out {
     0% {
         -o-transform: scaley(1);
         transform: scaley(1)
     }
     50% {
         -o-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     100% {
         -o-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 @keyframes line-scale-pulse-out {
     0% {
         -webkit-transform: scaley(1);
         -moz-transform: scaley(1);
         -o-transform: scaley(1);
         transform: scaley(1)
     }
     50% {
         -webkit-transform: scaley(0.3);
         -moz-transform: scaley(0.3);
         -o-transform: scaley(0.3);
         transform: scaley(0.3)
     }
     100% {
         -webkit-transform: scaley(1);
         -moz-transform: scaley(1);
         -o-transform: scaley(1);
         transform: scaley(1)
     }
 }
 
 .la-line-scale,
 .la-line-scale>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-scale {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-scale.la-dark {
     color: #333
 }
 
 .la-line-scale>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-scale {
     width: 40px;
     height: 32px
 }
 
 .la-line-scale>div {
     width: 4px;
     height: 32px;
     margin: 2px;
     margin-top: 0;
     margin-bottom: 0;
     border-radius: 0;
     -webkit-animation: line-scale 1.2s infinite ease;
     -moz-animation: line-scale 1.2s infinite ease;
     -o-animation: line-scale 1.2s infinite ease;
     animation: line-scale 1.2s infinite ease
 }
 
 .la-line-scale>div:nth-child(1) {
     -webkit-animation-delay: -1.2s;
     -moz-animation-delay: -1.2s;
     -o-animation-delay: -1.2s;
     animation-delay: -1.2s
 }
 
 .la-line-scale>div:nth-child(2) {
     -webkit-animation-delay: -1.1s;
     -moz-animation-delay: -1.1s;
     -o-animation-delay: -1.1s;
     animation-delay: -1.1s
 }
 
 .la-line-scale>div:nth-child(3) {
     -webkit-animation-delay: -1s;
     -moz-animation-delay: -1s;
     -o-animation-delay: -1s;
     animation-delay: -1s
 }
 
 .la-line-scale>div:nth-child(4) {
     -webkit-animation-delay: -.9s;
     -moz-animation-delay: -.9s;
     -o-animation-delay: -.9s;
     animation-delay: -.9s
 }
 
 .la-line-scale>div:nth-child(5) {
     -webkit-animation-delay: -.8s;
     -moz-animation-delay: -.8s;
     -o-animation-delay: -.8s;
     animation-delay: -.8s
 }
 
 .la-line-scale.la-sm {
     width: 20px;
     height: 16px
 }
 
 .la-line-scale.la-sm>div {
     width: 2px;
     height: 16px;
     margin: 1px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale.la-2x {
     width: 80px;
     height: 64px
 }
 
 .la-line-scale.la-2x>div {
     width: 8px;
     height: 64px;
     margin: 4px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 .la-line-scale.la-3x {
     width: 120px;
     height: 96px
 }
 
 .la-line-scale.la-3x>div {
     width: 12px;
     height: 96px;
     margin: 6px;
     margin-top: 0;
     margin-bottom: 0
 }
 
 @-webkit-keyframes line-scale {
     0%,
     40%,
     100% {
         -webkit-transform: scaleY(0.4);
         transform: scaleY(0.4)
     }
     20% {
         -webkit-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 @-moz-keyframes line-scale {
     0%,
     40%,
     100% {
         -webkit-transform: scaleY(0.4);
         -moz-transform: scaleY(0.4);
         transform: scaleY(0.4)
     }
     20% {
         -webkit-transform: scaleY(1);
         -moz-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 @-o-keyframes line-scale {
     0%,
     40%,
     100% {
         -webkit-transform: scaleY(0.4);
         -o-transform: scaleY(0.4);
         transform: scaleY(0.4)
     }
     20% {
         -webkit-transform: scaleY(1);
         -o-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 @keyframes line-scale {
     0%,
     40%,
     100% {
         -webkit-transform: scaleY(0.4);
         -moz-transform: scaleY(0.4);
         -o-transform: scaleY(0.4);
         transform: scaleY(0.4)
     }
     20% {
         -webkit-transform: scaleY(1);
         -moz-transform: scaleY(1);
         -o-transform: scaleY(1);
         transform: scaleY(1)
     }
 }
 
 .la-line-spin-clockwise-fade-rotating,
 .la-line-spin-clockwise-fade-rotating>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-spin-clockwise-fade-rotating {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-spin-clockwise-fade-rotating.la-dark {
     color: #333
 }
 
 .la-line-spin-clockwise-fade-rotating>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-spin-clockwise-fade-rotating {
     width: 32px;
     height: 32px;
     -webkit-animation: line-spin-clockwise-fade-rotating-rotate 6s infinite linear;
     -moz-animation: line-spin-clockwise-fade-rotating-rotate 6s infinite linear;
     -o-animation: line-spin-clockwise-fade-rotating-rotate 6s infinite linear;
     animation: line-spin-clockwise-fade-rotating-rotate 6s infinite linear
 }
 
 .la-line-spin-clockwise-fade-rotating>div {
     position: absolute;
     width: 2px;
     height: 10px;
     margin: 2px;
     margin-top: -5px;
     margin-left: -1px;
     border-radius: 0;
     -webkit-animation: line-spin-clockwise-fade-rotating 1s infinite ease-in-out;
     -moz-animation: line-spin-clockwise-fade-rotating 1s infinite ease-in-out;
     -o-animation: line-spin-clockwise-fade-rotating 1s infinite ease-in-out;
     animation: line-spin-clockwise-fade-rotating 1s infinite ease-in-out
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(1) {
     top: 15%;
     left: 50%;
     -webkit-transform: rotate(0deg);
     -moz-transform: rotate(0deg);
     -ms-transform: rotate(0deg);
     -o-transform: rotate(0deg);
     transform: rotate(0deg);
     -webkit-animation-delay: -.875s;
     -moz-animation-delay: -.875s;
     -o-animation-delay: -.875s;
     animation-delay: -.875s
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(2) {
     top: 25.2512626585%;
     left: 74.7487373415%;
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
     -webkit-animation-delay: -.75s;
     -moz-animation-delay: -.75s;
     -o-animation-delay: -.75s;
     animation-delay: -.75s
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(3) {
     top: 50%;
     left: 85%;
     -webkit-transform: rotate(90deg);
     -moz-transform: rotate(90deg);
     -ms-transform: rotate(90deg);
     -o-transform: rotate(90deg);
     transform: rotate(90deg);
     -webkit-animation-delay: -.625s;
     -moz-animation-delay: -.625s;
     -o-animation-delay: -.625s;
     animation-delay: -.625s
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(4) {
     top: 74.7487373415%;
     left: 74.7487373415%;
     -webkit-transform: rotate(135deg);
     -moz-transform: rotate(135deg);
     -ms-transform: rotate(135deg);
     -o-transform: rotate(135deg);
     transform: rotate(135deg);
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(5) {
     top: 84.9999999974%;
     left: 50.0000000004%;
     -webkit-transform: rotate(180deg);
     -moz-transform: rotate(180deg);
     -ms-transform: rotate(180deg);
     -o-transform: rotate(180deg);
     transform: rotate(180deg);
     -webkit-animation-delay: -.375s;
     -moz-animation-delay: -.375s;
     -o-animation-delay: -.375s;
     animation-delay: -.375s
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(6) {
     top: 74.7487369862%;
     left: 25.2512627193%;
     -webkit-transform: rotate(225deg);
     -moz-transform: rotate(225deg);
     -ms-transform: rotate(225deg);
     -o-transform: rotate(225deg);
     transform: rotate(225deg);
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(7) {
     top: 49.9999806189%;
     left: 15.0000039834%;
     -webkit-transform: rotate(270deg);
     -moz-transform: rotate(270deg);
     -ms-transform: rotate(270deg);
     -o-transform: rotate(270deg);
     transform: rotate(270deg);
     -webkit-animation-delay: -.125s;
     -moz-animation-delay: -.125s;
     -o-animation-delay: -.125s;
     animation-delay: -.125s
 }
 
 .la-line-spin-clockwise-fade-rotating>div:nth-child(8) {
     top: 25.2506949798%;
     left: 25.2513989292%;
     -webkit-transform: rotate(315deg);
     -moz-transform: rotate(315deg);
     -ms-transform: rotate(315deg);
     -o-transform: rotate(315deg);
     transform: rotate(315deg);
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-line-spin-clockwise-fade-rotating.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-line-spin-clockwise-fade-rotating.la-sm>div {
     width: 1px;
     height: 4px;
     margin-top: -2px;
     margin-left: 0
 }
 
 .la-line-spin-clockwise-fade-rotating.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-line-spin-clockwise-fade-rotating.la-2x>div {
     width: 4px;
     height: 20px;
     margin-top: -10px;
     margin-left: -2px
 }
 
 .la-line-spin-clockwise-fade-rotating.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-line-spin-clockwise-fade-rotating.la-3x>div {
     width: 6px;
     height: 30px;
     margin-top: -15px;
     margin-left: -3px
 }
 
 @-webkit-keyframes line-spin-clockwise-fade-rotating-rotate {
     100% {
         -webkit-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @-moz-keyframes line-spin-clockwise-fade-rotating-rotate {
     100% {
         -moz-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @-o-keyframes line-spin-clockwise-fade-rotating-rotate {
     100% {
         -o-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @keyframes line-spin-clockwise-fade-rotating-rotate {
     100% {
         -webkit-transform: rotate(-360deg);
         -moz-transform: rotate(-360deg);
         -o-transform: rotate(-360deg);
         transform: rotate(-360deg)
     }
 }
 
 @-webkit-keyframes line-spin-clockwise-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-moz-keyframes line-spin-clockwise-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-o-keyframes line-spin-clockwise-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @keyframes line-spin-clockwise-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 .la-line-spin-clockwise-fade,
 .la-line-spin-clockwise-fade>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-spin-clockwise-fade {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-spin-clockwise-fade.la-dark {
     color: #333
 }
 
 .la-line-spin-clockwise-fade>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-spin-clockwise-fade {
     width: 32px;
     height: 32px
 }
 
 .la-line-spin-clockwise-fade>div {
     position: absolute;
     width: 2px;
     height: 10px;
     margin: 2px;
     margin-top: -5px;
     margin-left: -1px;
     border-radius: 0;
     -webkit-animation: line-spin-clockwise-fade 1s infinite ease-in-out;
     -moz-animation: line-spin-clockwise-fade 1s infinite ease-in-out;
     -o-animation: line-spin-clockwise-fade 1s infinite ease-in-out;
     animation: line-spin-clockwise-fade 1s infinite ease-in-out
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(1) {
     top: 15%;
     left: 50%;
     -webkit-transform: rotate(0deg);
     -moz-transform: rotate(0deg);
     -ms-transform: rotate(0deg);
     -o-transform: rotate(0deg);
     transform: rotate(0deg);
     -webkit-animation-delay: -.875s;
     -moz-animation-delay: -.875s;
     -o-animation-delay: -.875s;
     animation-delay: -.875s
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(2) {
     top: 25.2512626585%;
     left: 74.7487373415%;
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
     -webkit-animation-delay: -.75s;
     -moz-animation-delay: -.75s;
     -o-animation-delay: -.75s;
     animation-delay: -.75s
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(3) {
     top: 50%;
     left: 85%;
     -webkit-transform: rotate(90deg);
     -moz-transform: rotate(90deg);
     -ms-transform: rotate(90deg);
     -o-transform: rotate(90deg);
     transform: rotate(90deg);
     -webkit-animation-delay: -.625s;
     -moz-animation-delay: -.625s;
     -o-animation-delay: -.625s;
     animation-delay: -.625s
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(4) {
     top: 74.7487373415%;
     left: 74.7487373415%;
     -webkit-transform: rotate(135deg);
     -moz-transform: rotate(135deg);
     -ms-transform: rotate(135deg);
     -o-transform: rotate(135deg);
     transform: rotate(135deg);
     -webkit-animation-delay: -.5s;
     -moz-animation-delay: -.5s;
     -o-animation-delay: -.5s;
     animation-delay: -.5s
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(5) {
     top: 84.9999999974%;
     left: 50.0000000004%;
     -webkit-transform: rotate(180deg);
     -moz-transform: rotate(180deg);
     -ms-transform: rotate(180deg);
     -o-transform: rotate(180deg);
     transform: rotate(180deg);
     -webkit-animation-delay: -.375s;
     -moz-animation-delay: -.375s;
     -o-animation-delay: -.375s;
     animation-delay: -.375s
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(6) {
     top: 74.7487369862%;
     left: 25.2512627193%;
     -webkit-transform: rotate(225deg);
     -moz-transform: rotate(225deg);
     -ms-transform: rotate(225deg);
     -o-transform: rotate(225deg);
     transform: rotate(225deg);
     -webkit-animation-delay: -.25s;
     -moz-animation-delay: -.25s;
     -o-animation-delay: -.25s;
     animation-delay: -.25s
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(7) {
     top: 49.9999806189%;
     left: 15.0000039834%;
     -webkit-transform: rotate(270deg);
     -moz-transform: rotate(270deg);
     -ms-transform: rotate(270deg);
     -o-transform: rotate(270deg);
     transform: rotate(270deg);
     -webkit-animation-delay: -.125s;
     -moz-animation-delay: -.125s;
     -o-animation-delay: -.125s;
     animation-delay: -.125s
 }
 
 .la-line-spin-clockwise-fade>div:nth-child(8) {
     top: 25.2506949798%;
     left: 25.2513989292%;
     -webkit-transform: rotate(315deg);
     -moz-transform: rotate(315deg);
     -ms-transform: rotate(315deg);
     -o-transform: rotate(315deg);
     transform: rotate(315deg);
     -webkit-animation-delay: 0s;
     -moz-animation-delay: 0s;
     -o-animation-delay: 0s;
     animation-delay: 0s
 }
 
 .la-line-spin-clockwise-fade.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-line-spin-clockwise-fade.la-sm>div {
     width: 1px;
     height: 4px;
     margin-top: -2px;
     margin-left: 0
 }
 
 .la-line-spin-clockwise-fade.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-line-spin-clockwise-fade.la-2x>div {
     width: 4px;
     height: 20px;
     margin-top: -10px;
     margin-left: -2px
 }
 
 .la-line-spin-clockwise-fade.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-line-spin-clockwise-fade.la-3x>div {
     width: 6px;
     height: 30px;
     margin-top: -15px;
     margin-left: -3px
 }
 
 @-webkit-keyframes line-spin-clockwise-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-moz-keyframes line-spin-clockwise-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-o-keyframes line-spin-clockwise-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @keyframes line-spin-clockwise-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 .la-line-spin-fade-rotating,
 .la-line-spin-fade-rotating>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-spin-fade-rotating {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-spin-fade-rotating.la-dark {
     color: #333
 }
 
 .la-line-spin-fade-rotating>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-spin-fade-rotating {
     width: 32px;
     height: 32px;
     -webkit-animation: ball-spin-fade-rotating-rotate 6s infinite linear;
     -moz-animation: ball-spin-fade-rotating-rotate 6s infinite linear;
     -o-animation: ball-spin-fade-rotating-rotate 6s infinite linear;
     animation: ball-spin-fade-rotating-rotate 6s infinite linear
 }
 
 .la-line-spin-fade-rotating>div {
     position: absolute;
     width: 2px;
     height: 10px;
     margin: 2px;
     margin-top: -5px;
     margin-left: -1px;
     border-radius: 0;
     -webkit-animation: line-spin-fade-rotating 1s infinite ease-in-out;
     -moz-animation: line-spin-fade-rotating 1s infinite ease-in-out;
     -o-animation: line-spin-fade-rotating 1s infinite ease-in-out;
     animation: line-spin-fade-rotating 1s infinite ease-in-out
 }
 
 .la-line-spin-fade-rotating>div:nth-child(1) {
     top: 15%;
     left: 50%;
     -webkit-transform: rotate(0deg);
     -moz-transform: rotate(0deg);
     -ms-transform: rotate(0deg);
     -o-transform: rotate(0deg);
     transform: rotate(0deg);
     -webkit-animation-delay: -1.125s;
     -moz-animation-delay: -1.125s;
     -o-animation-delay: -1.125s;
     animation-delay: -1.125s
 }
 
 .la-line-spin-fade-rotating>div:nth-child(2) {
     top: 25.2512626585%;
     left: 74.7487373415%;
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
     -webkit-animation-delay: -1.25s;
     -moz-animation-delay: -1.25s;
     -o-animation-delay: -1.25s;
     animation-delay: -1.25s
 }
 
 .la-line-spin-fade-rotating>div:nth-child(3) {
     top: 50%;
     left: 85%;
     -webkit-transform: rotate(90deg);
     -moz-transform: rotate(90deg);
     -ms-transform: rotate(90deg);
     -o-transform: rotate(90deg);
     transform: rotate(90deg);
     -webkit-animation-delay: -1.375s;
     -moz-animation-delay: -1.375s;
     -o-animation-delay: -1.375s;
     animation-delay: -1.375s
 }
 
 .la-line-spin-fade-rotating>div:nth-child(4) {
     top: 74.7487373415%;
     left: 74.7487373415%;
     -webkit-transform: rotate(135deg);
     -moz-transform: rotate(135deg);
     -ms-transform: rotate(135deg);
     -o-transform: rotate(135deg);
     transform: rotate(135deg);
     -webkit-animation-delay: -1.5s;
     -moz-animation-delay: -1.5s;
     -o-animation-delay: -1.5s;
     animation-delay: -1.5s
 }
 
 .la-line-spin-fade-rotating>div:nth-child(5) {
     top: 84.9999999974%;
     left: 50.0000000004%;
     -webkit-transform: rotate(180deg);
     -moz-transform: rotate(180deg);
     -ms-transform: rotate(180deg);
     -o-transform: rotate(180deg);
     transform: rotate(180deg);
     -webkit-animation-delay: -1.625s;
     -moz-animation-delay: -1.625s;
     -o-animation-delay: -1.625s;
     animation-delay: -1.625s
 }
 
 .la-line-spin-fade-rotating>div:nth-child(6) {
     top: 74.7487369862%;
     left: 25.2512627193%;
     -webkit-transform: rotate(225deg);
     -moz-transform: rotate(225deg);
     -ms-transform: rotate(225deg);
     -o-transform: rotate(225deg);
     transform: rotate(225deg);
     -webkit-animation-delay: -1.75s;
     -moz-animation-delay: -1.75s;
     -o-animation-delay: -1.75s;
     animation-delay: -1.75s
 }
 
 .la-line-spin-fade-rotating>div:nth-child(7) {
     top: 49.9999806189%;
     left: 15.0000039834%;
     -webkit-transform: rotate(270deg);
     -moz-transform: rotate(270deg);
     -ms-transform: rotate(270deg);
     -o-transform: rotate(270deg);
     transform: rotate(270deg);
     -webkit-animation-delay: -1.875s;
     -moz-animation-delay: -1.875s;
     -o-animation-delay: -1.875s;
     animation-delay: -1.875s
 }
 
 .la-line-spin-fade-rotating>div:nth-child(8) {
     top: 25.2506949798%;
     left: 25.2513989292%;
     -webkit-transform: rotate(315deg);
     -moz-transform: rotate(315deg);
     -ms-transform: rotate(315deg);
     -o-transform: rotate(315deg);
     transform: rotate(315deg);
     -webkit-animation-delay: -2s;
     -moz-animation-delay: -2s;
     -o-animation-delay: -2s;
     animation-delay: -2s
 }
 
 .la-line-spin-fade-rotating.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-line-spin-fade-rotating.la-sm>div {
     width: 1px;
     height: 4px;
     margin-top: -2px;
     margin-left: 0
 }
 
 .la-line-spin-fade-rotating.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-line-spin-fade-rotating.la-2x>div {
     width: 4px;
     height: 20px;
     margin-top: -10px;
     margin-left: -2px
 }
 
 .la-line-spin-fade-rotating.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-line-spin-fade-rotating.la-3x>div {
     width: 6px;
     height: 30px;
     margin-top: -15px;
     margin-left: -3px
 }
 
 @-webkit-keyframes ball-spin-fade-rotating-rotate {
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes ball-spin-fade-rotating-rotate {
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes ball-spin-fade-rotating-rotate {
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes ball-spin-fade-rotating-rotate {
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-webkit-keyframes line-spin-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-moz-keyframes line-spin-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-o-keyframes line-spin-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @keyframes line-spin-fade-rotating {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 .la-line-spin-fade,
 .la-line-spin-fade>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-line-spin-fade {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-line-spin-fade.la-dark {
     color: #333
 }
 
 .la-line-spin-fade>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-line-spin-fade {
     width: 32px;
     height: 32px
 }
 
 .la-line-spin-fade>div {
     position: absolute;
     width: 2px;
     height: 10px;
     margin: 2px;
     margin-top: -5px;
     margin-left: -1px;
     border-radius: 0;
     -webkit-animation: line-spin-fade 1s infinite ease-in-out;
     -moz-animation: line-spin-fade 1s infinite ease-in-out;
     -o-animation: line-spin-fade 1s infinite ease-in-out;
     animation: line-spin-fade 1s infinite ease-in-out
 }
 
 .la-line-spin-fade>div:nth-child(1) {
     top: 15%;
     left: 50%;
     -webkit-transform: rotate(0deg);
     -moz-transform: rotate(0deg);
     -ms-transform: rotate(0deg);
     -o-transform: rotate(0deg);
     transform: rotate(0deg);
     -webkit-animation-delay: -1.125s;
     -moz-animation-delay: -1.125s;
     -o-animation-delay: -1.125s;
     animation-delay: -1.125s
 }
 
 .la-line-spin-fade>div:nth-child(2) {
     top: 25.2512626585%;
     left: 74.7487373415%;
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
     -webkit-animation-delay: -1.25s;
     -moz-animation-delay: -1.25s;
     -o-animation-delay: -1.25s;
     animation-delay: -1.25s
 }
 
 .la-line-spin-fade>div:nth-child(3) {
     top: 50%;
     left: 85%;
     -webkit-transform: rotate(90deg);
     -moz-transform: rotate(90deg);
     -ms-transform: rotate(90deg);
     -o-transform: rotate(90deg);
     transform: rotate(90deg);
     -webkit-animation-delay: -1.375s;
     -moz-animation-delay: -1.375s;
     -o-animation-delay: -1.375s;
     animation-delay: -1.375s
 }
 
 .la-line-spin-fade>div:nth-child(4) {
     top: 74.7487373415%;
     left: 74.7487373415%;
     -webkit-transform: rotate(135deg);
     -moz-transform: rotate(135deg);
     -ms-transform: rotate(135deg);
     -o-transform: rotate(135deg);
     transform: rotate(135deg);
     -webkit-animation-delay: -1.5s;
     -moz-animation-delay: -1.5s;
     -o-animation-delay: -1.5s;
     animation-delay: -1.5s
 }
 
 .la-line-spin-fade>div:nth-child(5) {
     top: 84.9999999974%;
     left: 50.0000000004%;
     -webkit-transform: rotate(180deg);
     -moz-transform: rotate(180deg);
     -ms-transform: rotate(180deg);
     -o-transform: rotate(180deg);
     transform: rotate(180deg);
     -webkit-animation-delay: -1.625s;
     -moz-animation-delay: -1.625s;
     -o-animation-delay: -1.625s;
     animation-delay: -1.625s
 }
 
 .la-line-spin-fade>div:nth-child(6) {
     top: 74.7487369862%;
     left: 25.2512627193%;
     -webkit-transform: rotate(225deg);
     -moz-transform: rotate(225deg);
     -ms-transform: rotate(225deg);
     -o-transform: rotate(225deg);
     transform: rotate(225deg);
     -webkit-animation-delay: -1.75s;
     -moz-animation-delay: -1.75s;
     -o-animation-delay: -1.75s;
     animation-delay: -1.75s
 }
 
 .la-line-spin-fade>div:nth-child(7) {
     top: 49.9999806189%;
     left: 15.0000039834%;
     -webkit-transform: rotate(270deg);
     -moz-transform: rotate(270deg);
     -ms-transform: rotate(270deg);
     -o-transform: rotate(270deg);
     transform: rotate(270deg);
     -webkit-animation-delay: -1.875s;
     -moz-animation-delay: -1.875s;
     -o-animation-delay: -1.875s;
     animation-delay: -1.875s
 }
 
 .la-line-spin-fade>div:nth-child(8) {
     top: 25.2506949798%;
     left: 25.2513989292%;
     -webkit-transform: rotate(315deg);
     -moz-transform: rotate(315deg);
     -ms-transform: rotate(315deg);
     -o-transform: rotate(315deg);
     transform: rotate(315deg);
     -webkit-animation-delay: -2s;
     -moz-animation-delay: -2s;
     -o-animation-delay: -2s;
     animation-delay: -2s
 }
 
 .la-line-spin-fade.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-line-spin-fade.la-sm>div {
     width: 1px;
     height: 4px;
     margin-top: -2px;
     margin-left: 0
 }
 
 .la-line-spin-fade.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-line-spin-fade.la-2x>div {
     width: 4px;
     height: 20px;
     margin-top: -10px;
     margin-left: -2px
 }
 
 .la-line-spin-fade.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-line-spin-fade.la-3x>div {
     width: 6px;
     height: 30px;
     margin-top: -15px;
     margin-left: -3px
 }
 
 @-webkit-keyframes line-spin-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-moz-keyframes line-spin-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @-o-keyframes line-spin-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 @keyframes line-spin-fade {
     50% {
         opacity: .2
     }
     100% {
         opacity: 1
     }
 }
 
 .la-pacman,
 .la-pacman>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-pacman {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-pacman.la-dark {
     color: #333
 }
 
 .la-pacman>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-pacman {
     width: 32px;
     height: 32px
 }
 
 .la-pacman>div:nth-child(1),
 .la-pacman>div:nth-child(2) {
     width: 0;
     height: 0;
     background: transparent;
     border-style: solid;
     border-width: 16px;
     border-right-color: transparent;
     border-radius: 100%;
     -webkit-animation: pacman-rotate-half-up 0.5s 0s infinite;
     -moz-animation: pacman-rotate-half-up 0.5s 0s infinite;
     -o-animation: pacman-rotate-half-up 0.5s 0s infinite;
     animation: pacman-rotate-half-up 0.5s 0s infinite
 }
 
 .la-pacman>div:nth-child(2) {
     margin-top: -32px;
     -webkit-animation-name: pacman-rotate-half-down;
     -moz-animation-name: pacman-rotate-half-down;
     -o-animation-name: pacman-rotate-half-down;
     animation-name: pacman-rotate-half-down
 }
 
 .la-pacman>div:nth-child(3),
 .la-pacman>div:nth-child(4),
 .la-pacman>div:nth-child(5),
 .la-pacman>div:nth-child(6) {
     position: absolute;
     top: 50%;
     left: 200%;
     width: 8px;
     height: 8px;
     border-radius: 100%;
     opacity: 0;
     -webkit-animation: pacman-balls 2s 0s infinite linear;
     -moz-animation: pacman-balls 2s 0s infinite linear;
     -o-animation: pacman-balls 2s 0s infinite linear;
     animation: pacman-balls 2s 0s infinite linear
 }
 
 .la-pacman>div:nth-child(3) {
     -webkit-animation-delay: -1.44s;
     -moz-animation-delay: -1.44s;
     -o-animation-delay: -1.44s;
     animation-delay: -1.44s
 }
 
 .la-pacman>div:nth-child(4) {
     -webkit-animation-delay: -1.94s;
     -moz-animation-delay: -1.94s;
     -o-animation-delay: -1.94s;
     animation-delay: -1.94s
 }
 
 .la-pacman>div:nth-child(5) {
     -webkit-animation-delay: -2.44s;
     -moz-animation-delay: -2.44s;
     -o-animation-delay: -2.44s;
     animation-delay: -2.44s
 }
 
 .la-pacman>div:nth-child(6) {
     -webkit-animation-delay: -2.94s;
     -moz-animation-delay: -2.94s;
     -o-animation-delay: -2.94s;
     animation-delay: -2.94s
 }
 
 .la-pacman.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-pacman.la-sm>div:nth-child(1),
 .la-pacman.la-sm>div:nth-child(2) {
     border-width: 8px
 }
 
 .la-pacman.la-sm>div:nth-child(2) {
     margin-top: -16px
 }
 
 .la-pacman.la-sm>div:nth-child(3),
 .la-pacman.la-sm>div:nth-child(4),
 .la-pacman.la-sm>div:nth-child(5),
 .la-pacman.la-sm>div:nth-child(6) {
     width: 4px;
     height: 4px
 }
 
 .la-pacman.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-pacman.la-2x>div:nth-child(1),
 .la-pacman.la-2x>div:nth-child(2) {
     border-width: 32px
 }
 
 .la-pacman.la-2x>div:nth-child(2) {
     margin-top: -64px
 }
 
 .la-pacman.la-2x>div:nth-child(3),
 .la-pacman.la-2x>div:nth-child(4),
 .la-pacman.la-2x>div:nth-child(5),
 .la-pacman.la-2x>div:nth-child(6) {
     width: 16px;
     height: 16px
 }
 
 .la-pacman.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-pacman.la-3x>div:nth-child(1),
 .la-pacman.la-3x>div:nth-child(2) {
     border-width: 48px
 }
 
 .la-pacman.la-3x>div:nth-child(2) {
     margin-top: -96px
 }
 
 .la-pacman.la-3x>div:nth-child(3),
 .la-pacman.la-3x>div:nth-child(4),
 .la-pacman.la-3x>div:nth-child(5),
 .la-pacman.la-3x>div:nth-child(6) {
     width: 24px;
     height: 24px
 }
 
 @-webkit-keyframes pacman-rotate-half-up {
     0%,
     100% {
         -webkit-transform: rotate(270deg);
         transform: rotate(270deg)
     }
     50% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes pacman-rotate-half-up {
     0%,
     100% {
         -moz-transform: rotate(270deg);
         transform: rotate(270deg)
     }
     50% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes pacman-rotate-half-up {
     0%,
     100% {
         -o-transform: rotate(270deg);
         transform: rotate(270deg)
     }
     50% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes pacman-rotate-half-up {
     0%,
     100% {
         -webkit-transform: rotate(270deg);
         -moz-transform: rotate(270deg);
         -o-transform: rotate(270deg);
         transform: rotate(270deg)
     }
     50% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-webkit-keyframes pacman-rotate-half-down {
     0%,
     100% {
         -webkit-transform: rotate(90deg);
         transform: rotate(90deg)
     }
     50% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg)
     }
 }
 
 @-moz-keyframes pacman-rotate-half-down {
     0%,
     100% {
         -moz-transform: rotate(90deg);
         transform: rotate(90deg)
     }
     50% {
         -moz-transform: rotate(0deg);
         transform: rotate(0deg)
     }
 }
 
 @-o-keyframes pacman-rotate-half-down {
     0%,
     100% {
         -o-transform: rotate(90deg);
         transform: rotate(90deg)
     }
     50% {
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
 }
 
 @keyframes pacman-rotate-half-down {
     0%,
     100% {
         -webkit-transform: rotate(90deg);
         -moz-transform: rotate(90deg);
         -o-transform: rotate(90deg);
         transform: rotate(90deg)
     }
     50% {
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
 }
 
 @-webkit-keyframes pacman-balls {
     0% {
         left: 200%;
         opacity: 0;
         -webkit-transform: translateY(-50%);
         transform: translateY(-50%)
     }
     5% {
         opacity: .5
     }
     66% {
         opacity: 1
     }
     67% {
         opacity: 0
     }
     100% {
         left: 0;
         -webkit-transform: translateY(-50%);
         transform: translateY(-50%)
     }
 }
 
 @-moz-keyframes pacman-balls {
     0% {
         left: 200%;
         opacity: 0;
         -moz-transform: translateY(-50%);
         transform: translateY(-50%)
     }
     5% {
         opacity: .5
     }
     66% {
         opacity: 1
     }
     67% {
         opacity: 0
     }
     100% {
         left: 0;
         -moz-transform: translateY(-50%);
         transform: translateY(-50%)
     }
 }
 
 @-o-keyframes pacman-balls {
     0% {
         left: 200%;
         opacity: 0;
         -o-transform: translateY(-50%);
         transform: translateY(-50%)
     }
     5% {
         opacity: .5
     }
     66% {
         opacity: 1
     }
     67% {
         opacity: 0
     }
     100% {
         left: 0;
         -o-transform: translateY(-50%);
         transform: translateY(-50%)
     }
 }
 
 @keyframes pacman-balls {
     0% {
         left: 200%;
         opacity: 0;
         -webkit-transform: translateY(-50%);
         -moz-transform: translateY(-50%);
         -o-transform: translateY(-50%);
         transform: translateY(-50%)
     }
     5% {
         opacity: .5
     }
     66% {
         opacity: 1
     }
     67% {
         opacity: 0
     }
     100% {
         left: 0;
         -webkit-transform: translateY(-50%);
         -moz-transform: translateY(-50%);
         -o-transform: translateY(-50%);
         transform: translateY(-50%)
     }
 }
 
 .la-square-jelly-box,
 .la-square-jelly-box>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-square-jelly-box {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-square-jelly-box.la-dark {
     color: #333
 }
 
 .la-square-jelly-box>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-square-jelly-box {
     width: 32px;
     height: 32px
 }
 
 .la-square-jelly-box>div:nth-child(1),
 .la-square-jelly-box>div:nth-child(2) {
     position: absolute;
     left: 0;
     width: 100%
 }
 
 .la-square-jelly-box>div:nth-child(1) {
     top: -25%;
     z-index: 1;
     height: 100%;
     border-radius: 10%;
     -webkit-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
     -moz-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
     -o-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
     animation: square-jelly-box-animate 0.6s -0.1s linear infinite
 }
 
 .la-square-jelly-box>div:nth-child(2) {
     bottom: -9%;
     height: 10%;
     background: #000;
     border-radius: 50%;
     opacity: .2;
     -webkit-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
     -moz-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
     -o-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
     animation: square-jelly-box-shadow 0.6s -0.1s linear infinite
 }
 
 .la-square-jelly-box.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-square-jelly-box.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-square-jelly-box.la-3x {
     width: 96px;
     height: 96px
 }
 
 @-webkit-keyframes square-jelly-box-animate {
     17% {
         border-bottom-right-radius: 10%
     }
     25% {
         -webkit-transform: translateY(25%) rotate(22.5deg);
         transform: translateY(25%) rotate(22.5deg)
     }
     50% {
         border-bottom-right-radius: 100%;
         -webkit-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
         transform: translateY(50%) scale(1, 0.9) rotate(45deg)
     }
     75% {
         -webkit-transform: translateY(25%) rotate(67.5deg);
         transform: translateY(25%) rotate(67.5deg)
     }
     100% {
         -webkit-transform: translateY(0) rotate(90deg);
         transform: translateY(0) rotate(90deg)
     }
 }
 
 @-moz-keyframes square-jelly-box-animate {
     17% {
         border-bottom-right-radius: 10%
     }
     25% {
         -moz-transform: translateY(25%) rotate(22.5deg);
         transform: translateY(25%) rotate(22.5deg)
     }
     50% {
         border-bottom-right-radius: 100%;
         -moz-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
         transform: translateY(50%) scale(1, 0.9) rotate(45deg)
     }
     75% {
         -moz-transform: translateY(25%) rotate(67.5deg);
         transform: translateY(25%) rotate(67.5deg)
     }
     100% {
         -moz-transform: translateY(0) rotate(90deg);
         transform: translateY(0) rotate(90deg)
     }
 }
 
 @-o-keyframes square-jelly-box-animate {
     17% {
         border-bottom-right-radius: 10%
     }
     25% {
         -o-transform: translateY(25%) rotate(22.5deg);
         transform: translateY(25%) rotate(22.5deg)
     }
     50% {
         border-bottom-right-radius: 100%;
         -o-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
         transform: translateY(50%) scale(1, 0.9) rotate(45deg)
     }
     75% {
         -o-transform: translateY(25%) rotate(67.5deg);
         transform: translateY(25%) rotate(67.5deg)
     }
     100% {
         -o-transform: translateY(0) rotate(90deg);
         transform: translateY(0) rotate(90deg)
     }
 }
 
 @keyframes square-jelly-box-animate {
     17% {
         border-bottom-right-radius: 10%
     }
     25% {
         -webkit-transform: translateY(25%) rotate(22.5deg);
         -moz-transform: translateY(25%) rotate(22.5deg);
         -o-transform: translateY(25%) rotate(22.5deg);
         transform: translateY(25%) rotate(22.5deg)
     }
     50% {
         border-bottom-right-radius: 100%;
         -webkit-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
         -moz-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
         -o-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
         transform: translateY(50%) scale(1, 0.9) rotate(45deg)
     }
     75% {
         -webkit-transform: translateY(25%) rotate(67.5deg);
         -moz-transform: translateY(25%) rotate(67.5deg);
         -o-transform: translateY(25%) rotate(67.5deg);
         transform: translateY(25%) rotate(67.5deg)
     }
     100% {
         -webkit-transform: translateY(0) rotate(90deg);
         -moz-transform: translateY(0) rotate(90deg);
         -o-transform: translateY(0) rotate(90deg);
         transform: translateY(0) rotate(90deg)
     }
 }
 
 @-webkit-keyframes square-jelly-box-shadow {
     50% {
         -webkit-transform: scale(1.25, 1);
         transform: scale(1.25, 1)
     }
 }
 
 @-moz-keyframes square-jelly-box-shadow {
     50% {
         -moz-transform: scale(1.25, 1);
         transform: scale(1.25, 1)
     }
 }
 
 @-o-keyframes square-jelly-box-shadow {
     50% {
         -o-transform: scale(1.25, 1);
         transform: scale(1.25, 1)
     }
 }
 
 @keyframes square-jelly-box-shadow {
     50% {
         -webkit-transform: scale(1.25, 1);
         -moz-transform: scale(1.25, 1);
         -o-transform: scale(1.25, 1);
         transform: scale(1.25, 1)
     }
 }
 
 .la-square-loader,
 .la-square-loader>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-square-loader {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-square-loader.la-dark {
     color: #333
 }
 
 .la-square-loader>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-square-loader {
     width: 32px;
     height: 32px
 }
 
 .la-square-loader>div {
     width: 100%;
     height: 100%;
     background: transparent;
     border-width: 2px;
     border-radius: 0;
     -webkit-animation: square-loader 2s infinite ease;
     -moz-animation: square-loader 2s infinite ease;
     -o-animation: square-loader 2s infinite ease;
     animation: square-loader 2s infinite ease
 }
 
 .la-square-loader>div:after {
     display: inline-block;
     width: 100%;
     vertical-align: top;
     content: "";
     background-color: currentColor;
     -webkit-animation: square-loader-inner 2s infinite ease-in;
     -moz-animation: square-loader-inner 2s infinite ease-in;
     -o-animation: square-loader-inner 2s infinite ease-in;
     animation: square-loader-inner 2s infinite ease-in
 }
 
 .la-square-loader.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-square-loader.la-sm>div {
     border-width: 1px
 }
 
 .la-square-loader.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-square-loader.la-2x>div {
     border-width: 4px
 }
 
 .la-square-loader.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-square-loader.la-3x>div {
     border-width: 6px
 }
 
 @-webkit-keyframes square-loader {
     0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     25% {
         -webkit-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     50% {
         -webkit-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     75% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes square-loader {
     0% {
         -moz-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     25% {
         -moz-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     50% {
         -moz-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     75% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes square-loader {
     0% {
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     25% {
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     50% {
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     75% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes square-loader {
     0% {
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     25% {
         -webkit-transform: rotate(180deg);
         -moz-transform: rotate(180deg);
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     50% {
         -webkit-transform: rotate(180deg);
         -moz-transform: rotate(180deg);
         -o-transform: rotate(180deg);
         transform: rotate(180deg)
     }
     75% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-webkit-keyframes square-loader-inner {
     0% {
         height: 0
     }
     25% {
         height: 0
     }
     50% {
         height: 100%
     }
     75% {
         height: 100%
     }
     100% {
         height: 0
     }
 }
 
 @-moz-keyframes square-loader-inner {
     0% {
         height: 0
     }
     25% {
         height: 0
     }
     50% {
         height: 100%
     }
     75% {
         height: 100%
     }
     100% {
         height: 0
     }
 }
 
 @-o-keyframes square-loader-inner {
     0% {
         height: 0
     }
     25% {
         height: 0
     }
     50% {
         height: 100%
     }
     75% {
         height: 100%
     }
     100% {
         height: 0
     }
 }
 
 @keyframes square-loader-inner {
     0% {
         height: 0
     }
     25% {
         height: 0
     }
     50% {
         height: 100%
     }
     75% {
         height: 100%
     }
     100% {
         height: 0
     }
 }
 
 .la-square-spin,
 .la-square-spin>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-square-spin {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-square-spin.la-dark {
     color: #333
 }
 
 .la-square-spin>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-square-spin {
     width: 32px;
     height: 32px
 }
 
 .la-square-spin>div {
     width: 100%;
     height: 100%;
     border-radius: 0;
     -webkit-animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -moz-animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -o-animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite
 }
 
 .la-square-spin.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-square-spin.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-square-spin.la-3x {
     width: 96px;
     height: 96px
 }
 
 @-webkit-keyframes square-spin {
     0% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(360deg);
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 @-moz-keyframes square-spin {
     0% {
         -moz-transform: perspective(100px) rotateX(0) rotateY(0);
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(0);
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         -moz-transform: perspective(100px) rotateX(0) rotateY(180deg);
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         -moz-transform: perspective(100px) rotateX(0) rotateY(360deg);
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 @-o-keyframes square-spin {
     0% {
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 @keyframes square-spin {
     0% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
         -moz-transform: perspective(100px) rotateX(0) rotateY(0);
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(0);
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
         -moz-transform: perspective(100px) rotateX(0) rotateY(180deg);
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(360deg);
         -moz-transform: perspective(100px) rotateX(0) rotateY(360deg);
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 .la-timer,
 .la-timer>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-timer {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-timer.la-dark {
     color: #333
 }
 
 .la-timer>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-timer {
     width: 32px;
     height: 32px
 }
 
 .la-timer>div {
     width: 32px;
     height: 32px;
     background: transparent;
     border-width: 2px;
     border-radius: 100%
 }
 
 .la-timer>div:before,
 .la-timer>div:after {
     position: absolute;
     top: 14px;
     left: 14px;
     display: block;
     width: 2px;
     margin-top: -1px;
     margin-left: -1px;
     content: "";
     background: currentColor;
     border-radius: 2px;
     -webkit-transform-origin: 1px 1px 0;
     -moz-transform-origin: 1px 1px 0;
     -ms-transform-origin: 1px 1px 0;
     -o-transform-origin: 1px 1px 0;
     transform-origin: 1px 1px 0;
     -webkit-animation: timer-loader 1250ms infinite linear;
     -moz-animation: timer-loader 1250ms infinite linear;
     -o-animation: timer-loader 1250ms infinite linear;
     animation: timer-loader 1250ms infinite linear;
     -webkit-animation-delay: -625ms;
     -moz-animation-delay: -625ms;
     -o-animation-delay: -625ms;
     animation-delay: -625ms
 }
 
 .la-timer>div:before {
     height: 12px
 }
 
 .la-timer>div:after {
     height: 8px;
     -webkit-animation-duration: 15s;
     -moz-animation-duration: 15s;
     -o-animation-duration: 15s;
     animation-duration: 15s;
     -webkit-animation-delay: -7.5s;
     -moz-animation-delay: -7.5s;
     -o-animation-delay: -7.5s;
     animation-delay: -7.5s
 }
 
 .la-timer.la-sm {
     width: 16px;
     height: 16px
 }
 
 .la-timer.la-sm>div {
     width: 16px;
     height: 16px;
     border-width: 1px
 }
 
 .la-timer.la-sm>div:before,
 .la-timer.la-sm>div:after {
     top: 7px;
     left: 7px;
     width: 1px;
     margin-top: -.5px;
     margin-left: -.5px;
     border-radius: 1px;
     -webkit-transform-origin: 0.5px 0.5px 0;
     -moz-transform-origin: 0.5px 0.5px 0;
     -ms-transform-origin: 0.5px 0.5px 0;
     -o-transform-origin: 0.5px 0.5px 0;
     transform-origin: 0.5px 0.5px 0
 }
 
 .la-timer.la-sm>div:before {
     height: 6px
 }
 
 .la-timer.la-sm>div:after {
     height: 4px
 }
 
 .la-timer.la-2x {
     width: 64px;
     height: 64px
 }
 
 .la-timer.la-2x>div {
     width: 64px;
     height: 64px;
     border-width: 4px
 }
 
 .la-timer.la-2x>div:before,
 .la-timer.la-2x>div:after {
     top: 28px;
     left: 28px;
     width: 4px;
     margin-top: -2px;
     margin-left: -2px;
     border-radius: 4px;
     -webkit-transform-origin: 2px 2px 0;
     -moz-transform-origin: 2px 2px 0;
     -ms-transform-origin: 2px 2px 0;
     -o-transform-origin: 2px 2px 0;
     transform-origin: 2px 2px 0
 }
 
 .la-timer.la-2x>div:before {
     height: 24px
 }
 
 .la-timer.la-2x>div:after {
     height: 16px
 }
 
 .la-timer.la-3x {
     width: 96px;
     height: 96px
 }
 
 .la-timer.la-3x>div {
     width: 96px;
     height: 96px;
     border-width: 6px
 }
 
 .la-timer.la-3x>div:before,
 .la-timer.la-3x>div:after {
     top: 42px;
     left: 42px;
     width: 6px;
     margin-top: -3px;
     margin-left: -3px;
     border-radius: 6px;
     -webkit-transform-origin: 3px 3px 0;
     -moz-transform-origin: 3px 3px 0;
     -ms-transform-origin: 3px 3px 0;
     -o-transform-origin: 3px 3px 0;
     transform-origin: 3px 3px 0
 }
 
 .la-timer.la-3x>div:before {
     height: 36px
 }
 
 .la-timer.la-3x>div:after {
     height: 24px
 }
 
 @-webkit-keyframes timer-loader {
     0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-moz-keyframes timer-loader {
     0% {
         -moz-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -moz-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @-o-keyframes timer-loader {
     0% {
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 @keyframes timer-loader {
     0% {
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -o-transform: rotate(0deg);
         transform: rotate(0deg)
     }
     100% {
         -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
         -o-transform: rotate(360deg);
         transform: rotate(360deg)
     }
 }
 
 .la-triangle-skew-spin,
 .la-triangle-skew-spin>div {
     position: relative;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box
 }
 
 .la-triangle-skew-spin {
     display: block;
     font-size: 0;
     color: #fff
 }
 
 .la-triangle-skew-spin.la-dark {
     color: #333
 }
 
 .la-triangle-skew-spin>div {
     display: inline-block;
     float: none;
     background-color: currentColor;
     border: 0 solid currentColor
 }
 
 .la-triangle-skew-spin {
     width: 32px;
     height: 16px
 }
 
 .la-triangle-skew-spin>div {
     width: 0;
     height: 0;
     background: transparent;
     border: none;
     border-style: solid;
     border-width: 16px;
     border-top-width: 0;
     border-right-color: transparent;
     border-left-color: transparent;
     -webkit-animation: triangle-skew-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -moz-animation: triangle-skew-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     -o-animation: triangle-skew-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
     animation: triangle-skew-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite
 }
 
 .la-triangle-skew-spin.la-sm {
     width: 16px;
     height: 8px
 }
 
 .la-triangle-skew-spin.la-sm>div {
     border-width: 8px;
     border-top-width: 0
 }
 
 .la-triangle-skew-spin.la-2x {
     width: 64px;
     height: 32px
 }
 
 .la-triangle-skew-spin.la-2x>div {
     border-width: 32px;
     border-top-width: 0
 }
 
 .la-triangle-skew-spin.la-3x {
     width: 96px;
     height: 48px
 }
 
 .la-triangle-skew-spin.la-3x>div {
     border-width: 48px;
     border-top-width: 0
 }
 
 @-webkit-keyframes triangle-skew-spin {
     0% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(360deg);
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 @-moz-keyframes triangle-skew-spin {
     0% {
         -moz-transform: perspective(100px) rotateX(0) rotateY(0);
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(0);
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         -moz-transform: perspective(100px) rotateX(0) rotateY(180deg);
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         -moz-transform: perspective(100px) rotateX(0) rotateY(360deg);
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 @-o-keyframes triangle-skew-spin {
     0% {
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 @keyframes triangle-skew-spin {
     0% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
         -moz-transform: perspective(100px) rotateX(0) rotateY(0);
         transform: perspective(100px) rotateX(0) rotateY(0)
     }
     25% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(0);
         transform: perspective(100px) rotateX(180deg) rotateY(0)
     }
     50% {
         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         -moz-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
     }
     75% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
         -moz-transform: perspective(100px) rotateX(0) rotateY(180deg);
         transform: perspective(100px) rotateX(0) rotateY(180deg)
     }
     100% {
         -webkit-transform: perspective(100px) rotateX(0) rotateY(360deg);
         -moz-transform: perspective(100px) rotateX(0) rotateY(360deg);
         transform: perspective(100px) rotateX(0) rotateY(360deg)
     }
 }
 
 .busy-black-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999 !important;
}

.busy-black-overlay>div {
    top: 50%;
    left: 50%;
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
}

.busy-black-overlay>p {
    top: calc(50% + 40px);
    left: 50%;
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    font-family: sans-serif;
    font-weight: 100;
    font-size: 1.4rem;
}`;

@Component({
    selector: 'ion-busy-indicator',
    templateUrl: 'ion-busy-indicator.component.html',
    styles: [BUSY_INDICATOR_STYLES]
})

export class IonBusyIndicatorComponent implements OnDestroy, OnInit, OnChanges {
    /**
       * To set backdrop color('rgba(51,51,51,0.8)')
       * Only supports RGBA color format
       * @memberof NgxSpinnerComponent
       */
    @Input() bdColor = 'rgba(51,51,51,0.8)';

    /**
     * To set spinner size
     *
     * @memberof NgxSpinnerComponent
     */
    @Input() size = '';

    /**
     * To set spinner color('#fff')
     *
     * @memberof NgxSpinnerComponent
     */
    @Input() color = '#fff';

    /**
     * To set type of spinner
     *
     * @memberof NgxSpinnerComponent
     */
    @Input() type: string;
    /**
     * To set loading text(false)
     *
     * @memberof NgxSpinnerComponent
     */
    @Input() loadingText = false;

    /**
     * Class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    spinnerClass: string;

    /**
     * Flag to show/hide spinner
     *
     * @memberof NgxSpinnerComponent
     */
    get showSpinner() {
        return true;
    };

    /**
     * Subscription variable for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    spinnerSubscription: Subscription;

    /**
     * Array for spinner divs
     *
     * @memberof NgxSpinnerComponent
     */
    divArray: Array<number> = [];

    /**
     * Counter for div
     *
     * @memberof NgxSpinnerComponent
     */
    divCount = 0;

    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    constructor() { }

    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnInit() {
        this.onInputChange();
    }

    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnChanges(changes: SimpleChanges) {
        const typeChange: SimpleChange = changes.type;
        const sizeChange: SimpleChange = changes.size;

        if (typeChange) {
            if (typeof typeChange.currentValue !== 'undefined' && typeChange.currentValue !== typeChange.previousValue) {
                if (typeChange.currentValue !== '') {
                    this.type = typeChange.currentValue;
                    this.onInputChange();
                }
            }
        }

        if (sizeChange) {
            if (typeof sizeChange.currentValue !== 'undefined' && sizeChange.currentValue !== sizeChange.previousValue) {
                if (sizeChange.currentValue !== '') {
                    this.size = sizeChange.currentValue;
                    this.onInputChange();
                }
            }
        }
    }

    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    getClass(type = 'ball-scale-multiple', size = 'large'): string {
        this.divCount = LOADERS[type];
        this.divArray = Array(this.divCount).fill(0).map((x, i) => i);
        let sizeClass = '';
        switch (size.toLowerCase()) {
            case 'small':
                sizeClass = 'la-sm';
                break;
            case 'medium':
                sizeClass = 'la-2x';
                break;
            case 'large':
                sizeClass = 'la-3x';
                break;
            default:
                break;
        }
        return 'la-' + type + ' ' + sizeClass;
    }

    /**
     * After input variables chnage event
     *
     * @memberof NgxSpinnerComponent
     */
    onInputChange() {
        this.spinnerClass = this.getClass(this.type, this.size);
    }

    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnDestroy() {
        
    }
}