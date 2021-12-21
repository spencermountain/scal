const toJSON = function (res, obj) {
  let json = res.map(days => {
    return days.map(d => {
      const day = d.day()
      return {
        empty: !d.isSame('month', obj.start),
        iso: d.format('iso-short'),
        date: d.date(),
        selected: d.isBetween(obj.start, obj.end, true),
        weekend: day === 6 || day === 0
      }
    })
  })
  return json
  // console.log(JSON.stringify(json, null, 2))
}
export default toJSON