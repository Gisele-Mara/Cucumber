import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

function isItFriday(today: string) {
  // We'll leave the implementation blank for now
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
    // return 'pending';
  });

  When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
  });

  Then('I should be told {string}', function (expectedAnswer: string) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
  });

  Given('today is Friday', function () {
    this.today = 'Friday';
  });
