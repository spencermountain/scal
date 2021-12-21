const getWeek = function (d) {
  let start = d.startOf('week')
  let end = start.endOf('week')
  let days = [start].concat(start.every('day', end))
  // days.forEach(d => console.log('  ' + d.format('nice-day') + d.day()))
  return days
}

// create all day objects
const calculate = function (res) {
  let date = res.start.clone()
  let start = date.startOf('month')
  let end = date.endOf('month')
  let weeks = [getWeek(start)]
  start.every('week', end).forEach(mon => {
    // console.log('---' + mon.format('nice-day') + '---')
    weeks.push(getWeek(mon))
  })
  return weeks
}

export default calculate