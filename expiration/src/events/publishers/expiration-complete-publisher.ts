import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@braianmg-ticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
