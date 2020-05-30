import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import {
  createChallenge,
  getChallenges,
  updateChallenge,
  deleteChallenge,
  createRecord
} from './db'
import * as serviceWorker from './serviceWorker'

import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

const testDb = async () => {
  const firstChallengeId = await createChallenge({
    title: 'Test title 1',
    type: 'minimum',
    startTimestamp: Date.now(),
    endTimestamp: null,
    targetValue: 1,
    scheduling: {
      type: "weekly",
      times: 3
    },
    unit: {
      singular: "time",
      plural: "times"
    }
  })

  const lastChallengeId = await createChallenge({
    title: 'Test title 2',
    type: 'minimum',
    startTimestamp: Date.now(),
    endTimestamp: null,
    targetValue: 1,
    scheduling: {
      type: "weekly",
      times: 3
    },
    unit: {
      singular: "time",
      plural: "times"
    }
  })

  await updateChallenge({
    id: lastChallengeId,
    title: 'Updated test title 2',
    type: 'minimum',
    startTimestamp: Date.now(),
    endTimestamp: null,
    targetValue: 1,
    scheduling: {
      type: "weekly",
      times: 3
    },
    unit: {
      singular: "time",
      plural: "times"
    }
  })

  await createRecord({
    challengeId: lastChallengeId,
    timestamp: Date.now(),
    value: Date.now()
  })

  await createRecord({
    challengeId: lastChallengeId,
    timestamp: Date.now() + 1234,
    value: Date.now() + 2345
  })

  await createRecord({
    challengeId: lastChallengeId,
    timestamp: Date.now() + 1234,
    value: Date.now() + 2345
  })

  await deleteChallenge({id: firstChallengeId})

  const challenges = await getChallenges()
  console.log({challenges})
}

testDb()
