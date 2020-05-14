import {IMember} from '../IMember';

export interface ITopic {
  name: string;
  grades: number[];
}

export interface ICoach extends IMember {
  coachXP: number;
  introduction: string;
  availability: string;
  coachingTopics: ITopic[];
  topicYear: number;
}
