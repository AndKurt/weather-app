import { select, SelectEffect } from 'redux-saga/effects'

import { RootState } from '@store/index'

export const selectState = <T>(selector: (s: RootState) => T): SelectEffect => select(selector)
