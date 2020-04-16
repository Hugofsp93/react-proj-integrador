const LOCAL_STORAGE_INSTITUTION = "@web-institutions"

const getAll = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_INSTITUTION) || "[]")
}

const find = (id, db) => {
  const institutions = db || getAll()
  return institutions.find(item => item.id === id) || {}
}

const findIndex = (id, db) => {
  const institutions = db || getAll()
  return institutions.findIndex(item => item.id === id)
}
/**
 * @returns {true} case insert return object
 * @returns {false} case remove return object null
 * @param {*} institution 
 */
const insertOrRemove = (institution) => {
  const all = getAll()
  const institutionIndex = findIndex(institution.id, all)
  if (institutionIndex >= 0)
    all.splice(institutionIndex, 1)
  else
    all.push(institution)

  localStorage.setItem(LOCAL_STORAGE_INSTITUTION, JSON.stringify(all))

  return (institutionIndex >= 0) ? {} : institution
}

export default { getAll, find, insertOrRemove }