import React from 'react'

import View from '../components/viewSkeleton/viewSkeleton'
import InputField from '../components/inputField/inputField'
import Gap from '../components/gap/gap'
import RadioButtonGroup from '../components/radioButtonGroup/radioButtonGroup'
import Columns from '../components/columns/columns'

const CreateChallenge = () => (
  <View
    title='Create new challenge'
    actions={{
      left: {
        to: '..',
        text: 'Back'
      }
    }}
  >
    <InputField
      id='newChallengeTitle'
      label='Title'
      placeholder='e.g. Smoke less'
    />
    <Gap size='big' />
    <Columns gapSize='big'>
      <div>
        <InputField
          id='newChallengeStartDate'
          label='Start date'
          type='date'
        />
      </div>
      <div>
        <InputField
          id='newChallengeEndDate'
          label='End date'
          type='date'
        />
      </div>
    </Columns>
    <Gap size='big' />
    <RadioButtonGroup
      options={[
        {label: 'Target', selected: true},
        {label: 'Limit'},
        {label: 'Track'}
      ]}
    />
  </View>
)
export default CreateChallenge
