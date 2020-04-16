const path = (name) => {
  const isProduction = window.location.origin === "https://hugofsp93.github.io"
  const prefix = isProduction ? "https://hugofsp93.github.io/react-proj-integrador/" : ''
  return `${prefix}/images/${name}`
}

export default { path }