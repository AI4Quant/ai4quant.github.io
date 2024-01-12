'use strict';

new TypeIt('.home__title--strong', {loop: true, speed: 80})
    .move(-11)
    .type("Amazing ")
    .pause(1000)
    .move(null, {to: 'END'})
    .delete()
    .type("Front-end Enginner")
    .move(-9)
    .delete(9)
    .type("Back-end")
    .pause(1000)
    .delete(9)
    .type("Full-stack")
    .pause(1000)
    .move(9)
    .delete()
    .go();