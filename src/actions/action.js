export function changeActiveMenu(menuType, activeItem) {
  return {
    type: 'CHANGE_MENU',
    payload: {
      menuType: menuType,
      activeItem: activeItem
    }
  };
}