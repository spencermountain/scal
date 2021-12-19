const toJSON = function (res, obj) {
  let json = res.map(days => {
    return days.map(d => {
      const day = d.day()
      return {
        empty: !d.isSame('month', obj.start),
        iso: d.format('iso-short'),
        selected: d.isBetween(obj.start, obj.end),
        weekend: day === 5 || day === 6
      }
    })
  })
  console.log(JSON.stringify(json, null, 2))
}
export default toJSON