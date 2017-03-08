import * as types from './types'

export function openSideMenu() {
  return {
    type: types.SIDE_MENU_OPEN,
    data: true,
  }
}

export function closeSideMenu() {
  return {
    type: types.SIDE_MENU_CLOSE,
    data: false,
  }
}
