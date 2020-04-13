const classNames = (classes) => {
  return classes.filter(e => !!e)
    .join(' ')
}

export default { classNames }