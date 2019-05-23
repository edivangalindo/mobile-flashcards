import uuid from 'uuid/v4';

const initialState = {
  one: {
    id: 'one',
    title: 'React',
    questions: [
      {
        id: uuid(),
        question: 'React is based on imperative programming',
        answer: false
      },
      {
        id: uuid(),
        question: 'React can render on client-side and server-side',
        answer: true
      },
      {
        id: uuid(),
        question: 'React was started by the developers at Twitter',
        answer: false
      }
    ]
  },
  two: {
    id: 'two',
    title: 'Udacity',
    questions: [
      {
        id: uuid(),
        question: 'Udacity is based in California',
        answer: true
      },
      {
        id: uuid(),
        question: 'Udacity does not offer free courses',
        answer: false
      },
      {
        id: uuid(),
        question: 'Udacity is awesome',
        answer: true
      }
    ]
  }
};

export default initialState;
